import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { IconsContact } from '.'


test('render Component',()=>{
    const Component = render(<IconsContact/>)

    expect(Component.container.firstChild).toHaveClass('iconsContact')
})