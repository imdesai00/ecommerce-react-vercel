import main from '../assets/img/baner/main.jpeg'
import baner from '../assets/img/baner/baner.svg'
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import test1 from '../assets/img/testimonials/testimonials-1.jpg'
import test2 from '../assets/img/testimonials/testimonials-2.jpg'
import test3 from '../assets/img/testimonials/testimonials-3.jpg'

const Home = () => {

  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">We Give You a Best Quality Of Produts in Electronics, Food & Bulding Matirials</h1>
              {/* <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2> */}
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span className='p-2'>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={baner} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </section>
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-out">

          <div className="row g-5">

            <div className="col-lg-8 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3>Home Appliances, <em>Smart Home</em> Make Your self Confertable</h3>
              <p> We Have various Range Of Electronics Products That are Mostly Home Appliances. we brought advance techonology products that are usefull to do house works faster.</p>
              <a className="cta-btn align-self-start" href="#">Call To Action</a>
            </div>

            <div className="col-lg-4 col-md-6 order-first order-md-last d-flex align-items-center">
              <div className="img">
                <img src={main} alt="" className="img-fluid" />
              </div>
            </div>

          </div>

        </div>
      </section>
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">

          <div className="row gy-4">

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">43</span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">105</span>
                  <p>Projects</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">24</span>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <div>
                  <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">78</span>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-center m-auto">
          <header className="section-header">
            <h2>Testimonials</h2>
          </header>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <Carousel
                        showArrows={true}
                        showIndicators={false}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={6100}
                  >
                  <div className="item carousel-item active">
                    <div className="img-box"><img src={test1} alt="" /></div>
                    <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                    <p className="overview"><b>Jennifer Smith</b>, Office Worker</p>
                  </div>
                  <div className="item carousel-item active">
                    <div className="img-box"><img src={test2} alt="" /></div>
                    <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                    <p className="overview"><b>Dauglas McNun</b>, Financial Advisor</p>
                  </div>
                  <div className="item carousel-item active">
                    <div className="img-box"><img src={test3} alt="" /></div>
                    <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                    <p className="overview"><b>Hellen Wright</b>, Athelete</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home 


