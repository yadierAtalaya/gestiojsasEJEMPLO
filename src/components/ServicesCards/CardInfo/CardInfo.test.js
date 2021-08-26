import React from 'react'
import { CardInfo } from './index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Renderizar un componente', () => {
	const props = {
		title: 'Asesoria Y administracion',
		description: 'te vamos a hacer una afiliacion',
		link: 'manage'
	}

	const component = render(
		<CardInfo
			title={props.title}
			description={props.description}
			link={props.link}
		/>
	)

	component.getByText(props.title)
})
