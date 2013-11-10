module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            livereload: {
                files: [
                    'app/index.html',
                    'app/scripts/**.js',
                ],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'app',
                    livereload: true
                }
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['connect:server', 'watch:livereload']);
}
