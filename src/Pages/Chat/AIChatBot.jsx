import { useChatIA } from '../../Context/ChatIAContext'
import { NavLink } from 'react-router-dom'
import { FiSend, FiMessageSquare, FiCopy, FiEdit2, FiCheck, FiX } from 'react-icons/fi'
import { HiMiniArrowUturnLeft } from 'react-icons/hi2'
import { FaRobot } from 'react-icons/fa'
import { motion } from 'framer-motion'

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
    <div className={`flex flex-col mx-auto bg-white ${isFullscreen
      ? 'w-[70%] h-[80vh] fixed top-0 left-0 right-0 bottom-0 z-[1000] mt-[60px] fullscreen-chat'
      : 'h-[100%] max-h-[600px] rounded-xl medium-chat'
      }`}>
      {/* Header */}
      <div className='header-chat bg-[#405e7f] text-white p-4 flex items-center gap-3 rounded-xl'>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <FaRobot className="text-2xl" />
            <h2 className="text-header-chat text-xl font-semibold">Asistente de IA</h2>
          </div>
          <div>
            <NavLink to={homeRoute}>
              <HiMiniArrowUturnLeft className="routes-icons text-2xl hover:text-[#60efdb] transition-colors" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Contenedor de mensajes */}
      <div className={`chat-container flex-1 my-4 px-4 overflow-y-auto ${isFullscreen
        ? 'h-[calc(100vh-200px)] bg-[#fcfcfc] rounded-[14px] chat-full'
        : 'bg-white/50'
        } scrollbar-custom`}>
        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
            >
              {message.sender === 'bot' ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={botMessageVariants}
                  className="message-bot max-w-[24rem] rounded-xl px-4 py-3 bg-white text-[#405e7f] border border-[#405e7f] break-words whitespace-pre-wrap"
                >
                  <p className='message-text text-lg'>{message.text}</p>
                </motion.div>
              ) : (
                <div className="message-user group relative max-w-[24rem]">
                  {editingId === message.id ? (
                    <div className="flex flex-col items-end gap-2">
                      <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="edit-messages w-full bg-white px-4 py-3 text-lg text-[#405e7f]/90 rounded-xl border border-[#405e7f]/50 outline-none resize-none min-h-[5rem] focus:border-transparent focus:ring-2 focus:ring-[#60efdb] transition-all"
                        rows={3}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => saveEdit(message.id)}
                          className="save-cancel-edit bg-[#60efdb] text-[#405e7f] rounded-md px-3 py-1 text-sm border-none outline-none cursor-pointer flex items-center gap-1"
                        >
                          <FiCheck className='chat-icons w-4 h-4' /> Guardar
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="save-cancel-edit bg-gray-200 text-[#405e7f] rounded-md px-3 py-1 text-sm border-none outline-none cursor-pointer flex items-center gap-1"
                        >
                          <FiX className='chat-icons w-4 h-4' /> Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="container-chat-icons flex gap-2 opacity-0 pt-2 group-hover:opacity-100 transition-opacity absolute right-0 top-0 translate-y-[20px] translate-x-[-180px]">
                        <button
                          onClick={() => handleCopy(message.text, message.id)}
                          className="text-[#405e7f]/70 hover:text-[#405e7f] transition-colors cursor-pointer bg-none border-none outline-none p-0"
                          title="Copiar"
                        >
                          {copiedId === message.id ? <FiCheck className='chat-icons w-4 h-4' /> : <FiCopy className='chat-icons w-4 h-4' />}
                        </button>
                        <button
                          onClick={() => startEditing(message.id, message.text)}
                          className="text-[#405e7f]/70 hover:text-[#405e7f] transition-colors cursor-pointer bg-none border-none outline-none p-0"
                          title="Editar"
                        >
                          <FiEdit2 className='chat-icons w-4 h-4' />
                        </button>
                      </div>
                      <div className="message-bot max-w-[24rem] rounded-xl px-4 py-3 bg-[#60efdb] text-[#405e7f] break-words whitespace-pre-wrap">
                        <p className='message-text text-lg'>{message.text}</p>
                      </div>
                      {copiedId === message.id && (
                        <div className="copied absolute top-[-2rem] right-0 bg-[#405e7f] text-white text-xs px-2 py-1 rounded-md">
                          ¡Copiado!
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="loading bg-[#405e7f] text-white rounded-full px-4 py-3">
                <div className="flex gap-2">
                  <div className="circle w-2 h-2 rounded-full bg-white animate-bounce" />
                  <div className="circle w-2 h-2 rounded-full bg-white animate-bounce delay-200" />
                  <div className="circle w-2 h-2 rounded-full bg-white animate-bounce delay-400" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Área de input */}
      <div className="message-input-container border-t border-[#405e7f]/10 p-4 bg-white">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className="textarea-message w-full bg-white px-4 py-3 text-lg text-[#405e7f]/90 rounded-xl border border-[#405e7f]/50 outline-none resize-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#60efdb] disabled:opacity-50"
              placeholder="Escribe tu mensaje..."
              rows={1}
              disabled={isLoading}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className={`send-button bg-[#60efdb] text-[#405e7f] rounded-full p-4 border-none outline-none cursor-pointer flex items-center justify-center transition-all origin-center ${!inputValue.trim() || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              }`}
          >
            <FiSend className="text-xl" />
          </button>
        </div>
        <p className="footer-chat text-xs text-[#405e7f]/70 text-center mt-3">
          El asistente de IA puede cometer errores. Verifica la información importante.
        </p>
      </div>
    </div>
  )
}