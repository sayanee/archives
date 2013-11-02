---
layout: post
title: Cascading Style Sheets by Hakon Wium Lie & Bert Bos
categories:
- Book Reviews
- Current Technology
tags: []
status: publish
type: post
published: true
meta: {}
---
<p align="left"><strong>Book Title:</strong> Cascading Style Sheets - Designing for the web
<strong>Authors:</strong> <a href="http://en.wikipedia.org/wiki/H%C3%A5kon_Wium_Lie">Hakon Wium Lie</a> &amp; <a href="http://en.wikipedia.org/wiki/Bert_Bos">Bert Bos
</a><strong>About the Authors:</strong> They were the creators of CSS
<strong>Year written/published:</strong>1997
<strong>My Comment:</strong> Reading a book written by the very creators of CSS was extremely useful. This is my first book for learning CSS systematically.
<strong>Contents page:</strong>
<ol>
	<li>Web and HTML</li>
	<li>CSS</li>
	<li>amazing em unit and other best practices</li>
	<li>css selectors</li>
	<li>fonts</li>
	<li>fundamental objects</li>
	<li>space inside boxes</li>
	<li>space around boxes</li>
	<li>relative and absolutive positioning</li>
	<li>colors</li>
	<li>from html extensions to CSS</li>
	<li>printing and other media</li>
	<li>cascading and inheritance</li>
	<li>external style sheets</li>
	<li>other appraoches</li>
	<li>xml documents</li>
	<li>tables</li>
	<li>css saga</li>
</ol>
<p align="left"><strong>Some extracts:</strong></p>
<p align="left">introduction:</p>

<blockquote>
<p align="left">Cascading Style Sheets (CSS) represents a major breakthrough in how Web-page designers work by exapanding their ability to control the appearance of Web Pages, which are the documents that people publish on the web.</p>
</blockquote>
<p align="left">why we should use <em>em</em> for measurements:</p>

<blockquote>
<p align="left">The foremost tool for writing scalable style sheets is the <em>em</em> unit, and it therefore foes on top of the list of guidelenes that we compile throughout this chapter: Use ems to make scalable style sheets. Eg:
H1{ font-size: 2em }</blockquote>
<p align="left">some advices:</p>

<ul>
	<li>Use relative units for lenths</li>
	<li>Only use absolute length units when the physical characteristics of the output medium are known</li>
	<li>Use floating elements instead of tables</li>
	<li>You should always make sure your documents are legible without style sheets</li>
	<li>test your documents on several browsers</li>
</ul>
<p align="left">Basic syntax:</p>

<blockquote>
<p align="left"><font color="#800000">h1 { color:green}
</font>h1 --&gt; Selector
color --&gt; property
green--&gt; declaration</blockquote>
<p align="left">Class Attribute:</p>

<blockquote>
<p align="left">The class attribute enables you to apply declarations to a group of elements that have the same value on the class attribute. All elements inside BODy can have a CLASS attribute.</p>
<p align="left"><font color="#800000">&lt;P CLASS=POLONIUS&gt;Polonius: Hello!&lt;/P&gt;</font><font color="#800000">.POLONIUS{font-weight=bold}</font></p>
</blockquote>
<p align="left">ID Attribute</p>

<blockquote>
<p align="left">The ID Attribute works like the CLASS attribute with one important difference: The value of an ID musy beunique throughout the document</p>
<p align="left"><font color="#800000">#xyz {text-decoration:underline}</font></p>
<p align="left"><font color="#800000">&lt;P ID=xyz&gt;underline&lt;/P&gt;</font></p>
</blockquote>
<p align="left">combining selector types</p>

<blockquote>
<p align="left">by combining a type selector and a class selector, an element must fullfill both requirements: It must be of the right type and right class in roder to be influenced by the style rule.</p>
<p align="left"><font color="#800000">P.POLONIUS {font-weight: normal}</font></p>
</blockquote>
<p align="left">Contextual Selectors</p>

<blockquote>
<p align="left"><font color="#800000">H1 EM{ color:blue}</font></p>
<p align="left">For any EM that in inside H1, make it blue</p>
</blockquote>
<p align="left">CSS font families categories:</p>

<ol>
	<li>sans-serif</li>
	<li>serif</li>
	<li>monospace</li>
	<li>cursive</li>
	<li>fantasy</li>
</ol>
<p align="left">Absolute units:</p>

<ol>
	<li>mm: millimetre</li>
	<li>cm: centimetre</li>
	<li>in: inch</li>
	<li>pt: point</li>
	<li>pc: pica</li>
</ol>
<p align="left">Some font properties:</p>

<ol>
	<li>font-family</li>
	<li>font-size</li>
	<li>font-style: normal|italic|oblique</li>
	<li>font-weight: normal|bold|bolder|lighter</li>
	<li>text-decoration: none|[underline||overline||line-through||blink]</li>
</ol>
<p align="left"><a href="http://www.w3.org/TR/REC-CSS2/box.html">box model</a></p>

<ol>
	<li>content</li>
	<li>padding</li>
	<li>border</li>
	<li>margin</li>
</ol>
<p align="left">an intro to XML in 10 points:</p>

<ol>
	<li>XML is for structuring data</li>
	<li>XML looks a bit like HTML/li>
	<li>XML is text, but isn't meant to be read</li>
	<li>XML is verbose by design</li>
	<li>XML is family of techniques</li>
	<li>XML is new, but not that new</li>
	<li>XML leads HTML to XHTML</li>
	<li>XML is modular</li>
	<li>XML is the basis for RDF and the Semantic Web</li>
	<li>XML is license free, platform independant and well supported</li>
</ol>
