'use client'

import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

interface BreadcrumbItem {
	label: string
	href?: string
}

interface BreadcrumbProps {
	items: BreadcrumbItem[]
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
	return (
		<nav aria-label="Breadcrumb" className="mb-4">
			<ol className="flex items-center space-x-2 text-sm text-gray-600">
				<li>
					<Link
						href="/"
						className="flex items-center hover:text-[#147c74] transition-colors"
						aria-label="Home"
					>
						<Home className="w-4 h-4" />
					</Link>
				</li>
				{items.map((item, index) => (
					<li key={index} className="flex items-center">
						<ChevronRight className="w-4 h-4 mx-2" />
						{item.href ? (
							<Link
								href={item.href}
								className="hover:text-[#147c74] transition-colors"
							>
								{item.label}
							</Link>
						) : (
							<span className="text-gray-800 font-medium">{item.label}</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}
