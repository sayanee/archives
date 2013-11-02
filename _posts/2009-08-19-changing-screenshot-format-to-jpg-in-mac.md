---
layout: post
title: Changing screenshot format to jpg in MAC
categories:
- Current Technology
tags: []
status: publish
type: post
published: true
meta:
  _edit_last: '1'
---
So the default image for screen shots in MAC is png. And we can change it to jpg!

Tom Merrit shows how to do it in Cnet's "How to" podcast:
<p style="text-align: center;"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="364" height="280" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="wmode" value="transparent" /><param name="allowFullScreen" value="true" /><param name="FlashVars" value="playerType=embedded&amp;type=id&amp;value=50075643" /><param name="src" value="http://www.cnet.com/av/video/flv/universalPlayer/universalSmall.swf" /><param name="flashvars" value="playerType=embedded&amp;type=id&amp;value=50075643" /><param name="allowfullscreen" value="true" /><embed type="application/x-shockwave-flash" width="364" height="280" src="http://www.cnet.com/av/video/flv/universalPlayer/universalSmall.swf" flashvars="playerType=embedded&amp;type=id&amp;value=50075643" allowfullscreen="true" wmode="transparent"></embed></object>
<ol>
	<li>Open Terminal</li>
	<li>type in:
defaults write com.apple.screencapture type jpg</li>
	<li>Log in again</li>
	<li>Test it:
Shift+Cmd+4</li>
	<li>the picture file created is in jpg :P</li>
</ol>
Here's another post on <a href="http://www.macosxhints.com/article.php?story=20050627224051361">how to change the default format</a>!
