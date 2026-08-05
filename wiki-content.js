// ============================================================
//  TRDR WIKI — ARQUIVO DE CONTEÚDO
//
//  Como adicionar um novo artigo:
//  1. Encontre a categoria correta (ou crie uma nova)
//  2. Copie um bloco { } do array "articles"
//  3. Preencha os campos em PT, EN e ES
//  4. Salve e suba no GitHub
//
//  Formatação do conteúdo (HTML simples):
//  <h2>Título de seção</h2>
//  <p>Parágrafo de texto</p>
//  <ul><li>Item de lista</li></ul>
//  <div class="info-box"><strong>Dica:</strong> texto</div>
//  <table class="spec-table">...</table>
//  <img class="article-img" src="url-da-imagem" alt="descrição" />
// ============================================================

const WIKI_CATEGORIES = [

  // ─────────────────────────────────────────
  //  MERCADO FUTURO
  // ─────────────────────────────────────────
  {
    id: 'mercado-futuro',
    icon: '📈',
    nome: { pt: 'Mercado Futuro', en: 'Futures Market', es: 'Mercado de Futuros' },
    articles: [
      {
        id: 'wdo-contrato-futuro',
        titulo: {
          pt: 'WDO — Contrato Futuro de Dólar',
          en: 'WDO — Dollar Futures Contract',
          es: 'WDO — Contrato Futuro de Dólar'
        },
        atualizado: 'Ago 2026',
        tags: ['WDO', 'Mini Dólar', 'B3', 'Dólar', 'Contrato Futuro', 'Daytrade'],
        conteudo: {
          pt: `
            <h2>O que é o WDO?</h2>
            <p>O <strong>WDO</strong> (Mini Contrato Futuro de Dólar) é um dos instrumentos mais negociados na B3 — a bolsa de valores brasileira. Ele permite que investidores se exponham à variação do dólar americano frente ao real brasileiro <em>sem precisar comprar dólares de verdade</em>.</p>

            <div class="info-box">
              <strong>Resumo:</strong> O WDO é uma versão menor do contrato cheio de dólar (DOL), criado para facilitar o acesso de pessoas físicas ao mercado futuro de câmbio.
            </div>

            <h2>Especificações do Contrato</h2>
            <table class="spec-table">
              <tr><th>Especificação</th><th>Valor</th></tr>
              <tr><td>Código</td><td>WDO</td></tr>
              <tr><td>Ativo subjacente</td><td>Taxa de câmbio USD/BRL</td></tr>
              <tr><td>Tamanho do contrato</td><td>USD 10.000</td></tr>
              <tr><td>Cotação</td><td>Reais por USD 1.000</td></tr>
              <tr><td>Variação mínima (tick)</td><td>R$ 0,50 por USD 1.000 = R$ 5,00 por contrato</td></tr>
              <tr><td>Vencimento</td><td>Primeiro dia útil do mês de vencimento</td></tr>
              <tr><td>Liquidação</td><td>Financeira (sem entrega física)</td></tr>
              <tr><td>Margem mínima</td><td>Varia conforme a corretora (~R$ 100–300 por contrato)</td></tr>
            </table>

            <h2>Como funciona o tick?</h2>
            <p>O <strong>tick</strong> é a variação mínima de preço do contrato. No WDO, cada tick vale <strong>R$ 5,00</strong> por contrato.</p>
            <p>Isso significa que se você está comprado em 1 contrato e o dólar sobe 1 tick (R$ 0,50 por USD 1.000), você ganha R$ 5,00. Se cair 1 tick, perde R$ 5,00.</p>

            <div class="info-box">
              <strong>Exemplo:</strong> Você compra 1 WDO a 5.100,00. O dólar sobe para 5.110,00 (20 ticks × R$ 5,00 = <strong>R$ 100,00 de lucro</strong>).
            </div>

            <h2>Horários de Negociação</h2>
            <table class="spec-table">
              <tr><th>Sessão</th><th>Horário (Brasília)</th></tr>
              <tr><td>Pré-abertura</td><td>08h45 – 09h00</td></tr>
              <tr><td>Negociação</td><td>09h00 – 17h55</td></tr>
              <tr><td>Após horário (after)</td><td>18h00 – 21h55</td></tr>
            </table>

            <h2>Quem negocia o WDO?</h2>
            <p>O mercado futuro de dólar é movimentado por três perfis principais:</p>
            <ul>
              <li><strong>Exportadores e importadores</strong> — usam o mercado futuro para travar o câmbio e se proteger de oscilações.</li>
              <li><strong>Institucionais</strong> — bancos e fundos que fazem hedge de suas posições em dólar.</li>
              <li><strong>Especuladores (traders)</strong> — operam a variação do dólar em busca de lucro no curto prazo.</li>
            </ul>

            <h2>Por que o WDO é tão operado?</h2>
            <p>O mini dólar é um dos contratos favoritos dos daytraders brasileiros por algumas razões:</p>
            <ul>
              <li><strong>Alta liquidez</strong> — milhares de contratos negociados por minuto, sem dificuldade de entrada e saída.</li>
              <li><strong>Margem acessível</strong> — é possível operar com pouco capital inicial.</li>
              <li><strong>Volatilidade</strong> — o dólar se move bastante, especialmente em dias de notícias econômicas relevantes.</li>
              <li><strong>Transparência</strong> — o preço é público e reflete o mercado interbancário em tempo real.</li>
            </ul>
          `,
          en: `
            <h2>What is WDO?</h2>
            <p>The <strong>WDO</strong> (Mini Dollar Futures Contract) is one of the most traded instruments on B3 — the Brazilian stock exchange. It allows investors to get exposure to the variation of the US dollar against the Brazilian real <em>without having to buy actual dollars</em>.</p>

            <div class="info-box">
              <strong>Summary:</strong> The WDO is a smaller version of the full dollar contract (DOL), created to facilitate individual investor access to the foreign exchange futures market.
            </div>

            <h2>Contract Specifications</h2>
            <table class="spec-table">
              <tr><th>Specification</th><th>Value</th></tr>
              <tr><td>Code</td><td>WDO</td></tr>
              <tr><td>Underlying asset</td><td>USD/BRL exchange rate</td></tr>
              <tr><td>Contract size</td><td>USD 10,000</td></tr>
              <tr><td>Quote</td><td>BRL per USD 1,000</td></tr>
              <tr><td>Minimum variation (tick)</td><td>R$ 0.50 per USD 1,000 = R$ 5.00 per contract</td></tr>
              <tr><td>Expiration</td><td>First business day of the expiration month</td></tr>
              <tr><td>Settlement</td><td>Financial (no physical delivery)</td></tr>
              <tr><td>Minimum margin</td><td>Varies by broker (~R$ 100–300 per contract)</td></tr>
            </table>

            <h2>How does the tick work?</h2>
            <p>The <strong>tick</strong> is the minimum price variation of the contract. For WDO, each tick is worth <strong>R$ 5.00</strong> per contract.</p>
            <p>This means that if you are long 1 contract and the dollar rises 1 tick (R$ 0.50 per USD 1,000), you gain R$ 5.00. If it falls 1 tick, you lose R$ 5.00.</p>

            <div class="info-box">
              <strong>Example:</strong> You buy 1 WDO at 5,100.00. The dollar rises to 5,110.00 (20 ticks × R$ 5.00 = <strong>R$ 100.00 profit</strong>).
            </div>

            <h2>Trading Hours</h2>
            <table class="spec-table">
              <tr><th>Session</th><th>Time (Brasília)</th></tr>
              <tr><td>Pre-opening</td><td>08:45 – 09:00</td></tr>
              <tr><td>Trading</td><td>09:00 – 17:55</td></tr>
              <tr><td>After hours</td><td>18:00 – 21:55</td></tr>
            </table>

            <h2>Who trades WDO?</h2>
            <p>The dollar futures market is driven by three main profiles:</p>
            <ul>
              <li><strong>Exporters and importers</strong> — use the futures market to lock in the exchange rate and protect against fluctuations.</li>
              <li><strong>Institutions</strong> — banks and funds hedging their dollar positions.</li>
              <li><strong>Speculators (traders)</strong> — trade dollar variation seeking short-term profit.</li>
            </ul>
          `,
          es: `
            <h2>¿Qué es el WDO?</h2>
            <p>El <strong>WDO</strong> (Mini Contrato Futuro de Dólar) es uno de los instrumentos más negociados en B3 — la bolsa de valores brasileña. Permite a los inversores exponerse a la variación del dólar estadounidense frente al real brasileño <em>sin necesidad de comprar dólares reales</em>.</p>

            <div class="info-box">
              <strong>Resumen:</strong> El WDO es una versión más pequeña del contrato completo de dólar (DOL), creado para facilitar el acceso de personas físicas al mercado futuro de divisas.
            </div>

            <h2>Especificaciones del Contrato</h2>
            <table class="spec-table">
              <tr><th>Especificación</th><th>Valor</th></tr>
              <tr><td>Código</td><td>WDO</td></tr>
              <tr><td>Activo subyacente</td><td>Tipo de cambio USD/BRL</td></tr>
              <tr><td>Tamaño del contrato</td><td>USD 10.000</td></tr>
              <tr><td>Cotización</td><td>Reales por USD 1.000</td></tr>
              <tr><td>Variación mínima (tick)</td><td>R$ 0,50 por USD 1.000 = R$ 5,00 por contrato</td></tr>
              <tr><td>Vencimiento</td><td>Primer día hábil del mes de vencimiento</td></tr>
              <tr><td>Liquidación</td><td>Financiera (sin entrega física)</td></tr>
            </table>
          `
        }
      }
    ]
  },

  // ─────────────────────────────────────────
  //  RENDA VARIÁVEL
  // ─────────────────────────────────────────
  {
    id: 'renda-variavel',
    icon: '📊',
    nome: { pt: 'Renda Variável', en: 'Variable Income', es: 'Renta Variable' },
    articles: [
      {
        id: 'o-que-e-renda-variavel',
        titulo: {
          pt: 'O que é Renda Variável?',
          en: 'What is Variable Income?',
          es: '¿Qué es la Renta Variable?'
        },
        atualizado: 'Ago 2026',
        tags: ['Renda Variável', 'Ações', 'Bolsa', 'Investimentos'],
        conteudo: {
          pt: `
            <h2>Definição</h2>
            <p>Renda variável é uma categoria de investimento em que os retornos <strong>não são previsíveis ou garantidos</strong>. O valor do ativo pode subir ou cair dependendo de fatores de mercado, desempenho da empresa, cenário econômico e outros elementos.</p>

            <div class="info-box">
              <strong>Diferença principal:</strong> Na renda fixa você sabe quanto vai receber. Na renda variável, o retorno depende do mercado.
            </div>

            <h2>Principais tipos</h2>
            <ul>
              <li><strong>Ações</strong> — participação no capital de empresas listadas em bolsa.</li>
              <li><strong>ETFs</strong> — fundos que replicam índices como o IBOV ou S&P500.</li>
              <li><strong>FIIs</strong> — fundos imobiliários negociados em bolsa.</li>
              <li><strong>Contratos futuros</strong> — WDO, WIN, milho, café, boi gordo.</li>
              <li><strong>Criptomoedas</strong> — Bitcoin, Ethereum e outros ativos digitais.</li>
              <li><strong>Opções</strong> — contratos que dão o direito de comprar ou vender um ativo.</li>
            </ul>

            <h2>Risco e retorno</h2>
            <p>A renda variável costuma oferecer <em>maior potencial de retorno</em> no longo prazo, mas também <em>maior risco</em> de perda. Por isso, é fundamental entender o que se está comprando antes de investir.</p>
          `,
          en: `
            <h2>Definition</h2>
            <p>Variable income is a category of investment where returns are <strong>not predictable or guaranteed</strong>. The value of the asset can rise or fall depending on market factors, company performance, economic conditions and other elements.</p>

            <div class="info-box">
              <strong>Main difference:</strong> In fixed income you know what you'll receive. In variable income, the return depends on the market.
            </div>

            <h2>Main types</h2>
            <ul>
              <li><strong>Stocks</strong> — ownership share in listed companies.</li>
              <li><strong>ETFs</strong> — funds that replicate indices like IBOV or S&P500.</li>
              <li><strong>REITs (FIIs)</strong> — real estate funds traded on the exchange.</li>
              <li><strong>Futures contracts</strong> — WDO, WIN, corn, coffee, cattle.</li>
              <li><strong>Cryptocurrencies</strong> — Bitcoin, Ethereum and other digital assets.</li>
              <li><strong>Options</strong> — contracts giving the right to buy or sell an asset.</li>
            </ul>
          `,
          es: `
            <h2>Definición</h2>
            <p>La renta variable es una categoría de inversión en la que los rendimientos <strong>no son predecibles ni garantizados</strong>. El valor del activo puede subir o bajar dependiendo de factores de mercado, desempeño de la empresa, escenario económico y otros elementos.</p>

            <div class="info-box">
              <strong>Diferencia principal:</strong> En renta fija sabes cuánto recibirás. En renta variable, el retorno depende del mercado.
            </div>
          `
        }
      }
    ]
  },

  // ─────────────────────────────────────────
  //  RENDA FIXA
  // ─────────────────────────────────────────
  {
    id: 'renda-fixa',
    icon: '🏦',
    nome: { pt: 'Renda Fixa', en: 'Fixed Income', es: 'Renta Fija' },
    articles: [
      {
        id: 'o-que-e-renda-fixa',
        titulo: {
          pt: 'O que é Renda Fixa?',
          en: 'What is Fixed Income?',
          es: '¿Qué es la Renta Fija?'
        },
        atualizado: 'Ago 2026',
        tags: ['Renda Fixa', 'CDB', 'Tesouro Direto', 'LCI', 'LCA'],
        conteudo: {
          pt: `
            <h2>Definição</h2>
            <p>Renda fixa é uma categoria de investimento em que as condições de remuneração são <strong>definidas no momento da aplicação</strong>. Você sabe de antemão qual será o retorno — seja uma taxa prefixada, seja um indexador como o CDI ou IPCA.</p>

            <h2>Principais tipos</h2>
            <ul>
              <li><strong>Tesouro Direto</strong> — títulos públicos emitidos pelo governo federal.</li>
              <li><strong>CDB</strong> — Certificado de Depósito Bancário, emitido por bancos.</li>
              <li><strong>LCI / LCA</strong> — isentos de IR para pessoa física.</li>
              <li><strong>Debêntures</strong> — títulos de dívida de empresas privadas.</li>
              <li><strong>CRI / CRA</strong> — ligados ao mercado imobiliário e do agronegócio.</li>
            </ul>

            <div class="info-box">
              <strong>Atenção:</strong> "Renda fixa" não significa risco zero. O emissor pode dar calote. Por isso, verifique sempre a classificação de risco e o limite do FGC.
            </div>
          `,
          en: `
            <h2>Definition</h2>
            <p>Fixed income is a category of investment in which the remuneration conditions are <strong>defined at the time of application</strong>. You know in advance what the return will be — whether a pre-fixed rate or an indexer like CDI or IPCA.</p>

            <h2>Main types</h2>
            <ul>
              <li><strong>Government bonds (Tesouro Direto)</strong> — public securities issued by the federal government.</li>
              <li><strong>CDB</strong> — Bank Deposit Certificate, issued by banks.</li>
              <li><strong>LCI / LCA</strong> — income tax exempt for individuals.</li>
              <li><strong>Debentures</strong> — debt securities from private companies.</li>
            </ul>
          `,
          es: `
            <h2>Definición</h2>
            <p>La renta fija es una categoría de inversión en la que las condiciones de remuneración se <strong>definen en el momento de la aplicación</strong>. Sabes de antemano cuál será el retorno.</p>
          `
        }
      }
    ]
  },

  // ─────────────────────────────────────────
  //  ANÁLISE TÉCNICA
  // ─────────────────────────────────────────
  {
    id: 'analise-tecnica',
    icon: '🔍',
    nome: { pt: 'Análise Técnica', en: 'Technical Analysis', es: 'Análisis Técnico' },
    articles: []
  },

  // ─────────────────────────────────────────
  //  CRIPTOMOEDAS
  // ─────────────────────────────────────────
  {
    id: 'cripto',
    icon: '₿',
    nome: { pt: 'Criptomoedas', en: 'Cryptocurrencies', es: 'Criptomonedas' },
    articles: []
  },

  // ─────────────────────────────────────────
  //  GLOSSÁRIO
  // ─────────────────────────────────────────
  {
    id: 'glossario',
    icon: '📖',
    nome: { pt: 'Glossário', en: 'Glossary', es: 'Glosario' },
    articles: []
  }

];
