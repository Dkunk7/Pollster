const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
require("dotenv").config();

// Referenced from volley-all
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create();
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Referenced from volley-all
const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

// Referenced from volley-all
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Referenced from volley-all
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now running wahoo!!!"));
});