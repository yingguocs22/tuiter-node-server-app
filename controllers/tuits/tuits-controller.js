import * as tuitsDao from './tuits-dao.js'
// import posts from "./tuits.js";
// let tuits = posts;

// from a8
// const createTuit = (req, res) => {
//     const newTuit = req.body;
//     newTuit._id = (new Date()).getTime()+'';
//     newTuit.likes = 0;
//     newTuit.dislikes = 0;
//     newTuit.liked = false;
//     newTuit.username = "NASA";
//     newTuit.handle = "@nasa";
//     newTuit.image = "nasa.png";
//     newTuit.topic = "Space";
//     newTuit.time = "2h";
//     newTuit.replies = 0;
//     newTuit.retuits = 0;
//     tuits.push(newTuit);
//     res.json(newTuit);
// }

// from a9
const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.dislikes = 0;
    newTuit.disliked = false;
    newTuit.username = "NASA";
    newTuit.handle = "@nasa";
    newTuit.image = "nasa.png";
    newTuit.topic = "Space";
    newTuit.time = "2h";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}


// from a8
// const findTuits = (req, res) => {
//     res.json(tuits);
// }

// from a9
const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

// from a8
// const updateTuit = (req, res) => {
//     const tuitdIdToUpdate = req.params.tid;
//     const updates = req.body;
//     const tuitIndex = tuits.findIndex(
//         (t) => t._id === tuitdIdToUpdate)
//     tuits[tuitIndex] =
//         {...tuits[tuitIndex], ...updates};
//     res.sendStatus(200);
// }

// from a9
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitdIdToUpdate,
            updates);
    res.json(status);
}

// from a8
// const deleteTuit = (req, res) => {
//     const tuitdIdToDelete = req.params.tid;
//     tuits = tuits.filter((t) =>
//         t._id !== tuitdIdToDelete);
//     res.sendStatus(200);
// }

// from a9
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitdIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}