import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/reviews.css';
import { reviewData } from './reviewData'

import { FaStar } from 'react-icons/fa'

// Function Stars

function StarList(n) {
  const stars = [];

  for (let i = 0; i < n; i++) {
    stars.push( <FaStar className='stars'/> );
    
  }
  return stars;
}

const ReviewsComponent = () => {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4
  };
  return (
    <div className='reviewComponent' id='reviewComponent'> 
      {/* <div className="container">

        <div className="col-12 mb-5">
              <div className="row">
                <div className="col-md-4 sm={{span:3}} md={{span:3}}" >
                  <div className="card mb-5">
                    <div className="card-header bg-primary">
                      <h5>Jacson</h5>
                        <StarList/>
                    </div>
                    <div className="card-body bg-light">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus facere fugit nostrum aspernatur ratione quis ut exercitationem, assumenda et magnam minus mollitia accusantium autem perspiciatis accusamus dolorum eos provident.</p>
                    </div>
                  </div>
                  
                </div>
                <div className="col-md-4 sm={{span:8}} md={{span:8}}">
                  <div className="card mb-5">
                    <div className="card-header bg-danger">
                      <h5>Richel Jonson</h5>
                      <StarList/>
                    </div>
                    <div className="card-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus facere fugit nostrum aspernatur ratione quis ut exercitationem, assumenda et magnam minus mollitia accusantium autem perspiciatis accusamus dolorum eos provident.</p>
                    </div>
                    
                  </div>
                </div>
                
                <div className="col-md-4 sm={{span:8}} md={{span:8}}">
                  <div className="card mb-5">
                    <div className="card-header bg-success ">
                      <img src='./img/logo.png'/>
                      
                    </div>
                    <div className="card-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus facere fugit nostrum aspernatur ratione quis ut exercitationem, assumenda et magnam minus mollitia accusantium autem perspiciatis accusamus dolorum eos provident.</p>
                    </div>
                    
                  </div>
                </div>
               <div className="card">
                <div className="image-content">
                  <div className="overlay">
                    <div className="card-image">
                    <image source={require('./img/bg1.jpg')} />
                    </div>
                  </div>
                </div>
                </div> 

              </div>
        </div>
      </div> */}
      <div className="container">
        <Slider {...settings}>
          {reviewData.map(item=>(
            <div className="card-review">
              <div className="card-top">
                <img src={item.image} alt={item.name} />
                <h4 className='cus-name'>{item.name}</h4>
              </div>
              <div className="card-bottom">
              
              
              {StarList(item.rate)}

                <p className='comment'>{item.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ReviewsComponent