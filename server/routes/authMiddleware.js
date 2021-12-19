// verificare daca user-ul este logat
const authMiddleware = async (req, res, next) => {
  const { password: password, id } = req.session;
  if (!password || !id) {
    res.status(403).send({ message: "User not logged in." });
  } else {
    next();
  }
};

module.exports = { authMiddleware };