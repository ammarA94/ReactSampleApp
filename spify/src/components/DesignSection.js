import React from 'react'

export default function DesignSection(props) {
  return (
    <>
    {/* Details 2 */}
<div className="basic-2">
  <div className="container-fluid">
    <div className="row">
      <div className="image-area">
        <div className="image-container">
          <img
            className="img-fluid"
            src={ require('../assets/images/details-2.jpg') }
            alt="alternative"
          />
        </div>{" "}
        {/* end of image-container */}
      </div>{" "}
      {/* end of image-area */}
      <div className="text-area">
        <div className="text-container">
          <h2>{props.heading}</h2>
          <hr className="hr-heading" />
          <p>
            Our team of competent designers and developers are able to create
            beautiful designs and structured code that will serve your
            ecommerce project to establish your market position and increase
            revenues
          </p>
          <a
            className="btn-solid-reg popup-with-move-anim"
            href="#details-lightbox"
          >
            Lightbox
          </a>
        </div>{" "}
        {/* end of text-container */}
      </div>{" "}
      {/* end of text-area */}
    </div>{" "}
    {/* end of row */}
  </div>{" "}
  {/* end of container-fluid */}
</div>{" "}
{/* end of basic-1 */}
{/* end of details 2 */}
{/* Details Lightbox */}
{/* Lightbox */}
<div
    id="details-lightbox"
    className="lightbox-basic zoom-anim-dialog mfp-hide"
  >
    <div className="row">
      <button title="Close (Esc)" type="button" className="mfp-close x-button">
        ×
      </button>
      <div className="col-lg-8">
        <div className="image-container">
          <img
            className="img-fluid"
            src={ require('../assets/images/details-lightbox.jpg') }
            alt="alternative"
          />
        </div>{" "}
        {/* end of image-container */}
      </div>{" "}
      {/* end of col */}
      <div className="col-lg-4">
        <h3>Goals Setting</h3>
        <hr />
        <p>
          The app can easily help you track your personal development evolution
          if you take the time to set it up.
        </p>
        <h4>User Feedback</h4>
        <p>
          This is a great app which can help you save time and make your live
          easier. And it will help improve your productivity.
        </p>
        <ul className="list-unstyled li-space-lg">
          <li className="media">
            <i className="fas fa-check" />
            <div className="media-body">Splash screen panel</div>
          </li>
          <li className="media">
            <i className="fas fa-check" />
            <div className="media-body">Statistics graph report</div>
          </li>
          <li className="media">
            <i className="fas fa-check" />
            <div className="media-body">Events calendar layout</div>
          </li>
          <li className="media">
            <i className="fas fa-check" />
            <div className="media-body">Location details screen</div>
          </li>
          <li className="media">
            <i className="fas fa-check" />
            <div className="media-body">Onboarding steps interface</div>
          </li>
        </ul>
        <a className="btn-solid-reg mfp-close page-scroll" href="#contact">
          Contact Us
        </a>{" "}
        <button className="btn-outline-reg mfp-close as-button" type="button">
          Back
        </button>
      </div>{" "}
      {/* end of col */}
    </div>{" "}
    {/* end of row */}
  </div>{" "}
  {/* end of lightbox-basic */}
  {/* end of lightbox */}
  {/* end of details lightbox */}
    
  </>
  )
}
