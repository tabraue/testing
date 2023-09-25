const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

// books for tests


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
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
    test('should return a list of books', async () => {
      // arrange => prueba caja blanca
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
