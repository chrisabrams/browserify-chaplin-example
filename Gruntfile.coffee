module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'

    browserify:
      app:
        files:
          'public/js/app.js': [
            'tmp/**/*.js'
          ]
        options:
          debug: true
          external: ['jquery', 'underscore', 'backbone', 'handlebars', 'chaplin']

      vendor:
        dest: 'public/js/vendor.js'
        src: [
          #'vendor/jquery.js'
          #'vendor/underscore.js'
          #'vendor/backbone.js'
          #'vendor/handlebars.js'
          #'vendor/chaplin.js'
        ]
        options:
          shim:
            backbone:
              path: 'vendor/backbone.js'
              exports: 'backbone'
            chaplin:
              path: 'vendor/chaplin.js'
              exports: 'chaplin'
            handlebars:
              path: 'vendor/handlebars.js'
              exports: 'handlebars'
            jquery:
              path: 'vendor/jquery.js'
              exports: '$'
            underscore:
              path: 'vendor/underscore.js'
              exports: '_'

    clean:
      dist: ['public/', 'tmp/']

    coffee:
      app:
        expand: true
        cwd: 'app/'
        src: '**/*.coffee'
        dest: 'tmp/'
        ext: '.js'

    coffeeify:
      app:
        files:
          'public/js/app.js': 'app/**/*.coffee'

    commonjs:
      modules:
        cwd: 'tmp/'
        src: ['**/*.js']
        dest: 'tmp/'

    concat:
      distCss:
        src: [
          'vendor/styles/bootstrap.css'
          'tmp/css/app.css'
          'vendor/styles/helpers.css'
        ]
        dest: 'public/css/app.css'
      devJs:
        files:
          'public/js/app.js': '<%= jsFiles %>'

    copy:
      dist:
        files: [
          {
            expand: true
            cwd: 'app/assets/'
            src: ['**']
            dest: 'public/'
            filter: 'isFile'
          }
        ]
      test:
        files: [
          {
            expand: true
            cwd: 'app/assets/'
            src: ['**']
            dest: 'test/public/'
            filter: 'isFile'
          }
        ]

    express:
      dev:
        options:
          port: 4040
          script: 'server.js'

    handlebars:
      dist:
        files: grunt.file.expandMapping(['app/templates/**/*.hbs'], 'tmp/templates/', {
          rename: (destBase, destPath) ->
            return destBase + destPath.split('app/templates/')[1].replace /\.hbs$/, '.js'
        })

    livereload:
      options:
        base: 'public',
      files: ['public/**/*']

    mincss:
      dist:
        files:
          "public/css/app.css": "public/css/app.css"

    stylus:
      dist:
        options:
          compress: false
          paths: ['app/css']
        files:
          'tmp/css/app.css': 'app/css/application.styl'

    jsFiles: [
      'vendor/scripts/before/before.js'
      'vendor/scripts/bower/commonjs/common.js'
      'vendor/scripts/bower/underscore/underscore.js'
      'vendor/scripts/bower/underscore.string/dist/underscore.string.min.js'
      'vendor/scripts/bower/backbone/backbone.js'
      'vendor/scripts/before/backbone.validation.min.js'
      'vendor/scripts/before/chaplin.js'
      'vendor/scripts/before/handlebars.js'
      'vendor/scripts/bower/store.js/store.js'
      'vendor/scripts/before/bootstrap.js'
      'vendor/scripts/bower/typeahead.js/typeahead.js'
      'vendor/scripts/before/bootstrap-formhelpers-selectbox.js'
      'vendor/scripts/before/bootstrap-formhelpers-states.js'
      'vendor/scripts/before/bootstrap-formhelpers-states.en_US.js'
      'vendor/scripts/before/bootstrap.select.min.js'
      'vendor/scripts/before/jquery.payment.js'
      'vendor/scripts/libs/**/*.js'
      'tmp/**/*.js'
      'vendor/scripts/before/after.js'
    ]

    mocha:
      test:
        src: "http://localhost:4466/index.html"
        mocha:
          ignoreLeaks: false
          timeout: 20000
        run: true

    uglify:
      options:
        mangle: false
      dist:
        files:
          'public/js/app.js': '<%= jsFiles %>'
      test:
        options:
          beautify: true
        files:
          'test/public/js/app.js': '<%= jsFiles %>'
      vendor:
        files:
          'public/js/vendor.js': [
            #'vendor/common.js'
            'vendor/jquery.js'
            'vendor/lodash.js'
            'vendor/backbone.js'
            'vendor/handlebars.js'
            'vendor/chaplin.js'
          ]

    watch:
      assets:
        files: ['app/assets/**/*'],
        tasks: ['copy']
        options:
          debounceDelay: 50
      css:
        files: ['app/css/**/*.styl'],
        tasks: ['styles']
        options:
          debounceDelay: 50
      express:
        files: ['server.js']
        tasks: ['express:dev']
        options:
          nospawn: true
      hbs:
        files: ['app/templates/**/*.hbs']
        tasks: ['scripts', 'concat:devJs']
        options:
          debounceDelay: 250
      js:
        files: ['app/**/*.coffee'],
        tasks: ['scripts', 'concat:devJs']
        options:
          debounceDelay: 250

  #grunt.loadNpmTasks 'grunt-bower-task'
  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-coffeeify'
  #grunt.loadNpmTasks 'grunt-commonjs'
  grunt.loadNpmTasks 'grunt-commonjs-handlebars'
  #grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  #grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  #grunt.loadNpmTasks 'grunt-contrib-cssmin'
  #grunt.loadNpmTasks 'grunt-contrib-jshint'
  #grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  #grunt.loadNpmTasks 'grunt-contrib-watch'
  #grunt.loadNpmTasks 'grunt-express-server'
  #grunt.loadNpmTasks 'grunt-livereload'
  #grunt.loadNpmTasks 'grunt-mocha'

  grunt.registerTask 'foo', ['clean', 'handlebars', 'coffee:app', 'browserify:vendor', 'browserify:app', 'copy']
