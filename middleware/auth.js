const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) return res.status(400).json({ msg: "Invalid authentication" });
    jwt.verify(token, "anb", (err, user) => {
      if (err) return res.status(400).json({ msg: "Invalid authentication" });
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = auth;
