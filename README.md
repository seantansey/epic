# EPIC

![logo](https://github.com/stansey92/epic/blob/master/epic_logo.png)

An EPIC is a special designation for a true backcountry riding experience that many mountain bikers live for, and make travel plans around. An epic is an immersive ride that is technical, physically challenging, beautiful and worthy of celebration. 

EPIC ride finder gives you the beta you need to realize your mountain biking bucket list, helping you to make these special and adventurous rides a reality. 

EPIC Ride Finder © Hand Crafted in Boulder, Colorado. 2018 all rights reserved. 

[Deployed link](http://google.com/)

### Wireframes
[Wireframes](https://wireframe.cc/BsPt8U)
![alt text](https://github.com/yogasarak/g106_project_starter/blob/master/Screen%20Shot%202018-12-12%20at%204.07.33%20PM.png)
![wireframe](https://raw.githubusercontent.com/yogasarak/g106_project_starter/master/Screen%20Shot%202018-12-12%20at%204.07.46%20PM.png?token=AAZDvkDZOaFDpzuy8k-bWbvYkB8Ip34iks5cGtYPwA%3D%3D)
### A style guide

[Color Scheme](https://coolors.co/export/png/000000-eae1c0-6a7172-7eb0d3-dd745f)
![color scheme](https://github.com/yogasarak/g106_project_starter/blob/master/color_scheme.png)

Fonts: font-family: 'Abel', sans-serif;

![font picture](https://github.com/yogasarak/g106_project_starter/blob/master/gscreenshot_2018-12-12-162332.png)

```
<link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
```
or
```
<style>
@import url('https://fonts.googleapis.com/css?family=Abel');
</style>
```

CSS -
font-family: font-family: 'Abel', sans-serif;

### Planning

[Planning Board](https://trello.com/b/Csi3HKPq/epic)


### Schema/ERD for Database (only needed for Q2/Q3/Q4 projects)
[ERD](https://www.lucidchart.com/invitations/accept/b9fa6293-7711-46aa-b517-7f47091f680f)
![erd](https://github.com/yogasarak/g106_project_starter/blob/master/Untitled.png)

### Server Routes Plan (example below, only needed for Q2/Q3/Q4 Projects)

- Users
  - POST /users Create a new user
  - POST /token User login
  - DELETE /token logout user
  - GET /users/:id Retrieve user information

- Favorites
  - POST /favorites add a new favorite
  - GET /favorites Retrieve all favorites
  - GET /favorites/:id Retrieve a single favorite
  
- Trails
  - GET /trails get all trails
  - GET /trails/:id get a single trail

### Deployed Link
https://epic-bike-app.herokuapp.com/
