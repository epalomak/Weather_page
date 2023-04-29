[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/D_drWJKh)

#Weather Page 
  This is a simple website that fetches data from API and displays it.
https://tite-5g00fy11.github.io/2023-wk14-final-project-epalomak/ from here you can check the site.
There is Four different tabs: Weather station, last values, temperature and light. the nav bar and tab 
navigation were made using bootstrap 5. When you press any of the tabs page will fetch data on tap and display it. 
Time and signal selects are made using htmls <select> and it's onchange ability.
 
 ##Weather station view
  On default this view will show you the latest 20 temperature values. From the middle you can choose signal 
(Temperature, wind direction, rain, windspeed, light or humidity in/out) and what timespan you want.
Page will then show signal data a graph from it and some statistics.

##Last values view
  This view fetches the last 50 values from the database with name and value of the data. There might be some undefined data
if other students have sent data to the API with different names.

##Temperature view
  Here you can choose timespan for temperature data on default it is last 20 values. Below listed data there is also a line 
graph and some statistics.

##Light view
  Pretty much same as temperature view only the graph is a bar graph and different color.
  
# Video
 
##Js files
  in script.js there is two fetch functions. One is for the last 50 values and the other for everything else. I did it this
way because the last values view is different as it includes name of data with the value. fetchData function takes signal type,
wanted timespan and which view we are suppose to display data on as parameters. handleDataChanges is called when you change timespan
or signal(in the main weather station view) and it calls fetchData with right parameters. Other js file statistics.js contains functions
that are used to calculate the statistic(mean, median, mode, range and standard deviation) in different views.
