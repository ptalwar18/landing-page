import $ from 'jquery';
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

var mobileMenu = new MobileMenu(); 
new RevealOnScroll($('.icon'),'85%');
new RevealOnScroll($('.btn'),'60%');
