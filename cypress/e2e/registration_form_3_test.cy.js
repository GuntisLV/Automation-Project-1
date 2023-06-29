beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

//BONUS TASK: add visual tests for registration form 3

/*
Task list:
* Test suite for visual tests for registration form 3 is already created
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns
    * checkboxes, their content and links
    * email format
 */

describe('Section 1: visual tests', ()=> {
    it('Radio buttons and its content', () => {
        cy.get('input[type="radio"]').should('have.length', 4)
        cy.get('input[type="radio"]').next().eq(0).should('have.text','Daily').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','Weekly').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','Monthly').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','Never').and('not.be.checked')

        // Selecting one will remove selection from other radio button
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')     
    });

    it('Dropdown and dependencies between 2 dropdowns', () => {
        cy.get('#country').children().should('have.length', 4)

        // check if by selecting country Spain, it's cities are listed correctly in cities dropdown
        cy.get('#country').select('Spain')

        cy.get('#city').children().should('have.length', 5)
        cy.get('#city').find('option').eq(0).should('have.text', '')
        cy.get('#city').find('option').eq(1).should('have.text', 'Malaga')
        cy.get('#city').find('option').eq(2).should('have.text', 'Madrid')
        cy.get('#city').find('option').eq(3).should('have.text', 'Valencia')
        cy.get('#city').find('option').eq(4).should('have.text', 'Corralejo')

        // cy.get('#city').find('option').then(options => {
        //     const actual = [...options].map(option => option.value)
        //     expect(actual).to.deep.eq(['','Malaga', 'Madrid', 'Valencia', 'Corralejo'])
        // })
    })

    it.only('Checkboxes, their content and links', () => {
        cy.get('input[type="checkbox"]').should('have.length', 2)

        cy.get('input[type="checkbox"]').eq(0).should('have.text','').and('not.be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('have.text','Accept our privacy policy').and('not.be.checked')

        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).check()

        // check the first and second checbox whether they are checked
        cy.get('input[type="checkbox"]').eq(0).should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('be.checked')

        // cy.get('#city').find('option').then(options => {
        //     const actual = [...options].map(option => option.value)
        //     expect(actual).to.deep.eq(['','Malaga', 'Madrid', 'Valencia', 'Corralejo'])
        // })
    })
})

//BONUS TASK: add functional tests for registration form 3

/*
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + validation
    * only mandatory fields are filled in + validations
    * mandatory fields are absent + validations (try using function)
    * If city is already chosen and country is updated, then city choice should be removed
    * add file (google yourself for solution)
 */