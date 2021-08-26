import React from 'react'
import { useEffect, useRef } from 'react'
import { scrollReveal } from 'lib/scrollReveal'

export const OutsorcingOfPayroll = () => {
	const outsorcingOfPayrollRef = useRef(null)
	useEffect(() => {
		scrollReveal({
			component: outsorcingOfPayrollRef.current,
			direction: 'top',
			time: 900
		})
	}, [])

	return (
		<div
			className='mt-5'
			ref={outsorcingOfPayrollRef}
			id='outsorcingOfPayroll'
		>
			<div className='container'>
				<div className='row'>
					<h1 className='mt-5'>Outsorcing de nomina</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Autem iste voluptates voluptatem est in. Cumque
						saepe repellendus quis odio assumenda reiciendis eos
						itaque cupiditate maxime, eveniet distinctio odit
						asperiores? Repellat! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Alias quidem soluta
						quisquam incidunt dolor! Magnam, fugit harum sint esse
						animi non! Itaque distinctio eius harum tempore incidunt
						vero expedita atque!
					</p>
				</div>
			</div>
		</div>
	)
}
