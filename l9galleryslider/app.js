

var getmodal = document.querySelector('.modal');
var getmodalimg = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getbtnclose = document.querySelector('.btn-close');

function shownow(abc){
    // console.log(abc);
    // console.log(abc.target);
    // console.log(abc.target.src);
    // console.log(abc.target.alt);

    getmodal.style.display = "block";
    getmodalimg.src = abc.target.src;
    getcaption.textContent = abc.target.alt;


}

// getbtnclose.addEventListener('click',function(){
//     getmodal.style.display = "none";
// });

getbtnclose.onclick = function(){
    getmodal.style.display = "none";
};

document.addEventListener('click',function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
});

// 8GG

