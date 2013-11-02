---
layout: post
title: Responsive Web Design
categories:
- Book Reviews
- Current Technology
- Share
tags:
- css
- wed design
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'yes'
  _edit_last: '1'
  aktt_tweeted: '1'
---
Title: <a href="http://www.abookapart.com/products/responsive-web-design">Responsive Web Design</a>
Author: <a href="https://twitter.com/#!/beep">Ethan Marcotte</a>

Extracts:

What’s more, I’d often use words like “<strong>future-proof</strong>” and “<strong>device-agnostic</strong>” when describing the need for this flexibility.

So how can we create a design that can <strong>adapt to changes</strong> in screen resolution and viewport dimensions? How can our page optimize itself for the myriad browsers and devices that access it? In other words, how can our designs become more responsive?

the <a href="http://www.w3.org/TR/CSS21/media.html#media-types">W3C created a list of media types</a>, attempting to classify each browser or device under a broad, media-specific category. The recognized media types are: <strong>all, braille, embossed, handheld, print, projection, screen, speech, tty, and tv</strong>.

In the spec’s language, every device has a “display area” and “rendering surface.” Clear as mud, that. But think of it this way: the browser’s viewport is the display area; the entire display is the rendering surface. So on your laptop, the display area would be your browser window; the rendering surface would be your screen. (I don’t makes the terms. I just explains ’em.)

In other words, by combining flexible layouts and media queries, we’ll finally be able to make our sites responsive.

There are two prongs to this argument: first, that the device implies a context, telling us whether the user is stationary or mobile. From that context, we can create a class of users, and infer a set of goals. In other words, mobile users will want quicker access to different tasks than they would if they were on a desktop or laptop, where both time and bandwidth are on their side.

Responsive design is, I believe, <strong>one part design philosophy, one part front-end development strategy</strong>. And as a development strategy, it’s meant to be evaluated to see if it meets the needs of the project you’re working on.

<strong>“Mobile first”</strong> is a wonderful design philosophy. What’s more, I’ve found it absolutely invaluable for the responsive design projects I’ve worked on. As more browsers and devices begin accessing our designs, and as our clients become interested in designing beyond the desktop, it’s a perfect opportunity to take a hard look at how we design for the web: our processes and vocabulary, as well as the questions we ask and the solutions we apply.

Our design process kicks off by surveying the different devices for which we’re planning to design. A list of example resolution breakpoints. 320 pixels For small screen devices, like phones, held in portrait mode. <strong>480</strong> pixels For small screen devices, like phones, held in landscape mode. <strong>600</strong> pixels Smaller tablets, like the Amazon Kindle (<strong>600×800</strong>) and Barnes &amp; Noble Nook (<strong>600×1024</strong>), held in portrait mode. <strong>768</strong> pixels Ten-inch tablets like the iPad (<strong>768×1024</strong>) held in portrait mode. 1024 pixels Tablets like the iPad (<strong>1024×768</strong>) held in landscape mode, as well as certain laptop, netbook, and desktop displays. 1200 pixels For widescreen displays, primarily laptop and desktop browsers.

four resolution breakpoints are set in the media queries, for minimum viewport widths of 480px, 600px, 860px, and 1200px. And as the resolution scales up beyond those thresholds, the appropriate layout rules are applied.
