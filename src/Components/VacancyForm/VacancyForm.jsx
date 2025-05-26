import React from 'react'
import { Input } from '../../UI/Input'
import { Desc } from '../../UI/Desc'
import { Button } from '../../UI/button'
import { useVacancy } from '../../Context/VacancyContext'
import { useNavigate } from 'react-router-dom'
import { showSuccessAlert, showErrorAlert } from '../../UI/CustomAlerts'
import { addVacancyToExample } from '../../Utils/objectsExample'

export const VacancyForm = () => {
    const { vacancy, errors, handleChange, handleSubmit } = useVacancy()
    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        const onSuccess = () => {
            try {
                addVacancyToExample(vacancy, vacancy.name)
                showSuccessAlert(navigate, vacancy)
            } catch (error) {
                showErrorAlert()
            }
        }
        handleSubmit(e, 'vacancy', onSuccess)
    }

    return (
        <div className='rounded-xl px-20 py-14 mx-30 mt-6 bg-[#405e7f]'>
            <form onSubmit={handleFormSubmit} className='w-full'>
                <div className='flex justify-between items-start mb-8'>
                    <h2 className='text-white text-2xl font-semibold'>
                        Crea una nueva vacante, al terminar de llenar todos los campos, haz click en "publicar vacante"
                    </h2>
                    <Button
                        btnName='Publicar vacante'
                        btnType='submit'
                        btnStyle='w-[12%] bg-[#60efdb] text-[#405e7f] font-semibold text-lg rounded-full hover:bg-[#60efdb]/90 transition-all duration-300'
                    />
                </div>
                <div className='w-full flex gap-12'>
                    <div className='w-1/2 flex flex-col gap-4'>
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
                            errColor='text-[#60efdb]'
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
                            errColor='text-[#60efdb]'
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
                            errColor='text-[#60efdb]'
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
                            errColor='text-[#60efdb]'
                        />
                    </div>
                    <div className='w-1/2 flex flex-col gap-4'>
                        <Desc
                            nameDesc='Responsabilidades y especificaciones'
                            holderDesc='Escribe las responsabilidades que tendrá la persona que ocupe la vacante'
                            name='responsibilities'
                            value={vacancy.responsibilities}
                            onChange={handleChange}
                            error={errors.responsibilities}
                            height='h-34'
                            color='text-white'
                            errColor='text-[#60efdb]'
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
                            errColor='text-[#60efdb]'
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
                            errColor='text-[#60efdb]'
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
