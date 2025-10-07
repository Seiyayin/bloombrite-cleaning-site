import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { submitEmployeeApplication } from "./routes/employeeApplication";
import { fetchGoogleReviews, findPlaceId } from "./services/googlePlaces";

export async function registerRoutes(app: Express): Promise<Server> {
  // Explicitly serve static sitemap.xml and robots.txt without interference
  app.get('/sitemap.xml', (req, res) => {
    res.set({
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    });
    res.sendFile('sitemap.xml', { root: './public' });
  });
  
  app.get('/robots.txt', (req, res) => {
    res.set({
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    });
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

  // Google Reviews API endpoints
  app.get('/api/google-reviews', async (_req, res) => {
    try {
      const reviewsData = await fetchGoogleReviews();
      
      if (!reviewsData) {
        return res.status(500).json({ 
          success: false, 
          message: 'Unable to fetch Google reviews' 
        });
      }
      
      res.json({
        success: true,
        data: reviewsData
      });
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch Google reviews' 
      });
    }
  });

  // Helper endpoint to find correct Place ID
  app.get('/api/find-place-id', async (req, res) => {
    try {
      const { findPlaceIdByCoordinates, findPlaceIdByTextSearch } = await import('./services/googlePlaces');
      
      console.log('Starting Place ID search...');
      
      // Try coordinate-based search first
      const placeIdFromCoords = await findPlaceIdByCoordinates();
      
      if (placeIdFromCoords) {
        // Fetch details for this place
        const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
        const detailsResponse = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeIdFromCoords}&fields=name,rating,user_ratings_total,reviews,formatted_address&key=${GOOGLE_PLACES_API_KEY}`
        );
        const details = await detailsResponse.json();
        
        return res.json({
          success: true,
          method: 'coordinates',
          placeId: placeIdFromCoords,
          details: details.result
        });
      }
      
      // Try text search as fallback
      const placeIdFromText = await findPlaceIdByTextSearch();
      
      if (placeIdFromText) {
        const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
        const detailsResponse = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeIdFromText}&fields=name,rating,user_ratings_total,reviews,formatted_address&key=${GOOGLE_PLACES_API_KEY}`
        );
        const details = await detailsResponse.json();
        
        return res.json({
          success: true,
          method: 'text_search',
          placeId: placeIdFromText,
          details: details.result
        });
      }
      
      res.json({
        success: false,
        message: 'Could not find Place ID for Bloombrite Cleaning'
      });
      
    } catch (error) {
      console.error('Error finding Place ID:', error);
      res.status(500).json({
        success: false,
        message: 'Error searching for Place ID',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Test endpoint to debug Google Places API
  app.get('/api/test-google-places', async (req, res) => {
    try {
      const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
      
      if (!GOOGLE_PLACES_API_KEY) {
        return res.json({
          success: false,
          message: 'Google Places API key not configured',
          hasApiKey: false
        });
      }

      const results = [];

      // Test 1: Search for a well-known business nearby to verify API key works
      try {
        const testResponse = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.555663,-83.4414784&radius=5000&keyword=walmart&key=${GOOGLE_PLACES_API_KEY}`
        );
        const testData = await testResponse.json();
        results.push({
          test: 'nearby_walmart_test',
          status: testData.status,
          results_count: testData.results?.length || 0,
          message: 'Testing if API key works with nearby Walmart search'
        });
      } catch (error) {
        results.push({
          test: 'nearby_walmart_test',
          error: error instanceof Error ? error.message : String(error),
          message: 'API key test failed'
        });
      }

      // Test 2: Broad search for cleaning services in Wixom
      try {
        const cleaningResponse = await fetch(
          `https://maps.googleapis.com/maps/api/place/textsearch/json?query=cleaning+services+Wixom+Michigan&key=${GOOGLE_PLACES_API_KEY}`
        );
        const cleaningData = await cleaningResponse.json();
        results.push({
          test: 'cleaning_services_wixom',
          status: cleaningData.status,
          results_count: cleaningData.results?.length || 0,
          businesses: cleaningData.results?.slice(0, 5).map((p: any) => ({
            name: p.name,
            place_id: p.place_id?.substring(0, 20) + '...',
            address: p.formatted_address
          })) || []
        });
      } catch (error) {
        results.push({
          test: 'cleaning_services_wixom',
          error: error instanceof Error ? error.message : String(error)
        });
      }

      // Test 3: Search with your exact coordinates
      try {
        const exactResponse = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.555663,-83.4414784&radius=100&key=${GOOGLE_PLACES_API_KEY}`
        );
        const exactData = await exactResponse.json();
        results.push({
          test: 'exact_coordinates_search',
          status: exactData.status,
          results_count: exactData.results?.length || 0,
          businesses: exactData.results?.slice(0, 10).map((p: any) => ({
            name: p.name,
            place_id: p.place_id?.substring(0, 20) + '...',
            types: p.types?.slice(0, 3)
          })) || []
        });
      } catch (error) {
        results.push({
          test: 'exact_coordinates_search',
          error: error instanceof Error ? error.message : String(error)
        });
      }

      res.json({
        success: true,
        hasApiKey: true,
        coordinates: { lat: 42.555663, lng: -83.4414784 },
        tests: results
      });

    } catch (error) {
      console.error('Error in Google Places test:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Test failed',
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  // IndexNow API endpoint for submitting URL updates to search engines
  app.post('/api/indexnow', async (req, res) => {
    try {
      // Check if IndexNow is enabled via environment variable
      const indexNowEnabled = process.env.INDEXNOW_ENABLED === 'true';
      const indexNowKey = process.env.INDEXNOW_KEY;
      
      if (!indexNowEnabled) {
        return res.status(400).json({ 
          success: false, 
          message: 'IndexNow is not enabled. Set INDEXNOW_ENABLED=true in environment variables.' 
        });
      }

      if (!indexNowKey) {
        return res.status(400).json({ 
          success: false, 
          message: 'IndexNow key not configured. Set INDEXNOW_KEY in environment variables.' 
        });
      }

      const { urls } = req.body;
      
      if (!urls || !Array.isArray(urls) || urls.length === 0) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid request. Provide an array of URLs to index.' 
        });
      }

      const host = 'www.bloombritecleaning.com';
      const keyLocation = `https://${host}/${indexNowKey}.txt`;

      // Submit to IndexNow API
      const response = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          host,
          key: indexNowKey,
          keyLocation,
          urlList: urls.map((url: string) => {
            // Ensure full URLs
            if (url.startsWith('http')) return url;
            return `https://${host}${url}`;
          })
        })
      });

      const responseText = await response.text();
      
      if (response.ok || response.status === 202) {
        console.log(`✅ IndexNow: Successfully submitted ${urls.length} URLs`);
        res.json({ 
          success: true, 
          message: `Successfully submitted ${urls.length} URLs to IndexNow`,
          status: response.status
        });
      } else {
        console.error('IndexNow submission failed:', response.status, responseText);
        res.status(response.status).json({ 
          success: false, 
          message: 'IndexNow submission failed',
          status: response.status,
          details: responseText
        });
      }
    } catch (error) {
      console.error('Error submitting to IndexNow:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to submit URLs to IndexNow',
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
