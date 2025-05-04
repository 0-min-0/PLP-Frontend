import { useState } from 'react'
import { CardResume } from '../../UI/CardResume'
import { Input } from '../../UI/Input'
import { HiCheckCircle } from 'react-icons/hi'
import { Button } from '../../UI/button'
import { useCompleted } from '../../Context/CompletedContext'

export const FormLaboral = () => {

    const [ completedLaboral, setCompletedLaboral ] = useState('')

    return (
        <CardResume
            formTitle='Información Laboral'
            btnCompleted={
                <Button
                    btnType='submit'
                    clicked=''
                    btnStyle='min-w-[10%] flex items-center bg-[#60efdb] text-[#405e7f]'
                >
                    {completedLaboral ? 'Completado' : 'Completar'}
                    {completedLaboral && <HiCheckCircle className='w-6 h-6 ml-2 text-[#2a445e] text-lg' />}
                </Button>

            }
            mainForm={
                <form action='' className='w-full flex gap-20' >
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
                                iValue=''
                                iChange=''
                            />
                            <Input
                                iName='technicalSkills.tSkillTwo'
                                isFor='tSkillTwo'
                                iType='text'
                                iHolder='Habilidad técnica número dos'
                                iValue=''
                                iChange=''
                            />
                            <Input
                                iName='technicalSkills.tSkillThree'
                                isFor='tSkillThree'
                                iType='text'
                                iHolder='Habilidad técnica número tres (Opcional)'
                                iValue=''
                                iChange=''
                            />
                            <Input
                                iName='technicalSkills.tSkillFour'
                                isFor='tSkillFour'
                                iType='text'
                                iHolder='Habilidad técnica número cuatro (Opcional)'
                                iValue=''
                                iChange=''
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
                                iValue=''
                                iChange=''
                            />
                            <Input
                                iName='softSkills.sSkillTwo'
                                isFor='sSkillTwo'
                                iType='text'
                                iHolder='Habilidad social número dos'
                                iValue=''
                                iChange=''
                            />
                            <Input
                                iName='softSkills.sSkillThree'
                                isFor='sSkillThree'
                                iType='text'
                                iHolder='Habilidad social número tres (Opcional)'
                                iValue=''
                                iChange=''
                            />
                            <Input
                                iName='softSkills.sSkillFour'
                                isFor='sSkillFour'
                                iType='text'
                                iHolder='Habilidad técnica número cuatro (Opcional)'
                                iValue=''
                                iChange=''
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='mb-10'>
                            <h2 className='text-[#405e7f] font-semibold'>
                                Estudios complementarios
                            </h2>
                            <p className='text-[#405e7f]'>Ej. Curso básico de programación.</p>
                            <Input
                                iName='studies.studiesOne'
                                isFor='studiesOne'
                                iType='text'
                                iHolder='Ingresa nombre de tu complementario'
                                iValue=''
                                iChange=''
                            />
                            <Input
                                iName='studies.studiesTwo'
                                isFor='studiesTwo'
                                iType='text'
                                iHolder='Ingresa nombre de tu complementario'
                                iValue=''
                                iChange=''
                            />
                            <Input
                                iName='studies.studiesThree'
                                isFor='studiesThree'
                                iType='text'
                                iHolder='Ingresa nombre de tu complementario (Opcional)'
                                iValue=''
                                iChange=''
                            />
                            <Input
                                iName='studies.studiesFour'
                                isFor='studiesFour'
                                iType='text'
                                iHolder='Ingresa nombre de tu complementario (Opcional)'
                                iValue=''
                                iChange=''
                            />
                        </div>
                        <Input
                            labelTitle='Experiencia'
                            iName='experience'
                            isFor='experiencie'
                            iType='text'
                            iHolder='Ingresa tu tiempo/nivel de experiencia'
                            iValue=''
                            iChange=''
                        />
                        <div className='mt-10'>
                            <h2 className='text-[#405e7f] font-semibold'>
                                Empresa/Lugar de experiencia
                            </h2>
                            <p className='text-[#405e7f]'>Escribe el nombre del lugar/empresa en la cual adquiriste tus experiencias.
                                <br /> Puedes ingresar varios.</p>
                            <Input
                                iName='companyWork.companyOne'
                                isFor='companyOne'
                                iType='text'
                                iHolder='Ingresa nombre de la empresa o lugar de experiencia'
                                iValue=''
                                iChange=''
                            />
                        </div>
                    </div>
                </form >
            }
        />
    )
}
