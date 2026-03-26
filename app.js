express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const ejs = require('ejs');
const userRoutes = require('./userRoutes');

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');
//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(usrRoutes);

//route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//server setup
app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});



