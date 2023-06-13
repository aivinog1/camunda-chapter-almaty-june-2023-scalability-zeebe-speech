---
layout: center
---
# Let's dig up in the client part

Again, we will focus on the JVM stack, and we are going to talk about the standard Zeebe Client Java worker.

I decided to split it into two logical parts:
- Creating processes, sending messages to resume your processes, and all non-worker parts
- Using workers to activate, execute some logic, and complete your jobs.

---
layout: center
---
# Creating processes
From: https://docs.camunda.io/docs/apis-tools/java-client-examples/process-instance-create/

Just use the `ZeebeClient`:
```java
final ProcessInstanceEvent processInstanceEvent =
        client
        .newCreateInstanceCommand()
        .bpmnProcessId(bpmnProcessId)
        .latestVersion()
        .send()
        .join();
```

---

# Workers
From: https://docs.camunda.io/docs/components/concepts/job-workers/#requesting-jobs

<img src="https://docs.camunda.io/assets/images/zeebe-job-workers-graphic-c269a71a110178aea5c55138a6afdb31.png" class="h-90">

---

# Going deeper

<style>
div.mermaid {
    width: 70%;
}
</style>

```mermaid
sequenceDiagram
    box rgba(0, 227, 0, 0.35) Zeebe Worker
        participant Scheduler
        participant Poller
        participant Handler
    end
    participant Zeebe Gateway

    alt less than the maximum amount of jobs in progress (by active jobs counter)
        Scheduler->>Poller: Singleton task. Let's try to get some jobs
        Poller-)Zeebe Gateway: Get available jobs
        activate Zeebe Gateway
        Zeebe Gateway->>Poller: Return jobs and increment the active jobs counter
        deactivate Zeebe Gateway
        loop for each returned jobs 
            Poller-)Handler: Execute your code for each job asynchronously
            Handler->>+Zeebe Gateway: Complete Job / Throw Error
            Zeebe Gateway->>-Handler: Success
            Handler->>Poller: Decrement active jobs counter
            alt less than the maximum amount of jobs in progress (by active jobs counter) 
                Handler->>Scheduler: Schedule a next task in 50ms
            end
        end
    else
        Scheduler-)Scheduler: Schedule a next task in 50ms
    end
```
