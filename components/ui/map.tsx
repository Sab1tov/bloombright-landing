'use client'

interface MapProps {
	center: [number, number]
	zoom?: number
}

export const Map = ({ center, zoom = 14 }: MapProps) => {
	return (
		<iframe
			width='100%'
			height='100%'
			style={{ border: 0, minHeight: '400px', maxHeight: '500px' }}
			loading='lazy'
			allowFullScreen
			referrerPolicy='no-referrer-when-downgrade'
			src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBL2hJ-RbpJ4RCNwuYuUP52VbdddJblzDY&q=25.0040340423584,55.16400909423828&zoom=${zoom}`}
		></iframe>
	)
}
