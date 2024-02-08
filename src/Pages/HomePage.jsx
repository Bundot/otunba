import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style.scss';
import '../css/tiny-slider.css'
import '../css/style.css'
import '..'
// import '../images/favicon.png'
import {favicon, couch, carticon, usericon, caps, truck, bag, support, returnicon, otunba, otunbaa} from '../images/images'


function HomePage() {
  return (
    <div>
     
      <body>
        <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" >
          <div className="container">
            <a className="navbar-brand" href="index.html">Otunba<span>.</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsFurni">
              <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li><a className="nav-link" href="shop.html">Shop</a></li>
                <li><a className="nav-link" href="about.html">About us</a></li>
                <li><a className="nav-link" href="services.html">Services</a></li>
                <li><a className="nav-link" href="blog.html">Blog</a></li>
                <li><a className="nav-link" href="contact.html">Contact us</a></li>
              </ul>
              <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                <li><a className="nav-link" href="#"><img src={usericon} alt="User" /></a></li>
                <li><a className="nav-link" href="cart.html"><img src={carticon} alt="Cart" /></a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Cap Couture: <span clsas="d-block">Elevate Your Style</span></h1>
                  <p className="mb-4">Discover a world of exclusive caps curated for your unique style.</p>
                  <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  <img src={caps} className="img-fluid" alt="Couch" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                <p><a href="shop.html" className="btn">Explore</a></p>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="cart.html">
                  <img src="images/product-1.png" className="img-fluid product-thumbnail" alt="Product 1" />
                  <h3 className="product-title">Nordic Chair</h3>
                  <strong className="product-price">$50.00</strong>
                </a>
              </div>
              <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="cart.html">
                  <img src="images/product-2.png" className="img-fluid product-thumbnail" alt="Product 2" />
                  <h3 className="product-title">Minimalist Wood Chair</h3>
                  <strong className="product-price">$70.00</strong>
                </a>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <a className="product-item" href="cart.html">
                  <img src="images/product-3.png" className="img-fluid product-thumbnail" alt="Product 3" />
                  <h3 className="product-title">Brown Chair</h3>
                  <strong className="product-price">$60.00</strong>
                </a>
              </div>
            </div>
          </div>
        </div>


		<div class="why-choose-section">
			<div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-6">
						<h2 class="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div class="row my-5">
							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={truck} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={bag} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={support} alt="Image" class="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={returnicon} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div class="col-lg-5">
						<div class="img-wrap">
							<img src={otunbaa} alt="Image" class="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>
	



        <footer className="footer-section">
          <div className="container relative">
            <div className="footer-top">
              <div className="row">
                <div className="col-md-12 col-lg-4 mb-5 mb-lg-0">
                  <a className="navbar-brand" href="index.html">iCodes<span>.</span></a>
                  <p className="mt-3">Template Personalised By iCodes, contact us at isaacdauda12@gmail.com</p>
                </div>
                {/* More footer content... */}
              </div>
            </div>
          </div>
        </footer>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/tiny-slider.js"></script>
        <script src="js/custom.js"></script>
      </body>
    </div>
  );
}

export default HomePage;
