import { useState, useRef, useEffect } from 'react';
import { FiSend, FiMessageSquare } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';

export const AIChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: '¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot response (in a real app, you would call an API here)
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: `Estoy procesando tu mensaje: "${inputValue}". Esto es una simulación de respuesta de IA.`, 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-[#405e7f]/20">
      {/* Chat header */}
      <div className="bg-[#405e7f] text-white p-4 flex items-center space-x-3">
        <FaRobot className="text-2xl text-[#60efdb]" />
        <h2 className="text-xl font-semibold">Asistente de IA</h2>
      </div>
      
      {/* Messages container */}
      <div className="flex-1 p-4 overflow-y-auto scrollbar-custom bg-gray-50">
        <div className="space-y-3">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs md:max-w-md lg:max-w-lg rounded-xl px-4 py-3 ${message.sender === 'user' 
                  ? 'bg-[#60efdb] text-[#405e7f]' 
                  : 'bg-[#405e7f] text-white'}`}
              >
                <p className="whitespace-pre-wrap">{message.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#405e7f] text-white rounded-full px-4 py-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Input area */}
      <div className="border-t border-[#405e7f]/10 p-4 bg-white">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="w-full bg-white px-4 py-3 pr-12 text-lg text-[#405e7f]/90 rounded-xl border border-[#405e7f]/50 
                        focus:outline-none focus:ring-2 focus:ring-[#60efdb] focus:border-transparent 
                        transition-all duration-500 resize-none"
              rows="1"
              disabled={isLoading}
            />
            <FiMessageSquare className="absolute right-3 top-3.5 text-[#405e7f]/50" />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="bg-[#60efdb] text-[#405e7f] rounded-full p-3 hover:bg-[#50dfcb] focus:outline-none focus:ring-offset-2 disabled:opacity-50 
                      disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            <FiSend className="text-xl" />
          </button>
        </div>
        <p className="text-xs text-[#405e7f]/70 mt-2 text-center">
          El asistente de IA puede cometer errores. Verifica la información importante.
        </p>
      </div>
    </div>
  )
}
