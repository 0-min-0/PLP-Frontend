import { useState } from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import { Button } from '../button'
import { PersonView } from './PersonView'

export const Person = ({ onShowResume, occupation, name, town, phone, ...person }) => {
  const [showDetail, setShowDetail] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

 const handleClick = () => {
    if (onShowResume) {
      onShowResume(person)
    } else {
      setShowDetail(true)
      setIsOpen(true)
    }
  }

  const handleContact = (personData) => {
    console.log('Contactando a:', personData)
  }

  const itemStyle = 'flex gap-2 mb-2';
  return (
    <>
      <div className='bg-white rounded-xl border border-[#60efdb] px-8 py-6 text-[#405e7f] w-75 h-60 flex flex-col'>
        <div className='flex justify-between items-center'>
          <h2 className='mb-2 font-semibold text-lg truncate max-w-[220px]'>{occupation}</h2>
          <IoPersonOutline className='w-5 h-5 flex-shrink-0 ml-2' />
        </div>
        <div className='flex-grow'>
          <div className={itemStyle}>
            <h3 className='font-semibold'>Nombre • </h3>
            <p className='truncate'>{name}</p>
          </div>
          <div className={itemStyle}>
            <h3 className='font-semibold'>Ubicación • </h3>
            <p className='truncate'>{town}</p>
          </div>
          <div className={itemStyle}>
            <h3 className='font-semibold'>Teléfono •</h3>
            <p className='truncate'>{phone}</p>
          </div>
        </div>

        <Button
          btnName='Ver hoja de vida'
          btnType='button'
          btnStyle='bg-[#405e7f] text-white font-semibold w-full mt-2'
          clicked={handleClick}
        />
      </div>

      {!onShowResume && showDetail && (
        <PersonView
          person={{ ...person, occupation, name, town, phone }}
          isOpen={isOpen}
          onClose={() => {
            setShowDetail(false);
            setIsOpen(false);
          }}
        />
      )}
    </>
  )
}