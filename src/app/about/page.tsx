'use client'
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next'
import Link from 'next/link'

import { Facebook, Linkedin, Instagram } from 'lucide-react'
import Navbar2 from '@/components/navbar2/navbar2';
import BannerSection from '@/components/bannerSection/banner';
import HeroSection from '@/components/heroSection/heroSec';
import AboutHeroSection from '@/components/aboutHeroSection/hero';


interface Props {}


const About: NextPage<Props> = ({}) => {

  return (
    <>
    <Navbar2 />
    <BannerSection />
    <AboutHeroSection />
            
    </>
  )
}

export default About