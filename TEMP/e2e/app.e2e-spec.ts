import { SSTACMSPage } from './app.po';

describe('sstacms App', () => {
  let page: SSTACMSPage;

  beforeEach(() => {
    page = new SSTACMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
