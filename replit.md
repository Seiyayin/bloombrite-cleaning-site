# BloomBrite Cleaning - Professional Cleaning Services Website

## Overview

This project is a full-stack web application for BloomBrite Cleaning, a professional cleaning service company operating in Michigan. The application aims to provide a modern, high-performance online presence for lead generation and customer engagement. Key capabilities include service listings, location-specific content for local SEO, customer contact forms, and a blog system for content marketing. The business vision is to enhance BloomBrite Cleaning's digital footprint, attract new clients through effective online marketing, and provide an intuitive user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions
The frontend is built as a Single-Page Application (SPA) using React 18 with TypeScript. It leverages Shadcn/ui components (built on Radix UI) and Tailwind CSS for a modern, consistent design system. Hover effects with orange color schemes are implemented across interactive elements to enhance user experience.

### Technical Implementations
- **Frontend**: React 18, TypeScript, Wouter (routing), Shadcn/ui, Tailwind CSS, TanStack Query (state management), React Hook Form (forms) with Zod validation, Vite (build tool).
- **Backend**: Node.js, Express.js, TypeScript.
- **Database**: PostgreSQL with Drizzle ORM.
- **Performance**: Image optimization (WebP conversion, compression), critical resource preloading, Gzip compression, caching for static assets, code splitting.
- **SEO**: Comprehensive schema.org markup (Local Business, Services, Reviews), dynamic meta tags, Open Graph images, automated XML sitemap generation, canonical URLs, and targeted content for local SEO.
- **Security**: Express sessions with PostgreSQL store.
- **Business Logic**: Service pages, location-specific landing pages, contact/quote forms, blog system, and comprehensive SEO components including internal linking strategies.

### Feature Specifications
- **Service Pages**: Detailed descriptions for various cleaning services (e.g., window cleaning, power washing, carpet cleaning, residential cleaning).
- **Location Pages**: SEO-optimized pages for specific Michigan cities with local content.
- **Lead Generation**: Contact and quote forms with robust validation.
- **Content Marketing**: Blog section for cleaning guides and tips.
- **Payment Integration**: Bitcoin payment option integrated.
- **Career Functionality**: Dedicated careers page with application form and Discord/AI integration for notifications and candidate analysis.
- **Communication**: Primary customer communication preference shifted to "text us."

### System Design Choices
The application is designed for scalability and performance, utilizing a serverless PostgreSQL database (Neon) and optimized asset delivery. A focus on SEO is embedded throughout the architecture, from structured data to content strategy and internal linking.

## External Dependencies

### Third-Party Services
- **Google Maps API**: For location services and mapping.
- **Google Fonts**: Inter font family.
- **Font Awesome**: Icon library.
- **Neon**: Serverless PostgreSQL hosting.
- **Jobber**: Embedded form for quotes.
- **SendGrid**: For email notifications (e.g., HR for job applications).
- **Discord Webhooks**: For job application notifications.
- **GPT-4o**: AI-powered application analysis for career functionality.

### Database
- **PostgreSQL**: Primary data store for the application.

### Deployment
- **Replit**: Development and hosting platform.

## Recent Changes

- **October 5, 2025**: Fixed missing canonical URLs on 41+ pages identified in Ahrefs audit - added canonical URLs to all blog city pages (Livonia, Novi, West Bloomfield, Wixom), all individual service pages (Window Cleaning, Power Washing, Carpet Cleaning), and all blog posts (BlogOverview, ApplianceCleaning, NoviCleaningGuide, MemorialDayCleaning, CityBlogIndex). Verified with 31-step automated test suite confirming canonical tags are properly rendered on all pages pointing to www.bloombritecleaning.com domain. This fix resolves the duplicate content issue flagged by Ahrefs for pages without canonical URLs.