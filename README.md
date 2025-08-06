# StreamStash - A Modern MERN Stack Streaming Platform
StreamStash is a feature-rich, full-stack movie and TV show streaming application built with the MERN stack. It provides a seamless user experience with a responsive UI, secure authentication, and a wide range of features for discovering and enjoying content.

## ✨ Features  
🔐 Secure Authentication: Full user authentication flow (Signup, Login, Logout) using JSON Web Tokens (JWT).  
🎬 Extensive Content Library: Fetch and display thousands of the latest movies and TV shows from an external API.  
📱 Responsive UI: A modern and beautiful user interface built with Tailwind CSS that looks great on all devices, from phones to desktops.  
📚 Search History: Users can view and manage their past search queries.  
🤖 Content Recommendations: Get suggestions for similar movies and TV shows based on your selection.  
💙 Awesome Landing Page: A beautiful and engaging landing page to welcome users.  
🌐 Deployment Ready: The application is structured for easy deployment to cloud platforms.

## ⚛️ Tech Stack
*Frontend: React.js, Tailwind CSS*  
*Backend: Node.js, Express.js*  
*Database: MongoDB*  
*Authentication: JSON Web Tokens (JWT)*

## 🚀 Getting Started with StreamStash
Follow the steps below to set up and run the StreamStash streaming platform locally:

### Prerequisites
- *Node.js (v16 or higher recommended)*  
- *npm (comes with Node.js)*
- *A MongoDB database URI (you can get a free one from MongoDB Atlas)*

### Installation & Setup

**Clone the Repository**
```
git clone https://github.com/your-username/streamstash.git
```

**Navigate to the Project Directory**
```
cd streamstash
```

**Install Dependencies**
```
npm install
```

**Configure Environment Variables**  
Create .env file and add your secret keys for the following variables:
```
MONGO_DB_URI
JWT_SECRET
TMDB_API_KEY
```

**Build the Project**
```
npm run build
```

**Start the Application**
```
npm run start
```
