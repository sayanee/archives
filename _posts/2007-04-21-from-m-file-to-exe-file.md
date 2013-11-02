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
How to convert from MATLAB m-file to a stand-alone \*.exe file? Let's use hopGraph.m as an example. Here's how to do it...

1. add this code on line 1 of hopGraph.m function hopGraph()
2. in the MATLAB workspace type in this command >> mcc -m hopGraph.m
3. Compiler Value is 1 ![](/img/compile0754389.jpg)
4. Go to the folder where hopGraph.m is kept and open the hopGraph.exe :D ![](/img/exe0-432432.jpg)
5. Done!!!!

little warning: this exe file will not work in a computer with no MATLAB installed! I haven't been able to locate the \*.dll files that needs to do this :(
