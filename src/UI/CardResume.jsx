import React from 'react'
import { Button } from './button'

export const CardResume = ({ formTitle, mainForm, btnCompleted }) => {
    return (
        <div>
            <div className='flex justify-between bg-[#405e7f] text-white rounded-t-xl pl-16 pr-16 py-4'>
                <div>
                    <h2 className='text-lg font-semibold'>
                        {formTitle}
                    </h2>
                    <p>Completa toda la información y al terminar haz click en el botón de completar.</p>
                </div>
                { btnCompleted }
            </div>
            <form action=''  className='w-full flex items-start gap-20 bg-[#f7fffd] px-16 pt-10 pb-16 border-1 border-[#60efdb] rounded-b-xl'>
                { mainForm }
            </form>
        </div>
    )
}
