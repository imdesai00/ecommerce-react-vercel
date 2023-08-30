import cos from '../assets/img/Product/cosmetic.jpg'
import per from '../assets/img/Product/perfume.jpg'
import red from '../assets/img/Product/readay.jpeg'
import client1 from '../assets/img/clients/client-1.png'
import client2 from '../assets/img/clients/client-2.png'
import client3 from '../assets/img/clients/client-3.png'
import client4 from '../assets/img/clients/client-4.png'
import client5 from '../assets/img/clients/client-5.png'
import client6 from '../assets/img/clients/client-6.png'
import client7 from '../assets/img/clients/client-7.png'
import client8 from '../assets/img/clients/client-8.png'

const Cosmetic = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="container">
        <div class="section-header">
                        <h2 className='a'>Products</h2>
                        <p className='mb-5'>Cosmetic Products</p>
                        <span>Cosmetics are constituted mixtures of chemical compounds derived from either natural sources, or synthetically created ones. Cosmetics have various purposes. Those designed for personal care and skin care can be used to cleanse or protect the body or skin.<br></br><br></br>A perfume is a liquid mixture used to emit a pleasant odour. It is formed from fragrant essential oils derived from plants and spices or synthetic aromatic compounds. Cosmetic fragrances applied to a person's body to emit a pleasant smell include perfume, cologne, and aftershave</span>
                    </div>
          <div className="row">
            <div className="col-lg-6">
              <img src={cos} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <h3 className='a'>Huda Beauty.</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <h3 className='a'>Anastasia Beverly Hills.</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <h3 className='a'>Shirley Conlon Organics.</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <h3 className='a'>The Estée Lauder Companies Inc.</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <h3 className='a'>Shiseido Company.</h3>
                </div>
                <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <h3 className='a'>Herbal Essentials.</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row feature-icons" data-aos="fade-up">
            <h3>Perfumes Products</h3>
            <div className="row feture-tabs">
              <div className="col-lg-6">
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <p className='a'>Gucci || Clinique || Estée Lauder || Truefitt & Hill</p><br></br>
                    <p className='a'>L Occitane || Davidoff || BVLGARI || Giorgio Armani</p><br></br>
                    <p className='a'>Hugo Boss || verche || Shumukh || MONT BLANC  </p><br></br>
                  </div>
                </div>

                <div className="col-lg-6 float-right">
                  <img src={per} className="abd" alt="" />
                </div>

              </div>
            </div>
          </div>
          <div className="row feature-icons" data-aos="fade-up">
            <h3>Readymate Products</h3>

            <div className="row feture-tabs">

              <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
                <img src={red} className="img-fluid p-4" alt="" />
              </div>

              <div className="col-xl-8 d-flex content">
                <div className="row align-self-center gy-4">

                  <div className="col-md-6" data-aos="fade-up">
                    <div>
                      <h2 className='a'>Corporis voluptates sit</h2>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div>
                      <h2 className='a'>Ullamco laboris nisi</h2>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div>
                      <h2 className='a'>Labore consequatur</h2>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div>
                      <h2 className='a'>Beatae veritatis</h2>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div>
                      <h2 className='a'>Molestiae dolor</h2>
                    </div>
                  </div>

                  <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div>
                      <h2 className='a'>Explicabo consectetur</h2>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
      <section id="clients" className="clients">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2 className='a'>Our Clients</h2>
          </header>

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

export default Cosmetic