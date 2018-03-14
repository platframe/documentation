const nodeResolve = require('rollup-plugin-node-resolve'),
    includePaths = require('rollup-plugin-includepaths'),
    // upgrade to Babel 7 once rollup-plugin-babel@next is stable
    babel = require('rollup-plugin-babel');

module.exports = {

    options: {
        format: 'iife',
        plugins: [
            nodeResolve(),
            includePaths({
                include: {},
                paths: ['src/components', 'src/logic/js'],
                external: [],
                extensions: ['.js']
            }),
            babel({
                exclude: 'node_modules/**'
            })
        ]
    },
    files: {
        'src' : '<%= src_log %>js/root.js',
        'dest': '<%= dest %>/assets/logic/js/root.js'
    }

};
