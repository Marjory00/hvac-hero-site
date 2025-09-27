# 🛠️ Project: HVAC Hero – Modern Web Development Case Study

**Portfolio Project By: Marjory D. Marquez, Software Engineer**

This project is a comprehensive **case study** demonstrating the architecture and development of a high-performance, responsive service platform for a regional HVAC company. Utilizing **Next.js 14 (App Router)** and **TypeScript**, this application showcases advanced software engineering practices, clean code, and solutions to real-world deployment and state management challenges.

***

## 🚀 Key Technologies & Technical Features

The application leverages a modern, full-stack approach, highlighting proficiency in the following core technologies:

| Category | Technology/Feature | Engineering Focus |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14 (App Router)** | Full-stack architecture, utilizing **Server Components** (SSR) for static content and **Client Components** for interactivity, ensuring maximal performance. |
| **Language** | **TypeScript** | Strict typing across all components, interfaces, and state for robustness and scalability, leading to a high Developer Experience (DX). |
| **Styling** | **CSS Modules & Variables** | Implemented a component-level design system with encapsulated styling for maintainability and reduced global namespace conflicts. |
| **State Management** | **Zustand** | Lightweight, modern library used for managing global UI state (e.g., alert/toast notifications) without relying on prop drilling. |
| **Architecture** | **Polymorphic Components** | Designed a reusable `Button` component using **TypeScript Generics** to correctly infer and merge props, allowing it to render as different semantic HTML tags (`<button>`, `<a>`) while retaining full type-safety. |
| **Optimization** | **Dynamic Metadata & Next/Image** | Utilized platform features for static and dynamic SEO metadata and optimized image delivery (including `fill` and responsive `sizes` props) for fast LCP scores. |

***

## 💡 Engineering Case Study: Core Challenges & Solutions

This project addresses three distinct architectural challenges faced when building professional, scalable applications: security, cross-component communication, and type safety.

### Challenge 1: Segregating Proprietary Logic (Security/Deployment)

**Goal:** Allow public review of the UI while protecting sensitive business logic (e.g., service quote formulas).

| Problem | Solution Implemented |
| :--- | :--- |
| **Exposing Confidential Code** | **Code Segregation:** Moved sensitive files (e.g., `pricing_engine.ts`) to a private directory (`src/lib/private/`) which is excluded via `.gitignore`. |
| **Breaking the Public Repository** | **Public Stubs & Aliases:** Created non-functional placeholder files (stubs) in `src/lib/private_stubs/`. |
| **Execution Switch** | Configured **`tsconfig.json` paths** to prioritize the **private** files locally and automatically fall back to the **public stub** for any external reviewer cloning the repo. |

### Challenge 2: Client-Server State Communication (Global UI Feedback)

**Goal:** Enable a deeply nested **Client Component** (the Contact Form) to trigger a notification visible across the entire application **Layout** (which is a **Server Component**).

| Problem | Solution Implemented |
| :--- | :--- |
| **Cross-Component Feedback** | **Zustand UI Store:** A lightweight store (`uiStore.ts`) was implemented to manage alert visibility and message content. |
| **Asynchronous Integration** | The `ContactForm.tsx` (Client) updates the store (`showAlert('Success!')`), and the `GlobalAlert.tsx` (Client) is rendered once in the main `layout.tsx` (Server) where it subscribes to the global store, displaying the toast notification without prop drilling. |

### Challenge 3: Ensuring Type Safety and Component Reusability

**Goal:** Create a `Button` component that is flexible, highly reusable, and fully type-safe.

| Problem | Solution Implemented |
| :--- | :--- |
| **Polymorphism Typing** | **Polymorphic Types with Generics:** Refactored `Button.tsx` using TypeScript Generics (`<T extends ElementType>`) to correctly infer and merge the HTML attributes of the underlying element (`<button>`, `<a>`, or `<Link>`). This ensures full type-safety for attributes like `href` or `disabled`. |

***

## 🌐 Project Structure

The architecture follows Next.js App Router best practices for clear separation of concerns.

```
vac-hero-site/
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
├── .gitignore              # Hides sensitive files and environment variables
└── tsconfig.json           # Configures proprietary logic alias mappings

```

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
    Create a file named **`.env.local`** in the root and add any necessary placeholder variables defined in the (optional) `.env.example` file.
4.  **Run the application:**
    ```bash
    npm run dev
    ```
    The application will be accessible at **`http://localhost:3000`**.

