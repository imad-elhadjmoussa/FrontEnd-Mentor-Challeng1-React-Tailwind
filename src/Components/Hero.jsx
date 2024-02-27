import React from 'react'
import img1 from './../huddle-landing-page-with-alternating-feature-blocks-master/images/illustration-mockups.svg'
import { motion } from 'framer-motion'

export const Hero = () => {

    const boxVarition = {
        hidden: {
        },
        visible: {

            transition: {
                delay: 3,
                when: 'beforeChildrn',
                staggerChildren: 2,
            }
        }
    }

    const boxChildrenVariton = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 3,
                duration: 2,
            }
        }
    }

    const btnVarition = {
        hidden: {
            x: -1000,
        },
        visible: {
            x: 0,
            transition: {
                delay: 3,
                duration: 1.5,
            }
        }
    }

    const imgVarition = {
        hidden: {
            x: 1200,
        },
        visible: {
            x: 0,
            transition: {
                delay: 3,
                duration: 1.5,
            }
        }
    }


    return (
        <motion.div
            className=' pb-10 px-24 flex flex-col items-center justify-center w-full lg:flex-row   lg:px-10 '
            variants={boxVarition}
            initial='hidden'
            animate='visible'
        >
            <div className='flex flex-col items-center justify-center lg:items-start lg:pr-24'>


                <motion.h2
                    variants={boxChildrenVariton}
                    className=' mt-20 text-dark-text-h font-bold text-3xl text-center lg:text-start'
                >
                    Build The Community Your Fans Will Love
                </motion.h2>
                <motion.p
                    variants={boxChildrenVariton}
                    className='text-center text-dark-text text-xl my-9 lg:text-start lg:my-14 '
                >
                    Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                    Create connections with your users as you engage in genuine discussion.
                </motion.p>
                <motion.button
                    variants={btnVarition}
                    className='py-3 h-14 px-14 mb-14 cursor-pointer bg-pink rounded-full font-bold text-white'
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
                >
                    Get Started For Free
                </motion.button>
            </div>

            <motion.div
                
                variants={imgVarition}
            >
                <img className='' src={img1} alt="" />
            </motion.div>
        </motion.div>
    )
}
