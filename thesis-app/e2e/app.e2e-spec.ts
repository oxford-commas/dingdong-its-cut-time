import { ThesisAppPage } from './app.po';

describe('thesis-app App', () => {
  let page: ThesisAppPage;

  beforeEach(() => {
    page = new ThesisAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
