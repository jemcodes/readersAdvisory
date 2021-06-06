# Welcome to Readers' Advisory
<!-- ![gin & tonnies Logo](frontend/public/images/gandtthin2.png) -->

## Greetings, fellow book enthusiasts!

### [Visit Readers' Advisory!](https://readersadvisory.herokuapp.com/)

---

### Menu

[Technologies](#Technologies)

[Key Features](#Key-Features)

[Database Schema](https://github.com/jemcodes/readersAdvisory/wiki/Database-Schema)

[Front End Routes](https://github.com/jemcodes/readersAdvisory/wiki/Front-End-Routes)

[Backend API Routes](https://github.com/jemcodes/readersAdvisory/wiki/Backend-API-Routes)

[Project Details](#Project-Details)

[Feature Spotlight](#Feature-Spotlight)

[Challenges](#Challenges)

[Code Snippets](#Code-Snippets)

<!-- [Redux Store Tree Samples](https://github.com/jemcodes/ginAndTonnies/wiki/Redux-Store-Tree-Samples) -->

[Adobe XD Design Mockups](https://github.com/jemcodes/readersAdvisory/wiki/Adobe-XD-Design-Mockups)

[Application Screenshots](#Application-Screenshots)

[Installation Instructions](#Installation-Instructions)

[Visit gin & tonnies!](https://readersadvisory.herokuapp.com/)

[Meet The Dev](#Meet-The-Dev)

[Future Features](#Future-Features)

[Future Fixes](#Future-Fixes)

---

### Technologies
* Python
* Flask 
* React
* Redux
* JavaScript
* JSX
* HTML
* CSS
* SQLAlchemy
* PostgreSQL
* Heroku
* VSCode
* Adobe Photoshop
* Adobe XD
* DrawSql
* npm

### Key Features

**Reader Preferences**
* View reader preferences generated through reader quiz
* Dynamically create, update, and delete reader's preferences

**Reader Subscription**
* View reader's subscription
* Dynamically create, update, and delete reader's subscription

### Project Details
>“We read books to find out who we are. What other people, real or imaginary, do and think and feel... is an essential guide to our understanding of what we ourselves are and may become.”
― Ursula K. LeGuin

My gin & tonnies Full-Stack Project aims to bring delight to fellow cocktail connoisseurs, highball hobbyists, and every other liquor liker in between. Inspired by Untappd, I've created a community where drink enthusiasts can discover new beverages and share their thoughts on everything they try.

### Visit gin & tonnies
https://readersadvisory.herokuapp.com/

### Feature Spotlight
* Readers can create, read, update, and delete book preferences. 
* Readers can also create, read, update, and delete subscriptions.
<!-- * I implemented basic front end authorization so the current user is guided to only update and delete drinks and reviews they created. -->

### Challenges
<!-- 
This was my first solo build of a full React app. I found the integration with Redux to be particularly challenging. With less than a week of knowledge under my belt, I took on the task and I'm quite pleased with the outcome.

* The learning curve for interacting with the Redux store to grab state was steep for me. It was eye-opening when I finally understood how to connect those dots and select only the information I wanted to show.

* I felt more comfortable with PostgreSQL and Sequelize during this project after having used them in a previous group project. Still, it's a daunting task to make sure all the relationships are implemented correctly, knowing that the functionality of your app depends on it! -->

### Code Snippets
<!-- *Nested routes access*

One difficulty I face was accessing my reviews through my drink id route. I researched and employed mergeParams along with useParams to accomplish this.

By merging the route on the backend, I was able to write my review update and delete methods as if they were the direct route. Then, on the front end, I assigned the drinkId and reviewId to standin for the correct paths in the URL. From there, I was able to access everything I needed to call upon a single drink, get its reviews, and allow the user to update and delete reviews they'd written.

![Merge Params Route Access](frontend/public/images/mergeParamsReviews.png) -->

### Application Screenshots
<!-- *Single Drink Details*

Demonstrates that a user (in this case, nari) does not have authority to update or delete drinks or reviews they did not create

![SingleDrinkDetails](/frontend/public/images/singleDrinkDetail.png)

### [View Additional Screenshots](https://github.com/jemcodes/ginAndTonnies/wiki/Application-Screenshots) -->


### Installation Instructions
<!-- * Git clone the project file
* On your local machine, run 'npm install' to install required dependenices
* Initiate database setup as stated in .env.example
* Run npx dotenv sequelize commands (migrate, seed, etc.)
* Run 'npm start' command on localhost for both backend and front end servers
* Server should automatically navigate you to localhost:port in browser. -->

### [Visit Readers' Advisory](https://readersadvisory.herokuapp.com/)

### Meet The Dev

Hiya, I'm jane! 👋

Programming brings together my passions for building, creating, and problem-solving. Before coming to the coding world, I worked several lifetimes' worth of creative and analytical careers, from founding and managing companies to voiceover work to digging deep into disability law - and almost everything else in between. As a multipotentialite, I'm thrilled to see where this programming journey takes me!

You can find me right here [Github](https://github.com/jemcodes) or over on [Linkedin](https://www.linkedin.com/in/jemcodes/) 


---

## Future Features

<!-- **Venues**
* See a list of venues associated with drinks
* As a venue owner, create, update, and delete a listing for your venue's details

**Badges**
* Earn badges for trying and reviewing new drinks

**Expanded User Profiles**
* See profile page for each user
* As a user, create, update, and delete details on your profile page
* Drinks and badges dynamically added to your profile

**Additional Protections**
* Amplify security measures, particularly backend considerations, to prevent current user from updating or deleting another user's created drinks and reviews. -->

## Future Fixes

<!-- **Heroku Hosting Improvements**
* Loadtimes for backend calls are quite slow at the moment. As we haven't yet learned about database optimization, I would like to improve this when I have time to revist the project. -->

