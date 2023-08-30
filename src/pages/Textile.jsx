import textiles from '../assets/img/Product/textile.jpg';
import client1 from '../assets/img/clients/client-1.png'
import client2 from '../assets/img/clients/client-2.png'
import client3 from '../assets/img/clients/client-3.png'
import client4 from '../assets/img/clients/client-4.png'
import client5 from '../assets/img/clients/client-5.png'
import client6 from '../assets/img/clients/client-6.png'
import client7 from '../assets/img/clients/client-7.png'
import client8 from '../assets/img/clients/client-8.png'

const Textile = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="container">
          <header className="section-header">
            <h2>Products</h2>
            <p className='mb-5'>Textile Products</p>
                        <span>Textiles have an assortment of uses, the most common of which are for clothing and for containers such as bags and baskets. In the household, textiles are used in carpeting, upholstered furnishings, window shades, towels, coverings for tables, beds, and other flat surfaces, and in art.</span>
          </header>
          <div className="row">
            <div className="col-lg-6">
              <img src={textiles} className="img-fluid" alt="" />
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <h3 className='a'>Cotton</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <h3 className='a'>Polyester</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <h3 className='a'>Silk</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <h3 className='a'>Wool</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <h3 className='a'>Jute</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <h3 className='a'>Linen</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <h3 className='a'>Nylon</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <h3 className='a'>Chiffon</h3>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
      <section id="clients" className="clients">
        <div className="container" data-aos="fade-up">
        <div class="section-header">
                        <h2>Our Client</h2>
      
                    </div>

          <div className="clients-slider swiper">
            <div className="swiper-wrapper align-items-center d-inline-flex m-2">
              <div className="swiper-slide"><img src={client1} className="img-fluid" alt="" /></div>
              <div className="swiper-slide"><img src={client2} className="img-fluid" alt="" /></div>
              <div className="swiper-slide"><img src={client3} className="img-fluid" alt="" /></div>
              <div className="swiper-slide"><img src={client4} className="img-fluid" alt="" /></div>
              <div className="swiper-slide"><img src={client5} className="img-fluid" alt="" /></div>
              <div className="swiper-slide"><img src={client6} className="img-fluid" alt="" /></div>
              <div className="swiper-slide"><img src={client7} className="img-fluid" alt="" /></div>
              <div className="swiper-slide"><img src={client8} className="img-fluid" alt="" /></div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Textile