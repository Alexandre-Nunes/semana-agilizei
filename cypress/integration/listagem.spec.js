/// <reference types="cypress" />

context('Listagem', () => {
    it.only('Listagem sem registros', () => {
        cy.server()
        cy.route({
          method: 'GET',
          url: '**/api/1/databases/userdetails/collections/newtable?**',
          status: '200',
          response: []
        }).as('getNewtable'); 

        cy.visit('/WebTable.html');

        cy.get('div[role=row]').should('have.length', 1);

    });
    it('Lstagem com 1 registro', () => {
        cy.server()
        cy.route({
          method: 'GET',
          url: '**/api/1/databases/userdetails/collections/newtable?**',
          status: '200',
          response: [
            {
               "_id":{
                  "$oid":"5bbcbede1f6e4f0840a1d296"
               },
               "FirstName":"Jhoan",
               "LastName":"Marquez",
               "Email":"j.marquezcastrillon@tcs.com",
               "Phone":"3165795499",
               "Gender":"Male"
            }
         ]
        }).as('getNewtable'); 

        cy.visit('/WebTable.html');

        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
        cy.get('@gridCellPhone').should('contain.text', '3165795499');

    });
});