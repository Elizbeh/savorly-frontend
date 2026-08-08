🥗 Savorly Frontend
===================

**Savorly** is a full-stack recipe management web application that helps users discover, create, save, and share recipes in a secure, responsive interface.

This repository contains the **frontend** of Savorly, built with **React.js (Vite)** and integrated with the [Savorly Backend API](https://savorly.duckdns.org).

It is deployed via **GitHub Pages** and supports authentication, admin access, and interactive UI features.

* * * * *

🌐 Live Demo
------------

-   **Frontend:** <https://Elizbeh.github.io/savorly-frontend>

-   **Backend API:** <https://savorly.duckdns.org>

* * * * *

🧱 Project Structure
--------------------

```savorly-frontend/
├── public/
│   └── assets/              # Static images, icons
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── VerifyEmail.jsx
│   │   ├── RecipeDetail.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── ErrorBoundary.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx  # Global user state and authentication
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── Home.jsx
│   │   ├── RecipeFormPage.jsx
│   │   ├── Profile.jsx
│   │   ├── SavedRecipes.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── CategoryPage.jsx
│   │   └── AboutPage.jsx
│   ├── App.jsx               # Routing and layout
│   ├── index.jsx             # App entry point
│   ├── App.css               # Global styling
│   └── index.css
├── .env.example              # Example environment variables
├── package.json
└── vite.config.js
```

* * * * *

💡 Key Features
---------------

-   **Secure Authentication:** Login, Register, Email Verification, JWT + Secure Cookies, Protected Routes.

-   **User Dashboard:** Personalized Home, Profile management, Saved Recipes.

-   **Recipe Management:** Create, edit, delete recipes, Cloudinary image upload, Comments & Ratings.

-   **Admin Dashboard:** Manage users & categories, Role-based access.

-   **Modern UI:** Responsive design, Reusable components, ErrorBoundary for error handling.

-   **Security & Performance:** HTTPS-only environment, Environment variables, Client-side input validation.

* * * * *

🧰 Tech Stack
-------------
| Layer             | Technology                                |
| ----------------- | ----------------------------------------- |
| Frontend          | React.js (Vite), JSX, React Router        |
| State Management  | Context API                               |
| Styling           | CSS3, Flexbox, custom responsive design   |
| Backend API       | Node.js, Express, MySQL/TiDB              |
| Deployment        | GitHub Pages (Frontend), Render (Backend) |
| Version Control   | Git / GitHub                              |
| Auth Security     | JWT, Secure Cookies                       |
| Testing (planned) | React Testing Library, Jest               |

* * * * *

⚙️ Environment Configuration
----------------------------

Create a `.env` file in the project root (not committed):

`LOCAL_HTTPS=true
VITE_API_URL=https://savorly.duckdns.org
VITE_CLIENT_URL=https://Elizbeh.github.io`

* * * * *

🧪 Local Setup
--------------

1.  Clone the repo:

`git clone https://github.com/Elizbeh/savorly-frontend.git
cd savorly-frontend`

1.  Install dependencies:

`npm install`

1.  Create and configure `.env` as above.

2.  Run development server:

`npm run dev`

Frontend will be available at: `https://localhost:5174` (with HTTPS)

* * * * *

🔐 Routing Overview
-------------------
| Path                  | Component        | Access      |
| --------------------- | ---------------- | ----------- |
| `/`                   | LandingPage      | Public      |
| `/about`              | AboutPage        | Public      |
| `/login`              | Login            | Public      |
| `/register`           | Register         | Public      |
| `/verify-email`       | VerifyEmail      | Public      |
| `/home`               | HomePage         | Protected   |
| `/create-recipe`      | RecipeFormPage   | Protected   |
| `/recipe/:id`         | RecipeDetail     | Public      |
| `/recipe-form/:id`    | RecipeFormPage   | Protected   |
| `/categories/:categoryId` | CategoryPage | Public      |
| `/profile`            | ProfilePage      | Protected   |
| `/saved-recipes`      | SavedRecipes     | Protected   |
| `/admin-dashboard`    | AdminDashboard   | Admin Only  |

* * * * *

🧩 Backend Integration
----------------------

Frontend communicates with backend via REST API calls defined in `.env` (`VITE_API_URL`).\
All authentication and data operations (recipes, profiles, comments, ratings) are handled via backend endpoints.\
Secure cookies maintain sessions and `ProtectedRoute` prevents unauthorized access.

* * * * *

🚀 Deployment
-------------

Deployed to **GitHub Pages** with automatic CI/CD from `main`:

`npm run build
npm run deploy`

Available at: <https://Elizbeh.github.io/savorly-frontend>

* * * * *

🧑‍💻 Author
------------

**Elizabeth** --- Full-Stack Developer\
🎓 Holberton School Graduate\
🔐 Focused on secure, scalable web apps\
🌍 [GitHub](https://github.com/Elizbeh)

* * * * *

📜 License
----------

MIT License

* * * * *

> 💡 Frontend client for Savorly.\
> 🔗 Backend repository: [Savorly Backend](https://github.com/Elizbeh/savorly-backend)