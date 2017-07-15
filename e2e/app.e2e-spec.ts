import { CalculadoraCriollaPage } from './app.po';

describe('calculadora-criolla App', () => {
  let page: CalculadoraCriollaPage;

  beforeEach(() => {
    page = new CalculadoraCriollaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
