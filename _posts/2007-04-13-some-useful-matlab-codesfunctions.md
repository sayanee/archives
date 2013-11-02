---
layout: post
title: Some useful MATLAB codes/functions
categories:
- Current Technology
tags: []
status: publish
type: post
published: true
meta: {}
---
Everytime i'll forget them even though i use it a lot of time... here are some frequent ones...to remind if there's a next time :P
<ul>
	<li>Access matrix elements (it starts from 1, unlike in C which is 0)
<span style="font-family:'Courier New';">A(row_no, col_no);</span></li>
	<li>plotting a graph
<font face="Courier New">plot(x,y,...) %x and y must be in one row</font></li>
	<li>length of a matrix
<font face="Courier New">n=length(C);</font></li>
	<li>Initialise a matrix
<span style="font-family:'Courier New';">Matrix=[];</span></li>
	<li>Clear workspace
<span style="font-family:'Courier New';">clc</span></li>
	<li>Clear Variables
<span style="font-family:'Courier New';">clear all</span></li>
	<li>Call an M-file to execute - just type the filename without the *.m... eg.
<font face="Courier New">filename</font></li>
	<li>Plot a graph in another figure
<font face="Courier New">figure, plot(x,y,...);</font></li>
	<li>plot a graph on top on the previous figure
<span style="font-family:'Courier New';">hold on; plot(x,y,...);</span></li>
	<li>Close all the figures with one command
<span style="font-family:'Courier New';">close all</span></li>
	<li>Save the figure as a *.jpg file... i like this one :P
<span style="font-size:12pt;font-family:'Courier New';">saveas(gcf,['name', int2str(i)], 'jpg');</span></li>
	<li>for loop</li>
	<li>if-else</li>
	<li>read data from an excel sheet
<span style="font-size:12pt;font-family:'Courier New';">A=xlsread('out4_3.xls'); %must be only 2 columns</span></li>
	<li>Transpose a matrix
<span style="font-family:'Courier New';">Tmatrix=matrix';</span><span style="font-family:'Courier New';"></span></li>
</ul>
