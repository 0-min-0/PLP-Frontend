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
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <FaRobot className={styles.botIcon} />
            <h2 className={styles.headerTitle}>Asistente de IA</h2>
          </div>
          <div className={styles.headerRight}>
            <NavLink to={homeRoute}>
              <HiMiniArrowUturnLeft className={styles.backIcon} />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Contenedor de mensajes */}
      <div className={`${styles.messagesContainer} ${styles.scrollbarCustom} ${isFullscreen ? styles.fullscreenMessages : ''}`}>
        <div className={styles.messagesWrapper}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.messageWrapper} ${
                message.sender === 'user' ? styles.userMessageWrapper : styles.botMessageWrapper
              }`}
            >
              {message.sender === 'bot' ? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={botMessageVariants}
                  className={styles.botMessage}
                >
                  <p>{message.text}</p>
                </motion.div>
              ) : (
                <div className={styles.messageGroup}>
                  {editingId === message.id ? (
                    <div className={styles.editContainer}>
                      <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className={styles.editTextarea}
                        rows={3}
                      />
                      <div className={styles.editButtons}>
                        <button
                          onClick={() => saveEdit(message.id)}
                          className={styles.editConfirmButton}
                        >
                          <FiCheck /> Guardar
                        </button>
                        <button
                          onClick={cancelEdit}
                          className={styles.editCancelButton}
                        >
                          <FiX /> Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className={styles.actionButtons}>
                        <button
                          onClick={() => handleCopy(message.text, message.id)}
                          className={styles.actionButton}
                          title="Copiar"
                        >
                          {copiedId === message.id ? <FiCheck /> : <FiCopy />}
                        </button>
                        <button
                          onClick={() => startEditing(message.id, message.text)}
                          className={styles.actionButton}
                          title="Editar"
                        >
                          <FiEdit2 />
                        </button>
                      </div>
                      <div className={styles.userMessage}>
                        <p>{message.text}</p>
                      </div>
                      {copiedId === message.id && (
                        <div className={styles.tooltip}>¡Copiado!</div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingBubble}>
                <div className={styles.loadingDots}>
                  <div className={`${styles.loadingDot} ${styles.bounceAnimation}`} />
                  <div className={`${styles.loadingDot} ${styles.delay200}`} />
                  <div className={`${styles.loadingDot} ${styles.delay400}`} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Área de input */}
      <div className={styles.inputArea}>
        <div className={styles.inputContainer}>
          <div className={styles.textareaWrapper}>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              className={styles.textarea}
              placeholder="Escribe tu mensaje..."
              rows={1}
              disabled={isLoading}
            />
            <FiMessageSquare className={styles.textareaIcon} />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className={styles.sendButton}
          >
            <FiSend className={styles.sendIcon} />
          </button>
        </div>
        <p className={styles.footerText}>
          El asistente de IA puede cometer errores. Verifica la información importante.
        </p>
      </div>
    </div>
  )
}