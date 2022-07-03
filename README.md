# Facebook ads manager Code Challenge`

In the project directory, you can run:

### `npm i`

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `App Stack:`

This app has been made using the following tech stack:

- ReactJS
- CSS3
- HTML5
- JSES6
- react-router-dom v6

### **This app contains the following features:**

#### Product viewing

In order to manage the current products and their respective advertisements, the app contains a list for them. This list is located directly as the home/landing page.

By clicking on one of the products, the user will be redirected towards their prepared facebook ads.

This ads can be edited. For this it's necessary to go to the "Ad View" by clicking on top of them.

#### Ad viewing & editing

A mockup view has been made using the latest Facebook design. This has been achieved using CSS.

By hovering on top of each section, the user will be capable of editing the ad without a problem. For exaple, by editing the ad photography, and using the save button, located at the top of the page, the user will save this changes. Going back with the "Return" button will show this changes reflected.

#### Project navigation

This project offers a great navigation experience by using the npm package "react-router-dom" in its v6 version. The importancy of the difference between the v6 and v5 versions resides in the way the router is created, allowing < Outlet/> to be used as if "children". This allows for routes to be nested more easily and also permits an usage of a general or different layouts without a problem.
Other changes affecting the v6 version are the now deprecated useHistory, used for returning to the previous page and more. useNavigation appears as its successor making it much easier for going back the number of pages desired, be it one or more.
react-router-dom v6 provides a route-context too but this has not been implemented in this code challenge.

The code implementation for this project of react-router-dom can be seen at the header of the webpage where links allow the user to move freely through the app. Other implementations may only be seen through the code.

#### Project styling

As aforementioned, this project uses only css for its styling, without libraries or any modifications. My approach to implementing css this time has been one where most styles were implemented through class names in order to bring more versatility. All the general stylings have been written at global.styles.css. Each component then has their own specific named following a similar pattern: FileName.styles.css
".styles.css" intead of ".css" is used simply for better navigation when programming as Ctrl+P can let you move more freely between files. It is also easier to distinguish FileName.styles.css from FileName.js than from FileName.css.

The styles have been implemented mainly to show responsiveness. Unfortunately, I believe this project doesn't stand up to others I've coded in terms of design. Other examples of my css and design skills would be:

- [idleread.click](https://www.idleread.click)
  - This is a web game I have designed, coded and deployed myself. It includes good Context using that can be seen in its [GitHub repository](https://https://github.com/SalvadorSC/idle-read)
- [bcncookingexperience.com](https://https://www.bcncookingexperience.com/)
  - This is a company website that I made for a small client. The design, coding and deployment have all been done by me too. It only uses HTML5, CSS3 and a little bit of JS.
- [Can Manel - Figma](https://www.figma.com/file/WXnbYFGZYmueWQhMtDTf46/Can-Manel?node-id=102%3A121683)
  - This is a project that unfortunately isn't deployed anymore but I am proud of its design so I still wanted to show it here. I believe it shows what I can manage to do (in terms of design) with more time.

#### Data structures

In this project a small .json file was given to me for the challenge. This file was what now is the products part of the current "shop_data.json" file found in the "data" folder. I've made a few changes to it in order of simulating a little bit more what is to work with a database. Id's were added and more. A new part of the data structure are the ads. Ads are related to a product so they have the product id too a part from their own id. This way it's easy to filter them by product when necessary.

#### Unfinished tasks

Unfortunately, I haven't been capable of finishing all the desired aspects of the app. I will list here what is missing or half done.

- Creating a new ad from scratch
  - This part is half done. The form that is supposed to make it work can be found in the app. The idea was to let the user either mock the entire ad by filing the form or let them fill only half and the other half fill it with one of the already existing products, of course it would be chosen by the user with a select input. (This input isn't available)
- Deleting an ad
  - This part is also half done. It's not a hard part but time isn't infinite. all the logic behind is done and the buttons related are too. It's a two step part since clicking on the button to delete. A modal has been prepared to stop the user from commiting any mistakes. 😄
- More Facebook ads or versions
  - Carousel ad
  - Mobile ad
  - Messenger ad
  - I would have loved to add an option to switch ad styles between these and much more. It's a challenge I will have to do another day.
