import { useChatIA } from '../../Context/ChatIAContext'
import { NavLink } from 'react-router-dom'
import { FiSend, FiMessageSquare, FiCopy, FiEdit2, FiCheck, FiX } from 'react-icons/fi'
import { HiMiniArrowUturnLeft } from 'react-icons/hi2'
import { FaRobot } from 'react-icons/fa'
import { motion } from 'framer-motion'
import styles from '../../Style/AIChatBot.module.css'

export const AIChatBot = () => {
  const {
    messages,
    inputValue,
    isLoading,
    copiedId,
    editingId,
    editValue,
    messagesEndRef,
    homeRoute,
    isFullscreen,
    botMessageVariants,
    setInputValue,
    handleSendMessage,
    handleKeyPress,
    handleCopy,
    startEditing,
    saveEdit,
    cancelEdit,
    setEditValue
  } = useChatIA()

  return (
    <div className={`${styles.container} ${isFullscreen ? styles.fullscreenContainer : styles.normalContainer}`}>
      {/* Header */}
      <div className={`${styles.header} ${isFullscreen ? styles.fullscreenHeader : ''}`}>
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
      <div className={`${styles.messagesContainer} scrollbar-custom ${isFullscreen ? styles.fullscreenMessages : ''}`}>
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