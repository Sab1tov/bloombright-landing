'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
	const router = useRouter()
	// Helper: if on privacy-policy, redirect to home and anchor
	const handleNavClick = (anchor: string) => {
		if (pathname === '/privacy-policy') {
			router.push('/' + anchor)
		} else {
			window.location.hash = anchor
		}
	}
	const handleLogoClick = () => {
		router.push('/')
	}
	return (
		<nav className='bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center py-4'>
					<div className='flex items-center space-x-3'>
						<button onClick={handleLogoClick} className='focus:outline-none'>
							<Image
								src='/logo-main.PNG'
								alt='Bloom Bright Nursery Logo'
								width={64}
								height={64}
								className='h-16 w-auto object-contain'
								priority
							/>
						</button>
					</div>
					<div className='hidden md:flex items-center space-x-8'>
						<button
							onClick={() => handleNavClick('#about')}
							className='text-gray-700 hover:text-[#d44c34] transition-colors'
						>
							About Us
						</button>
						<button
							onClick={() => handleNavClick('#approach')}
							className='text-gray-700 hover:text-[#d44c34] transition-colors'
						>
							Our Approach
						</button>
						<button
							onClick={() => handleNavClick('#schedule-tour')}
							className='bg-[#d44c34] hover:bg-[#147c74] text-white px-4 py-2 rounded transition-colors cursor-pointer flex items-center justify-center'
						>
							Schedule Tour
						</button>
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
							<button
								onClick={() => {
									setIsMenuOpen(false)
									handleNavClick('#about')
								}}
								className='text-gray-700 hover:text-[#d44c34] transition-colors'
							>
								About Us
							</button>
							<button
								onClick={() => {
									setIsMenuOpen(false)
									handleNavClick('#approach')
								}}
								className='text-gray-700 hover:text-[#d44c34] transition-colors'
							>
								Our Approach
							</button>
							<button
								onClick={() => {
									setIsMenuOpen(false)
									handleNavClick('#contact')
								}}
								className='text-gray-700 hover:text-[#d44c34] transition-colors'
							>
								Contact
							</button>
							<button
								onClick={() => {
									setIsMenuOpen(false)
									handleNavClick('#schedule-tour')
								}}
								className='bg-[#d44c34] hover:bg-[#147c74] text-white px-4 py-2 rounded transition-colors cursor-pointer flex items-center justify-center w-full'
							>
								Schedule Tour
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
