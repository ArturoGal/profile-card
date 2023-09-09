describe('Profile Card testing', () => {
    it('Has correct title', () => {
        cy.visit('/src');
        cy.get('h1').its('length').should('eq', 1);
        cy.get('h1').should(heading => {
            expect(heading.text()).to.equal('Tottenham Hotspur')

        });
    });

    it('Renders players', () => {
        cy.visit('/src');
        cy.get('profile-card').its('length').should('eq', 4);
    });


});