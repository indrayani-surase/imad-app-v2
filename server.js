var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var  articles={
    "article-one":{
      title:"Article-one|indra",
      heading:"Article-one",
      date:"feb 14,2017",
      content:
               `<p>
                    Hi, am indrayani.this is content for my first article.am indrayani.this is content for my first article.  am indrayani.this is content for my first article.am indrayani.this is content for my first article.am indrayani.this is content for my first article.
                </p>
                <p>
                    am indrayani.this is content for my first article.am indrayani.this is content for my first article.am indrayani.this is content for my first article.am indrayani.this is content for my first article.am indrayani.this is content for my first article.am indrayani.this is content for my first article.
                </p>
                <p>
                    am indrayani.this is content for my first article.am indrayani.this is content for my first article.am indrayani.this is content for my first article.am indrayani.this is content for my first article.am indrayani.this is content for my first article.am indrayani.this is content for my first article
                </p>`
    },
    "article-two":{
          title:"Article-two|indra",
           heading:"Article-two",
          date:"feb 15,2017",
          content:
               `<p>
                    Hi, am indrayani.this is content for my second article.am indrayani.this is content for my second article.  am indrayani.this is content for my second article.am indrayani.this is content for my second article.am indrayani.this is content for my second article.
                </p>
                <p>
                    am indrayani.this is content for my second article.am indrayani.this is content for my second article.am indrayani.this is content for my second article.am indrayani.this is content for my second article.am indrayani.this is content for my second article.am indrayani.this is content for my second article.
                </p>
                <p>
                    am indrayani.this is content for my second article.am indrayani.this is content for my second article.am indrayani.this is content for my second article.am indrayani.this is content for my second article.am indrayani.this is content for my second article.am indrayani.this is content for my second article
                </p>`
    },
    "article-three":{
          title:"Article-three|indra",
          heading:"Article-three",
          date:"feb 17,2017",
          content:
               `<p>
                    Hi, am indrayani.this is content for my third article.am indrayani.this is content for my third article.  am indrayani.this is content for my third article.am indrayani.this is content for my third article.am indrayani.this is content for my third article.
                </p>
                <p>
                    am indrayani.this is content for my third article.am indrayani.this is content for my third article.am indrayani.this is content for my third article.am indrayani.this is content for my third article.am indrayani.this is content for my third article.am indrayani.this is content for my third article.
                </p>
                <p>
                    am indrayani.this is content for my third article.am indrayani.this is content for my third article.am indrayani.this is content for my third article.am indrayani.this is content for my third article.am indrayani.this is content for my third article.am indrayani.this is content for my third article
                </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
      <head>
         <title>
            ${title}
          </title>
          <meta name="viewport" content="width-device-width, initial-scale=1" />
          <link href="/ui/style.css" rel="stylesheet" />
      </head>
      <body>
         <div class="container">
             <div>
                 <a href='/'>home</a>
             </div>
             <hr/>
             <h3>
               <center>
                 ${heading}
               </center>
             </h3>
             <div>
               ${date}
             </div>
             <div>
                ${content}
             </div>
         </div>
     </body>
   </html>
`;
return htmlTemplate;
}

var counter=0;
app.get('/counter', function(req,res) {
    counter=counter+1;
    res.send(counter.toString());
    
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
