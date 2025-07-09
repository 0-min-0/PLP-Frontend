import React from 'react'
import { Input } from '../../UI/Input'
import { Desc } from '../../UI/Desc'
import { Button } from '../../UI/button'
import { Select } from '../../UI/Select'
import { useVacancy } from '../../Context/VacancyContext'
import { categories } from '../../Utils/options'
import { motion } from 'framer-motion'

export const VacancyForm = () => {
  const {
    vacancy,
    errors,
    handleChange,
    handleSelectChange,
    handleFormSubmit
  } = useVacancy()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className='login-form-dark max-w-5xl container-create rounded-xl px-20 py-12 mx-30 mt-4 mb-8 bg-[#405e7f]'
    >
      <form onSubmit={handleFormSubmit}>
        <div className='container-create-title flex justify-between items-start mb-8'>
          <h2 className='text-white text-xl font-semibold'>
            Crea una nueva vacante, al terminar de llenar todos los campos, haz click en "publicar vacante"
          </h2>
        </div>
        <div>
          <div className='form-create-vacancy-1 flex flex-col gap-2'>
            <Input
              labelTitle='Nombre de la vacante'
              labelColor='white'
              iName='vacancyName'
              isFor='vacancyName'
              iType='text'
              iHolder='Ingresa nombre de la ocupación que solicitas'
              iValue={vacancy.vacancyName || ''}
              iChange={handleChange}
              error={errors.vacancyName}
              errColor='text-[#90d7db]'
            />
            <Input
              labelTitle='Persona de contacto'
              labelColor='white'
              iName='contactPerson'
              iType='text'
              iHolder='Ingresa nombre de la persona de contacto'
              iValue={vacancy.contactPerson || ''}
              iChange={handleChange}
              error={errors.contactPerson}
              errColor='text-[#90d7db]'
            />
            <Input
              labelTitle='Contacto'
              labelColor='white'
              iName='contact'
              iType='text'
              iHolder='Ingresa número de contacto o correo electrónico'
              iValue={vacancy.contact || ''}
              iChange={handleChange}
              error={errors.contact}
              errColor='text-[#90d7db]'
            />
            <Input
              labelTitle='Ubicación'
              labelColor='white'
              iName='location'
              iType='text'
              iHolder='Ingresa la ubicación de la vacante'
              iValue={vacancy.location || ''}
              iChange={handleChange}
              error={errors.location}
              errColor='text-[#90d7db]'
            />
            <Input
              labelTitle='Disponibilidad requerida'
              labelColor='white'
              iName='availability'
              iType='text'
              iHolder='Ingresa la disponibilidad que solicitas (Ej. Tiempo completo de lunes a viernes)'
              iValue={vacancy.availability || ''}
              iChange={handleChange}
              error={errors.availability}
              errColor='text-[#90d7db]'
            />
          </div>

          <div className='form-create-vacancy-2 flex flex-col gap-5 mt-4 mb-8'>
            <Desc
              nameDesc='Responsabilidades y especificaciones'
              holderDesc='Escribe las responsabilidades que tendrá la persona que ocupe la vacante'
              name='responsibilities'
              value={vacancy.responsibilities}
              onChange={handleChange}
              error={errors.responsibilities}
              height='h-30'
              color='text-white'
              errColor='text-[#90d7db]'
            />
            <Select
              label='Categoria'
              color='text-white'
              name='category'
              value={vacancy.category || ''}
              onChange={(value) => handleSelectChange('category', value)}
              options={categories}
              error={errors.category}
              errColor='text-[#90d7db]'
            />
            <Input
              labelTitle='Salario estimado'
              labelColor='white'
              iName='salary'
              iType='text'
              iHolder='Ingresa el salario que ofreces Ej. 1.200.000 COP (dependiendo de tus especificaciones)'
              iValue={vacancy.salary || ''}
              iChange={handleChange}
              error={errors.salary}
              errColor='text-[#90d7db]'
            />
          </div>

          <Button
            btnName='Publicar vacante'
            btnType='submit'
            btnStyle='w-[25%] bg-[#90d7db] text-[#405e7f] font-semibold text-lg rounded-full transition-all duration-300'
          />
        </div>
      </form>
    </motion.div>
  )
}
