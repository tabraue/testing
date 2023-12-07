const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParses: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase(); // eliminar db para hacer nuevas comprobaciones
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a books list', async () => {
      const seedData = await database.collection('books').insertMany([
        {
          name: 'book1',
          year: 2000,
          author: 'Test Author',
        },
        {
          name: 'book1',
          year: 2000,
          author: 'Test Author',
        },
      ]);
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
