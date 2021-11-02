const mongoose = require('mongoose');
const { MONGO_URI_MUTI } = process.env;

function connectDatabase(db_name) {
    const uri = MONGO_URI_MUTI + "/" + db_name + "?retryWrites=true&w=majority"
    const db = mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("connected database ", db_name)
        })
        .catch((error) => {
            console.log("error connect database");
            console.error(error);
            process.exit(1);
        })
    return db;
}

exports.connectMultiDatabase = () => {
    const userConnection = connectDatabase('Foods');
    const todoConnection = connectDatabase('Users');
}

