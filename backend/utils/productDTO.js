class FoodProductDTO {
  constructor(foodProduct) {
    this._id = foodProduct._id;
    this.title = foodProduct.title;
    this.category = foodProduct.category;
    this.description = foodProduct.description;
    this.quantity = foodProduct.quantity;
    this.price = foodProduct.price;
    this.size = foodProduct.size;
    this.isAvailable = foodProduct.isAvailable;
    this.image = foodProduct.imagePath;
    this.createdAt = foodProduct.createdAt;
  }
}

module.exports = FoodProductDTO;
