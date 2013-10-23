Application = require './application'
routes = require './routes'

# Initialize the application on DOM ready event.
$ ->
  console.log "dom loaded"
  new Application {
    title: 'Brunch example application',
    controllerSuffix: '-controller',
    routes
  }
