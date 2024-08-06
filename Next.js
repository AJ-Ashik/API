export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust to your needs
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Your API logic here
}
