import React from 'react'
import { useEffect, useRef } from 'react'
import { scrollReveal } from 'lib/scrollReveal'

export const Temporality = () => {
	const temporalityRef = useRef(null)

	useEffect(() => {
		scrollReveal({
			component: temporalityRef.current,
			direction: 'left',
			time: 900
		})
	}, [])

	return (
		<div ref={temporalityRef} id='temporality' className='mt-5'>
			<div className='container'>
				<div className='row'>
					<h1 className='mt-5'>Temporalidad</h1>
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
						<li>Levantamiento de perfil</li>
						<li>proceso de sleleccion de personal </li>
						<li>Estudio de puestos de trabajo </li>
						<li>Contratacio </li>
						<li>Induccion </li>
						<li>Dotacion </li>
						<li>Seguimiento </li>
					</ul>
				</div>
			</div>
		</div>
	)
}
