# User Management CRUD Application

A full-stack user management application built with Node.js, Express, and EJS. It provides a clean, responsive interface for performing Create, Read, Update, and Delete (CRUD) operations on user profiles.
## ✨ Features

- **Full CRUD Functionality**: Create, Read, Update, and Delete user profiles.
- **Responsive Design**: The user interface is built with **Tailwind CSS** to be fully responsive.
- **Dynamic Rendering**: Uses **EJS** as a templating engine to dynamically render user data.
- **Database Integration**: Connects to a **MongoDB** database to persist user data.
- **Structured Backend**: Follows a logical MVC-like pattern for clean code.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS, Tailwind CSS
- **Package Manager**: npm

---

## 🚀 Getting Started

Follow these instructions to get the project running on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/VS4-22/not_specified.git](https://github.com/VS4-22/not_specified.git)
    ```

2.  **Navigate to the project directory**
    ```bash
    cd not_specified
    ```

3.  **Install NPM packages**
    ```bash
    npm install
    ```

4.  **Create an environment file (`.env`)**
    Create a `.env` file in the root of the project and add your credentials:
    ```
    MONGODB_URI=your_mongodb_connection_string_here
    PORT=3000
    ```

### Running the Application

Start the server with the following command:
```bash
npm start
```
### Project Structure
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
