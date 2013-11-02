---
layout: post
title: Inserting Flash movie in website
categories:
- Current Technology
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
I learnt the <a class="vt-p" href="http://www.jeroenwijering.com/?item=embedding_flash">simplest code </a>to insert a flash *.swf movie file with object and embed tag. An example...

[cc lang="text"]
<object
width="320"
height="240"
classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">
<param name="src" value="/files/example.swf" />
<param name="pluginspage"
value="http://www.macromedia.com/go/getflashplayer" />
<embed width="320" height="240"
type="application/x-shockwave-flash"
src="/img/example.swf"
pluginspage="http://www.macromedia.com/go/getflashplayer" />
</object>
[/cc]

<object width="320" height="240" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="/files/example.swf" /><param name="pluginspage" value="http://www.macromedia.com/go/getflashplayer" /><embed width="320" height="240" type="application/x-shockwave-flash" src="/img/example.swf" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>
