# Road-map & Guide for our project:

# Install Dependencies:
npm i @reduxjs/toolkit react-redux react-router-dom appwrite@14.0.1 @tinymce/tinymce-react html-react-parser react-hook-form tailwindcss @tailwindcss/vite <br>
=> Configure the Vite plugin & Import Tailwind CSS

# Setting up environment Variables:
=> always create environment variable file (here, ".env" file) in the root of the project(here, root == "12MegaBlog" folder) <br>
=> don't forget the 'dot' in ".env" <br>
=> add ".env" file to ".gitignore" <br>
=> for open source projects you can create ".env.sample" (sample file) where you will display your env var with the same name as in ".env" file but with the empty value for simplicity for others <br>
=> whenever you change your ".env" file, restart your project <br>
=> here is the link of documentation about naming convention of env var in while using different-different technologies: <br>
For create-react-app: https://create-react-app.dev/docs/adding-custom-environment-variables/#:~:text=Note%3A%20You%20must,env.REACT_APP_NOT_SECRET_CODE. <br>
For react+vite: https://vite.dev/guide/env-and-mode#:~:text=Vite%20exposes%20env,following%20env%20variables%3A <br>
=> now got to the AppWrite (for backend services) and create an account if you don't have one, then create a new project and set value of our env var according to our requirement, here: <br>
set VITE_APPWRITE_URL to API Endpoint of our project on AppWrite <br>
set VITE_APPWRITE_PROJECT_ID to Project ID of our project on AppWrite <br>
set VITE_APPWRITE_DATABASE_ID to Database ID of our project's database on AppWrite <br>
set VITE_APPWRITE_COLLECTION_ID to Collection ID of our project's database on AppWrite <br>
set VITE_APPWRITE_BUCKET_ID to Bucket ID of our project's storage on AppWrite <br>

# Creating new project on AppWrite:
=> create a new project <br>
=> in project's databases: create database & collection <br>
=> don't forget to update the permissions in the setting of our collection (here "articles") <br>
=> create attributes & indexes according to our requirement <br>
=> in project's storage: create bucket <br>
=> don't forget to update the permissions in the setting of our bucket (here "images") <br>

# Best practices to follow:
=> create one folder named "conf" in "src" and in that folder create one file named "conf.js", write configuration of our env var there: go through that file for more information... <br>

# Documentation link of AppWrite:
https://appwrite.io/docs/products/auth <br>
(read it for building authentication services of our project) <br>
https://appwrite.io/docs/references/cloud/client-web/databases <br>
(read it for building databases services of our project) <br>
https://appwrite.io/docs/references/cloud/client-web/storage
(read it for building storage services of our project) <br>

# Build Authentication services using AppWrite:
=> now it's time to build authentication services of our website <br>
=> maintain a separate folder for all services related to AppWrite (here "appwrite") <br>
=> try to build all services in a way that if we want to change our service provider or even want to build our own backend then we can easily change from one to another <br>
=> to do that we can use class based approach to build our different services and export the instance of that class

# Assignment-1: 
=> separate the databases & storage services from config.js by creating two separate files

# Redux Toolkit configuration:
=> first of all create store & slices in a separate folder (here "store"), go threw our redux-toolkit project if you need any help <br>
=> insert store into "main.jsx" by using 'Provider' <br>
=> now you can manipulate the store's data in different-different component using 'useSelector' & 'useDispatch'

# Assignment-2:
=> improve the loading part in "App.jsx" if you want...

# Building Components:
=> to build every components required by our website we can maintain a separate folder (here "components") in which we will store all of our components <br>
=> try to build production grade react components <br>
=> one best practice to follow here is to use "index.js" file in our folder so we can easily import our components everywhere we want by just importing and exporting our components in "index.js" file once and then directly importing the "index.js" file <br>
=> we will use "useForm" from "react-hook-form" & "Editor" from "@tinymce/tinymce-react" to build some of our components <br>
=> first read documentations of both "react-hook-form" & "@tinymce/tinymce-react" and then start to build the components <br>
=> here is the links for both documentation: <br>
React Hook Form: https://react-hook-form.com/docs <br>
RTE: https://www.tiny.cloud/docs/tinymce/latest/react-cloud/

# Building Pages: