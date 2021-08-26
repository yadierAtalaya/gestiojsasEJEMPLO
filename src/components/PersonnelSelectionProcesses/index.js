import React, { useEffect, useRef } from 'react'
import { scrollReveal } from 'lib/scrollReveal'

export const PersonnelSelectionProcesses = () => {
	const personnelSelectionProcessesRef = useRef(null)

	useEffect(() => {
		scrollReveal({
			component: personnelSelectionProcessesRef.current,
			direction: 'left',
			time: 900
		})
	}, [])
	return (
		<div
			className='mt-5'
			ref={personnelSelectionProcessesRef}
			id='personnelSelectionProcesses'
		>
			<div className='container'>
				<div className='row justify-content-center'>
					<h1 className='mt-4'>Procesos De Seleccion De Personal</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Inventore quas voluptas neque cumque, voluptates
						animi. Veniam autem nostrum dolore repudiandae error
						iusto. Accusantium odit, quaerat voluptate at minima
						voluptatem suscipit?
					</p>
				</div>
				<div>
					<ul>
						<li>capacitacion de talento humano</li>
						<li>entrevista estandar o plus </li>
						<li>
							pruebas psicometricas
							<ul>
								<li>comportamiento</li>
								<li>Personalidad</li>
								<li>inteligencia </li>
								<li>
									Competencia para operativos, mandos medios
									gerencia y directivos
								</li>
							</ul>
						</li>
						<li>pruebas tecnicas </li>
					</ul>
				</div>
			</div>
		</div>
	)
}
