//GET UI

const languages = ["Nodejs","Reactjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];
const gettxtani = document.querySelector(".textani");

// console.log(languages);
// console.log(colors);

// console.log(languages.indexOf("Reactjs")); //1 index number ko ya
// console.log(languages.indexOf("laravel")); //-1  spelling
// console.log(languages.indexOf("Laravel")); //3

console.log(colors[languages.indexOf("Nodejs")]); //red
console.log(colors[languages.indexOf("Vuejs")]); //violet

//return 0 to 3

function* generator(){

	var idx = 0;

	while(true){
		yield idx++;

		if(idx > 3){
			idx = 0;
		}
	}
}

const genfun = generator();
// console.warn(genfun);    //object
// console.log(genfun.next());  //{value: 0, done: false}
// console.log(genfun.next().value); // 0      0 
// console.log(genfun.next().value); // 1    	1
// console.log(genfun.next().value); // 2		2
// console.log(genfun.next().value); // 3		3
// console.log(genfun.next().value);  //4		0
// console.log(genfun.next().value);  //5		1

// console.log(languages[genfun.next().value]);
// console.log(languages[genfun.next().value]);	
// console.log(languages[genfun.next().value]);	
// console.log(languages[genfun.next().value]);	
// console.log(languages[genfun.next().value]);	
// console.log(languages[genfun.next().value]);	
// console.log(languages[genfun.next().value]);	

function showwords(word){
	console.log(word);     //Nodejs 
	console.log(word[0]);  //N

	let x = 0;

	gettxtani.innerHTML = '';
	gettxtani.classList.add(colors[languages.indexOf(word)]);

	// gettxtani.innerHTML = word;	
	// gettxtani.innerHTML = word[0];
	// gettxtani.innerHTML += word[1];
	// gettxtani.innerHTML += word[2];

	let showinterval = setInterval(function(){

		if(x >= word.length){
			clearInterval(showinterval);
		}else{
			gettxtani.innerHTML += word[x];
			x++;
		}

	},500);

	// gettxtani.innerHTML = word;
	// gettxtani.innerHTML = word;

}
showwords(languages[genfun.next().value]);
// showwords(languages[3]);


// 15WD

