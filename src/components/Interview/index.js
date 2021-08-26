import React from 'react'
import { scrollReveal } from 'lib/scrollReveal'

import { useEffect, useRef } from 'react'

export const Interview = () => {
	const interviewRef = useRef(null)

	useEffect(() => {
		scrollReveal({
			component: interviewRef.current,
			direction: 'top',
			time: 900
		})
	}, [])
	return (
		<div className='mt-5' ref={interviewRef} id='interview'>
			<div className='container'>
				<div className='row'>
					<h1 className='mt-4'>Entrevista</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Laboriosam illum cum eius tempora aliquid maiores,
						perferendis, blanditiis assumenda officia soluta ab
						inventore reiciendis, expedita dolore pariatur vel
						temporibus quasi eos?
					</p>
				</div>
				<div className=''>
					<ul>
						<li>Entrevista estandar</li>
						<li>Entrevista plus</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
