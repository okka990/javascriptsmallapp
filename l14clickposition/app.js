// get ui

const getmap = document.querySelector('.map-container');

let getsmallcolor  = document.getElementById('smallcolor'),
 	getmediumcolor = document.getElementById('mediumcolor'),
  	getlargecolor  = document.getElementById('largecolor');

  	console.log(getlargecolor);
  	// 9MP

  	var circleidx = 0;

  	getmap.addEventListener('click',function(e){

  		// console.log('i am working');

  		circleidx++;
  		// console.log(circleidx);
  		// console.log(e.target);

  		if(e.target.classList.contains('map-container')){

  		const offx = e.offsetX;
  		const offy = e.offsetY;

  		console.log(offx,offy);

  		const newspan = document.createElement('span');
  		newspan.id = circleidx;
  		newspan.classList.add('circle');

  		newspan.style.left = `${offx}px`;
  		newspan.style.top = `${offy}px`;

  			// newspan.style.setProperty('--small-color','darkblue');
  			// newspan.style.setProperty('--medium-color','skyblue');
  			// newspan.style.setProperty('--large-color',"steelblue");

  		console.log(newspan);
  		
  		console.log(this);

  			if(getsmallcolor.selectedIndex > 0 &&  getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex > 0  ){
  				newspan.style.setProperty('--small-color',getsmallcolor.value);
  				newspan.style.setProperty('--medium-color',getmediumcolor.value);
  				newspan.style.setProperty('--large-color',getlargecolor.value);

  			}

  			this.appendChild(newspan);

  		}
  		console.log(getsmallcolor.selectedIndex);  //yway lik tae kg yae idx
  		console.log(getsmallcolor.value)
  		console.log(getmediumcolor.value)


  	});