/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ROOT  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Main entry point for client-side JavaScript, bundled as IIFE.      ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

// 🔄 DEPENDENCIES

// modules
import { smooth } from 'modules/scroll';

// components
import header from 'headers/1/_';
import nav from 'navigation/1/_';
import footer from 'footers/1/_';

// documentation previews
import header_1 from 'headers/1/internal/_';
import nav_1 from 'navigation/1/internal/_';

// npm
import 'prismjs';
import 'prismjs/components/prism-pug.js';
import 'prismjs/components/prism-stylus.js';

// ⚙ EXECUTION
document.addEventListener('DOMContentLoaded', () => {

    smooth();
    header();
    nav();
    footer();

    // documentation previews
    header_1();
    nav_1();

});
