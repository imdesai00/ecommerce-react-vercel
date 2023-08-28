import cos from '../assets/img/Product/cosmetic.jpg'
import per from '../assets/img/Product/perfume.jpg'
import red from '../assets/img/Product/readay.jpeg'
const Cosmetic = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <header className="section-header">
          <h2>Products</h2>
          <p>Cosmetic Products</p>
        </header>
        <div className="row">
          <div className="col-lg-6">
            <img src={cos} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
            <div className="row align-self-center gy-4">
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
                  <h3>Huda Beauty.</h3>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
                  <h3>Anastasia Beverly Hills.</h3>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="400">
                  <h3>Shirley Conlon Organics.</h3>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
                  <h3>The Estée Lauder Companies Inc.</h3>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
                  <h3>Shiseido Company.</h3>
              </div>
              <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
                  <h3>Herbal Essentials.</h3>
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
                    <p>Gucci || Clinique || Estée Lauder || Truefitt & Hill</p><br></br>
                    <p>L Occitane || Davidoff || BVLGARI || Giorgio Armani</p><br></br>
                    <p>Hugo Boss || verche || Shumukh || MONT BLANC  </p><br></br>
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
                    <h2>Corporis voluptates sit</h2>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div>
                    <h2>Ullamco laboris nisi</h2>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div>
                    <h2>Labore consequatur</h2>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div>
                    <h2>Beatae veritatis</h2>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div>
                    <h2>Molestiae dolor</h2>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div>
                    <h2>Explicabo consectetur</h2>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Cosmetic