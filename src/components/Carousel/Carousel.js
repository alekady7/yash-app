import React, { useState } from 'react'
import './Carousel.css'

//icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {

    const data = [
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
        'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'
    ]

    const [currentImage, setCurrentImage] = useState(0)

    function showPreviousImage() {
        setCurrentImage((data[currentImage] - 1) + data.length)
    }

    function showNextImage() {
        setCurrentImage(data[currentImage] + 1)
    }

  return (
    <div className='carousel'>
        <div className='carousel__arrow' onClick={showPreviousImage}>
            <ArrowBackIosNewIcon />
        </div>

        <img className='carousel__images' src={currentImage} />

        <div className='carousel__arrow' onClick={showNextImage}>
            <ArrowForwardIosIcon />
        </div>
    </div>
  )
}

export default Carousel