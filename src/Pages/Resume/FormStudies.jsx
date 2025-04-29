import { useState } from 'react'
import { SubForm } from '../../UI/SubForm'
import { Input } from '../../UI/Input'

export const FormStudies = () => {

  const [photoName, setPhotoName] = useState('')
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhotoName(file.name)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      setPhotoName('')
      setPreviewUrl(null)
    }
  }

  return (
    <div className='w-full'>
      <form action=''>
        <div>
          <label
            htmlFor='photo'
            className='text-[#405e7f] font-semibold'
          >
            Foto 3x4
          </label>
          <div className='flex items-center gap-2'>
            <label
              htmlFor='photo'
              className='bg-[#405e7f] text-white font-semibold px-4 py-1 mt-2 rounded-full cursor-pointer 
                        transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95'
            >
              Subir archivo
            </label>
            <span className='text-[#405e7f]/80 font-semibold ml-3 mt-2'>
              {photoName || 'Ningún archivo seleccionado'}
            </span>
          </div>
          <input
            type='file'
            id='photo'
            accept='image/*'
            onChange={handleFileChange}
            className='hidden'
          />
           {previewUrl && (
            <div className='mt-3'>
              <img
                src={previewUrl}
                alt='Vista previa de la foto'
                className='w-20 h-20 object-cover border-1 border-[#405e7f]/60 rounded-lg shadow'
              />
            </div>
          )}
        </div>

        <SubForm
          label='Estudios y complementarios'
          namePrefix='skill'
          maxFields={4}
        />
        <div className='mt-5'>
          <Input
            labelTitle='Experiencia laboral'
            isFor='experience'
            iHolder='Tiempo/nivel de experiencia'
            iName='experience'
            iType='text'
            iValue=''
            padding='px-4 py-1'
          />
        </div>
        <SubForm
          label='Empresa/lugar de experiencia'
          namePrefix='skill'
          maxFields={4}
        />
      </form>
    </div>
  )
}
