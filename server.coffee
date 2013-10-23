# - Dependencies
global.__base = __dirname

Chaplin       = require 'chaplin'
hbs           = require 'hbs'
util          = require 'util'

express       = require 'express'
server        = express()

port          = 4040

# - Server Settings
#server.set 'views', path.join(__dirname)
server.set 'view engine', 'hbs'
server.set 'view options', { layout: false }
server.engine 'hbs', hbs.__express

server.use express.static __base + '/public'
server.use express.favicon()
server.use express.logger 'dev'
server.use express.query()
server.use express.bodyParser()
server.use express.cookieParser 'fosho'
server.use express.methodOverride()
server.use express.errorHandler()
server.use server.router

#require('the-tramp')(__base + '/app', hbs.handlebars, server, paths)

server.get '*', (req, res) ->

  res.render 'index',
    layout: false

server.listen port
util.log "Express server instance listening on port " + port
