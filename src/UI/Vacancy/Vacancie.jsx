import React, { useState } from 'react'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { Button } from '../button'
import { VacancyView } from './VacancyView'
import { useVacancy } from '../../Context/VacancyContext'
import { getCategoryLabel } from '../../Utils/options'

export const Vacancie = ({
  onShowDetails,
  title,
  company,
  location,
  category,
  experience,
  selectedVacancy,
  ...vacancy
}) => {
  const [showDetail, setShowDetail] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { isVacancyApplied } = useVacancy()

  const handleClick = () => {
    if (onShowDetails) {
      onShowDetails()
    } else {
      setShowDetail(true)
      setIsOpen(true)
    }
  }

  return (
    <>
      <div className='job-card rounded-xl px-8 py-6 w-75 h-60 flex flex-col border
                      bg-white text-[#405e7f] border-[#90d7db]
                      vacancy-card'>
        <div className='flex justify-between items-start mb-1'>
          <h2 className='job-card-title font-semibold text-lg leading-tight truncate max-h-[3.6rem]'>
            {title}
          </h2>
          <IoBriefcaseOutline className='icon-close-x w-5 h-5 flex-shrink-0 ml-2 mt-1 vacancy-icon-dark' />
        </div>

        <div className='flex-grow space-y-2'>
          <div className='flex items-start'>
            <h3 className='job-text font-semibold whitespace-nowrap'>Empresa • </h3>
            <p className='job-text ml-1 line-clamp-1'>{company || 'Empresa no especificada'}</p>
          </div>

          <div className='flex items-start'>
            <h3 className='job-text font-semibold whitespace-nowrap'>Ubicación • </h3>
            <p className='job-text ml-1 line-clamp-1'>{location || 'Ubicación no especificada'}</p>
          </div>

          <div className='flex items-start'>
            <h3 className='job-text font-semibold whitespace-nowrap'>Categoría • </h3>
            <p className='job-text ml-1 line-clamp-1'>{category}</p>
          </div>
        </div>

        <Button
          btnName='Ver detalles'
          btnType='button'
          btnStyle='bg-[#405e7f] text-white font-semibold w-full mt-3 py-2 card-button'
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
          isApplied={isVacancyApplied(vacancy.id)}
        />
      )}
    </>
  )
}
