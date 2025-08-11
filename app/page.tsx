'use client'

import { Footer } from '@/components/layout/Footer'
import { Navigation } from '@/components/layout/Navigation'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { VisionSection } from '@/components/sections/VisionSection'
import Script from 'next/script'

export default function Home() {
	return (
		<>
			{/* Structured Data for SEO */}
			<Script
				id='structured-data'
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'EducationalOrganization',
						name: 'Bloom Bright Nursery',
						description:
							'Montessori-inspired early learning nursery in Dubai for children aged 8 weeks to 5 years',
						url: 'https://bloombrightnursery.ae',
						logo: 'https://bloombrightnursery.ae/logo-main.PNG',
						image: 'https://bloombrightnursery.ae/logo-main.PNG',
						address: {
							'@type': 'PostalAddress',
							addressLocality: 'Dubai',
							addressCountry: 'AE',
						},
						telephone: '+971-XX-XXX-XXXX',
						email: 'info@bloombrightnursery.ae',
						foundingDate: '2024',
						curriculum: ['British EYFS', 'Montessori'],
						ageRange: '8 weeks to 5 years',
						sameAs: [
							'https://www.facebook.com/bloombrightnursery',
							'https://www.instagram.com/bloombrightnursery',
						],
					}),
				}}
			/>

			<div className='min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50'>
				<header>
					<Navigation />
				</header>

				<main>
					<HeroSection />
					<FeaturesSection />
					<AboutSection />
					<VisionSection />
					<section id='schedule-tour'>
						<ContactSection />
					</section>
				</main>

				<footer>
					<Footer />
				</footer>
			</div>
		</>
	)
}
