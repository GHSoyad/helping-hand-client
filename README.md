# Helping Hand

### Live Website Link https://helping-hand-server-ghsoyad.vercel.app/

## Description
The Project is developed using NextJS, NodeJS, ExpressJS, MongoDB, The app is responsive on smaller devices.

#### Admin Login Details
Email: john.doe@example.com
Password: Admin@cadence123

### CSS Framework
TailWind CSS Framework and DaisyUI components

### React Library's used
Some of the library's that was used in the project

#### Redux Toolkit
 - To preserve global state for master data

#### Next Auth
 - To login and keep session for user
 - To make dynamic paths for the website component
 - To make private routing
 - To redirect user

#### React Hot Toast
 - To display messages

#### React Icons
 - To display icons

#### React Chart JS 2
 - To show statistics

### Pages
The website consists of 6 main pages

 - Home
 - Login
 - Register
 - Donations
 - Donation Details
 - Dashboard
 - Statistics
 - My Donations
 - Donations Statistics (Admin)
 - Add Donation (Admin)
 - All Users (Admin)
 - 404 Not Found
 - Error Page

The Donation page is dynamic which changes based on selected donation
Dashboard route is divided into 2 parts which changes based on user role

### Features
Features of the website

 - Navbar can be used to navigate the website
 - Navbar has conditional rendering based on user login and logout
 - Homepage contains a Banner with search donation
 - Homepage has featured donations section with a link to all donations
 - Donations page lists all donations
 - Donations page have category filtering that fetches data based on selected category
 - Each donation card shows donation details title, category, image, organizer, start date, end date, raised, goal, to go amount
 - Donation card have a donate now button which opens a confirmation for payment
 - Donation card have a bar representing a stat of current donated amount
 - Login page has email-password login option
 - Register page has email-password registration option
 - Logging in with google will always give user the buyer role
 - Login has jwt and next-auth implemented for user session validation
 - Footer has some dummy links and social media icons
 - Logged in user will see a dashboard and the dashboard shows different routes based on user role
 - Dashboard home shows the user name, user email and user role
 - Statistics page shows a pie-chart that shows users donation and total donation
 - All donations shows all donations card with title, category, image, start date, a edit button and a delete button
 - Donations Statistics page shows a line-chart that shows total amount of donations made in last seven days
 - The add button will open a add product form fill and add a product
 - The delete button will open a confirm form to delete donation from the database
 - All users page list all users with name, email and role
 - Admin can make a user admin from here
 - Custom 404 not found and error handling page