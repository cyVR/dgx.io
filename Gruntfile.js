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
        flatten: true,
        partials: './src/include/**/*.hbs'
      },
      pages: {
        files: [
          { cwd: './src/pages', src: '**/*.hbs', dest: './dist/', expand: true },
          { cwd: './src/blog', src: '**/*.hbs', dest: './dist/blog/', expand: true}
        ]
      }
    },
    copy: {
      main: {
        files: [ {expand: true, flatten: false, cwd: 'src/assets', src: ['**'], dest: 'dist/assets'} ]
      }
    },
    clean: {
      all: ['dist/*.html']
    }


  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');



  /* grunt tasks */
  grunt.registerTask('default', ['clean', 'assemble', 'copy']);

};