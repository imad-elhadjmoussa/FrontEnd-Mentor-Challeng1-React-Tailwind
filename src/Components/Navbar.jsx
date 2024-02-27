import logo from './../huddle-landing-page-with-alternating-feature-blocks-master/images/logo.svg'
import { motion } from 'framer-motion'

export const Navbar = () => {

    const boxVarition = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition:{
                delay:0.5,
                duration:2,
            }
        }
    }

    return (
        <div
            className='flex justify-between items-center'
        >
            {/* Logo */}
            <motion.div
                variants={boxVarition}
                initial='hidden'
                animate='visible'
            >
                <img className='w-36 h-6 cursor-pointer' src={logo} alt="Huddle" />
            </motion.div>

            {/* Button try for free */}
            <motion.button
                className='font-bold text-dark-text-h  py-2 px-7 rounded-full'
                style={
                    {
                        boxShadow: '0.5px 0.5px 8px 0.5px #DFDEDE'
                    }
                }
                variants={boxVarition}
                initial='hidden'
                animate='visible'
                
            >
                Try It for Free
            </motion.button>

        </div>
    )
}
