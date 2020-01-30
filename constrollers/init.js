module.exports.init = (req, res) => {
    const date = new Date().getFullYear();
    res.status(200).send({date});
};