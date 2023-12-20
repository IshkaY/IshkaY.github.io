function swap(picNum){
    if(picNum==1){
      document.querySelector("#main").src="images/myers.png";  
    }
    else if(picNum==2){
        document.querySelector("#main").src="images/sp.jpg";  
      }
      else if(picNum==3){
        document.querySelector("#main").src="images/jason.png";  
      }  
      else if(picNum==4){
        document.querySelector("#main").src="images/ghost.jpg";  
      }
      else if(picNum==5){
        document.querySelector("#main").src="images/ha.png";  
      }
      else if(picNum==6){
        document.querySelector("#main").src="images/hush.png";  
      }
      else if(picNum==7){
        document.querySelector("#main").src="images/meg.jpg";  
      }
      else{
        document.querySelector("#main").src="images/texas.png";  
      }
}
    imgnum=1;
    
    function next (){
    if(imgnum==8) {
        imgnum=1;
    } else {imgnum++;
    }
      swap(imgnum);  
    }
    function previous (){
    if(imgnum==1) {
        imgnum=8;
    } else {imgnum--;
    }
      swap(imgnum);
    }