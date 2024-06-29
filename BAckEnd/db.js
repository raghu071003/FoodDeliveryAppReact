const mongoose = require('mongoose');
const mongoUri = 'mongodb+srv://gunturmirchi:Saisrv%400703@gunturmirchidb.wndtgqg.mongodb.net/GunturMirchi';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB");

        // Use async/await with find().toArray()
        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        // console.log("Fetched data:", fetched_data);
        const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();


        global.food_items = fetched_data;
        global.foodCategory = foodCategory;
        console.log(foodCategory);
    } catch (err) {
        console.error(`Could not connect to the database: ${err}`);
    }
}

module.exports = mongoDB;
