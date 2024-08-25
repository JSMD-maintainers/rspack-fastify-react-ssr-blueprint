# JSMDG Rspack + Fastify + React SSR Blueprint Project

Welcome to the JSMDG's Rspack + Fastify + React SSR Blueprint Project! This repository serves as a comprehensive guide and boilerplate for setting up a powerful and efficient server-side rendering (SSR) application using Rspack, Fastify, and React. Built with scalability and performance in mind, this blueprint is designed to be a starting point for your next high-performance, SSR-powered React application.

## Overview

### Why This Project?
Server-side rendering (SSR) in React can significantly improve the performance and SEO of your web applications. While there are many SSR setups available, this blueprint leverages cutting-edge technologies to ensure that your project is not only fast but also highly maintainable and scalable.

### Key Technologies
- **Rspack**: A high-performance JavaScript bundler, optimized for both build speed and runtime performance. Rspack is a modern alternative to Webpack, providing similar capabilities with significant performance gains.
- **Fastify**: A fast and low-overhead web framework for Node.js. Fastify is known for its performance and extensibility, making it an ideal choice for high-performance applications.
- **React**: A popular JavaScript library for building user interfaces. This blueprint uses React for both client-side and server-side rendering, ensuring a seamless user experience.
- **Server-Side Rendering (SSR)**: With SSR, your React components are rendered on the server, improving load times and making your application more SEO-friendly.

## Features

- **Fast and Individual Bundling**: Leverage the power of Rspack for blazing-fast build times for client and server.
- **High-Performance HTTP Server**: Fastify ensures your application is capable of handling high traffic with low latency.
- **Full SSR Support**: Pre-render your React components on the server to deliver a fully interactive experience as soon as the page loads.
- **Modular and Extensible**: Built with scalability in mind, this blueprint can be easily extended or modified to suit your specific needs.
- **Production-Ready Setup**: Includes environment-based configuration, optimized build processes, and best practices for deploying SSR applications in production.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (>= 20.x)
- **npm** (>= 10.x)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/JSMD/rspack-fastify-react-ssr-blueprint.git
cd rspack-fastify-react-ssr-blueprint
npm install
```

### Project Structure

Here's a quick overview of the project's structure:

```bash
├── client
│   ├── App.tsx                       # React component
│   ├── createInitializer.tsx         # Setup for providing hydration capabilities
│   ├── externals.ts                  # Entry point for externals
│   ├── index.ts                      # Entry point for client-side React
├── server
│   └── index.ts                      # Entry point for server setting up fastify
├── scripts                           # Compiled files
│   └── devServer.ts                  # Script for providing hot-reloading
├── rspack.config.client.js           # Rspack client configuration
├── rspack.config.server.js           # Rspack server configuration
└── package.json                      # Project dependencies and scripts
```

### Running the Development Server

To start hot reloading server, run:

```bash
npm run dev:server
```

This will start a Fastify server on `http://localhost:3000` with hot-reloading enabled for both server and client-side code.

### Building the project

To build the project:

```bash
npm run build
```

This will create a build in the `build` & `dist` directory.

## How It Works

### Rspack for Bundling

Rspack is configured to bundle your React components for both client and server targets. The server-side bundle is used by Fastify to render React components on the server, while the client-side bundle is served to the browser.

### Fastify for Server-Side Rendering

Fastify is set up to handle all incoming requests, rendering the appropriate React page on the server and sending it to the client. This ensures that the initial page load is fast and SEO-friendly, with React taking over once the client-side JavaScript is loaded.

### React for UI

React is used as the UI library, providing a declarative and component-based approach to building user interfaces. In this setup, React components are rendered on the server and hydrated on the client, offering the best of both worlds in terms of performance and interactivity.

## Contributing

We welcome contributions from the community! If you have ideas for improvements, feel free to open an issue or submit a pull request. Please follow our [contribution guidelines](CONTRIBUTING.md) to ensure a smooth collaboration.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

Special thanks to the open-source community for their continuous efforts in advancing web technologies. This blueprint is inspired by the work of many talented developers and contributors across various projects!

---

Happy coding! If you find this blueprint helpful, give it a star ⭐ on GitHub, and share it with your network.

For more projects and updates from JSMDG, follow us on [GitHub](https://github.com/JSMDG).

---

**Jochen Schweizer Mydays Group**  
Empowering developers to build innovative and high-performance web applications.