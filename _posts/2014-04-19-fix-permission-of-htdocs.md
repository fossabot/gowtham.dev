---
layout: post
title: "Fix permission of htdocs folder in Linux Ubuntu 14.04 for Xampp"
date: 2014-04-19 13:47:35
comments: true
tags: ubuntu
description: "Fix permission issues of htdocs folder in Ubuntu linux. Change permissions for htdocs folder."
---
<div dir="ltr" style="text-align: left;" trbidi="on">
Hello, on your fresh install of XAMPP in Ubuntu and other linux distros, you will face a common problem - you cannot do anything inside htdocs folder. The problem is that since the htdocs folder is present in /opt/ directory it requires password to modify files in the htdocs folder.<br />

<h4>
1. The easier way</h4>
Just enter the following commands in the terminal and you're good to go.<br />
<div class="code">
<pre>sudo chmod -R 777 /opt/lampp/htdocs</pre>
</div>
<div class="note">
The above command will enable all users in the network to access your htdocs folder. If you don't want this to happen, implement method 2.</div>
<h4>
2. The harder way</h4>
<div>
This method will eliminate the problem in the above mentioned method. Do the following.</div>
<div>
<ol style="text-align: left;">
<li>Find your username by entering the command <span class="code">who am i</span>
and you will see the result as shown below.<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://4.bp.blogspot.com/-j_5jdZLW6CE/U1KKq1RRt3I/AAAAAAAAAq0/e0ZeAAhFBjk/s1600/who+am+i.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img alt="who am i command" border="0" src="https://4.bp.blogspot.com/-j_5jdZLW6CE/U1KKq1RRt3I/AAAAAAAAAq0/e0ZeAAhFBjk/s1600/who+am+i.png" title="who am i command" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">who am i command to know your username</td></tr>
</tbody></table>
</li>
<div class="separator" style="clear: both; text-align: center;">
</div>
<li>Next enter the command in the terminal in the format as follows:
<div class="code">
<pre>sudo chown -R username:username /opt/lampp/htdocs</pre>
</div>
<div class="note">
Replace username with your username and the above code will ask for your password.</div>
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://2.bp.blogspot.com/-u_6PG4qbf5g/U1KKzMl0ZNI/AAAAAAAAAq8/JRZ8EcPaNa4/s1600/chown.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img alt="chown command to change ownership of htdocs folder" border="0" src="https://2.bp.blogspot.com/-u_6PG4qbf5g/U1KKzMl0ZNI/AAAAAAAAAq8/JRZ8EcPaNa4/s1600/chown.png" title="chown command to change ownership of htdocs folder" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">chown command to change ownership of htdocs folder</td></tr>
</tbody></table>
<div>
</div>
</li>
<li>Add the user to the Apache configuration file by the following command
<div class="code">
<pre>sudo gedit /opt/lampp/etc/httpd.conf</pre>
</div>
The above code will open httpd.conf file in a text editor</li>
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://3.bp.blogspot.com/-Shr8oD-B0co/U1KNRcwXtII/AAAAAAAAArI/ZVr-WwSb-eY/s1600/gedit.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img alt="editing httpd.conf file to add your username" border="0" src="https://3.bp.blogspot.com/-Shr8oD-B0co/U1KNRcwXtII/AAAAAAAAArI/ZVr-WwSb-eY/s1600/gedit.png" title="editing httpd.conf file to add your username" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">editing httpd.conf file to add your username</td></tr>
</tbody></table>
<li>Find for the following lines
<div class="code">
<pre>User nobody
Group nogroup
</pre>
</div>
Replace nobody with your username, save it and restart XAMPP. That's it.
</li>
</ol>
</div>
</div>
