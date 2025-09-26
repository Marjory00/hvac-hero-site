
# 🛠️ HVAC Hero - Digital Service Platform

This project is a modern, responsive, and state-of-the-art service platform designed for an imaginary regional HVAC (Heating, Ventilation, and Air Conditioning) company. It showcases my ability to build professional-grade, full-stack applications using Next.js, TypeScript, and modern architectural patterns.

**Portfolio Project By:** **Marjory D. Marquez, Software Engineer**

***

## 🚀 Key Technologies & Features

This application demonstrates proficiency in the following core areas:

| Category | Technology/Feature | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14 (App Router)** | Full-stack architecture, including server-side rendering (SSR) for static pages and client-side interaction. |
| **Language** | **TypeScript** | Strict typing across all components, interfaces, and state management for robustness and scalability. |
| **Styling** | **CSS Modules & Global CSS** | Implemented a component-level design system with CSS Variables for consistent branding and modular styling. |
| **State Management** | **Zustand** | Lightweight, modern library used for global state (e.g., managing the alert/toast notifications across the app). |
| **Architecture** | **Polymorphic Components** | Created a reusable `Button` component capable of rendering as different HTML tags (`<button>`, `<a>`) while maintaining consistent styling. |
| **SEO & Performance** | **Dynamic Metadata & Next/Image** | Utilized Next.js features for static metadata, dynamic slug-based metadata (Blog), and optimized image loading. |

***

## 💡 Case Study: Architectural Challenges & Solutions

### Challenge 1: Separating Confidential Logic (Portfolio Requirement)

For professional security, certain proprietary logic (e.g., the exact formula for service quote calculations) cannot be public, even in a portfolio.

| Problem | Solution |
| :--- | :--- |
| **Exposing Proprietary Code** | 1. **Segregation:** Moved sensitive files (e.g., `pricing_engine.ts`) to a private directory (`src/lib/private/`). |
| **Breaking the Public Repo** | 2. **Stubs & Aliases:** Created non-functional placeholder files (stubs) in `src/lib/private_stubs/`. |
| **The Switch** | 3. **`tsconfig.json`:** Configured `paths` to prioritize the **private** file locally and automatically fall back to the **public stub** for reviewers. The UI code remains clean and public. |

### Challenge 2: Client-Server State Communication (Contact Form)

The contact form is a client component that needs to communicate success/failure across the entire, server-rendered application layout without props drilling.

| Problem | Solution |
| :--- | :--- |
| **Cross-Component Feedback** | **Zustand UI Store:** Implemented a lightweight Zustand store (`uiStore.ts`) to manage alert visibility, message, and type. |
| **Integration** | The `ContactForm.tsx` (client) calls `showAlert('Success!')`. The `GlobalAlert.tsx` (client) is rendered once in the main `layout.tsx` (server) and subscribes to the store, displaying the toast notification globally. |

### Challenge 3: Ensuring Type Safety and DX

Managing complex HTML elements and props required a robust typing solution.

| Problem | Solution |
| :--- | :--- |
| **Button Polymorphism** | **Polymorphic Types:** Refactored the `Button.tsx` component using TypeScript generics (`<T extends ElementType>`) to correctly infer and merge props. This allows usage like `<Button as="a" href="/contact">`, providing full type-safety for both button and anchor HTML attributes. |

***

## 🌐 Project Structure

```
hvac-hero-site/
├── public/                 # Static assets (images, favicons)
│   └── images/
│       └── hvac-hero-van.png
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── (main)/         # Homepage, Contact, About, etc.
│   │   └── blog/[slug]/    # Dynamic routing with dynamic metadata
│   ├── components/         # All reusable UI and Layout components
│   │   ├── Layout/         # Header, Footer
│   │   ├── Sections/       # HeroSection, ContactForm, Testimonials, etc.
│   │   └── UI/             # Button, Card, Alert, Typography
│   ├── lib/
│   │   ├── data/           # Mock data (posts, services, projects)
│   │   ├── store/          # Zustand store definitions (uiStore.ts)
│   │   ├── private/        # 🔒 HIDDEN - Actual proprietary logic (.gitignore-d)
│   │   └── private_stubs/  # ✅ PUBLIC - Placeholder logic for review
│   └── styles/             # Global CSS variables and utility classes
├── .gitignore              # Hides .env.local and /src/lib/private
├── tsconfig.json           # Contains proprietary logic alias mappings
└── README.md
```

---

***

## 🚀 Installation & Running

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd hvac-hero-site
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Setup Environment Variables:**
    Create a file named **`.env.local`** in the root and add any necessary placeholder variables defined in the `.env.example` file.
4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:3000`.


---


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
