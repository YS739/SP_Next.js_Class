const handler = (req, res) => {
  const { query } = req;
  const { id } = query;
  res.status(200).json({ name: "test", id });
};

export default handler;
