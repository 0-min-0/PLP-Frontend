import { createContext, useState, useRef, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'

export const ChatIAContext = createContext()

export const ChatIAProvider = ({ children }) => {
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
        const path = location.pathname

        if (path.includes('contratista')) {
            return '/inicio-contratista'
        } else if (path.includes('contratante')) {
            return '/inicio-contratante'
        } else if (path.includes('empresa')) {
            return '/inicio-empresa'
        }
        return '/'
    }

    const homeRoute = getHomeRoute()
    const isFullscreen = location.pathname.includes('/chat-bot-ayuda')

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
        const editedMessage = { id, text: editValue, sender: 'user' }

        setMessages(prev => {
            const withoutEdited = prev.filter(msg => msg.id !== id)
            return [...withoutEdited, editedMessage]
        })

        setEditingId(null)
        setIsLoading(true)

        setTimeout(() => {
            const botResponse = {
                id: Date.now(),
                text: `Estoy procesando tu mensaje editado: "${editValue}". Esto es una simulación de respuesta de IA.`,
                sender: 'bot'
            }
            setMessages(prev => [...prev, botResponse])
            setIsLoading(false)
        }, 1500)
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
        <ChatIAContext.Provider value={{
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
            setEditValue,
            handleSendMessage,
            handleKeyPress,
            handleCopy,
            startEditing,
            saveEdit,
            cancelEdit
        }}>
            {children}
        </ChatIAContext.Provider>
    )
}

export const useChatIA = () => {
    return useContext(ChatIAContext)
}