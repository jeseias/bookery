import { renderUI } from '../../../__test__/utils-test'
import { getByTestId, cleanup } from '@testing-library/react'
// import 'jest-dom/extend-expect'

import Header from '../index'

afterEach(cleanup)

describe('Header Component Testing', () => {
  it('Renders without crashing', () => {
    renderUI(<Header />)
  })

  it('Center: Nav Container should be present', async () => {
    const { getByTestId } = await renderUI(<Header />)
    expect(getByTestId('center')).toBeInTheDocument()
  })
})
