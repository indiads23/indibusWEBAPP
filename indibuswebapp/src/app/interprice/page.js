'use client';
import { ThemeUIProvider } from 'theme-ui';
import theme from '../../../theme/index';
import Banner from '../../sections/banner';
import KeyFeature from '../../sections/key-feature';
import ServiceSection from '../../sections/service-section';
import Feature from '../../sections/feature';
import CoreFeature from '../../sections/core-feature';
import WorkFlow from '../../sections/workflow';
import Package from '../../sections/package';
import TeamSection from '../../sections/team-section';
import TestimonialCard from '../../sections/testimonial';
import BlogSection from '../../sections/blog-section';
import Subscribe from '../../sections/subscribe';

export default function page() {
    return (
        <main>
            <ThemeUIProvider theme={theme}>
                <Banner />
                <KeyFeature />
                <ServiceSection />
                <Feature />
                <CoreFeature />
                <WorkFlow />
                <Package />
                <Subscribe />
            </ThemeUIProvider>
        </main>
    );
}
