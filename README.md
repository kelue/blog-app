# blog-app
Simple fullstack app using React and Flask

## FUNCTIONAL REQUIREMENTS
### You are required to build a blog web application with the following requirements:
- The blog will have three sets of users:
  -- Authors: Will be able to create blog posts and edit their own blog posts
  -- Publishers: Will be able to create blog posts and edit all blog posts including those not created by them. They can also approve blog posts. Only approved blog posts will be visible to Guest (unauthenticated) users.
  -- Guest users: Any unauthenticated user will be regarded as a guest user and can only view approved blog posts.
- Blog posts will consist of a title, description and an uploaded image. A Blog post can also belong to many categories.
- Blog posts must feature at least one main uploaded image to be displayed in the list view and a smaller image to be displayed on the detail view.
- There should be frontend views for viewing the list and details of blog posts.
- There should be backend views for creating, editing and approving blog posts.
- The blog MUST be visually appealing.

## TECHNICAL REQUIREMENTS
- Use ReactJS (NextJS/Create React App/Vite) for the front end and a  python framework (Flask/Django/FastApi) for the backend.
- Use a  standard JS validation library for form validation e.g. Yup, Joi 
- Axios should be used for http requests. 
- Use react-dropzone for uploading files. Each blog post must have an accompanying photo
- Use react-query and axios for CRUD operations. 
- TailwindCSS or bootstrapCSS must be used for styling.
- The blog application should be fully tested with unit, integration and browser tests written where necessary using Jest, React Testing Library and Cypress.
