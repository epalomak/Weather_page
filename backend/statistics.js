
function mean(values) {
	var total = 0;
	
	values.forEach(function (value) {
		total += +value;
	})
	return (total / values.length);
}

function median(values){

	var nbrValues = values.map(Number)
	nbrValues.sort(function(a,b){
		return a - b;
	});

	var half = Math.floor(nbrValues.length / 2);

	if(nbrValues.length % 2)
		return nbrValues[half];
	
	return ((nbrValues[half - 1] + nbrValues[half]) / 2.0);
	
}

function mode(values) {
	const mode = {};
	var max = 0, count = 0;

	for(var i = 0; i < values.length; i++)
	{
		const item = values[i]

		if(mode[item])
			mode[item] ++;
		else
			mode[item] = 1;

		if(count < mode[item]){
			max = item;
			count = mode[item];
		}
	}
	return max;
}

function range(values) {
	
	values.sort((a,b) => a - b);

	return [values[0], values[values.length -1]];
}

function standardDeviation (values) {

	var nbrValues = values.map(Number);
	const n = nbrValues.length;
	const mean = nbrValues.reduce((a, b) => a + b) / n

	return Math.sqrt(nbrValues.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
}