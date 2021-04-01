module.exports = async (req, resp) => {
  	const { id } = req.params
	//const user = find(id)
	resp.send({message: `user com id ${id}`})
};
