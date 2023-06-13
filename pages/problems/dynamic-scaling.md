# Dynamic scaling of a cluster is not working!
From: https://github.com/camunda/zeebe/issues/4391

So, without **stopping** and **wiping** cluster:
1. You can't add Zeebe Broker nodes
2. You can't add partitions
3. Rolling update is not working explicitly (https://github.com/camunda/camunda-platform-docs/issues/221)

<img src="https://3seaseurope.com/wp-content/uploads/2022/07/1-harold.webp" class="w-80" >

---
layout: quote
---
# Official procedure
From: https://docs.camunda.io/docs/self-managed/zeebe-deployment/operations/update-zeebe/

To update a Zeebe cluster, take the following steps:
1. Shut down all Zeebe brokers and other components of the system.
2. Take a backup of your Zeebe brokers and Elasticsearch data folder if used.
3. Update all Zeebe brokers and gateways to the new version.
4. Restart the system components.
