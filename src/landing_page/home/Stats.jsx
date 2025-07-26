import React from "react";

function Stats() {
  return (
    <div className="container-lg mb-5">
      <div className="row m-auto">
        <div className="col-1"></div>
        <div className="col-lg-4  col-10 col-md-5 col-10 mt-5">
          <h3 className="text-dark mb-5 ">Trust with confidence</h3>
          <div className="mb-4">
            <h3 className="text-muted">Customer-first always</h3>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-muted">No spam or gimmicks</h3>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-muted">The Zerodha universe</h3>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-muted">Do better with money</h3>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        
        <div className=" p-xl-5 col-12 col-md-6 col-lg-6  mb-5 my-md-auto ">
            <img
            src="/media/ecosystem.png"
            style={{ width: "100%" }}
            className="col-12"
          ></img>
          
          <div className="row m-5">
            <a href="#"
              className="text-primary fs-5 col-4 "
              style={{ textDecoration: "none" }}
            >
              Explore our products <i class="fa-solid fa-arrow-right-long"></i>{" "}
            </a>
            <a href="#"
              className="text-primary fs-5 col-6 "
              style={{ textDecoration: "none" }}
            >
              Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
