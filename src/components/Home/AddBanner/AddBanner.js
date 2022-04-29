import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstSlide from '../../../images/splab-banner (1).jpg'
import secondSlide from '../../../images/splab-banner (2).jpg'
import thirdSlide from '../../../images/splab-banner (3).jpg'

const AddBanner = () => {
      return (
            <div className='pb-5'>
                  <Carousel fade>
                        <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={firstSlide}
                                    alt="First slide"
                              />
                              
                              </Carousel.Item>
                              <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={secondSlide}
                                    alt="Second slide"
                              />

                             
                              </Carousel.Item>
                              <Carousel.Item>
                              <img
                                    className="d-block w-100"
                                    src={thirdSlide}
                                    alt="Third slide"
                              />

                              
                              </Carousel.Item>
                              </Carousel> 
            </div>
      );
};

export default AddBanner;