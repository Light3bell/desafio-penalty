import React from 'react'
import { Carousel } from "react-responsive-carousel";
import './Carousel.sass'

const carousel_images = {
    banner_03: require('../../assets/banner_site_penalty_03.png'),
    banner_06: require('../../assets/banner_site_penalty_06.png'),
    arrow_back: require('../../assets/arrow_back_icon.png'),
    arrow_next: require('../../assets/arrow_next_icon.png')
}

export default () => (
    <Carousel 
        autoPlay
        infiniteLoop
        renderArrowPrev={(onClickHandler) =>
            <button type="button" onClick={onClickHandler} className='arrow-back'>
                <img alt="Voltar" src={carousel_images.arrow_back} />
            </button>
        }
        renderArrowNext={(onClickHandler) =>
            <button type="button" onClick={onClickHandler} className='arrow-next'>
                <img alt="Voltar" src={carousel_images.arrow_next} />
            </button>
        }
    >
        <div>
            <img alt='Banner 03' src={carousel_images.banner_03} />
        </div>
        <div>
            <img alt="Banner 06" src={carousel_images.banner_06} />
        </div>
    </Carousel>
)
