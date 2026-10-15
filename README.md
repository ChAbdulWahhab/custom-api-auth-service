# Custom API Service with Bearer Token Authentication

A minimal Express.js microservice demonstrating clean, production-grade **Stateless API Key Authentication** using custom middleware.

## Core Architecture

This project secures REST endpoints by intercepting requests through an automated pipeline:

```text
[Client Request] -> [Extract Header] -> [Validate Key] -> [Execute Controller] -> [Client Response]
```

* **Bearer Token Scheme (RFC 6750):** The service reads the industry-standard `Authorization: Bearer <token>` header, keeping authentication stateless and decoupling keys from public URLs.
* **Granular Error Handling:**
  * **401 Unauthorized:** Missing header. The client failed to provide identity.
  * **403 Forbidden:** Token provided but fails matching with the secure registry. The client is unrecognized.
* **Decoupled Structure:** Routes, logic, and middleware dependencies are cleanly separated into dedicated modules to maximize code maintainability.

## Code Roadmap for Production

1. **Eliminate Synchronous I/O:** Replace `fs.readFileSync` with an asynchronous database query or an in-memory storage layer like **Redis** to prevent blocking the single-threaded Node.js event loop.
2. **Secure Key Hashing:** Store API keys as cryptographically secure hashes (e.g., SHA-256) instead of plain text to protect data in the event of an infrastructure leak.
