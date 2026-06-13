# Appzeto Helpdesk System

A modern Helpdesk Ticket Management System built using React, Node.js, Express, and MongoDB Atlas.

## Features

### Dashboard

* Total Tickets
* Open Tickets
* In Progress Tickets
* Resolved Tickets
* Closed Tickets
* Auto-refresh using polling

### Ticket Management

* Create Ticket
* View All Tickets
* View Ticket Details
* Update Ticket Status
* Add Comments

### Advanced Features

* Search Tickets
* Filter by Status
* Filter by Priority
* Pagination
* Sorting
* Activity Timeline
* Responsive Design
* Modern SaaS UI

### Activity Tracking

The application automatically tracks:

* Ticket Creation
* Status Changes
* Comments Added

Each action is stored in the ticket history and displayed in the activity timeline.

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Framer Motion
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

## Project Structure

```text
appzeto-helpdesk
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── src
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## API Endpoints

### Tickets

Create Ticket

```http
POST /api/tickets
```

Get All Tickets

```http
GET /api/tickets
```

Get Ticket By ID

```http
GET /api/tickets/:id
```

Update Ticket Status

```http
PATCH /api/tickets/:id/status
```

Add Comment

```http
POST /api/tickets/:id/comments
```

Dashboard Statistics

```http
GET /api/tickets/stats
```

---

## Additional Features Implemented

Beyond the assignment requirements, the following enhancements were added:

* Search functionality
* Filtering
* Pagination
* Sorting
* Dashboard analytics
* Activity timeline
* Polling for automatic updates
* Responsive mobile-first design
* Reusable React components
* Modern dark-themed SaaS UI

---

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Future Improvements

* Authentication & Authorization
* Role-based Access Control
* Real-time updates using Socket.IO
* Email Notifications
* File Attachments
* User Management

---

## Author

Krishu Panchal

Built as part of the Appzeto Helpdesk System assignment.
