import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiChevronDown, FiX } from 'react-icons/fi'
import { comments } from '../../../Utils/objectsExample' 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

export const Comments = () => {
  const [selectedComment, setSelectedComment] = useState(null)
  const [expandedComments, setExpandedComments] = useState({})

  const toggleExpand = (id) => {
    setExpandedComments(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  return (
    <div className='max-w-5xl mx-auto'>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className='mt-6'
      >
        <h2 className='text-3xl font-[afacadBold] text-[#405e7f] mb-4'>
          Comentarios
        </h2>
        
        {comments.length > 0 ? (
          <div className='w-full max-h-[500px] overflow-y-auto scrollbar-custom pr-4 space-y-4'>
            {comments.map((comment, index) => (
              <motion.div
                key={index}
                className='border-2 border-[#60efdb] rounded-xl p-6 cursor-pointer'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedComment(comment)}
              >
                <div className='flex justify-between items-start'>
                  <div className='w-full'>
                    <div className='flex justify-between items-center'>
                      <h3 className='font-bold text-lg text-[#405e7f]'>
                        {comment.name} <span className='font-normal text-sm'>({comment.role})</span>
                      </h3>
                      <span className='text-gray-500 text-sm'>
                        {formatDate(comment.date)}
                      </span>
                    </div>
                    
                    <div className='mt-3'>
                      <p className={`text-gray-600 ${!expandedComments[index] ? 'line-clamp-1' : ''}`}>
                        {comment.coment}
                      </p>
                      {comment.coment.length > 100 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleExpand(index)
                          }}
                          className='text-[#60efdb] hover:text-[#405e7f] text-md mt-1 flex items-center font-semibold'
                        >
                          {expandedComments[index] ? 'Ver menos' : 'Ver más'}
                          <FiChevronDown className={`ml-1 transition-transform ${expandedComments[index] ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.p 
            className='text-gray-500 py-8 text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No hay comentarios aún
          </motion.p>
        )}
      </motion.div>
      
      <AnimatePresence>
        {selectedComment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'
            onClick={() => setSelectedComment(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className='bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className='font-bold text-xl text-[#405e7f]'>
                  {selectedComment.name} <span className='font-normal text-base'>({selectedComment.role})</span>
                </h3>
                <button
                  onClick={() => setSelectedComment(null)}
                  className='p-1 text-gray-500 rounded-md hover:bg-gray-50 cursor-pointer'
                >
                  <FiX className='w-5 h-5' />
                </button>
              </div>
              <p className='text-gray-600 mb-2'>{formatDate(selectedComment.date)}</p>
              <p className='text-gray-700 mt-4'>{selectedComment.coment}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}