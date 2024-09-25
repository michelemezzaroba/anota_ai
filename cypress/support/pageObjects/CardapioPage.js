class CardapioPage {
    // Método para acessar a URL da loja
    visit() {
      cy.visit('https://staging-cardapio-digital.anota-ai.com/loja/teste-vaga-qa?f=msa');
      cy.wait(4000);
    }
  
    // Clicar no item pelo nome
    clicar_no_item(item) {
      cy.get('.title').contains(item).click();
    }

    // Clicar no botão "Adicionar"
    botao_adicionar() {
      cy.get('button.button.primary.lg.-data').contains('Adicionar').click();
    }

    // Clicar no botão "Avançar para o carrinho"
    avance_para_carrinho() {
      cy.get('button[data-testid="Avançar para o carrinho"]').click();
    }

    // Clicar no botão "Avançar"
    botao_avancar() {
      cy.wait(4000);
      cy.get('.button').contains('Avançar').click();
    }

    // Preencher o campo de telefone
    preencher_contato(numeroFone) {
      cy.wait(3000);
      cy.get('[raw=""] > [data-testid="field-input"]').type(numeroFone);
    }

    //Preencher o campo Nome completo
    preencher_nome(nome) {
      cy.get(':nth-child(2) > [data-testid="field-input"]').clear().type(nome);
    }

    // Clicar no botão "Confirmar"
    botao_confirmar() {
      cy.get('[data-testid="Confirmar"]').click();
    }

    //Clicar na opção retirar no estabelecimento
    buscar_local() {
      cy.get('[data-testid="take_alone"]').click();
    }

    //Clicar na opção dinheiro
    dinheiro() {
      cy.get('div.payment-type.w-100')
      .find('div.radio-chooser__content__icon.flex.justify-end')
      .find('div[data-testid="checkable"]')
      .eq(0)
      .click();
    }

    //Clicar na opção não precisa de troco
    nega_troco() {
      cy.get('[data-testid="Não preciso de troco"]').click();
    }

    //Clicar no termo de politica de privacidade
    termo_politica() {
      cy.get('.privacy-policy', { timeout: 10000 }) 
      .should('be.visible') 
      .find('.checkable') 
      .should('be.visible')
      .click()
    }

    //Clicar no botão "Fazer pedido"
    botao_fazer_pedido() {
      cy.get('#finalize_order').click();
    }
  
    //Clicar no botão "Continuar comprando"
    continuar_comprando() {
      cy.get('button[data-testid="Continuar comprando"]').click();
    }

    acessar_carrinho() {
      cy.get('div.item')
      .find('span.title')
      .contains('Carrinho')
      .click();
    }

    // Verificar se o item foi adicionado ao carrinho
    verifica_item_carrinho() {
      cy.get('.order-summary-container .chooser')
      .contains('1x Picolé Kibon Fruttare Uva 59g')
      .should('exist');
    }

    //Excluir um item
    excluir_item() {
      cy.get('[data-testid="btn-down"]').click();
      cy.get('[data-testid="Sim"]').click();
    }

    verifica_exclusao() {
      cy.get('.alert-message') 
      .should('be.visible')
      .and('contain', 'Item removido com sucesso');
    }

    mensagem_sucesso() {
      cy.get('.feedback', { timeout: 10000 }) 
      .should('be.visible')
      .within(() => {
          cy.get('h2').should('include.text', 'Pedido realizado com sucesso!');
      });
    }
  }
  
  export default CardapioPage;
  