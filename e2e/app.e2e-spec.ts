import { D3EightqueensPage } from './app.po';

describe('d3-eightqueens App', () => {
  let page: D3EightqueensPage;

  beforeEach(() => {
    page = new D3EightqueensPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
