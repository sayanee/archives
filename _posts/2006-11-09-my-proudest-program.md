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
Yipppeeee!!! I'm finally really really done with my [Reed-Solomon ](http://www.4i2i.com/reed_solomon_codes.htm)encoding and decoding algorithm. Till today, this is the most challenging conceptual programming I have ever done and I believe that anything to do with [Information Theory ](http://en.wikipedia.org/wiki/Information_theory)is indeed challenging. It took up a lot of my brain cells, but at the end I’m really proud of doing 99% of it all on my own and 1% credit to jazz for the debugging. So what does it exactly do??

I hope I explain it well for all of you, especially my non-engineering friends. Let's put it in a little story about how NASA tries to send a beautiful Saturn Ring picture from the space ship to the earth. In a simple story... ...

It first changes the picture pixel info into string of numbers, **message polynomial**: 11 8  7  11  9  12 15

Before sending it out of the spaceship, the machine first **encodes** the message: 15 10 6 **7** **13** 14 10 4 11 8 7 **11** 9 **12** 15

But well along the long journey from spaceship to the Earth, the encoded message has **random errors** in certain positions... obviously! 15 10 6 **9** **5** 14 10 4 11 8 7 **4** 9 **15** 15

And upon reaching the earth, the machine applies Reed-Solomon Decoding algorithm to calculate the exact error and hence recover back the **original message**... brilliant isn't it?!??! 15 10 6 **7 13** 14 10 4 11 8 7 **11** 9 **12** 15

I obviously couldn't put up the entire Matlab codes and [here's the simple boring program which will randomly generate everything](/files/code.zip). It takes a bit of time to generate the numbers, so please wait for a while and stare at the blank screen :P I know it looks simple, but the intermediate steps are not! I hope one day when I have more time, I can put up a better interactive program where the user can key in the message and error polynomials and then you all can play with it!! Oh... if any of you want the m-file can please gimme a nudge?!?!?

But for now, I'm staring at it and still wondering how on earth i wrote all those codes... beta(ii+1,kk)=gfAdd(beta(ii+1,kk)+1,gfMul(gfDiv(tri(ii,1)+1,triP(ii,1)+1)+1,betaP(ii,kk)+1)+1);

What on earth is that?!?! Uh... let me take a break and [look at more pictures ](http://antwrp.gsfc.nasa.gov/apod/lib/aptree.html)and relish in the ultimate beauty - the mysteries of universe :D
