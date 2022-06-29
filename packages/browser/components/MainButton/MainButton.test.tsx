import { render } from '@redwoodjs/testing/web'

import MainButton from './MainButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainButton />)
    }).not.toThrow()
  })
})
