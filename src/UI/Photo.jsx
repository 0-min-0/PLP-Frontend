import { useState, forwardRef, useImperativeHandle } from 'react'

export const Photo = forwardRef((props, ref) => {
    const [photoName, setPhotoName] = useState('')
    const [previewUrl, setPreviewUrl] = useState(null)
    const [error, setError] = useState('')

    const MAX_SIZE = 1 * 1024 * 1024 // 1 MB
    const ASPECT_RATIO = 3 / 4
    const ALLOWED_MARGIN = 0.1

    const handleFileChange = (e) => {
        const file = e.target.files?.[0]
        setError('')
        if (!file) return

        // Validar tamaño
        if (file.size > MAX_SIZE) {
            setError('ⓘ El archivo es muy pesado. Máximo 1MB.')
            setPhotoName('')
            setPreviewUrl(null)
            return
        }

        const img = new Image()
        img.onload = () => {
            const ratio = img.width / img.height
            if (
                ratio < ASPECT_RATIO - ALLOWED_MARGIN ||
                ratio > ASPECT_RATIO + ALLOWED_MARGIN
            ) {
                setError('ⓘ La imagen no tiene proporción 3x4. Usa una foto tipo documento.')
                setPhotoName('')
                setPreviewUrl(null)
            } else {
                setPhotoName(file.name)
                const reader = new FileReader()
                reader.onloadend = () => {
                    setPreviewUrl(reader.result)
                }
                reader.readAsDataURL(file)
            }
        }

        img.onerror = () => {
            setError('ⓘ No se pudo leer la imagen. Intenta con otro archivo.')
        }

        img.src = URL.createObjectURL(file)
    }

    // Esto permite que el componente padre (FormData) invoque validatePhoto()
    useImperativeHandle(ref, () => ({
        validatePhoto: () => {
            if (!previewUrl) {
                setError('ⓘ La foto es requerida')
                return false
            }
            return true
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
                <span className={`ml-2 mb-1 font-semibold ${error ? 'text-red-400' : 'text-[#405e7f]'}`}>
                    {error || photoName || 'Ningún archivo seleccionado'}
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
