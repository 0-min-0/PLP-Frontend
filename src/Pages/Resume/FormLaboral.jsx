import { useState } from 'react'
import { CardResume } from '../../UI/CardResume'
import { Input } from '../../UI/Input'
import { HiCheckCircle } from 'react-icons/hi'
import { Button } from '../../UI/button'
import { useLaboral } from '../../Context/LaboralContext'

export const FormLaboral = ({ onCompletionChange }) => {
    const { laboralData, errors, handleChange, validateFieldsLaboral } = useLaboral()
    const [completedLaboral, setCompletedLaboral] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validateFieldsLaboral()
        setCompletedLaboral(isValid)
        onCompletionChange(isValid) 
    }

    return (
        <CardResume
            formTitle='Información Laboral'
            btnCompleted={
                <Button
                    btnType='submit'
                    clicked={handleSubmit}
                    btnStyle={`min-w-[10%] flex items-center bg-[#60efdb] text-[#405e7f]`}
                >
                    {completedLaboral ? 'Completado' : 'Completar'}
                    {completedLaboral && <HiCheckCircle className='w-6 h-6 ml-2 text-[#2a445e] text-lg' />}
                </Button>
            }
            mainForm={
                <form onSubmit={handleSubmit} className='w-full flex gap-20' >
                    <div className='w-full'>
                        <div>
                            <h2 className='text-[#405e7f] font-semibold'>
                                Habilidades Técnicas
                            </h2>
                            <p className='text-[#405e7f]'>Ej. Operación en maquinaria pesada.</p>
                            <Input
                                iName='technicalSkills.tSkillOne'
                                isFor='tSkillOne'
                                iType='text'
                                iHolder='Habilidad técnica número uno'
                                iValue={laboralData.technicalSkills.tSkillOne}
                                iChange={handleChange}
                                error={errors.technicalSkills.tSkillOne}
                            />
                            <Input
                                iName='technicalSkills.tSkillTwo'
                                isFor='tSkillTwo'
                                iType='text'
                                iHolder='Habilidad técnica número dos'
                                iValue={laboralData.technicalSkills.tSkillTwo}
                                iChange={handleChange}
                                error={errors.technicalSkills.tSkillTwo}
                            />
                            <Input
                                iName='technicalSkills.tSkillThree'
                                isFor='tSkillThree'
                                iType='text'
                                iHolder='Habilidad técnica número tres (Opcional)'
                                iValue={laboralData.technicalSkills.tSkillThree}
                                iChange={handleChange}
                            />
                            <Input
                                iName='technicalSkills.tSkillFour'
                                isFor='tSkillFour'
                                iType='text'
                                iHolder='Habilidad técnica número cuatro (Opcional)'
                                iValue={laboralData.technicalSkills.tSkillFour}
                                iChange={handleChange}
                            />
                        </div>
                        <div className='mt-4'>
                            <h2 className='text-[#405e7f] font-semibold'>
                                Habilidades Sociales
                            </h2>
                            <p className='text-[#405e7f]'>Ej. Buena comunicación y trabajo en equipo.</p>
                            <Input
                                iName='softSkills.sSkillOne'
                                isFor='sSkillOne'
                                iType='text'
                                iHolder='Habilidad social número uno'
                                iValue={laboralData.softSkills.sSkillOne}
                                iChange={handleChange}
                                error={errors.softSkills.sSkillOne}
                            />
                            <Input
                                iName='softSkills.sSkillTwo'
                                isFor='sSkillTwo'
                                iType='text'
                                iHolder='Habilidad social número dos'
                                iValue={laboralData.softSkills.sSkillTwo}
                                iChange={handleChange}
                                error={errors.softSkills.sSkillTwo}
                            />
                            <Input
                                iName='softSkills.sSkillThree'
                                isFor='sSkillThree'
                                iType='text'
                                iHolder='Habilidad social número tres (Opcional)'
                                iValue={laboralData.softSkills.sSkillThree}
                                iChange={handleChange}
                            />
                            <Input
                                iName='softSkills.sSkillFour'
                                isFor='sSkillFour'
                                iType='text'
                                iHolder='Habilidad técnica número cuatro (Opcional)'
                                iValue={laboralData.softSkills.sSkillFour}
                                iChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='mb-6'>
                            <h2 className='text-[#405e7f] font-semibold'>
                                Estudios complementarios
                            </h2>
                            <p className='text-[#405e7f]'>Ej. Curso básico de programación. (En caso de que no tengas estudios complementarios sólo agrega en los dos primeros campos tus estudios básicos, como la primario o secundaria)</p>
                            <Input
                                iName='studies.studiesOne'
                                isFor='studiesOne'
                                iType='text'
                                iHolder='Ingresa nombre de tu complementario'
                                iValue={laboralData.studies.studiesOne}
                                iChange={handleChange}
                                error={errors.studies.studiesOne}
                            />
                            <Input
                                iName='studies.studiesTwo'
                                isFor='studiesTwo'
                                iType='text'
                                iHolder='Ingresa nombre de tu complementario'
                                iValue={laboralData.studies.studiesTwo}
                                iChange={handleChange}
                                error={errors.studies.studiesTwo}
                            />
                            <Input
                                iName='studies.studiesThree'
                                isFor='studiesThree'
                                iType='text'
                                iHolder='Ingresa nombre de tu complementario (Opcional)'
                                iValue={laboralData.studies.studiesThree}
                                iChange={handleChange}
                            />
                            <Input
                                iName='studies.studiesFour'
                                isFor='studiesFour'
                                iType='text'
                                iHolder='Ingresa nombre de tu complementario (Opcional)'
                                iValue={laboralData.studies.studiesFour}
                                iChange={handleChange}
                            />
                        </div>
                        <Input
                            labelTitle='Experiencia'
                            iName='experience'
                            isFor='experiencie'
                            iType='text'
                            iHolder='Ingresa tu tiempo/nivel de experiencia (Ej. 4 años/Semi-senior)'
                            iValue={laboralData.experience}
                            iChange={handleChange}
                            error={errors.experience}
                        />
                        <div className='mt-8'>
                            <h2 className='text-[#405e7f] font-semibold'>
                                Empresa/Lugar de experiencia
                            </h2>
                            <p className='text-[#405e7f]'>Escribe el nombre del lugar/empresa en la cual adquiriste tus experiencias.
                                <br /> Puedes ingresar varios.</p>
                            <Input
                                iName='companyWork'
                                isFor='companyOne'
                                iType='text'
                                iHolder='Ingresa nombre de la empresa o lugar de experiencia'
                                iValue={laboralData.companyWork}
                                iChange={handleChange}
                                error={errors.companyWork}
                            />
                        </div>
                    </div>
                </form >
            }
        />
    )
}
