import move from './move';

describe('move', () => {
  it('verilen kitabı başka bir rafa taşır', () => {
    const list = [
      {
        id: '1',
        name: 'Raf 1',
        books: [
          { id: '2', name: 'Kitap 1' },
          { id: '3', name: 'Kitap 2' },
          { id: '4', name: 'Kitap 3' },
          { id: '5', name: 'Kitap 4' },
        ],
      },
      {
        id: '6',
        name: 'Raf 2',
        books: [{ id: '7', name: 'Kitap 5' }],
      },
    ];

    const result = [
      {
        id: '1',
        name: 'Raf 1',
        books: [
          { id: '2', name: 'Kitap 1' },
          { id: '3', name: 'Kitap 2' },
          { id: '5', name: 'Kitap 4' },
        ],
      },
      {
        id: '6',
        name: 'Raf 2',
        books: [
          { id: '7', name: 'Kitap 5' },
          { id: '4', name: 'Kitap 3' },
        ],
      },
    ];

    expect(move(list, '4', '6')).toStrictEqual(result);
  });

  it('verilen kaynak bir kitap değilse hata verir', () => {
    const list = [
      {
        id: '1',
        name: 'Raf 1',
        books: [{ id: '2', name: 'Kitap 1' }],
      },
      { id: '3', name: 'Raf 2', books: [] },
    ];

    expect(() => move(list, '3', '1')).toThrow('Bir rafı taşıyamazsınız');
  });

  it('verilen hedef raf değilse hata verir', () => {
    const list = [
      {
        id: '1',
        name: 'Raf 1',
        books: [{ id: '2', name: 'Kitap 1' }],
      },
      { id: '3', name: 'Raf 2', books: [{ id: '4', name: 'Kitap 2' }] },
    ];

    expect(() => move(list, '2', '4')).toThrow('Hedef olarak bir kitap belirtemezsiniz');
  });
});
