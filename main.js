// ==============================searchbar=========================================

let searchbox = document.getElementById('search-box');
let searchResults = document.getElementById('search-results');

searchbox.addEventListener('keydown', function (event) {
    const searchTerm = event.target.value.toLowerCase();

    if (event.keyCode === 13) {
        event.preventDefault();
        fetch('first.json')
            .then(response => response.json()) // parse the JSON response
            .then(data => {
                const matchescat = data.products.filter(item => item.cat.toLowerCase().startsWith(searchTerm.toLowerCase())); // filter the products based on the search term
                console.log("hi", matchescat);
                sessionStorage.setItem("multi-p_id", JSON.stringify(matchescat));
                window.location.href = "search.html";
            });



        // store the search results in session storage
    } else {
        searchResults.innerHTML = '';

        if (searchTerm.length >= 1) {
            fetch('first.json')
                .then(response => response.json())
                .then(data => {

                    const matches = data.products.filter(item => item.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
                    matches.forEach(item => {
                        const li = document.createElement('li');
                        li.innerHTML = `  
                <div onclick="search(event,${item.id});sessionStorage.setItem('p_id' ,${item.id});">${item.name}</div>`;
                        searchResults.appendChild(li);
                    });
                });
        }
    }
});

window.onload = function () {
    sessionStorage.clear()
    const searchResults = JSON.parse(sessionStorage.getItem('searchResults'));

}


function search(event, productId) {
    window.location.href = "search.html";

}

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

    <a href="description.html?id=${product.id}"> <img src=${product.img}  onclick="showimg(event,${product.id})" class="card-img-top" width="100%" height="300px"></a>
   
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
</div>`; if (ul) {
                ul.appendChild(li);
            }
        }
    });





let cartItems = [];
async function addToCart(event, productId, action) {

    event.preventDefault();
    const response = await fetch("first.json")
    const data = await response.json();
    const product = data.products.find(product => product.id === productId);




    if (action === 'cart') {
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
    else {
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
            if (ul) {
                ul.appendChild(li);
            }
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
          <div class=" card mb-4 mt-3 text-center" style="width:280px ">
       <img src=${product.img} class="card-img-top" width="100%" height="300px">
      
               
               <button type="button" class="btn btn-seceondary btn-block  bg-info"> PRODUCT</button>
                  
   </div>
     `; if (productList) {

                productList.appendChild(productElement);
            }
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
    console.log(name);

    let user_obj = {
        name: name,
        email: email,
        pass: pass
    }
    let obj = localStorage.getItem('user');
    let objstr = JSON.parse(obj);

    if (objstr) {

    }
    for (let i = 0; i < objstr.length; i++) {
        if (email === objstr[i].email) {
            alert("already found")
            return;
        }
    }

    console.log(user_obj)


    userarray.push(user_obj);

    localStorage.setItem("user", JSON.stringify(userarray));

}

function logsubmit(event) {
    event.preventDefault();
    let email = document.getElementById("orangeForm-email1").value;

    let pass = document.getElementById("orangeForm-pass1").value;

    let objstr = JSON.parse(localStorage.getItem('user'));
    let activeuser = false;
    for (let i = 0; i < objstr.length; i++) {
        if (email == objstr[i].email && pass == objstr[i].pass) {
            alert("success")
            activeuser = true;
            break;
        }
        else {
            alert("credentials not found")
            break;
        }
    }
    if (activeuser == true) {
        `
        <div class="fa-solid fa-pencil" data-bs-toggle="modal"  data-bs-target="#login-modal">
            style="color: red;
        </div>`;
    }

}



// =====================description content fetching ====================
let myTabContent =document.getElementById('myTabContent');

fetch('first.json')
    .then(response => response.json())
    .then(data => {


        let myContent =document.getElementById('main-content');
        let spec1 =document.getElementById('spec-type');
        let spec2 =document.getElementById('spec-type1');
        let spec3 =document.getElementById('spec-type2');
        let contact = document.getElementById('contact');
        let custum_tab =document.getElementById('custom1');
  console.log(contact)

        const descr= data.products[0];


        for (let i = 0; i < data.products.length; i++) {
        
           myContent.innerHTML=`${descr.description}  hey anjali watsupp`;
            spec1.innerHTML=`${ descr.specifications.type}`;
            spec2.innerHTML=`${ descr.specifications.other1} `;
            spec3.innerHTML=`${ descr.specifications.other2} `;
           contact.innerHTML=`${descr.description}  hey anjali watsupp`
        console.log(descr.custom_tabs)
           custum_tab.innerText=`${descr.custom_tabs.content}  hey anjali watsupp`
         
        }

    })









