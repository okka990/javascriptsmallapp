const slides =document.getElementsByClassName('carousel-item');
const dots = document.querySelectorAll(".dot");
// console.log(slides);
// console.log(dots);

let currslide = 1;


	document.getElementById('prev').addEventListener('click',function(){
    // console.log('i am prev');
    // console.log(currslide -= 1);
    // console.log(currslide--);

    carousel(currslide -= 1);
});

// 	document.getElementById('next').addEventListener('click',function(e){
// 	// console.log("currslide");

// 		carousel(currslide += 1);
// 	e.preventDefault();

// });

	document.getElementById('next').addEventListener('click',function(e){ 
// console.log('i am next');
// console.log(currslide += 1);
// console.log(currslide++);

   carousel(currslide += 1);
   e.preventDefault();

});

	carousel(currslide)

	function carousel(slidenum){
		// console.log(slidenum)
		var x;
		for(x=0; x < slides.length; x++){
			slides[x].style.display='none';
			// dots[x].className="dot";
			// dots[x].className = dots[x].className.replace('active',"");
			dots[x].classList.remove("active");
		}

		if(slidenum > slides.length){
			currslide = 1;
		}else if(slidenum < 1){
			currslide = slides.length
		}
		// console.log(currslide)
		slides[currslide - 1].style.display="block";

		// dots[currslide - 1].className ="dot active";

		// dots[currslide - 1].className +=" active";
		dots[currslide -1 ].classList.add('active');
		

	}
	for(var y= 0; y< dots.length; y++){
		dots[y].addEventListener('click',function(){
			currslide= this.getAttribute("data-bs-slide-to");

			carousel(currslide);
		});
	}
