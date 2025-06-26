# Replit.md

## Overview

This is a full-stack web application for **Bloombrite Cleaning**, a professional cleaning service company based in Michigan. The application is built using modern web technologies including React, TypeScript, Express.js, and PostgreSQL, with a focus on local SEO, performance optimization, and customer engagement.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Design**: RESTful endpoints for contact forms and quote requests
- **Static Assets**: Express static file serving with image optimization middleware
- **Performance**: Compression middleware and custom image optimization

### Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Simple user authentication schema (currently minimal)
- **Session Storage**: In-memory storage for development (expandable to PostgreSQL sessions)

## Key Components

### Core Pages
1. **Home Page**: Hero section, services overview, testimonials, and call-to-action
2. **Services Pages**: Detailed service descriptions (Window Cleaning, Power Washing, Carpet Cleaning, etc.)
3. **Location Pages**: Service area information for Michigan cities
4. **Contact/Quote Forms**: Lead generation and customer communication
5. **Blog**: SEO-focused content marketing (cleaning guides, seasonal tips)

### Performance Features
- **Image Optimization**: WebP conversion and dynamic resizing middleware
- **Preloading**: Critical resource preloading for better Core Web Vitals
- **Compression**: Gzip compression for all responses
- **SEO**: Structured data, sitemaps, and meta optimization

### Business Logic
- **Service Areas**: Wixom, Novi, Livonia, Milford, Commerce Township, Farmington Hills, South Lyon, Walled Lake
- **Service Types**: Window cleaning, power washing, carpet cleaning, deep cleaning, standard cleaning, move-in/out cleaning
- **Lead Generation**: Contact forms and quote request system

## Data Flow

1. **User Interaction**: Users browse services and locations, fill out contact/quote forms
2. **Form Submission**: Forms are validated client-side with Zod, then sent to Express API
3. **Lead Processing**: Contact and quote requests are logged server-side (ready for database/email integration)
4. **Content Delivery**: Static content served with optimization, dynamic content rendered client-side
5. **SEO Enhancement**: Structured data and meta tags generated for each page

## External Dependencies

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant styling
- **Tailwind CSS**: Utility-first CSS framework

### Development Tools
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundling for production
- **PostCSS**: CSS processing pipeline

### Integrations Ready
- **Google Maps API**: Configured for potential service area mapping
- **Email Services**: Ready for transactional email integration
- **Analytics**: Prepared for Google Analytics/tracking pixels

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with development server on port 5000
- **Database**: PostgreSQL 16 module configured
- **Hot Reload**: Vite HMR for rapid development

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations in `./migrations` directory
- **Deployment**: Configured for Replit autoscale with build/run commands

### Performance Optimizations
- **Asset Optimization**: Image compression and WebP conversion
- **Bundle Splitting**: Automatic code splitting via Vite
- **Caching**: Static asset caching and compression
- **Preloading**: Critical resource hints for faster loading

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```