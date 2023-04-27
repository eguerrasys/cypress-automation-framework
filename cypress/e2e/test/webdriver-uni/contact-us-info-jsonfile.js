/// <reference types="cypress"/>

describe("Test Contact Us from via WebDriverUni", () => {

    before(function(){
        cy.fixture('example').then(function(data){
            //this.data= data;
            globalThis.data=data;
        })
    })

    //  ADDING LOGIC INTO THE FUNCTION, setting the following values directly inside of our individual test, it will be overwrite the values given in cypress.config  
    it("Should be able to submit a successful submission via contact us form",{
        retries:{
            runMode:0,
            openMode:2
        }
    }, () => {
       // it("Should be able to submit a successful submission via contact us form", () => {
    //     //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us55').invoke('removeAttr', 'target').click({force:true})
        cy.document().should('have.property', 'charset').and('eq','UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include','Contact')
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type("First test");
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', 'Thank You for your Message!');
        cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name, data.email,"First test",'h1','Thank You for your Message!')
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('textarea.feedback-input').type("First test");
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains('Error: all fields are required')
        cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name, " ","First test",'body','Error: Invalid email adress')

    });
});