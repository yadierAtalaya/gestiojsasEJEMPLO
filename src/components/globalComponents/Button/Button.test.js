import { Button } from './index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('<button />', () => {
	let component
	const props = {
		NameButton: 'Saber mas',
		link: '#'
	}

	beforeEach(() => {
		component = render(
			<Button NameButton={props.NameButton} link={props.link} />
		)
	})

	test('render component button', () => {
		component.getByText('Saber mas')
	})
})
