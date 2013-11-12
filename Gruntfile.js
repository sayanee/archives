module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      assets: ['style.css']
    },
    compass: {
      production: {
        options: {
          specify: 'sass/style.sass',
          cssPath: '_publish',
          outputStyle: 'compressed',
          noLineComments: true
        }
      }
    },

    watch: {
      styles: {
        files: ['sass/**/*.sass'],
        tasks: ['compass:production']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean', 'compass',  'watch']);

};
