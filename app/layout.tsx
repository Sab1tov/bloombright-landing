import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Analytics } from './analytics'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		default: 'Bloom Bright Nursery - Montessori Inspired Early Learning in Dubai',
		template: '%s | Bloom Bright Nursery'
	},
	description:
		'Bloom Bright Nursery offers Montessori-inspired early learning in Dubai for children aged 8 weeks to 5 years. Combining British EYFS with Montessori methods in a warm, nurturing environment.',
	keywords: [
		'nursery Dubai',
		'Montessori Dubai',
		'early learning Dubai',
		'childcare Dubai',
		'preschool Dubai',
		'EYFS Dubai',
		'Bloom Bright Nursery',
		'early childhood education Dubai',
		'Montessori nursery Dubai',
		'British curriculum Dubai'
	],
	authors: [{ name: 'Bloom Bright Nursery' }],
	creator: 'Bloom Bright Nursery',
	publisher: 'Bloom Bright Nursery',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL('https://bloombrightnursery.com'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://bloombrightnursery.com',
		title: 'Bloom Bright Nursery - Montessori Inspired Early Learning in Dubai',
		description: 'Bloom Bright Nursery offers Montessori-inspired early learning in Dubai for children aged 8 weeks to 5 years. Combining British EYFS with Montessori methods in a warm, nurturing environment.',
		siteName: 'Bloom Bright Nursery',
		images: [
			{
				url: '/logo-main.PNG',
				width: 1200,
				height: 630,
				alt: 'Bloom Bright Nursery - Montessori Inspired Early Learning',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Bloom Bright Nursery - Montessori Inspired Early Learning in Dubai',
		description: 'Bloom Bright Nursery offers Montessori-inspired early learning in Dubai for children aged 8 weeks to 5 years.',
		images: ['/logo-main.PNG'],
		creator: '@bloombrightnursery',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	manifest: '/manifest.json',
	icons: {
		icon: '/icon.ico',
		apple: '/icon.ico',
		shortcut: '/icon.ico',
	},
	verification: {
		google: 'your-google-verification-code', // Замените на ваш код
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
