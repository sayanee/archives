---
layout: post
title: ! 'Day 1: Cracking the CRUD'
categories:
- Ideas
tags:
- fundo
- rails 3.0
status: publish
type: post
published: true
meta:
  _edit_last: '1'
  aktt_notify_twitter: 'yes'
  aktt_tweeted: '1'
---
Hello everyone!

A couple of months ago, when I first started with Rails, I took a loooong time to get all the setup and configuration. So, fret not if this happens to you :) I still have a long way to go, but it seems some of the stuff do get easier! So, let's see how's the todo app for now...

<strong>Steps:</strong>
1. Generate <a href="http://guides.rubyonrails.org/action_controller_overview.html">controller</a> and model for Task with the functions of <a href="http://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a> (Create, Read, Update, Delete)

[cc lang="text"]
$ rails generate controller Tasks index edit show new
$ rails generate model Task name:string userid:integer
[/cc]

2. Remove file public/index.html
3. Edit routes.rb to connect root to task/index and added general routing

[cc lang="rails"]
TodoApp::Application.routes.draw do
root :to => "tasks#index"
resources :tasks
end
[/cc]

4. Edit tasks_controller.rb to include index, show, edit, destroy, create, new functions

<strong>Referred tutorials: </strong>
1. a <a href="http://www.stjhimy.com/posts/7-creating-a-100-ajax-crud-using-rails-3-and-unobtrusive-javascript">simple CRUD</a>
2. Create a <a href="http://www.roberthuberdeau.com/articles/4-How-to-create-a-blog-in-Ruby-on-Rails-3">blog</a> with rails

<strong>Tools used:</strong>
1. <a href="http://stackoverflow.com/users/496797/sayanee">Stackoverflow</a> for many similar questions &amp; their answers
2. <a href="https://github.com/ctran/annotate_models">Annonate</a> Gem Rails Plugin to automatically add model comments

<strong>Concepts learnt:</strong>
1. <a href="http://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a>
2. <a href="http://guides.rubyonrails.org/getting_started.html#rest">REST</a>
3. <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">MVC</a>

<strong>Tips &amp; Tricks:</strong>
1. Cut and Paste the error messages into Google <a href="http://tinyurl.com/dypahs">or else</a>!!!
2. Advanced Google Search -&gt; Select Past One Year to ensure latest version answers
3. When deleting a file, do remove it from git as well

[cc lang="text"]
$ git rm file-to-delete.rb
[/cc]

<strong>Time Taken: </strong>4 hours [it wasn't even 4 hours when I first tried following a tutorial! It was around 10 hours :) ]

<strong>Fun Stuff completed: </strong>Todo now has the functions of CRUD (Create, Read, Update, Delete)
<img class="aligncenter size-full wp-image-2459" title="day0" src="/img/day0.jpg" alt="" width="474" height="266" />
<p style="text-align: center;"><a href="https://github.com/sayanee/My-Todo/tree/915ba0735c817040ed605831b202158025be69b5">peer</a> into the code, <a href="http://my-todo.heroku.com/">play</a> with the app</p>
<strong>Next Objective:</strong> Build a "Done" Column/field for each task with a checkbox to update it's status when the task is completed!
