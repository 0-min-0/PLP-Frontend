import React, { useState } from 'react'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { Button } from '../button'
import { VacancyView } from './VacancyView'

export const Vacancie = ({ onShowDetails, title, company, location, type, experience, ...vacancy }) => {
  const [showDetail, setShowDetail] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleApply = (vacancyData) => {
    console.log('Postulando a:', vacancyData)
  }

  const handleClick = () => {
    if (onShowDetails) {
      onShowDetails(vacancy)
    } else {
      setShowDetail(true)
      setIsOpen(true)
    }
  }

  return (
    <>
      <div className='bg-white rounded-xl border border-[#60efdb] px-8 py-6 text-[#405e7f] w-75 min-h-[240px] flex flex-col'>
        <div className='flex justify-between items-start mb-3'>
          <h2 className='font-semibold text-lg leading-tight truncate max-h-[3.6rem]'>
            {title}
          </h2>
          <IoBriefcaseOutline className='w-5 h-5 flex-shrink-0 ml-2 mt-1' />
        </div>

        <div className='flex-grow space-y-2'>
          <div className='flex items-start'>
            <h3 className='font-semibold whitespace-nowrap'>Empresa • </h3>
            <p className='ml-1 line-clamp-1'>{company || 'Empresa no especificada'}</p>
          </div>

          <div className='flex items-start'>
            <h3 className='font-semibold whitespace-nowrap'>Ubicación • </h3>
            <p className='ml-1 line-clamp-1'>{location || 'Ubicación no especificada'}</p>
          </div>

          <div className='flex items-start'>
            <h3 className='font-semibold whitespace-nowrap'>Disponibilidad • </h3>
            <p className='ml-1 line-clamp-1'>{type || 'No especificado'}</p>
          </div>
        </div>

        <Button
          btnName='Ver detalles'
          btnType='button'
          btnStyle='bg-[#405e7f] text-white font-semibold w-full mt-3 py-2'
          clicked={handleClick}
        />
      </div>

      {!onShowDetails && showDetail && (
        <VacancyView
          vacancy={vacancy}
          isOpen={isOpen}
          onClose={() => {
            setShowDetail(false)
            setIsOpen(false)
          }}
        />
      )}
    </>
  )
}