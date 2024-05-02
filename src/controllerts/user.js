const { create, getAll, getById } = require("../services/user");
const bcrypt = require("bcrypt");
const yup = require("yup");

exports.create = async (req, res) => {
  try {
    const schema = yup.object({
      name: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
    });

    const data = await schema.validate(req.body);

    data.password = bcrypt.hashSync(req.body.password, 10);
    const user = await create(data);
    return res.status(200).send(user);
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.get = async (req, res) => {
  try {
    const users = await getAll();
    return res.status(200).send(users);
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.getById = async (req, res) => {
  try {
    const users = await getById(req.params.id);
    return res.status(200).send(users);
  } catch (e) {
    return res.status(400).send(e);
  }
};
