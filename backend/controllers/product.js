const productController = {
  // Create new product
  async create(req, res, next) {
    res.status(200).json({
      message: "Testing... Create new product",
    });
  },

  // Show all products
  async showAll(req, res, next) {
    res.status(200).json({
      message: "Testing... Show all products",
    });
  },

  // Show one product
  async showById(req, res, next) {
    res.status(200).json({
      message: "Testing... Show one product",
    });
  },

  // Update a product
  async update(req, res, next) {
    res.status(200).json({
      message: "Testing... Update a product",
    });
  },

  // Delete a product
  async delete(req, res, next) {
    res.status(200).json({
      message: "Testing... Delete a product",
    });
  },
};

module.exports = productController;
