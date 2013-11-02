---
layout: post
title: ! 'Day 2: Taking Stock!'
categories:
- Share
tags:
- rails 3
status: publish
type: post
published: true
meta:
  aktt_notify_twitter: 'yes'
  _edit_last: '1'
  aktt_tweeted: '1'
---
I haven't updated my learnings for a while and that's coz I got stuck with my Todo App when I was trying to associate Users with each of their Task List and restrict the view for other users. So, I went back to the basics and followed through <a href="http://ruby.railstutorial.org/ruby-on-rails-tutorial-book">an awesome Rails Tutorial</a>, which taught me a lot of things and I hope to share them right here!
<h2><span style="color: #008080;">Rails Resources</span></h2>
I followed through <a href="http://ruby.railstutorial.org/ruby-on-rails-tutorial-book">Rails Tutorial </a>(updated <a href="https://github.com/railstutorial/sample_app">author codes are here</a>). This was frankly my 4th attempt to follow through this tutorial. Each time however, I found myself doing it faster with more understanding. Did I understand 100% of the tutorial now? Nope - probably 60%. But did I learn more? Absolutely! Here's <a href="https://github.com/sayanee/Sample_app">my completed codes</a> and the <a href="http://tweeet.heroku.com/">app in Heroku to play wi</a>th!

I would like to list some of the other resources that I will be following through to keep up my learning:
(1) <a href="http://pragprog.com/titles/rails3/agile-web-development-with-rails">Agile Web Development</a>
(2) <a href="http://tr3w.com/">The Rails 3 Way</a>
(3) <a href="http://railscasts.com/">Rails Cast</a>
(4) <a href="http://teachmetocode.com/screencasts/">Teach me to Code</a>
<h2><span style="color: #008080;">A playful discipline</span></h2>
To start off, here's my Gemfile that I used:

[cc lang="text"]
source 'http://rubygems.org'

gem 'rails', '3.0.7'
gem 'sqlite3-ruby', '1.3.2', :require =&gt; 'sqlite3'
gem 'gravatar_image_tag'
gem 'will_paginate', '3.0.pre2'

group :development do
gem 'rspec-rails', '2.6.0'
gem 'annotate-models', '1.0.4'
gem 'faker', '0.3.1'
end

group :test do
gem 'rspec-rails', '2.6.0'
gem 'webrat', '0.7.1'
gem 'spork', '0.9.0.rc5'
gem 'factory_girl_rails', '1.0'
gem 'faker', '0.3.1'
end
[/cc]

I realised that it's not just about coding, but it employs 3 main peripherals that are highly integrated as well:
(1) Versioning of codes using <a href="http://git-scm.com/">GIT</a>
(2) Storing the codes in a remote git repository: For open source codes, I use the free account for <a href="https://github.com/">GitHub</a>. For closed source, there are <a href="https://git.wiki.kernel.org/index.php/GitHosting">other free options</a> as well
(2) Testing with test cases - I have been using <a href="https://github.com/rspec/rspec-rails">RSpec</a> with Spork and <a href="http://www.tfreek.com/2011/03/07/rails-3-rspec-autotest/">Autotest</a>. I heard a lot about Cucumber as well!
(3) Deployment to an external server: I use Heroku, but there are also <a href="http://rubyonrailshosts.com/">others</a> like Rails Playground
<h2><span style="color: #008080;">Coding in Chunks!</span></h2>
At the start of any brand new app, the following commands in the Terminal:

[cc lang="text"]
$ rails new todo-app #Save the entire folder called todo-app as a TextMate project
$ cd todo-app
$ git mv README README.markdown #Edit readme file and rename to use markdown syntax
$ bundle install #To install gems needed
$ rake db:create
$ rails generate rspec:install #will install the spec folder for testing - delete the test folder
$ rails server #View app in browser via http://localhost:3000
$ tail -f log/development.log #See SQL Injections
$ spork #Start the test server
$ autotest #With Growl notifications, it'll automatically display the test results

$ git init #initialise git
$ git add .
$ git commit -m "Initial Commit"

$ git remote add origin git@github.com:username/app-name.git #Url from my new GitHub Repository
$ git push -u origin master # pushes the "master" branch to "origin" remote and sets up tracking

$ heroku create app-name
$ git push heroku master
$ heroku rake db:migrate
$ heroku db:push
$ heroku open # To view the app in the heroku domain in the browser: http://app-name.heroku.com

# Play with the app in Heroku just to make sure it's working!
[/cc]

At the start of each coding section/feature subsequently, here's my list of things I run through the command line in Terminal after I navigate to the app folder and open my TextMate project:

[cc lang="text"]
$ rails server
$ tail -f log/development.log
$ spork
$ autotest

$ git checkout -b branch-name-with-feature
[/cc]

At the end of each coding, here's my list of "tasks":

[cc lang="text"]
$ rspec spec/ #Ensure all tests are passing
$ git add .
$ git commit -m "Changes Made"
$ git checkout master
$ git merge branch-name
$ rspec spec/ #Just to ensure again all tests are passing after the merge

$ git push #codes to github

$ git push heroku #deploy to heroku
$ heroku rake db:migrate #update db
$ heroku db:push #migrate db data to heroku
[/cc]
<h2><span style="color: #008080;">Getting Stuck and Debugging</span></h2>
So, what do you do when you get stuck and REDS appear in the testing?

(1) Run the test and locate the failures
(2) Google the error codes - in 80% of the time I will find another person who has gotten the same error!
(3) <a href="http://stackoverflow.com/questions/tagged/ruby-on-rails">Stack Overflow</a>
(4) <a href="https://github.com/explore">Github</a> sharing (Many Rails Gems are also listed here)
(5) Search for a tutorial related to the failure/feature matter
(6) Yes, take a break for a day and come back to it again! Repeat Steps (1) to (5)
(7) Bug a friend -- didn't have to resort to this as yet!
<h2><span style="color: #008080;">Caution</span></h2>
There'll be false sense of "doing" when just going through the tutorials - so, get to building something along in the side! Can't say it well-enough than Feynman and have fun :) Will blog soon! Did I miss any of the fundamentals to starting a Rails app?

<strong>Next Objective: </strong>Pick up <a href="http://pragprog.com/titles/rails3/agile-web-development-with-rails">Agile Web Development</a> (Rails 3) and get back to Todo App - each user can create his own task list.
<blockquote>"What I cannot create, I do not understand."
— Richard P. Feynman</blockquote>
