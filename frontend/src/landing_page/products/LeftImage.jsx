import React from "react";

function Leftimage({
  image,
  blockHead,
  productName,
  productDescription,
  firstLink,
  SecondLink,
  Coin,
  kiteConnect,
  appStore,
  playStore,
  borTop
}) {
  return (
    <div className="container-lg  ">
      <div className="row ">
        <div className="col-12 col-md-7 mt-5 ">
          <img
            src={image}
            alt=""
            className="col-12 p-lg-5 pe-lg-0  mt-sm-5 mt-lg-0"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-12 col-md-4 m-auto ms-0  pe-5">
            <div className="mt-sm-5 mt-lg-0">&nbsp;</div>
          <h4 className="">&nbsp;</h4>
          <h3 className="mb-4">{blockHead}</h3>
          <p style={{ fontSize: "1.17rem", color:"#424242"}} className="text-muted ">
            {productDescription}
          </p>
          <div>
            <div className="row">
              
              {firstLink && <a
                href={firstLink.link}
                className="extlink  col-12 col-md-6 "
                style={{ fontSize: "1.1rem" }}
              >
                 {firstLink.val} <i class="fa-solid fa-arrow-right-long"></i>
              </a>}
              {SecondLink && <a
                href={SecondLink.link}
                className="extlink  col-12 col-md-6 "
                style={{ fontSize: "1.1rem" }}
              >
                 {SecondLink.val} <i class="fa-solid fa-arrow-right-long"></i>
              </a>}
            <div className="row">
                <div className="col-12 col-lg-5">
                    <a href={appStore}><img src="media/googlePlayBadge.svg" className="mt-3"></img></a>
                </div>
            <div className="col-12 col-lg-5">
                <a href={appStore}><img src="media/appstoreBadge.svg" className="mt-3 "></img></a>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftimage;
