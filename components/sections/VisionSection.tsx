'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const galleryImages = [
	'photo-1.jpg',
	'photo-2.jpg',
	'photo-3.jpg',
	'photo-4.jpg',
	'photo-5.JPG',
	'photo-6.jpg',
	'photo-7.jpg',
	'photo-8.jpg',
	'photo-9.jpg',
	'photo-10.JPG',
	'photo-11.jpg',
	'photo-12.JPG',
	'photo-13.jpg',
]

export const VisionSection = () => {
	const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(null)
	const [isPaused, setIsPaused] = React.useState(false)

	React.useEffect(() => {
		if (!carouselApi || isPaused) return
		const id = setInterval(() => {
			carouselApi.scrollNext()
		}, 3000)
		return () => clearInterval(id)
	}, [carouselApi, isPaused])
	return (
		<section
			id='approach'
			className='py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#acd4ac]/30 to-[#147c74]/20'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-800 mb-8'>
						Our Vision & Mission
					</h2>
				</div>

				<div className='grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center'>
					<div className='space-y-8'>
						<div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
							<p className='font-medium text-[#d44c34]'>
								The hot air balloon symbolizes the magic and potential of early
								childhood.
							</p>
							<p>
								When I imagined Bloom Bright Nursery, I saw children with
								different talents, personalities, and unique qualities. What
								brings them together is a shared dream — a vision of who they
								want to become.
							</p>
							<p>
								Each day, we help fill this dream with knowledge, skills,
								confidence, and creativity. Step by step, they grow stronger and
								rise higher — ready for the next stage of life.
							</p>
							<p>
								We believe every child&apos;s path should be filled with light,
								warmth, and love. Our mission is to gently guide, nurture
								individuality, and help each child move forward with joy,
								strength, and purpose.
							</p>
						</div>

						<div className='border-l-4 border-[#d44c34] pl-6 py-4 bg-white/50 rounded-r-lg'>
							<p className='text-gray-700 font-medium'>Meruyert Kapalbekova</p>
							<p className='text-[#147c74]'>Co-founder, Bloom Bright Nursery</p>
						</div>
					</div>

					<div className='relative'>
						<div className='aspect-[16/10] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-square rounded-3xl overflow-hidden relative bg-white/40'>
							<Carousel
								className='h-full'
								opts={{ loop: true }}
								setApi={setCarouselApi}
								onMouseEnter={() => setIsPaused(true)}
								onMouseLeave={() => setIsPaused(false)}
							>
								<CarouselContent className='h-full'>
									{galleryImages.map((fileName, index) => (
										<CarouselItem key={fileName} className='h-full'>
											<div className='relative h-full w-full'>
												<Image
													src={`/slider-gallery/${fileName}`}
													alt={`Gallery photo ${index + 1}`}
													fill
													sizes='(min-width: 1024px) 600px, 100vw'
													className='object-cover rounded-3xl'
													priority={index === 0}
												/>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious className='bg-white/80 hover:bg-white shadow-md' />
								<CarouselNext className='bg-white/80 hover:bg-white shadow-md' />
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
