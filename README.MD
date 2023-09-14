# Jobster API

This is a backend project developed as part of a Node.js course led by John Smilga. It serves as a platform for managing job listings and applications.

## Table of Contents

- [Jobster API](#jobster-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Starting the Server](#starting-the-server)
  - [Project Structure](#project-structure)
  - [Key Takeaways](#key-takeaways)
    - [Mongoose `.save()` vs. `findOneAndUpdate`](#mongoose-save-vs-findoneandupdate)

## Getting Started

### Installation

To set up the project, follow these steps:

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/edriso/jobster-api.git
   cd jobster-api
   ```

2. Install dependencies

   ```sh
   npm install
   ```

### Environment Variables

rename `.env.example` file in the root directory of the project to be `.env` and provide the environment variables given.

### Starting the Server

To start the server, use the following command:

```sh
npm start
```

The server will run on http://localhost:5000.

## Project Structure

The project structure is organized as follows:

- `app.js`: This is the entry point of the application. It sets up the Express server and defines the main application logic.

- `controllers/`: This directory contains controller functions for various API routes. Controllers handle the business logic of your application and interact with the database through Mongoose models.

- `models/`: The `models` directory defines Mongoose models for users and jobs. These models specify the schema and structure of the data stored in your MongoDB database.

- `routes/`: In the `routes` directory, you'll find the definitions of API routes and middleware. Routes are responsible for routing incoming HTTP requests to the appropriate controller functions. Middleware functions can be used to add custom logic to request processing.

- `middleware/`: Custom middleware functions are located in this directory. Middleware can be used to perform tasks such as authentication, input validation, and more. It helps ensure that requests are handled correctly before reaching the controllers.

- `errors/`: Contains custom error handling utilities, such as handling `notFound` and `badRequest` errors.

- `client/`: Houses the frontend React application. The backend utilizes the build folder from this directory to serve the React frontend. Additionally, you can find the setup for making HTTP requests to the React frontend, along with other related utilities.

This organized project structure helps maintain a clear separation of concerns, making it easier to develop, test, and maintain your backend application.

## Key Takeaways

### Mongoose `.save()` vs. `findOneAndUpdate`

When working with Mongoose, it's essential to understand the difference between using `.save()` and `findOneAndUpdate` for updating documents in your database:

- **Using `.save()`:** The `.save()` method on a document triggers both the pre and post-save hooks that you may have defined in your Mongoose schema. This behavior is useful when you need to perform custom actions or validations before and after saving data to the database. It is especially helpful for ensuring data integrity during the save process.

- **Using `findOneAndUpdate`:** In contrast, the `findOneAndUpdate` method does not automatically trigger these hooks. If you have defined pre or post hooks in your schema, they will not be executed when you use `findOneAndUpdate` for updates. This can be important when you want more control over the update process and do not require the hooks to be triggered.

**Note**: To prevent specific hooks from triggering during updates, you can use conditional checks like `if (!this.isModified("password")) return;`. This conditional check can be particularly helpful when you want to avoid rehashing a password when it hasn't been modified during an update. It allows you to optimize the update process and avoid unnecessary computational overhead.

Understanding these distinctions and utilizing conditional checks can help you manage your Mongoose models effectively, ensuring that hooks behave as expected during updates.
