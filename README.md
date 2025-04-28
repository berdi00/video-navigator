# 📼 Instant-Play Video Navigator

**Instant-Play Video Navigator** is a simple yet powerful offline-capable video player built using modern front-end technologies. It allows users to preload videos via a service worker and navigate between them seamlessly, even without an internet connection.

---

## Resources that helped to build

- [CacheStorage API](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)

- [Simple service worker example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)

## 🛠️ Built With

- **React** – Front-end library for building dynamic UIs
- **TypeScript** – Strongly typed superset of JavaScript for safer code
- **Vite** – Next-generation front-end tooling (fast dev server and optimized build)
- **TanStack Router** – Type-safe, file-based routing for React applications
- **pnpm** – Fast and efficient package manager

---

## 🚀 Getting Started

### Prerequisites

- Node.js (>=18 recommended)
- pnpm (preferred)  
  Install pnpm globally if you don't have it yet:
  ```bash
  npm install -g pnpm
  ```

### Installation

Clone the repository and install dependancies

```bash
git clone https://github.com/berdi00/video-navigator
cd video-navigator
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

> **Note:** Service worker will fail to register in dev server, please read [Why is my service worker failing to register](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#why_is_my_service_worker_failing_to_register)

## Briefly about my approach

To be honest, because i was new in caching, and working with service worker, i had to consume a lot of resources to start building the project. The first thing i did was to filter the real video links from all links (some of them are broken).And next step was to create service worker to make caching possible.

I had a lot of trouble in registering the service worker at first, had to make multiple deployments to vercel to try out different approach.(in dev server, it was not possible to register). After successfully registering, installing, and activating the service worker, the second issue emerged which was sw was intercepting all fetch requests (chrome extensions, websocket that vite using) which i fixed it later.

Finally, everything worked out amazingly, once the service worker registered and active, the videos can be played offline. Performance is also faster than i imagined.
