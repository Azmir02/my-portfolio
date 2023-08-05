'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Service = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='service-left'>
                        <h4>I <span>Run</span>  Agency <span>Smartly</span> With
                            My <span>Team</span> Member.</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        <motion.button whileHover={{ scale: 1.05 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                            }}>Say Hello</motion.button>
                    </div>
                </div>
                <div className='col-lg-6'></div>
            </div>
        </div>
    )
}

export default Service