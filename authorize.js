const authorize = (req, res, next) => {
  const { user } = req.query
  if (user === 'john') {
    req.user = { name: 'john', id: 3 }
  } else {
    res.status(401).send('Unauthorized')
  }
  console.log('authorize')
  next()
};

module.exports = authorize
