describe('Login', () => {
  it('Iniciar Sesion', () => {
    cy.visit(Cypress.env('base'));
    cy.get('#biblio').click();
    cy.get('#u').type('admin');
    cy.get('#p').type('admin');
    cy.get('.btn-primary').click();

  })
})

describe('Biblioteca', () => {
  it('Biblio', () => {
    cy.visit(Cypress.env('base'));
    cy.get('#biblio').click();
    cy.get('#u').type('admin');
    cy.get('#p').type('admin');
    cy.get('.btn-primary').click();
    cy.get('#biblio').click();
  })
})

describe('Libro', () => {
  it('Biblio', () => {
    cy.visit(Cypress.env('base'));
    cy.get('#biblio').click();
    cy.get('#u').type('admin');
    cy.get('#p').type('admin');
    cy.get('.btn-primary').click();
    cy.get('#harry').click();
  })
})

describe('agregar', () => {
  it('Biblio', () => {
    cy.visit(Cypress.env('base'));
    cy.get('#biblio').click();
    cy.get('#u').type('admin');
    cy.get('#p').type('admin');
    cy.get('.btn-primary').click();
    cy.get('#libro').click();
    cy.get('#biblio').click();
  })
})

describe('Cambio', () => {
  it('Biblio', () => {
    cy.visit(Cypress.env('base'));
    cy.get('#biblio').click();
    cy.get('#u').type('admin');
    cy.get('#p').type('admin');
    cy.get('.btn-primary').click();
    cy.get('#biblio').click();
    cy.get('#cambio', {delay:150}).click();
  })
})

describe('Comentario', () => {
  it('Biblio', () => {
    cy.visit(Cypress.env('base'));
    cy.get('#biblio').click();
    cy.get('#u').type('admin');
    cy.get('#p').type('admin');
    cy.get('.btn-primary').click();
    cy.get('#harry').click();
    cy.get('.form-control').type('Good book');
    cy.get('#puntos').type('1');
    cy.get('.btn-primary').click();
  })
})