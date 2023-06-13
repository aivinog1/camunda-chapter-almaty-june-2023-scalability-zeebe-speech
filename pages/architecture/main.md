---
layout: section
---

# Architecture

---

# Brief

The whole system consists of two parts:
- Cluster
  - Zeebe Gateways
  - Zeebe Brokers
  - Systems that you are using to export data to monitor processes (i.e. Operate)
  - Middleware (i.e. Keycloak, NGINX proxies, etc.)
- Your code
  - Applications that start your processes
  - Workers

---
src: ./zeebe-architecture.md
---

---
src: ./workers-architecture.md
---
