const BooksService = require('./books.service');

// books for tests
const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
  {
    _id: 2,
    name: 'El Señor de Los Anillos',
  },
  {
    _id: 3,
    name: 'Hábitos Atómicos',
  },
];

// para esto es una prueba espía o caja blanca
const mockGetAll = jest.fn();

// mock de mongolib
const MongoLibStub = {
  // getAll: () => [...fakeBooks],
  getAll: mockGetAll,
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // Evita que se pase info de test a test
  });

  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // arrange => prueba caja blanca
      mockGetAll.mockResolvedValue([{
        _id: 4,
        name: 'HP 2',
      }]);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books[0].name).toEqual('HP 2');
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
