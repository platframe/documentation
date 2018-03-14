module.exports = {

    options: {
        mangle: false,
        report: 'min',
        preserveComments: 'some',
        banner: '/*! <%= package.name %> | v<%= package.version %> | <%= grunt.template.today("yyyy-mm-dd") %> | © <%= package.name %> - MIT Licensed */\n'
    },
    compress: {
        files: {
            '<%= prod_log %>js/root.js': ['<%= rollup.files.dest %>']
        }
    }

};
