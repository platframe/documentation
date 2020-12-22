/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ROOT  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Main entry point for client-side JavaScript, bundled as IIFE.      ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

// DEPENDENCIES

// external
import 'prismjs';
import 'prismjs/components/prism-pug.js';
import 'prismjs/components/prism-stylus.js';

// modules
import { smooth } from 'modules/scroll';

// components
import header1 from 'headers/1/_';
import nav1 from 'navigation/1/_';
import footer1 from 'footers/1/_';
import gallery1 from 'galleries/1/logic/';
import carousel1 from 'carousels/1/_';

// EXECUTION
document.addEventListener('DOMContentLoaded', () => {

    nav1();
    smooth();
    header1();
    footer1();
    carousel1();
    gallery1({ navigation: true, autoplay: true });

});
