# 🛡️ Sentinel-Shield

A lightweight, modular, and secure data sanitization library for TypeScript applications.

## 🚀 Overview
Sentinel-Shield provides a robust defense layer for your application by automating data validation, XSS protection, and sensitive information masking.

## ✨ Key Features
* **XSS Protection:** Automatically escapes dangerous HTML tags to prevent cross-site scripting.
* **Schema Validation:** Ensures incoming JSON objects match your expected structure.
* **Data Masking:** Protects user privacy by masking emails, credit cards, and phone numbers.

## 📦 Installation
```bash
npm install sentinel-shield
```

## 🛠️ Quick Start
```typescript
import { Sentinel, Schema } from './src/index';

const guard = new Sentinel();

// 1. Protect an entire object
const userSchema: Schema = { username: 'string', bio: 'string' };
const rawData = { username: 'dev_hero', bio: '<script>alert("hacked")</script>' };

const safeData = guard.shieldObject(userSchema, rawData);
// bio becomes: &lt;script&gt;alert("hacked")&lt;&#x2F;script&gt;

// 2. Mask sensitive data
const maskedEmail = guard.mask('dev@example.com', 'email'); // d*********@example.com
```

## 🧪 Testing
```bash
npm test
```