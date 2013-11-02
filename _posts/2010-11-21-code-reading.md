---
layout: post
title: Code Reading
categories:
- Book Reviews
- Current Technology
tags:
- code
- open source
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'yes'
  _edit_last: '1'
  aktt_tweeted: '1'
  _wp_old_slug: ''
---
<strong>Book Title: </strong><a href="http://www.amazon.com/Code-Reading-Open-Source-Perspective/dp/0201799405">Code Reading: The Open Source Perspective</a>
<strong> Author:</strong> Diomidis Spinellis
<strong> Some extracts:</strong>

Most open source software programs have been:
<ol>
	<li>Documented, published and reviewed in source code form</li>
	<li>Discussed, internalized, generalized and paraphrased</li>
</ol>
You can easily discern code of low quality by the following signs:
<ol>
	<li>An inconsistent coding style</li>
	<li>A gratuitously complicated or unreadable structure</li>
	<li>Obvious logical errors or omissions</li>
	<li>Overuse of non-portable constructs</li>
	<li>lack of maintenance</li>
</ol>
Read code selectively...
<blockquote>...with a goal in your mind. Are you trying to learn new patterns, a coding style, a way to satisfy some requirements? Alternatively, you may find yourself browsing code to pick up random gems. In that case, be ready to study in detail interesting parts you don't know: language features (even if you know a language in depth, modern languages evolve with new features), APIs, Algorithms, data strucutres, Architectures, and design patterns.</blockquote>
The strategy for selectively dealing with parts of a large systems is outlined below:
<ol>
	<li>Locate the code parts that interests you</li>
	<li>Understand the specific parts in isolation</li>
	<li>Infer the code excerpts's relationship with the rest of the code</li>
</ol>
Types of for loops:
<ol>
	<li>for (i=0; i&lt;= extract; i++) //Loop (extract +1) times</li>
	<li>for (i=0; i&lt; month; i++) // loop (month -1) times</li>
	<li>for (i=1; i&lt;=nargs, i++) // loop nargs times</li>
</ol>
Break and continue:
<blockquote>To determine the effect of a break statement, start reading the program upward from break until you encounter the first while, for, do or switch block that encloses the break statement. Locate the first statement after that loop; this will be the place where control will transfer when break is executed.  Similarly, when examining code that constrains a continue statement, start reading the program upwards from continue until you encounter the first while, for, do loop that encloses the continue statement. Locate the last statement of that loop; immediately after it will be the place where control will transfer when continue is executed. Boolean expressions &amp;&amp; and || &amp;&amp; operator (conjunction)  the first expression to evaluate to false will terminate the whole expression --&gt; yield false result expressions on the left of the expression you are examining are true!! operator (disjunction) the first expression to evaluate to true will terminate the evaluation of the whole expression yielding a true result expressions on the left of the expression you are examining are false</blockquote>
goto statement and spaghetti
<blockquote>Labels and goto statements should immediately raise your defenses when reading code. They can be easily abused to create "spaghetti" code: code with a flow of control that is difficult to follow and figure out. Therefore, the designers of Java decided not to support the goto statement. Fortunately, most modern programs use the goto statement in a small number of specific circumstances that do not adversely affect the program's structure.</blockquote>
Readability and efficiency of codes...
<blockquote>There is no need to sacrifice code readability for efficiency. While it is true that efficient algorithms and certain optimizations can make the code more complicated and therefore more difficult to follow, this does not mean that making the code compact and unreadable will make it more efficient.</blockquote>
Pointer usage in C programs:
<ol>
	<li>To construct linked data structures</li>
	<li>To reference dynamically allocated data structure</li>
	<li>To implement call by reference</li>
	<li>To access data elements and iterate through them</li>
	<li>When passing arrays as arguments</li>
	<li>For referring a as arguments</li>
	<li>For referring to functions</li>
	<li>As an alias for another value</li>
	<li>To represent character strings</li>
	<li>For direct access to system memory</li>
</ol>
Control Models:
<ol>
	<li>Work Crew model - where a set of similar tasks operate in parallel</li>
	<li>Boss/Worker model - where a boss task distributes work among workers</li>
	<li>Pipeline model - where a series of tasks operate on the data and pass it to the next task</li>
</ol>
Common middleware architectures:
<ol>
	<li>CORBA</li>
	<li>DCOM</li>
	<li>RMI</li>
	<li>Sun's RPC</li>
</ol>
