// get ui

const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

// getemail.focus();

getemail.addEventListener('keyup',function(e){
	// console.log(e.target.value);
	createemaillist(this.value);

});

function createemaillist(inputtext){
	// console.log(inputtext);

	//split by(',')
	// const eitems = inputtext.split(',');
	// console.log(eitems);

	//remove empty, space
	// const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
	// console.log(eitems);               

	//remove space in text

	const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '').map(rmtxtempty=>rmtxtempty.trim());
	// console.log(eitems);

	getemcontainer.innerHTML = "";

	eitems.forEach(function(eitem){
		// console.log(eitem);

		const setnewspan = document.createElement('span');
		setnewspan.textContent = eitem;
		setnewspan.classList.add('email-item');
		console.log(setnewspan);
		getemcontainer.appendChild(setnewspan);

	});


};

getbtn.addEventListener('click',function(e){

	e.preventDefault();
	sendemail();
});

function sendemail(){

	const getaddresses = document.querySelectorAll('.email-item');
	const gettxtvalue  = gettextarea.value;
	// console.warn(getaddresses);
	// console.log(gettxtvalue);

	var persons = [];

	if(getaddresses.length > 0 && gettxtvalue){

		getaddresses.forEach(function(getaddress){
			persons.push({
				email:getaddress.textContent,
				message:gettxtvalue
			});

		});
		console.log(persons)
	}else{
		window.alert('enter message');
		getemail.focus();
		// gettextarea.focus();

	}
}

// 19EM

// if(getaddresses.length > 0 && gettxtvalue){

// 		getaddresses.forEach(function(getaddress){
// 			persons.push({
// 				email:getaddress.textContent,
// 				message:gettxtvalue
// 			});

// 		});
// 		console.log(persons)
// 	}

// 	else{
// 		window.alert('enter message');
// 		getemail.focus();
// 		// gettextarea.focus();

// 	}


		
