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

- August 20, 2025: Updated hero section with professional kitchen deep cleaning image from user's assets (Kitchen Deep Cleaning_1755668325844.png) - replaced stock image with authentic Bloombrite photo, updated critical image preloading to prioritize new hero image, maintained performance optimizations with WebP fallbacks and proper image optimization
- August 20, 2025: Implemented comprehensive schema markup updates and website performance optimizations - updated schema with current review count (97), added Bitcoin payment option, enhanced service area coverage including West Bloomfield and Keego Harbor, implemented critical CSS loading, WebP image optimization with fallbacks, lazy loading components, enhanced compression middleware, improved caching headers with immutable directive, and performance monitoring with Core Web Vitals tracking
- August 20, 2025: Updated all location pages with SEO-optimized content based on successful template format - enhanced meta descriptions, improved H1/H2 structure with local landmarks, added customer testimonials, clear service breakdowns, and prominent call-to-action sections for each city (Wixom, Novi, Milford, Commerce Township, Farmington Hills, Livonia) to improve local search rankings
- August 20, 2025: Created comprehensive Professional Cleaning Checklist page (/checklist) featuring detailed standard and deep cleaning task lists, service comparisons, pricing information, and quality guarantees - added to main navigation and mobile menu for easy customer access to understand exactly what's included in each service
- August 12, 2025: Deprioritized "Maid Services" terminology throughout website while keeping it available as a service option - updated navigation menus from "Maid Services" to "Services", changed hero section and services section to focus on "Professional House Cleaning Services" and "Professional Residential Cleaning Services", added dedicated "Maid Services" as individual service offering, maintained SEO value while shifting primary focus to general cleaning services terminology
- August 12, 2025: Updated four location pages (Wixom, Novi, Milford, Commerce Township) to match HTML template structure with consistent content format, star ratings, and simplified messaging
- August 12, 2025: Updated SEO titles and meta descriptions for location pages to follow template format: "CITY House Cleaning Services | Bloombrite Cleaning" with "100+ 5-star Google reviews" messaging
- August 12, 2025: Updated utm-links.txt file with correct Google Business Profile UTM tracking URLs including profile links, post examples, and service-specific links for all four locations
- August 12, 2025: Updated H1 headers for four location pages (Wixom, Novi, Milford, Commerce Township) to use SEO-optimized format "Professional House Cleaning in CITY, MI" for improved search rankings
- August 11, 2025: Changed customer communication preference from "call us" to "text us" throughout entire website - updated all phone contact references, links (from tel: to sms:), button text, and messaging to reflect text messaging preference while maintaining phone numbers for contact
- August 11, 2025: Enhanced SEO strategy by adding "maid services" and "maid services near me" keywords throughout the website including homepage title/description, hero section, services sections, testimonials, location pages, and navigation menus (both desktop and mobile) to improve search rankings for maid services-related searches in Metro Detroit area
- January 21, 2025: Updated service terminology from "Standard Cleaning Services" to "General Cleaning Services" and enhanced SEO with weekly cleaning service, biweekly cleaning service, and monthly cleaning service terminology across all website pages, navigation menus, service descriptions, and schema markup for improved local search visibility
- January 21, 2025: Completely eliminated all white space gaps throughout website by removing all section padding, header/footer padding, and margins for ultra-compact, seamless layout design
- January 21, 2025: Fixed careers form issues - removed predetermined city/zip values, reduced character minimum requirement, and resolved error handling for better user experience
- January 21, 2025: Implemented AI-powered application analysis for Discord notifications - when job applications are submitted, AI analyzes candidate fit, generates comprehensive summaries, identifies strengths/concerns, and provides hiring recommendations using GPT-4o
- January 21, 2025: Added Discord webhook integration for job applications - notifications now sent to Discord server when new employee applications are submitted, featuring rich embeds with all applicant details, experience level, availability, and contact information
- January 21, 2025: Refocused website on core residential cleaning services with weekly, biweekly, and monthly maintenance options while de-emphasizing window cleaning per user request
- January 21, 2025: Updated geographic references from "Michigan" to "Metro Detroit" for more accurate service area representation, reflecting that service areas are specifically in the Metro Detroit region rather than the entire state of Michigan
- January 21, 2025: Added comprehensive Bitcoin payment integration with dedicated Bitcoin payments page, SEO optimization for cryptocurrency payment keywords, Bitcoin logo integration, navigation menu updates (desktop and mobile), and payment processing information for all cleaning services across Metro Detroit service areas
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