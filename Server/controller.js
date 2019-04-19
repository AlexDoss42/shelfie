module.exports = {
  getAll(req, res) {
    const dbInstance = req.app.get('db');

    dbInstance.get_inventory()
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
  },

  addProduct(req, res) {
    const dbInstance = req.app.get('db');
    const {image_url, product_name, price} = req.body;
 
    dbInstance.create_product([image_url, product_name, price])
    .then(() => {res.sendStatus(200)
      console.log(`It's working! IT'S WORKING!!!`)
    })
    .catch(err => res.status(500).send(err));
  }
}