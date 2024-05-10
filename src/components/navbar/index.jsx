function NavBar({currentPage,handlePageChange}){
    return <>
      <div class="container-xxl position-relative p-0" id="home">
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0">FitApp</h1>
                
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto py-0">
                        <a  onClick={()=>handlePageChange("Home")} class="nav-item nav-link active">Home</a>
                        <a onClick={()=>handlePageChange("About")} class="nav-item nav-link">About</a>
                        <a onClick={()=>handlePageChange("Portfolio")} class="nav-item nav-link">Portfolio</a>
              
                        <a onClick={()=>handlePageChange("Contact")} class="nav-item nav-link">Contact</a>
                    </div>
 
                </div>
            </nav>

            <div class="container-xxl bg-primary hero-header">
                <div class="container px-lg-5">
                    <div class="row g-5">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="text-white mb-4 animated slideInDown">The Revolutionary App That Helps To Control Your Own Fitness</h1>
                            <p class="text-white pb-3 animated slideInDown">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                            <a href="" class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a>
                            <a href="" class="btn btn-secondary-gradient py-sm-3 px-4 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                        </div>
                        <div class="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp" data-wow-delay="0.3s">
                            <div class="owl-carousel screenshot-carousel">
                                <img class="img-fluid" src="img/screenshot-1.png" alt=""/>
                                <img class="img-fluid" src="img/screenshot-2.png" alt=""/>
                                <img class="img-fluid" src="img/screenshot-3.png" alt=""/>
                                <img class="img-fluid" src="img/screenshot-4.png" alt=""/>
                                <img class="img-fluid" src="img/screenshot-5.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default NavBar