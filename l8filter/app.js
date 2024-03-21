//Get UI

var getinput = document.getElementById("search");

var getsortazm1btn = document.getElementById("sortazm1");
    getsortzam1btn = document.getElementById("sortzam1");
    getsortazm2btn = document.getElementById("sortazm2");
    getsortzam2btn = document.getElementById("sortzam2");

    var getul = document.getElementById("members");
    var getlis = getul.getElementsByTagName("li"); 
     console.warn(getlis);


    getinput.addEventListener('keyup',filter);

    getsortazm1btn.addEventListener('click',sortingazm1);
    getsortzam1btn.addEventListener('click',sortingzam1);
    getsortazm2btn.addEventListener('click',sortingazm2);
    getsortzam2btn.addEventListener('click',sortingzam2);


   function filter(){

    var filter = this.value.toLowerCase();
    // console.log(filter);



    for(var x=0; x<getlis.length; x++ ){
        // console.log(x); //0 to 27

        let getlink = getlis[x].getElementsByTagName('a')[0];
        console.warn(getlink);

        var getatext = getlink.textContent || getlink.innerText;
        // console.log(getatext);
        // console.log(getatext.toLowerCase());

        // let xx = getatext.toLowerCase().indexOf(filter);
        // console.log(xx);
     //a htal ka text (aung aung)  yite lik tae sar 
         if(getatext.toLowerCase().indexOf(filter) > -1){
            getlis[x].style.display = "";
         }else{
            getlis[x].style.display = "none";
         }


    };

   };
   // console.log(getlis);

   //method1
   function sortingazm1(){
    console.log("method 1 az");

    var lis = [];

        for(var i = 0; i < getlis.length; i++){
            // console.log(getlis[i]);
            // console.log(getlis[i].innerHTML);
            // console.log(getlis[i].textContent);

            lis.push(getlis[i].textContent);
        }

        // console.log(lis);
        // console.log(lis.sort());
        // console.log(lis.reverse());
        // console.log(lis.sort().reverse());


        var azlis = lis.sort();

        getul.innerHTML ='';

        azlis.forEach(function(azli){
            // console.log(azli);
            const newli = document.createElement('li');
            const newlink = document.createElement('a');
            newlink.href = "javascript:void(0);";

            newlink.appendChild(document.createTextNode(azli));
            //console.log(newlink);

            newli.appendChild(newlink);
            // console.log(newli);

            getul.appendChild(newli);
        });

   }



    function sortingzam1(){
    console.log("method 1 za");

    var lis = [];

        for(var i = 0; i < getlis.length; i++){
            // console.log(getlis[i]);
            // console.log(getlis[i].innerHTML);
            // console.log(getlis[i].textContent);

            lis.push(getlis[i].textContent);
        }

        // console.log(lis);
        // console.log(lis.sort());
        // console.log(lis.reverse());
        // console.log(lis.sort().reverse());


        var zalis = lis.sort().reverse();
        // console.log(zalis);

        getul.innerHTML ='';

        zalis.forEach(function(zali){
            // console.log(zali);
            const newli = document.createElement('li');
            const newlink = document.createElement('a');
            newlink.href = "javascript:void(0);";

            newlink.appendChild(document.createTextNode(zali));
            // console.log(newlink);

            newli.appendChild(newlink);
            // console.log(newli);

            getul.appendChild(newli);
        });

   }

   console.log(getlis[0].textContent.toLocaleLowerCase()); //ag ag
   console.log(getlis[1].textContent.toLowerCase()); //mg mg

   if(getlis[0].textContent.toLocaleLowerCase() > getlis[1].textContent.toLocaleLowerCase()){
        console.log(true);
   }else if(getlis[0].textContent.toLocaleLowerCase() === getlis[1].textContent.toLocaleLowerCase()) {
         console.log('equal');
   }else{
    console.log(false);
    console.log("aung aung is less than mg mg");
   };
   //aung aung < mg mg
   // a < z

   //method2
    function sortingazm2(){
    // console.log("method 2 az");


        var shouldswitch = true;
        var switching = true;

        console.log(getlis.length); //28

        while(switching){
            switching = false;

            var i;

            for(i = 0; i < getlis.length-1; i++){
                console.log(i); //0 to 27

                // shouldswitch = false;
                                                //  z>a
                                                //  a>m
                if(getlis[i].textContent.toLowerCase() > getlis[i+1].textContent.toLowerCase()){
                    shouldswitch = true;
                    break;
                }else{
                    shouldswitch = false;
                    
                };

            };
            // console.log(i); //0

            if(shouldswitch){

                // parent.insertBefore(new,existing)
                // li       ul 
                getlis[i].parentNode.insertBefore(getlis[i+1],getlis[i]);
                switching = true;  //can cause line number 177 false a>m

            } 
        }

   }


    function sortingzam2(){
    // console.log("method 2 za");

         var shouldswitch = true;
        var switching = true;

        console.log(getlis.length); //28

        while(switching){
            switching = false;

            var i;

            for(i = 0; i < getlis.length-1; i++){
                console.log(i); //0 to 27

                shouldswitch = false;

                        //  z<a
                        //  z<m
                if(getlis[i].textContent.toLowerCase() < getlis[i+1].textContent.toLowerCase()){
                    shouldswitch = true;
                    break;
                   } 
                // }else{
                //     shouldswitch = false;
                    
                // }

            }
            // console.log(i); //0


            if(shouldswitch){

                // parent.insertBefore(new,existing)

                getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);
                switching = true;

            } 
        }
        // 22SW


   }

   //1ST

