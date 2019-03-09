import { serve, setup } from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server Project-pet. You can find out more about Swagger at [http://swagger.io](http://swagger.io)',
      version: '1.0.0',
      title: 'Project-pet',
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
    host: 'localhost:3000',
    basePath: '/v1',
  },
  apis: ['endpoints.js'],
};

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use('/api-docs', serve, setup(specs));
};
