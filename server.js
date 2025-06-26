const express = require('express');
const emailQueue = require('./queue/emailQueue');
require('./workers/emailWorker'); // Ensure the worker is started

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


// Endpoint to add a job to the email queue
app.post('/send-email', async (req, res) => {
    const { email, subject, body } = req.body;

    if (!email || !subject || !body) {
        return res.status(400).json({ error: 'Email, subject, and body are required.' });
    }

    try {
        // Add a job to the email queue
        const job = await emailQueue.add('sendEmail', { email, subject, body });
        res.status(200).json({ message: '✅ Email job added to the queue.', jobId: job.id });
    } catch (error) {
        console.error('Error adding job to the queue:', error);
        res.status(500).json({ error: '❌ Failed to add job to the queue.' });
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});