const getdownloadbtn = document.querySelector('.download-btn');
const getprogressbar = document.querySelector('.progress-bar');
const seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function(){
    // console.log("hey i'm working");

    var setwidth = 0;

    let setinv  = setInterval(progressinc,20);

    progressinc();

    function progressinc(){
        if(setwidth >= 100){
            setwidth = 0;
            // clearInterval(setInterval(progressinc,20));
            clearInterval(setinv);


            //redirect
            window.location.href = "https://youtube.com";
        }else{
            setwidth++;
            getprogressbar.style.width = `${setwidth}%`;
            getprogressbar.setAttribute('data-inc',`${setwidth}%`);
            getdownloadbtn.setAttribute('disabled',true);
        }
        console.log(setwidth);
    }

   
})
    

