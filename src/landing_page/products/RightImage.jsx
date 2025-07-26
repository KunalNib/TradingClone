import React from "react";

function Rightimage({
  image,
  blockHead,
  productName,
  productDescription,
  firstLink,
  SecondLink,
  Coin,
  kiteConnect,
}) {
  return (
    <div className="container-lg  order-2">
      <div className="row d-flex ">
        <div className="col-12 col-md-4 m-auto   order-2 order-sm-1  pe-5">
          <div className="mt-sm-5 mt-lg-0">&nbsp;</div>
          <h4 className="">&nbsp;</h4>
          <h3 className="mb-4">{blockHead}</h3>
          <p
            style={{ fontSize: "1.17rem", color: "#424242" }}
            className="text-muted "
          >
            {productDescription}
          </p>
          <div>
            <div className="row">
              {firstLink && (
                <a
                  href={firstLink.link}
                  className="extlink  col-12 col-md-6 "
                  style={{ fontSize: "1.1rem" }}
                >
                  {firstLink.val} <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              )}
              {SecondLink && (
                <a
                  href={SecondLink.link}
                  className="extlink  col-12 col-md-6 "
                  style={{ fontSize: "1.1rem" }}
                >
                  {SecondLink.val} <i class="fa-solid fa-arrow-right-long"></i>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="col-12 col-md-7  ps-0 order-1 order-sm-2">
          <img
            src={image}
            alt=""
            className="col-12 p-lg-5 mt-sm-5 mt-lg-0"
            style={{ width: "80%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Rightimage;
