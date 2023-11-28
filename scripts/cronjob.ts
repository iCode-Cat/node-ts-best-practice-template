import cron from 'node-cron';

// Schedule a task to run every minute
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
});
