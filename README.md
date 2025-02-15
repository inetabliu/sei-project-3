## Readme currently in progress... ![0%](https://progress-bar.dev/0)

## TAILS & WHISKERS - Dog & Cat food eCommerce website

## Overview
Third project for GA bootcamp as part of a team, building a Full-Stack MERN Application and adapting the skills of newly learnt technologies like MongoDB and Express. We decided to build an Ecommerce website highly inspired by the Butternut Box website. We wanted to build a fancy dog and cat food shop that would allow authenticated users to purchase dog and cat food or view products that are currently in stock.

Deployed version can be found [here](https://tailsandwhisters.herokuapp.com/)



### Project members 
+ [Arjun](https://github.com/arjun-doel) 
+ [Aya](https://github.com/Ayamallahx)
+ [Maurice](https://github.com/gasamplepage1)
+ [Ineta](https://github.com/inetabliu)
+ 
### Timeframe
+ 9 days


Tails & Whiskers Landing Page
![Screenshot 2021-09-06 at 14 28 15](https://user-images.githubusercontent.com/81913593/132224834-0f731c8d-dc18-4cd8-ae3c-7317c5d857aa.png)

Butternut Box Landing page
![Screenshot 2021-09-06 at 14 27 58](https://user-images.githubusercontent.com/81913593/132224856-8b36d8ac-619d-49ec-b4ad-d62dadb76f33.png)

## Installation 

+ Clone repo or download zip 
+ run ``yarn install`` in root folder to install all backend dependencies
+ ``cd client`` and run ``yarn install`` to install frontend dependencies
+ run ``yarn seed`` to seed the database
+ ``yarn build`` & `` yarn dev``  and head to ``localhost:4000`` to view the site
+ To test authenticated user you may register with a test user or use ``aaim@email.com`` and password ``pass``



## Brief
As a group, create a Fullstack application with CRUD functionality using the MERN stack - MongoDB, Express, React & Node.

## Technologies used
+ React
+ Javascript
+ Express
+ Node.js
+ Sass
+ Bootstrap / React Bootstrap
+ MongoDB
+ Mongoose
+ Axios
+ JWT
+ Git / GitHub

## Approach
We have spent two whole days deciding on an idea as well as planning our project with building wireframes, flowcharts of user journey as well as user stories for the project. It definitely have helped us to be organised knowing exactly what features we are building and when. Here are our flowchart and initial wireframes for the project. <br>
User Journey Flowchart
![Screenshot 2021-09-06 at 10 29 01](https://user-images.githubusercontent.com/81913593/132200412-913fe1a1-c760-4a6a-bede-002866ea4b52.png)

Wireframes
![Screenshot 2021-09-06 at 10 39 28](https://user-images.githubusercontent.com/81913593/132200620-223c95c8-bdc0-411e-addb-8b31360c4f4a.png)

### Backend
We decided to spend a few days building the backend all together before we moved to the front-end and split out to build feature by feature. It all ran smoothly as we were taking turns in writing code while there others would figure out the logic for it. It was a great way for each of us to go through the backend together and solidify the knowledge of backend.

### Front-End
#### Features I worked on
+ Basket modal
+ Homepage 
+ About Page
+ Styling retouching 
+ Pet Profile page
+ Navbar 


## Challenges
+ Figure out relationships required for our application has been pretty challenging. We decided to keep our database pretty simple so our backend isn't too complicated. Here are our initial relationships in our database. 
![Screenshot 2021-09-06 at 10 27 46](https://user-images.githubusercontent.com/81913593/132202096-2861655e-d56d-4e9e-b2ae-a3e0e656d764.png)
+ Logic for shopping basket. We have decided to do the logic for the shopping basket all together and we have spent the whole working day together on it. It has proven to be challenging to figure out how to store information about each product in local storage and remove it when the basket has been checked out.


## Wins
+ Fool proof planning as part of a team. We have done a great job at planning out the project and spending a significant amount of time in making wireframes as well as user stories. Working as part of a 4 people team could have been more challenging, but we were well organised with daily standups that we would discuss what features we are building on the day and how we will be working during the day (individually, pair coding, part of a group).
+ After spending a whole day collaboratively tackling the problem of building a basket component and trying many different revenues Ajun managed to figure out the logic for it. It has been a great win to be working collaboratively together to try and tackle the hardest feature to build on the project together, it does definitely need some more improvements but we were happy with the finished version of this feature.
+ As it was the first time working as part of a four person team on one project and single code base, we had to embrace using Git to our advantage and start working on our own individual branches. As we chose to build the backend all together we saved time and efforts and had to start working with branches when we moved to build our own separate features. We would start our morning deciding on who's gonna be building what features, push our changes to the development branch and pull most up to date code and repeat the process at the end of the day making sure we save ourselves the headache with major merge conflicts. 


## Bugs
+ You are able to check out the basket even if you are not authenticated.
+ Popup message appears twice when something gets added or removed from the basket.
+ Token doesn't get cleared from local storage currently, which causes the basket items to stay in the basket if it hasn't been checked out.


## Key Learnings
+ Bootstrap Framework. First time using another CSS Framework that wasn't Bulma. I personally really enjoyed working with Bootstrap, which at the beginning was a bit scary and I couldn't wrap my head around it, but it was a great starting point in this project to get more comfortable with another framework and to continue using it in future projects.
+ MongoDB and working with NoSQL database for the first time. It was great to get to work building a first database and adapt the knowledge learned by building a MongoDB database.
+ Project planning and working as part of a team. It has been a great experience working on a first team project. Learning how to organise the workflow and different tasks.
