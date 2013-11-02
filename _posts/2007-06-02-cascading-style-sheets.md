---
layout: post
title: Cascading Style Sheets
categories:
- Book Reviews
- Current Technology
tags: []
status: publish
type: post
published: true
meta: {}
---
<strong>Book Title:</strong> Cascading Style Sheets: Separating Content from Presentation
<strong>Authors:</strong> Owen Briggs, Steven Champeon, Eric Costello, Matt Patterson with contributions from Dave Shea, John Simons, Michael Switzer, Dan Rubin, Michael Pick, Cornelia Lange
<strong>Year written/published:</strong> 2004
<strong>My Comments:</strong> This is not my first book on CSS, hence I zoomed into chapters 5,6,8-12. Especially the chapter on Boxes!
<strong>Contents page:</strong>
<ol>
	<li>Foundation Concepts</li>
	<li>Overview of Presentation</li>
	<li>Markup with Meaning</li>
	<li>Fundamentals</li>
	<li>Rules</li>
	<li>Attaching CSS to your Markup</li>
	<li>Typography</li>
	<li><strong>Boxes, Boxes, Boxes</strong></li>
	<li>Styling Tables with CSS</li>
	<li>Cross-Browser CSS</li>
	<li>Troubleshooting</li>
	<li>CSS Design Projects</li>
</ol>
<strong> Some extracts:</strong>

default positions of division boxes…
<blockquote>&lt;body&gt;
    &lt;div class=”wee”&gt;1&lt;/div&gt;
    &lt;div class=”wee”&gt;2&lt;/div&gt;
    &lt;div class=”wee”&gt;3&lt;/div&gt;
    &lt;div class=”wee”&gt;4&lt;/div&gt;
&lt;/body&gt;

.wee{
    padding:10px;
    margin: 5px;
    border: 1px solid #000;
}

<img src="/img/css932u4089321.jpg" /></blockquote>
relative positioning
<blockquote>
<p align="justify">The offset value is inserted where declared by the property. Hence, top:25px means that 25 pixels are inserted above the &lt;div&gt; to push it down from the static position and right: 25px pushes the &lt;div? 25 pixels to the left.</p>
&lt;body&gt;
    &lt;div class=”different”&gt;1&lt;/div&gt;
    &lt;div class=”wee”&gt;2&lt;/div&gt;
    &lt;div class=”wee”&gt;3&lt;/div&gt;
    &lt;div class=”wee”&gt;4&lt;/div&gt;
&lt;/body&gt;

.different{
   <font color="#800000"> position: relative;
</font>    top: 25px;
    right: 25px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #000;
    width:20%;
}</blockquote>
Absolute Positioning…
<blockquote>
<p align="justify">Absolute positioning completely removes the &lt;div&gt; from the document flow. It’s positioned in relation to its containing lock, and other elements act as if it isn’t there.</p>
<font color="#800000">position: absolute;</font></blockquote>
Fixed Positioning…
<blockquote>
<p align="justify">Fixed position is asolute position with a difference: The containing block is now the viewpoint, not the &lt;html&gt;. This means that as you scroll a document, the &lt;div&gt; stays put on the screen.</p>
<font color="#800000">position: fixed;</font></blockquote>
Float
<blockquote>
<p align="justify">float is a property itself, not a value of the position property. Floated elements are taken out of normal flow, ut not removed from it entirely, and other elements remain aware of the floated element. A floated element literally ‘floats’ up in the flow, and then over in whichever direction is stated in the property.</p>

<p align="justify">.wee{
    <font color="#800000">float: left;
</font>    padding: 10px;
    margin: 5px;
    border: 1px solid #000;
    width: 20%;
}

<p align="justify">p{
margin: 5px;
padding: 10px;
}
<p align="justify"><img src="/img/css932u4089323.jpg" /></p>
</blockquote>
Clear Property…
<blockquote>If the wrapping ehaviour isn’t a desired effect, then you have the option of applying the clear property to the following effect.

p{
<font color="#800000">clear: left;
</font>margin: 5px;
padding: 10px;
}

<img src="/img/css932u4089324.jpg" /></blockquote>
A series of floated boxes horizontally…
<blockquote>float: left;

<img src="/img/css932u4089325.jpg" />

float:right;

<img src="/img/css932u4089326.jpg" /></blockquote>
Z-index…
<blockquote>
<p align="justify">CSS lets you declare how &lt;div&gt;s are positioned left and right and up and down on a screen, and it also lets you control how they’re stacked when overlapping. In geometry, positioning right or left is commonly referred to as along the x-zxis. and up and down is along the z-axis; in our case, the apparent position between your eyes and the screen.</p>
<p align="justify">Setting the z-index declares what elemet will e on top in an overlap. The basic idea is pretty straightforward: An element with a lerger number will be closer to you than an element with a smaller number.</p>
<font color="#800000">z-index: 4;</font></blockquote>
Centred simply box…
<blockquote>#content{
padding: 10px;
margin-top: 5px;
margin-bottom: 5px;
margin-right:auto;
margin-left: auto;
width: 70%;
}

<img src="/img/css932u4089327.jpg" /></blockquote>
2 Columns..
<blockquote>#content{
padding: 10px;
margin: 5px 122px 5px 5px;
}

#menu{
position: absolute;
<font color="#800000">top: 0px;
right: 0px;
<font color="#000000">padding: 10px;
margin: 5px;
width: 90px;
}</font></font><font color="#800000"><font color="#000000"><img src="/img/css932u4089328.jpg" /></font>

3 columns…
<blockquote>#left{
position: absolute;
top: 0px;
left: 0px;
margin: 5px;
padding: 10px;
width: 90px;
}

#middle{
margin: 5px 122px 5px 122px;
padding: 10px;
}

#right{
position: absolute;
top: 0px;
margin: 5px;
padding: 10px;
width: 90px;
}

<img src="/img/css932u40893210.jpg" /></blockquote>
</font></blockquote>
