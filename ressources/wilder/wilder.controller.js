const express = require("express");

const Wilder = require("./wilder.model");

const router = express.Router();
router.use(express.json());

// REST API
// const routes = ['GET /api/wilders', 'GET /api/wilders/:id', 'POST /api/wilders', 'UPDATE /api/wilders/:id', 'DELETE /api/wilders/:id' ]

router
  .route("") // /api/wilders
  .get(async (req, res) => {
    try {
      const wilders = await Wilder.find({}).exec();
      res.status(200).send(wilders);
    } catch ({ message: err }) {
      res.status(500).send({ message: "Server could not be joined", err });
    }
  })
  .post(async (req, res) => {
    console.log("body = ", req.body);

    if (!req.body.skills) {
      return res.send(400).send({ error: "Bad request", success: false });
    }

    const wilder = await Wilder.create(req.body);

    res.status(201).send(wilder);
  });

router
  .route("/:id") // /api/wilders/:id
  .get((req, res) => {})
  .put(async (req, res) => {
    const id = req.params.id;

    // 1 does the user exist ?

    // 2 do we have a valid payload ?
    try {
      const updated = await Wilder.findByIdAndUpdate(id, req.body, {
        new: true,
      }).exec();
      res.send(updated);
    } catch (err) {
      res.status(500).send({ errror: true, message: err.message });
    }
  })
  .delete((req, res) => {});

module.exports = router;
