import { createContext, useContext, useState } from 'react'

const DataContext = createContext()

export const DataProvider = ({ children }) => {

  const [data, setData] = useState({
    name: '',
    phone: '',
    phoneSec: '',
    email: '',
  })

  const [photo, setPhoto] = useState(null)

  // Función para actualizar los campos de texto
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <DataContext.Provider value={{ data, handleChange, photo, setPhoto }}>
      {children}
    </DataContext.Provider>
  )
}

// 3. Custom hook para usar el contexto
export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData debe usarse dentro de InfoProvider')
  }
  return context
}
