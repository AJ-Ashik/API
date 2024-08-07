// pages/api/api2.js
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'api', '100.m3u8');
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    res.setHeader('Content-Type', 'application/vnd.apple.mpegurl');
    res.status(200).send(fileContent);
  } catch (error) {
    res.status(500).json({ error: 'File not found' });
  }
}
