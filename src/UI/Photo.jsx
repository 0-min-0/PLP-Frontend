import { useState, forwardRef, useImperativeHandle } from 'react'
import { useData } from '../Context/DataContext'

export const Photo = forwardRef(({ onPhotoChange }, ref) => {
  const { 
    photoError, 
    validatePhoto, 
    clearPhoto, 
    setPhotoError 
} = useData()

  const [photoName, setPhotoName] = useState('')
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0]
    setPhotoName(file?.name || '')
    setPreviewUrl(null)
    
    if (!file) {
      clearPhoto()
      return
    }

    const isValid = await validatePhoto(file)
    if (isValid) {
      const reader = new FileReader()
      reader.onloadend = () => setPreviewUrl(reader.result)
      reader.readAsDataURL(file)
      if (onPhotoChange) onPhotoChange(file)
    }
  }

  useImperativeHandle(ref, () => ({
    validatePhoto: () => {
      if (!previewUrl) {
        setPhotoError('ⓘ La foto es requerida')
        return false
      }
      return true
    },
    clearPhoto: () => {
      setPhotoName('')
      setPreviewUrl(null)
      clearPhoto()
    }
  }))

  return (
    <div>
      <label htmlFor='photo' className='text-[#405e7f] font-semibold'>
        Foto 3x4
      </label>
      <div className='flex items-center gap-2 mt-2'>
        <label
          htmlFor='photo'
          className='bg-[#405e7f] text-white font-semibold px-4 py-1 rounded-full 
                     cursor-pointer transition-all duration-300 ease-in-out
                     transform hover:scale-105 active:scale-95'
        >
          Subir archivo
        </label>
        <span className={`ml-2 mb-1 text-sm ${photoError ? 'text-red-400' : 'text-[#405e7f]'}`}>
          {photoError || photoName || 'Ningún archivo seleccionado'}
        </span>
      </div>
      <input
        type='file'
        id='photo'
        accept='image/*'
        onChange={handleFileChange}
        className='hidden'
      />
      <div className='mt-3 w-24 h-24 border-2 border-dashed border-[#405e7f]/30 rounded-lg flex items-center justify-center overflow-hidden'>
        {previewUrl ? (
          <img
            src={previewUrl}
            alt='Vista previa de la foto'
            className='w-full h-full object-cover'
          />
        ) : (
          <span className='text-xs text-[#405e7f]/60'>Sin imagen</span>
        )}
      </div>
    </div>
  )
})