const express = require('express');
const router = express.Router();
const productsModel = require('../../models/products');

// Get products
router.get('/', async (req, res) => {
    try {
        let products = await productsModel.find();
        res.json({
            success: true,
            message: 'Get products successfully',
            data: products
        })
    }catch (e) {
        console.error(e);
        res.json({
            success: false,
            message: e.message,
        });
    }
});

// Get a product
router.get('/:id', async (req, res) => {
    try {
        let product = await productsModel.findById(req.params.id);
        res.json({
            success: true,
            message: 'Get product successfully',
            data: product
        })
    }catch (e) {
        console.error(e);
        res.json({
            success: false,
            message: e.message,
        });
    }
});

// Post a product
router.post('/', async (req, res) => {
    try {
        let newProduct = new productsModel(req.body);
        let result = await productsModel.create(newProduct);
        res.json({
            success: true,
            message: 'Create new product successfully',
            data: result
        })
    }catch (e) {
        console.error(e);
        res.json({
            success: false,
            message: e.message,
        });
    }
});

// Put a product
router.put('/:id', async (req, res) => {
    try {
        let updatedProduct = productsModel(req.body);
        updatedProduct._id = req.params.id;
        let result = await productsModel.updateOne({_id: req.params.id}, updatedProduct);
        res.json({
            success: true,
            message: 'Update product successfully',
            data: result
        });
    }catch (e) {
        console.error(e);
        res.json({
            success: false,
            message: e.message,
        });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
   try {
         let result = await productsModel.deleteOne({_id: req.params.id});
         res.json({
              success: true,
              message: 'Delete product successfully',
              data: result
         });
   }catch (e) {
        console.error(e);
        res.json({
            success: false,
            message: e.message,
        });
   }
});

module.exports = router;