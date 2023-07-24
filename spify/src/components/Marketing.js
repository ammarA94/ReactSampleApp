import React from 'react'

export default function Marketing(props) {
  return (
    <>
  {/* Details 3 */}
  <div className="basic-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xl-5">
          <div className="text-container">
            <h2>{props.heading}</h2>
            <hr className="hr-heading" />
            <p>
              We can deliver a comprehensive marketing plan and then execute it
              down to the smallest details. Our marketing specialist will also
              conduct evaluations regularly and advise you
            </p>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">
                  Marketing plan for 6 months with evaluation
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">
                  Email campaigns for the existing customers
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">
                  Remarketing campaigns to reduce cart abandon
                </div>
              </li>
              <li className="media">
                <i className="fas fa-square" />
                <div className="media-body">
                  Loyalty programs for your favorite clients
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
              src={ require('../assets/images/details-3.jpg') }
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
  {/* end of basic-3 */}
  {/* end of details 3 */}
      
    </>
  )
}
