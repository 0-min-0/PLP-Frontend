import React from 'react'
import { motion } from 'framer-motion'
import { PersonalInfo } from './PersonalInfo'
import { Security } from './Security'
import { Preferences } from './Preferences'
import { useSettings } from '../../Context/SettingsContext'
import { Avatar } from '../../Components/Avatar/Avatar'
import { SearchBar } from '../../UI/SearchBar'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

export const GeneralSettings = () => {
  const { user } = useSettings()

  return (
    <>
      <Avatar user={user} />
      <div className='max-w-5xl mx-auto'>
        <div className='mt-8 mb-4'>
          <SearchBar />
        </div>
        <h2 className='text-3xl font-[afacadBold] text-[#405e7f] mb-4'>
          General
        </h2>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto h-85 bg-white rounded-xl space-y-6 max-h-[400px] overflow-y-auto scrollbar-custom"
      >
        <PersonalInfo />
        <hr className="border-gray-200 mr-8" />
        <Security />
        <hr className="border-gray-200 mr-8" />
        <Preferences />
      </motion.div>
    </>
  )
}