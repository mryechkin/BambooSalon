import { BambooSalonPage } from './app.po';

describe('bamboo-salon App', () => {
  let page: BambooSalonPage;

  beforeEach(() => {
    page = new BambooSalonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
