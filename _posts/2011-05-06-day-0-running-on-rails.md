---
layout: post
title: ! 'Day 0: Running on Rails'
categories:
- Ideas
tags:
- coding
- rails 3.0
- todo
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'yes'
  _edit_last: '1'
  aktt_tweeted: '1'
---
I am learning <a href="http://rubyonrails.org/">Rails 3.0</a>, the web development framework <a href="http://rubyonrails.org/applications">behind many of the sites</a> hosted on the web today! Whooops! So, I also decided to blog my journey and share out the tit bits I catch along the way and if you have suggestions of ideas, dive in and tell me ;-) I have looked into many awesome tutorials <a href="http://ruby.railstutorial.org/ruby-on-rails-tutorial-book">here</a> and <a href="http://guides.rubyonrails.org/">there</a>,  and watched the helpful <a href="http://railscasts.com/">webcasts</a> and <a href="http://net.tutsplus.com/tutorials/ruby/learn-ruby-on-rails-from-scratch-week-1/">screencasts</a>, read bits of books <a href="http://pragprog.com/titles/rails3/agile-web-development-with-rails">here</a> and <a href="http://tr3w.com/">there</a>. But I figured that the best way to learn anything, is actually to build something, anything with the tools.

So, my objective is very simple - building a fun todo application that I will use myself ... a bit like scratching my own itch! I'm a very list-y person - I think in lists and so i hope it'll also help you follow through and get to the point of what i'm learning and building!

<strong>Tasks done + awesome tutorials:</strong>
1. Install latest <a href="http://www.ruby-lang.org/en/downloads/">Ruby</a>
2. Install <a href="http://rubygems.org/pages/download">Ruby Gems</a>
3. Install <a href="http://rubyonrails.org/download">Rails</a> (<a href="http://pragmaticstudio.com/blog/2010/9/23/install-rails-ruby-mac">tutorial</a> for MAC)
4. Create a new Rails App from <a href="http://guides.macrumors.com/Terminal">Terminal</a>

[cc lang="text"]
$ rails new todo-app
$ cd todo-app #Amend README File
$ bundle install #To install all GEMS needed
$ rails server #and start viewing your app in browser via http://localhost:3000
[/cc]

5. Connect to <a href="https://github.com/">GitHub</a> from the Terminal (Nettuts <a href="http://net.tutsplus.com/tutorials/tools-and-tips/terminal-git-and-github-for-the-rest-of-us-screencast/">tutorial</a> screencast on Terminal &amp; Github)

[cc lang="text"]
$ git init
$ git add .
$ git commit -m "Initial Commit"
$ git remote add origin git@github.com:sayanee/My-Todo.git
$ git push -u origin master
[/cc]

6. Deploying to <a href="http://www.heroku.com/">Heroku</a> from the Terminal

[cc lang="text"]
$ heroku create [app-name]
$ git push heroku master
$ heroku rake db:migrate
$ heroku db:push
$ heroku open
[/cc]

<strong>Tools used:</strong>
1. <a href="http://macromates.com/">TextMate</a> for coding
2. <a href="http://www.macupdate.com/app/mac/37321/shellto">ShellTo</a> to open Terminal window from any directory in Finder
3. <a href="http://sqlitebrowser.sourceforge.net/">SQLite</a> Database Browser
4. <a href="http://www.tinygrab.com/">TinyGrab</a> to get tasty screenshots
5. <a href="http://kpumuk.info/projects/wordpress-plugins/codecolorer/#supported_languages">Codecolerer </a>Wordpress plugin to display code snippets in this post
6. <a href="http://www.evernote.com/">Evernote</a> to capture code snippets that I use over and over again!

<strong>Time Taken:</strong> 5 days

<strong>Fun Stuff done today: </strong>My <a href="https://github.com/sayanee/My-Todo">Code in Github</a> and my <a href="http://my-todo.heroku.com/">app in Heroku</a>!

<strong>Next Objective: </strong>Build a <a href="http://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a> implementation for my Todo list from scratch without using the magical Scaffold of Rails!

So, what are your thoughts? If you are not a coder, better still - let me know what your ideal todo would look like and what features would you love? You only need to <a href="http://my-todo.heroku.com/">look at the app right here </a>to comment. If you are also new to Rails, I would be happy to learn together and if you are advanced, I would also love to hear your suggestions on how best I can learn the fundamentals E.g. my mentor told me to not use the magical <a href="http://www.viget.com/extend/rails-3-generators-scaffolding/">Scaffold</a> to understand the core, etc.

I hope my journey will be fun, open and in the end build something that someone else out there will also find it valuable ... so join me :)
