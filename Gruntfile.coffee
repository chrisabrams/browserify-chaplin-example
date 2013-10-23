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
            'tmp/**/*.coffee'
            'tmp/**/*.js'
          ]
        options:
          debug: true
          transform: ['coffeeify']
          extensions: ['.coffee']
          shim:
            jquery:
              path: 'vendor/jquery.js'
              exports: '$'
            # underscore:
            #   path: 'vendor/lodash.js'
            #   exports: '_'
            # backbone:
            #   path: 'vendor/backbone.js'
            #   exports: 'Backbone'
            #   depends:
            #     jquery: '$'
            #     underscore: '_'
            # chaplin:
            #   path: 'vendor/chaplin.js'
            #   exports: 'Chaplin'
            #   depends:
            #     backbone: 'Backbone'

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
      blah:
        files: [
          {
            expand: true
            cwd: 'app/'
            src: ['**/*.coffee']
            dest: 'tmp/'
            filter: 'isFile'
          }
        ]
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

    express:
      dev:
        options:
          port: 4040
          script: 'server.js'

    # handlebars:
    #   dist:
    #     files: grunt.file.expandMapping(['app/templates/**/*.hbs'], 'tmp/templates/', {
    #       rename: (destBase, destPath) ->
    #         return destBase + destPath.split('app/templates/')[1].replace /\.hbs$/, '.js'
    #     })

    handlebars:
      compile:
        expand: true
        cwd: 'app/templates/'
        src: '**/*.hbs'
        dest: 'tmp/templates/'
        ext: '.js'
        options:
          commonjs: true
          node: true

    # handlebars:
    #   options:
    #     commonjs: true
    #   files:
    #     'tmp/foo.js': ['app/templates/*.hbs']

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

  # Load installed tasks
  grunt.file.glob
  .sync('./node_modules/grunt-*/tasks')
  .forEach(grunt.loadTasks)

  grunt.registerTask 'foo', ['clean', 'copy', 'handlebars', 'browserify']
  grunt.registerTask 'default', 'foo'
