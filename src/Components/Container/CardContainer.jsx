import { useRef, useState } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

export const CardContainer = ({
  title,
  items = [],
  rounded = 'none',
  ItemComponent
}) => {

  const containerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction) => {
    const container = containerRef.current
    const scrollAmount = 300;
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount
    checkScrollPosition()
  }

  const checkScrollPosition = () => {
    const container = containerRef.current
    setShowLeftArrow(container.scrollLeft > 0)
    setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth)
  }

  const getRoundedClass = () => {
    switch (rounded) {
      case 'top': return 'rounded-t-xl';
      case 'bottom': return 'rounded-b-xl';
      case 'both': return 'rounded-xl';
      case 'top-right': return 'rounded-tr-xl';
      default: return '';
    }
  };

  return (
    <div className={`jobs-main-container mx-10 relative border-2 border-[#60efdb] ${getRoundedClass()}`}>
      <h2 className='jobs-subcontainer text-2xl px-12 py-5 font-semibold text-[color:var(--color-card-text)]'>{title}</h2>
      <div className='relative group'>
        <button
          onClick={() => scroll('left')}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300 ${showLeftArrow ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
        >
          <IoChevronBack className='w-6 h-6 text-[#405e7f]' />
        </button>

        <div className='relative'>
          <div
            className={`absolute left-0 top-0 h-full w-20 z-[5] pointer-events-none
              ${rounded === 'top' ? '' : ''}
              ${rounded === 'top-right' ? 'rounded-tr-xl' : ''}
              ${rounded === 'bottom' ? 'rounded-b-xl' : ''}
            `}
            style={{
              background: 'linear-gradient(to right, var(--color-dark-secundary), transparent)'
            }}
          />

          <div
            ref={containerRef}
            onScroll={checkScrollPosition}
            className='scroll-container flex overflow-x-auto scroll-smooth space-x-6 px-10 pb-10 scrollbar-hide scrollbar-custom'
          >
            {items.map((item) => (
              <div key={item.id} className='flex-shrink-0 px-2'>
                <ItemComponent {...item} />
              </div>
            ))}
          </div>

          <div
            className={`absolute right-0 top-0 h-full w-20 z-[5] pointer-events-none ${rounded === 'bottom' ? '' : ''
              }`}
            style={{
              background: 'linear-gradient(to left, var(--color-dark-secundary), transparent)'
            }}
          />
        </div>

        <button
          onClick={() => scroll('right')}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300 ${showRightArrow ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
        >
          <IoChevronForward className='w-6 h-6 text-[#405e7f]' />
        </button>
      </div>
    </div>
  )
}