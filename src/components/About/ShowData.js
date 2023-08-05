import React from 'react'
import { motion } from 'framer-motion'
import { DM_Sans } from 'next/font/google';

const DmSans = DM_Sans({
    subsets: ["latin"],
    weight: "400"
});

const ShowData = ({ title, para, btn }) => {
    return (
        <motion.div
            initial={{
                x: 200,
            }}
            animate={{
                x: 0
            }}

            className='showData'>
            <h3 className={DmSans.className}>{title}</h3>
            <p className={DmSans.className}>{para}</p>
            <motion.button whileHover={{ scale: 1.05 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                }} className={DmSans.className}>{btn}
            </motion.button>
        </motion.div>
    )
}

export default ShowData