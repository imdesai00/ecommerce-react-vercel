import foods from '../assets/img/Product/food.jpeg'
const Food = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="container">
          <header className="section-header">
            <h2>Products</h2>
            <p>Food Products</p>
          </header>
          <div className="row feture-tabs">
            <div className="col-lg-6">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1">
                  <p>Rise & Floor || Sugar || Pasta || Beans || Nutes</p><br></br>
                  <p>Biscuite || Tea || Canned Product || Milk Products</p><br></br>
                  <p>Juices || Baby Products || Backing Products </p><br></br>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={foods} className="abc" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Food