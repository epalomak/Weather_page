
# Weather Page
This is a simple website that fetches data from API and displays it.<br>
From here you can check the site https://tite-5g00fy11.github.io/2023-wk14-final-project-epalomak/ .<br>
There is Four different tabs: Weather station, last values, temperature and light. the nav bar and tab
navigation were made using bootstrap 5. When you press any of the tabs page will fetch data on tap and display it. 
Time and signal selects are made using html select and it's onchange ability.

## Weather station view
On default this view will show you the latest 20 temperature values. From the middle you can choose signal 
(Temperature, wind direction, rain, windspeed, light or humidity in/out) and what timespan you want.
Page will then show signal data a graph from it and some statistics.


<img src="https://user-images.githubusercontent.com/58777327/235351178-3b125015-8713-4f5d-a873-4323792d6d36.png" width=70%>

## Last values view
This view fetches the last 50 values from the database with name and value of the data. There might be some undefined data
if other students have sent data to the API with different names.


<img src="https://user-images.githubusercontent.com/58777327/235351419-5b4fefe4-40b8-4b6f-972f-a72abd2a76d1.png" width=70%>

## Temperature view
Here you can choose timespan for temperature data on default it is last 20 values. Below listed data there is also a line 
graph and some statistics.


<p float="left">
  <img src="https://user-images.githubusercontent.com/58777327/235351562-d8752b91-2afb-4bc9-8c00-6eac87dafee5.png" width = 49%>
  <img src="https://user-images.githubusercontent.com/58777327/235351599-3a46bf50-880b-475d-9028-0eb367aa1220.png" width = 49%>
</p>


## Light view
Pretty much same as temperature view only the graph is a bar graph and different color.


<p float="left">
  <img src="https://user-images.githubusercontent.com/58777327/235351971-c4291575-118c-42cd-91b8-030dc9fd26e4.png" width = 49%>
  <img src="https://user-images.githubusercontent.com/58777327/235352025-b852e054-90d1-4d03-a520-ffe8c918095d.png" width = 49%>
</p>


##  Video
video here.

## Js files
in script.js there is two fetch functions. One is for the last 50 values and the other for everything else. I did it this
way because the last values view is different as it includes name of data with the value. fetchData function takes signal type,
wanted timespan and which view we are suppose to display data on as parameters. handleDataChanges is called when you change timespan
or signal(in the main weather station view) and it calls fetchData with right parameters. Other js file statistics.js contains functions
that are used to calculate the statistic(mean, median, mode, range and standard deviation) in different views.
