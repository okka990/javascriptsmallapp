
let getacctitles = document.getElementsByClassName('acctitle');

 // let getacctitles = document.querySelectorAll('.acctitle');
 // console.log(getacctitles);

let getacccontents = document.querySelectorAll('.acccontent');



	for(let x=0 ;x<getacctitles.length ;x++ ){

		getacctitles[x].addEventListener('click',function(e){
			
			this.classList.toggle('active');
		
			let getcontent = this.nextElementSibling;
			

			if(getcontent.style.height){

				getcontent.style.height = null;
			}else{

				getcontent.style.height = getcontent.scrollHeight+"px";
			}

		});

		if(getacctitles[x].classList.contains('active')){
		getacccontents[x].style.height = getacccontents[x].scrollHeight+"px";

		}

	}

	
	


