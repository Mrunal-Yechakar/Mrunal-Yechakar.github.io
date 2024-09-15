fetch('../htmlcomponent/footer.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('footer_container').innerHTML=data;
}).catch(error=>console.error('error in Footer error',error))



// Drop down for footer
let flag = 1;
const svgLogo = document.getElementsByClassName('drop_down')[0];
const dropDownList = document.getElementsByClassName('drop_down_list')[0];

svgLogo.addEventListener('click', function () {
    if (flag === 1) {
        svgLogo.style.transform = `rotate(-90deg)`;  
        dropDownList.style.display = 'block';
        flag = 0;
    } else {
        svgLogo.style.transform = `rotate(90deg)`; 
        dropDownList.style.display = 'none'; 
        flag = 1;
    }       
});


// Drop down for footer
const svgLogo1 = document.getElementsByClassName('drop_down')[1];
const dropDownList1 = document.getElementsByClassName('drop_down_list')[1];

svgLogo1.addEventListener('click', function () {
    if (flag === 1) {
        svgLogo1.style.transform = `rotate(-90deg)`;  
        dropDownList1.style.display = 'block';
        flag = 0;
    } else {
        svgLogo1.style.transform = `rotate(90deg)`; 
        dropDownList1.style.display = 'none'; 
        flag = 1;
    }       
});



// Drop down for footer
const svgLogo2 = document.getElementsByClassName('drop_down')[2];
const dropDownList2 = document.getElementsByClassName('drop_down_list')[2];

svgLogo2.addEventListener('click', function () {
    if (flag === 1) {
        svgLogo2.style.transform = `rotate(-90deg)`;  
        dropDownList2.style.display = 'block';
        flag = 0;
    } else {
        svgLogo2.style.transform = `rotate(90deg)`; 
        dropDownList2.style.display = 'none'; 
        flag = 1;
    }       
});



