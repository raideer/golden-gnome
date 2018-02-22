const { AkairoClient } = require('discord-akairo');
const ItemsProvider = require('./ItemsProvider');
const db = require('../db/models/index');

module.exports = class GnomeClient extends AkairoClient {
    constructor() {
        super({
            commandDirectory: './src/commands/',
            inhibitorDirectory: './src/inhibitors/',
            listenerDirectory: './src/listeners/',
            handleEdits: false,
            defaultCooldown: 1000,
            commandUtil: true
        }, {
            disableEveryone: true
        });

        this.items = new ItemsProvider(db.Item);
    }
};
