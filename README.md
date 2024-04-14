# Pixel Search

**Pixel Search** is a web application that provides search results and image results. It was developed as part of the **OJASS'24 Hackathon** organized by the **National Institute of Technology Jamshedpur**. The project combines a **React frontend** (built with **Vite**) and an **Express backend**, leveraging the **SerpAPI** service to fetch search results.

## Features

- **Search Results**: Users can enter search queries, and the application fetches relevant search results from various search engines.
- **Image Results**: In addition to text-based results, users can also view image results related to their queries.
- **Responsive Design**: The application is designed to work seamlessly across different devices and screen sizes.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sonu-Hansda/pixelsearch.git
   cd pixelsearch
   ```

2. **Install Dependencies**:
   - Navigate to the `pixelsearch` directory and install frontend dependencies:
     ```bash
     cd pixelsearch
     npm install
     ```
   - Similarly, navigate to the `backend` directory and install backend dependencies:
     ```bash
     cd backend
     npm install
     ```

3. **Environment Variables**:
   - Create a `.env` file in the `backend` directory and set the following variables:
     ```
     BASE_URL=serp-base-url
     API_KEY=your-serpapi-api-key
     PORT=3000
     ```
     Replace `your-serpapi-api-key` with your actual SerpAPI API key.

4. **Start the Application**:
   - Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

5. **Access the Application**:
   - Open your browser and visit `http://localhost:5173` to use Pixel Sync.

## Usage

1. **Search**:
   - Enter your search query in the search bar.
   - Click the search button to retrieve search results.

2. **Image Results**:
   - Scroll down to view image results related to your query.

## Deployment

- To deploy Pixel Sync to production, follow these steps:
  1. Set up a production server (e.g., using **vercel**, **Nginx**, **Apache**, or a cloud service like **AWS**).
  2. Build the frontend using `npm run build` in the `frontend` directory.
  3. Configure your production environment variables (e.g., database connection, API keys).
  4. Deploy the backend and frontend to your server.
  5. Set up domain and SSL certificates (if applicable).

## Contributing

Contributions are welcome! If you'd like to contribute to Pixel Sync, feel free to submit pull requests or open issues.

## License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it as needed.

---
