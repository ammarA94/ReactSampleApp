import React from 'react'

export default function AboutUs() {
  return (
    <>
       {/* About */}
  <div id="about" className="basic-6">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-container bg-gray">
            <h2>About our team</h2>
            <p>
              We are a group of designers, developers and marketers specialized
              in the Shopify platform. We've launched many stores in 10 years
            </p>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">
                  We love what we do and have a lot of passion
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">
                  Shopify is our go to platform for online shops
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">
                  We are Shopify partners for about 5 years
                </div>
              </li>
            </ul>
          </div>{" "}
          {/* end of text-container */}
          <div className="image-container">
            <img
              className="img-fluid"
              src={ require('../assets/images/about.jpg') }

              alt="alternative"
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
  {/* end of basic-6 */}
  {/* end of about */}
    </>
  )
}
