const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
        //    "mongodb+srv://tasnim:258789568@cluster0.zxoi7.mongodb.net/?retryWrites=true&w=majority",
        "mongodb+srv://root:258789568@cluster0.fatvy.mongodb.net/?retryWrites=true&w=majority",    
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
