module.exports = (req, res) => {
    const { id } = req.params;
    res.send({message: `User with id ${id} has been deleted`})
}