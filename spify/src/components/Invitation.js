import React from 'react'

export default function Invitation(props) {
  return (
    <>
       {/* Invitation */}
  <div className="basic-7">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h4>
            {props.message}
          </h4>
          <a className="btn-solid-lg page-scroll" href="#contact">
            Book Consultation
          </a>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of basic-7 */}
  {/* end of invitation */}
    </>
  )
}
