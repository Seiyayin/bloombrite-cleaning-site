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

- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.