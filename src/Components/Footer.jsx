import React from 'react'
import logo from './../huddle-landing-page-with-alternating-feature-blocks-master/images/logo.svg'
import emailIcon from './../huddle-landing-page-with-alternating-feature-blocks-master/images/icon-email.svg'
import locationIcon from './../huddle-landing-page-with-alternating-feature-blocks-master/images/icon-location.svg'
import phoneIcon from './../huddle-landing-page-with-alternating-feature-blocks-master/images/icon-phone.svg'
import facebookIcon from './../huddle-landing-page-with-alternating-feature-blocks-master/images/facebook-icon.png'
import instgramIcon from './../huddle-landing-page-with-alternating-feature-blocks-master/images/instagram-icon.png'
import twiterIcon from './../huddle-landing-page-with-alternating-feature-blocks-master/images/twitter-icon.png'
import { motion } from 'framer-motion'




export const Footer = () => {

    const information = [
        {
            id: 1,
            icon: locationIcon,
            info: "Algeria Ghardaia",
        },
        {
            id: 2,
            icon: phoneIcon,
            info: "(+312) 99 99 99 99 99",
        },
        {
            id: 3,
            icon: emailIcon,
            info: "exemple@gmail.com",
        }
    ]

    const moreInformation = [
        "About Us",
        "What We Do",
        "FAQ",
        "Career",
        "Blog",
        "Contact Us"
    ]

    const icons = [
        facebookIcon,
        instgramIcon,
        twiterIcon
    ]

    const boxVarition = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                
                delay: 9,
                duration: 2,
                when:'beforeChildren',
                staggerChildren:1,
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
                duration: 2,
                when:'beforeChildren',
                staggerChildren:2,
            }
        }
    }


    return (
        <motion.div
            variants={boxVarition}
            initial='hidden'
            animate='visible'
            className='flex flex-col items-center md:flex-row md:justify-between md:px-20 py-10 w-full  bg-dark-green'>
            <motion.div
                variants={boxChildrenVariton}
            >
                {
                    information.map((ele) => {
                        return (
                            <Info
                                key={ele.id}
                                icon={ele.icon}
                                info={ele.info}
                            />
                        )
                    })
                }
            </motion.div>

            <motion.div
                variants={boxChildrenVariton}

                className='py-5'>
                {
                    moreInformation.map((ele) => {
                        return (
                            <p
                                className='text-white font-bold text-xl pb-3 cursor-pointer'
                                key={ele} > {ele} </p>
                        );
                    })
                }
            </motion.div>
            <motion.div 
                className='flex md:flex-col flex-row '
                variants={boxChildrenVariton}
            >
                

                {
                    icons.map((ele) => {
                        return (
                            <div key={ele} className='cursor-pointer py-3 px-5 text-white' >
                                <img className='w-8 h-8 cursor-pointer  ' src={ele} alt='' />
                            </div>
                        )
                    }

                    )
                }

            </motion.div>

        </motion.div>
    )
}


const Info = ({ info, icon }) => {
    return (
        <div className='flex items-center ' >
            <div className=' cursor-pointer py-3 pr-4'>
                <img src={icon} alt="" />
            </div>
            <p className='cursor-pointer text-lg  text-white font-bold' >
                {info}
            </p>
        </div>
    );
}