const { Listener } = require('discord-akairo');
const winston = require('winston');

module.exports = class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            eventName: 'ready',
            type: 'once'
        });
    }

    exec() {
        if (this.client.cronHandler) {
            if (process.env.CRON_ENABLED != false) {
                this.client.cronHandler.modules.forEach(module => {
                    winston.info('Running cron module', module.id);
                    module.run();
                });
            } else {
                winston.warn('Cron module is disabled');
            }
        }
    }
};
