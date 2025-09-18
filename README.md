# Blog Generator Backend

This is the **backend** of the AI-powered Blog Generator application. It is built using **Node.js** and **Express**, and integrates with the **Hugging Face API** to generate blogs based on user prompts.

---

##  Features

- Accepts a text prompt from the frontend.
- Generates detailed blogs using Hugging Face's `chat.completions` API.
- Returns blog content as JSON.

---

##  Technologies Used

- **Node.js** - JavaScript runtime
- **Express** - Backend framework
- **Cors** - To allow cross-origin requests
- **dotenv** - For environment variables
- **OpenAI SDK** - To interact with Hugging Face API

---

##  Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/prudhvi-marada/blog-backend.git
```

### 2. Build and Start Server
```bash 
npm install 
npm start
```