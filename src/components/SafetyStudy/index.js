import React from 'react'
import { useEffect, useRef } from 'react'
import { scrollReveal } from 'lib/scrollReveal'

export const SafetyStudy = () => {
	const safetyStudyRef = useRef(null)

	useEffect(() => {
		scrollReveal({
			component: safetyStudyRef.current,
			direction: 'rigth',
			time: 900
		})
	}, [])

	return (
		<div className='mt-5' ref={safetyStudyRef} id='safetyStudy'>
			<div className='container'>
				<div className='row'>
					<h1 className='mt-4'>Estudios De Seguridad</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minima atque ipsum nemo quidem at ea similique neque,
						perferendis nisi pariatur repellendus error quaerat
						magni expedita assumenda explicabo necessitatibus cum
						hic.
					</p>
				</div>
				<div>
					<ul>
						<li>Poligrafo</li>
						<li>Visita domicilaria </li>
						<li>Verificacion de referencia academica</li>
						<li>Verificacion de referencia Personales</li>
						<li>Validacion de referencia laboral</li>
						<li>
							Validacion de antecedentes juridicos,
							diciplinarios,fiscales
						</li>
						<li>Validacion de antecedentes financieros </li>
					</ul>
				</div>
			</div>
		</div>
	)
}
