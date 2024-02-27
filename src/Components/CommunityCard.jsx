import React from 'react'
import { motion } from 'framer-motion'
export const CommunityCard = () => {
    return (
        <div className=' absolute -top-24 z-30 flex shadow-lg rounded-lg flex-col items-center  justify-between p-10 ' >
            <h2
                className='text-2xl mb-10 font-bold text-dark-text'
            >
                Ready To Build Your Community?
            </h2>
            <motion.button
                whileHover={
                    {
                        backgroundColor:'white',
                        color:'#FE52C0',
                        border:'3px solid #FE52C0',
                        transition:{
                            duration:0.25,
                        }
                    }
                }
                className='bg-pink h-14 py-3 px-8 text-white font-bold rounded-full' >
                Get Started For Free
            </motion.button>
        </div>
    )
}
