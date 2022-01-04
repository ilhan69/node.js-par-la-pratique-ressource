var http = require('http')

let port_min = 3000;
let port_max = 4000;

let port_pong;

module.exports = async function pingAllPorts() {
    for (port_min; port_min < port_max; port_min++) {
        try {
            port_pong = await new Promise((resolve, reject) => {
                let req = http.get({
                    hostname: 'localhost',
                    port: port_min,
                    path: '/ping',
                    agent: false
                    });
                req.on('response', res => {
                    resolve(port_min);
                });
                req.on('error', err => {
                    reject(false);
                });
            });
            if(port_pong) {
                return port_pong
            }
        } catch(err) {
            port_pong = false;
        }
    }
}