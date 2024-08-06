const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/api/:channelId', (req, res) => {
    const channelId = req.params.channelId;
    const filePath = path.join(__dirname, `${channelId}.m3u8`);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(404).send('File not found');
            return;
        }

        // Send the URL in the m3u8 file as a redirect
        const url = data.trim(); // Assuming the m3u8 file contains only the URL
        res.redirect(url);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
