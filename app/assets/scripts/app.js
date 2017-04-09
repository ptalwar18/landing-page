import $ from 'jquery';
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
var mobileMenu = new MobileMenu(); 
new RevealOnScroll($('.icon'),'85%');
new RevealOnScroll($('.btn'),'60%');
var stickyHeader = new StickyHeader();