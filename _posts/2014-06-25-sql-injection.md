---
layout: post
title: "What is SQL injection - Understanding SQL injection with examples"
date: 2014-06-25 13:47:35
comments: true
tags: security
description: "What is SQL injection? Learn about SQL injection in minutes. We explain SQL injection with examples."
---
Almost 70% of the websites built today is vulnerable to SQL injection. That's a true fact and if you know how to deface a website using SQL injection, then you will surely realize the fact.

<p class="attention">
Attention: This article only helps you to protect your site against SQL injection if you are a site owner or to know about the vulnerabilities in the web if you are a learner. Please, do not misuse this vulnerability against an individual, organisation or some other network without prior consent from them.
</p>
<p class="note">
I am demonstrating SQL injection examples with PHP and MySQL. But, they are applicable to almost any sort of programming languages and are not restricted to these.
</p>
This article consists of the following topics

1. <a href="{{site.url}}/2014/04/what-is-sql-injection-understanding-sql-injection-with-examples.html#prerequisites-for-sql-injection">Prerequisites for SQL injection</a>
2. <a href="{{site.url}}/2014/04/what-is-sql-injection-understanding-sql-injection-with-examples.html#understanding-sql-injection">Understanding SQL injection</a>
3. <a href="{{site.url}}/2014/04/what-is-sql-injection-understanding-sql-injection-with-examples.html#using-sqlmap-tool">Using sqlmap tool</a>
4. <a href="{{site.url}}/2014/04/what-is-sql-injection-understanding-sql-injection-with-examples.html#prevention-of-sql-injection-using-php">Prevention of SQL injection in PHP</a>
<h4>
<a href="{{site.url}}/2014/04/what-is-sql-injection-understanding-sql-injection-with-examples.html#prerequisites-for-sql-injection" name="prerequisites-for-sql-injection">
1. Prerequisites for SQL injection</a></h4>
First of all, this article about SQL injection needs you to be aware of some programming concepts in Web development. You should have some knowledge in PHP, MySQL and database connectivity. If you don't have any of these prior knowledge, google it and there are always some great tutorials on the internet.

We should do some setup before we dive into experiments. I have installed XAMPP in my system and I've an <span class="code">index.php</span> page in the <span class="code">htdocs</span> folder. And it contains the following code:
{% highlight php %}
<?php
// connect to database
$con = new mysqli("localhost", "root", "", "test");
if($con->connect_errno)
	die("Database connection failed");
// store the query parameter to a local variable
$id = $_GET["id"];
//querying the database with the id parameter and retrieve as array
$result = $con->query("select name, email from user where id=$id")->fetch_array();
//printing the name of the corresponding user
echo $result['name'];
?>
{% endhighlight %}
<div>
I have a database named <span class="code">test</span> with the following structure
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://1.bp.blogspot.com/-Pc4FyYkn_qw/U1YBV6WYhMI/AAAAAAAAArY/vjF4chf9sVM/s1600/schema.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img alt="SQL injection database schema" border="0" src="http://1.bp.blogspot.com/-Pc4FyYkn_qw/U1YBV6WYhMI/AAAAAAAAArY/vjF4chf9sVM/s1600/schema.png" title="SQL injection database schema" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Database test schema</td></tr>
</tbody></table>
And the output of the <span class="code">index.php</span> with url <span class="code">http://localhost/index.php?id=1</span> is
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://4.bp.blogspot.com/-yeMvfYwDaTk/U1YCZL93Q4I/AAAAAAAAArg/I8EwMZKomE8/s1600/index-with-id.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img alt="SQL injection index page" border="0" src="http://4.bp.blogspot.com/-yeMvfYwDaTk/U1YCZL93Q4I/AAAAAAAAArg/I8EwMZKomE8/s1600/index-with-id.png" title="SQL injection index page" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">username of user with id=1</td></tr>
</tbody></table>
The above result is fetched from a row in the table user that have the following data:</div>
<p class="code">
<pre>id: 1
name: dolly
password: password
email: dolly@example.com
</pre>
</p>
<h4>
<a href="{{site.url}}/2014/04/what-is-sql-injection-understanding-sql-injection-with-examples.html#understanding-sql-injection" name="understanding-sql-injection">2. Understanding SQL injection</a></h4>
<p>
Well, so finally we're into the tutorial. So, what is SQL injection? It is a technique where you can inject your malicious code into the url or cookie or with some other parameters to get the information about the database schema or to inject a file into the site's root directory or to even shutdown the system.
</p>
<p class="note">
Please note that the following tutorials are only meant for beginners for easy understanding. There are many categories and types of SQL injection that can be done. For more information, <a href="http://en.wikipedia.org/wiki/SQL_injection" target="_blank" title="Wikipedia's SQL injection article">see Wikipedia's article</a> about SQL injection</div>
<p>
So, to do SQL injection we must first identify whether the site is vulnerable to SQL injection. You can find that by the simple way of appending <span class="code">'</span> to the end of the url that contains the get parameter. Considering our example, if I put the URL as <span class="code">http://localhost/index.php?id=1'</span> then I will get the output as
</p>
<p class="code">
<pre>Warning: mysqli_fetch_array() expects parameter 1 to be mysqli_result, boolean given in /opt/lampp/htdocs/index.php on line 7
</pre>
</p>
<p>
As you can see it, if it reports the error like this then the site is vulnerable to SQL injection. Next we're going to discover the information about databases, tables and MySQL version using SQL injection</p>
<h4>
<a href="{{site.url}}/2014/04/what-is-sql-injection-understanding-sql-injection-with-examples.html#using-sqlmap-tool" name="using-sqlmap-tool">3.Using sqlmap tool</a></h4>
<p>
You can inject the code using the URL but, that will look a little bit tougher if you are a beginner. <b>sqlmap</b> is an opensource freeware that helps you to test and inject websites. Download the <a href="https://github.com/sqlmapproject/sqlmap/archive/master.zip" rel="nofollow" target="_blank" title="Download sqlmap from Github">zip file</a> and extract it to your computer.
</p>
<p class="note">
Keep in mind that you will need Python to run sqlmap. You can use sqlmap on both Windows and *nix platforms.
</p>
<p>
After extracting sqlmap and installing python, in the command line browse to your sqlmap folder and then type the following command:
</p>
<p class="code">
<pre>python sqlmap.py</pre>
</p>
<p class="code">
<pre>python is not recognized as internal or external command</pre>
</p>

