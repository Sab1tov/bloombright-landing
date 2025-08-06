'use client'

import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
	Icon: LucideIcon
	title: string
	description: string
}

export const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => {
	return (
		<Card className='border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm'>
			<CardContent className='p-8 text-center'>
				<div className='w-16 h-16 bg-[#d44c34] hover:bg-[#147c74] transition-colors rounded-full flex items-center justify-center mx-auto mb-6'>
					<Icon className='w-8 h-8 text-white' />
				</div>
				<h3 className='text-xl font-semibold text-gray-800 mb-4'>{title}</h3>
				<p className='text-gray-600'>{description}</p>
			</CardContent>
		</Card>
	)
}
