# Polly Abstract Website

A modern, responsive website for the Polly cryptocurrency built with SvelteKit.

## 🚀 Features

- Interactive UI with animated components
- Responsive design for all device sizes
- Comprehensive information about Polly token
- Step-by-step buying instructions
- Tokenomics section with contract details

## 🛠️ Tech Stack

- [SvelteKit](https://kit.svelte.dev/) (Svelte 5)
- TypeScript
- SCSS
- Docker for containerization

## 🏗️ Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (v10.2.1 or later)

### Installation

```bash
# Clone the repository
git clone git@github.com:PollyAbstract/website.git
cd website

# Install dependencies
pnpm install
```

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run type checking
pnpm check

# Run ESLint
pnpm lint

# Format code
pnpm format
```

## 🐳 Docker

This project includes a Dockerfile for containerization:

```bash
# Build Docker image
docker build -t polly-abstract-website .

# Run Docker container
docker run -p 3000:3000 polly-abstract-website
```

## 📁 Project Structure

- `src/` - Application source code
  - `lib/` - Shared components, styles, and assets
  - `routes/` - SvelteKit routes and page components
- `static/` - Static assets (favicon, manifest, etc.)

## 👨‍💻 Code Style Guidelines

- Follow ESLint configuration with recommended rules
- Use relative imports or $lib alias for internal modules
- Use PascalCase for components, camelCase for variables/functions
- Keep components small and focused on a single responsibility
