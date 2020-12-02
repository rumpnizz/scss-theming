const express = require('express')
const path = require('path')
const multer = require('multer')
const sass = require('node-sass-middleware')

const port = process.env.PORT || 3000;

const router = express.Router()

router.get('/api/upload',)

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(sass({ 
    src: path.join(__dirname, 'assets/scss'),
    dest: path.join(__dirname, 'assets/css'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/assets/css'
}))
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api', router);

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => res.render('index'));
app.get('/page/:id', (req, res) => res.render(`pages/page-${req.params.id}`));

app.listen(port, () => console.log(`Listening on :${port}`));
