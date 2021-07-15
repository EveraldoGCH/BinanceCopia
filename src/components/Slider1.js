import React from 'react'

export default function Slider1() {
    return (
        <div className="CarrouselAppCss">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="\images\bc0c4df8-8c4c-4fe5-8ec1-9c77c092d6f0.png" className="d-block w-100" alt="imgslider1"/>
    </div>
    <div className="carousel-item">
      <img src="\images\c351d89c-8413-4dea-9788-3d1ea96e5f63.png" className="d-block w-100" alt="imgslider2"/>
    </div>
    <div className="carousel-item">
      <img src="\images\d69540e3-5115-44f5-a656-ea3ed866c689.png" className="d-block w-100" alt="imgslider3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    )
}
