const { Worker } = require('bullmq');
const { connection } = require('../config/redis');


// Create a worker to process jobs from the "emailQueue"
const emailWorker = new Worker(
    'emailQueue',
     async (job) => {
        try {
            const { email, subject, body } = job.data;
            // Simulate sending an email
            console.log(`📨 Sending email to ${email}`);
            // Here we can integrate with third party email service (e.g., nodemailer, SendGrid, etc.)
            // For example:
            // await sendEmail(email, subject, body);

            // Simulate email delay
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            // Simulate a successful email send
            console.log(`✅ Email sent to ${email} with subject "${subject}"`);
            return { success: true };
        } catch (error) {
            console.error(`❌ Failed to send email to ${job.data.email}:`, error);
            throw error; // Re-throw the error to mark the job as failed
        }
    }, { connection });

// Optional: Logging job events
emailWorker.on('completed', (job) => {
    console.log(`🎉 Job completed with id ${job.id}`);
});

emailWorker.on('failed', (job, err) => {
    console.error(`❌ Job failed with id ${job.id} and error: ${err.message}`);
});