const produtos = [
    {
        nome: "RETAIL - Empreendedor",
        subtitulo: "Sistema de varejo ideal para gestão de pequenos comércios (MEI)",
        descricao: `
            <strong>R$ 55,00 / Mês</strong><br><br>
            <strong>Módulos Incluídos:</strong><br>
            - 1x Acesso a PDV.<br>
            - Delivery.<br>
            - Integração com Pedido Online.<br>
            - Relatórios de Vendas, Produtos, Gerencial, Cancelamentos, Entregas.<br><br>
            <strong>Adicionais:</strong><br>
            Acesso a PDV - Consulte<br>
            Pedido Online - Consulte<br>
            Mensageria - Consulte<br>
            Cashback + Mensageria - Consulte<br>
            Plano de Marketing - Consulte
            `,
        imagem: "img/foto1.jpg"
    },
    {
        nome: "RETAIL - Operacional",
        subtitulo: "Sistema de varejo perfeito para comércios focados em gestão e vendas",
        descricao: `
            <strong>R$ 90,00 / Mês</strong><br><br>
            <strong>Módulos Incluídos:</strong><br>
            - 1x Acesso a PDV Fiscal (NFC-e, CF-e SAT).<br>
            - Delivery.<br>
            - Integração com Pedido Online.<br>
            - Relatórios de Vendas, Produtos, Gerencial, Cancelamentos, Entregas.<br>
            - Relatórios Fiscais de Saídas, Inutilização e Monofásico.<br><br>
            <strong>Adicionais:</strong><br>
            Acesso a PDV Fiscal (NFC-e, CF-e SAT) - Consulte<br>
            Acesso a Nota Fiscal Eletrônica - Consulte<br>
            Acesso a Nota Fiscal de Serviço Eletrônica - Consulte<br>
            Acesso a Totem - Consulte<br>
            Sintegra e EFD Fiscal/Contribuições - Consulte<br>
            Pedido Online - Consulte<br>
            Mensageria - Consulte<br>
            Cashback + Mensageria - Consulte<br>
            Plano de Marketing
            `,
        imagem: "img/foto2.jpg"  // ajuste o caminho conforme sua estrutura
    },
    {
        nome: "RETAIL - Estratégico",
        subtitulo: "Sistema de varejo completo para empresas consolidadas",
        descricao: `
            <strong>R$ 145,00 / Mês</strong><br><br>
            <strong>Módulos Incluídos:</strong><br>
            - 1x Acesso a PDV Fiscal (NFC-e, CF-e SAT).<br>
            - Delivery.<br>
            - Estoque.<br>
            - Financeiro.<br>
            - Fiscal.<br>
            - Integração com Pedido Online.<br>
            - Relatórios de Vendas, Produtos, Gerencial, Cancelamentos, Entregas.<br>
            - Relatórios Fiscais de Saídas, Inutilização e Monofásico.<br>
            - Relatórios Financeiros de Inadimplentes, Capital De Giro, Liquidez, Ponto de Equilíbrio, Conciliações, Previsão de Contratos e Previsão Faturamento.<br>
            - Relatórios de Estoque como Curva ABC, Giro de Estoque, Valorização, Saldo Depósito e Histórico.<br><br>

            <strong>Adicionais:</strong><br>
            Acesso a PDV Fiscal (NFC-e, CF-e SAT) - Consulte<br>
            Acesso a Nota Fiscal Eletrônica - Consulte<br>
            Acesso a Nota Fiscal de Serviço Eletrônica - Consulte<br>
            Acesso a Totem - Consulte<br>
            Sintegra e EFD Fiscal/Contribuições - Consulte<br>
            Acesso a Manifesto Fiscal - Consulte<br>
            Gestão de Contratos - Consulte<br>
            Pedido Online - Consulte<br>
            Mensageria - Consulte<br>
            Cashback + Mensageria - Consulte<br>
            SPED Fiscal - Consulte<br>
            Plano de Marketing - Consulte
        `,
        imagem: "img/foto3.jpg" // substitua pelo nome real da imagem se for diferente
    },
    {
        nome: "FOOD - Empreendedor",
        subtitulo: "Sistema ideal para gestão de pequenos comércios no segmento alimentício (MEI)",
        descricao: `
            <strong>R$ 55,00 / Mês</strong><br><br>
            <strong>Módulos Incluídos:</strong><br>
            - 1x Acesso a PDV.<br>
            - Mesa.<br>
            - Delivery.<br>
            - Ifood.<br><br>

            <strong>Adicionais:</strong><br>
            Lançamento (Garçom) - Consulte<br>
            Acesso a PDV - Consulte<br>
            Pedido Online - Consulte<br>
            Mensageria - Consulte<br>
            Cashback + Mensageria - Consulte<br>
            Plano de Marketing - Consulte
        `,
        imagem: "img/foto4.jpg" // substitua pelo nome real da imagem, se for diferente
    },

    {
        nome: "FOOD - Operacional",
        subtitulo: "Sistema perfeito para comércios focados em gestão e vendas no segmento alimentício",
        descricao: `
            <strong>R$ 90,00 / Mês</strong><br><br>
            <strong>Módulos Incluídos:</strong><br>
            - 1x Acesso a PDV Fiscal (NFC-e, CF-e SAT).<br>
            - Mesa.<br>
            - Delivery.<br>
            - Ifood.<br>
            - Integração com Pedido Online.<br>
            - Relatórios de Vendas, Produtos, Gerencial, Cancelamentos, Entregas.<br>
            - Relatórios Fiscais de Saídas, Inutilização e Monofásico.<br><br>

            <strong>Adicionais:</strong><br>
            Lançamento (Garçom) - Consulte<br>
            Autoatendimento - Consulte<br>
            Acesso a PDV Fiscal (NFC-e, CF-e SAT) - Consulte<br>
            Acesso a Chama Senha - Consulte<br>
            Acesso a Totem - Consulte<br>
            Sintegra e EFD Fiscal/Contribuições - Consulte<br>
            Acesso a KDS - Consulte<br>
            Pedido Online - Consulte<br>
            Mensageria - Consulte<br>
            Cashback + Mensageria - Consulte<br>
            Chama Senha com Divulgação - Consulte<br>
            Plano de Marketing - Consulte
        `,
        imagem: "img/foto5.jpg" // substitua pelo nome correto da imagem, se necessário
    },
    {
        nome: "FOOD - Estratégico",
        subtitulo: "Sistema completo para empresas consolidadas no segmento alimentício",
        descricao: `
            <strong>R$ 145,00 / Mês</strong><br><br>

            <strong>Módulos Incluídos:</strong><br>
            - 2x Acesso a PDV Fiscal (NFC-e, CF-e SAT).<br>
            - Mesa.<br>
            - Delivery.<br>
            - Ifood.<br>
            - Estoque.<br>
            - Financeiro.<br>
            - Fiscal.<br>
            - Integração com Pedido Online.<br>
            - Relatórios de Vendas, Produtos, Gerencial, Cancelamentos, Entregas.<br>
            - Relatórios Fiscais de Saídas, Inutilização e Monofásico.<br>
            - Relatórios Financeiros de Inadimplentes, Capital de Giro, Liquidez, Ponto de Equilíbrio, Conciliações, Previsão de Contratos e Previsão Faturamento.<br>
            - Relatórios de Estoque como Curva ABC, Giro de Estoque, Valorização, Saldo Depósito e Histórico.<br><br>

            <strong>Adicionais:</strong><br>
            Lançamento (Garçom) - Consulte<br>
            Autoatendimento - Consulte<br>
            Acesso a PDV Fiscal (NFC-e, CF-e SAT) - Consulte<br>
            Acesso a Chama Senha - Consulte<br>
            Acesso a Nota Fiscal Eletrônica - Consulte<br>
            Acesso a Nota Fiscal de Serviço Eletrônica - Consulte<br>
            Acesso a Totem - Consulte<br>
            Acesso a Manifesto Fiscal - Consulte<br>
            Sintegra e EFD Fiscal/Contribuições - Consulte<br>
            Acesso a KDS - Consulte<br>
            Pedido Online - Consulte<br>
            Mensageria - Consulte<br>
            Cashback + Mensageria - Consulte<br>
            Chama Senha com Divulgação - Consulte<br>
            Plano de Marketing - Consulte<br>
            SPED Fiscal - Consulte
        `,
        imagem: "img/foto6.jpg" // altere para o nome correto da imagem, se necessário
    }

  // outros produtos...
];
const catalogo = document.getElementById('catalogo');

produtos.forEach(produto => {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <div class="info">
      <h3>${produto.nome}</h3>
      ${produto.subtitulo ? `<h4 class="subtitulo">${produto.subtitulo}</h4>` : ''}
      <p>${produto.descricao}</p>
    </div>
  `;
  catalogo.appendChild(item);
});