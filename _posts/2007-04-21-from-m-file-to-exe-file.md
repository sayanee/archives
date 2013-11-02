---
layout: post
title: From m-file to *.exe file
categories:
- Current Technology
tags: []
status: publish
type: post
published: true
meta: {}
---
How to convert from MATLAB m-file to a stand-alone *.exe file? Let's use <font color="#800000">hopGraph.m</font> as an example. Here's how to do it...
<ol>
	<li>add this code on line 1 of hopGraph.m
<font face="Courier New">function <font color="#800000">hopGraph()</font></font></li>
	<li>in the MATLAB workspace type in this command
<font face="Courier New">&gt;&gt; mcc -m <font color="#800000">hopGraph.m</font> </font></li>
	<li>Compiler Value is 1
<img src="/img/compile0754389.jpg" /></li>
	<li>Go to the folder where <font color="#800000">hopGraph.m </font><font color="#000000">is kept and open the <font color="#008000">hopGraph.exe</font> :D
<img src="/img/exe0-432432.jpg" /></font></li>
	<li><font color="#000000">Done!!!!</font></li>
</ol>
little warning: this exe file will not work in a computer with no MATLAB installed! I haven't been able to locate the *.dll files that needs to do this :(
