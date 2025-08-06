'use client'

import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { VisionSection } from '@/components/sections/VisionSection'

export default function Home() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50'>
			<Navigation />
			<HeroSection />
			<FeaturesSection />
			<AboutSection />
			<VisionSection />
			<section id='schedule-tour'>
				<ContactSection />
			</section>
			<Footer />
		</div>
	)
}
