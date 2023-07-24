import React from 'react'

export default function Mission(props) {
  return (
    <>
        {/* Mission */}
  <div className="basic-4">
    <div className="container">
      <div className="row">
        <div className="text-container">
          <h4>
            {props.mission}
          </h4>
        </div>{" "}
        {/* end of text-container */}
      </div>{" "}
      {/* end of row */}
    </div>{" "}
    {/* end of container */}
  </div>{" "}
  {/* end of basic-4 */}
  {/* end of mission */}
    </>
  )
}
