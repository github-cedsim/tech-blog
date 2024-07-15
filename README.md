# Tech Blog

A CMS-style blog site where developers can publish their blog posts and comment on other developers' posts as well. This application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and Express.js as the web framework.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Features](#features)
- [Routes](#routes)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)


## Description

The Tech Blog is a platform for developers to write, publish, and interact with blog posts. Users can sign up, log in, create, update, and delete posts, as well as comment on others' posts. The application uses Sequelize to interact with a MySQL database and Handlebars.js to generate HTML templates dynamically.

## Installation

1. Clone the repository
   git clone https://github.com/your-username/tech-blog.git

2. cd into the project directory
   cd tech-blog

3. Install the dependencies
    npm install

4. Create a .env file in the root of the project and add the following code:
    
    DB_NAME='tech_blog_db'
    DB_USER='your_mysql_username'
    DB_PW='your_mysql_password'
    
## Usage

1. Create the database
    mysql -u root -p
    CREATE DATABASE tech_blog_db;

2. Seed the database
    npm run seed

3. Start the server
    npm start

4. Navigate to http://localhost:3001 in your browser

## Screenshots

![Tech Blog](![image](https://github.com/user-attachments/assets/49ce821b-093b-42ff-a4ef-e9060253fec4)
)

## Features

- User authentication( sign up, log in, log out)
- Create, update, and delete posts
- Comment on posts
- View all posts by a specific user
- View all posts on the homepage

## Routes

- /: Homepage displaying all posts
- /dashboard: Dashboard displaying user's posts
- /login: Login page
- /signup: Signup page
- /post/:id: Single post page

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize
- Handlebars.js
- bcrypt
- dotenv
- express-session
- connect-session-sequelize

## Contributing

Contributions are welcome. Please submit a pull request or create an issue if you would like to contribute to this project.

