import React from 'react'
import { useEffect, useRef } from 'react'
import { scrollReveal } from 'lib/scrollReveal'

export const MedicalExams = () => {
	const medicalExamsRef = useRef(null)

	useEffect(() => {
		scrollReveal({
			component: medicalExamsRef.current,
			direction: 'top',
			time: 900
		})
	}, [])
	return (
		<div ref={medicalExamsRef} id='medicalExamsRef' className='mt-5'>
			<div className='container'>
				<div className='row'>
					<h1 className='mt-4'>Examenes Medicos </h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Esse laboriosam neque quis, temporibus accusantium
						facilis rerum minus quidem ut molestias perspiciatis
						deleniti earum tenetur sit officiis inventore rem optio
						doloribus?
					</p>
				</div>
				<div>
					<ul>
						<li>Ingreso</li>
						<li>Periodico</li>
						<li>Egreso</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
