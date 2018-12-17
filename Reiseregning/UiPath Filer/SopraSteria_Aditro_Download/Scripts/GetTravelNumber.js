function(e) {
	var travelNumber = document.getElementsByName('shadowNumber')[0].value;
	window.open('https://scandinavianhrportal.steria.no/Aditro/Travel/Voucher/Preview?type=Claim&shadowNumber=' + travelNumber)
	return travelNumber;
	
};