'use client'

import { Heart } from 'lucide-react'

export const VisionSection = () => {
	return (
		<section
			id='approach'
			className='py-20 bg-gradient-to-r from-[#acd4ac]/30 to-[#147c74]/20'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-800 mb-8'>
						Our Vision & Mission
					</h2>
				</div>

				<div className='grid lg:grid-cols-2 gap-16 items-center'>
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
							<p className='text-gray-700 font-medium'>Meruert Kapalbekova</p>
							<p className='text-[#147c74]'>Co-founder, Bloom Bright Nursery</p>
						</div>
					</div>

					<div className='relative'>
						<div className='aspect-square bg-gradient-to-br from-[#acd4ac]/50 to-[#147c74]/30 rounded-full flex items-center justify-center'>
							<div className='w-32 h-32 bg-[#d44c34] hover:bg-[#147c74] transition-colors rounded-full flex items-center justify-center'>
								<Heart className='w-16 h-16 text-white' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
