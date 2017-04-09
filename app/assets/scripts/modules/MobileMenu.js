import $ from 'jquery';
class MobileMenu {
    constructor(){
        this.siteHeader = $(".site-header");  
       this.menuIcon = $('.site-header__menu-icon'); 
        this.menuContent = $('.site-header__menu-content');
        this.headerLinks = $(".primary-nav a");
        this.events();
        
    } 
    
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.headerLinks.click(this.toggleTheMenu.bind(this));
    }
    
    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        
    } 
}

export default MobileMenu; 