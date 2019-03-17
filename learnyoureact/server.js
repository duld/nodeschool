let React = require('react');
let ReactDOMServer = require('react-dom/server');
let DOM = React.DOM;

let body = DOM.body;
let div = DOM.div;
let script = DOM.script;

let browserify = require('browserify');
let babelify = require('babelify');

const express = require('express');
let app = express();
const path = require('path');

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, '/views'));
app.engine('jsx', require('express-react-views').createEngine({transformViews: false}));

require('babel-core/register');

let TodoBox = require(path.join(__dirname, 'views', 'index-hello.jsx'));

let data = [
  {title : 'Shopping', detail: process.argv[3]},
  {title: 'Hair cut', detail: process.argv[4]}
];

app.use('/bundle.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');

  browserify('./app.js')
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(res);
})


app.use('/', (req, res) => {
  let initialData = JSON.stringify(data);
  let markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {'data' : data}));

  res.setHeader('Content-Type', 'text/html');

  let html = ReactDOMServer.renderToStaticMarkup(body(null,
    div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
    script({
      id: 'initial-data',
      type: 'text/plain',
      'data-json': initialData
    }),
    script({src: '/bundle.js'})
    ));
    res.end(html);
});

app.listen(app.get('port'), () => {
	console.log('Express server is up on port 3000')
});