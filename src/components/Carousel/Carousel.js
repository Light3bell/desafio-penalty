import React from 'react'
import { Carousel } from "react-responsive-carousel";
import './Carousel.sass'


const banner_03  = require('../../assets/banner_site_penalty_03.png').default
const banner_06  = require('../../assets/banner_site_penalty_06.png').default
const arrow_back = require('../../assets/arrow_back_icon.png').default
const arrow_next = require('../../assets/arrow_next_icon.png').default


export default () => (
    <Carousel 
        autoPlay
        infiniteLoop
        renderArrowPrev={(onClickHandler) =>
            <button type="button" onClick={onClickHandler} className='arrow-back'>
                <img alt="Voltar" src={arrow_back} />
            </button>
        }
        renderArrowNext={(onClickHandler) =>
            <button type="button" onClick={onClickHandler} className='arrow-next'>
                <img alt="Voltar" src={arrow_next} />
            </button>
        }
    >
        <div>
            <img alt='Banner 03' src={banner_03} />
        </div>
        <div>
            <img alt="Banner 06" src={banner_06} />
        </div>
    </Carousel>
)
