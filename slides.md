---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## How scalable and performant is Zeebe? 

   https://community.camunda.com/events/details/camunda-camunda-chapter-almaty-presents-pochemu-camunda-8-i-chto-pod-kapotom-why-camunda-8-what-is-inside/
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# How scalable and performant is Zeebe?

---
src: ./pages/intro/main.md
---

---
src: ./pages/architecture/main.md
---

---
layout: statement
---
# So, how performant and scalable it is?

---
src: ./pages/problems/main.md
---

---
src: ./pages/environment/main.md
---

---
src: ./pages/results/main.md
---

---
src: ./pages/optimizations/main.md
---

---

# Summary

1. Scaling of Zeebe Brokers right now isn't possible without downtime
   1. If you want to update without downtime you should have a two clusters at least plus some gateway to route the traffic
2. But first encountered weak spot is Zeebe Workers
   1. You should either migrate to the reactive Coworker
   2. Or play with threads, CPUs, instances
3. I advise you to apply enough memory, fix the heap and chose low pause GC (Shenandoah (tested), ZGC (not tested))
4. We can't reach the limit of performance, right now it is up to 170 PI/s, but we haven't tried more.
5. Performance benchmarks before going to the production.
