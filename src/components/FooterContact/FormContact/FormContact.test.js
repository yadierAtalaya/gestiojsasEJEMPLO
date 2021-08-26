import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {FormContact} from './index'


test('render component', ()=>{
    const Component = render(<FormContact/>)
    const FormContactElement = Component.container.firstChild

    Component.getByText('Escribe tú correo, dejanos el resto a nosotros')
    Component.getByText('te brindamos asesorías para una mejor elección')
    expect(FormContactElement).toHaveClass('form')
})