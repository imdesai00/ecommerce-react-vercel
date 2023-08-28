import textiles from '../assets/img/Product/textile.jpg';
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
              <img src={textiles} className="img-fluid" alt=""/>
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
    </>
  )
}

export default Textile