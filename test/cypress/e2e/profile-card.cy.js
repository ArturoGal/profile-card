describe('Profile Card testing', () => {

    beforeEach(() => {
        cy.visit('/src');
    });

    it('Has correct title', () => {
        cy.get('h1').should('have.length', 1).should(heading => {
            expect(heading.text()).to.equal('Tottenham Hotspur');
            expect(heading).to.have.css('font-size', '60px');
            expect(heading).to.have.css('font-family', 'ApexNew, "Helvetica Neue", sans-serif');
            expect(heading).to.have.css('color', 'rgb(17, 24, 54)');
        });
    });

    it('Renders players correctly', () => {
        cy.get('profile-card').shadow().find('div.profile-card').each(cardContainer => {
            expect(cardContainer).to.have.css('width', '270px');
            expect(cardContainer).to.have.css('margin', '10px');
            expect(cardContainer).to.have.css('background-color', 'rgb(17, 24, 54)');
            expect(cardContainer).to.have.css('border-radius', '6%');
            expect(cardContainer).to.have.css('font-family', 'ApexNew, "Helvetica Neue", sans-serif');
            expect(cardContainer).to.have.css('color', 'rgb(255, 255, 255)');

            cy.wrap(cardContainer).within(() => {
                cy.get('.kit-number').should(kitNumber => {
                    expect(kitNumber).to.have.css('font-size', '48px');
                    expect(Number.isNaN(+kitNumber.text())).to.be.false;
                    expect(Number(kitNumber.text())).to.be.greaterThan(0);
                });

                cy.get('.photo').should(photo => {
                    expect(photo).to.have.css('width', '250px');
                    expect(photo).to.have.css('height', '280px');
                });

                cy.get('.name').should(name => {
                    expect(name.text().length).to.be.greaterThan(0);
                    expect(name).to.have.css('font-size', '32px');
                });

                cy.get('.position-label').should(positionLabel => expect(positionLabel.text()).to.equal('Position: '));
                cy.get('.position').should(position => expect(position.text().length).to.be.greaterThan(0));

                cy.get('.country-label').should(countryLabel => expect(countryLabel.text()).to.equal('Country: '));
                cy.get('.country').should(country => expect(country.text().length).to.be.greaterThan(0));

                cy.get('.age-label').should(ageLabel => expect(ageLabel.text()).to.equal('Age: '));
                cy.get('.age').should(age => {
                    expect(Number.isNaN(+age.text())).to.be.false;
                    expect(Number(age.text())).to.be.greaterThan(0);
                });

                cy.get('.goals-label').should(goalsLabel => expect(goalsLabel.text()).to.equal('Goals: '));
                cy.get('.goals').should(goals => {
                    expect(Number.isNaN(+goals.text())).to.be.false;
                    expect(Number(goals.text())).to.be.greaterThan(-1);
                });

                cy.get('.assists-label').should(assitsLabel => expect(assitsLabel.text()).to.equal('Assists: '));
                cy.get('.assists').should(assists => {
                    expect(Number.isNaN(+assists.text())).to.be.false;
                    expect(Number(assists.text())).to.be.greaterThan(-1);
                });
            });
        })
    });
});