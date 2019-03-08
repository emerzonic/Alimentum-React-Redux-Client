

describe(`The test`, () => {
  beforeAll(() => {
    console.log("Starting next test beforeAll")
  })
  beforeEach(() => {
    console.log("Starting next test beforeEach")
  })
  afterEach(() => {
    console.log("Starting next test afterEach")
  })
  afterAll(() => {
    console.log("Starting next test afterAll")
  })
  it('renders without crashing', () => {
    expect(2 + 2).toEqual(4);
  });

  // it('should  test async 1', (done) => {
  //   setTimeout(done, 100);
  //   // expect(3*4).toEqual(7);
  // });
  // it('should  test async 2', () => {
  //   return new Promise(resolve => setTimeout(resolve, 100));
  // });

  // it.skip('should  test async 3', 
  // async () => await delay(100)
  // );
});