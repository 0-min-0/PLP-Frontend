import { useState, useRef, useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { FiSend, FiMessageSquare, FiCopy, FiEdit2, FiCheck, FiX } from 'react-icons/fi'
import { HiOutlineInbox, HiMiniArrowUturnLeft } from 'react-icons/hi2'
import { FaRobot } from 'react-icons/fa'
import { motion } from 'framer-motion'
import styles from '../../Style/AIChatBot.module.css'

export const AIChatBot = () => {
  const location = useLocation()
  const [messages, setMessages] = useState([
    { id: 1, text: '¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?', sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const messagesEndRef = useRef(null)

  const getHomeRoute = () => {
    if (location.pathname.includes('configuraciones-contratista')) {
      return '/inicio-contratista'
    } else if (location.pathname.includes('configuraciones-contratante')) {
      return '/inicio-contratante'
    } else if (location.pathname.includes('configuraciones-empresa')) {
      return '/inicio-empresa'
    }
    return '/'
  }

  const homeRoute = getHomeRoute()
  const isFullscreen = location.pathname === '/chat-bot-ayuda'

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: `Estoy procesando tu mensaje: "${inputValue}". Esto es una simulación de respuesta de IA.`,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botResponse])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const startEditing = (id, text) => {
    setEditingId(id)
    setEditValue(text)
  }

  const saveEdit = (id) => {
    setMessages(prev => prev.map(msg =>
      msg.id === id ? { ...msg, text: editValue } : msg
    ))
    setEditingId(null)
  }

  const cancelEdit = () => {
    setEditingId(null)
  }

  const botMessageVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        duration: 0.3
      }
    }
  }

  return (
    <div className={`${styles.container} ${isFullscreen ? styles.fullscreenContainer : styles.normalContainer
      }`}>
      {/* Header */}
      <div className={`${styles.header} ${isFullscreen ? styles.fullscreenHeader : ''
        }`}>
        <div className='w-full flex justify-between'>
          <div className='flex items-center gap-4'>
            <FaRobot className='text-2xl text-[#60efdb]' />
            <h2 className='text-2xl font-semibold'>Asistente de IA</h2>
          </div>
          <div>
            <NavLink to={homeRoute}>
              <HiMiniArrowUturnLeft className='w-8 h-8 text-white ease-[cubic-bezier(0.4, 0, 0.2, 1)] transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] ml-6' />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Contenedor de mensajes */}
      <div className={`${styles.messagesContainer} ${isFullscreen ? styles.fullscreenMessages : ''
        }`}>
        <div className='space-y-3'>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} items-start gap-2`}
            >
              {message.sender === 'bot' ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={botMessageVariants}
                  className={styles.botMessage}
                >
                  <p className='whitespace-pre-wrap'>{message.text}</p>
                </motion.div>
              ) : (
                <>
                  {editingId === message.id ? (
                    <div className="flex flex-col items-end space-y-2">
                      <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        placeholder='Escribe tu mensaje...'
                        className='w-full bg-white px-4 py-3 pr-12 text-lg text-[#405e7f]/90 rounded-xl border border-[#405e7f]/50 
                        focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent 
                        transition-all duration-500 resize-none'
                        rows={3}
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={() => saveEdit(message.id)}
                          className="px-3 py-1 bg-[#60efdb] text-[#405e7f] rounded-lg text-sm flex items-center gap-1 cursor-pointer"
                        >
                          <FiCheck /> Guardar
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="px-3 py-1 bg-gray-200 text-[#405e7f] rounded-lg text-sm flex items-center gap-1 cursor-pointer"
                        >
                          <FiX /> Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2 group">
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity pt-2">
                        <button
                          onClick={() => handleCopy(message.text, message.id)}
                          className='text-[#405e7f]/70 hover:text-[#405e7f] transition-colors cursor-pointer'
                          title='Copiar'
                        >
                          {copiedId === message.id ? <FiCheck className='text-green-500 w-5 h-5' /> : <FiCopy className='w-5 h-5' />}
                        </button>
                        <button
                          onClick={() => startEditing(message.id, message.text)}
                          className='text-[#405e7f]/70 hover:text-[#405e7f] transition-colors cursor-pointer'
                          title='Editar'
                        >
                          <FiEdit2 className='w-5 h-5' />
                        </button>
                      </div>
                      <div className={styles.userMessage}>
                        <p className='whitespace-pre-wrap'>{message.text}</p>
                      </div>
                    </div>
                  )}
                  {copiedId === message.id && !editingId && (
                    <div className="absolute -top-8 right-0 bg-[#405e7f] text-white text-xs px-2 py-1 rounded-lg">
                      ¡Copiado!
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          {isLoading && (
            <div className='flex justify-start'>
              <div className='bg-[#405e7f] text-white rounded-full px-4 py-3'>
                <div className='flex space-x-2'>
                  <div className='w-2 h-2 rounded-full bg-white animate-bounce'></div>
                  <div className='w-2 h-2 rounded-full bg-white animate-bounce' style={{ animationDelay: '0.2s' }}></div>
                  <div className='w-2 h-2 rounded-full bg-white animate-bounce' style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className={styles.inputArea}>
        <div className='flex items-center space-x-2'>
          <div className='flex-1 relative'>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder='Escribe tu mensaje...'
              className='w-full bg-white px-4 py-3 pr-12 text-lg text-[#405e7f]/90 rounded-xl border border-[#405e7f]/50 
                        focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent 
                        transition-all duration-500 resize-none'
              rows='1'
              disabled={isLoading}
            />
            <FiMessageSquare className='w-6 h-6 absolute right-3 top-4 text-[#405e7f]/40' />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className='bg-[#60efdb] text-[#405e7f] rounded-full p-4 focus:outline-none focus:ring-offset-2 disabled:opacity-50 
                      disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 cursor-pointer ml-2'
          >
            <FiSend className='text-xl' />
          </button>
        </div>
        <p className='text-xs text-[#405e7f]/70 mt-3 text-center'>
          El asistente de IA puede cometer errores. Verifica la información importante.
        </p>
      </div>
    </div>
  )
}