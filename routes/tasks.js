var express = require('express');
var router = express.Router();
const CLIENT = `${process.env.CLIENT_PROTOCOL}://${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`;


const { ObjectId } = require('mongodb');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

/* GET all tasks. */
router.get("/all", function (req, res) {
    dbConnection = req.app.locals.db;
    dbConnection.collection("tasks").find({}).toArray(function (err, listAllTasks) {
        if (err != null) {
            console.log(err);
            res.send({ mensaje: "error: " + err });
        } else {
            // console.log(listAllTasks);

            if (listAllTasks.length > 0) {
                res.send(listAllTasks);
            } else {
                res.send({ message: "No existen tareas a mostrar." });
            }
        }
    });
});

/* GET all tasks from the user. */
router.get("/gettasksuser/:id", function (req, res) {

    let id = new ObjectId(req.params.id);

    dbConnection = req.app.locals.db;
    dbConnection.collection("tasks").find({ "userId": id }).toArray(function (err, userAllTasks) {
        if (err != null) {
            console.log(err);
            res.send({ mensaje: "error: " + err });
        } else {
            if (userAllTasks.length > 0) {
                res.send(userAllTasks);
            } else {
                res.send({ message: "No tienes tareas a mostrar." });
            }
        }
    });
});

/* POST to create a new task for the user. */
router.post("/createnewtask/:name/:id", function (req, res) {

    // console.log(req.params);
    // console.log(req.body);

    let newTaskName = req.body.task;

    let newTaskUser = {
        userId: new ObjectId(req.params.id),
        taskowner: req.params.name,
        taskname: newTaskName,
    };

    dbConnection = req.app.locals.db;
    dbConnection.collection("tasks").insertOne(newTaskUser, function (err) {
        if (err != null) {
            res.send("Ha habido un error: " + err);
        } else {
            res.redirect(`${CLIENT}/modifyTasks`);
        }
    });
});

/* PUT to update a task from the user. */
router.put("/modifyonetask/:taskid", function (req, res) {

    let newTaskName = req.body.newNameTask;
    let idTask = new ObjectId(req.params.taskid);

    dbConnection = req.app.locals.db;
    dbConnection.collection("tasks").updateOne({ "_id": idTask }, { $set: { "taskname": newTaskName } }, function (err) {
        if (err != null) {
            res.send("Ha habido un error: " + err);
        } else {
            res.send({ status: 0 });
        }
    });
});

/* DELETE one task from the user. */
router.delete("/deleteonetask", function (req, res) {

    let idtask = new ObjectId(req.body.task);
    let userId = new ObjectId(req.body.user);

    // console.log(req.body);

    dbConnection = req.app.locals.db;
    dbConnection.collection("tasks").deleteOne({ "_id": idtask }, function (err, datosUser) {
        if (err != null) {
            console.log(err);
            res.send({ message: "error: " + err });
        } else {
            dbConnection.collection("tasks").find({ "userId": userId }).toArray(function (err, newAllTasks) {
                if (err != null) {
                    console.log(err);
                    res.send({ message: "error: " + err });
                } else {
                    res.send(newAllTasks);
                }
            });
        }
    });
});

module.exports = router;