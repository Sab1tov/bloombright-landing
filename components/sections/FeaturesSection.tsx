'use client'

import { Award, Clock, Users } from 'lucide-react'
import { FeatureCard } from './FeatureCard'

export const FeaturesSection = () => {
	const features = [
		{
			Icon: Users,
			title: 'Ages 8 Weeks - 5 Years',
			description:
				'Nurturing care from infancy through early childhood development',
		},
		{
			Icon: Award,
			title: 'British EYFS + Montessori',
			description:
				'Best of both worlds combining structured learning with child-led discovery',
		},
		{
			Icon: Clock,
			title: 'Individual Pace',
			description:
				'Every child learns at their own rhythm in a supportive environment',
		},
	]

	return (
		<section className='py-16 bg-white/50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid md:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<FeatureCard key={index} {...feature} />
					))}
				</div>
			</div>
		</section>
	)
}
