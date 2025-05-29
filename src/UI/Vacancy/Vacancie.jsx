import React, { useState } from 'react'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { Button } from '../button'
import { VacancyView } from './VacancyView'

export const Vacancie = ({ title, company, location, type, experience, ...vacancy }) => {
  const [showDetail, setShowDetail] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleApply = (vacancyData) => {
    console.log('Postulando a:', vacancyData)
  }

  const itemStyle = 'flex gap-2 mb-2'
  return (
    <>
      <div className='bg-white rounded-xl border border-[#60efdb] px-8 py-6 text-[#405e7f] w-72 h-60 flex flex-col'>
        <div className='flex justify-between items-center'>
          <h2 className='mb-2 font-semibold text-lg truncate max-w-[220px]'>{title}</h2>
          <IoBriefcaseOutline className='w-5 h-5 flex-shrink-0 ml-2' />
        </div>
        <div className='flex-grow'>
          <div className={itemStyle}>
            <h3 className='font-semibold'>Empresa • </h3>
            <p className='truncate'>{company}</p>
          </div>
          <div className={itemStyle}>
            <h3 className='font-semibold'>Ubicación • </h3>
            <p className='truncate'>{location}</p>
          </div>
          <div className={itemStyle}>
            <h3 className='font-semibold'>Disponibilidad •</h3>
            <p className='truncate'>{type}</p>
          </div>
        </div>

        <Button
          btnName='Ver detalles'
          btnType='button'
          btnStyle='bg-[#405e7f] text-white font-semibold w-full mt-2'
          clicked={() => {
            setShowDetail(true)
            setIsOpen(true)
          }}
        />
      </div>

      {showDetail && (
        <VacancyView
          vacancy={vacancy}
          onClose={() => {
            setShowDetail(false)
            setIsOpen(false)
          }}
          onApply={handleApply}
          isOpen={isOpen}

        />
      )}
    </>
  )
}