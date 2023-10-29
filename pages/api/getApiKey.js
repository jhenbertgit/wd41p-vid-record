export default (req, res) => {
  res.status(200).json({ apiKey: process.env.API_KEY });
};
