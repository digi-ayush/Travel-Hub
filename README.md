🌍 Travel Hub

A full-stack MERN travel booking platform for discovering destinations, viewing travel packages, and managing personalized bucketlists.

🚀 Tech Stack

Frontend: React.js, React Router, TailwindCSS / CSS
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ORM)
Authentication: JWT (JSON Web Token)
State Management: useState, useEffect
Hosting (optional): Render / Vercel / Netlify / MongoDB Atlas

🧩 Features
🌐 User Features

🔑 Login & Register (JWT-based authentication)

🧳 View and Explore Travel Packages

❤️ Add/Remove items from Bucketlist (Saved in LocalStorage)

💸 View cart-style bucketlist with total cost breakdown

📱 Responsive & clean UI

🧭 Admin / Backend Features

🗃 Create & Manage Packages

📦 API routes for getting all packages or fetching by ID

🧰 Secure backend with MongoDB and Mongoose

📁 Folder Structure
travel-hub/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── packageController.js
│   ├── models/
│   │   └── packageModel.js
│   ├── routes/
│   │   ├── packageRoutes.js
│   │   ├── destinationRoutes.js
│   │   └── authRoutes.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
└── README.md

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/ayushkumar/travel-hub.git
cd travel-hub

2️⃣ Install Dependencies

Install backend and frontend separately:

cd backend
npm install

cd ../frontend
npm install

3️⃣ Create .env file inside backend/
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Run Backend
cd backend
npm run dev

5️⃣ Run Frontend
cd frontend
npm run dev


Now open 👉 http://localhost:5173 in your browser.

🧠 API Endpoints
Method	Endpoint	Description
GET	/api/packages	Get all packages
GET	/api/packages/:id	Get a single package
POST	/api/packages	Create a new package
POST	/api/auth/register	Register a user
POST	/api/auth/login	Login user
💡 Future Enhancements

🧍‍♂️ User public profiles

💳 Payment gateway (Stripe / Razorpay)

🧭 Advanced search & filters

🌐 Admin dashboard for managing trips

👨‍💻 Author

Ayush Kumar
📍 Final Year BBA CAM | Digital Marketer | MERN Developer
💼 Founder — Travel Hub
