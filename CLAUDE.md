# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 blog application that uses Notion as a CMS (Content Management System). The project utilizes the App Router feature and allows users to manage blog posts through Notion while serving them through a Next.js frontend.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Format code with Prettier
npm run format

# Run ESLint
npm run lint

# Type check TypeScript
npm run ts

# Run both lint and type check
npm run inspect
```

## Environment Variables

The application requires the following environment variables:

- `NOTION_DATABASE_ID`: The ID of your Notion database (found in the URL of your Notion page)
- `NOTION_AUTH_TOKEN`: Authentication token from Notion cookies
- `SITE_URL`: URL of your site (e.g., `http://localhost:3000` for local development)
- `API_KEY`: Custom password for route handler authentication

## Architecture Overview

### Core Technologies
- **Next.js 13.4** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Recoil** for state management
- **react-notion-x** for rendering Notion pages
- **notion-client** for fetching data from Notion API

### Project Structure

```
src/
├── app/              # Next.js 13 App Router pages and API routes
│   ├── api/          # API routes for posts management
│   ├── blog/         # Blog listing and individual post pages
│   └── [slug]/       # Dynamic routing for posts
├── components/       # React components
│   ├── filter/       # Search and category filtering components
│   ├── header/       # Site header and navigation
│   ├── posts/        # Post-related components (cards, grids, related posts)
│   └── notion-page.tsx # Main component for rendering Notion content
├── hooks/            # Custom React hooks
├── libs/             # External library integrations
│   └── notion.ts     # Notion API client setup and utilities
├── services/         # Business logic and data fetching
│   └── posts.ts      # Post fetching and processing logic
├── states/           # Recoil state atoms
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

### Key Components and Flow

1. **Notion Integration** (`src/libs/notion.ts`, `src/services/posts.ts`):
   - Fetches posts from Notion database using unofficial API for better performance
   - Maps Notion properties to Post type
   - Handles image URL processing to avoid 403 errors

2. **State Management** (`src/states/`):
   - Uses Recoil for managing:
     - Selected categories filter
     - Current page for pagination
     - Search query

3. **Post Rendering**:
   - Posts are fetched server-side through API routes
   - Individual posts use `react-notion-x` for faithful Notion rendering
   - Supports code highlighting, math equations, and various Notion blocks

4. **Search and Filtering**:
   - Client-side search using Korean consonant search support
   - Category-based filtering
   - Pagination for large post collections

### API Routes

- `/api/posts` - Returns all published posts from Notion
- `/api/posts/cache` - Caching endpoint for posts data
- `/api/revalidate` - Handles on-demand revalidation

### Important Implementation Details

1. **Image Handling**: The codebase includes special logic to handle Notion images and prevent 403 errors by properly mapping image URLs.

2. **Dark Mode**: Implemented using `next-themes` with system preference support.

3. **SEO**: Includes sitemap generation and proper meta tags.

4. **Performance**: Uses Next.js ISR (Incremental Static Regeneration) for optimal performance.

## Common Tasks

### Adding New Features
When adding features, follow the existing patterns:
- Place components in appropriate subdirectories under `src/components/`
- Use TypeScript and define types in `src/types/`
- Follow the existing Tailwind CSS utility patterns
- Use Recoil atoms for shared state

### Modifying Notion Integration
The Notion integration logic is primarily in:
- `src/libs/notion.ts` - Low-level Notion API client
- `src/services/posts.ts` - Post fetching and transformation
- `src/components/notion-page.tsx` - Notion content rendering

### Styling
- Uses Tailwind CSS with custom color scheme (primary/secondary)
- Global styles in `src/styles/globals.css`
- Notion-specific styles in `src/styles/notion.css`