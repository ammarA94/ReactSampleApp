import React from 'react'

export default function Branding(props) {
  return (
    <>
      {/* Details 1 */}
      <div id="details" className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5">
              <div className="text-container">
              <h2>{props.heading}</h2>
                <hr className="hr-heading" />
                <p>
                  To build a solid foundation for your online shop you need a strong
                  brand and a bulletproof strategy. You can rely on our experience
                  to create a beautiful and efficient online shop
                </p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      Delivering powerful brands for popular shops
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      Creating beautiful concepts and evocative logos
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
    ''                <div className="media-body">
                      Preparing complete branding guides and styles
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square" />
                    <div className="media-body">
                      Speedy delivery of marketing design assets
                    </div>
                  </li>
                </ul>
              </div>{" "}
              {/* end of text-container */}
            </div>{" "}
            {/* end of col */}
            <div className="col-lg-6 col-xl-7">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src={ require('../assets/images/details-1.png') }
                  alt="details"
                />
              </div>{" "}
              {/* end of image-container */}
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of basic-1 */}
      {/* end of details 1 */}
        </>
  )
}
