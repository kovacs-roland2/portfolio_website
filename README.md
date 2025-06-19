# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with smooth animations and professional presentation of projects and experience.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Font Awesome](https://fontawesome.com/)
- **Deployment**: AWS S3 Static Hosting with GitHub Actions

## 📁 Project Structure

```
portfolio_website/
├── app/                    # Next.js App Router
│   ├── components/        # Shared components
│   ├── content/          # Content data and types
│   ├── types/            # TypeScript type definitions
│   ├── about/            # About page with components
│   ├── projects/         # Projects page
│   └── layout.tsx        # Root layout
├── components/           # shadcn/ui components
│   └── ui/              # Reusable UI components
├── lib/                 # Utility functions
└── public/              # Static assets
```

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm

### Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio_website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (static export)
- `npm start` - Serve the production build locally
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean interface using shadcn/ui components
- **Type Safety**: Full TypeScript implementation
- **Static Export**: Optimized for static hosting
- **SEO Friendly**: Proper meta tags and structure
- **Fast Performance**: Next.js optimizations and code splitting

## 📄 Pages

- **Home** (`/`) - Landing page with introduction and contact links
- **About** (`/about`) - Professional experience, skills, and background
- **Projects** (`/projects`) - Portfolio of work and achievements

## 🚀 Deployment

This project is automatically deployed to AWS S3 using GitHub Actions.

### Deployment Process

1. **Push to main branch**
2. **GitHub Actions workflow triggers**
3. **Builds Next.js static export**
4. **Syncs files to S3 bucket**
5. **Website updates automatically**

### Required GitHub Secrets

Set these in your repository settings:

- `AWS_S3_BUCKET` - Your S3 bucket name
- `AWS_ACCESS_KEY_ID` - AWS access key
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `AWS_REGION` - AWS region (optional, defaults to us-east-1)

## 🔧 Configuration

### Next.js Configuration

The project uses static export configuration in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export', // Static export for S3
  distDir: 'build', // Build output directory
};
```

### Tailwind CSS

Custom configuration with shadcn/ui integration and animations.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run formatting: `npm run format`
5. Submit a pull request

## 📄 License

This project is personal portfolio website. All rights reserved.

---

Built with ❤️ using Next.js and TypeScript
