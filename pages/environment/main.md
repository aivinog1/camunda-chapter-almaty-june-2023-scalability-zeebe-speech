---
layout: section
---

# Our environment
From: https://github.com/aivinog1/zeebe-notes

---

# Cluster

1. We are not using K8S right now
2. 7 VMs have the following resources:
   1. 16 Gb RAM
   2. 12 CPU cores
   3. 50 Gb of the fast SSD drive
   4. RHEL OS
3. In this machine lives one Zeebe Broker and one Zeebe Gateway
4. 10 partitions
5. Replication factor is 3
6. Zeebe Version 8.2.4
7. Elasticsearch Exporter
8. Zeebe Gateway is protected by Keycloak (https://github.com/camunda-community-hub/zeebe-keycloak-interceptor)

---

# Workers

1. About 30 worker types
2. About 10 applications with workers
3. Three instances of each application
4. Typical application has 0.3 CPU core, less than 1G RAM memory
5. One application consists of 10+ plus workers, others - less than 4, usually - one
6. All workers contain logic to get/put data from REST APIs, Web Services, and SOAP.

---
layout: center
---

# Architecture

1. We have a REST API which is used to start/send messages to process instances
2. We have two complete clusters of Zeebe (Zeebe Broker, Zeebe Gateway, workers, REST API to start/send messages to process instances)
3. We have a smart load balancer that balances between two clusters

---
layout: section
---

# Workload

---
layout: center
---

# Current Workload

1. Processing user's HTTP REST calls
2. 100% of the load ~ 40 PI/s, 80 HTTP RPS
3. All process instances must complete less than 15 sec (it is included 2-3 HTTP requests)

---
layout: statement
---

# Workload at the end of the year

<br/>

~ 120 PI/S, 240 HTTP RPS
