/** import external dependencies */
import $ from 'jquery';
import 'bootstrap';

// Import Slick
import 'slick-carousel/slick/slick.min';

import 'masonry-layout/masonry';


import './sticky-scroll';

import servay from './servay';

import match from './match';

import feedback from './feedback';

// Import everything from autoload
//import slick_main_slideshow from './autoload/slick_main_slideshow';

$(document).ready( () => {
    $('.slick-slideshow').slick()
})


window.servay = new servay()

window.feedback = new feedback()

window.match = new match()

