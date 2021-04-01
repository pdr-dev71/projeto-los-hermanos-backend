module.exports = async (req, res) => {
    const { id } = req.params;
    const { body: data } = req;
    res.send({message: `User with id ${id} has been updated to ${JSON.stringify(data, null, 4)}`})
}