---
layout: section
---

# Broker

---
layout: center
---
# Problems
In short: we should have as much low latency as possible.

In my experience the most common problems are next:

1. Heart Beat missing under stable load
2. Not enough threads for I/O and processing
3. Low disk performance

---
layout: section
---

# Weak Spots

---
layout: statement
---

# Weak Spot #1 - SWAP
<br>

SWAP could be pretty painful and cause cluster rebalancing. If you are using K8S - SWAP should be already disabled on the nodes.

---
layout: statement
---
# Weak Spot #2 - Actor
<br>

It should be useful to enable monitoring of the Actor and using adjust threads if needed.
- IO Threads: 2 threads
- Processing Threads: 5
- CPU cores 12

This is enough for 10 partitions

---
layout: center
---
# Zeebe Broker Memory Model

This is not exact and rather brief and could be without some parts of the memory. 

1. JVM parts
2. Partitions
3. State

---
layout: center
---
# Zeebe Broker Memory Model: JVM parts

1. Heap
2. Off-heap (stack, classes, native parts, etc.)

---
layout: center
---
# Zeebe Broker Memory Model: Partitions

1. Stores data in the Segments
    1. One Segment is active in the one partition in one period of time
    2. Uses Memory Mapped Buffer a.k.a Memory Mapped File a.k.a `mmap`
    3. Segment size is 128Mb by default (configurable)
        1. When Zeebe finishes writing at a segment it creates another one
        2. Then, when an old Segment class is GCed, the GC flips the first bit at the Segment file that makes it available to the `mmap` (OS) GC
2. Lives on the Leader and Follower

---
layout: center
---
# Zeebe Broker Memory Model: State

1. Uses RocksDB as storage
2. It uses `mmap` underneath too
3. 512Mb RAM per partition

---
layout: statement
---
# Zeebe Broker Memory Model: Problem

Allocation collision between parts (most common between Heap and Segments) leads to cluster rebalancing. 

---
layout: center
---
# JVM GC
<br>

Three main characteristics of the GC:
1. Latency, i.e. pauses
2. Throughput
3. Memory Overhead

---
layout: statement
---

# Weak Spot #3 - JVM
In short, it is better to preallocate the heap and use low pause GC.

1. Fix the heap to one value with `-Xms` and `-Xmx` and preallocate it with `-XX:+AlwaysPreTouch`
2. Use a low pause GC, i.e. Shenandoah `-XX:+UseShenandoahGC`

To learn more about Shenandoah GC I recommend addressing: https://shipilev.net/#shenandoah

---
layout: statement
---
# Weak Spot #4 - Enough RAM in the Container

The formula that works in our case:

$$
\begin{array}{c}
RSS \approx (HeapSize + OffHeapSize + \\
RocksDBMaximumSize * Partitions + 
SegmentSize * Partitions * LoadFactor) * 1.3 \\
HeapSize \approx 4000M \\
OffHeapSize \approx 128M \\
RocksDBMaximumSize = 512M \\
Partitions = 10 \\
SegmentSize = 128M \\
LoadFactor = 2 \\
RSS \approx (4000M + 128M + 512M * 10 + 128 * 10 * 2) * 1.3 \approx 15G
\end{array} 
$$

