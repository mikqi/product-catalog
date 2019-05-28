// tslint:disable:no-implicit-dependencies
import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
// tslint:disable-next-line:ordered-imports
import 'slick-carousel/slick/slick-theme.css'
import './ProductDetailCarousel.styles.css'

const ProductDetailCarousel = props => {
  const { images } = props

  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    // tslint:disable-next-line:object-literal-sort-keys
    customPaging(i) {
      return (
        <a>
          <img
            style={{ width: '100%', height: '100%' }}
            src={images[i].thumbnail}
          />
        </a>
      )
    }
  }
  // thumbnail
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, i) => (
          <img src={image.full} key={i} />
        ))}
      </Slider>
    </div>
  )
}

export default ProductDetailCarousel
