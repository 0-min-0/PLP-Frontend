import { useState } from 'react'

export const Photo = () => {

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
        <div>
            <label
                htmlFor='photo'
                className='text-[#405e7f] font-semibold'
            >
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
                <span className='text-[#405e7f] font-semibold ml-2 mb-1'>
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
                        className='w-24 h-24 mt-4 object-cover border-1 border-[#405e7f]/60 rounded-lg shadow'
                    />
                </div>
            )}
        </div>
    )
}
