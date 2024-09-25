import CardapioPage from '../../support/pageObjects/CardapioPage';

describe('Validações de pedido e carrinho de compras', () => {
    const cardapioPage = new CardapioPage(); 

    beforeEach(() => {
      cy.viewport(1920, 1080);
       cardapioPage.visit();
   });

   it('Deve acessar o cardápio e realizar um pedido', () => {
    cardapioPage.clicar_no_item('Picolé Kibon Fruttare Uva 59g');
    cardapioPage.botao_adicionar();
    cardapioPage.avance_para_carrinho();
    cardapioPage.botao_avancar();
    cardapioPage.preencher_contato('51982462125');
    //cardapioPage.preencher_nome('Michele Cardoso');
    cardapioPage.botao_avancar();
    cardapioPage.botao_confirmar();
    cardapioPage.buscar_local();
    cardapioPage.dinheiro();
    cardapioPage.nega_troco();
    //cardapioPage.termo_politica();
    cardapioPage.botao_fazer_pedido();
    cardapioPage.mensagem_sucesso(); 
  });

   it('Validar que o item foi adicionado ao carrinho', () => {
   cardapioPage.visit();
   cardapioPage.clicar_no_item('Picolé Kibon Fruttare Uva 59g');
   cardapioPage.botao_adicionar();   
   cardapioPage.continuar_comprando();
   cardapioPage.acessar_carrinho();
   cardapioPage.verifica_item_carrinho();
  });

  it('Validar que o item foi adicionado ao carrinho', () => {
    cardapioPage.visit();
    cardapioPage.clicar_no_item('Picolé Kibon Fruttare Uva 59g');
    cardapioPage.botao_adicionar();   
    cardapioPage.continuar_comprando();
    cardapioPage.acessar_carrinho();
    cardapioPage.excluir_item();
    cardapioPage.verifica_exclusao();
   });

});


