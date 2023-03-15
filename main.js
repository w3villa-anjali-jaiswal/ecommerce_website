fetch("first.json")
  .then((response) => response.json())
  .then((data) => {
    const ul = document.getElementById("home_products");
       
    for(let i=0;i<data.products.length;i++){
        const product = data.products[i];
    var li = document.createElement("li");
    li.innerHTML = ` <div class="card position-relative m-4" style="width: 310px;">
    <div class="badge-overlay">
        <!-- Change Badge Position, Color, Text here-->
        <span class="top-left badge ">${product.badge}</span>
    </div>
    <span
        class="position-absolute top-10 start-100 translate-middle badge1  badge-danger">
        ${product.sale}
    </span>
    <img src=${product.img} class="card-img-top" width="100%" height="300px">
    <div class="card-body pt-0 px-0">
        <div class="d-flex flex-row justify-content-between p-3 mid">
            <a class="d-flex flex-column text-muted mb-1">
                ${product.brand}
            </a>
            <p class="d-flex flex-column text-muted mb-2">${product.model}
            </p>
        </div>
        <strong class="pl-3">${product.name}</strong>
        <p>${product.price} &nbsp; <s>${product.cutprice}</s></p>
        <div class=" add mx-3 mt-3 d-block">
            <input type="number" class="quantity__input" value="1">
            
            <button type="button" class="btn btn-danger btn-block mb-1"><small>ADD TO
                    CART</small></button>&nbsp; &nbsp; &nbsp;
            <i class="fa-regular fa-heart mb-2"></i> &nbsp; &nbsp;
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
        </div>
        <div class="d-flex flex-row justify-content-between p-3 mid">
            <p class="d-flex flex-column mb-1">
                <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>Buy Now
            </p>
            <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                    style="color: red;"></i>Question
            </p>
        </div>
    </div>
</div>`;
ul.appendChild(li);
    }
 });


 fetch("first.json")
  .then((response) => response.json())
  .then((data) => {
    const ul = document.getElementById("home_products_2");
       
    for(let i=0;i<data.products.length;i++){
        const product = data.products[i];
    var li = document.createElement("li");
    li.innerHTML = ` <div class="card position-relative m-4" style="width: 310px;">
    <div class="badge-overlay">
        <!-- Change Badge Position, Color, Text here-->
        <span class="top-left badge ">${product.badge}</span>
    </div>
   
    <img src=${product.img} class="card-img-top" width="100%" height="300px">
    <div class="card-body pt-0 px-0">
        <div class="d-flex flex-row justify-content-between p-3 mid">
            
            
            
        </div>
        <strong class="pl-3">${product.name}</strong>
        
        <div class=" add mx-3 mt-3 d-block">
            <input type="number" class="quantity__input" value="1">
            
            <button type="button" class="btn btn-danger btn-block mb-1"><small>ADD TO
                    CART</small></button>&nbsp; &nbsp; &nbsp;
            
        </div>
        <div class="d-flex flex-row justify-content-between p-3 mid">
            <p class="d-flex flex-column mb-1">
                <i class="fa-solid fa-dollar" style="color: lightgreen;"></i>Buy Now
            </p>
            <p class="d-flex flex-column mb-2"><i class="fa-solid fa-question"
                    style="color: red;"></i>Question
            </p>
        </div>
    </div>
</div>`;
ul.appendChild(li);
    }
 });
 
 fetch("first.json")
 .then(response => response.json())
 .then(data => {
   const productList = document.getElementById("product-list-3");
 
   for (let i = 0; i < data.products.length-2; i++) {
 
     const product = data.products[i];
 
     // Create a new HTML element for each product and add it to the product list
 
     const productElement = document.createElement("div");
     
     productElement.innerHTML = `
          <div class=" card mb-4 m-4 text-center" style="width:300px ">
       <img src=${product.img} class="card-img-top" width="100%" height="300px">
      
               
               <button type="button" class="btn btn-seceondary btn-block mb-1">ADD TO
                       CART</button>
                   
   </div>
     `;
     productList.appendChild(productElement);
   }
 })
 .catch(error => console.error(error));