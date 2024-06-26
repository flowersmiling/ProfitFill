import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
const app = express();
const url = process.env.PUBLIC_API_URL;
const port = process.env.PORT;
const corsOptions = {
    origin: '*',
    Credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
// In-memory array to store jobs
let jobs = [];
// Read job data from the JSON file
async function readJobsFromFile() {
    try {
        const data = await fs.readFile('src/jobs.json', 'utf-8');
        return JSON.parse(data);
    }
    catch (error) {
        console.error('Error reading jobs data:', error.message);
        return []; // Return an empty array if reading fails
    }
}
// Function to write jobs to a JSON file
async function writeJobsToFile(jobsData) {
    try {
        await fs.writeFile('src/jobs.json', JSON.stringify(jobsData, null, 2));
    }
    catch (error) {
        console.error('Error writing jobs file:', error);
    }
}
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Get all jobs
app.get('/jobs', async (req, res) => {
    const allJobs = await readJobsFromFile();
    jobs = allJobs;
    res.json(allJobs);
});
// GET /jobs/:id
app.get('/jobs/:id', async (req, res) => {
    const jobId = req.params.id;
    const job = jobs.find(job => job.id.toString() === jobId);
    if (job) {
        res.json(job);
    }
    else {
        res.status(404).send('Job not found');
    }
});
// POST /jobs
app.post('/jobs', async (req, res) => {
    const newJob = req.body;
    newJob.id = uuidv4();
    jobs.push(newJob);
    await writeJobsToFile(jobs);
    res.status(201).json(newJob);
});
// PUT /jobs/:id
app.put('/jobs/:id', async (req, res) => {
    const jobId = req.params.id;
    const index = jobs.findIndex(job => job.id === jobId);
    if (index !== -1) {
        const updatedJob = { ...jobs[index], ...req.body };
        jobs[index] = updatedJob;
        await writeJobsToFile(jobs);
        res.json(updatedJob);
    }
    else {
        res.status(404).send('Job not found');
    }
});
// DELETE /jobs/:id
app.delete('/jobs/:id', async (req, res) => {
    const jobId = req.params.id;
    const index = jobs.findIndex(job => job.id.toString() === jobId);
    if (index !== -1) {
        jobs.splice(index, 1);
        await writeJobsToFile(jobs);
        res.status(204).send();
    }
    else {
        res.status(404).send('Job not found');
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${url}:${port}`);
});
