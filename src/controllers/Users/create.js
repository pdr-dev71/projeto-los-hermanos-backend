module.exports = async (req, resp) => {
  const body = req.body
  const { email, password } = body;
	resp.json({email, password})
};
