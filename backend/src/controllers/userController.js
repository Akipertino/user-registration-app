const User = require("../models/User");

exports.create = async (req, res) => {
  try {
    let { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: "Missing datas",
      });
    }

    const isEmailExists = await User.findOne({email});

    if(isEmailExists)
      return res.status(400).json({message: "this email already exist"})

    const hashedPassword = await require("bcryptjs").hash(password, 10);

    const newUser = await User.create({fullname, email, password:hashedPassword});
    res.status(201).json({
        message: "User created successfully",
        id: newUser._id
    });

  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

exports.list = async(req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({users});
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}
