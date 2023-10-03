import { fastify } from 'fastify';
import { prisma } from './lib/prisma';
import { getAllPromptsRoute } from './routes/get-all-prompts';
import { uploadVideoRoute } from './routes/upload-video';

const app = fastify();

// todo register obriga que a rota seja async
app.register(getAllPromptsRoute);
app.register(uploadVideoRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running')
})