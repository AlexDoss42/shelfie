module.exports = {
  getAll(req, res) {
    const dbInstance = req.app.get('db');

    dbInstance.get_inventory()
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
  }
}