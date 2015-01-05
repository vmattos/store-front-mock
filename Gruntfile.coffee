proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest


module.exports = (grunt) ->

  pkg = grunt.file.readJSON 'package.json'

  gruntConfig =
    connect:
      server:
        options:
          port: 80
          hostname: 'localhost'
          base: ['src']
          open: true
          middleware: (connect) ->
            return [
              proxySnippet
              connect.static('src')
            ]
        proxies: [
          {
            context: [
              '/arquivos'
              '/api'
              '/no-cache'
              '/Site'
            ]
            host: 'www.meuamigopet.com.br'
            headers:
              'host': 'www.meuamigopet.com.br'
          }
        ]


  grunt.initConfig gruntConfig

  tasks =
    default: ['configureProxies:server', 'connect:server:keepalive']

  grunt.loadNpmTasks name for name of pkg.devDependencies when name[0..5] is 'grunt-'
  grunt.registerTask taskName, taskArray for taskName, taskArray of tasks