//// Listagem sem registros
Given(/^que o site não possui registros$/, () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '**/api/1/databases/userdetails/collections/newtable?**',
      status: '200',
      response: []
    }).as('getNewtable'); 
});

When(/^acessar a listagem$/, () => {
    cy.visit('/WebTable.html');
});

Then(/^devo visualizar a listagem vazia$/, () => {
    cy.get('div[role=row]').should('have.length', 1);
});

/////////// Listagem com apenas um registro

Given(/^que o site possui apenas um registro$/, () => {
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
});


Then(/^devo visualizar apenas um registro$/, () => {
    cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
    cy.get('@gridCellPhone').should('contain.text', '3165795499');
});
