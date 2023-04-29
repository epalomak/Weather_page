"use strict"

// Fetch to last values view
const fetchLastValues = async() => {
	try {
		const response = await fetch('https://webapi19sa-1.course.tamk.cloud/v1/weather/limit/50')
		const data = await response.json();
		console.log(data);
		let tab = '';
		data.forEach(function(item) {
			let value;
			const date_time = item.date_time;
			const parsedDate = new Date(date_time);
			const dateString = parsedDate.toLocaleDateString();
			const timeString = parsedDate.toLocaleTimeString();

			/*Checks which kind of data every value is. There might undefined ones if some other
			 students are sending data to the API*/
			if (item.data.humidity_out != undefined) 
				value = 'Humidity out: ' + item.data.humidity_out;
			else if (item.data.wind_direction != undefined)
				value = 'Wind Direction: ' + item.data.wind_direction;
			else if (item.data.rain != undefined)
				value = 'Rain: ' + item.data.rain;
			else if (item.data.wind_speed != undefined)
				value = 'Wind Speed: ' + item.data.wind_speed;
			else if (item.data.temperature != undefined)
				value = 'Temperature: ' + item.data.temperature;
			else if (item.data.light != undefined)
				value = 'Light: ' + item.data.light;
			else if (item.data.humidity_in != undefined)
				value = 'Humidity in: ' + item.data.humidity_in;

			tab += `<tr>
			<td>${dateString}</td>
			<td>${timeString}</td>
			<td>${value}</td>
			</tr>`
		});
		document.getElementById('list-lastValues').innerHTML = tab;
	} catch (error) {
		console.log(error);
	}
}

// fetch function that takes signal name, time and which view(used to get right elementById) as parameters.
async function fetchData(signal, timespan, whichPage) {

	if (timespan == undefined)
		timespan = "";
	if (signal == undefined)
		signal = "temperature";
	if (whichPage == undefined)
		whichPage = 0;
	
	try {
		const response = await fetch(`https://webapi19sa-1.course.tamk.cloud/v1/weather/${signal}/${timespan}`)
		const data = await response.json();
		console.log(data);
		let tab = '';
		let datetimes= [];
		
		//creating table with date time and value
		data.forEach(function(item) {
			const date_time = item.date_time;
			const parsedDate = new Date(date_time);
			const dateString = parsedDate.toLocaleDateString(); 
			const timeString = parsedDate.toLocaleTimeString();
			datetimes.push(dateString + " " + timeString);

			tab += `<tr>
			<td>${dateString}</td>
			<td>${timeString}</td>
			<td>${item[signal]}</td>
			</tr>`
		});

		if (whichPage == 0)
			document.getElementById('list-frontpage').innerHTML = tab;
		else if (whichPage == 1)
			document.getElementById('list-temperature').innerHTML = tab;
		else if (whichPage == 2)	
			document.getElementById('list-light').innerHTML = tab;

		const values = data.map(item => item[signal])
		console.log(values);

		let element;
		let graphType = 'line';
		let color = 'red';
		if (whichPage == 0)
			element = 'frontpageGraph';
		else if (whichPage == 1)
			element = "tempGraph";
		else if (whichPage == 2){
			element = 'lightGraph';
			graphType = 'bar';
			color = 'yellow';
		}
		
		
		
		let chartStatus = Chart.getChart(element)

		// destroys chart if there is all ready one to avoid errors
		if (chartStatus != undefined)	
  			chartStatus.destroy();
		const context = document.getElementById(element).getContext('2d');
		
		//creates a graph using charts.js
		const myChart = new Chart(context, {
		type: graphType,
		data: {
			labels: datetimes,
			datasets: [{
				label:signal,
				data:values,
				backgroundColor:color,
				borderColor: color,
				borderWidth: 3
			}],
		},
		options: {
			scales: {
				y: {
					suggestedMin: -10,
				}
			},
			plugins:{
				title:{
					display: true,
					text: signal
				},
				layout: {
					padding: 10
				}
			}
			}
		});

		//displays statistics from the data using self made functions at statistics.js
		const valuesRange = range(values);
		tab = '';
		tab = `
		<tr><td> mean</td>
		<td>${mean(values)}</td></tr>
		<tr><td>Median</td>
		<td>${median(values)}</td></tr>
		<tr><td>Mode</td>
		<td>${mode(values)}</td></tr>
		<tr><td>Range</td>
		<td>${valuesRange[0]} to ${valuesRange[1]}</td></tr>
		<tr><td>Standard deviation </td>
		<td>${standardDeviation(values)}</td></tr>
		`
		if (whichPage == 0)
			document.getElementById('list-stats').innerHTML = tab;
		if (whichPage == 1)
			document.getElementById('list-tempStats').innerHTML = tab;
		if (whichPage == 2)
			document.getElementById('list-lightStats').innerHTML = tab;


		} catch (error) {
			console.log(error);
	}
}

// calls fetchData function with right parameters
function handleDataChange(whichPage) {
	let selectedSignal = 0;
	let selectedTime = 0;
	if (whichPage == 1){
		selectedSignal = "temperature";
		selectedTime = document.getElementById("tempSelect").value;
	}
	else if (whichPage == 2){
		selectedSignal ="light";
		selectedTime = document.getElementById("lightSelect").value;
	}
	else {
		selectedSignal = document.getElementById("dataSelect").value;
		selectedTime = document.getElementById("timeSelect").value;
	}

	fetchData(selectedSignal, selectedTime, whichPage);
}

fetchData();