# Shayona Biotech - Next.js + Sanity

A fully dynamic, mobile-first agriculture and nursery product website built with **Next.js App Router**, **Tailwind CSS**, and **Sanity CMS**. The UX is designed for lead generation through **WhatsApp inquiries** (no cart/checkout).

## Features

- Dynamic products and categories from Sanity CMS
- Product listing with category + search filters
- Dynamic product details and category routes
- WhatsApp inquiry CTA on cards and product pages
- Sticky/floating WhatsApp quick chat button
- SEO metadata per page
- Responsive, modern, green-themed UI
- Loading skeletons for product pages

## Pages

- `/` Home
- `/products`
- `/products/[slug]`
- `/category/[slug]`
- `/about`
- `/contact`

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Sanity CMS

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment variables:

```bash
cp .env.example .env.local
```

3. Add your Sanity project values in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-07-10
```

4. Start development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

> If Sanity env variables are missing, the app automatically uses local mock data so development still works.

## Sanity CMS Setup

This repository includes Sanity schema files:

- `sanity/schemas/category.ts`
- `sanity/schemas/product.ts`

To bootstrap Sanity Studio in this project:

```bash
npm create sanity@latest -- --project <project-id> --dataset production --template clean --typescript --output-path studio
```

Then copy schema files from `sanity/schemas/*` into your Sanity Studio schema location and deploy the studio.

You can use `sanity/example-data/sample-data.json` as starter content.

## WhatsApp Message Format

The inquiry button uses:

```txt
Hi, I want to purchase [Product Name]
```

And generates links in this format:

```txt
https://wa.me/<phone>?text=<encoded-message>
```
