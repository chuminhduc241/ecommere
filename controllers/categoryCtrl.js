const Category = require("../models/categoryModel");
const categoryCtrl = {
  getCagories: async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
  },
  createCategory: async (req, res) => {
    try {
      const { name } = req.body;
      const category = await Category.findOne({ name });
      if (category)
        return res.status(400).json({ msg: "this category already exist" });
      const newCategory = new Category({
        name,
      });
      newCategory.save();
      res.json({ msg: "created a category" });
    } catch (error) {}
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.json({ msg: "Deleted a Category " });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.findByIdAndUpdate({ _id: req.params.id }, { name });
      res.json({ msg: "updated a Category " });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = categoryCtrl;
