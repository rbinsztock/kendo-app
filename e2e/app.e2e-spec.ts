import { KendoAppPage } from './app.po';

describe('kendo-app App', () => {
  let page: KendoAppPage;

  beforeEach(() => {
    page = new KendoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
