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
								<p>A place where talents bloom from the very first steps.</p>
								<p>
									Our nursery is thoughtfully organised following the Montessori
									approach, featuring dedicated corners for:
								</p>
								<ul className='space-y-4 pl-6'>
									<li className='flex items-start'>
										<span className='text-[#d44c34] font-semibold mr-2'>•</span>
										<span>
											<strong>Musical Corner</strong> — where children explore
											rhythm, melody, and the joy of music.
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-[#d44c34] font-semibold mr-2'>•</span>
										<span>
											<strong>Sports Corner</strong> — fostering strength,
											coordination, and teamwork.
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-[#d44c34] font-semibold mr-2'>•</span>
										<span>
											<strong>Gymnastics & Dance Studio</strong> — encouraging
											flexibility, confidence, and self-expression.
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-[#d44c34] font-semibold mr-2'>•</span>
										<span>
											<strong>Pottery & Art Space</strong> — cultivating
											creativity, fine motor skills, and imagination.
										</span>
									</li>
								</ul>
								<p>
									From their very first moments, children enter a world designed
									to awaken their unique gifts. We believe every child is a
									shining star and gently nurture their talents with care and
									expert guidance.
								</p>
								<p>
									Learning here is a joyful adventure — a place to grow,
									express, and become.
								</p>
							</div>
						</div>
					</div>

					<div className='relative'>
						<div className='aspect-[7/8] bg-gradient-to-br from-[#acd4ac]/50 to-[#147c74]/30 rounded-3xl overflow-hidden'>
							<Image
								src='/about-photo/IMG_4957.jpg'
								alt='Children learning in Montessori environment'
								width={600}
								height={686}
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
