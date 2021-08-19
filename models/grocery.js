const db = require('../util/database') //fetch data

module.exports = class Grocery {
    constructor(id,item) {
        this.id = id;
        this.item = item;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM groceries');
    }
};