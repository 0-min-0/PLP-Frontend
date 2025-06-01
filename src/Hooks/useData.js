import { useState, useEffect } from 'react'
import { getVacancies, peopleExample } from '../Utils/objectsExample'

export const useData = (dataType) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        let loadedData;
        if (dataType === 'vacancies') {
          loadedData = await getVacancies()
        } else if (dataType === 'people') {
          loadedData = peopleExample
        }
        setData(loadedData)
      } catch (error) {
        console.error('Error loading data:', error)
        setData(dataType === 'vacancies' ? [] : peopleExample)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [dataType])

  return { data, loading }
}