describe('rambase create cus test', () => {

  //creating a customer with the standard way
  it('create customer', function(){
    cy.visit('https://release.rambase.net/account/login?ReturnUrl=%2F')
    cy.get('#userName').type('12125')
    cy.get('#password').type('Fi0#tello99@yllehs')
    cy.get('#login').click()
    cy.get('#btnSystemSelect').click()
    cy.wait(1000)
    cy.get('#txtDoc').type('TEM-NO:cus{enter}')
    cy.wait(10000)
    cy.get('.rb-AddNewBtn').click()
  })
})
