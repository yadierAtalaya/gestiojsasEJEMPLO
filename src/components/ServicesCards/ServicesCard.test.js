import { ServicesCards } from './index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('render ServiceCard Component', () => {
	let component

	beforeEach(() => {
		component = render(<ServicesCards />)
	})

	test('render component index xxx', () => {
		const serviceCardTarg = component.container.firstChild

		expect(serviceCardTarg).toHaveClass('bg-container')
	})
})
