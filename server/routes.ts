import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
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
      const { name, email, phone, service, location, message } = req.body;
      
      // Log the quote request (in a real app, you'd save to a database or send an email)
      console.log('Quote request submission:', {
        name,
        email,
        phone,
        service,
        location,
        message,
        timestamp: new Date()
      });
      
      res.status(200).json({ success: true, message: 'Quote request submitted successfully' });
    } catch (error) {
      console.error('Error processing quote request:', error);
      res.status(500).json({ success: false, message: 'Failed to process your request' });
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
      { url: `${baseUrl}/get-quote`, lastModified: new Date() },
      { url: `${baseUrl}/accessibility`, lastModified: new Date() }
    ];
    
    // Add service pages
    services.forEach(service => {
      sitemap.push({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date()
      });
    });
    
    // Add location pages
    locations.forEach(location => {
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

  const httpServer = createServer(app);

  return httpServer;
}
