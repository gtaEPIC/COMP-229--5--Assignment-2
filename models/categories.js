const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    name: String,
});
const categoriesModel = mongoose.model("Category", categoriesSchema);

module.exports = categoriesModel;

async function populateCategories() {
    const categories = [
        {name: "Men"},
        {name: "Women"},
        {name: "Teens"},
    ];
    for (const category of categories) {
        let result = await categoriesModel.findOne({name: category.name});
        if (!result) {
            await categoriesModel.create(category);
        }
    }
}

module.exports.populateCategories = populateCategories;