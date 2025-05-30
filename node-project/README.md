# Node Project

This project is a full-stack application built with Node.js and TypeScript. It consists of a server-side application using Express and a client-side application built with React.

## Project Structure

The project is organized into two main directories: `server` and `client`.

### Server

The `server` directory contains the backend application, which is responsible for handling requests, managing data, and serving the client application.

- **controllers/**: Contains controllers that handle incoming requests and responses.
- **models/**: Defines the data structure and methods for interacting with the database.
- **routes/**: Sets up the routes for the application, linking them to the appropriate controller methods.
- **sockets/**: Handles WebSocket connections and events.
- **middlewares/**: Contains middleware functions for processing requests.
- **utils/**: Utility functions for various tasks.
- **app.ts**: Initializes the Express application and sets up middleware.
- **server.ts**: Entry point for the server, starting the application and listening on a specified port.

### Client

The `client` directory contains the frontend application, which is responsible for the user interface and user interactions.

- **public/**: Contains static files such as HTML and favicon.
  - **index.html**: The main HTML file for the client application.
  - **favicon.ico**: The favicon for the client application.
- **src/**: Contains the source code for the React application.
  - **components/**: Contains reusable React components.
  - **pages/**: Contains React components representing different pages.
  - **App.tsx**: The main React component that sets up the application structure and routing.
  - **index.tsx**: Entry point for the React application, rendering the App component into the DOM.
- **tsconfig.json**: TypeScript configuration file for the client application.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd node-project
   ```

3. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

4. Install dependencies for the client:
   ```
   cd ../client
   npm install
   ```

5. Start the server:
   ```
   cd ../server
   npm start
   ```

6. Start the client:
   ```
   cd ../client
   npm start
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.