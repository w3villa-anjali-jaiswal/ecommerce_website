let show =document.getElementById('show');

show.innerHTML=`<!--********************* NAVBAR SECTION ************************-->

<!--NAVBAR 1-->
<nav class="navbar navbar-expand-lg bg-white plr nb1" id="nav1">
    <div class="container-fluid comm-padding">

        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <a class="nav-link " href="#"><i class="fa-solid fa-house"></i>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-solid fa-award"></i>About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa-regular fa-envelope"></i>Contact</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa-sharp fa-regular fa-circle-question "></i>FAQ
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item dropdown ">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            🏴 English
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">🇯🇵 Japanese</a></li>
                            <li><a class="dropdown-item" href="#">🇮🇳 Hindi</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            $ Dollar
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">₹ Rupees</a></li>
                            <li><a class="dropdown-item" href="#">€ Pound</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fa-solid fa-user"></i><i class="fa-solid fa-bars"></i>More Menus
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">⚙ Settings</a></li>
                            <li><a class="dropdown-item" href="#">More</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-truck"></i>Delivery
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</nav>

<!-- NAVBAR-MOBILE-VIEW -->
<div class=" navbar-expand-lg  plr bg-primary hide">

    <div class=" d-flex justify-content-between topA py-2">
        <div class="left d-flex">
            <div class="d-flex ">
                <div class="nav-item">
                    <a class="nav-link" href="#">
                    
                        <i class="fa-solid fa-user user1"></i>
                        Login
                    </a>
                </div>
                <div class="nav-item">

                    <a class="nav-link " href="#">
                        <i class="fa-solid fa-pen"></i>
                        Register
                    </a>
                </div>
            </div>
        </div>
        <div class="right d-flex ">
            <div class="d-flex">
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        $ Dollar
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">₹ Rupees</a></li>
                        <li><a class="dropdown-item" href="#">€ Pound</a></li>
                    </ul>
                </div>
                <div class="nav-item dropdown ">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        🏴 English
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">🇯🇵 Japanese</a></li>
                        <li><a class="dropdown-item" href="#">🇮🇳 Hindi</a></li>
                    </ul>
                </div>

            </div>
        </div>

    </div>
</div>

<!-- NAVBAR-MOBILE-VIEW -->

<!-- NAVBAR 2 -->
<nav class="navbar navbar-expand-lg bg-body-tertiary ">
    <div class="container-fluid d-flex justify-content-between comm-padding">
        <div>
            <a class="navbar-brand" href="index.html" id="journal">Journal</a>

        </div>
        <div>
            <div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="searchbar"
                    aria-controls="searchbar" aria-expanded="false" aria-label="Toggle navigation" order="2">
                    <span><i class="fas fa-search"></i></span>
                </button>
            </div>
            <div>
                <div class="collapse navbar-collapse" id="searchbar" id="search_here">
                    <div>
                        <form class="d-flex" role="search">
                            <button class="btn btn-primary dropdown-toggle "style= "background-color:#0d52d6; border-radius:1px;"; type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                All
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>

                            <input class="form-control " style= "border-radius:1px; width:320px !important;"  id="search-box" type="search" placeholder="Search here...">
                        </form>

                    </div>

                    <button class="btn btn-primary" style= "background-color:#0d52d6; border-radius:1px; border: 2px solid #0d52d6 ;"   type="search"><i class="fas fa-search"></i></button>

                </div>
                <div id="searchdisplay">
                    <ul id="search-results"></ul>
                </div>
                </form>

            </div>

        </div>
        <div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 " id="icons">
                <li class="nav-item">
                <a class="nav-link" href="#">
                    <div class="fa-solid fa-user" data-bs-toggle="modal" data-bs-target="#id01">
                    </div>
                    <h6>Login</h6>
                </a>
            </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <div class="fa-solid fa-pencil" data-bs-toggle="modal" data-bs-target="#login-modal">
                            </div>
                            <h6>Register</h6>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="far fa-heart" onclick="document.getElementById('id02').style.display='block'"
                                class="w3-button"></i>
                            <h6>Wishlist</h6>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="fas fa-repeat"></i>
                            <h6>Compare</h6>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div>

            <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#cartmodal "
                aria-controls="#cart" aria-expanded="false" aria-label="Toggle navigation" order="1">
                <span> <i class="fa-solid fa-cart-shopping  topcart" ></i></span>
            </button>
            <div class="collapse navbar-collapse">
                <div class="d-flex justify-content-around">
                    <h6 class="nav-item m-4 " id="price">0 item(s)-$0.00 </h6>
                    <button class="btn  " id="go-to-cart" data-bs-toggle="modal" data-bs-target="#cartmodal">
                        <i class="fa-solid fa-cart-shopping"></i></button>

                </div>
            </div>

        </div>
    </div>
</nav>
<!-- NAVBAR 2 -->

<div class="container-fluid department top-nav ">
    <div class="row comm-paddin">
        <div class="sale">sale</div>
        <div class="col-md-2 dep text-center">

            <i class="fa-solid fa-bars"></i> all department
        </div>
        <div class="new">new</div>
        <div class="col-md-4 nav  multi">
            <li>MULTILEVEL </li>
            <li>MEGALEVEL </li>
            <li>FULLLEVEL </li>
        </div>
        <div class="col-md-2 multi">
            <i class="fa fa-phone-volume"></i>
            8.8898080980
        </div>
        <div class="col-md-1 blog text-center">
            BLOG
        </div>
    </div>
</div>








<!-- register modal -->
<div class="modal" id="login-modal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body mx-3">
                <div class="md-form mb-5">
                    <i class="fas fa-user prefix grey-text"></i>
                    <input type="text" id="orangeForm-name" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="orangeForm-name">Your name</label>
                </div>
                <div class="md-form mb-5">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <input type="email" id="orangeForm-email" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label>
                </div>

                <div class="md-form mb-4">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <input type="password" id="orangeForm-pass" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
                </div>

            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-deep-orange" onclick="regsubmit(event)" id="reg-btn">REGISTER</button>
            </div>
        </div>
    </div>
</div>

<div class="text-center">
    <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm"></a>
</div>



<!-- login--modal -->

<div class="modal" id="id01" tabindex="-1" >
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">login</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body mx-3">
               
                <div class="md-form mb-5">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <input type="email" id="orangeForm-email1" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="orangeForm-email1">Your email</label>
                </div>

                <div class="md-form mb-4">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <input type="password" id="orangeForm-pass1" class="form-control validate">
                    <label data-error="wrong" data-success="right" for="orangeForm-pass1">Your password</label>
                </div>

            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button class="btn btn-deep-orange" onclick="logsubmit(event)" id="reg-btn">login</button>
            </div>
        </div>
    </div>
</div>

<div class="text-center" >
    <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm"></a>
</div>



<div class="w3-container">

<button onclick="document.getElementById('id02').style.display='block'" class="w3-button"></button>

<div id="id02" class="w3-modal">
    <div class="w3-modal-content">
        <header class="w3-container w3-teal">
            <span onclick="document.getElementById('id02').style.display='none'"
                class="w3-button w3-display-topright">&times;</span>
            <h2>wishlist</h2>

        </header>
        <div class="w3-container">

            <div id="wish-element"></div>
        </div>

    </div>

</div>
</div>



<div class="modal" id="cartmodal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div id="cart-element"></div>
            </div>
            <hr>
        </div>
    </div>
    </div>

`;