class UserController {
  getUsers(req, res) {
    let output = "";
    //  output = user.findAll();
    output = "select * from users";
    console.log("====output====", output);
    if (output) res.status(200).json({ message: output });
    else res.status(404).json({ message: "Not found" });
  }
}

module.exports.UserController;
