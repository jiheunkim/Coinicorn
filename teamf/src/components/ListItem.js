import React from 'react';
import { Link } from 'react-router-dom';

function ListItem(props) {
    return (
      <>
        <li className='lists__item'>
          <Link className='lists__item__link' to={props.path}>
            <div className='lists__item__content'>
              <div className='lists__item__info'>
                <h5 className='lists__item__text'>{props.text}</h5>
              </div>
              <figure className='lists__item__pic-wrap' data-category={props.label}>
                <img
                  className='lists__item__img'
                  alt='Travel Image'
                  src={props.src}
                />
              </figure>
            </div>
          </Link>
        </li>
      </>
    );
  }  

export default ListItem;