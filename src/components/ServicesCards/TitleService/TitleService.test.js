import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { TitleService } from './index'

describe('<button />', () => {
	let component
	const props = {
		nameTitle: 'Servicios'
	}

	beforeEach(() => {
		component = render(<TitleService nameTitle={props.nameTitle} />)
	})

	test('render component Titleservice', () => {
		component.getByText('Servicios')
	})
})
