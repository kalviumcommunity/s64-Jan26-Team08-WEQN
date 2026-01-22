# s64-Jan26-Team08-WEQN

# Lightweight Digital Queue System for Tier-2/3 Hospitals

A simple, low-cost, and scalable digital queue management system designed for hospitals and clinics in Tier-2 and Tier-3 cities.  
The system replaces physical queues with a **token-based digital queue**, sending **real-time WhatsApp alerts** to patients about their turn — without requiring expensive hardware or infrastructure.

---

## Problem Statement

In Tier-2 and Tier-3 cities, hospitals and clinics still rely heavily on **physical queues** for medical appointments.  
This results in:

- Long waiting times for patients
- Overcrowded waiting areas
- Poor experience for elderly patients
- Stress on hospital staff and doctors
- No transparency on queue status
- Expensive hospital management software being unaffordable

Most small clinics lack the budget, technical staff, or infrastructure to adopt traditional digital appointment systems.

---

## Our Solution

We propose a **lightweight digital queueing system** that works using:

-  Smartphones (no special hardware)
-  Token-based queue management
-  WhatsApp alerts for patients
-  Web-based dashboard for hospitals

Patients receive a **token number** and get notified via **WhatsApp** when their turn is approaching, allowing them to wait comfortably instead of standing in physical queues.

---

##  How the System Works (Flow)

### 1️ Token Generation

- Patient scans a **QR code** at the hospital  
  **OR**
- Receptionist manually creates a token using the dashboard

Each token contains:
- Token Number
- Doctor Name
- Estimated Waiting Time

---

### 2️ Queue Management
- Doctor or staff uses a **simple dashboard**
- Clicks **"Next Patient"** after each consultation
- Queue updates automatically in real time

---

### 3️ WhatsApp Alerts
Patients receive WhatsApp notifications like:
- _"Your appointment is in 20 minutes"_
- _"Please be ready, your turn is next"_

This ensures transparency and reduces unnecessary crowding.

---

## Key Features

-  Token-based digital queue
-  WhatsApp notifications for patients
-  Mobile-friendly dashboard
-  No expensive hardware required
-  Works with low internet connectivity
-  Simple UI for non-technical staff
-  Supports multiple doctors & clinics

---

## Tech Stack

### Frontend
- React.js (Mobile-first UI)
- Tailwind CSS / CSS Modules

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Notifications
- WhatsApp API (planned)
- Mock notification service for MVP

### Authentication
- OTP-based login (phone number)
- No passwords (staff-friendly)

---

## System Architecture

Patient / Reception
↓
Web Dashboard (React)
↓
Backend API (Node + Express)
↓
Database (MongoDB)
↓
WhatsApp Notification Service

---

## Development Progress

### Day 1 - January 22, 2026

**LLD (Low Level Design) Architecture**

Today we completed the Low Level Design architecture for our Digital Queue Management System. The design includes detailed flow diagrams for different user roles and system interactions.

#### Design Components:

**1. Patient Flow**
![Patient Flow](./public/LLD/Patient%20Flow.png)

**2. Receptionist Dashboard**
![Receptionist Dashboard](./public/LLD/Receptionist%20Dashboard.png)

**3. Staff/Doctor Dashboard**
![Staff Doctor Dashboard](./public/LLD/Staff%20Doctor%20Dashboard.png)

These designs showcase the complete user journey and interaction patterns for:
- Patients receiving tokens and notifications
- Receptionists managing token generation
- Doctors/Staff managing the queue and calling next patients

