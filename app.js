express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
const userRoutes = require('./userRoutes');
//middleware
app.use(usrRoutes);

//route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//server setup
app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});



