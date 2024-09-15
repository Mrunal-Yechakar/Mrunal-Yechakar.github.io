
fetch('../Data/data_api.json')
.then(response=>response.json())
.then((data)=>{
    console.log(data);
    useData(data)
}).catch((error)=>{
    console.log('Error occcurs in Categories' ,error);
})


function useData(Globaldata){

    
    const categories=Globaldata.categories;
    console.log(categories)
    const categories_content=document.getElementById('categories_div');
    categories_content.innerHTML = '';
    
    categories.map(item=>{
       console.log(item.imglink);
        const itemdiv=document.createElement('div');
        itemdiv.classList.add('item');


        const img=document.createElement('img');
        img.src=item.imglink;
        img.alt=item.label;
        img.classList.add('circle_img');

        const labeldiv=document.createElement('div');
    
        labeldiv.classList.add('label_container')


        const label=document.createElement('label');
        label.textContent=item.label;


        itemdiv.appendChild(img);
        itemdiv.appendChild(labeldiv);
        labeldiv.appendChild(label);
        categories_content.appendChild(itemdiv);
    })
}


const rightscrollbehaviour=document.getElementById('scroll_right');
const leftscrollbehaviour=document.getElementById('scroll_left');
const categoriescontent=document.getElementById('categories_div');


rightscrollbehaviour.addEventListener('click',()=>{
    categoriescontent.scrollBy({
        left:200,
        behavior:"smooth"
    })
})
leftscrollbehaviour.addEventListener('click',()=>{
    categoriescontent.scrollBy({
        left:-200,
        behavior:"smooth"
    })
})




