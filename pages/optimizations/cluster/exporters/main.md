---
layout: section
---

# Exporters

---
layout: statement
---

# Exporters could affect processing

<br>

The IO thread pool is used both by exporters and disk operations.
So, slow exporters **could** affect your processing. Also, if exporters go down, processing also goes down 🙁
