import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { LuDownload } from 'react-icons/lu'
import { motion } from 'framer-motion'

const Card = ({data, refrence}) => {
  return (
    <>
          <motion.div drag dragConstraints={refrence} whileDrag={{ scale: 1.1 }} dragElastic={0.2} dragTransition={{bounceStiffness: 200, bounceDamping: 10}} className='w-60 h-72 flex-shrink-0 relative rounded-3xl overflow-hidden bg-zinc-900/90 text-white px-8 py-10'>
              <FaRegFileAlt />
              <p className='text-sm font-semibold leading-tight mt-5'>{data.desc}</p>
              <div className='footer absolute bottom-0 w-full left-0'>
                  <div className='flex items-center justify-between px-8 mb-5'>
                      <h5>{data.fileSize}</h5>
                      <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                          {data.icon ? <IoClose /> : <LuDownload size=".7em" color='#fff' />}
                      </span>
                  </div>

                  {data.tag.isOpen && (
                      <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-400" : "bg-green-400"} flex items-center justify-center`}>
                          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                      </div>
                  )}
              </div>
          </motion.div>
    </>
  )
}

export default Card