import React, { useState } from 'react'
import { AboutData } from '@/data/AboutData'
import { DM_Sans } from 'next/font/google';
import { motion } from 'framer-motion'
import ShowData from './ShowData';

const DmSans = DM_Sans({
    subsets: ["latin"],
    weight: "400"
});

const AboutBottom = () => {

    const [active, setActive] = useState(0)

    const handleActive = (i) => {
        setActive(i)
    }
    return (
        <div className='about-item'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='row row-gap-4'>
                        {
                            AboutData.map((item, i) => (
                                <>
                                    <motion.div className='col-lg-6' whileHover={{ scale: 1.05 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                        onClick={() => handleActive(i)}
                                    >
                                        <div className='about-box'>
                                            <h4 className={DmSans.className}>{item.heading}</h4>
                                            <p className={DmSans.className}>{item.paragraph}</p>
                                        </div>
                                    </motion.div>

                                </>
                            ))
                        }
                    </div>
                </div>
                <div className='col-lg-5 ms-auto'>
                    <div className='right-inner-about'>
                        {
                            active == 0 && <ShowData title="Get So Many Awards In 5 years" para="There are many variations of passages of Lorem Ipsum available, but the majority." btn="Visit Now" />
                        }
                        {
                            active == 1 && <ShowData title="Get So Many Awards In 4 years" para="There are many variations of passages of Lorem Ipsum available, but the majority." btn="Visit Now" />
                        }
                        {
                            active == 2 && <ShowData title="Get So Many Awards In 8 years" para="There are many variations of passages of Lorem Ipsum available, but the majority." btn="Visit Now" />
                        }
                        {
                            active == 3 && <ShowData title="Get So Many Awards In 7 years" para="There are many variations of passages of Lorem Ipsum available, but the majority." btn="Visit Now" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBottom