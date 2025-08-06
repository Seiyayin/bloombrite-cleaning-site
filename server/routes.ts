import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { submitEmployeeApplication } from "./routes/employeeApplication";
import { parseResumeText } from "./routes/resumeParser";

export async function registerRoutes(app: Express): Promise<Server> {
  // Explicitly serve static sitemap.xml and robots.txt without interference
  app.get('/sitemap.xml', (req, res) => {
    res.sendFile('sitemap.xml', { root: './public' });
  });
  
  app.get('/robots.txt', (req, res) => {
    res.sendFile('robots.txt', { root: './public' });
  });

  // API routes for contact form submission, quote requests, etc.
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;
      
      // Log the contact form submission (in a real app, you'd save to a database or send an email)
      console.log('Contact form submission:', {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date()
      });
      
      res.status(200).json({ success: true, message: 'Contact form submitted successfully' });
    } catch (error) {
      console.error('Error processing contact form submission:', error);
      res.status(500).json({ success: false, message: 'Failed to process your request' });
    }
  });

  app.post('/api/quote', async (req, res) => {
    try {
      const { 
        name, 
        email, 
        phone, 
        service, 
        address, 
        city, 
        zip, 
        message, 
        preferredDate, 
        preferredTime 
      } = req.body;
      
      // Log the quote request
      console.log('Quote request submission:', {
        name,
        email,
        phone,
        service,
        address,
        city,
        zip,
        message,
        preferredDate,
        preferredTime,
        timestamp: new Date()
      });
      
      // Here you would forward this data to Jobber API
      // When you are ready to integrate with Jobber, you'll make an API call to their service
      // For example:
      /*
      const jobberResponse = await fetch('https://api.getjobber.com/api/v2/clients', {
        method: 'POST',
        headers: {
          'X-API-KEY': process.env.JOBBER_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client: {
            name: name,
            email: email,
            phone: phone,
            address: {
              street: address,
              city: city,
              postal_code: zip
            }
          }
        })
      });
      */
      
      // For now, we'll just return success and wait for the Jobber webhook callback
      res.status(200).json({ 
        success: true, 
        message: 'Quote request submitted successfully! You will receive your quote within about 1 hour during business hours.' 
      });
    } catch (error) {
      console.error('Error processing quote request:', error);
      res.status(500).json({ success: false, message: 'Failed to process your request' });
    }
  });
  
  // Jobber Webhook Receiver
  app.post('/api/jobber-webhook', (req, res) => {
    try {
      // Get the webhook payload from Jobber
      const webhookData = req.body;
      
      console.log('Received Jobber webhook:', webhookData);
      
      // Process the webhook data based on the event type
      // Common Jobber webhook events: quote.created, quote.approved, job.completed, etc.
      const eventType = webhookData.event || webhookData.type;
      
      switch(eventType) {
        case 'quote.created':
          console.log('Quote created in Jobber:', webhookData.data);
          // Here you could update your database or notify the client
          break;
          
        case 'quote.approved':
          console.log('Quote approved in Jobber:', webhookData.data);
          // Maybe send a confirmation email or update your database
          break;
          
        case 'job.scheduled':
          console.log('Job scheduled in Jobber:', webhookData.data);
          // Update your scheduling calendar or database
          break;
          
        default:
          console.log(`Unhandled webhook event type: ${eventType}`);
      }
      
      // Always respond with 200 to acknowledge receipt
      res.status(200).json({ success: true, message: 'Webhook received successfully' });
    } catch (error) {
      console.error('Error processing Jobber webhook:', error);
      // Still return 200 to prevent Jobber from retrying
      res.status(200).json({ success: false, message: 'Error processing webhook, but received' });
    }
  });

  // API route to get services data
  app.get('/api/services', (_req, res) => {
    // In a real app, this would fetch from a database
    const servicesData = require('../client/src/data/services').services;
    res.json(servicesData);
  });

  // API route to get location data
  app.get('/api/locations', (_req, res) => {
    const locationsData = require('../client/src/data/locations').locations;
    res.json(locationsData);
  });

  // API route to get testimonials data
  app.get('/api/testimonials', (_req, res) => {
    const testimonialsData = require('../client/src/data/testimonials').testimonials;
    res.json(testimonialsData);
  });

  // API route to get FAQ data
  app.get('/api/faqs', (_req, res) => {
    const faqsData = require('../client/src/data/faqs').faqs;
    res.json(faqsData);
  });

  // API route for sitemap data
  app.get('/api/sitemap', (_req, res) => {
    // Generate dynamic sitemap data
    const baseUrl = "https://www.bloombritecleaning.com";
    const services = require('../client/src/data/services').services;
    const locations = require('../client/src/data/locations').locations;
    
    const sitemap = [
      { url: `${baseUrl}/`, lastModified: new Date() },
      { url: `${baseUrl}/services`, lastModified: new Date() },
      { url: `${baseUrl}/locations`, lastModified: new Date() },
      { url: `${baseUrl}/reviews`, lastModified: new Date() },
      { url: `${baseUrl}/faq`, lastModified: new Date() },
      { url: `${baseUrl}/contact`, lastModified: new Date() },
      { url: `${baseUrl}/quote`, lastModified: new Date() },
      { url: `${baseUrl}/accessibility`, lastModified: new Date() }
    ];
    
    // Add service pages
    services.forEach((service: { slug: string }) => {
      sitemap.push({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date()
      });
    });
    
    // Add location pages
    locations.forEach((location: { slug: string }) => {
      sitemap.push({
        url: `${baseUrl}/locations/${location.slug}`,
        lastModified: new Date()
      });
    });
    
    res.json(sitemap);
  });

  // API route for robots.txt
  app.get('/robots.txt', (_req, res) => {
    res.type('text/plain');
    res.send(`
      User-agent: *
      Allow: /
      
      Sitemap: https://www.bloombritecleaning.com/sitemap.xml
    `);
  });

  // Employee application route
  app.post('/api/employee-application', submitEmployeeApplication);

  // Resume parsing endpoint
  app.post('/api/parse-resume', parseResumeText);

  const httpServer = createServer(app);

  return httpServer;
}
