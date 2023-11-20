import Link from 'next/link'
import { pageConfig } from '@/config/pageConfig'
import React from 'react'


const Footer = () => {
  return (
    <span className='italic'>Developed by <Link className=' border-b-2 dark:border-white border-black hover:border-none duration-300' href={pageConfig.links.github} target='_blank'>Devkaliper</Link> with ♥</span>
  )
}

export default Footer