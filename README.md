# FreeLancers Gate Documentation

## main goals for freelancers gate

---

1- help jobless humans to find good jobs that fits the there life needs and wants

2- connect business owners with freelancers that they able to do there jobs in good way.

3- provide good education for non educated freelancers and for those who don't have any skills but they want to work, so we will create pages that will take them through many of option that they can study.

4- create online store for already created apps like websites or mobile apps

---

## Main Flowchart for website

![main](./WebsiteFlowChart/generalSiteFlowChartDesigin.dio.svg)

---

## 1- vertion 1.0.0

connect bussiness owners with freelancers to get things done

---

### librarys used

- sass: `npm install sass --save`

- React-router v-6: `npm install react-router-dom@6` study => [React Router v6 in depth guide](https://www.youtube.com/watch?v=0cSVuySEB0A)

- Redux: `npm install redux` study=> [React Redux Tutorial](https://www.youtube.com/watch?v=CVpUuw9XSjY)

- React-icons v-4.3.1: `npm install react-icons --save` study=> look at the DOCs

---

## creation steps, Issues I faced and how I did solve it

- installed sass, router, redux

- created basic empty pages and components

- added global file styling using sass with functions and vars

- created navbar and footer design make all links working with pages

- done creating all basic site pages design but still need to add more things to make the site more adorable

- create fake initial data in json file

- installed Firebase and connected firebase as database to my site

- make the registration form validation and send data to database in Firebase

- added users fetching function to the App.js and will add all other fetching function in it 

## errors and issues I faced

- try to create fake json server I used this wrong command `npm install json-server`, but the right one is `npm install -g json-server`

- founded another way to make the fake json server and it is working like that 1- create the data folder and create the db.json inside of it then wrote this command 
"npx json-server -w data/db.json -p 100 " then it will work

- I found that the fake json server will not give me what I want to add nested data inside of it so I start to use Firebase instead
