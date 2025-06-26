# 📬 Background Jobs with Node.js, BullMQ, and Redis

A simple example of how to run background jobs in a Node.js + Express app using [BullMQ](https://docs.bullmq.io/) and Redis. This project demonstrates how to offload tasks like sending emails into background workers to improve performance and scalability.

---

## 🚀 Features

- Queue background jobs using BullMQ
- Redis-backed job management
- Dedicated worker to process jobs
- Retry, delay, and event monitoring support
- Minimal Express API

---

## 🧱 Tech Stack

- Node.js + Express
- [BullMQ](https://docs.bullmq.io/)
- Redis
- JavaScript (CommonJS)

---

## 📁 Folder Structure

background-jobs-demo/
├── config/ # Redis connection settings
│ └── redis.js
├── queue/ # Job queue definition
│ └── emailQueue.js
├── workers/ # Worker to process jobs
│ └── emailWorker.js
├── server.js # Express API to add jobs
├── package.json

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone git@github.com:umeshsujakhu/background-jobs-demo.git
cd background-jobs-demo
```

---

## Install dependencies

```
npm install
```

## Start Redis

```
redis-server
```

## Start the server

```
node server.js
```

### 🔥 Usage

Send a POST request to queue an email:

```javascript
curl -X POST http://localhost:3000/send-email \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "subject": "Hello!", "body": "Welcome to our app!"}'
```
