---
layout: post
title: "The Story of Aircel Ad Blocker"
description: "An example of how need induces the invention among ourselves. Know the story of the Android App Aircel Ad Blocker."
comments: true
tags: open-source
date: 2015-05-11 20:10:00
---
You may heard about mobile operator Aircel if you live in TN, India. They are the pioneer in providing mobile phone coverage in those days and you can get their coverage everywhere. So, everyone in my family use Aircel and I am no exception. I do not make calls more often and there are even days I haven't made a single call.

One day while I'm in a hurry and while calling my dad the ads are played for like 15 seconds. Irritated, but I thought this is just some random advertisement at random intervals. But, it continued everyday for the first call of the day. Hm, how come I am still silent about this. So, I decided to create an app for that.

<h4>Starting off with Android</h4>
I studied some Android API's to do the same. Android Studio was released and it was awesome with the new build system called Gradle, although it had some <a href="http://stackoverflow.com/questions/27648966/android-studio-stuck-on-gradle-resolving-dependencies" target="_blank" rel="nofollow" title="Android Studio stuck on gradle resolving dependencies">issues</a>. The developing experience was great since I already got used to Intellij IDE line. Genymotion seemed to be cool since it used VirtualBox images rather than the emulators from Android. Deployment and Testing is quick and cool without any issues and it had a wide range of API's with pre-defined emulators.

<h4>The Business Logic</h4>
Let's get down to the main component of the application, the business logic. The oneliner is that the app should make a call before the user makes their first call - i.e. when the user wakes up and makes his first call for the day, it should be technically his second call of the day.

So, the app should perform a first call for the day while the user is sleeping and also delete the call history to avoid the discrepencies. It is easy to code and Android API had `AlarmManager` to do the trick. I coded to select a random time between 00:10:00 A.M to 00:15:00 A.M and it will make a call to the user's own Aircel number, resulting in a busy tone. Thus, the first call will be made and the next call would be ad-free for the user.

The app is now open-sourced under GPL-license at <a href="https://github.com/gowthamgts/AircelAdBlocker" title="Aircel Ad Blocker Github Page" rel="nofollow">Github</a> and looking for contributions to further improve the stability and feature set. Free feel to try the app at the Play Store.
