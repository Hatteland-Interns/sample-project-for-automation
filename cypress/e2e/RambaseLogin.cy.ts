import { upperCase } from "cypress/types/lodash";

describe('rambase login tests', () => {

  //testing the login flow and logout flow with correct credentials
  it('login and logout', function(){
    login('12125', 'Fi0#tello99@yllehs');
    cy.get('#btnSystemSelect').click()
    cy.get('[title="User Profile"]').click()
    cy.get('.profiledetails > .k-button').click()
  }),

  //testing the login flow with a wrong username
  it('login-wrong username', function(){
    login('12345', 'Fi0#tello99@yllehs');
    cy.get('.error-title').should('have.text', 'User is not found')
  }),


  //testing the login flow with a wrong password
  it('login-wrong password', function(){
    login('12125', 'wrongPw');
    cy.get('.error-title').should('have.text', 'Wrong password')
  }),

  //testing the login flow with a empty username
  it('login-empty username', function(){
    login('', 'Fi0#tello99@yllehs');
    cy.get('.error-title').should('have.text', 'Username and password can not be empty')
  }),

  //testing the login flow with a empty password
  it('login-empty password', function(){
    login('12125', '');
    cy.get('.error-title').should('have.text', 'Username and password can not be empty')
  })

  //login function
  function login(username: string, password: string) {
    cy.visit('https://release.rambase.net/account/login?ReturnUrl=%2F')
    cy.get('#userName').invoke('val', username)
    cy.get('#password').invoke('val', password)
    cy.get('#login').click()
  }
})
