import { AngularWebbPage } from './app.po';

describe('angular-webb App', () => {
  let page: AngularWebbPage;

  beforeEach(() => {
    page = new AngularWebbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
