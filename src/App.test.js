import App from './App'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('render component', () => {
	const Component = render(<App />)

	expect(Component.container.firstChild).toHaveClass('App')
})
