import React from 'react'
import { useEffect, useRef } from 'react'
import { scrollReveal } from 'lib/scrollReveal'

export const LegalAdvisory = () => {
	const legalAdvisoryRef = useRef(null)
	useEffect(() => {
		scrollReveal({
			component: legalAdvisoryRef.current,
			direction: 'left',
			time: 900
		})
	}, [])

	return (
		<div className='mt-5' ref={legalAdvisoryRef} id='legalAdvisory'>
			<div className='container'>
				<div className='row'>
					<h1 className='mt-5'>Asesorias legales</h1>
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
