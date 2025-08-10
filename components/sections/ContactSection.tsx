'use client'

import { submitContactForm } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Map } from '@/components/ui/map'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
	firstName: z.string().min(2, 'First name is required'),
	lastName: z.string().min(2, 'Last name is required'),
	mobile: z.string().min(9, 'Mobile number is required'),
	email: z.string().email('Invalid email address'),
	role: z.enum([
		'A parent',
		'A supplier',
		'A candidate',
		'Press and B2B partner',
	]),
	comment: z.string().optional(),
	agreement: z.boolean().refine(val => val === true, {
		message: 'You must accept the data protection policy',
	}),
})

export const ContactSection = () => {
	const [isPending, startTransition] = useTransition()
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle')
	const [submitMessage, setSubmitMessage] = useState('')

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			mobile: '',
			email: '',
			comment: '',
			agreement: false,
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		setSubmitStatus('idle')
		setSubmitMessage('')

		startTransition(async () => {
			try {
				const result = await submitContactForm(values)

				if (result.success) {
					setSubmitStatus('success')
					setSubmitMessage(
						result.message ||
							'Thank you! Your message has been sent successfully.'
					)
					form.reset()
				} else {
					setSubmitStatus('error')
					setSubmitMessage(
						result.error || 'Something went wrong. Please try again.'
					)
				}
			} catch (error) {
				setSubmitStatus('error')
				setSubmitMessage(
					'Network error. Please check your connection and try again.'
				)
			}
		})
	}

	return (
		<section
			id='contact'
			className='py-20 bg-gradient-to-b from-white to-gray-50'
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold text-gray-800 mb-4 relative inline-block'>
						Contact Us
						<div className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#d44c34] to-[#147c74] rounded-full'></div>
					</h2>
					<p className='text-xl text-gray-600 mt-6'>
						Have questions or want to visit us? Fill out the form below and
						we&apos;ll get back to you shortly.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12'>
					<div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
						<h3 className='text-2xl font-semibold text-gray-800 mb-6 flex items-center'>
							<span className='w-1.5 h-6 bg-[#d44c34] rounded mr-3'></span>
							Get in Touch
						</h3>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-8'
							>
								<div className='grid sm:grid-cols-2 gap-6'>
									<FormField
										control={form.control}
										name='firstName'
										render={({ field }) => (
											<FormItem
												className='group'
												data-invalid={
													form.formState.errors.firstName ? true : undefined
												}
											>
												<FormLabel>
													First Name{' '}
													<span className='text-[#d44c34] opacity-0 group-data-[invalid=true]:opacity-100 transition-opacity'>
														*
													</span>
												</FormLabel>
												<FormControl>
													<Input placeholder='John' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='lastName'
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Last Name{' '}
													<span className='text-[#d44c34] opacity-0 group-data-[invalid=true]:opacity-100 transition-opacity'>
														*
													</span>
												</FormLabel>
												<FormControl>
													<Input placeholder='Doe' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='mobile'
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Mobile{' '}
													<span className='text-[#d44c34] opacity-0 group-data-[invalid=true]:opacity-100 transition-opacity'>
														*
													</span>
												</FormLabel>
												<FormControl>
													<Input placeholder='+971 XX XXX XXXX' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel>
													Email{' '}
													<span className='text-[#d44c34] opacity-0 group-data-[invalid=true]:opacity-100 transition-opacity'>
														*
													</span>
												</FormLabel>
												<FormControl>
													<Input placeholder='john@example.com' {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								<FormField
									control={form.control}
									name='role'
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Are you{' '}
												<span className='text-[#d44c34] opacity-0 group-data-[invalid=true]:opacity-100 transition-opacity'>
													*
												</span>
											</FormLabel>
											<Select
												onValueChange={field.onChange}
												defaultValue={field.value}
											>
												<SelectTrigger className='w-full'>
													<SelectValue placeholder='Select your role' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='A parent'>A parent</SelectItem>
													<SelectItem value='A supplier'>A supplier</SelectItem>
													<SelectItem value='A candidate'>
														A candidate
													</SelectItem>
													<SelectItem value='Press and B2B partner'>
														Press and B2B partner
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='comment'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Comment</FormLabel>
											<FormControl>
												<Textarea
													placeholder='Share your message or inquiry (optional)'
													className='min-h-[120px]'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='agreement'
									render={({ field }) => (
										<FormItem className='flex flex-row items-start space-x-3 space-y-0'>
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<div className='space-y-1 leading-none'>
												<FormLabel>
													I have read and accept{' '}
													<a
														href='/privacy-policy'
														className='text-[#147c74] underline'
														target='_blank'
														rel='noopener noreferrer'
													>
														bloombright&apos;s data protection policy
													</a>{' '}
													<span className='text-[#d44c34] opacity-0 group-data-[invalid=true]:opacity-100 transition-opacity'>
														*
													</span>
												</FormLabel>
											</div>
										</FormItem>
									)}
								/>

								{submitStatus === 'success' && (
									<div className='p-4 bg-green-50 border border-green-200 rounded-lg'>
										<p className='text-green-800'>{submitMessage}</p>
									</div>
								)}

								{submitStatus === 'error' && (
									<div className='p-4 bg-red-50 border border-red-200 rounded-lg'>
										<p className='text-red-800'>{submitMessage}</p>
									</div>
								)}

								<Button
									type='submit'
									size='lg'
									className='bg-[#d44c34] hover:bg-[#147c74] text-lg px-12 py-4'
									disabled={isPending}
								>
									{isPending ? 'Sending...' : 'Submit'}
								</Button>
							</form>
						</Form>
					</div>

					<div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
						<h3 className='text-2xl font-semibold text-gray-800 mb-6 flex items-center'>
							<span className='w-1.5 h-6 bg-[#147c74] rounded mr-3'></span>
							Our Location
						</h3>
						<p className='text-lg text-gray-600 mb-6'>
							Conveniently located in Dubai Investment Park 1, Green Community,
							The Market Mall. Our nursery offers a safe and nurturing
							environment for your little ones.
						</p>
						<div
							className='rounded-xl overflow-hidden shadow-md'
							style={{ height: '500px' }}
						>
							<Map center={[25.0040340423584, 55.16400909423828]} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
