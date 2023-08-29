import React from 'react'
import main from '../assets/img/baner/main.jpeg'
import baner from '../assets/img/baner/baner.svg'

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
                    <span>Get Started</span>
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
      {/* <section id="testimonials" className="testimonials">

        <div className="container" data-aos="fade-up">

          <header className="section-header">
            <h2>Testimonials</h2>
            <p>What they are saying about us</p>
          </header>

          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </div>

            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>

      </section> */}
      {/* <section id="testimonials" className="testimonials">

        <div className="container" data-aos="fade-up">

          <header className="section-header">
            <h2>Testimonials</h2>
            <p>What they are saying about us</p>
          </header>

          <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="testimonial-item">
                  <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                  </div>
                  <p>
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  </p>
                  <div className="profile mt-auto">
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>
              </div>

            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>

      </section> */}
            <div className="container">
        <div className="row">
          <div className="col-md-8 col-center m-auto">
            {/* <h2>Testimonials</h2> */}
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="item carousel-item active">
                  <div className="img-box"><img src="https://i.ibb.co/d5DY64w/img1.jpg" alt="" /></div>
                  <p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                  <p className="overview"><b>Jennifer Smith</b>, Office Worker</p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box"><img src="https://i.ibb.co/5FF1vqz/img2.jpg" alt="" /></div>
                  <p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
                  <p className="overview"><b>Dauglas McNun</b>, Financial Advisor</p>
                </div>
                <div className="item carousel-item">
                  <div className="img-box"><img src="https://i.ibb.co/Trv7hDv/img3.jpg" alt="" /></div>
                  <p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
                  <p className="overview"><b>Hellen Wright</b>, Athelete</p>
                </div>
              </div>
              <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                <i className="fa fa-angle-left"></i>
              </a>
              <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home