If you encounter the above error then you have not set your PATH variable or you have set that wrong. Please check this <a href="http://stackoverflow.com/a/6318188" rel="nofollow" target="_blank">link</a> on setting up PATH in Windows.

After testing that sqlmap works as expected, its time to discover the databases in the target system. Use the command below to discover the databases.

<div class="code">
<pre>python sqlmap.py -u http://localhost/index.php?id=1 --dbs
</pre>
</div>
<div>
The <span class="code">-u</span> flag stands for URL of the target. Enter <span class="code">python sqlmap.py -h</span> to see the manual of using sqlmap. After entering the command, it discovers the databases in my localhost as shown in the image below:</div>
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="http://1.bp.blogspot.com/-yvbZNxMtrxI/U1ixSXNJu7I/AAAAAAAAAr8/JArnNDQWJIs/s1600/sqlmap.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img alt="SQL injection sqlmap database discovery" border="0" src="http://1.bp.blogspot.com/-yvbZNxMtrxI/U1ixSXNJu7I/AAAAAAAAAr8/JArnNDQWJIs/s1600/sqlmap.png" height="424" title="SQL injection sqlmap database discovery" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">sqlmap database discovery</td></tr>
</tbody></table>
<div>
You can use some other flags in sqlmap to do some specified tasks. It is well documented in the table below:
<table border="1"><tbody>
<tr>
<th>Flag</th>
<th>Description</th>
</tr>
<tr>
<td><span class="code">--users</span></td>
<td>Reveals all the users in the system</td></tr>
<tr>
<td><span class="code">--passwords</span></td>
<td>Reveals all the passwords of the users in the system</td>
</tr>
<tr>
<td><span class="code">--tor</span></td>
<td>Use tor as a proxy to hack into the system. Use <span class="code">--tor-type=SOCKS5</span> if you're using tor in SOCKS5 protocol.</td>
</tr>
<tr>
<td><span class="code">--sql-shell</span></td>
<td>Brings up SQL shell to you for manipulating SQL queries</td>
</tr>
<tr>
<td><span class="code">--os-shell</span></td>
<td>Brings up OS shell that will allow you to shutdown, read or write files, start or stop a service, etc.</td>
</tr>
<tr>
<td><span class="code">--sql_query <i>query</i></span></td>
<td>Runs the <i>query</i> specified by the user.</td>
</tr>
<tr>
<td><span class="code">--dump</span></td>
<td>Dumps the specified database in csv format.</td>
</tr>
</tbody></table>
</div>
<p>
There are much more flags you can use with sqlmap. Read the man page for further hacks</p>

<h4>
<a href="{{site.url}}/2014/04/what-is-sql-injection-understanding-sql-injection-with-examples.html#prevention-of-sql-injection-using-php" name="prevention-of-sql-injection-using-php">Prevention of SQL injection in PHP</a></h4>
<p>
So, how can we protect ourselves from this type of SQL injection? The answer is quite simple. We can use prepared statements in PHP by escaping the characters in SQL query before we query it in the database. Using PDO, may be a little complex, but if you play around, it will be easy for you.</p>
<p>
The <span class="code">index.php</span> can be modified as follows:</p>
<pre>
&lt;?php
	$con = new mysqli(&quot;localhost&quot;, &quot;root&quot;, &quot;&quot;, &quot;test&quot;);
	if($con-&gt;connect_errno)
		die(&quot;Database connection failed&quot;);
	$id = $_GET[&quot;id&quot;];
	$modified_id = $con-&gt;escape_string($id);	//escaping and storing $_GET[&quot;id&quot;] in a variable
	$statment = $con-&gt;prepare(&quot;select name from user where id=?&quot;);	//using prepared statements. Note the '?' mark.
	$statment-&gt;bind_param('i',$modified_id);	//bind the variable to the ? mark. First paramter 'i' stands for integer and second one is the variable.
	$statment-&gt;execute();	//executing the query
	$result = $statment-&gt;get_result()-&gt;fetch_array(); //getting the result and storing it in array
	echo $result['name'];	//echoing out
?&gt;
</pre>
<p>
The first thing you should do is to replace all the input variables in the query using a <span class="code">?</span> mark. Then bind the value to the <span class="code">?</span>, by using <span class="code">bind_param()</span> function which takes two arguments. The first one is the datatype - 'i' for integer, 's' for string, 'd' for double, etc. and the second parameter is the unsafe variable. Then you can execute and get the result and then use it according to your needs. Now, you can test with sqlmap for vulnerabilities in your code.
</p>
<p class="note">If there are any changes to be made please comment below</p>
