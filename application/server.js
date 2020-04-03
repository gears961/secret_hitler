const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const bodyParser = require('body-parser')

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/src/client'));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
        colors: true,
    },
    historyApiFallback: true,
}));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

module.exports = app;
const server = app.listen(4000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log(host);
    console.log(port);

    console.log('Secret Hitler client app listening at http://%s:%s', host, port);
});