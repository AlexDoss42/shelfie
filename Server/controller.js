module.exports = {
  getAll(req, res) {
    const dbInstance = req.app.get('db');

    dbInstance.get_all_products()
    .then(response => {res.status(200).send(response) 
      console.log(`It's working! It's WORKING!!!!`)
    })
    .catch(err => res.status(500).send(err));
  }
}