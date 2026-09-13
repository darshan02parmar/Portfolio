> A practical guide to organizing a scalable Next.js application with the App Router, Server Components, Server Actions, database access, client state, and AI workflows.

A Next.js project can start with just a few files:

```text
app/
└── page.tsx
```

That simplicity is great---until the application grows.

Soon you may add authentication, dashboards, database queries, forms, APIs, reusable components, custom hooks, state management, validation, and AI features. At that point, the important question is no longer **"Can Next.js handle this?"**

It becomes:

> **"Where should all this code live?"**

A good project structure is not simply about creating more folders. It creates clear boundaries between **routing, UI, business logic, data access, client-side state, authentication, and server-side functionality**.

This guide presents a practical structure for a scalable full-stack Next.js application using the App Router and modern full-stack patterns.

---

## Table of Contents

1.  [Why Project Structure Matters](#1-why-project-structure-matters)
2.  [The App Router Changes the Architecture](#2-the-app-router-changes-the-architecture)
3.  [A Production-Oriented Folder Structure](#3-a-production-oriented-folder-structure)
4.  [Keep `app/` Focused on Routing](#4-keep-app-focused-on-routing)
5.  [Use Route Groups to Keep URLs Clean](#5-use-route-groups-to-keep-urls-clean)
6.  [Organize UI with `components/`](#6-organize-ui-with-components)
7.  [Use `lib/` as the Application Core](#7-use-lib-as-the-application-core)
8.  [Server Components vs Client Components](#8-server-components-vs-client-components)
9.  [Push Client Components Toward the Leaves](#9-push-client-components-toward-the-leaves)
10. [Avoid Unnecessary `"use client"`](#10-avoid-unnecessary-use-client)
11. [Use Server Actions for Mutations](#11-use-server-actions-for-mutations)
12. [Where Server Actions Belong](#12-where-server-actions-belong)
13. [When API Route Handlers Still Make Sense](#13-when-api-route-handlers-still-make-sense)
14. [Give Database Access Its Own Boundary](#14-give-database-access-its-own-boundary)
15. [Organize Custom Hooks](#15-organize-custom-hooks)
16. [Separate Global Client State](#16-separate-global-client-state)
17. [Create an `agents/` Boundary for AI](#17-create-an-agents-boundary-for-ai)
18. [Keep Static Assets in `public/`](#18-keep-static-assets-in-public)
19. [Keep Middleware Focused](#19-keep-middleware-focused)
20. [Turbopack and Older Configurations](#20-turbopack-and-older-configurations)
21. [Establish a Predictable Dependency Direction](#21-establish-a-predictable-dependency-direction)
22. [What Should Not Go Inside `app/`](#22-what-should-not-go-inside-app)
23. [Don't Over-Engineer Small Projects](#23-dont-over-engineer-small-projects)
24. [Migrating from the Pages Router](#24-migrating-from-the-pages-router)
25. [A Simple File-Placement Decision Tree](#25-a-simple-file-placement-decision-tree)
26. [Final Recommended Structure](#26-final-recommended-structure)
27. [The Bigger Picture](#27-the-bigger-picture)

---

## 1\. Why Project Structure Matters

A small project might begin with:

```text
app/
components/
utils/
```

Six months later, those folders can become difficult to navigate:

```text
components/
├── Button.tsx
├── LoginForm.tsx
├── Dashboard.tsx
├── UserCard.tsx
├── BillingCard.tsx
├── Search.tsx
└── ...

utils/
├── auth.ts
├── database.ts
├── api.ts
├── validation.ts
├── formatting.ts
└── ...
```

Everything may still work, but the cost of adding new features increases.

A scalable architecture should make questions such as these easy to answer:

- Where do routes belong?
- Where should database queries live?
- Where should Server Actions live?
- Which components should run on the client?
- Where should reusable UI components go?
- Where should authentication logic live?
- Where should validation schemas live?
- Where should AI workflows and prompts live?
- How do we prevent business logic from leaking into route files?

The goal is **not** to create the maximum number of folders.

The goal is to create **clear boundaries**.

---

## 2\. The App Router Changes the Architecture

Modern Next.js applications use the **App Router**, centered around the `app/` directory.

The App Router introduces concepts such as:

- Server Components
- Client Components
- Layouts
- Route Groups
- Loading UI
- Error boundaries
- Route Handlers
- Server Actions

A basic application can look like this:

```text
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
├── components/
├── lib/
├── hooks/
├── stores/
├── agents/
├── public/
├── middleware.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

As the application grows, these directories can become more specialized.

The important idea is to let the folder structure communicate the architecture.

---

## 3\. A Production-Oriented Folder Structure

A larger full-stack application can use a structure like:

```text
my-app/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── api/
│   │   ├── webhooks/
│   │   │   └── stripe/
│   │   │       └── route.ts
│   │   └── ai/
│   │       └── stream/
│   │           └── route.ts
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
│
├── components/
│   ├── ui/
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── billing/
│   └── layouts/
│
├── lib/
│   ├── actions/
│   ├── api/
│   ├── db/
│   ├── auth/
│   ├── validations/
│   └── utils/
│
├── hooks/
├── stores/
├── agents/
│
├── public/
│   ├── images/
│   └── fonts/
│
├── middleware.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

You do **not** need to copy this structure blindly.

The important part is understanding why each boundary exists.

---

## 4\. Keep `app/` Focused on Routing

One of the easiest mistakes is treating `app/` as a general-purpose directory for application code.

Instead, think of it as the **routing and composition layer**.

For example:

```text
app/
├── dashboard/
│   └── page.tsx
├── settings/
│   └── page.tsx
└── layout.tsx
```

A route should not become a 500-line file containing:

- database queries
- validation
- authentication
- business rules
- reusable UI
- API calls

Instead, aim for a flow like:

```text
app
 ↓
components
 ↓
lib
```

The route composes the pieces rather than implementing the entire application.

### Why this helps

Keeping routes thin makes the underlying logic:

- easier to locate
- easier to reuse
- easier to test
- easier to change

---

## 5\. Use Route Groups to Keep URLs Clean

The App Router supports **Route Groups** using parentheses.

For example:

```text
app/
├── (auth)/
│   ├── login/
│   └── register/
│
└── (dashboard)/
    ├── dashboard/
    └── settings/
```

The parentheses are organizational and do not become part of the URL.

For example:

```text
app/(auth)/login/page.tsx
```

still produces:

```text
/login
```

This becomes particularly useful when different sections need different layouts.

For example:

```text
(auth)
└── minimal authentication layout

(dashboard)
└── sidebar + navigation layout
```

Route Groups therefore help you organize application areas without making URLs unnecessarily complex.

---

## 6\. Organize UI with `components/`

A useful distinction is between **generic UI primitives** and **feature-specific components**.

### `components/ui/`

These are reusable building blocks:

```text
components/
└── ui/
    ├── Button.tsx
    ├── Input.tsx
    ├── Modal.tsx
    ├── Badge.tsx
    └── Card.tsx
```

A `Button` should not know anything about billing or authentication.

It should remain a reusable UI primitive.

### `components/features/`

Feature-specific components can live separately:

```text
components/
└── features/
    ├── auth/
    │   ├── LoginForm.tsx
    │   └── RegisterForm.tsx
    │
    ├── dashboard/
    │   ├── MetricsGrid.tsx
    │   └── RecentActivity.tsx
    │
    └── billing/
        ├── PlanCard.tsx
        └── UsageChart.tsx
```

The distinction is simple:

```text
ui/
→ generic

features/
→ application-specific
```

That distinction becomes increasingly useful as the application grows.

---

## 7\. Use `lib/` as the Application Core

If `app/` represents routing, `lib/` can represent the application's core logic.

A practical structure is:

```text
lib/
├── actions/
├── api/
├── db/
├── auth/
├── validations/
└── utils/
```

### `lib/actions/`

Server-side mutations:

```text
lib/actions/
├── auth.ts
├── user.ts
└── billing.ts
```

### `lib/db/`

Database-related functionality:

```text
lib/db/
├── prisma.ts
└── queries/
    ├── users.ts
    └── billing.ts
```

### `lib/auth/`

Authentication configuration and helpers:

```text
lib/auth/
├── options.ts
└── session.ts
```

### `lib/validations/`

Validation schemas:

```text
lib/validations/
├── auth.ts
└── user.ts
```

### `lib/utils/`

Small, reusable, side-effect-free utilities:

```text
lib/utils/
├── cn.ts
├── format.ts
└── date.ts
```

A useful architectural rule is:

> **Core application logic should not depend on the UI layer.**

Prefer a dependency direction like:

```text
app
 ↓
components
 ↓
lib
```

rather than allowing `lib` to import from `components` or `app`.

---

## 8\. Server Components vs Client Components

This is one of the most important architectural concepts in the App Router.

Components are **Server Components by default**.

You opt into client-side execution with:

```tsx
"use client";
```

A component generally needs to be a Client Component when it uses:

- `useState`
- `useEffect`
- `useRef`
- browser APIs
- event handlers
- real-time client subscriptions
- client-only libraries

Otherwise, keeping it on the server is usually preferable.

### Quick comparison

Server Component Client Component

---

Default Requires `"use client"` Runs on the server Runs in the browser Good for data fetching Good for interactivity Can access server-side resources Can use browser APIs Can be async Uses state/effects Helps reduce client JavaScript Adds client JavaScript

The goal is not to eliminate Client Components.

The goal is to use them **where they provide actual value**.

---

## 9\. Push Client Components Toward the Leaves

One of the strongest patterns is to keep as much of the component tree on the server as possible.

Imagine a dashboard:

```text
Dashboard
├── Header
├── Metrics
├── Activity
├── Search
└── Filters
```

The dashboard structure, header, metrics data, and activity display may not need client-side JavaScript.

But these parts might:

```text
Search
Filters
Interactive charts
```

Instead of:

```text
Dashboard
└── "use client"
    └── Everything else
```

prefer:

```text
Dashboard (Server)
├── Header (Server)
├── Metrics (Server)
├── Activity (Server)
├── Search (Client)
└── Filters (Client)
```

This keeps the interactive boundary small and avoids turning an entire page into client-side code unnecessarily.

---

## 10\. Avoid Unnecessary `"use client"`

A common shortcut is placing:

```tsx
"use client";
```

at the top of a large component tree simply because hooks are needed somewhere inside it.

That can undermine the benefits of Server Components.

Prefer:

```text
Server Component
├── Server Component
├── Client Component
└── Server Component
```

over:

```text
Client Component
└── Everything else
```

The best question to ask is:

> **Does this component actually need client-side behavior?**

If not, keep it on the server.

---

## 11\. Use Server Actions for Mutations

Traditional full-stack form handling often looks like:

```text
Form
 ↓
POST /api/users
 ↓
API Handler
 ↓
Validation
 ↓
Database
 ↓
Response
```

Server Actions allow many internal mutations to be modeled more directly.

A Server Action is a server-side function marked with:

```tsx
"use server";
```

For example:

```tsx
// lib/actions/user.ts

"use server";

export async function updateUser(formData: FormData) {
  // validate input
  // authenticate user
  // update database
}
```

The UI can call the action through supported patterns without creating a separate API endpoint for every internal mutation.

### A practical production flow

```text
Form
 ↓
Server Action
 ↓
Validation
 ↓
Authentication
 ↓
Database
 ↓
Revalidation / Response
```

This keeps mutation logic close to the application core.

---

## 12\. Where Server Actions Belong

Instead of putting reusable Server Actions directly inside route files:

```text
app/dashboard/page.tsx
```

keep them in:

```text
lib/actions/
├── auth.ts
├── user.ts
├── billing.ts
└── posts.ts
```

This makes business operations easier to find and reuse.

A useful mental model is:

```text
app
 ↓
components
 ↓
actions / queries
 ↓
database
```

---

## 13\. When API Route Handlers Still Make Sense

Server Components and Server Actions reduce the need for traditional API endpoints, but API Route Handlers are still useful.

Good use cases include:

- webhooks
- external API integrations
- streaming endpoints
- endpoints consumed by external clients
- situations where an HTTP endpoint is explicitly required

For example:

```text
app/
└── api/
    ├── webhooks/
    │   └── stripe/
    │       └── route.ts
    │
    └── ai/
        └── stream/
            └── route.ts
```

The principle is not:

> "Never use APIs."

It is:

> **Don't create an API endpoint when a Server Component or Server Action already solves the problem cleanly.**

---

## 14\. Give Database Access Its Own Boundary

Database logic should not be scattered throughout the UI.

Instead:

```text
lib/
└── db/
    ├── prisma.ts
    └── queries/
        ├── users.ts
        ├── posts.ts
        └── billing.ts
```

A Server Component can then call a query such as:

```tsx
const users = await getUsers();
```

rather than embedding database implementation details directly inside a page.

The separation becomes:

```text
UI
 ↓
Query
 ↓
Database
```

This makes database changes easier to contain and reason about.

---

## 15\. Organize Custom Hooks

Client-side custom hooks deserve their own directory:

```text
hooks/
├── useAuth.ts
├── useDebounce.ts
├── useLocalStorage.ts
└── useMediaQuery.ts
```

These hooks often depend on React state, effects, or browser APIs.

Keeping them separate makes the client-side boundary visible in the file system.

---

## 16\. Separate Global Client State

If an application needs global client-side state, use a dedicated directory:

```text
stores/
├── auth.ts
├── onboarding.ts
└── support.ts
```

This could contain Zustand, Jotai, Redux, or another client-state solution.

Keep the distinction clear:

```text
Server data
→ database / server queries

Client state
→ stores
```

Do not automatically put everything into a global store.

If data can simply be fetched on the server and passed down, a global client store may not be necessary.

---

## 17\. Create an `agents/` Boundary for AI

Modern applications increasingly include AI features.

Instead of scattering:

- LLM calls
- prompts
- tools
- streaming logic
- agent orchestration

across random components and API routes, establish an explicit AI boundary:

```text
agents/
├── support/
│   ├── agent.ts
│   ├── prompts.ts
│   └── tools.ts
│
├── research/
│   ├── agent.ts
│   ├── prompts.ts
│   └── tools.ts
│
└── shared/
    └── types.ts
```

This becomes particularly useful when an AI system grows beyond a single model call.

A clean flow can look like:

```text
Chat UI
 ↓
Server Action / Route Handler
 ↓
Agent
 ↓
Tools
 ↓
Database / External APIs
```

Now the AI architecture has a clear home instead of being mixed into UI and routing code.

---

## 18\. Keep Static Assets in `public/`

Images, fonts, icons, and other static assets can live under:

```text
public/
├── images/
├── fonts/
└── icons/
```

For example:

```text
public/
└── images/
    ├── logo.png
    ├── hero.webp
    └── avatar.png
```

This keeps static assets separate from application logic.

---

## 19\. Keep Middleware Focused

If middleware is used for:

- authentication checks
- redirects
- request-based logic
- A/B routing

keep it at the project level:

```text
middleware.ts
```

Middleware should remain focused on **request-level concerns**.

Do not turn it into your entire backend.

---

## 20\. Turbopack and Older Configurations

Modern Next.js development uses Turbopack as the development bundler.

When working with an older application, review assumptions around:

- custom Webpack configuration
- aliases
- CSS handling
- plugins
- framework-specific workarounds

If a project was built around older bundler-specific behavior, migration may require configuration cleanup rather than simply copying the old setup forward.

---

## 21\. Establish a Predictable Dependency Direction

One of the easiest ways to keep a large project maintainable is to establish a predictable dependency direction.

A useful mental model is:

```text
        app
         ↓
    components
         ↓
        lib
      ↙ ↓ ↘
   auth db actions
         ↓
 external services
```

And separately:

```text
components
     ↓
   hooks
     ↓
 client state
```

The exact architecture will vary between applications.

The principle remains:

> **Keep dependencies moving in predictable directions.**

When everything can import everything else, the architecture quickly becomes difficult to maintain.

---

## 22\. What Should Not Go Inside `app/`

Avoid turning:

```text
app/dashboard/page.tsx
```

into:

```text
page.tsx
├── database queries
├── validation
├── authentication
├── business rules
├── API clients
├── reusable components
└── UI
```

Instead:

```text
app/dashboard/page.tsx
        ↓
components/features/dashboard/
        ↓
lib/db/
lib/actions/
lib/auth/
lib/validations/
```

The route becomes an **orchestration layer**, rather than the entire application.

---

## 23\. Don't Over-Engineer Small Projects

Not every project needs every possible directory.

For a small application, you may only need:

```text
app/
components/
lib/
public/
```

You do not need to add:

```text
agents/
stores/
services/
repositories/
factories/
adapters/
```

just because a large project uses them.

A good rule is:

> **Architecture should evolve with the application.**

Start simple.

Introduce boundaries when there is an actual reason for them.

---

## 24\. Migrating from the Pages Router

If you are coming from:

```text
pages/
├── index.tsx
├── dashboard.tsx
└── api/
```

do not simply move every file mechanically.

The App Router introduces a different architectural model.

A traditional Pages Router application may rely on:

```text
Pages Router
→ API routes
→ getServerSideProps
→ getStaticProps
→ client-side fetching
```

A modern App Router architecture can instead use:

```text
App Router
→ Server Components
→ Server Actions
→ Route Handlers where needed
```

Migration should therefore be treated as an **architectural change**, not simply a folder rename.

---

## 25\. A Simple File-Placement Decision Tree

When creating a new file, ask:

### Is it a route?

Put it in:

```text
app/
```

### Is it reusable UI?

Put it in:

```text
components/ui/
```

### Is it tied to a specific feature?

Put it in:

```text
components/features/
```

### Does it contain business logic?

Consider:

```text
lib/
```

### Does it access the database?

Consider:

```text
lib/db/
```

### Is it a mutation?

Consider:

```text
lib/actions/
```

### Does it require browser APIs or React client hooks?

Consider:

```text
hooks/
```

or a Client Component.

### Is it AI orchestration?

Consider:

```text
agents/
```

This simple decision process prevents a lot of architectural mess.

---

## 26\. Final Recommended Structure

For a full-stack Next.js application that includes authentication, a database, client state, and AI features, a strong starting point is:

```text
my-app/
│
├── app/                    # Routes & layouts
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── api/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
│
├── components/             # UI
│   ├── ui/
│   ├── features/
│   └── layouts/
│
├── lib/                    # Application core
│   ├── actions/
│   ├── api/
│   ├── db/
│   ├── auth/
│   ├── validations/
│   └── utils/
│
├── hooks/                  # Client hooks
│
├── stores/                 # Client state
│
├── agents/                 # AI workflows
│
├── public/                 # Static assets
│
├── middleware.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 27\. The Bigger Picture

A good Next.js structure is not about following one magical folder hierarchy.

It is about making the architecture **obvious**.

When someone joins your project, they should quickly understand:

```text
Where are the routes?
        ↓
Where is the UI?
        ↓
Where is the business logic?
        ↓
Where is the database?
        ↓
Where are mutations?
        ↓
Where is client state?
        ↓
Where is authentication?
        ↓
Where are AI workflows?
```

If those answers are obvious from the directory structure, you have already solved a major part of the maintainability problem.

The most important lesson is:

> **Organize your project around responsibilities, not convenience.**

Keep routes focused on routing. Keep UI focused on presentation. Keep business logic in the application core. Keep database access behind a clear boundary. Keep Client Components limited to places that actually need client-side behavior. And as AI becomes part of the application, give agent workflows their own architectural home.

That approach lets a Next.js application grow from a small prototype into a much larger full-stack system without turning the codebase into a maze.

---

## Quick Reference

| What it is            | Where it goes          |
| --------------------- | ---------------------- |
| Routes & layouts      | `app/`                 |
| Route groups          | `app/(group)/`         |
| API endpoints         | `app/api/`             |
| Generic/shared UI     | `components/ui/`       |
| Feature-specific UI   | `components/features/` |
| Server Actions        | `lib/actions/`         |
| Database layer        | `lib/db/`              |
| Auth config & helpers | `lib/auth/`            |
| Validation schemas    | `lib/validations/`     |
| Shared utilities      | `lib/utils/`           |
| API client wrappers   | `lib/api/`             |
| Custom hooks          | `hooks/`               |
| Global client state   | `stores/`              |
| AI/agent workflows    | `agents/`              |
| Static files          | `public/`              |
| Request-level logic   | `middleware.ts`        |

---

### The Core Idea

**Begin minimal, add structure only once the project actually needs it, and keep every import flowing in one direction rather than crisscrossing across layers.**
