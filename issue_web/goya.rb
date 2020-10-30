# Web サーバとして完全に動作するスクリプト
require 'webrick'
server = WEBrick::HTTPServer.new({ :DocumentRoot => '.',
                                # :BindAddress => '127.0.0.1',
                                :CGIInterpreter => WEBrick::HTTPServlet::CGIHandler::Ruby,
                                :Port => 3000})
['INT', 'TERM'].each {|signal|
  Signal.trap(signal){ server.shutdown }
}
server.mount('/', WEBrick::HTTPServlet::ERBHandler, 'goya.html.erb')
server.mount('/self_consumption.cgi', WEBrick::HTTPServlet::CGIHandler, 'self_consumption.rb')
server.mount('/false_goya.cgi', WEBrick::HTTPServlet::CGIHandler, 'false_goya.rb')
server.start
