# 🛡️ Sentinel-Shield

![Build Status](https://github.com/dimuzzo/sentinel-shield/actions/workflows/tests.yml/badge.svg)
![License](https://img.shields.io/github/license/dimuzzo/sentinel-shield)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)

A lightweight, modular, and secure data sanitization library for TypeScript applications.

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
const maskedEmail = guard.mask('dev@example.com', 'email'); // d********@example.com
```

## 🧪 Testing
```bash
npm test
```

## 🎮 Try the Demo
Check out the `examples/` folder to see Sentinel-Shield in action with real-world scenarios.
Run the demo locally using:
```bash
npx ts-node examples/demo.ts
```