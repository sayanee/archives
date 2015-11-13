---
layout: post
title: Day 0 Running on Rails
categories:
- Learning
---

I am learning [Rails 3.0](http://rubyonrails.org/), the web development framework [behind many of the sites](http://rubyonrails.org/applications) hosted on the web today! Whooops! So, I also decided to blog my journey and share out the tit bits I catch along the way and if you have suggestions of ideas, dive in and tell me ;-) I have looked into many awesome tutorials [here](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book) and [there](http://guides.rubyonrails.org/), and watched the helpful [webcasts](http://railscasts.com/) and [screencasts](http://net.tutsplus.com/tutorials/ruby/learn-ruby-on-rails-from-scratch-week-1/), read bits of books [here](http://pragprog.com/titles/rails3/agile-web-development-with-rails) and [there](http://tr3w.com/). But I figured that the best way to learn anything, is actually to build something, anything with the tools.

So, my objective is very simple - building a fun todo application that I will use myself ... a bit like scratching my own itch! I'm a very list-y person - I think in lists and so i hope it'll also help you follow through and get to the point of what i'm learning and building!

**Tasks done + awesome tutorials:**

1. Install latest [Ruby](http://www.ruby-lang.org/en/downloads/)
2. Install [Ruby Gems](http://rubygems.org/pages/download)
3. Install [Rails](http://rubyonrails.org/download) ( [tutorial](http://pragmaticstudio.com/blog/2010/9/23/install-rails-ruby-mac) for MAC)
4. Create a new Rails App from [Terminal](http://guides.macrumors.com/Terminal)

```
$ rails new todo-app
$ cd todo-app #Amend README File
$ bundle install #To install all GEMS needed
$ rails server #and start viewing your app in browser via http://localhost:3000
```

5. Connect to [GitHub](https://github.com/) from the Terminal (Nettuts [tutorial](http://net.tutsplus.com/tutorials/tools-and-tips/terminal-git-and-github-for-the-rest-of-us-screencast/) screencast on Terminal & Github)

```
$ git init
$ git add .
$ git commit -m "Initial Commit"
$ git remote add origin git@github.com:sayanee/My-Todo.git
$ git push -u origin master
```

6. Deploying to [Heroku](http://www.heroku.com/) from the Terminal

```
$ heroku create [app-name]
$ git push heroku master
$ heroku rake db:migrate
$ heroku db:push
$ heroku open
```

**Tools used:**

1. [TextMate](http://macromates.com/) for coding
2. [ShellTo](http://www.macupdate.com/app/mac/37321/shellto) to open Terminal window from any directory in Finder
3. [SQLite](http://sqlitebrowser.sourceforge.net/) Database Browser
4. [TinyGrab](http://www.tinygrab.com/) to get tasty screenshots
5. [Codecolerer ](http://kpumuk.info/projects/wordpress-plugins/codecolorer/#supported_languages)Wordpress plugin to display code snippets in this post
6. [Evernote](http://www.evernote.com/) to capture code snippets that I use over and over again!

**Time Taken:** 5 days

**Fun Stuff done today:** My [Code in Github](https://github.com/sayanee/My-Todo) and my [app in Heroku](http://my-todo.heroku.com/)!

**Next Objective:** Build a [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) implementation for my Todo list from scratch without using the magical Scaffold of Rails!

So, what are your thoughts? If you are not a coder, better still - let me know what your ideal todo would look like and what features would you love? You only need to [look at the app right here ](http://my-todo.heroku.com/)to comment. If you are also new to Rails, I would be happy to learn together and if you are advanced, I would also love to hear your suggestions on how best I can learn the fundamentals E.g. my mentor told me to not use the magical [Scaffold](http://www.viget.com/extend/rails-3-generators-scaffolding/) to understand the core, etc.

I hope my journey will be fun, open and in the end build something that someone else out there will also find it valuable ... so join me :)
