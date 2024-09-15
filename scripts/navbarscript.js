fetch('../htmlcomponent/navbar.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('navbar_container').innerHTML=data;
}).catch(error=>console.error('error in navabar ',error))