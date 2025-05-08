import React from 'react'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { Button } from './button'

export const Vacancie = () => {

  const itemStyle = 'flex gap-2 mb-2'
  return (
    <div className='bg-white rounded-lg border border-[#60efdb] px-8 py-6 text-[#405e7f]'>
      <div className='flex justify-between '>
        <h2 className='mb-2 font-semibold text-lg'>Ocupación</h2>
        <IoBriefcaseOutline className='w-5 h-5' />
      </div>
      <div>
        <div className={itemStyle}>
          <h3 className='font-semibold'>Empresa - </h3>
          <p>Tech Corp</p>
        </div>
        <div className={itemStyle}>
          <h3 className='font-semibold'>Ubicación - </h3>
          <p>Armenia, Quindio</p>
        </div>
        <div className={itemStyle}>
          <h3 className='font-semibold'>Disponibilidad - </h3>
          <p>Medio Tiempo</p>
        </div>
        <div className={itemStyle}>
          <h3 className='font-semibold'>Experiencia - </h3>
          <p>Semi-senior/ 3 años</p>
        </div>
      </div>
      <Button
      btnName='Ver detalles' 
      btnType='button'
      btnStyle='bg-[#405e7f] text-white font-semibold w-full mt-2'
      />
    </div>
  )
}


