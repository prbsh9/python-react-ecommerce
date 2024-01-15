# AnimeTreasure E-commerce Website

Welcome to the AnimeTreasure E-commerce website repository! This repository contains both the frontend and backend components of the website. The website is built using React for the frontend and Django for the backend.

## Frontend

The frontend of the website is built using React. It provides the user interface for browsing and interacting with products, viewing product details, and managing user accounts. The frontend components are located in the `frontend/` directory.

### Getting Started

To set up the frontend development environment and run the website locally, follow these steps:

1. Navigate to the `frontend/` directory.
2. Install the required dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open your browser and access the website at `http://localhost:3000`.

## Backend

The backend of the website is built using Django. It handles the data management, authentication, and interactions with the database. The backend components are located in the `backend/` directory.

### Getting Started

To set up the backend development environment and run the server locally, follow these steps:

1. Navigate to the `backend/` directory.
2. Activate your virtual environment using `pipenv shell`.
3. Install the required dependencies using `pipenv install`.
4. Apply database migrations using `python manage.py migrate`.
5. Start the Django development server using `python manage.py runserver`.
6. The backend API will be accessible at `http://localhost:8000/api/`.

## Contributing

Coming Soon...

## Plans:

- [x] Create Products model, populate and serialize it::: simple
- [x] Create simple api views, urls and make it read only::: class views
- [x] Connect backend with frontend::: cors, axios request
- [ ] Login, Logout, Register feature both ends::: JWT?
- [ ] User Profile, Cart, Buy Now etc feature.

Happy coding!
