
// get ui

const database = [
	
	{
		question:"Choose Traffic Light ?",
		a: "./img/mountain.jpeg",
		b: "./img/traffic.jpeg",
		c: "./img/ambulance.jpeg",
		d: "./img/airport.jpeg",
		correctanswer:"b"
	},
	{
		question:"Choose Mountain ?",
		a: "./img/ambulance.jpeg",
		b: "./img/mountain.jpeg",
		c: "./img/traffic.jpeg",
		d: "./img/airport.jpeg",
		correctanswer:"b"

	},
	{
		question:"Choose Ambulance Truck ?",
		a: "./img/ambulance.jpeg",
		b: "./img/airport.jpeg",
		c: "./img/traffic.jpeg",
		d: "./img/mountain.jpeg",
		correctanswer:"a"

	},
	{
		question:"Choose Airport ?",
		a: "./img/traffic.jpeg",
		b: "./img/mountain.jpeg",
		c: "./img/ambulance.jpeg",
		d: "./img/airport.jpeg",
		correctanswer:"d"

	},

];


const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getinputs = document.querySelectorAll('.answer');  //nodelist

const geta_img = document.getElementById('a_img'),
 	getb_img = document.getElementById('b_img'),
  	getc_img = document.getElementById('c_img'),
   	getd_img = document.getElementById('d_img');
   		// console.log(geta_img);

const getbtn = document.querySelector('.btn');

let currentidx = 0;
let score = 0;


startquestion();

function startquestion(){

	removeselected();

	const currentqes = database[currentidx];
	// console.log(currentqes);

	getquestion.textContent = currentqes.question;
	geta_img.src = currentqes.a;
	getb_img.src = currentqes.b;
	getc_img.src = currentqes.c;
	getd_img.src = currentqes.d;

}

function getsingleinput(){

	let answer;

	getinputs.forEach(function(getinput){
		// console.log(getinput);
		// console.log(getinput.id);

		if(getinput.checked){
			// console.log(getinput.id);

			answer = getinput.id;
		}

	});
	return answer;

}


getbtn.addEventListener('click',function(){

		// console.log("i am working");



	const getanswer = getsingleinput();	
		// console.log(getanswer);

		if(getanswer){

		// console.log(getanswer);
			

			// question 0
			// currentidx 0

			if(getanswer === database[currentidx].correctanswer){
				score++;
			}

			currentidx++;

			// console.log(currentidx);

			//question1

			if(currentidx < database.length){
				startquestion();
			}else{
				// console.log(score+'mark you get');

				getcontainer.innerHTML = `
					<h3>Total Score : ${score*25}</h3>
					<h4>You answered correctly at ${score}/${database.length} question.</h4>
					<button type="button" class="btn" onclick="doubleclick()" >Double click to Reload</button>
					<!-- <button type="button" class="btn" ondblclick="document.location.reload();" >Double click to Reload</button>
				
				-->
				`;

			
			}
			// window.location.reload()
		}else{
			window.alert('choose one answer');

		}
});

function removeselected(){
	getinputs.forEach(function(getinput){
		return getinput.checked = false;
	});
}

let clicktimes = 0;
function doubleclick(){

	console.log("hay");

	if(clicktimes === 0){
		clicktimes = Date.now();
		console.log(clicktimes);
	}else{

		if((Date.now() - clicktimes) <1000){

			window.location.reload();
			clicktimes = 0;
		}else{
			clicktimes = Date.now();
		}
	}
}


// 1DB

