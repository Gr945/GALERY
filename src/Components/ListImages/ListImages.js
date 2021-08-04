import React from 'react';
import { useSelector } from 'react-redux';
import './ListImages.css'

function ListImages(props) {
  const stateImages = useSelector(state => state.imagesURL)
  return (
    <div className='listImage'>
      {stateImages.length ?
      stateImages.map(element => <img src={element} style={{width:`${element.width/10}`, height:`${element.height/10}`}}/>)
    :<p>NOT IMAGES</p>}
    </div>
  );
}

export default ListImages;
