## Technical Analysis: Cloudflare R2 + CDN Integration for HTML/CSS Share Artifacts

### Objectives

* Support low-cost, scalable delivery of static share artifacts
* Host generated HTML + CSS files outside the app runtime
* Minimize maintenance and operational complexity
* Ensure fast global delivery with edge caching

---

## Architecture Overview

### Pipeline

* React editor generates HTML + CSS artifacts from modular component structure
* Artifacts are uploaded as static files to Cloudflare R2
* CDN fronts R2 to cache and deliver files globally
* Azure Web App hosts the main product and share viewer route
* Share page embeds or links static artifacts from CDN URL

### Asset Model

* One artifact per share link
* Files stored as immutable versions
* Access via signed or public URLs depending on privacy model

---

## Storage Structure (R2 Bucket)

### Bucket Layout

* `projects/{thread_id}/artifact/index.html`
* `projects/{thread_id}/artifact/styles.css`
* `projects/{thread_id}/metadata.json` (optional)

### File Characteristics

* Deterministic output from React pipeline
* No build system — artifacts are standalone
* Cache-friendly, versioned by path

---

## CDN Fronting Strategy

### Purpose

* Serve assets from edge cache instead of bucket
* Reduce read operations and latency
* Provide stable public URL layer

### Routing Model

* `https://assets.yourapp.com/share/{thread_id}/index.html`
* `https://assets.yourapp.com/share/{thread_id}/styles.css`

### Cache Controls

* Long-lived cache for artifact files
* Immutable pathing to avoid invalidation
* Optional private links via signed URLs

---

## Required Cloudflare Services

### Core Services

* R2 Object Storage
* Cloudflare CDN (zone + DNS)
* Optional Worker for origin routing and headers

### Optional Enhancements

* Signed URL enforcement for private links
* Automatic artifact expiration policy
* Analytics for share traffic

---

## Integration Steps

### Bucket Setup

* Create R2 bucket for share artifacts
* Configure access keys for backend upload
* Define naming convention for project files

### CDN Configuration

* Create subdomain for asset delivery
* Route subdomain through Cloudflare DNS
* Bind R2 bucket as CDN origin
* Add cache headers via Worker or origin rules

### Application Integration

* Upload artifacts after generation
* Persist R2 object path with project record
* Render share page via Azure route
* Load artifact using CDN URL in iframe or direct render

---

## Security and Governance

### Access Patterns

* Public links for demo-style sharing
* Signed URLs for restricted previews
* No direct bucket access from client

### Operational Constraints

* Treat artifacts as immutable
* Enforce maximum artifact size
* Apply retention policy if necessary

---

## Developer Implementation Checklist

### Storage

* [ ] Define bucket and directory structure
* [ ] Implement upload client in backend
* [ ] Store artifact reference with thread_id

### CDN

* [ ] Configure domain routing to Cloudflare
* [ ] Bind R2 bucket as origin
* [ ] Apply cache and MIME headers

### App

* [ ] Generate HTML + CSS from React editor
* [ ] Upload artifacts on save or publish
* [ ] Render share page iframe using CDN URLs

---

## Guiding Principles

* Prefer simple static artifacts over runtime rendering
* Treat R2 as immutable artifact store
* Let CDN absorb read traffic
* Keep pipeline deterministic and repeatable
