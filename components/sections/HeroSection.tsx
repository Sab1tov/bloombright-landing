'use client'

import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'

export const HeroSection = () => {
	// ...existing code...
	const handleLearnMore = () => {
		const el = document.querySelector('#about')
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleSchedule = () => {
		const el = document.querySelector('#schedule-tour')
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' })
		}
	}
	return (
		<section className='relative py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<div className='space-y-8'>
						<div className='space-y-4'>
							<h1 className='text-4xl lg:text-4xl font-bold text-gray-800 leading-tight'>
								Bloom Bright Nursery
							</h1>
							<p className='text-xl  text-gray-700  font-medium'>
								Inspired by Montessori
							</p>
							<p className='text-2xl text-[#d44c34] font-light'>
								Lightening the path for young learners to bloom{'\u00A0'}
								<Image
									src='/logo-icon.png'
									alt=''
									aria-hidden='true'
									className='inline-block align-middle w-5 h-5'
									width={20}
									height={20}
								/>
							</p>
						</div>

						<p className='text-lg text-gray-600 leading-relaxed'>
							A warm and inspiring space where little learners begin their
							journey with joy and confidence. We use a bilingual system that
							integrates the British EYFS Curriculum and the proven Montessori
							approach for children aged 3 months to 4 years.
						</p>

						<div className='bg-white/60 rounded-lg p-6'>
							<p className='text-base font-medium text-gray-700 mb-2'>
								Languages offered:
							</p>
							<p className='text-base text-gray-600'>
								English, Arabic, and French classes.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-4'>
							<Button
								size='lg'
								className='bg-[#d44c34] hover:bg-[#147c74] text-lg px-8 py-3'
								onClick={handleSchedule}
							>
								Schedule a Tour
							</Button>
							<Button
								size='lg'
								variant='outline'
								className='border-[#acd4ac] text-[#147c74] bg-white hover:bg-[#acd4ac] text-lg px-8 py-3'
								onClick={handleLearnMore}
							>
								Learn More
							</Button>
						</div>
					</div>

					<div className='relative'>
						<div className='aspect-square bg-gradient-to-br from-[#acd4ac]/50 to-[#147c74]/30 rounded-3xl flex items-center justify-center overflow-hidden'>
							<Image
								src='/hero-photo/IMG_7700.jpg'
								alt='Happy child learning at Bloom Bright Nursery - Montessori-inspired early education in Dubai'
								width={600}
								height={600}
								className='w-full h-full object-cover rounded-3xl shadow-2xl'
								priority
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px'
							/>
						</div>
						<div className='absolute -top-4 -right-4 w-24 h-24 bg-[#acd4ac] rounded-full flex items-center justify-center shadow-lg'>
							<Star className='w-12 h-12 text-[#147c74]' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
