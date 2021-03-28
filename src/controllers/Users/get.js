module.exports = async (req, resp) => {
  const { id } = req.params
	//const user = find(id)
	resp.send(`user com id ${id}`)
};
