'use client'

import { Instagram, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

interface ContactLinkProps {
	href: string
	children: React.ReactNode
}

const ContactLink = ({ href, children }: ContactLinkProps) => (
	<a
		href={href}
		className='text-gray-400 hover:text-white transition-colors duration-200'
	>
		{children}
	</a>
)

export const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white py-12'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid md:grid-cols-4 gap-8 mb-8'>
					{/* Logo and Description */}
					<div className='col-span-1'>
						<Image
							src='/logo-alt-2.PNG'
							alt='Bloom Bright Nursery Logo'
							width={48}
							height={48}
							className='h-12 w-12 object-contain mb-4'
						/>
						<p className='text-gray-400 text-sm'>
							Lightening the path for young learners to bloom
						</p>
					</div>

					{/* Contact Information */}
					<div className='col-span-1'>
						<h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
						<div className='space-y-2'>
							<div className='flex items-center space-x-2'>
								<Phone className='w-4 h-4 text-[#d44c34]' />
								<ContactLink href='tel:+971585613250'>
									+971 58 561 3250
								</ContactLink>
							</div>
							<div className='flex items-center space-x-2'>
								<Instagram className='w-4 h-4 text-[#d44c34]' />
								<ContactLink href='https://www.instagram.com/bloom_bright_nursery/'>
									@bloom_bright_nursery
								</ContactLink>
							</div>
						</div>
					</div>

					{/* Location */}
					<div className='col-span-1'>
						<h3 className='text-lg font-semibold mb-4'>Location</h3>
						<div className='flex items-start space-x-2'>
							<MapPin className='w-4 h-4 text-[#d44c34] mt-1' />
							<p className='text-gray-400 text-sm'>
								Dubai Investment Park 1
								<br />
								Green Community, The Market Mall
								<br />
								Unit R-06, Dubai, UAE
							</p>
						</div>
					</div>

					{/* Quick Links */}
					<div className='col-span-1'>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<div className='space-y-2'>
							<p>
								<button
									type='button'
									className='text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer'
									onClick={() => {
										const el = document.querySelector('#about')
										if (el) el.scrollIntoView({ behavior: 'smooth' })
									}}
								>
									About Us
								</button>
							</p>
							<p>
								<button
									type='button'
									className='text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer'
									onClick={() => {
										const el = document.querySelector('#approach')
										if (el) el.scrollIntoView({ behavior: 'smooth' })
									}}
								>
									Our Approach
								</button>
							</p>
							<p>
								<button
									type='button'
									className='text-gray-400 hover:text-white transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer'
									onClick={() => {
										const el = document.querySelector('#schedule-tour')
										if (el) el.scrollIntoView({ behavior: 'smooth' })
									}}
								>
									Schedule a Tour
								</button>
							</p>
						</div>
					</div>
				</div>

				<div className='border-t border-gray-700 pt-8'>
					<div className='text-center'>
						<p className='text-gray-400 text-sm'>
							© 2024 Bloom Bright Nursery. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
