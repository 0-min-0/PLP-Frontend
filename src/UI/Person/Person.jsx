import { useState } from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import { Button } from '../button'
import { PersonView } from './PersonView'

export const Person = ({
  onShowResume,
  occupation,
  name,
  town,
  category,
  ...person
}) => {
  const [showDetail, setShowDetail] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if (onShowResume) {
      onShowResume()
    } else {
      setShowDetail(true)
      setIsOpen(true)
    }
  }

  const itemStyle = 'flex gap-2 mb-2'

  return (
    <>
      <div className='job-card rounded-xl px-8 py-6 w-75 h-60 flex flex-col border
                      bg-white text-[#405e7f] border-[#60efdb]
                      person-card'>
        <div className='flex justify-between items-center'>
          <h2 className='job-card-title mb-2 font-semibold text-lg truncate max-w-[220px]'>{occupation}</h2>
          <IoPersonOutline className='icon-close-x w-5 h-5 flex-shrink-0 ml-2 person-icon-dark' />
        </div>
        <div className='flex-grow'>
          <div className={itemStyle}>
            <h3 className='job-text font-semibold'>Nombre • </h3>
            <p className='job-text truncate max-w-[100px]'>{name}</p>
          </div>
          <div className={itemStyle}>
            <h3 className='job-text font-semibold'>Ubicación • </h3>
            <p className='job-text truncate max-w-[100px]'>{town}</p>
          </div>
          <div className={itemStyle}>
            <h3 className='job-text font-semibold'>Categoría •</h3>
            <p className='job-text truncate max-w-[100px]'>{category}</p>
          </div>
        </div>

        <Button
          btnName='Ver hoja de vida'
          btnType='button'
          btnStyle='bg-[#405e7f] text-white font-semibold w-full mt-2 card-button'
          clicked={handleClick}
        />
      </div>

      {!onShowResume && showDetail && (
        <PersonView
          person={{ ...person, occupation, name, town, category }}
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
