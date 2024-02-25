import { motion } from 'framer-motion'
import React from 'react'

export const Card = ({ img, header, text, id }) => {

    return (
        <motion.div
            className='bg-white rounded-xl cursor-pointer md:justify-between shadow-xl border border-gray-100 p-10 my-10 flex flex-col items-center  lg:flex-row-reverse  '
            initial={
                {
                    x: id % 2 === 0 ? 1300 : -1300,
                }
            }
            animate={
                {
                    x: 0,
                    transition:{
                        delay:4,
                        duration:2,
                    }
                }
            }
            whileHover={
                {
                    scale:1.03,
                    transition:{
                        duration:0.4,
                    }
                }
            }
            
            
        >
            <div
                className=''
            >
                <img className='w-72 h-52  md:w-96' src={img} alt={header} />
            </div>
            <div className='  flex flex-col  items-center lg:items-start lg:pr-48' >

                <h1 className='text-3xl text-dark-text-h my-5 font-bold' >
                    {header}
                </h1>
                <p className='text-center text-dark-text lg:text-start ' >
                    {text}
                </p>
            </div>
        </motion.div>
    )
}
