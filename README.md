#Sayanee's Blog

This repository contains the website for my blog.

Related websites:

- [Main website](http://blog.sayan.ee)
- [Github repository](https://github.com/sayanee/blog)

##development

1. build the static pages on the git branch `master`

    ```
    LC_CTYPE="en_US.UTF-8" && LANG="en_US.UTF-8" && jekyll build
    ```

1. start the jekyll server

    ```
    LC_CTYPE="en_US.UTF-8" && LANG="en_US.UTF-8" && jekyll serve --config _dev_config.yml --watch
    ```
1. if there's error on `invalid byte sequence in US-ASCII
error: invalid byte sequence in US-ASCII`, run the following in the command line:

    ```
    LC_CTYPE="en_US.UTF-8"
    LANG="en_US.UTF-8"
    ```

1. command line watch for css and javascript

    ```
    grunt
    ```
1. push to github pages uses an alias in the command line

    ```
    $ alias gj
    gj='git push origin master && git status && git checkout gh-pages && git rebase master && git push origin gh-pages && git checkout master && git status'
    $ gj
    ```

#License

The source code is under [MIT License](/LICENSE).

All blog posts are under the [Public Domain Dedication](http://creativecommons.org/publicdomain/zero/1.0/).
