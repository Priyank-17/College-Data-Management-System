import React from 'react';
import { Link } from 'react-router-dom';
import { authenticate, isAuth } from '../helpers/auth';
import './AdminIteam.css'
function CardItem(props) {
  return (
    <>
      <li className='cards__item a'>
        <Link className='cards__item__link' to={isAuth() ? props.path : props.path1}>
          <figure className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
          <h2 className="b">{props.label}</h2>
            
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;