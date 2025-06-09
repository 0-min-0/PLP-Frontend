import React from 'react'
import job from '../../assets/images/job.png'
import job2 from '../../assets/images/job-2.png'
import job3 from '../../assets/images/job-3.png'
import { Button } from '../../UI/button'
import { NavLink } from 'react-router-dom'


export const MainAboutUs = () => {

    const imgStyle = 'w-100 h-100 rounded-xl object-cover'

    return (
        <div className='bg-[#dcfff6] px-24 py-16'>
            <div className='flex flex-col items-center bg-white p-10 rounded-xl'>
                <h2 className='text-5xl font-[afacadBold] text-[#405e7f] mb-6'>
                    Nosotros
                </h2>
                <div className='flex flex-col items-center'>
                    <div className='text-center'>
                        <p className='text-lg text-[#405e7f]'>PLP (Plataforma Laboral Proactiva) es una solución para personas con habilidades y experiencia que no tienen un título profesional. La plataforma les
                            <br /> permite publicar su perfil y ser vistos por empresas y emprendedores que buscan talento, brindándoles oportunidades laborales dignas sin necesidad
                            <br /> de un título. A su vez, estas empresas y emprendedores pueden publicar sus vacantes para que puedan ser vistas por aquellos que buscan un empleo.</p>
                    </div>
                    <div className='flex py-10 gap-8'>
                        <img
                            src={job}
                            alt='Trabajo 1'
                            className={imgStyle}
                        />
                        <img
                            src={job2}
                            alt='Trabajo 2'
                            className={imgStyle}
                        />
                        <img
                            src={job3}
                            alt='Trabajo 3'
                            className={imgStyle}
                        />
                    </div>
                    <NavLink to='/sobre-plp' className='w-full flex flex-col items-center'>
                        <Button
                            btnName='Leer más'
                            btnType='submit'
                            btnStyle='w-[30%] text-lg text-[#405e7f] bg-[#60efdb]'
                        />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}


