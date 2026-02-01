<div align="center">

# 📈 Zerodha Clone

[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**A full-featured stock trading platform clone built with the MERN stack**

[Live Demo - Landing Page](https://zerodaclonelanding122.netlify.app) • [Live Demo - Dashboard](https://zerodhaclone122.netlify.app)

</div>

---

## 🎯 Overview

This project is a small-scale clone of **Zerodha**, India's largest stockbroker. It replicates the core functionality of a stock trading platform, featuring a public-facing landing page and an authenticated user dashboard for managing portfolios, executing trades, and monitoring market positions.

## ✨ Features

### 🌐 Landing Page (Frontend)
- **Hero Section** - Eye-catching introduction with call-to-action
- **Products Page** - Showcase of platform features and tools
- **Pricing Page** - Transparent pricing breakdown
- **About Page** - Company information and team details
- **Support Page** - Help resources and contact information
- **User Authentication** - Signup and Login functionality with JWT

### 📊 Trading Dashboard
- **Real-time Watchlist** - Monitor stocks with interactive price charts
- **Portfolio Holdings** - View current investments with profit/loss indicators
- **Market Positions** - Track open positions and market exposure
- **Buy/Sell Orders** - Execute trades with intuitive action windows
- **Order History** - Complete transaction log with order details
- **Funds Overview** - Account balance and fund management
- **Interactive Charts** - Doughnut and bar charts for portfolio visualization

### 🔐 Backend API
- **JWT Authentication** - Secure token-based auth with HTTP-only cookies
- **User Management** - Signup, login, and session verification
- **Holdings Management** - CRUD operations for user portfolios
- **Order Processing** - Buy/sell order execution and tracking
- **Position Tracking** - Real-time position management

---

## 🏗️ Project Architecture

```
TradingClone/
├── frontend/                 # Landing page application
│   ├── src/
│   │   ├── landing_page/
│   │   │   ├── home/        # Hero, Stats, Awards, Pricing, Education
│   │   │   ├── about/       # About page components
│   │   │   ├── pricing/     # Pricing page components
│   │   │   ├── products/    # Products showcase
│   │   │   ├── support/     # Support & help center
│   │   │   └── signup/      # User registration
│   │   └── main.jsx         # App entry point with routing
│   └── package.json
│
├── dashboard/                # User trading dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx       # Main dashboard layout
│   │   │   ├── WatchList.jsx       # Stock watchlist
│   │   │   ├── Holdings.jsx        # Portfolio holdings
│   │   │   ├── Positions.jsx       # Trading positions
│   │   │   ├── Orders.jsx          # Order history
│   │   │   ├── Funds.jsx           # Account funds
│   │   │   ├── BuyActionWindow.jsx # Buy order modal
│   │   │   ├── SellActionWindow.jsx# Sell order modal
│   │   │   └── ...
│   │   └── data/           # Static data & mock stocks
│   └── package.json
│
└── backend/                  # Express.js API server
    ├── Controllers/
    │   ├── AuthController.js    # Signup & Login logic
    │   ├── HoldingController.js # Holdings CRUD
    │   ├── OrderController.js   # Order processing
    │   └── PositionController.js# Position management
    ├── Middlewares/
    │   └── AuthMiddleware.js    # JWT verification
    ├── models/
    │   ├── UserModel.js
    │   ├── HoldingModel.js
    │   ├── OrderModel.js
    │   └── PositionModel.js
    ├── schemas/
    │   ├── UserSchema.js
    │   ├── HoldingSchema.js
    │   ├── OrderSchema.js
    │   └── PositionSchema.js
    ├── Routes/
    │   └── AllRoutes.js         # API route definitions
    └── index.js                 # Server entry point
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 19, Vite, React Router, Axios, React Toastify |
| **Dashboard UI** | Material UI (MUI), Chart.js, Styled Components |
| **Backend** | Node.js, Express.js 5, Mongoose |
| **Database** | MongoDB |
| **Authentication** | JWT, Bcrypt, Cookie-Parser |
| **Deployment** | Netlify (Frontend), Render (Backend) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local or MongoDB Atlas)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/TradingClone.git
   cd TradingClone
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=3000
   MONGO_URL=your_mongodb_connection_string
   TOKEN_KEY=your_jwt_secret_key
   NODE_ENV=development
   ```
   
   Start the server:
   ```bash
   npm run dev
   ```

3. **Setup Landing Page (Frontend)**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The landing page will run on `http://localhost:5173`

4. **Setup Dashboard**
   ```bash
   cd dashboard
   npm install
   npm run dev
   ```
   The dashboard will run on `http://localhost:5174`

---

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signup` | Register new user |
| POST | `/login` | User login |
| POST | `/logout` | User logout |
| GET | `/auth` | Verify authentication |

### Holdings
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/allHoldings` | Get user holdings |
| POST | `/updateHoldings` | Update holdings |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/allOrders` | Get order history |
| POST | `/BuyOrder` | Execute buy order |
| POST | `/SellOrder` | Execute sell order |

### Positions
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/allPositions` | Get all positions |

---

## 🎨 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Landing Page
- Hero section with signup CTA
- Product features showcase
- Transparent pricing table

### Dashboard
- Stock watchlist with real-time prices
- Portfolio holdings with P&L
- Interactive doughnut chart visualization
- Buy/Sell action windows

</details>

---

## 🔧 Environment Variables

### Backend (.env)
| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 3000) |
| `MONGO_URL` | MongoDB connection string |
| `TOKEN_KEY` | JWT secret key |
| `NODE_ENV` | Environment (development/production) |

---

## 📂 Data Models

### User
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  createdAt: Date
}
```

### Holding
```javascript
{
  name: String,      // Stock name
  qty: Number,       // Quantity
  avg: Number,       // Average price
  price: Number,     // Current price
  net: String,       // Net change percentage
  day: String,       // Day change percentage
  owner: ObjectId    // Reference to User
}
```

### Order
```javascript
{
  name: String,      // Stock name
  qty: Number,       // Quantity
  price: Number,     // Order price
  mode: String,      // "BUY" or "SELL"
  owner: ObjectId    // Reference to User
}
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgements

- Inspired by [Zerodha](https://zerodha.com/)
- Built with ❤️ using the MERN Stack

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

</div>
