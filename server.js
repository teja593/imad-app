var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
  title:'Article-one| surya teja',
  heading: 'Article-one',
  date:'august 23rd 2017',
  content:`
      <p>
                    suryQA
                    hari ah
                </p>
                <p>
                    this is the content for my  first article.this is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first article
                </p>
                <p>
                    this is the content for my  first article.this is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first article
                </p>
                `
                    
    },
    'article-two':{
         title:'Article-two| surya teja',
  heading: 'Article-two',
  date:'august 22rd 2017',
  content:`
      <p>
                    suryQA
                    hari ah
                </p>
                <p>
                    this is the content for my  first article.this is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first article
                </p>
                <p>
                    this is the content for my  first article.this is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first articlethis is the content for my  first article
                </p>
                `
                    
    
    },
    'article-three':{
        title:'Article-three| surya teja',
  heading: 'Article-threee',
  date:'august 21rd 2017',
  content:`
      <p>
                    suryQA
                    hari ah
                </p>
                
                `
                    
    }
};

    
    
    
  

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var HtmlTemplate=`<html>
    <head>
        <title>
            ${title};
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
               
        </head>
        <body>
            <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
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
return HtmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
     res.send(createTemplate(articles[articleName]));
    
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
