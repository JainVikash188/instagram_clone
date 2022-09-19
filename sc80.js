var arr = [
    {img: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name:"alena" , cat:"following"},
     
    
   

    {img: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , name:"salena"  , cat:"following"},

    {img: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"  , name:"alexa" , cat:"following"},

    {img: "https://images.unsplash.com/photo-1612838856042-18756ccc202c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , name:"joy" , cat:"following"},

    {img: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"  , name:"princess" , cat:"following"},

    {img: "https://images.unsplash.com/photo-1612838856042-18756ccc202c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name:"ayushi" , cat:"following"},

    {img: "https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" , name:"riya", cat:"following"},

    {img: "https://images.unsplash.com/photo-1541119754970-b5a9b24ef937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" , name:"rohit" , cat:"following"},

    {img: "https://images.unsplash.com/photo-1605296866699-4bc5e3300d11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hpcnRsZXNzJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=ohit500&q=60" , name:"virat" , cat:"following"},
  
    

]

var grow = 0;

var clutter = "";
arr.forEach(function(elm , index){
    clutter += `  <img src="${elm.img}" id="${index}">` 
});

document.querySelector("#uper").innerHTML = clutter;


var clutter2 = "";
arr.forEach(function(elm , index){
    clutter2 += ` <div id="namesection">

    <div id="lft">
        <img class="li1" id="${index}"
            src="${elm.img}"
            alt="">
        <h2>${elm.name}</h2>
    </div>

       <div id="rht">
          <h1> <i class="ri-more-line"></i> </h1>
       </div>
   
    </div>

<div id="imagesection">
<img   src="${elm.img}"
alt="">,
</div>  `
   
});

document.querySelector("#down").innerHTML = clutter2;

document.querySelector("#uper").addEventListener("click", function(dets){
    document.querySelector("#overlay").style.display = "flex";
    document.querySelector("#story").style.backgroundImage = `url(${arr[dets.target.id].img})`;
   
    

    setTimeout(function(){
        document.querySelector("#overlay").style.display = "none";
    },2000);
    
    if (grow < 100) {
          setInterval(function(){
          document.querySelector("#growth").style.width = `${grow++}%`
        },20)
    }else{
        grow = 0 ; 
    }
})



var flag = 0;

    function show(){
    var clutter3 = "";
    arr.forEach(function(elemn, id1){
        clutter3 += ` <div id="followsection">
            
        <div id="leftsection"> 
         <img class="li2"  src="${elemn.img}" alt="">
    
          <h4>${elemn.name}</h4> 
    
      </div>
    
          <div id="relrhtsde"> <h3 id="${id1}">${elemn.cat}</h3></div>
      </div>`
       
    });



document.querySelector("#rightside").innerHTML = clutter3;
    }

    show();
    document.querySelector("#rightside").addEventListener("click" , function(dets){
        show();
        if(flag===0){
            arr[dets.target.id].cat = "following";
            show();
            flag=1 ; 
        }

        else{
            arr[dets.target.id].cat = "follow";
            show();
            flag=0 ;  
        }
    })
    

