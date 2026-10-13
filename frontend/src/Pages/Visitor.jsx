
import React from 'react';
import HeroSection from '../Components/HeroSection';
import FeatureSection from '../Components/FeatureSection';
import WhyChooseSection from '../Components/WhyChooseSection';

function Visitor() {
    return (
        <div className="mx-auto my-6 flex w-full min-w-0 max-w-[1440px] flex-col gap-16 px-4 sm:my-8 sm:gap-20 sm:px-6 lg:my-10 lg:gap-32 lg:px-8">
            <HeroSection />
            <FeatureSection />
            <WhyChooseSection />
        </div>
    );
}

export default Visitor;
