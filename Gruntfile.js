module.exports = function(grunt) {

  grunt.initConfig({
    jsdoc: {
      dist: {
        src: ['exercises/*.js'], 
        options : {
          destination : 'doc',
          template : 'node_modules/ink-docstrap/template',
          configure : 'jsdoc.conf.json'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('default', ['jsdoc']);
};