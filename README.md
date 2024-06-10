# Introduction

This assignment task realize a simple job management function. User can retrieve all job services, add a new one, look through the details of a job service, update specific service data or delete it. Job service data is stored in a JSON file at the back-end.

# Tech Stack
- Front-end: React, Vite, TypeScript
- Back-end: Node.js, Express.js, TypeScript

# Clone or Download


# Getting started

With the latest Node LTS installed, run the following commands:

```bash
npm install
cd ./client
npm install
```

To start the Node/React servers, from the project root just run:

```bash
npm start
```

To start the React App, from the project root:

```bash
cd ./client
npm run build
npm run dev
```

You should now have:

- A Node server running on port **5001**,
- A react-app server running on port **5000**

Go to any browser, type http://localhost:5000/ in the address bar to start the web application.

# Dependencies

Client-side | Server-side
--- | ---
"react": "^18.3.1" | "cors": "^2.8.5"
"react-datepicker": "^6.9.0" | "express": "^4.19.2"
"react-dom": "^18.3.1" | "fs.promises": "^0.1.2"
"react-router-dom": "^6.23.1" | "uuidv4": "^6.2.13"

# API
- `Get`
    - `/jobs`  Get all jobs 
    - `/jobs/:id` Get certain job (code:404, Job not found)
- `Post`
    - `/jobs` Post a job (code:201, Success)
- `Put`
    - `/jobs/:id` Update certain job (code:404, Job not found)
- `Delete`
    - `/jobs/:id` Delete certain job (code:204, Success; code:404, Job not found)


# Design Decisions and Thoughts
## REST Endpoint for Job Retrieval

- Created the `REST` endpoints to support request service from the client.
- Incorporating `TypeScript` into the stack can bring a new level of productivity, maintainability, and scalability to project.
- Stored the JSON structure into a separate file that acts as a database role.

## Handling CORS

- To address `Cross-Origin Resource Sharing (CORS)` issues, imported the cors module in the backend.
- Ensured that the necessary headers are present to avoid <ins>“No Access-Control-Header-Present”</ins> errors.

## Frontend Thoughts

- Used the built-in `Fetch` module in the frontend to make `HTTP` requests to the backend.
- Vite is a modern frontend tool that offers several advantages over traditional build tools, including faster development times, smaller bundle sizes, and improved developer experience.

## Tailwind CSS Styling
- Designed the interface using the Tailwind CSS framework for a clean and eye-catching look.
- Simplified styling and ensured a modern appearance.

# Snapshot


