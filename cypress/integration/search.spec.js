/* global describe, it, cy */
import users from '../../src/constants/users.json'
import * as API from '../../src/constants/api'

describe('Search', function () {
  it('Search for a user', function () {
    cy.server() // enable response stubbing

    cy.route({
      method: 'GET',
      url: API.USERS,
      response: [...users]
    })
    cy.visit('http://localhost:3000')

    cy.get('input').type('Clementin')

    cy.get('ol').find('li').should('have.length', 2)
  })
})
