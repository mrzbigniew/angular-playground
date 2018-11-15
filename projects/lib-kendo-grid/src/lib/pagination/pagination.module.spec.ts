import { MyPaginationModule } from './pagination.module';

describe('PaginationModule', () => {
  let paginationModule: MyPaginationModule;

  beforeEach(() => {
    paginationModule = new MyPaginationModule();
  });

  it('should create an instance', () => {
    expect(paginationModule).toBeTruthy();
  });
});
