const app = require('../../../../../server')
const config = require('../../../../config/env.config')
const userController = require(`./userController`)
const express = require('express')

const router = express.Router();

router.route('/users')
    .get(async function(req, res) {
        await userController.getAllUsers(req, res)
    })
    .post(async function(req, res) {
        await userController.createUser(req,res)
    })
router.route('/users/:userId')
    .get(async function(req, res) {
        await userController.getUserById(req, res)
    })
    .put(async function(req, res) {
        await userController.updateUserById(req, res)
    })
    .delete(async function(req, res) {
        await userController.deleteUserById(req,res)
    });

module.exports = router