/// <reference types="Cypress" />

context('Actions', () => {
  it('add 2 todos', () => {
    cy.visit('/')

    cy.get('.new-todo')
      .type('ir al supermercado{enter}')
      .type('comprar carne{enter}')

    cy.get('.todo-list li').should('have.length', 2)
  })
})
