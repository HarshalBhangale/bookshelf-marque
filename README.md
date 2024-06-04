
A simple React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage.

## Features

- **Book Search Page**: 
  - Search for books by name using the Open Library API.
  - Display search results in real-time as you type.
  - Add books to your personal bookshelf.

- **Personal Bookshelf Page**: 
  - View books added to your personal bookshelf.
  - Persistent storage using localStorage.

## Live Demo

Check out the live demo of the app [here](https://bookshelf-frontend-92bb2jmno-buddyharshal2751gmailcoms-projects.vercel.app/).

## Github repo 
https://github.com/HarshalBhangale/bookshelf-marque

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd personal-bookshelf
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Project Structure

- `src/components/BookCard.js`: Component to display individual book information.
- `src/pages/BookSearch.js`: Page to handle book searching and displaying results.
- `src/pages/Bookshelf.js`: Page to display books added to the user's personal bookshelf.
- `src/App.js`: It includes routing and state management.
- `src/App.css`: CSS file for styling the application.

## Technologies Used

- React
- React Router
- Open Library API
- localStorage for persistent storage
