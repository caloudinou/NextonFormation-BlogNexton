import { BlogNextonPage } from './app.po';

describe('blog-nexton App', () => {
  let page: BlogNextonPage;

  beforeEach(() => {
    page = new BlogNextonPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
