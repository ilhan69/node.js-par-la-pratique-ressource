const config = require('./src/config/env.config')
const express = require('express');
const app = express();
const router = require('./src/api/v1/router')
const morgan = require('morgan');
const cors = require('cors');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        return res.status(200).json({});
    }
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(config.format_logs));
app.use(cors());

router(app);

app.listen(config.port, () => {
    console.log(`listening on port ${config.port} in ${config.node_env} mode`)
});