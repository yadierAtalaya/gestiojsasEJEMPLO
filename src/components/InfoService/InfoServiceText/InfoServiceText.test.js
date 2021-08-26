import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InfoServiceText } from './index'
import React from 'react'

describe('Que tengan las classes a indicar', () => {
	let component

	const props = {
		title: 'Asesoria, Administracion, Seguridad social',
		description: 'estar en paz'
	}

	beforeEach(() => {
		component = render(
			<InfoServiceText
				title={props.title}
				description={props.description}
			/>
		)
	})

	test('see if the component renders the given text', () => {
		component.getByText('Asesoria, Administracion, Seguridad social')
	})
})
