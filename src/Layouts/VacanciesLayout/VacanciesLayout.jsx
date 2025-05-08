import { useRef, useState } from 'react'
import { Vacancie } from '../../UI/Vacancie'
import { vacanciesExample } from '../../Utils/objectsExample'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

export const VacanciesLayout = () => {
    const containerRef = useRef(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    const scroll = (direction) => {
        const container = containerRef.current
        const scrollAmount = 300

        if (direction === 'left') {
            container.scrollLeft -= scrollAmount
        } else {
            container.scrollLeft += scrollAmount
        }

        checkScrollPosition()
    }

    const checkScrollPosition = () => {
        const container = containerRef.current
        setShowLeftArrow(container.scrollLeft > 0)
        setShowRightArrow(
            container.scrollLeft < container.scrollWidth - container.clientWidth
        )
    }

    return (
        <div className='w-full p-10 relative'>
            <h1 className='text-4xl text-[#405e7f] font-[afacadBold]'>
                ¡Hola, usuario! No te pierdas las vacantes más recientes.
            </h1>
            <div className='relative mt-6 group'>
                <button
                    onClick={() => scroll('left')}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300 ${showLeftArrow
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-90 pointer-events-none'
                        }`}
                >
                    <IoChevronBack className='w-6 h-6 text-[#405e7f]' />
                </button>
                <div className='relative'>
                    <div className='absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#dcfff6] to-transparent z-[5] pointer-events-none rounded-xl' />
                    <div
                        ref={containerRef}
                        onScroll={checkScrollPosition}
                        className='flex overflow-x-auto scroll-smooth space-x-6 p-10 scrollbar-hide bg-[#dcfff6] rounded-xl scrollbar-custom'
                    >
                        {vacanciesExample.map((vacancy) => (
                            <div key={vacancy.id} className='flex-shrink-0 px-2'>
                                <Vacancie
                                    title={vacancy.title}
                                    company={vacancy.company}
                                    location={vacancy.location}
                                    type={vacancy.type}
                                    experience={vacancy.experience}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#dcfff6] to-transparent z-[5] pointer-events-none rounded-xl' />
                </div>
                <button
                    onClick={() => scroll('right')}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300 ${showRightArrow
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-90 pointer-events-none'
                        }`}
                >
                    <IoChevronForward className='w-6 h-6 text-[#405e7f]' />
                </button>
            </div>
        </div>
    )
}