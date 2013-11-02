---
layout: post
title: Blog Design Solutions
categories:
- Book Reviews
- Current Technology
tags: []
status: publish
type: post
published: true
meta: {}
---
<p align="justify"><strong>Book Title:</strong> Blog Design Solutions
<strong>Authors:</strong> Andy Budd, Simon Collison, Chris J. Davis, Michael Meilemann, John Oxton, David Powers, Richard Rutter, Phil Sherry
<strong>Year written/published:</strong> 2006
<strong>My Comments:</strong> I basically zoomed into the chapters - 1,2,5,7. It’s an informative book about various blogging engines and how to build and code them. I picked up this book to give me some leads into the designs behind Wordpress and how it runs in php and mySQL. I learnt about new technology names lke Apache, Perl and CGI scripts which are used heavily for blogging engines. One great things about reading books is that gives us leads to more similar knowledge… i’ll definitely be picking up a book on Apache soon <img src="http://buibui.wordpress.com/wp-includes/images/smilies/icon_razz.gif" alt=":P" />
<strong>Contents page:</strong>
<ol>
	<li>The “Web log”</li>
	<li>Creating a local test environment for your blog</li>
	<li>Movable type</li>
	<li>ExpressionEngin</li>
	<li>Wordpress</li>
	<li>TextPattern</li>
	<li>Write your own Blog Engine</li>
</ol>
<strong> Some extracts:</strong>

some blogs by Geeks and Web designers:
<ul>
	<li><a closure_hashCode_="441" target="_blank" href="http://andybudd.com/">Andy Budd</a></li>
	<li><a closure_hashCode_="443" target="_blank" href="http://www.colly.com/">Simon Collison</a></li>
	<li><a closure_hashCode_="444" target="_blank" href="http://www.famousdavispro.com/">Chris Davis</a></li>
	<li><a closure_hashCode_="445" target="_blank" href="http://binarybonsai.com/">Michael Heilemann</a></li>
	<li><a closure_hashCode_="446" target="_blank" href="http://joshuaink.com/">John Oxton</a></li>
	<li><a closure_hashCode_="447" target="_blank" href="http://clagnut.com/">Richard Rutter</a></li>
	<li><a closure_hashCode_="448" target="_blank" href="http://japan-interface.co.uk/">David Powers</a></li>
</ul>
The blogging trend… found it amusingly true <img src="http://buibui.wordpress.com/wp-includes/images/smilies/icon_razz.gif" alt=":P" />
<blockquote>
<p align="justify">Previously the realm of angst-ridden teens spilling their guts about how nobody understands them (back in my days it was just “That is SO unfair! I hate you!! SLAM!” and stomp up the stairs to the bedroom to sulk), the blog has so quickly become big business. Everyone is doing it, from Joe Public in the high street , to politicians to Micosoft in Redmond.</p>
</blockquote>
Technologies for blogging…
<blockquote>
<p align="justify">To create a blogging system, you need 3 essential itmes: a web server application to serve the pages, a scripting language to code the pages with, and a database to store all your information.</p>
</blockquote>
database that runs behind blogging engins…
<blockquote>
<p align="justify">… … <strong>MySQL</strong>, the world’s most popular open-source database, which i spowerful, easy to use and best of all - free for most people. The way your website sommunicates with the databse is through a scripting language. The one most frequently found in combination with MySQL is <strong>PHP</strong>, another open-source project that’s also powerful, easy to use and free.</p>
</blockquote>
This is what happens when somebody visits your blog:
<ol>
	<li>the request for the page is received by the Apache web server</li>
	<li>Apache summons the PHP or CGI script. Most times this will trigger a call to the database, but sometimes the script can send the necessary XHTML output straight back to the web server, bypassing the remaining stages</li>
	<li>the script usually needs to fetch your blog entries from the database, so it sends a username and password to MySQL, along with instructions of what to receive.</li>
	<li>MySQL sends the information back to the script, which generates the necessary XHTML to display the particular view of the blog requensted by the visitor</li>
	<li>The script seds the finished page to Apache, which serves up all the XHTML, CSS and images just like ordinary web page</li>
</ol>
little intro to Wordpress coding… found this funny again :P…
<blockquote>Before we venture forth into the side wonderful world of PHP, CSS and HTML, we should let you in on a dirty little secret: Michael couldn’t write PHP to save his life. The first and foremost important lesson we can impart to you is this: Templating in Wordpress does not require a degree in differential equations; it only requires the willingness to learn and experiment.</blockquote>
Wordpress Support
<blockquote>
<ul>
	<li><a closure_hashCode_="449" target="_blank" href="http://wordpress.org/">wordpress .org</a></li>
	<li><a closure_hashCode_="450" target="_blank" href="http://wordpress.org/support/">forum</a></li>
	<li><a closure_hashCode_="451" target="_blank" href="http://codex.wordpress.org/Main_Page">codex</a></li>
	<li><a closure_hashCode_="452" target="_blank" href="http://wordpress.org/extend/plugins/">plugins</a></li>
	<li><a closure_hashCode_="453" target="_blank" href="http://codex.wordpress.org/Templates">templates</a></li>
	<li><a closure_hashCode_="454" target="_blank" href="http://codex.wordpress.org/Template_Tags">template tags</a></li>
</ul>
</blockquote>
Wordpress template file based on <a closure_hashCode_="455" target="_blank" href="http://binarybonsai.com/wordpress/kubrick/">Kubrick </a>default theme
<blockquote>
<ul>
	<li>index.php</li>
	<li>style.css</li>
	<li>header.php</li>
	<li>footer.php</li>
	<li>sidebar.php</li>
	<li>single.php</li>
	<li>comments.php</li>
	<li>comments.php</li>
	<li>archive.php</li>
	<li>search.php</li>
</ul>
</blockquote>
