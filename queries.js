const promise = require('bluebird');

const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectingString = 'postgress://localhost:5432/';
const db = pgp(connectingString);

getFiveClasses = (req, res) => {
   db.any("select * from courses_18s limit 5")
        .then((data) => {
            res.status(200).json({
                status: 'success',
                data: data,
            });
        }).catch((err) => {
           return err; 
        });
}


module.exports = {
    getFiveClasses: getFiveClasses
};
