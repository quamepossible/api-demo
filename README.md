# api-demo
<h3>This repo is just a demonstration on how to create a simple REST API and fetch data from the api</h3>
<b>NB: Data format is in JSON</b>

<h2>Let's get started</h2>
<p>This repo contains two folders, <b>artists-api</b> and <b>fetch_artists</b></p>
<ul>
  <li>The <b>artists-api</b> folder contains source code to create the API, and</li>
  <li>The <b>fetch_artists</b> folder contains code to consume the API</li>
 </ul>

<h2>WHAT DOES THIS API DO?</h2>
<p>Okay, this API is used to fetch information about musicians from a database that contains musicians data. This database is defined by you!, meaning, you have to fill in the data yourself. Don't worry, I've created the database and table for you and also added a few data, all you have to do is to add more data</p>

<p>After adding musicians data to the database, you'll now consume the API, by running the <code>index.html</code> file in <b>fetch_artists</b> folder or start <b>fetch_artists</b> folder on <code>localhost:3000</code> by typing <code>php -S localhost:3000</code> in your command line</p>

<p>If you've successfully launch <code>index.html</code> or started the server on <code>localhost:3000</code>, you can now start searching for musicians (<b>NB: musician has to be in the database before his or her data will appear</b>).</p>
<p>I hope everything is successful and your musician's data is been fetched from the <b>artists-api</b>, but are you wondering why you're also getting the musician's picture together with its data?</p>
<p>The answer is simple, we are also using a third party api (<b>Deezer-api</b>) to fetch for musician's picture using the <b>STAGE NAME</b> of the musician</p>
