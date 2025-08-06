'use client'

import Image from 'next/image'

export const AboutSection = () => {
	return (
		<section id='about' className='py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					<div className='space-y-8'>
						<div>
							<h2 className='text-4xl font-bold text-gray-800 mb-6'>
								Who We Are & Our Approach
							</h2>
							<div className='space-y-6 text-lg text-gray-600 leading-relaxed'>
								<p>
									Bloom Bright Nursery is a warm and inspiring space in Dubai
									where little learners begin their journey with joy and
									confidence.
								</p>
								<p>
									We combine the British Early Years Foundation Stage (EYFS)
									Curriculum with the proven Montessori method to create a
									balanced, enriching, and nurturing environment for children
									aged from 8 weeks to 5 years.
								</p>
								<p>
									Our approach allows children to grow freely, discover their
									strengths, and develop independence. With this foundation,
									they are well-prepared to transition into British and
									international schools. Children learn at their own pace,
									surrounded by care, guidance, and inspiration every step of
									the way.
								</p>
							</div>
						</div>
					</div>

					<div className='relative'>
						<div className='aspect-[4/3] bg-gradient-to-br from-[#acd4ac]/50 to-[#147c74]/30 rounded-3xl overflow-hidden'>
							<Image
								src='https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600'
								alt='Children learning in Montessori environment'
								width={600}
								height={450}
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
