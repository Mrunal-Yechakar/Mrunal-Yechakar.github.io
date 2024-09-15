fetch('../htmlcomponent/Iconabovefooter.html').then(response=>response.text())
.then(data=>{
    document.getElementById('icon_container').innerHTML=data;
   
}).catch((error)=>{
    console.log('Error in Icon above footer  ',error)
})