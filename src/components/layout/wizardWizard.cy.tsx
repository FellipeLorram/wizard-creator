import React from 'react'
import { Wizard } from './wizard'

describe('<Wizard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Wizard />)
  })
})