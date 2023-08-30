import foods from '../assets/img/Product/food.jpeg'
import client1 from '../assets/img/clients/client-1.png'
import client2 from '../assets/img/clients/client-2.png'
import client3 from '../assets/img/clients/client-3.png'
import client4 from '../assets/img/clients/client-4.png'
import client5 from '../assets/img/clients/client-5.png'
import client6 from '../assets/img/clients/client-6.png'
import client7 from '../assets/img/clients/client-7.png'
import client8 from '../assets/img/clients/client-8.png'

const Food = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="container">
        <div class="section-header">
            <h2>Products</h2>
            <p className='mb-5'>Food Products</p>
            <span>A food product is a food that has been prepared and packaged for sale on a market. This includes basic commodities such as vegetables, packaged foods, niche foods and artisanal foods. Food packaging is a packaging system specifically designed for food and represents one of the most important aspects among the processes involved in the food industry, as it provides protection from chemical, biological and physical alterations. The main goal of food packaging is to provide a practical means of protecting and delivering food goods at a reasonable cost while meeting the needs and expectations of both consumers and industries.</span>
        </div>
          <div className="row feture-tabs">
            <div className="col-lg-6">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1">
                  <p className='a'>Rise & Floor || Sugar || Pasta || Beans || Nutes</p><br></br>
                  <p className='a'>Biscuite || Tea || Canned Product || Milk Products</p><br></br>
                  <p className='a'>Juices || Baby Products || Backing Products </p><br></br>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={foods} className="abc" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="clients" className="clients">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Clients</h2>
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

export default Food