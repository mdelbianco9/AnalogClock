

function interval() {
	var date = new Date();
	var sec = date.getSeconds();
	var min = date.getMinutes();
	var hour = date.getHours();

	var secondsHand = document.getElementsByClassName('seconds')[0];
	secondsHand.style.transform = "rotate(" + sec * 6 + "deg" + ")";

	var minutesHand = document.getElementsByClassName('minutes')[0];
	minutesHand.style.transform = "rotate(" + min * 6 + "deg" + ")";

	var hoursHand = document.getElementsByClassName('hours')[0];
	hoursHand.style.transform = "rotate(" + hour * 30 + "deg" + ")"

	console.log(date)
}

setInterval(interval, 1000)



interval();

























































// var yourtime = setInterval(interval, 1000);

// function interval() {
// 	var date = new Date();
// 	var hour = date.getHours();
// 	var min = date.getMinutes();
// 	var sec = date.getSeconds();

		 

// 		var secondsHand = document.getElementsByClassName('secondsHand')[0];
// 		secondsHand.style.transform = "rotate(" + sec * 6  + "deg" + ")";

// 		var minutesHand = document.getElementsByClassName('minutesHand')[0];
// 		minutesHand.style.transform = "rotate(" + min * 6  + "deg" + ")";
		
// 		var hoursHand = document.getElementsByClassName('hoursHand')[0];
// 		hoursHand.style.transform = "rotate(" + hour * 30  + "deg" + ")";

// 		// Displays the time into HTML
// 		document.getElementById('time').innerHTML = hour + " : " + min + " : " + sec;

// }	

// // Calls the function
// interval()


