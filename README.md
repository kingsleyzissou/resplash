# BSc (Hons.) Applied Computing Level 8 - Assignment 1 - Single Page app.

Name: Gianluca Zuccarelli

## Overview.

The app is essentially a replica of Unsplash.com, using  the unsplash api. Users can create a collection, then search for images and add them to a collection

- Create collection
- Edit collection
- View collection
- Delete collection
- Search for images
- Add images to collection
- Remove images from collection
- View profile

## Setup.

Clone or download the repo.

Before you can begin, you will need to setup firebase.
To do so, navigate to [Google Firebase](https://firebase.google.com/) and click on get started. Add a new project. You will need to add authentication. Set the sign up method to email and password as well as Google sign-in. Next add a firestore database in test mode. Register the app and copy the api credentials into a .env file.

You will also need to create an unsplash developer account and a project. Once this has been done, add the credentials to the .env file.

Lastly, from the project directory, run

`npm install or yarn install`

To start the project, run:

`npm start or yarn start`

## Data Model Design.

The data flow is very straightforward for the app. A user has many collections, a collection has many images.

![][diagram]

## UI Design.

. . . . . Screenshots of the app's views with brief statements of their use (see examples below) . . . . . . .

![][main]

>> Shows all of the user collections. Gives an option to add a new collection. On hovering over the collection, an edit and delet button appear as well as the title and subtitle of the collection

![][hover]

>> Hover state of collection

![][mason]

>> A view of all the images in a collection.

![][search]

>> A view of all the search results.

![][modal]

>> Lightbox modal to view an image.

## Routing.

List of all the routes in the app

- /(public)- Displayes the home page.
- /dashboard (protected) - Overview of all user's collections.
- /collection/:id (private) - detail view of all the images in a collection
- /profile (private) - user profile
- /login (public) - login page
- /register (public) - register page
- /recover (public) - reset password request page

## Storybook.

Screenshot of all the storybook components.

![][stories]

>>> Unfortunately, some components had to be removed, due to an issue with storybook not being able to render components that were exported with the withRouter() function

![][actions]
>>> Custom close action when closing a modal

![][knobs]
>>> Knob to pass down an active prop used to launch alerts, modals and lighbox components

## Backend.

The backend was made up entirely using Firebase.Firestore was used to create the database for the collections and the images within the collection. I created an API class with Collection and Image models to handle the firestore requests and pass the data to the required components.

![][collection]

>>> Screenshot of the collection model

## Authentication.

The app makes use of firebase authentication. The app allows for username/password sign in and sign up or using Google sign up. Cookie persistence is used to handle the session.

The following article was used for reference purposes:

[Simple Email and Google Auth with React and Firebase](https://medium.com/better-programming/dead-simple-auth-with-react-and-firebase-592e40ff43c5)

## Independent learning.

I opted to use the new reactive hooks and functional components rather than the classic React components. A few components were created using the classic components, to show case the usage. Asyncronous methods and the React useEffect presented some issues and required a lot of digging in to get right.

In addition to the hooks, the app makes use of React Context and Consumer and Providers to pass down the collection & image models and authenticated user down the chain.

Managing the project and all the components was part of the learning experience and creating relevant folders to house all the components, grew very necessary, very quickly.

A private/protected route was one of the easier components to recreate.

[diagram]: ./img/diagram.png
[main]: ./img/main.png
[hover]: ./img/hover.png
[mason]: ./img/mason.png
[modal]: ./img/modal.png
[search]: ./img/search.png
[detail]: ./img/detail.png
[stories]: ./img/stories.png
[knobs]: ./img/knobs.png
[actions]: ./img/actions.png
[collection]: ./img/collection.png
