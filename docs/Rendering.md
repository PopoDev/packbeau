# Hybrid Rendering Pipeline Architecture

**Editor = WASM Runtime Bundle**
**Share Link = Static Artifact + Optional Video**

## Objective

Provide a scalable, low-maintenance architecture enabling:

1. **Fast, iterative in-browser editing** using client-side `esbuild-wasm`
2. **Static, CDN-served share links** for deterministic rendering
3. Support for **two share-link outputs**:

   - interactive demo (**HTML**)
   - generated or attached **video asset**

The solution must operate with:

- minimal server infrastructure
- predictable costs (ideally free or near-free)
- a straightforward ops model suitable for an early-stage startup

---

## High-Level Architecture

### Mode A — Editor Runtime (Development UX)

Used during creation and iteration.

| Component              | Responsibility                    |
| ---------------------- | --------------------------------- |
| Browser + esbuild-wasm | Fetch + bundle code client-side   |
| Convex / Database      | Persist project + thread versions |
| GitHub (optional)      | Canonical source snapshot storage |
| Preview Frame          | Renders live output               |

**Characteristics**

- instant iteration loop
- no backend compute cost
- zero CI/CD dependency
- performance tradeoff acceptable in editor context

---

### Mode B — Share Link Artifact (Distribution UX)

Executed during publishing, triggered by:

- Save → Publish
- Share link generation
- Version pinning

| Component                                                             | Responsibility                         |
| --------------------------------------------------------------------- | -------------------------------------- |
| Build Worker (GitHub Action / Convex job)                             | Convert live project → static artifact |
| Static Artifact Store (Cloudflare R2 / GitHub Pages / Vercel storage) | Persist immutable HTML + CSS output    |
| CDN Edge (Cloudflare Pages / Vercel Edge)                             | Serve artifact instantly               |
| Optional Video Worker (FFmpeg job)                                    | Generate MP4 preview                   |
| Video Hosting (Cloudflare Stream / R2 Public Blob)                    | Serve video asset                      |

**Result**

- consistent rendering
- zero cold-compile on access
- globally cached delivery
- low compute exposure

---

## Pipeline Flow

### 1 Editing Session (Runtime Mode)

```
User edits → AI / UI generates code
↓
Browser fetches modules
↓
esbuild-wasm bundles locally
↓
Preview iframe renders output
↓
Version persisted to Convex
```

No server-side compute invoked.

---

### 2 Publish Action (Static Conversion)

```
User clicks “Share”
↓
Background worker fetches latest version
↓
Generates:
  /artifacts/{thread_id}/{version}/page.html
  /artifacts/{thread_id}/{version}/style.css
↓
Uploads to Static Store
↓
Returns shareable URL:
  /p/{thread_id}/{version}
```

Artifact is **immutable and permanent**.


## Recommended Low-Cost Provider Stack

### Primary Recommendation

**Cloudflare-First Architecture**

| Service        | Role                        | Cost Profile               |
| -------------- | --------------------------- | -------------------------- |
| Cloudflare CDN | Serve static artifacts      | Free tier + global CDN     |
| Cloudflare R2  | Store HTML/CSS/video assets | Extremely low storage cost |

**Rationale**

- globally distributed
- zero-maintenance
- predictable pricing
- no cold-start complexity
- works cleanly with static output
- easy migration path to scale

This aligns well with a **lean startup ops model**.

### Why Not GitHub Raw + Runtime Bundling for Share Links

- unpredictable latency
- rate-limit exposure
- no stable caching
- high first-view compute overhead
- poor mobile/device performance

Runtime bundling is appropriate only for **editor mode**.

---

## Storage Structure

```
artifacts/
  {thread_id}/
    {version}/
      page.html
      style.css
      meta.json
```

Share Link Pattern:

```
/p/{thread_id}/{version}
/p/{thread_id}/latest  (edge-redirect to pinned version)
```

This ensures:

- immutability for published versions
- deterministic rendering
- safe rollbacks

---

## Caching Strategy

- Artifact HTML cached at edge indefinitely
- Version hash → permanent cache key
- `latest` resolves via lightweight redirect
- Video assets cached separately for streaming

---

## Operational Model

- No persistent servers
- No pipelines required outside Artifact Build Worker
- Failure Modes Localized:

  - worker fails → artifact not published
  - existing artifacts remain unaffected

---

## Security Posture

- Artifacts are immutable, read-only
- No public write surface
- Optional signed-URL support for unlisted shares
- Version boundary protects against mutation

---

## When Volume Grows

Future extensions (optional):

- background artifact warm-builds
- multi-target export (email, embed, PDF)
- adaptive streaming for long-form video
- signed revision histories

The architecture scales without redesign.

---

## Recommendation Summary

- **Editor Mode → esbuild-wasm browser bundling**

  - fast iteration
  - zero backend compute

- **Share Link Mode → static artifact + CDN delivery**

  - deterministic render
  - instant load performance
  - global availability

- **Provider Choice**

  - **Cloudflare CDN + R2**
    best cost-to-reliability ratio for startups
