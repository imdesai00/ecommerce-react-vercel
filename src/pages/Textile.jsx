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
            <p>Textile Products</p>
          </header>
          <div className="row">
            <div className="col-lg-6">
              <img src={textiles} className="img-fluid" alt="" />
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <h3>Cotton</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <h3>Polyester</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <h3>Silk</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <h3>Wool</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <h3>Jute</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <h3>Linen</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <h3>Nylon</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <h3>Chiffon</h3>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
      <section id="clients" className="clients">
        <div className="container" data-aos="fade-up">
        <div class="section-header">
                        <h2>Products</h2>
                        <p className='mb-5'>Textile Products</p>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque vitae voluptates dolore nulla porro tempore soluta odio ipsa ea reprehenderit harum, similique accusamus, excepturi totam iusto velit quas nam incidunt? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi expedita atque facilis ab magni quam? Tempore qui animi maiores numquam pariatur repudiandae, sapiente, consequuntur impedit aspernatur sit dignissimos, assumenda incidunt.</span>
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