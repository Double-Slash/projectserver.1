exports.get = (req, res) => {

    let video = req.query.video;

    res.send(video);

}

