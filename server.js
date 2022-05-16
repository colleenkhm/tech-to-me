const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Express Session
const sesh = {
    secret: 'trendy tech',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

app.use(sesh);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false}).then( () => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});