---
layout: post
title: 'Oh Ruby My Ruby - My Experiences with Ruby and Rails'
description: 'Ruby is cool. Wait What? I really mean it... My Experiences with Ruby and Rails.'
comments: true
tags: ruby
date: 2015-06-12 12:15:00
---
It was my holidays and I was waiting for my DOJ at Cognizant. Generally, people say that it will take too much time for them to provide call letters to the candidates. So, I sat down and planned to work on some new tech. Days went by and I played COD for most of the time.

One day, while posting new updates to my friend's lyrics website which is also built on top of Jekyll, it took almost 10 minutes for building the site. The reason for that much delay is too simple. I almost had 2500 posts in the `_posts` directory and also `tag_gen` plugin which will generate almost 1000 pages for each and every tag. I understood the need for database driven website rather than static ones.


### Search for a scalable solution ###
I had three alternatives initially in mind that will well suit the site's scalability needs.

1. <a href="https://nodejs.org" title="Visit NodeJS website" target="_blank" rel="nofollow">NodeJS</a> with <a href="expressjs.com" title="Visit Express website" target="_blank" rel="nofollow">Express framework</a>
2. <a href="http://rubyonrails.org/" title="Visit Ruby on Rails website" target="_blank" rel="nofollow">Ruby on Rails</a>
3. <a href="https://www.python.org" title="Visite Python Language website" target="_blank" rel="nofollow">Python</a> with <a href="https://www.djangoproject.com" title="Visit Django website" target="_blank" rel="nofollow">Django framework</a>

And the funny thing about all the choices are I don't know about any of the basic languages running behind them. Of course, I know JavaScript which powers NodeJS but I'm not an expert in it and it required a measurable learning curve. Ruby and Python on the other hand, I only know that they are <a href="http://en.wikipedia.org/wiki/Dynamic_programming_language" target="_blank" rel="nofollow">dynamically typed languages</a> and nothing more.

I initially pushed Rails to my last option since I preferred NodeJS and Python Django due to some personal preferences. I kept NodeJS on the top of my list since NodeJS for known for massive scalability since it is based on Event-driven non-blocking IO. And Python was an obvious choice for me since I loved software development in Linux (especially Ubuntu).

### So, what did I chose? ###
Well, I choose NodeJS and start to learn about it. I covered the basic working principles and planned to start <a href="http://en.wikipedia.org/wiki/Rapid_application_development" target="_blank" rel="nofollow">RAD</a> approach to my project. I experimented with Express framework and came across Ghost platform which acts as CMS built on NodeJS. An idea was sparked in my mind to tweak the <a href="https://ghost.org/" target="_blank" rel="nofollow">Ghost</a> platform and build my site on top of it which will save me a lot of time.

I tried Ghost and it seemed 'All is well'. But, there came a problem I'm not able to use **custom data** which will help me to avoid writing redundant code since most of the posts have only small differences among them. I can hack the Ghost core to do the things I need, but it will take a lot of time.

So, falling back to other two alternatives I chose Rails (Yes, I did) since some programming enthusiasts and webdevs' told me that Python with Django is not scalable and also not the future of web applications.

### Settling with Rails ###
There is another major problem in learning Rails framework (Guess what), I need to learn Ruby first. That sounded good to me, learning a new language. I googled and finally settled with starting <a href="http://www.codecademy.com/en/tracks/ruby
" target="_blank" rel="nofollow">Codecademy's Ruby course</a>. It is free and I spent a week to learn the language and it is cool.

Ruby seemed to be simple and powerful and you can do the same thing in many ways in ruby. I liked the language mostly because of its dynamic nature, no-semicolons (puff! I will not hereafter spend my time in finding missing semicolon) and also its simplicity. I thought Ruby will be a tough language to learn but its not. Instead, it is fun.

But, Rails framework on the other hand took a steep learning curve that at one point I almost thought to quit and move on to Django. Somehow I managed and now I know how to develop web apps using Rails (yay!!!). One of the main thing I loved about Rails is DRY practice which saved a lot of time for the development of small silly things.

Also learning Ruby almost resulted in my first pull request in an ApkDownloader project at <a href="https://github.com/jlindsey/ApkDownloader/pull/3" rel="nofollow" target="_blank" title="View the pull request in new tab.">Github.</a> If you're planning to learn a new language then I would recommend learning Ruby especially if you're a webdev. Let me hear your thoughts below...
