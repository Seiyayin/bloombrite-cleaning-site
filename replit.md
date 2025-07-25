# BloomBrite Cleaning - Professional Cleaning Services Website

## Overview

This is a full-stack web application for BloomBrite Cleaning, a professional cleaning service company operating in Michigan. The application is built as a single-page application (SPA) with a modern tech stack, featuring a React frontend with TypeScript, Express.js backend, and PostgreSQL database integration using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database ORM**: Drizzle ORM with PostgreSQL adapter
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Express sessions with PostgreSQL store
- **Middleware**: Compression, image optimization, redirect handling

### Key Components

#### Business Logic
- **Service Pages**: Dedicated pages for each cleaning service (window cleaning, power washing, carpet cleaning, etc.)
- **Location Pages**: Location-specific landing pages for different Michigan cities
- **Contact & Quote Forms**: Lead generation forms with validation
- **SEO Components**: Structured data (JSON-LD) for local business, services, and reviews
- **Blog System**: Content marketing with cleaning guides and seasonal tips

#### Performance Optimizations
- **Image Optimization**: Custom middleware for WebP conversion and compression
- **Preload Strategies**: Critical resource preloading for fonts and hero images
- **Compression**: Gzip compression for all responses
- **Caching**: Image caching to prevent reprocessing

#### SEO & Marketing Features
- **Structured Data**: Comprehensive schema.org markup for local business, services, and reviews
- **Sitemap Generation**: Automated XML sitemap generation
- **Meta Optimization**: Dynamic meta tags and Open Graph images
- **Local SEO**: Location-specific pages with targeted content

## Data Flow

1. **Client Requests**: React Router (Wouter) handles client-side navigation
2. **API Calls**: TanStack Query manages server state and API requests
3. **Server Processing**: Express.js handles API routes and form submissions
4. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
5. **Response Handling**: JSON responses for API calls, static file serving for assets

## External Dependencies

### Third-Party Services
- **Google Maps API**: Location services and mapping functionality
- **Google Fonts**: Web fonts (Inter family)
- **Font Awesome**: Icon library for UI elements

### Database
- **PostgreSQL**: Primary database for user data and application state
- **Neon**: Serverless PostgreSQL hosting platform

### Deployment
- **Replit**: Development and hosting platform
- **Autoscale Deployment**: Configured for automatic scaling

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20
- **Database**: PostgreSQL 16
- **Port Configuration**: Local port 5000, external port 80
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend

### Production Build
- **Frontend Build**: Vite builds optimized static assets
- **Backend Build**: ESBuild bundles server code
- **Static Assets**: Served from dist/public directory
- **Environment Variables**: Database URL and API keys configured

### Performance Considerations
- **Code Splitting**: Vite handles automatic code splitting
- **Asset Optimization**: Images, fonts, and CSS are optimized for production
- **Caching Strategy**: Static assets cached, API responses handled by TanStack Query

## Changelog

- January 21, 2025: Added comprehensive Bitcoin payment integration with dedicated Bitcoin payments page, SEO optimization for cryptocurrency payment keywords, Bitcoin logo integration, navigation menu updates (desktop and mobile), and payment processing information for all cleaning services across Michigan service areas
- January 21, 2025: Restructured SEO strategy with general Michigan coverage on main pages and location-specific content on individual pages - created dedicated detailed Novi location page, Novi house cleaning guide blog post, enhanced homepage with general Michigan coverage, and improved internal linking strategy
- January 21, 2025: Added comprehensive employee application functionality with professional careers page, detailed application form, and SendGrid email integration for HR notifications
- January 21, 2025: Enhanced SEO with improved H1 tag targeting "House Cleaning Services in Wixom, Novi & West Bloomfield" for better local search rankings
- January 21, 2025: Fixed blog section image display issues by correcting image paths from /src/assets/ to /images/ 
- January 21, 2025: Created comprehensive city-specific blog pages for SEO - Wixom, Novi, West Bloomfield, and Livonia with local cleaning tips and guides
- January 21, 2025: Added city blog index page and integrated local content sections into main blog for improved local SEO targeting
- July 16, 2025: Updated services with new authentic Bloombrite photos - Window Cleaning (professional worker cleaning window), Move-In/Out Cleaning (clean hallway), Oven Cleaning (pristine kitchen with stove), and Recurring Cleaning (upstairs hallway)
- July 16, 2025: Fixed missing power washing service image and updated multiple services to use authentic Bloombrite photos instead of stock images
- July 16, 2025: Added missing West Bloomfield and Keego Harbor locations to navigation dropdown menus (both desktop and mobile)
- July 16, 2025: Implemented comprehensive hover effects across all buttons and cards - orange hover colors (hover:bg-orange-600, hover:bg-orange-50, hover:bg-orange-500) for buttons, cards, and interactive elements to enhance user experience and visual feedback
- July 16, 2025: Updated phone number from (734) 489-9908 to (947) 465-4217 across all website files including schema markup, components, and pages
- July 16, 2025: Added new city page for Keego Harbor with comprehensive SEO-optimized content and residential cleaning keywords
- July 16, 2025: Enhanced existing location pages with expanded residential cleaning terminology and keyword variety
- July 16, 2025: Updated Hero section, Services section, and Home page with additional residential cleaning keywords for better SEO
- July 16, 2025: Continued optimization of ServiceDetail pages with enhanced residential cleaning content
- June 27, 2025: Implemented comprehensive internal linking strategy for improved SEO - added contextual links throughout website connecting related services, locations, and key pages
- June 27, 2025: Fixed accessibility issues - updated "Learn More" links with descriptive text and resolved hero image display
- June 27, 2025: Optimized website performance - compressed large images, added preloading for critical resources, and eliminated render-blocking issues
- June 26, 2025: Updated pricing - Standard Cleaning to $160, Deep Cleaning to $250 (including schema markup)
- June 26, 2025: Updated Standard and Deep Cleaning service descriptions with detailed area-by-area breakdown
- June 26, 2025: Added "Ready to Get Started" section with quote process information to home page
- June 26, 2025: Integrated Jobber embedded form into /quote page while preserving external link option
- June 26, 2025: Fixed all phone numbers site-wide from placeholder (123) 456-7890 to correct business number (734) 489-9908
- June 26, 2025: Fixed remaining image loading issues - updated oven cleaning and window cleaning services to use authentic Bloombrite photos
- January 26, 2025: Replaced stock photos with authentic Bloombrite cleaning images throughout website
- January 26, 2025: Updated quote page URL from /get-quote to /quote with enhanced schema markup
- January 26, 2025: Added Bloombrite logo as website favicon for browser tab display
- June 26, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.