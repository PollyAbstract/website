# -----------------------
# Base image with Node and pnpm via Corepack
# -----------------------
FROM node:20-alpine AS base

# Enable and install pnpm using Corepack
RUN corepack enable && corepack prepare pnpm --activate

# -----------------------
# Dependencies layer
# -----------------------
FROM base AS deps
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# -----------------------
# Builder layer
# -----------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# -----------------------
# Production runner
# -----------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup -S nodejs && adduser -S sveltekit -G nodejs

# Copy built app
COPY --from=builder /app/build ./build

# Copy runtime files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules

# Fix ownership
RUN chown -R sveltekit:nodejs .

USER sveltekit

EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0

CMD ["node", "build/index.js"]
