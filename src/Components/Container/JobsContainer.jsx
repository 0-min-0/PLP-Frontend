import { useRef, useState } from 'react';
import { Vacancie } from '../../UI/Vacancy/Vacancie';
import { Person } from '../../UI/Person/Person';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export const JobsContainer = ({
  title,
  vacancies = [],
  people = [],
  rounded = 'none',
  onShowDetails,
  onShowResume
}) => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = 300;
    container.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    checkScrollPosition();
  };

  const checkScrollPosition = () => {
    const container = containerRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
  };

  const getRoundedClass = () => {
    switch (rounded) {
      case 'top': return 'rounded-t-xl';
      case 'bottom': return 'rounded-b-xl';
      case 'both': return 'rounded-xl';
      case 'top-right': return 'rounded-tr-xl';
      default: return '';
    }
  };

  const mixedItems = [];
  const maxLength = Math.max(vacancies.length, people.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < vacancies.length) {
      mixedItems.push({
        type: 'vacancy',
        data: {
          ...vacancies[i],
          onShowDetails: () => onShowDetails(vacancies[i])
        }
      });
    }

    if (i < people.length) {
      mixedItems.push({
        type: 'person',
        data: {
          ...people[i],
          onShowResume: () => onShowResume(people[i])
        }
      });
    }
  }

  return (
    <div className={`mx-10 relative bg-[#dcfff6] ${getRoundedClass()}`}>
      <h2 className='text-2xl px-12 py-5 font-semibold text-[#405e7f]'>{title}</h2>
      <div className='relative group'>
        <button
          onClick={() => scroll('left')}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300 ${
            showLeftArrow ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <IoChevronBack className='w-6 h-6 text-[#405e7f]' />
        </button>

        <div className='relative'>
          <div className={`absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#dcfff6] to-transparent z-[5] pointer-events-none 
            ${rounded === 'top' ? 'rounded-t-xl' : ''}
            ${rounded === 'top-right' ? 'rounded-tr-xl' : ''}
            ${rounded === 'bottom' ? 'rounded-b-xl' : ''}
          `} />

          <div
            ref={containerRef}
            onScroll={checkScrollPosition}
            className='flex overflow-x-auto scroll-smooth space-x-6 px-10 pb-10 scrollbar-hide scrollbar-custom'
          >
            {mixedItems.map((item, index) => (
              <div key={`${item.type}-${item.data.id || index}`} className='flex-shrink-0 px-2'>
                {item.type === 'vacancy' ? (
                  <Vacancie {...item.data} />
                ) : (
                  <Person {...item.data} />
                )}
              </div>
            ))}
          </div>

          <div className={`absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#dcfff6] to-transparent z-[5] pointer-events-none ${
            rounded === 'bottom' ? 'rounded-b-xl' : ''
          }`} />
        </div>

        <button
          onClick={() => scroll('right')}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300 ${
            showRightArrow ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
          }`}
        >
          <IoChevronForward className='w-6 h-6 text-[#405e7f]' />
        </button>
      </div>
    </div>
  );
};