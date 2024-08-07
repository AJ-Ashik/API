import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { filename } = req.query;
  const filePath = path.join(process.cwd(), 'api/files', filename);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    res.status(200).send(fileContent);
  } catch (error) {
    res.status(404).json({ error: 'File not found' });
  }
}
