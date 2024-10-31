import Link from 'next/link'
import React from 'react'
import instagram from '@/public/icons8-instagram.svg'
import whatsapp from '@/public/icons8-whatsapp.svg'
import youtube from '@/public/icons8-youtube.svg'
import twitterx from '@/public/icons8-twitterx.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className=' bg-main-10 py-8 '>
        <p className=' text-primary-10 text-center font-semibold'>Get In Touch</p>
        <div className=' flex items-center justify-center gap-4 my-3'>
            <Link href={''}>
            <Image src={whatsapp} alt='whatsapp' className=' w-10 h-10'/></Link>
            <Link href={''}>  <Image src={instagram} alt='instagram' className=' w-10 h-10'/></Link>
            <Link href={''}>  <Image src={twitterx} alt='twitterx' className=' w-10 h-10'/></Link>
            <Link href={''}>  <Image src={whatsapp} alt='whatsapp' className=' w-10 h-10'/></Link>
        </div>
        <p className=' text-center'>© Copyright 2024. All Rights Reserved. | Privacy Policy | Disclaimer</p>
    </footer>
  )
}
