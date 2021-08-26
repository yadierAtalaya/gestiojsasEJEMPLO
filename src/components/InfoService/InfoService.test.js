import { InfoService } from './index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('Renderizar el texto del componente', () => {
	const component = render(<InfoService />)

	component.getByText('Asesoria, Administracion, Seguridad social')
	component.getByText('Outsourcing gestion humana')
})
