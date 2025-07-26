import React from "react";

function Hero() {
  return (
    <div className="container-lg mb-5">
      <div className="mb-5">
        <div className="mx-auto text-muted">
          <h4 className="text-center">
            We pioneered the discount broking model in India.
          </h4>
          <h4 className="text-center">
            Now, we are breaking ground with our technology.
          </h4>
          <h4 className="mt-4"> &nbsp;</h4>
        </div>
      </div>
      <div className="container-lg">
        <div className=" row border-top  text-muted ms-2" style={{fontSize:"1.2rem"}}>
            <h4 className="mt-5"> &nbsp;</h4>
          <div className="col-12 col-md-6 ">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <a href="" style={{textDecoration:"none", color:'#387ed1'}}>Rainmatter</a>, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
