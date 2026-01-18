# Grindax - Movie Collection Manager

A modern, full-stack movie collection management application built with Next.js. Create, view, and manage your personal movie collection with automatic movie data enrichment from The Movie Database (TMDB) API.

**Status: ✅ Project Complete**

## Features

- 🎬 **Movie Management**: Add movies to your personal collection with title and rating
- 🔐 **User Authentication**: Secure authentication using Clerk
- 🎨 **Beautiful UI**: Modern, responsive interface built with Tailwind CSS and shadcn/ui
- 📊 **Movie Enrichment**: Automatic fetching of movie posters, backdrops, ratings, and metadata from TMDB
- 🖼️ **Movie Details**: View detailed movie information with beautiful backdrop displays
- ⚡ **Optimistic Updates**: Instant UI updates using Zustand state management
- 🎭 **Loading States**: Skeleton loaders and smooth transitions with GSAP animations
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Authentication**: [Clerk](https://clerk.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [GSAP](https://gsap.com/)
- **Notifications**: [Sonner](https://ui.shadcn.com/docs/components/sonner) (shadcn/ui)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API Integration**: [The Movie Database (TMDB)](https://www.themoviedb.org/)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ and npm (or yarn/pnpm/bun)
- PostgreSQL database (local or cloud-hosted)
- [Clerk](https://clerk.com/) account for authentication
- [TMDB](https://www.themoviedb.org/) API key

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Grindax
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/database_name?schema=public"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # TMDB API
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key | Yes |
| `CLERK_SECRET_KEY` | Clerk secret key | Yes |
| `NEXT_PUBLIC_TMDB_API_KEY` | TMDB API key for movie data | Yes |

### Getting API Keys

**Clerk:**
1. Sign up at [clerk.com](https://clerk.com/)
2. Create a new application
3. Copy your publishable key and secret key from the dashboard

**TMDB:**
1. Sign up at [themoviedb.org](https://www.themoviedb.org/)
2. Go to Settings > API
3. Request an API key
4. Copy your API key once approved

## Database Schema

```prisma
model Movie {
  id        Int     @id @default(autoincrement())
  title     String?
  rate      Decimal?
  posted_by String?
}
```

## Project Structure

```
crud-nextjs/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── actions/
│   │   │   └── movie.action.ts    # Server actions for movies
│   │   ├── movie/
│   │   │   └── [id]/
│   │   │       └── page.tsx       # Movie detail page
│   │   ├── stores/
│   │   │   └── use-movie-store.ts # Zustand store
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
│   ├── components/
│   │   ├── common/
│   │   │   └── header.tsx         # App header with auth
│   │   ├── Movie/
│   │   │   ├── add-movie.tsx      # Add movie dialog
│   │   │   ├── empty-state.tsx    # Empty state component
│   │   │   ├── movie-display.tsx  # Movie card component
│   │   │   ├── movie-list.tsx     # Movie list container
│   │   │   └── skeleton-movie.tsx # Loading skeleton
│   │   └── ui/                    # Reusable UI components
│   ├── lib/
│   │   ├── prisma.ts              # Prisma client instance
│   │   ├── tmdb-constants.ts      # TMDB genre mappings
│   │   └── utils.ts               # Utility functions
│   └── types/
│       └── movie.ts               # TypeScript types
└── package.json
```

## Features in Detail

### Adding Movies
- Click the "Add Movie" button to open a dialog
- Enter the movie title and your rating (0-10)
- The app automatically searches TMDB for movie details
- Movie poster, backdrop, ratings, and metadata are automatically fetched

### Viewing Movies
- All your movies are displayed in a responsive grid
- Each movie card shows the poster, title, your rating, and TMDB data
- Click on a movie to view its detailed page with backdrop

### Movie Detail Page
- Full-screen backdrop image with blur effect
- Large poster display
- Movie metadata from TMDB

### Authentication
- Sign in/Sign up using Clerk
- Each user sees only their own movies
- Protected routes ensure data privacy

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio to view/edit database
- `npx prisma migrate dev` - Create and apply new migrations
- `npx prisma generate` - Regenerate Prisma Client

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy!

The app will automatically build and deploy. Make sure to set all required environment variables in the Vercel dashboard.

### Database Setup for Production

For production, you can use:
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Supabase](https://supabase.com/)
- [Neon](https://neon.tech/)
- Any other PostgreSQL hosting service

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing movie data
- [Clerk](https://clerk.com/) for authentication
- All the amazing open-source libraries that make this project possible
