describe('Access All Pages', () => {
  it('accee pages', () => {
    cy.visit('http://localhost:3000/')
    // component and layout
    cy.get('ul.jsx-23ac29929d5d7db8 > :nth-child(1) > a').click()
    cy.wait(500)
    cy.get('.Layout_nav__0NlwA > a').click()
    // bootstrap
    cy.get('ul.jsx-23ac29929d5d7db8 > :nth-child(2) > a').click()
    cy.wait(500)
    cy.get('.Layout_nav__0NlwA > a').click()
    // image
    cy.get('ul.jsx-23ac29929d5d7db8 > :nth-child(3) > a').click()
    cy.get('.Layout_main__T_Jjv > :nth-child(2)').click()
    cy.get('.Layout_main__T_Jjv > :nth-child(1)').click()
    cy.get('.Layout_nav__0NlwA > a').click()
  })
})
