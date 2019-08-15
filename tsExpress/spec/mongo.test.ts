if (!describe) {
    const {
        describe,
        it
    } = require('mocha');   
    const {
        expect
    } = require('chai'); 
}

describe('Test mongo connection', () => {
    it('Test insert', () => {
        let mongoose = require('mongoose');
        let url = "mongodb://localhost:27017/magic";
        mongoose.connect(url);

        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error: '));
        db.once('open', () => {
            console.log("Connect to " + url);
        });

        let Schema = mongoose.Schema;

        let user = {
            name: String
        };

        var userSchema = Schema(user);
        var User = mongoose.model('User', userSchema);
        // var newUser = new User({
        //     name: 'even'
        // });
        // newUser.save();
        User.findOne({}, (err: Error, docs: any) => {
            try {
                if (err) {
                    throw err;
                }
                console.log(docs);
            } catch (error) {
                console.error(err);
            } finally {
                mongoose.disconnect();
            }
        });        
        
    })
});