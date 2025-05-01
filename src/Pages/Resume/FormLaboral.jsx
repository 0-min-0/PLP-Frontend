import React from 'react'
import { CardResume } from '../../UI/CardResume'
import { Input } from '../../UI/Input'
import { useInfo } from '../../Context/InfoContext'

export const FormLaboral = () => {

    const { info, handleChange } = useInfo()

    return (
        <CardResume
            formTitle='Información Laboral'
            mainForm={
                <div>
                    <Input
                        iName='technicalOne'
                        isFor='technicalTwo'
                        iType='text'
                        iHolder='Ej. '
                        iValue={info.tSkillOne}
                        iChange={handleChange}
                    />
                </div>
            }
        />
    )
}
