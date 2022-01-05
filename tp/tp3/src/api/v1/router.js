const config = require('../../config/env.config')

const usersRoutes = require('./components/users/userRoutes')

const router = (app) => {
    app.get('/', (req, res) => {
        res.setHeader('Content-Type', 'application/json').status(200).send(JSON.stringify({message:'Welcome on rest API'}))
    })
    app.use(config.root_api, usersRoutes);
    app.use((req, res) => {
        res.status(404).send({message:'404 Not found'})
    })
}

module.exports = router;