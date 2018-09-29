module.exports = {

    // development server
    options: {
        server: {
            index: 'index.html'
        },
        notify: false,
        online: true,  // false: skips DNS lookup, disables "External" address
        logLevel: 'info',
        logConnections: true,
        reloadOnRestart: true,
    },
    dev: {
        options: {
            server: { baseDir: '<%= dev %>' },
            watchTask: true,
            open: false,
            reloadDelay: 1000, // delay in the case of immediate subsequent file changes
            port: '<%= package.config.port %>',
            logPrefix: '<%= package.name %>' + ' @ v' + '<%= package.version %>' + ' (env: development)'
        }
    }

};
