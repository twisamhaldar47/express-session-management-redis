function login(req, res) {
  const { username, password } = req;
  //check if the creds are correct
  //.....

  //assume that the creds are correct
  req.session.clientId = "abc123";
  req.session.myNum = 5;
  res.json("you are logged in");
}

module.exports = login;
