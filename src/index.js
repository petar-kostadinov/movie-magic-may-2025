import express from 'express'
import handlebars from 'express-handlebars';
import homecontroller from './controllers/homeController.js';
import moviecontroller from './controllers/movieController.js';

const app = express();

app.use(express.static('./src/public'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.set('views', './src/views');

app.use(homecontroller);
app.use('/movies', moviecontroller)

app.listen(5000, () => console.log('Server is listening on http://localhost:5000....'));