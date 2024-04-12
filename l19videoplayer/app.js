 
 const getcontainer = document.getElementById('container');
 const getvideoscreen = document.getElementById('videoscreen');	
 const playbtn = document.getElementById('play'),
 	   prevbtn = document.getElementById('prev'),
 	   nextbtn = document.getElementById('next'),
 	   stopbtn = document.getElementById('stop');

 const getprogress = document.getElementById('progress'),
       getprogressbar = document.getElementById('progress-bar');	
 	
 const getvolprogress = document.getElementById('volumeprogress');
 const getdisplaytime = document.getElementById('displaytime');	
 const gettitle = document.getElementById('title');   
 const getpannel = document.getElementById('pannel');   

 const getopenfullscreen = document.querySelector(".openfullscreen");
 const getclosefullscreen = document.querySelector(".closefullscreen");


const videos = ["samplevideo1","samplevideo2"];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(video){
      getvideoscreen.src = `./source/${video}.mp4`;
      gettitle.textContent = video;
}


function playvideo(){
      playbtn.querySelector('i.fas').classList.remove('fa-play');
      playbtn.querySelector('i.fas').classList.add('fa-pause');

      getvideoscreen.play();    //deafault function

}

// playaudio();


function pausevideo(){
      playbtn.querySelector('i.fas').classList.add('fa-play');
      playbtn.querySelector('i.fas').classList.remove('fa-pause');

      getvideoscreen.pause();    //deafault function

}


function playandpausevideo(){
      // paused default keyword for audio/video
      
      
      if(getvideoscreen.paused){
            loadvideo(videos[curridx]);
            getvideoscreen.play();
      }else{
            getvideoscreen.pause();

      }
}


function nextvideo(){

      curridx++;
      //0 1 2        3-1 = 2
      if(curridx >videos.length-1){
            curridx = 0;
      }

      loadvideo(videos[curridx]);
      playvideo();

}

function prevvideo(){
      //0 1 2     
      curridx--;
      if(curridx < 0){
            curridx = videos.length-1;
      }

      loadvideo(videos[curridx]);
      playvideo();

}

function stopvideo(){
      getvideoscreen.currentTime = 0;
      // getprogressbar.style.width = `0%`;
      getprogressbar.style.width = `${getvideoscreen.currentTime}`;

      pausevideo();
}


function updateprogress(e){
      // console.log(e.target);

      // console.log(e.target.duration);
      // console.log(e.target.currentTime);

      const getduration = e.target.duration;
      const getcurrenttime = e.target.currenttime;
      // console.log(getduration,getcurrenttime);

      // const {duration,currentTime} = e.target;
      // console.log(duration,currentTime);

      // const {duration} = e.target;
      // const {currentTime} = e.target;
      // console.log(duration,currentTime);

      const [duration,currentTime]= [e.target.duration,e.srcElement.currentTime];
      console.log(duration,currentTime);



      if(currentTime === 0){
            getprogressbar.style.width = "0%";
      }else{      
                                          // 0 to 100
            const progresspercent = (currentTime/duration)*100;

            console.log(progresspercent);
            getprogressbar.style.width = `${progresspercent}%`;

      }

      //forward
      // const mins = Math.floor(currentTime/60);
      // const secs = Math.floor(currentTime%60);

      //backward

      let getmins = Math.floor((duration-currentTime)/60);
      let getsecs = Math.floor((duration-currentTime)%60);
      // console.log(typeof mins);

      const minutevalue = getmins.toString().padStart(2,'0');
      const secondvalue = getsecs.toString().padStart(2,'0');

      getdisplaytime.innerText = `${minutevalue}:${secondvalue}`;


      // if(getmins < 10){

      //       getmins = "0"+getmins;
      //       getmins = "0"+String(getmins);

      // }


      // if(getsecs < 10){

      //       getsecs = "0"+getsecs;
      //       getsecs = "0"+String(getsecs);

      // }

      // getdisplaytime.innerText = `${getmins}:${getsecs}`;


}

function setprogress(e){

      // const width = e.target.clientWidth;  //can
      const width = this.clientWidth; 
      // const clickx = this.offsetX;        //undefined
      const clickx = e.offsetX;

      console.log(clickx);

      const getduration = getvideoscreen.duration;
      console.log(getduration);

      getvideoscreen.currentTime = (clickx/width)*getduration;
      // console.log(getvideoscreen.currentTime);


}

function openfullscreen(){

      if(getcontainer.requestFullscreen){
            getcontainer.requestFullscreen(); 
      }else if(getcontainer.mozrequestFullscreen){
            getcontainer.mozrequestFullscreen(); 

      }else if(getcontainer.webkitrequestFullscreen){
            getcontainer.webkitrequestFullscreen(); 
            
      }else if(getcontainer.msrequestFullscreen){
            getcontainer.msrequestFullscreen(); 
            
      }

      getclosefullscreen.style.display = "none";
      getopenfullscreen.style.display = "inline-block";

}

function closefullscreen(){

      if(document.requestFullscreen){
            document.requestFullscreen(); 
      }else if(document.mozCancelFullscreen){
            document.mozCancelFullscreen(); 

      }else if(document.webkitrequestFullscreen){
            document.webkitrequestFullscreen(); 
            
      }else if(document.msrequestFullscreen){
            document.msrequestFullscreen(); 
            
      }

      getopenfullscreen.style.display = "inline-block";
      getclosefullscreen.style.display = "none";

}


getvideoscreen.addEventListener("timeupdate",updateprogress);
getvideoscreen.addEventListener("ended",nextvideo);
getvideoscreen.addEventListener("play",playvideo);
getvideoscreen.addEventListener("pause",pausevideo);


playbtn.addEventListener('click',playandpausevideo);
nextbtn.addEventListener('click',nextvideo);  //0 1 2 0 1 2
prevbtn.addEventListener('click',prevvideo);  
stopbtn.addEventListener('click',stopvideo);
getprogress.addEventListener('click',setprogress);


getopenfullscreen.addEventListener("click",openfullscreen);
getclosefullscreen.addEventListener("click",closefullscreen);

// 5VD      