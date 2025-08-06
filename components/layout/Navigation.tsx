'use client'

import Image from 'next/image'
import { useState } from 'react'

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	return (
		<nav className='bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center py-4'>
					<div className='flex items-center space-x-3'>
						<Image
							src='/logo-main.PNG'
							alt='Bloom Bright Nursery Logo'
							width={64}
							height={64}
							className='h-16 w-auto object-contain'
							priority
						/>
					</div>
					<div className='hidden md:flex items-center space-x-8'>
						<a
							href='#about'
							className='text-gray-700 hover:text-[#d44c34] transition-colors'
						>
							About Us
						</a>
						<a
							href='#approach'
							className='text-gray-700 hover:text-[#d44c34] transition-colors'
						>
							Our Approach
						</a>
						<a
							href='#schedule-tour'
							className='bg-[#d44c34] hover:bg-[#147c74] text-white px-4 py-2 rounded transition-colors cursor-pointer flex items-center justify-center'
						>
							Schedule Tour
						</a>
					</div>
					<button
						className='md:hidden'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<div className='w-6 h-6 flex flex-col justify-center space-y-1'>
							<div className='w-full h-0.5 bg-gray-600'></div>
							<div className='w-full h-0.5 bg-gray-600'></div>
							<div className='w-full h-0.5 bg-gray-600'></div>
						</div>
					</button>
				</div>
				{/* Mobile menu */}
				{isMenuOpen && (
					<div className='md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-4'>
						<div className='flex flex-col items-center space-y-4'>
							<a
								href='#about'
								className='text-gray-700 hover:text-[#d44c34] transition-colors'
								onClick={() => setIsMenuOpen(false)}
							>
								About Us
							</a>
							<a
								href='#approach'
								className='text-gray-700 hover:text-[#d44c34] transition-colors'
								onClick={() => setIsMenuOpen(false)}
							>
								Our Approach
							</a>
							<a
								href='#contact'
								className='text-gray-700 hover:text-[#d44c34] transition-colors'
								onClick={() => setIsMenuOpen(false)}
							>
								Contact
							</a>
							<a
								href='#schedule-tour'
								className='bg-[#d44c34] hover:bg-[#147c74] text-white px-4 py-2 rounded transition-colors cursor-pointer flex items-center justify-center w-full'
								onClick={() => setIsMenuOpen(false)}
							>
								Schedule Tour
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
