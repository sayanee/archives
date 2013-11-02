---
layout: post
title: My proudest program
categories: []
tags: []
status: publish
type: post
published: true
meta: {}
---
<p align="justify">Yipppeeee!!! I'm finally really really done with my <a href="http://www.4i2i.com/reed_solomon_codes.htm">Reed-Solomon </a>encoding and decoding algorithm. Till today, this is the most challenging conceptual programming I have ever done and I believe that anything to do with <a href="http://en.wikipedia.org/wiki/Information_theory">Information Theory </a>is indeed challenging. It took up a lot of my brain cells, but at the end I’m really proud of doing 99% of it all on my own and 1% credit to jazz for the debugging. So what does it exactly do??</p>
<p align="justify">I hope I explain it well for all of you, especially my non-engineering friends. Let's put it in a little story about how NASA tries to send a beautiful Saturn Ring picture from the space ship to the earth. In a simple story... ...</p>

<p align="justify">It first changes the picture pixel info into string of numbers, <font color="#006666"><strong>message polynomial</strong></font>:
<font color="#993333">11 8  7  11  9  12 15</font>

<p align="justify">Before sending it out of the spaceship, the machine first <strong><font color="#006666">encodes</font></strong> the message:
<font color="#993333">15 10 6 <u><strong>7</strong> <strong>13</strong></u> 14 10 4 11 8 7 <strong><u>11</u></strong> 9 <strong><u>12</u></strong> 15</font>

<p align="justify">But well along the long journey from spaceship to the Earth, the encoded message has <font color="#006666"><strong>random errors</strong></font> in certain positions... obviously!
<font color="#993333">15 10 6 </font><font color="#006600"><u><strong>9</strong> </u></font><font color="#006600"><strong><u>5</u></strong> </font>14 10 4 11 8 7 <font color="#006600"><strong><u>4</u></strong> </font>9 <font color="#006600"><strong><u>15</u></strong> </font>15

<p align="justify">And upon reaching the earth, the machine applies Reed-Solomon Decoding algorithm to calculate the exact error and hence recover back the <font color="#006666"><strong>original message</strong></font>... brilliant isn't it?!??!
<font color="#993333">15 10 6 <strong><u>7 13</u></strong> 14 10 4 11 8 7 <strong><u>11</u></strong> 9 <strong><u>12</u></strong> 15</font>
<p align="justify">I obviously couldn't put up the entire Matlab codes and <a href="/files/code.zip">here's the simple boring program which will randomly generate everything</a>. It takes a bit of time to generate the numbers, so please wait for a while and stare at the blank screen :P I know it looks simple, but the intermediate steps are not! I hope one day when I have more time, I can put up a better interactive program where the user can key in the message and error polynomials and then you all can play with it!! Oh... if any of you want the m-file can please gimme a nudge?!?!?</p>

<p align="justify">But for now, I'm staring at it and still wondering how on earth i wrote all those codes...
<font color="#003333">beta(ii+1,kk)=gfAdd(beta(ii+1,kk)+1,gfMul(gfDiv(tri(ii,1)+1,triP(ii,1)+1)+1,betaP(ii,kk)+1)+1);</font>
<p align="justify">What on earth is that?!?! Uh... let me take a break and <a href="http://antwrp.gsfc.nasa.gov/apod/lib/aptree.html">look at more pictures </a>and relish in the ultimate beauty - the mysteries of universe :D</p>
