require 'cgi'

cgi = CGI.new
cgi.out("type" => "text/html", "charset" => "UTF-8") {
  get = cgi['quality_false']
  "<html>
    <body>
      <p>品質が悪いgoya情報</p>
      <p>文字列：#{get}</p>
    </body>
  </html>"
}
