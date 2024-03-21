//get UI
let gettablinks =document.getElementsByClassName('tablinks'),
    gettabpanels = document.getElementsByClassName('tab-panel'),
    getbtnclose = document.querySelectorAll(".btn-close");

    let tabpanels = Array.from(gettabpanels);
    console.log(tabpanels);
    console.log(gettabpanels);


    function gettab(evn,link){
        console.log("this is event"+evn.target);
        console.log("this is link"+link);

        //remove active
        for(var x=0; x < gettablinks.length; x++ ){
           // console.log(x) // 0 to 3
            //gettablinks[x].remove();

            gettablinks[x].className = gettablinks[x].className.replace(' active','');

            getbtnclose[x].addEventListener('click',function(){
                this.parentElement.style.display="none";
            });
        }
            //add active

            // evn.target.className = "tablinks active";
            // evn.target.className += " active";
            // evn.currentTarget.className += " active";
            // evn.target.className = evn.target.className.replace("tablinks","tablinks active");
            evn.target.classList.add('active');

 
    //hide panel
    tabpanels.forEach(function(tabpanel){
      tabpanel.style.display= "none";
    });


    //show panel

    document.getElementById(link).style.display="block";

  } 

  document.getElementById("autoclick").click();