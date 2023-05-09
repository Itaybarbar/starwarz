import React from 'react';
import './CommentDetail.css'

const CommentDetail = ({name, height, weight, hair, skin, eyes, year, gender}) => {

    return (
        <div className='content'>
          <div className='section1'>
            <div>
              <h1>{name.replaceAll(' ','_')}</h1>
              <img className='avatarpic' 
                   src={require('./images/' + name.replaceAll(' ','_').toLowerCase() + '.jpg')} 
                   alt={name + ' image'}
              />
            </div>
            <button className='pic_link'>
              <a href={'https://www.google.com/search?q=' + name + '=image'}  target="_blank" rel="noreferrer">
                Click Here For<br/><strong>{name}</strong> Images
              </a>
            </button>
          </div>
          <div className='section2'>
            <div className='fade'></div>
            <div className='stats'>
              <div className='crawl'>
                <p>{name}</p>
                <p className='height'>Hight: <span>{height}</span></p>
                <p className='weight'>Weight: <span>{weight}</span></p>
                <p className='hair'>Hair Color: <span>{hair}</span></p>
                <p className='skin'>Skin Color: <span>{skin}</span></p>
                <p className='eyes'>Eye Color: <span>{eyes}</span></p>
                <p className='year'>Birth Year: <span>{year}</span></p>
                <p className='gender'>Gender: <span>{gender}</span></p>
              </div>
            </div>
          </div>
          
        </div>
    );
}

export default CommentDetail; 