import React from 'react'
import { Avatar } from '../../../Components/Avatar/Avatar'
import { SearchBar } from '../../../UI/SearchBar'

export const GeneralJobSeeker = () => {
  return (
    <>
      <Avatar />
      <div className='max-w-5xl mx-auto mt-8'>
        <SearchBar />
        <h2 className='text-3xl mb-4 mt-6 font-[afacadBold] text-[#405e7f]'>
          General
        </h2>
      </div>
      <div>
        
      </div>
    </>
  )
}

