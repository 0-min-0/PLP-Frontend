import React from 'react'
import { NavLink } from 'react-router-dom'
import pageNotFound from '../../assets/images/404.png'

export const NotFound = () => {
  return (
    <div className='w-full h-full p-6 page general flex flex-col items-center justify-center'>
      <div>
        <img
          src={pageNotFound}
          alt='Page not found'
          className='w-[400px] h-[300px]'
        />
      </div>
      <div className='text-center'>
        <h1 className='text-5xl font-[afacadBold] text-[#60efdb]'>Página no encontrada</h1>
        <p className='mt-4 text-[color:var(--color-card-text)] text-2xl'>
          La página que buscas puede que haya sido trasladada, eliminada o posiblemente no exista.
          <NavLink to='/' className='ml-1.5 underline hover:font-semibold'>
             Volver a inicio.
          </NavLink>
        </p>
      </div>
    </div>
  )
}
