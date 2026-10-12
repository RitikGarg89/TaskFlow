import React from 'react'
import HeroSection from '../Components/HeroSection'
import FeatureSection from '../Components/FeatureSection'
import WhyChooseSection from '../Components/WhyChooseSection'

function Visitor() {
    return (
        <div className='w-[1440px] flex flex-col gap-32 mx-auto my-10'>
            <HeroSection />
            <FeatureSection />
            <WhyChooseSection />
        </div>
    )
}

export default Visitor