# Portfolio Website

A modern portfolio website built with React, Express, and MongoDB.

## Project Structure

- **frontend/**: React application
- **server/**: Express backend with MongoDB integration

## Setup Instructions

### Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the backend API URL:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the React app:
   ```bash
   npm start
   ```

## Features

- Responsive design
- Contact form with MongoDB integration
- Projects showcase
- About and Home pages

## Technologies Used

- React
- Express
- MongoDB
- Tailwind CSS

#this is made by shivam kumar
