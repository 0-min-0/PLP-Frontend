import React from 'react'
import { MagnifyingGlassIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const iconMap = {
  search: <MagnifyingGlassIcon className="h-12 w-12 text-gray-400" />,
  warning: <ExclamationTriangleIcon className="h-12 w-12 text-yellow-400" />
}

export const EmptyState = ({
  title = 'Sin resultados',
  description = 'No se encontraron elementos coincidentes.',
  icon = 'search',
  children
}) => {
  return (
    <div className="text-center px-4 py-12 border border-dashed border-gray-300 rounded-xl bg-white shadow-sm">
      <div className="flex justify-center mb-4">
        {iconMap[icon] || iconMap.search}
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
