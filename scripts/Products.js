fetch('../Data/products_api.json').
then(response=>response.json())
.then((data)=>{
    useProducts(data);
    console.log(data);
}).catch((error)=>{
    console.log("Error in fetching the Product data",error);
})



function useProducts(productdata){
    console.log(productdata);

    const productcontainer=document.getElementById('products_container');

    productcontainer.innerHTML='';
 
    productdata.Products.map(categories=>{
      console.log(categories.category);
      const products_div=document.createElement('div');
      products_div.classList.add('products_div');

      const category_product_div=document.createElement('div');
      category_product_div.classList.add('category_product_div');
      products_div.appendChild(category_product_div);
      
      const category_nb=document.createElement('div');
      category_nb.classList.add('category_nb');
      category_product_div.appendChild(category_nb)
      
      
            const categoryname_div=document.createElement('div')
            categoryname_div.classList.add('categoryname_div');
            category_nb.appendChild(categoryname_div)


      const categoryname=document.createElement('p')
      categoryname.textContent =categories.category;
      categoryname_div.appendChild(categoryname)

      const viewall_btn=document.createElement('div')
      viewall_btn.classList.add('viewall_btn');
      category_nb.appendChild(viewall_btn);

      const viewall=document.createElement('button');
       viewall.innerHTML="View All";
       viewall_btn.appendChild(viewall);


       const productcards=document.createElement('div');
        productcards.classList.add('productcards');

        productcards.innerHTML='';

    //    categories.categorydata.map(categories_products=>{
    //     // console.log(categories_products);
        


    //     const productcard=document.createElement('div');
    //     productcard.classList.add('productcard');

    //     const offerpercentage_div=document.createElement('div');
    //      offerpercentage_div.classList.add('offerpercentage_div');
    //      productcard.appendChild(offerpercentage_div);

    categories.categorydata.forEach(category_products => {
        const productcard = document.createElement('div');
        productcard.classList.add('productcard');
    
        // Product image container
        const img_container = document.createElement('div');
        img_container.classList.add('img_container');
        
        // Product image
        const img = document.createElement('img');
        img.classList.add('img_tag');
        img.src = category_products.imagelink;
        img.alt = category_products.name;
        img_container.appendChild(img);

        // console.log(category_products.hoverimagelink);
    
        // Adding hover functionality
        img.addEventListener('mouseover', () => {
            img.src = category_products.hoverimagelink;
            // console.log(category_products.hoverimagelink);
        });
    
        img.addEventListener('mouseout', () => {
            img.src = category_products.imagelink;
        });
    
        // Offer percentage
        if (category_products.offerpercentage !== "NULL") {
            const offerpercentage_div = document.createElement('div');
            offerpercentage_div.classList.add('offerpercentage_div');
            offerpercentage_div.textContent = category_products.offerpercentage;
            img_container.appendChild(offerpercentage_div);
        }
    
        productcard.appendChild(img_container);
    
        // Price and Offer Price
        const price_div = document.createElement('div');
        price_div.classList.add('price_div');
        const price = document.createElement('p');
        const deltag=document.createElement('del');
        deltag.textContent = `₹${category_products.price}`;
        price.appendChild(deltag);
        price_div.appendChild(price);
        const offerprice = document.createElement('p');
        offerprice.textContent = `₹${category_products.offerprice}`;
        price_div.appendChild(offerprice);
        productcard.appendChild(price_div);
    
        // Product Name and Add to Cart Button
        const product_info = document.createElement('div');
        product_info.classList.add('product_info');
        const name = document.createElement('p');
        name.textContent = category_products.name;
        product_info.appendChild(name);
        const add_to_cart_btn = document.createElement('button');
        add_to_cart_btn.textContent = "Add to Cart";
        product_info.appendChild(add_to_cart_btn);
    
        productcard.appendChild(product_info);
    
        productcards.appendChild(productcard);
    });

    category_product_div.appendChild(productcards);
    productcontainer.appendChild(products_div);

       })
    }


    //    productcontainer.appendChild(products_div);

       
     



