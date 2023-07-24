import React from 'react'

export default function Header(props) {
  return (
    <>
       <header id="header" className="header">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="image-container">
          <img src={props.logoFile} alt="Logo" />
          </div>{" "}
          {/* end of image-container */}
        </div>{" "}
        {/* end of col */}
        <div className="col-lg-6">
          <div className="text-container">
            <h3>{props.heading}</h3>
            <a className="btn-solid-lg page-scroll" href="#details">
              Discover
            </a>
          </div>{" "}
          {/* end of text-container */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-rocket" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Branding &amp; strategy</h5>
                <div className="card-text">
                  To build a solid foundation for your online shop you need a
                  strong brand and a bulletproof strategy
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-pencil-ruler" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Design &amp; development</h5>
                <div className="card-text">
                  Our team of competent designers and developers are able to
                  create beautiful designs and structured code
                </div>
              </div>
            </div>
            {/* end of card */}
            {/* Card */}
            <div className="card">
              <div className="card-image">
                <i className="fas fa-chart-pie" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Digital marketing</h5>
                <div className="card-text">
                  We can deliver a comprehensive marketing plan and then execute
                  it down to the smallest details
                </div>
              </div>
            </div>
            {/* end of card */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of services */}
  </header>{" "}
  {/* end of header */}
    </>
  )
}
