import React from 'react'
import Navbar from '../Navbar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

function Hero() {
    return (
        <HeroContainer>
                <Navbar />
                    <HeroContent>
                            <HeroItems>
                                <HeroH1>Shrimply the best</HeroH1>
                                <HeroP>Let the good times roll</HeroP>
                                <HeroBtn>Zamów</HeroBtn>
                            </HeroItems>
                    </HeroContent>
        </HeroContainer>
    )
}

export default Hero
