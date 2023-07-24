import React from 'react'

export default function ContactUs() {
  return (
    <>
      {/* Contact */}
  <div id="contact" className="form-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Book consultation</h2>
          <p className="p-heading">
            Don't hesitate to give us a call or just use the contact form below
          </p>
          <ul className="list-unstyled li-space-lg">
            <li>
              <i className="fas fa-map-marker-alt" /> &nbsp;22 Innovative, San
              Francisco, CA 94043, US
            </li>
            <li>
              <i className="fas fa-phone" /> &nbsp;
              <a href="tel:00817202212">+81 720 2212</a>
            </li>
            <li>
              <i className="fas fa-envelope" /> &nbsp;
              <a href="mailto:contact@site.com">contact@site.com</a>
            </li>
          </ul>
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
      <div className="row">
        <div className="col-lg-12">
          {/* Contact Form */}
          <form id="contactForm">
            <div className="form-group">
              <input
                type="text"
                className="form-control-input"
                id="cname"
                required=""
              />
              <label className="label-control" htmlFor="cname">
                Name
              </label>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control-input"
                id="cemail"
                required=""
              />
              <label className="label-control" htmlFor="cemail">
                Email
              </label>
            </div>
            <div className="form-group">
              <button type="submit" className="form-control-submit-button">
                Submit
              </button>
            </div>
          </form>
          {/* end of contact form */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of form-1 */}
  {/* end of contact */}
    </>
  )
}
