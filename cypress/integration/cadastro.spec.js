/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

describe('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        cy.visit('/Register.html');
        
        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[placeholder="Last Name"]').type(chance.last());
        cy.get('input[placeholder="Last Name"]').type(chance.last());
        cy.get('textarea[ng-model="Adress"]').type('Texto para testes.');
        cy.get('input[ng-model="EmailAdress"]').type(chance.email());
        cy.get('input[ng-model="Phone"]').type(chance.phone( {formatted: false} ));
       
        cy.get('input[value=Male]').check();
        
        cy.get('input[type=checkbox]').check('Cricket');
        cy.get('input[type=checkbox]').check('Hockey');
       
        cy.get('select[id="Skills"]').select('PHP');
        cy.get('select[id="countries"]').select('Aruba');
        cy.get('select[id="country"]').select('Japan', {force: true});
        cy.get('select[id="yearbox"]').select('1990');
        cy.get('select[ng-model="monthbox"]').select('July');
        cy.get('select[id="daybox"]').select('8');

        cy.get('input[id="firstpassword"]').type('Teste@1234');
        cy.get('input[id="secondpassword"]').type('Teste@1234');

        cy.get('#imagesrc').attachFile('churrasco.jpeg')

        cy.server()
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**')
          .as('getNewtable'); 
       
        cy.get('button[id="submitbtn"]').click();

        cy.wait('@getNewtable').then((resNewtable) => {
           console.log(resNewtable.status);
           cy.log(resNewtable.status);
           expect(resNewtable.status).to.eq(200);
        });
    });
});