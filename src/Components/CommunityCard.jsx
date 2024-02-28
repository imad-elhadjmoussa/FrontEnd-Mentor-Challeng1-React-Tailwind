import React from 'react'
import { motion } from 'framer-motion'
export const CommunityCard = () => {
    const boxVarition={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
                delay:7,
                duration:2,
            }
        }
    }
    return (
        <motion.div
            variants={boxVarition}
            initial='hidden'
            animate='visible'
            className=' flex  shadow-2xl mb-20 md:px-10 md:py-16 px-5 py-8 rounded-lg flex-col items-center  justify-between  ' >
            <h2
                className='text-2xl mb-10 font-bold text-dark-text'
            >
                Ready To Build Your Community?
            </h2>
            <motion.button
                whileHover={
                    {
                        backgroundColor: 'white',
                        color: '#FE52C0',
                        border: '3px solid #FE52C0',
                        transition: {
                            duration: 0.25,
                        }
                    }
                }
                className='bg-pink h-14 py-3 px-8 text-white font-bold rounded-full' >
                Get Started For Free
            </motion.button>
        </motion.div>
    )
}
