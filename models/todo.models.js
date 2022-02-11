const mongodb = require('mongodb');
const db = require('../data/database');

class Todo {
    constructor(text, id) {
        this.text = text;
        this.id = id;
    }

    save() {
        if (this.id) {
            const todoId = new mongodb.ObjectId(this.id);
            return db.getDb().collection('todos').updateOne({
                _id: todoId
            }, {
                $set: {
                    text: this.text
                },
            });
        } else {
            return db.getDb().collection('todos').insertOne({
                text: this.text
            });
        }
    }

    delete() {
        const todoId = new mongodb.ObjectId(this.id);
        if (!this.id) {
            throw new Error('Trying to delete todo that doesn\'t exist!');
        }

        return db.getDb().collection('todos').deleteOne({
            _id: todoId
        });
    }
}

module.exports = Todo;