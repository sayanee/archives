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

- Access matrix elements (it starts from 1, unlike in C which is 0) A(row\_no, col\_no);
- plotting a graph plot(x,y,...) %x and y must be in one row
- length of a matrix n=length(C);
- Initialise a matrix Matrix=[];
- Clear workspace clc
- Clear Variables clear all
- Call an M-file to execute - just type the filename without the \*.m... eg. filename
- Plot a graph in another figure figure, plot(x,y,...);
- plot a graph on top on the previous figure hold on; plot(x,y,...);
- Close all the figures with one command close all
- Save the figure as a \*.jpg file... i like this one :P saveas(gcf,['name', int2str(i)], 'jpg');
- for loop
- if-else
- read data from an excel sheet A=xlsread('out4\_3.xls'); %must be only 2 columns
- Transpose a matrix Tmatrix=matrix';
