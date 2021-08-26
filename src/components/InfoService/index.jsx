import './style.css'
import React from 'react'
import { InfoServiceCard } from './InfoServiceCard'

export const InfoService = () => {
	return (
		<div className='infoService'>
			<div className='d-flex justify-content-center' id='manage'>
				<InfoServiceCard
					animationSettings={{ direction: 'left' }}
					urlImage='/images/home/InfoService/image-muestra.svg'
					InfoIndextitle={
						'Asesoria, Administracion, Seguridad social'
					}
					InfoIndexDescription={
						'Afiliacion a ( Ari, Eps, Pensiones y caja de compensacion familiar) Ten presente que una empresa organizada y que quiera permanecer en el tiempo y en el mercado debe garantizar a sus empleados y familia una estabilidad y calidad de vida cuenta con nuestra asesoria, experiencia y servicio en todo lo relacionado con la afiliacion.'
					}
				/>
			</div>
			<div className='d-flex justify-content-center' id='Outsourcing'>
				<InfoServiceCard
					animationSettings={{ direction: 'right', delay: 200 }}
					urlImage='/images/home/InfoService/image-muestra.svg'
					className={'flex-reverse'}
					InfoIndextitle={'Outsourcing gestion humana'}
					InfoIndexDescription={
						'En este servicio acompañamos a tu empresa en la captacion y vinculacion del personal idoneo para lograr los objetivos organizacionales e individuales.'
					}
				/>
			</div>
			<div className='d-flex justify-content-center' id='manage-admine'>
				<InfoServiceCard
					animationSettings={{ direction: 'left', delay: 200 }}
					urlImage='/images/home/InfoService/image-muestra.svg'
					InfoIndextitle={
						'Asesoria y administracion contable y tributaria'
					}
					InfoIndexDescription={
						'De acuerdo con la normativa vigente en materia fiscal, asesoramos y supervisamos la preparacion de las obligaciones contables, financieras y tributarias con la debida antelacion para evitar sanciones, errores de presentacion y evitar el riesgo que comprometa recursos economicos de su empresa.'
					}
				/>
			</div>
		</div>
	)
}
