const controllerPutProductId = require("../../controllers/products/controllerPutProductId");

const handlerPutProductId = async (req, res) => {
  const {id} = req.params;
  const {name, category, options, price, description, images, settlement,promotion} = req.body;
  try {
    const updateProduct = await controllerPutProductId({id,name, category, options, price, description, images, settlement,promotion});
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerPutProductId;
