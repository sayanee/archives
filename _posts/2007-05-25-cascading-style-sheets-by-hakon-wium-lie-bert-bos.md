---
layout: post
title: Cascading Style Sheets by Hakon Wium Lie & Bert Bos
---

**Book Title:** Cascading Style Sheets - Designing for the web **Authors:** [Hakon Wium Lie](http://en.wikipedia.org/wiki/H%C3%A5kon_Wium_Lie) & [Bert Bos ](http://en.wikipedia.org/wiki/Bert_Bos)**About the Authors:** They were the creators of CSS **Year written/published:**1997 **My Comment:** Reading a book written by the very creators of CSS was extremely useful. This is my first book for learning CSS systematically. **Contents page:**

1. Web and HTML
2. CSS
3. amazing em unit and other best practices
4. css selectors
5. fonts
6. fundamental objects
7. space inside boxes
8. space around boxes
9. relative and absolutive positioning
10. colors
11. from html extensions to CSS
12. printing and other media
13. cascading and inheritance
14. external style sheets
15. other appraoches
16. xml documents
17. tables
18. css saga

**Some extracts:**

introduction:

>  

> Cascading Style Sheets (CSS) represents a major breakthrough in how Web-page designers work by exapanding their ability to control the appearance of Web Pages, which are the documents that people publish on the web.

why we should use _em_ for measurements:

>  

> The foremost tool for writing scalable style sheets is the _em_ unit, and it therefore foes on top of the list of guidelenes that we compile throughout this chapter: Use ems to make scalable style sheets. Eg: H1{ font-size: 2em }

some advices:

- Use relative units for lenths
- Only use absolute length units when the physical characteristics of the output medium are known
- Use floating elements instead of tables
- You should always make sure your documents are legible without style sheets
- test your documents on several browsers

Basic syntax:

>  

> h1 { color:green} h1 --> Selector color --> property green--> declaration

Class Attribute:

>  

> The class attribute enables you to apply declarations to a group of elements that have the same value on the class attribute. All elements inside BODy can have a CLASS attribute.

> <P CLASS=POLONIUS>Polonius: Hello!</P>.POLONIUS{font-weight=bold}

ID Attribute

>  

> The ID Attribute works like the CLASS attribute with one important difference: The value of an ID musy beunique throughout the document

> #xyz {text-decoration:underline}

> <P ID=xyz>underline</P>

combining selector types

>  

> by combining a type selector and a class selector, an element must fullfill both requirements: It must be of the right type and right class in roder to be influenced by the style rule.

> P.POLONIUS {font-weight: normal}

Contextual Selectors

>  

> H1 EM{ color:blue}

> For any EM that in inside H1, make it blue

CSS font families categories:

1. sans-serif
2. serif
3. monospace
4. cursive
5. fantasy

Absolute units:

1. mm: millimetre
2. cm: centimetre
3. in: inch
4. pt: point
5. pc: pica

Some font properties:

1. font-family
2. font-size
3. font-style: normal|italic|oblique
4. font-weight: normal|bold|bolder|lighter
5. text-decoration: none|[underline||overline||line-through||blink]

[box model](http://www.w3.org/TR/REC-CSS2/box.html)

1. content
2. padding
3. border
4. margin

an intro to XML in 10 points:

1. XML is for structuring data
2. XML looks a bit like HTML/li>
3. XML is text, but isn't meant to be read
4. XML is verbose by design
5. XML is family of techniques
6. XML is new, but not that new
7. XML leads HTML to XHTML
8. XML is modular
9. XML is the basis for RDF and the Semantic Web
10. XML is license free, platform independant and well supported
