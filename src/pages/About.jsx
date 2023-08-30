import React from 'react'
import about from '../assets/img/about.jpg'
const About = () => {
  return (
    <>
      <section id="about" className="about">

        <div className="container" data-aos="fade-up">
          <div className="row gx-0">

            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="content">
                <h3>Who We Are....?</h3>
                <p>
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Welcome to <b>Nooral Retail Business</b>, your premier destination for high-quality products and exceptional shopping 
                experiences. As a leading player in the retail industry, we pride ourselves on offering a diverse range of top-notch 
                products that cater to your needs and preferences.At Nooral, we understand that shopping is not just about buying 
                products. it's about finding the perfect solutions that enhance your lifestyle. Our curated selection showcases a wide 
                array of products that have been carefully chosen to meet the highest standards of quality, style, and functionality. 
                Nooral Retail Business in general trading, headquartered in Dubai, world’s trading hub.
                </p>
                <div className="text-center text-lg-start">
                  <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
              <img src={about} className="img-fluid" alt="" />
            </div>

          </div>
        </div>

      </section>
      <section id="values" className="values">

        <div className="container" data-aos="fade-up">

          <header className="section-header">
            <h2>Our Values</h2>
          </header>

          <div className="row">

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="box">
                <img src="assets/img/values-1.png" className="img-fluid" alt=""/>
                  <h3>Our Mission</h3>
                  <p>At Nooral Retail Business, our mission is to empower builders and craftsmen by equipping them with the finest tools and equipment available. 
                    We aim to be more than just a store-we strive to be a partner in your projects, offering expert advice, top-notch products, and a seamless shopping experience that caters to your unique requirements.</p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
              <div className="box">
                <img src="assets/img/values-2.png" className="img-fluid" alt=""/>
                  <h3>Quality Assurance & Customer-Centric Approach</h3>
                  <p>We understand the importance of reliable equipment in the construction industry. That's why we partner with reputable brands known for their durability and performance.<br></br><br></br>Your satisfaction is our top priority. We're dedicated to providing exceptional customer service, addressing your inquiries, and ensuring a smooth shopping experience from start to finish.</p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
              <div className="box">
                <img src="assets/img/values-3.png" className="img-fluid" alt="" />
                <h3>Product Range</h3>
                <p>Our extensive catalog boasts a wide range of building equipment and tools, carefully curated to encompass the latest advancements in technology and design. 
            From power tools that enhance productivity to safety equipment that prioritizes well-being on the job site, we have it all. 
            Whether you're looking for heavy machinery or precision hand tools, we've got you covered.</p>
              </div>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default About