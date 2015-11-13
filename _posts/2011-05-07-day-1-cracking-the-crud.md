---
layout: post
title: Day 1 Cracking the CRUD
categories:
- Learning
---

Hello everyone!

A couple of months ago, when I first started with Rails, I took a loooong time to get all the setup and configuration. So, fret not if this happens to you :) I still have a long way to go, but it seems some of the stuff do get easier! So, let's see how's the todo app for now...

**Steps:**

1. Generate [controller](http://guides.rubyonrails.org/action_controller_overview.html) and model for Task with the functions of [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) (Create, Read, Update, Delete)

```
$ rails generate controller Tasks index edit show new
$ rails generate model Task name:string userid:integer
```

2. Remove file public/index.html
3. Edit routes.rb to connect root to task/index and added general routing

```
TodoApp::Application.routes.draw do
root :to => "tasks#index"
resources :tasks
end
```

4. Edit `tasks\_controller.rb` to include index, show, edit, destroy, create, new functions

**Referred tutorials: **

1. a [simple CRUD](http://www.stjhimy.com/posts/7-creating-a-100-ajax-crud-using-rails-3-and-unobtrusive-javascript)
`. Create a [blog](http://www.roberthuberdeau.com/articles/4-How-to-create-a-blog-in-Ruby-on-Rails-3) with rails

**Tools used:**

1. [Stackoverflow](http://stackoverflow.com/users/496797/sayanee) for many similar questions & their answers
2. [Annonate](https://github.com/ctran/annotate_models) Gem Rails Plugin to automatically add model comments

**Concepts learnt:**

1. [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
2. [REST](http://guides.rubyonrails.org/getting_started.html#rest)
3. [MVC](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

**Tips & Tricks:**

1. Cut and Paste the error messages into Google [or else](http://tinyurl.com/dypahs)!!!
2. Advanced Google Search -> Select Past One Year to ensure latest version answers
3. When deleting a file, do remove it from git as well

```
$ git rm file-to-delete.rb
```

**Time Taken:** 4 hours [it wasn't even 4 hours when I first tried following a tutorial! It was around 10 hours :) ]

**Fun Stuff completed:** Todo now has the functions of CRUD (Create, Read, Update, Delete)
![](/img/day0.jpg "day0")

[peer](https://github.com/sayanee/My-Todo/tree/915ba0735c817040ed605831b202158025be69b5) into the code, [play](http://my-todo.heroku.com/) with the app

**Next Objective:** Build a "Done" Column/field for each task with a checkbox to update it's status when the task is completed!
