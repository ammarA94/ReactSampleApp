import React from 'react'

export default function Projects() {
  return (
    <>
        {/* Projects */}
  <div id="projects" className="slider-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Text Slider */}
          <div className="slider-container">
            <div className="swiper-container text-slider">
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="image-container">
                        <img
                          className="img-fluid"
                          src={ require('../assets/images/project-1.jpg') }
                          alt="alternative"
                        />
                      </div>{" "}
                      {/* end of image-container */}
                    </div>{" "}
                    {/* end of col */}
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4>Online retailer shop</h4>
                        <p>
                          We were proud to partner with Online Retailer in order
                          to create a modern online store where customers can
                          purchase some of the best items from the market at
                          affordable prices
                        </p>
                        <p className="testimonial-text">
                          "I am happy to have chosen Spify for our Shopify
                          implementation. Their specialized experience helped
                          the project and made it available 2 weeks prior the
                          launch date for extensive testing"
                        </p>
                        <div className="testimonial-author">
                          Michael Smith - General Manager
                        </div>
                      </div>{" "}
                      {/* end of text-container */}
                    </div>{" "}
                    {/* end of col */}
                  </div>{" "}
                  {/* end of row */}
                </div>{" "}
                {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="image-container">
                        <img
                          className="img-fluid"
                          src={ require('../assets/images/project-2.jpg') }

                          alt="alternative"
                        />
                      </div>{" "}
                      {/* end of image-container */}
                    </div>{" "}
                    {/* end of col */}
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4>Shopify ecommerce site</h4>
                        <p>
                          We were proud to partner with Online Retailer in order
                          to create a modern online store where customers can
                          purchase some of the best items from the market at
                          affordable prices
                        </p>
                        <p className="testimonial-text">
                          "I am happy to have chosen Spify for our Shopify
                          implementation. Their specialized experience helped
                          the project and made it available 2 weeks prior the
                          launch date for extensive testing"
                        </p>
                        <div className="testimonial-author">
                          Ronnie Blake - Sales Manager
                        </div>
                      </div>{" "}
                      {/* end of text-container */}
                    </div>{" "}
                    {/* end of col */}
                  </div>{" "}
                  {/* end of row */}
                </div>{" "}
                {/* end of swiper-slide */}
                {/* end of slide */}
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="image-container">
                        <img
                          className="img-fluid"
                          src={ require('../assets/images/project-3.jpg') }

                          alt="alternative"
                        />
                      </div>{" "}
                      {/* end of image-container */}
                    </div>{" "}
                    {/* end of col */}
                    <div className="col-lg-6">
                      <div className="text-container">
                        <h4>Online fashion shop</h4>
                        <p>
                          We were proud to partner with Online Retailer in order
                          to create a modern online store where customers can
                          purchase some of the best items from the market at
                          affordable prices
                        </p>
                        <p className="testimonial-text">
                          "I am happy to have chosen Spify for our Shopify
                          implementation. Their specialized experience helped
                          the project and made it available 2 weeks prior the
                          launch date for extensive testing"
                        </p>
                        <div className="testimonial-author">
                          Nicole Richter - Development Manager
                        </div>
                      </div>{" "}
                      {/* end of text-container */}
                    </div>{" "}
                    {/* end of col */}
                  </div>{" "}
                  {/* end of row */}
                </div>{" "}
                {/* end of swiper-slide */}
                {/* end of slide */}
              </div>{" "}
              {/* end of swiper-wrapper */}
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              {/* end of add arrows */}
            </div>{" "}
            {/* end of swiper-container */}
          </div>{" "}
          {/* end of slider-container */}
          {/* end of text slider */}
        </div>{" "}
        {/* end of col */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of slider-1 */}
  {/* end of projects */}
    </>
  )
}
