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
import header from 'headers/1/_';
import nav from 'navigation/1/_';
import footer from 'footers/1/_';

// EXECUTION
document.addEventListener('DOMContentLoaded', () => {

    nav();
    smooth();
    header();
    footer();

});
