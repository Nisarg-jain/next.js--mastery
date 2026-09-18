# Next.js 15 App Router Architecture Reference

## Component Boundary Guidelines

### Server Components (Default)
- **Use cases:** Data fetching via ORM/database, reading secrets/environment variables, rendering static content, layout shells.
- **Guardrail:** Guard sensitive server code using `import "server-only";` to prevent accidental bundling in client builds.
- **Constraints:** Cannot use React state (`useState`), effects (`useEffect`), or browser-only APIs (`window`, `localStorage`).

### Client Components (`"use client"`)
- **Use cases:** User interaction, event listeners (`onClick`, `onChange`), browser APIs, animations, and custom hooks.
- **Guardrail:** Guard browser-specific code using `import "client-only";` to prevent execution during SSR.
- **Leaf-node rule:** Push the `"use client"` boundary as deep down the component tree as possible to minimize client JavaScript bundle size.

### Third-Party & Context Integration
- **Third-Party Libraries:** Wrap client-only packages (e.g., carousels, rich-text editors) in dedicated Client Components before consuming them in Server Components.
- **Context Providers:** Place Providers in a dedicated `"use client"` file and pass `{children}` from the root `layout.tsx` so child pages remain Server Components.