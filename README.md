# Song CRUD Backend

This project is the backend part of a full-stack MERN application designed to manage song data. It provides a REST API for performing CRUD operations on songs and generating related statistics. The backend is built using Node.js, Express, and MongoDB.

## Features

- **CRUD Operations**: Allows creating, reading, updating, and deleting song records.
- **Statistics Endpoint**: Provides statistics on the total number of songs, albums, artists, and genres.
- **Filtering**: Supports querying and filtering of song records based on various parameters.

## Technology Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing song data and statistics.

## Deployed API URL

The backend API is deployed and accessible via the following URL:
[Backend API URL](https://song-backend-psdi.onrender.com/api/song)

## Docker Setup

To run this backend service using Docker, follow these steps:

1. **Pull the Docker Image**:

   ```bash
   docker pull yidne2124/song-backend
   ```

2. **Run the Docker Container**:

   ```bash
   docker run -d -p 5000:5000 --name song-backend yidne2124/song-backend
   ```

## Repository

The source code for the frontend is available at: [Song CRUD frontend GitHub Repository](https://github.com/Yidne21/song-frontend)
