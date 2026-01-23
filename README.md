# Lightweight Digital Queue Management System

This project is a full-stack web application built to solve the problem of long physical queues in hospitals and clinics, especially in Tier-2 and Tier-3 cities. The system replaces physical queues with a token-based digital queue and notifies patients about their turn using WhatsApp alerts.

This project is developed as part of Kalvium Simulated Work Sprint 1 using Next.js and modern full-stack practices.

---

## Problem Statement

Hospitals and clinics in Tier-2 and Tier-3 cities still depend on physical queues for managing patient appointments. This leads to long waiting times, overcrowding, inefficiency for doctors, and poor patient experience. Most small clinics cannot afford expensive hospital management software or additional infrastructure.

---

## Solution Overview

The proposed solution is a lightweight digital queue management system that allows hospitals to generate tokens for patients and manage queues digitally. Patients receive timely notifications about their turn, reducing unnecessary waiting and crowding.

The system is designed to work with minimal infrastructure and basic internet connectivity.

---

## Target Users

Small hospitals and clinics  
Doctors and hospital staff  
Patients visiting outpatient departments  

---

## Core Features

Hospital staff authentication  
Doctor management  
Patient token generation  
Live queue management  
WhatsApp-based patient alerts  
Admin and doctor dashboard  

---

## Technology Stack

Frontend: Next.js with App Router and TypeScript  
Backend: Next.js API Routes  
Database: PostgreSQL  
ORM: Prisma  
Caching: Redis  
Containerization: Docker  
CI CD: GitHub Actions  
Deployment: AWS or Azure  

---

## Rendering Strategy Using Next.js App Router

This project uses all three rendering strategies provided by Next.js App Router to balance performance, scalability, and data freshness.

### Static Rendering

Used for pages such as Home and About. These pages contain static content and are generated at build time for fast loading and better SEO.

Implementation:
```ts
export const revalidate = false;
```

### Dynamic Rendering

Used for pages that require real-time or frequently updated data, such as live queue status or patient appointments.

Implementation:
```ts
export const dynamic = 'force-dynamic';
```

### Hybrid Rendering (ISR)

Used for pages that should be mostly fresh but can tolerate short delays, such as news or queue updates.

Implementation:
```ts
export const revalidate = 60;
```

---

## Next.js Rendering Strategies Demo

This project demonstrates three rendering strategies using Next.js App Router:

### 1. Static Rendering
- **Page:** `/static`
- **Config:** `export const revalidate = false;`
- **Why:** For content that rarely changes and does not require frequent updates. Fastest performance, lowest server cost, but data can become stale until the next build.
- **Caching Impact:** Maximizes cache efficiency, ideal for marketing or info pages.

### 2. Dynamic Rendering
- **Page:** `/dynamic`
- **Config:** `export const dynamic = 'force-dynamic';` and `fetch(..., { cache: 'no-store' })`
- **Why:** For content that must always be fresh (e.g., live queue status). Ensures up-to-date data but increases server load and cost.
- **Caching Impact:** No caching, highest freshness, but less scalable for high traffic.

### 3. Hybrid Rendering (ISR)
- **Page:** `/hybrid`
- **Config:** `export const revalidate = 60;`
- **Why:** For content that should be mostly fresh but can tolerate short delays (e.g., news, queue updates). Balances performance and freshness.
- **Caching Impact:** Pages are cached and revalidated every 60 seconds, reducing server load while keeping data reasonably fresh.

---

## Engineering Decisions & Reflections

- **Static:** Chosen for pages with infrequent updates. If user base increases tenfold, static pages scale effortlessly with CDN caching.
- **Dynamic:** Used for real-time data. With more users, server costs rise due to frequent computation and database hits.
- **Hybrid:** Best for frequently updated but not real-time data. ISR reduces server load and cost, scales well, and keeps data fresh enough for most use cases.

---

## Case Study: News Portal Scenario

- **Static Rendering:** News articles rendered statically can become stale if breaking news occurs. Users may see outdated headlines until the next build.
- **Dynamic Rendering:** Always fresh, but expensive—every user triggers a new server request, increasing infrastructure cost.
- **Balanced Solution:** Use ISR (`revalidate = 60` or lower) for news pages. Breaking news can be updated quickly, while most articles benefit from caching. For urgent updates, use dynamic rendering for specific endpoints.

---

## Video Explanation

- See the video link for a walkthrough of each page, data fetching, and trade-offs.
- Performance, cost, and scalability are discussed for each strategy.
- Rendering choices for production systems are explained.

---

## Submission Checklist
- [x] Static, dynamic, and hybrid pages implemented
- [x] README updated with explanations and reflections
- [ ] Pull request link added
- [ ] Video link added

---
