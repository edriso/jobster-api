# Jobster API

This is a backend project developed as part of a Node.js course led by John Smilga. It serves as a platform for managing job listings and applications.

## Table of Contents

- [Jobster API](#jobster-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Starting the Server](#starting-the-server)
    - [Registering a Test User](#registering-a-test-user)
    - [Populating Database with Fake Job Data](#populating-database-with-fake-job-data)
  - [Project Structure](#project-structure)
  - [Key Takeaways](#key-takeaways)

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

### Registering a Test User

To begin using the Jobster API and test it fully, you'll need to register a test user with specific credentials. Follow these steps to create a test user account:

1. Open your web browser and navigate to http://localhost:5000/register.

2. Complete the registration form with the following credentials:

   - Email: `testUser@test.com`
   - Password: `secret`

3. Submit the registration form. Upon successful registration, the server will create a test user account on MongoDB.
4. Copy this user ID.
5. Open your `.env` file located in the project directory.
6. Find the line for TEST_USER_ID= and paste the user ID you copied after registration. It should look like this:
   ```sh
   TEST_USER_ID=your_user_id_here
   ```
7. Save the `.env` file

### Populating Database with Fake Job Data

To populate the MongoDB database with fake job data, you can use the following command:

```sh
npm run seed:jobs
```

This command generates sample job listings associated with the test user ID specified in the `.env` file. If you wish to tailor the generated data, you can do so by editing the `jobs-mock-data` file located in the `db` folder.

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

In the course of working with this project, here are some key takeaways:

- **Using Mockaroo:** We used [Mockaroo](https://www.mockaroo.com/) to generate synthetic data, making it convenient to populate the database with fake job listings for testing and development purposes.

- **Restricting Requests to a Specific User (Test User):** We implemented functionality to restrict certain requests to a specific user, typically a test user. This ensures that only authorized users can access certain routes or perform specific actions.

- **Utilizing Rate Limiting for Specific Routes:** To enhance security and prevent abuse, we incorporated rate limiting for specific routes. Rate limiting restricts the number of requests that can be made to certain endpoints, enhancing the overall performance and security of the application.

- **Mongoose `.save()` vs. `findOneAndUpdate`:** When working with Mongoose, it's essential to understand the difference between using `.save()` and `findOneAndUpdate` for updating documents in your database:

  - **Using `.save()**:\*\* The `.save()` method on a document triggers both the pre and post-save hooks that you may have defined in your Mongoose schema. This behavior is useful when you need to perform custom actions or validations before and after saving data to the database. It is especially helpful for ensuring data integrity during the save process.

  - **Using `findOneAndUpdate`:** In contrast, the `findOneAndUpdate` method does not automatically trigger these hooks. If you have defined pre or post hooks in your schema, they will not be executed when you use `findOneAndUpdate` for updates. This can be important when you want more control over the update process and do not require the hooks to be triggered.

  **Note**: To prevent specific hooks from triggering during updates, you can use conditional checks like `if (!this.isModified("password")) return;`. This conditional check can be particularly helpful when you want to avoid rehashing a password when it hasn't been modified during an update. It allows you to optimize the update process and avoid unnecessary computational overhead.
