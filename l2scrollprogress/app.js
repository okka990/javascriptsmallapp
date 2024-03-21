// Get UI

const getprogressbar = document.getElementById('progress-bar');


window.onscroll = function(){
	// console.log('hay');
	scrollpoint();

}

function scrollpoint(){
	let getscrolltop = document.documentElement.scrollTop;
	console.log("scrolltop "+getscrolltop); //  start point and scroll bar distance 

	let getclientheight = document.documentElement.clientHeight;
	console.log(getclientheight);               //scroll bar tan yae height

	let getscrollheight = document.documentElement.scrollHeight;
	console.log(getscrollheight);              // total scroll area

	let calcheight = getscrollheight - getclientheight;
	console.log("scoll-client "+calcheight);    // scroll top ko static shar lik dr

	let beforematgetfinalheight = (getscrolltop/calcheight);
	console.error(beforematgetfinalheight);

	let getfinalheight = Math.floor((getscrolltop*100)/calcheight);
	// console.log("(scoltp/(scoll-clie))*100 "+getfinalheight);

	
	

	

	getprogressbar.style.width = getfinalheight+"%";

}

function printme(){

	window.print();

}





