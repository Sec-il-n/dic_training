require 'cgi'

cgi = CGI.new
cgi.out("type" => "text/html", "charset" => "UTF-8") {
  get = cgi['self_consumption']
  "<html>
    <body>
      <p>譲渡先が自家消費ではないgoya情報</p>
      <p>文字列：#{get}</p>
    </body>
  </html>"
}
