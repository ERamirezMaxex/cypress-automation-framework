/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  


describe("Alias and Invoke", ()=> {

    it("Validate an specific hair care product",() => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path']").contains('Hair Care').click();


        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
        cy.get('@productThumbnail').its('length').should('be.gt',5);
        cy.get('@productThumbnail').should('contain', 'Seaweed Conditioner');


    });

    it("Challenge of getting validating number of thumbnails and tittle of cart",() => {
        cy.visit("https://www.automationteststore.com/");

        cy.get('.thumbnail').should('have.length',16);
        cy.get('.productcart').invoke('attr','title').should('include', 'Add to Cart')


    });

    it.only("Calculate total of normal and sales products",() => {
        cy.visit("https://www.automationteststore.com/");

        cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) =>{
        //     cy.log($el.text())
        // })

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPriceNonSale');
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('itemPriceSale');

        var grandTtl=0;
        cy.get('@itemPriceNonSale').then($linkText => {
            var itemPriceTotalNonSale = 0;
            var itemPrice = $linkText.split('$');
            var i;
            
            for (i=0; i< itemPrice.length;i++){
                itemPriceTotalNonSale+= Number(itemPrice[i]);
            };
            cy.log('Non-Sale Items price total: $' + itemPriceTotalNonSale);
            grandTtl+=itemPriceTotalNonSale

        })
    

        cy.get('@itemPriceSale').then($linkTextSale => {
            var itemPriceTotalSalePrice = 0;
            var itemPriceSale = $linkTextSale.split('$');
            var i;
            
            for (i=0; i< itemPriceSale.length;i++){
                itemPriceTotalSalePrice+= Number(itemPriceSale[i]);
            };
            grandTtl+=itemPriceTotalSalePrice
            cy.log('Sale Items price total: $' + itemPriceTotalSalePrice);

        })
        .then(()=>{
            cy.log('The Grand Total is: $' + grandTtl);
            expect(grandTtl).to.equals(648.5)
        })

    });


})