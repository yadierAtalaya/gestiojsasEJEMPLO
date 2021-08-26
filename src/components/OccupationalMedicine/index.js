import React from 'react'
import { useEffect, useRef } from 'react'
import { scrollReveal } from 'lib/scrollReveal'

export const OccupationalMedicine = () => {
	const OccupationalMedicineRef = useRef(null)

	useEffect(() => {
		scrollReveal({
			component: OccupationalMedicineRef.current,
			direction: 'top',
			time: 900
		})
	}, [])

	return (
		<div
			className='mt-5'
			ref={OccupationalMedicineRef}
			id='OccupationalMedicine'
		>
			<div className='container'>
				<div className='row'>
					<div>
						<h2 className='mt-5'>
							Consultoria en seguridad y salud en el trabajo{' '}
						</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Incidunt, sapiente beatae voluptatem repellat
							id voluptatibus fugit consequatur qui
							exercitationem, natus dolore vitae sequi sed.
							Veritatis ipsum in esse aliquam praesentium.
						</p>
						<ul>
							<li>Diagnostico </li>
						</ul>
					</div>
					<div>
						<h2>
							Consultoria e interventoria en medicina laboral y
							del trabajo
						</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. In esse nulla voluptate commodi voluptas
							adipisci eum tempore modi architecto quis cumque ex,
							ut quae animi est iusto repellat minus labore.
						</p>

						<ul>
							<li>Profesiogramas</li>
							<li>
								Programa de prevencion de riesgo cardiovascular
							</li>
							<li>programa de vigilancia epidemiologica</li>
							<li>
								Analisis de puesto de trabajo (Segun
								metodologias especificas)
							</li>
							<li>Diagnostico de condiciones de salud</li>
							<li>
								Diseño e implementacion de sistema de vigilancia
								epidemiologico
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
