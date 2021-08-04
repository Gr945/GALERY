import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';


function DounloadImages() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handlerImage = (event) => {
  dispatch({type:"ADD_IMAGE",payload:event.image})
  }
  
  const backEndImage = async () => {
  const res = await fetch("http://localhost:2224/images")
  const data = await res.json()
  data.galleryImages.map(el => dispatch({type:'ADD_IMAGE', payload:el.url}))
  }

  return (
    <>
    <form onSubmit={handleSubmit(handlerImage)}>
      <input {...register('image')} placeholder='url image'/>
      <button onClick={handlerImage}>Загрузить url</button>
    </form>
     <button onClick={backEndImage}>Загрузить c сервера!</button>
     </>
  );
}

export default DounloadImages;
