import { fastify } from 'fastify';
import { prisma } from './lib/prisma';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';
import { createTranscriptionRoute } from './routes/create-transcription';

const app = fastify()

// todo register obriga que a rota seja async
app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running')
})