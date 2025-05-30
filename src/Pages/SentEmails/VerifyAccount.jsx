import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import plpLogo from '../../assets/images/plpLogo.png'

export const VerifyAccount = () => {
    const [code, setCode] = useState(Array(6).fill(''))
    const [timeLeft, setTimeLeft] = useState(300)
    const inputRefs = useRef([])
    const [activeInput, setActiveInput] = useState(0)

    const handleCodeChange = (index, value) => {
        const newCode = [...code]
        newCode[index] = value.toUpperCase()
        setCode(newCode)

        if (value && index < 5) {
            setActiveInput(index + 1)
            setTimeout(() => {
                inputRefs.current[index + 1].focus()
            }, 150)
        }
    }

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            setActiveInput(index - 1)
            setTimeout(() => {
                inputRefs.current[index - 1].focus()
            }, 150)
        }
    }

    useEffect(() => {
        if (timeLeft <= 0) return
        
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)
        
        return () => clearTimeout(timer)
    }, [timeLeft])

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0')
        const secs = (seconds % 60).toString().padStart(2, '0')
        return `${mins}:${secs}`
    }

    const handleResend = () => {
        setTimeLeft(300)
        setActiveInput(0)
        setCode(Array(6).fill(''))
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }

    return (
        <div>
            <header className='w-[75%] flex items-end justify-between'>
                <img
                    src={plpLogo}
                    alt='Logo PLP'
                    className='w-20 h-23 m-2'
                />
                <h2 className='text-5xl text-[#405e7f] font-[afacadBold]'>
                    Te hemos enviado un correo para verificar tu cuenta
                </h2>
            </header>
            <div className='w-full'>
                <h3 className='text-center text-lg/6 text-[#405e7f] mt-8'>
                    Abre tu aplicación de correo electrónico, abre el correo que te hemos enviado y escribe aquí el código para 
                    <br /> verificar tu cuenta.
                </h3>
                <div className='flex flex-col items-center mt-6 gap-4'>
                    <div className='flex justify-center gap-2 my-40'>
                        {code.map((digit, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 1 }}
                                animate={{ 
                                    scale: activeInput === index ? 1.05 : 1
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <input
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type='text'
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleCodeChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onFocus={() => setActiveInput(index)}
                                    className={`w-14 h-16 text-3xl text-center border-2 rounded-xl focus:outline-none ${
                                        activeInput === index 
                                            ? 'border-[#60efdb] text-[#405e7f]' 
                                            : 'border-[#405e7f] text-[#405e7f]'
                                    }`}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <div className='flex gap-4'>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-[#405e7f] text-white px-6 py-2 rounded-md hover:bg-[#2c4363] transition-colors'
                        >
                            Verificar
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='text-[#405e7f] px-6 py-2 rounded-md border border-[#405e7f] hover:bg-gray-100 transition-colors'
                            onClick={handleResend}
                        >
                            Reenviar correo
                        </motion.button>
                    </div>
                    <motion.span 
                        className='text-[#405e7f]'
                        animate={{
                            color: timeLeft <= 30 ? '#ff0000' : '#405e7f',
                            scale: timeLeft <= 30 ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {formatTime(timeLeft)}
                    </motion.span>
                </div>
            </div>
        </div>
    )
}