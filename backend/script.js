"use strict"

const fetchWindspeed = async() => {
	try {
		const response = await fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed')
		const data = await response.json();
		console.log(data);
		let tab = '';
		data.forEach(function(item) {
			const parsedDate = new Date(item.date_time);
			const dateString = parsedDate.toLocaleDateString();
			const timeString = parsedDate.toLocaleTimeString();

			tab += `<tr>
			<td>${dateString}</td>
			<td>${timeString}</td>
			<td>${item.wind_speed}</td>
			</tr>`
		});

		document.getElementById('list-windspeed').innerHTML = tab;
		
		$(`#userTable`).dataTable({
			"data": data.map,
			"columns" : [
				{"data" : 'Date'},
				{"data" : 'Time'},
				{"data" : 'WindSpeed'},
			]
		})

	} catch (error) {
		console.log(error);
	}
}

const fetchTemperature = async() => {
	try {
		const response = await fetch('https://webapi19sa-1.course.tamk.cloud/v1/weather/temperature')
		const data = await response.json();
		console.log(data);
		let tab = '';
		data.forEach(function(item) {
			const date_time = item.date_time;
			const parsedDate = new Date(date_time);
			const dateString = parsedDate.toLocaleDateString();
			const timeString = parsedDate.toLocaleTimeString();

			tab += `<tr>
			<td>${dateString}</td>
			<td>${timeString}</td>
			<td>${item.temperature}</td>
			</tr>`
		});
		document.getElementById('list-temperature').innerHTML = tab;
		
		$(`#userTable`).dataTable({
			"data": data.map,
			"columns" : [
				{"data" : 'Date'},
				{"data" : 'Time'},
				{"data" : 'Temperature'},
			]
		})

	} catch (error) {
		console.log(error);
	}
}

const fetchLastValues = async() => {
	try {
		const response = await fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/limit/50')
		const data = await response.json();
		console.log(data);
		let tab = '';
		data.forEach(function(item) {
			let value;
			const date_time = item.date_time;
			const parsedDate = new Date(date_time);
			const dateString = parsedDate.toLocaleDateString();
			const timeString = parsedDate.toLocaleTimeString();

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
		
		$(`#userTable`).dataTable({
			"data": data.map,
			"columns" : [
				{"data" : 'Date'},
				{"data" : 'Time'},
				{"data" : 'Value'},
			]
		})

	} catch (error) {
		console.log(error);
	}
}
 fetchLastValues();
 fetchTemperature();
 fetchWindspeed();