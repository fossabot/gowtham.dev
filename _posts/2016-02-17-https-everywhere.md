---
layout: post
title: 'Following HTTPS everywhere for all the sites'
description: 'Everyone is emphasizing https over http. Here are my views on that.'
comments: true
tags: sysadmin
date: 2016-02-17 12:15:00
---
For the past few weeks there are some major changes happening in the world of computers related to security and Internet is no exception. From Google <a href="https://googlewebmastercentral.blogspot.in/2014/08/https-as-ranking-signal.html" rel="nofollow" target="_blank" title="Google considers HTTPS as a ranking signal">announcing</a> that websites with HTTPS enabled will be ranked at the top of search pages to Apple's <a href="http://www.apple.com/customer-letter/" rel="nofollow" target="_blank" title="Apple's message to its customers">latest message</a> to its customers regarding backdoor on iPhones, security becomes a major concern and necessity for webmasters.

I'm now responsible for the smooth functioning of four sites, of which one cannot be experimented with because of the high traffic. I constantly looked for buying SSL certificates for my websites but they seemed costlier and also I thought it might be a hectic work to change configurations of nginx on all the production servers.

<h4>Busting the myth</h4>
Many webmasters never implement HTTPS because of complexity and higher pricing of SSL certificates. Thanks to <a href="https://letsencrypt.org" rel="nofollow" target="_blank" title="Let's Encrypt Official site">Let's Encrypt</a>, now you can get free SSL certificates by chaining mechanism from their trusted certificates. Let's encrypt(LE) will verify your domain by running a standalone program on our servers temporarily using port 80 and 443. If the authenticity of the domain is verified then certificates were downloaded and placed in the `/etc/letsencrypt/live/example.com` directory.

Following the DigitalOcean's tutorial I planned to test-drive with a low-traffic server and everything looked good. I performed the migration of the high-traffic website from HTTP to HTTPS within 20 minutes (Ofcourse the server is down, but it was not on peak hours). Now, I feel I have wasted some time by not utilizing HTTPS from the start. Aw!

<h4>Problems down the road</h4>
It was not all awesome at once. The green lock on the address bar looked like something big and I felt awesome. My friend is also amused, because it will improve the site's presence further on Google and will create some trust among its users. But it came with two problems, mutliple versions of domain and Cloudflare.

First problem is little easy to solve. After implementing HTTPS support, your domain gets divided into four parts:

1. http://example.com
2. http://www.example.com
3. https://example.com
4. https://www.example.com

By default, we served the domain in the format `http://www.example.com`. All the requests coming for `http://example.com` will be redirected to `http://www.example.com` with code 301 for SEO purposes and to maintain a unified site. But, that was before HTTPS, and now the nginx config file just grew bigger due to implementation of 4 server blocks. All the first three versions now redirect to the fourth one with code 301.

The second problem is Cloudflare. Initially, we have to disable Cloudflare on the domain. This is because due to its Firewall restrictions, the LE's client cannot verify the identity of the website for which ceritificate has to be provided. This is okay for first time, but LE's free certificate is valid only for 90 days and you've to run the client again to renew the script, which inturn I have to disable Cloudflare again. Duh. I came up with temporary solution by enabling Cloudflare SSL to <strong>Full(Strict) mode</strong> which used Cloudflare's certificate and setup a reminder for renewing my server's own certificate after 60 days. It is still a temporary fix though.

Now, we have all the four domains running HTTPS versions and everyone is happy. Yeah, HTTPS everywhere.
