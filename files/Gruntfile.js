module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    connect: {
      dev: {
        options: {
          port: 8000,
          base: './dist/'
        }
      }
    },


    assemble: {
      options: {
        layout: 'src/layouts/pages.hbs',
        flatten: true
      },
      pages: {
        files: {
          'dist/': ['src/pages/*.hbs']
        }
      }
    },
    copy: {
      main: {
        files: [ {expand: true, flatten: false, cwd: 'src/assets', src: ['**'], dest: 'dist/assets'} ]
      }
    },
    clean: {
      all: ['web/*.html']
    }


  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');



  /* grunt tasks */
  grunt.registerTask('default', ['clean', 'assemble', 'copy']);

};