class HomePage_PO {
    visitHomePage(){
        cy.visit("https://www.automationteststore.com/",{timeout: 60000});
    }

    clickOn_HairCare_Link(){
        cy.get("a[href*='product/category&path']").contains('Hair Care').click();
    }

}
export default HomePage_PO;