# Factory Node Tree

 ## Table of Contents
  - [Description](#Description)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Questions](#Questions)

  ## Description
  ![badge](https://img.shields.io/badge/License-MIT-yellow.svg)
  [App Link](https://pure-forest-64023.herokuapp.com/)
  ![App Img](https://user-images.githubusercontent.com/66426144/122231570-86f4db00-ce88-11eb-82c8-2c9ca39f595a.png)

  This app was created with a ReactJs/Axios frontend and NodeJs/Express/MySql backend. JawsDB was used to deploy the database to Heroku.

  ## Process
  Normally for any app I'd start with a plan, design, and research. User stories, a site map, a detailed wireframe with UI/UX components described in the program Sketch or Figma and figure out what tech we're using. Once happy with layout and functionality, then I would move on to creating a design comp, and once the comp is approved begin building the app out. A git repo would be created where commits and user stories are managed, who would work on what if theres a team involved, etc, and we'd use whatever chat program to keep in communication often; typically slack or discord. For a full stack app front end content would be in a "Client" folder and back end in a "Server" folder that could be further broken down into the database connection and routes. Because of the smaller size of this project I just opted to use the server.js file for everything with the db and models folders more for my reference when building out the database on Heroku.

  ### Functionality
  Because of the nature of this assessment and how straight forward it is, I went straight into building it out. Typically I use Bootstrap for something quick, this time I tapped into Material UI (my first time), but I also wanted to implement some SASS code since it's commonly used and expected in a lot of places. Create-React-App was used for the starter code, so there are some PWA and jest testing files that haven't been used but would be a good idea to if this was a full fledged app in order to effectively find bugs and keep your app running optimally. As far as file organization goes, it seems commonplace to keep reusable/modular components apart from page components, as well as have their SASS files accompanying them. Since this was only a single page app with pretty straight forward routing/axios management I didn't use React router like I typically do. I like to name any component files as componentnameexample.component.jsx just to help clearly differentiate them from js files that don't have any jsx- it's also helpful to know it's a component especially if you're trying to trace errors in your console.
  
  People have all kinds of ways for deciding what should be a component, but the common strand seems to be reusability. For example making the input of a form a different component than the form itself- this would allow you to use the input component on several forms site wide. In this application however, since there was only one form I didn't find it necessary. As far as security goes you can use tech like Passport and helmet(for express), have utils to set up validation and authentication for relational databases in conjunction with something like sequelize, or use Firebase etc for noSQL in which it's incredibly easy to authenticate with google-sign-in, I just did some conditional coding myself to get the jist across for time purposes. An error flag was set so that if an input on the form was invalid it would add the error css class to that input. Due to time constraints I didn't get to this but I would have liked to have more success validation when updating a factory on the form- right now the factory appears which is a form of validation, but people expect some kind of success message as well.

  #### Challenges
  Most of my time was probably spent fighting Heroku and reading logs to figure out what blew up lol. I've used Heroku several times before but it always seems to violently surprise you in new unexpected ways. This was also my first time using axios on a react app- I've used axios before but not in a stack like this. People seem to prefer it over fetch, so I wanted to try it out! Lastly there's the random number generation. By using a random number seed you can avoid storing all the children in the state since they're all generated in the same way each time- this allows for a more consistant experience across browser instances. Unfortunately javascript doesnt support seeding Math.random() so I used a custom seedable random number generator from DavidBau. The seed used is a database stored timestamp that is set on factory creation or when the regenerate button is clicked.

  ![img1](https://user-images.githubusercontent.com/66426144/122226727-3e3b2300-ce84-11eb-99ba-c9dfcf6ac489.png) 
  ![img2](https://user-images.githubusercontent.com/66426144/122226849-5612a700-ce84-11eb-9d7f-d3d67ec90ceb.png) 
  ![img3](https://user-images.githubusercontent.com/66426144/122226970-76dafc80-ce84-11eb-98e6-79f1153831e3.png) 

  ## License
  [MIT](https://opensource.org/licenses/MIT)

  ## Contributing
  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
  [Material UI](https://material-ui.com/)
  [DavidBau's javascript seed gen](https://github.com/davidbau/seedrandom/blob/released/README.md)

  ## Questions
  [GitHub: CptSpooky](https://github.com/CptSpooky)
  [Email: legacyofthedonut@gmail.com](legacyofthedonut@gmail.com)
  Contact me! Email me or message me on LinkedIn!