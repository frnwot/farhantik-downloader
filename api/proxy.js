import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing TikTok URL' });
  }

  try {
    const apiUrl = `https://tikwm.com/api/?url=${encodeURIComponent(url)}`;
    const apiResponse = await fetch(apiUrl);
    const data = await apiResponse.json();

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
