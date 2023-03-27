
// ==============================searchbar=========================================

const searchbox = document.getElementById('search-box');
const searchResults = document.getElementById('search-results');

searchbox.addEventListener('input', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    searchResults.innerHTML = '';

    if (searchTerm.length >= 1) {
        fetch('first.json')
            .then(response => response.json())
            .then(data => {
                console.log("hello")
                const matches = data.products.filter(item => item.name.toLowerCase().includes(searchTerm));
                matches.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href= "#${item.id}" />${item.name}</a>`;
                    searchResults.appendChild(li);
                });
            });
    }
});


// ================add to cart=======================
fetch('first.json')
    .then((response) => response.json())
    .then((data) => {
        const ul = document.getElementById("home_products");



        

        for (let i = 0; i < data.products.length; i++) {
            const product = data.products[i];
            var li = document.createElement("li");
            li.innerHTML = ` <div class="card position-relative m-3 " style="width:280px;">
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
            
            <button type="button" onclick="addToCart(event,${product.id},'cart')" class="btn btn-danger btn-block mb-1"><small>ADD TO
                    CART</small></button>&nbsp; &nbsp; &nbsp;
            <i class="fa-regular fa-heart mb-2 " onclick=" addToCart(event,${product.id},'wishlist')"></i> &nbsp; &nbsp;
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

   




    let cartItems = [];
    async  function addToCart(event, productId,action)
    {

        event.preventDefault();
        const response = await fetch("first.json")
        const data = await response.json();
        const product = data.products.find(product => product.id === productId);
        
    


      if(action === 'cart')
      {
        console.log("cart")
        const existingItem = cartItems.find(item => item.id === productId);
          if (existingItem) {
        existingItem.quantity++;

    } else {

        cartItems.push({ id: productId, quantity: 1, product });
    }

    let cart = document.getElementById("cart-element");

    cart.innerHTML = cartItems.map(item => `
      <br>
      <div class="cart-box">
                    <div>
                        <img src="${item.product.img}" width="100px" height="100px" alt=""> 
                    </div>
               
                    <div class="cart-style"> 
                        <h5> ${item.product.name}</h5>
                    </div>
                    <div class="cart-style">
                    <p>${item.product.price} x <b>${item.quantity}</b></p>
                    </div>
                    <div class="cart-style">
                        <button type="button" class="btn btn-primary"><i class="fa fa-trash"  ></i></button>
                    </div>
                    <hr>
                </div>
   
     
      `);
      }
      else{
        console.log("wish");
     let cart = document.getElementById("wish-element");

    cart.innerHTML += `
      <br>
      <div class="cart-box">
                    <div>
                        <img src="${product.img}" width="100px" height="100px" alt=""> 
                    </div>
               
                    <div class="cart-style"> 
                        <h5> ${product.name}</h5>
                    </div>
                    <div class="cart-style">
                        <button type="button" class="btn btn-primary"><i class="fa fa-trash"  ></i></button>
                    </div>
                    <hr>
                </div>
 
     
      `;
      }
    }

fetch("first.json")
    .then((response) => response.json())
    .then((data) => {
        const ul = document.getElementById("home_products_2");

        for (let i = 0; i < data.products.length; i++) {
            const product = data.products[i];
            var li = document.createElement("li");
            li.id = product.id;
            li.innerHTML = ` <div class="card position-relative m-3" style="width: 280px;">
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

        for (let i = 0; i < data.products.length; i++) {

            const product = data.products[i];

            // Create a new HTML element for each product and add it to the product list

            const productElement = document.createElement("div");

            productElement.innerHTML = `
          <div class=" card mb-4 m-3 text-center" style="width:280px ">
       <img src=${product.img} class="card-img-top" width="100%" height="300px">
      
               
               <button type="button" class="btn btn-seceondary btn-block  bg-info"> PRODUCT</button>
                  
   </div>
     `;
            productList.appendChild(productElement);
        }
    })
    .catch(error => console.error(error));


//++++++++++++++++++++++login-logout++++++++++++++++++

let userarray = [];


function regsubmit(event) {
    event.preventDefault();
    console.log("hiii")
    let name = document.getElementById("orangeForm-name").value;
    let email = document.getElementById("orangeForm-email").value;
    let pass = document.getElementById("orangeForm-pass").value;
    console.log(name.value)

    let user_obj = {

        name: name,
        email: email,
        pass: pass

    }

    let objstr = JSON.parse(localStorage.getItem('user'));
    if (objstr) { }
    for (let i = 0; i < objstr.length; i++) {
        if (email === objstr[i].email) {
            alert("already found")
            return;
        }

    }

    userarray.push(user_obj);

    localStorage.setItem("user", JSON.stringify(userarray));



}

function logsubmit(event) {
    event.preventDefault();
    let name = document.getElementById("orangeForm-name1").value;
    let email = document.getElementById("orangeForm-email1").value;
    let pass = document.getElementById("orangeForm-pass1").value;

    let objstr = JSON.parse(localStorage.getItem('user'));
     let activeuser= false;
    for (let i = 0; i < objstr.length; i++) {
        if (name == objstr[i].name && email == objstr[i].email && pass == objstr[i].pass) {
            alert("success")
           activeuser= true;
            break;
        }
        else {
            alert("credentials not found")
            break;
        }
    }
    if(activeuser==true){
        `
        <div class="fa-solid fa-pencil" data-bs-toggle="modal"  data-bs-target="#login-modal">
            style="color: red;
        </div>`;
    }

}


