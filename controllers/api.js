exports.getUser = (req, res) => {
  return res.status(200).json([
    {
      name: "sakib ahmed",
      age: 21,
    },
    {
      name: "Rakib ahmed",
      age: 16,
    },
  ]);
};

exports.postUser = (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  console.log(name, age);
  return res.status(201).json({
    msg: "User Was Created Sucessfully",
  });
};
