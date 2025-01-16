class HairCare_PO {

add_HairCare_Product_To_Basket (){
    globalThis.product.productName.forEach(element => {
        cy.addProduct(element);
    });

    cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()
}   


}
export default HairCare_PO;