function expandPhoto(){  
    var overlay = document.createElement("div");  
    overlay.setAttribute("id","overlay");  
    overlay.setAttribute("class","overlay");  
    document.body.appendChild(overlay);  
  
    var img = document.createElement("img");  
    img.setAttribute("class","overlayimg");  
    img.src = this.getAttribute("src"); 
    document.getElementById("overlay").appendChild(img);  
  
    img.onclick = restore;  
}  
function restore(){  
    document.body.removeChild(document.getElementById("overlay"));  
    document.body.removeChild(document.getElementById("img"));  
}  
window.onload = function(){

    var imgs = document.getElementById("seenOn").getElementsByTagName("img");
    var url1=document.getElementById("url1");
    var url2=document.getElementById("url2");
    url1.onmouseover=function(){
    	url1.innerHTML="15176417750";
    }
    url2.onmouseover=function(){
    	url2.innerHTML="2802902400@qq.com";
    }
    imgs[0].focus();  
    for(var i = 0;i<imgs.length;i++){  
        imgs[i].onclick = expandPhoto;  
        imgs[i].onkeydown = expandPhoto;  
    }  
  
}  