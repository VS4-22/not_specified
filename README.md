A full-stack user management application built with Node.js, Express, and EJS. It provides a clean, responsive interface for performing Create, Read, Update, and Delete (CRUD) operations on user profiles.

A preview of the responsive user list page.

✨ Features
Full CRUD Functionality: Create, Read, Update, and Delete user profiles.

Responsive Design: The user interface is built with Tailwind CSS to be fully responsive and look great on all devices, from mobile phones to desktops.

Dynamic Rendering: Uses EJS as a templating engine to dynamically render user data on the server.

Database Integration: Connects to a MongoDB database to persist user data.

Structured Backend: Follows a logical MVC-like pattern (Models, Views, Controllers/Routes) for clean and maintainable code.

🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Frontend: EJS (Embedded JavaScript templates), Tailwind CSS

Package Manager: npm

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Make sure you have the following software installed on your system:

Node.js (which includes npm)

MongoDB (or a MongoDB Atlas cloud account)

Installation
Clone the repository

Bash

git clone https://github.com/VS4-22/not_specified.git
Navigate to the project directory

Bash

cd not_specified
Install NPM packages

Bash

npm install
Create an environment file
Create a .env file in the root of the project and add your MongoDB connection string. This file is ignored by Git to keep your credentials private.

MONGODB_URI=your_mongodb_connection_string_here
PORT=3000
Running the Application
Once the setup is complete, you can start the server with the following command:

Bash

npm start
The application will be available at http://localhost:3000 in your browser.

📂 Project Structure
The repository is organized following a standard MVC-like pattern:

```
├── public/               # Static assets (CSS, images)
│   ├── stylesheets/
│   └── images/
├── models/               # Mongoose data schemas (e.g., user.js)
├── views/                # EJS templates for the UI
│   ├── index.ejs
│   ├── create.ejs
│   ├── edit.ejs
│   └── ...
├── app.js                # Main Express server entry point
├── package.json          # Project dependencies and scripts
└── .gitignore            # Files to be ignored by Git
```
