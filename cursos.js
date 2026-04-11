// ============================================================
//  TRDR EDUCATION — ARQUIVO DE CONTEÚDO
//  
//  Como adicionar uma nova aula:
//  1. Copie um bloco { } existente
//  2. Cole dentro do array "aulas" do curso correto
//  3. Preencha os campos
//  4. Salve e suba no GitHub
//
//  Status disponíveis: "ativo" | "em_breve"
//  Se não tiver versão EN, repita o mesmo ID do PT
// ============================================================

const TRDR_CURSOS = [

  // ─────────────────────────────────────────
  //  CURSO 1 — BÁSICO
  // ─────────────────────────────────────────
  {
    id: 'basico',
    nivel: { pt: 'Básico', en: 'Basic', es: 'Básico' },
    titulo: { pt: 'Curso Básico', en: 'Basic Course', es: 'Curso Básico' },
    descricao: {
      pt: 'Comece por aqui para entender os pontos-chave do mercado financeiro e iniciar suas operações com o pé direito.',
      en: 'Start here to understand the key points of the financial market and begin your trading journey on the right foot.',
      es: 'Empieza aquí para entender los puntos clave del mercado financiero e iniciar tus operaciones con el pie derecho.'
    },
    badge_class: 'lvl-i',
    imagem: 'Basico.jpg',
    aulas: [
      {
        numero: '1.1',
        titulo: { pt: 'Mercado Futuro: Onde o Daytrade Ganha Forma', en: 'Futures Market: Where Daytrading Takes Shape', es: 'Mercado de Futuros: Donde el Daytrade Toma Forma' },
        descricao: { pt: 'Entenda como funciona o mercado futuro — o ambiente onde o daytrade acontece de verdade. Contratos, liquidez, horários e como os grandes players movimentam o mercado.', en: 'Understand how the futures market works — the environment where daytrading actually happens. Contracts, liquidity, hours and how major players move the market.', es: 'Entiende cómo funciona el mercado de futuros. Contratos, liquidez, horarios y cómo los grandes jugadores mueven el mercado.' },
        video_pt: 'bzrMIYiUsZ8',
        video_en: 'Ke2I238xLuI',
        status: 'ativo',
        destaque_hero: true
      },
      {
        numero: '1.2',
        titulo: { pt: 'Livro de Ofertas — O coração do mercado', en: 'Order Book — The Heart of the Market', es: 'Libro de Órdenes — El corazón del mercado' },
        descricao: { pt: 'Entenda como os mercados financeiros funcionam na prática — da formação de preços à dinâmica entre compradores e vendedores, liquidez e microestrutura de mercado.', en: 'Understand how financial markets work in practice — from price formation to the dynamics between buyers and sellers, liquidity and market microstructure.', es: 'Entiende cómo funcionan los mercados financieros en la práctica — desde la formación de precios hasta la dinámica entre compradores y vendedores.' },
        video_pt: 'hM62wuvXH9g',
        video_en: 'l4sZOE_L3J8',
        status: 'ativo'
      },
      {
        numero: '1.3',
        titulo: { pt: 'Ondas de Elliott com IA', en: 'Elliott Waves with AI', es: 'Ondas de Elliott con IA' },
        descricao: { pt: 'Entenda como identificar e operar utilizando a teoria das Ondas de Elliott — um dos métodos mais sofisticados de análise técnica, aplicado com inteligência artificial.', en: 'Learn how to identify and trade using Elliott Wave theory — one of the most sophisticated technical analysis methods, applied with artificial intelligence.', es: 'Aprende a identificar y operar usando la teoría de las Ondas de Elliott con inteligencia artificial.' },
        video_pt: 'bzrMIYiUsZ8', // Substitua pelo ID correto quando disponível
        video_en: 'bzrMIYiUsZ8',
        status: 'ativo'
      },
      {
        numero: '1.4',
        titulo: { pt: 'Preço vs Indicador', en: 'Price vs Indicator', es: 'Precio vs Indicador' },
        descricao: { pt: 'Indicadores são derivativos do preço.', en: 'Indicators are price derivatives.', es: 'Los indicadores son derivados del precio.' },
        video_pt: '',
        video_en: '',
        status: 'em_breve'
      },
      {
        numero: '1.5',
        titulo: { pt: 'Estrutura de Mercado', en: 'Market Structure', es: 'Estructura de Mercado' },
        descricao: { pt: 'Topos, fundos, tendência e lateralização.', en: 'Tops, bottoms, trends and sideways.', es: 'Techos, suelos, tendencia y lateralización.' },
        video_pt: '',
        video_en: '',
        status: 'em_breve'
      },
      {
        numero: '1.6',
        titulo: { pt: 'Suporte e Resistência', en: 'Support and Resistance', es: 'Soporte y Resistencia' },
        descricao: { pt: 'Zonas, não linhas, reação de preço.', en: 'Zones, not lines, price reaction.', es: 'Zonas, no líneas, reacción del precio.' },
        video_pt: '',
        video_en: '',
        status: 'em_breve'
      },
      {
        numero: '1.7',
        titulo: { pt: 'Candlestick Útil', en: 'Useful Candlestick', es: 'Candlestick Útil' },
        descricao: { pt: 'Rejeição, continuidade e força.', en: 'Rejection, continuity and strength.', es: 'Rechazo, continuidad y fuerza.' },
        video_pt: '',
        video_en: '',
        status: 'em_breve'
      },
      {
        numero: '1.8',
        titulo: { pt: 'Timeframes', en: 'Timeframes', es: 'Temporalidades' },
        descricao: { pt: 'Macro (direção) vs micro (entrada).', en: 'Macro (direction) vs micro (entry).', es: 'Macro (dirección) vs micro (entrada).' },
        video_pt: '',
        video_en: '',
        status: 'em_breve'
      },
      {
        numero: '1.9',
        titulo: { pt: 'O que é Setup', en: 'What is a Setup', es: 'Qué es un Setup' },
        descricao: { pt: 'Padrão repetível com vantagem.', en: 'Repeatable pattern with edge.', es: 'Patrón repetible con ventaja.' },
        video_pt: '',
        video_en: '',
        status: 'em_breve'
      },
      {
        numero: '1.10',
        titulo: { pt: 'Regra nº1', en: 'Rule #1', es: 'Regla nº1' },
        descricao: { pt: 'Preservação de capital.', en: 'Capital preservation.', es: 'Preservación de capital.' },
        video_pt: '',
        video_en: '',
        status: 'em_breve'
      },
      {
        numero: '1.11',
        titulo: { pt: 'Horários de Mercado', en: 'Market Hours', es: 'Horarios del Mercado' },
        descricao: { pt: 'Abertura, almoço e fechamento.', en: 'Opening, lunch and closing.', es: 'Apertura, almuerzo y cierre.' },
        video_pt: '',
        video_en: '',
        status: 'em_breve'
      }
    ]
  },

  // ─────────────────────────────────────────
  //  CURSO 2 — INTERMEDIÁRIO
  // ─────────────────────────────────────────
  {
    id: 'intermediario',
    nivel: { pt: 'Intermediário', en: 'Intermediate', es: 'Intermedio' },
    titulo: { pt: 'Curso Intermediário', en: 'Intermediate Course', es: 'Curso Intermedio' },
    descricao: {
      pt: 'Refine sua leitura de mercado com dados, técnicas de leitura e estratégias.',
      en: 'Refine your market reading with data, reading techniques and strategies.',
      es: 'Refina tu lectura del mercado con datos, técnicas de análisis y estrategias.'
    },
    badge_class: 'lvl-m',
    imagem: 'Intermediario.jpg',
    aulas: [
      { numero: '2.1', titulo: { pt: 'Setup Principal', en: 'Main Setup', es: 'Setup Principal' }, descricao: { pt: 'Rompimento + pullback.', en: 'Breakout + pullback.', es: 'Ruptura + pullback.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.2', titulo: { pt: 'Entrada', en: 'Entry', es: 'Entrada' }, descricao: { pt: 'Critérios objetivos (zona + reação).', en: 'Objective criteria (zone + reaction).', es: 'Criterios objetivos (zona + reacción).' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.3', titulo: { pt: 'Stop Loss', en: 'Stop Loss', es: 'Stop Loss' }, descricao: { pt: 'Base técnica (estrutura).', en: 'Technical base (structure).', es: 'Base técnica (estructura).' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.4', titulo: { pt: 'Alvo', en: 'Target', es: 'Objetivo' }, descricao: { pt: 'Risco/retorno mínimo 1:2.', en: 'Minimum risk/reward 1:2.', es: 'Riesgo/beneficio mínimo 1:2.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.5', titulo: { pt: 'Quando NÃO Operar', en: 'When NOT to Trade', es: 'Cuándo NO Operar' }, descricao: { pt: 'Mercado lateral ruim, baixa liquidez.', en: 'Bad sideways market, low liquidity.', es: 'Mercado lateral malo, baja liquidez.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.6', titulo: { pt: 'Exemplos Bons', en: 'Good Examples', es: 'Buenos Ejemplos' }, descricao: { pt: 'Trades corretos explicados.', en: 'Correct trades explained.', es: 'Trades correctos explicados.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.7', titulo: { pt: 'Exemplos Ruins', en: 'Bad Examples', es: 'Malos Ejemplos' }, descricao: { pt: 'Erros reais.', en: 'Real mistakes.', es: 'Errores reales.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.8', titulo: { pt: 'Execução de Entrada', en: 'Entry Execution', es: 'Ejecución de Entrada' }, descricao: { pt: 'Timing e confirmação.', en: 'Timing and confirmation.', es: 'Timing y confirmación.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.9', titulo: { pt: 'Verdade sobre Indicadores', en: 'Truth About Indicators', es: 'Verdad sobre Indicadores' }, descricao: { pt: 'Todos derivam do preço.', en: 'All derive from price.', es: 'Todos derivan del precio.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.10', titulo: { pt: 'Tipos de Indicadores', en: 'Types of Indicators', es: 'Tipos de Indicadores' }, descricao: { pt: 'Tendência, momento, volume.', en: 'Trend, momentum, volume.', es: 'Tendencia, momento, volumen.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.11', titulo: { pt: 'Médias Móveis (EMA)', en: 'Moving Averages (EMA)', es: 'Medias Móviles (EMA)' }, descricao: { pt: 'Direção e tendência.', en: 'Direction and trend.', es: 'Dirección y tendencia.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '2.12', titulo: { pt: 'VWAP', en: 'VWAP', es: 'VWAP' }, descricao: { pt: 'Preço médio institucional.', en: 'Institutional average price.', es: 'Precio promedio institucional.' }, video_pt: '', video_en: '', status: 'em_breve' }
    ]
  },

  // ─────────────────────────────────────────
  //  CURSO 3 — AVANÇADO
  // ─────────────────────────────────────────
  {
    id: 'avancado',
    nivel: { pt: 'Avançado', en: 'Advanced', es: 'Avanzado' },
    titulo: { pt: 'Curso Avançado', en: 'Advanced Course', es: 'Curso Avanzado' },
    descricao: {
      pt: 'Domine a gestão de risco, psicologia do trader e aprenda a tomar decisões sob pressão com consistência.',
      en: 'Master risk management, trader psychology and learn to make decisions under pressure with consistency.',
      es: 'Domina la gestión de riesgo, psicología del trader y aprende a tomar decisiones bajo presión con consistencia.'
    },
    badge_class: 'lvl-a',
    imagem: 'Avançado.jpg',
    aulas: [
      { numero: '3.1', titulo: { pt: '% por Trade', en: '% per Trade', es: '% por Trade' }, descricao: { pt: '0.5% a 2% por operação.', en: '0.5% to 2% per trade.', es: '0.5% a 2% por operación.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.2', titulo: { pt: 'Gestão de Banca', en: 'Bankroll Management', es: 'Gestión de Banca' }, descricao: { pt: 'Crescimento progressivo.', en: 'Progressive growth.', es: 'Crecimiento progresivo.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.3', titulo: { pt: 'Drawdown', en: 'Drawdown', es: 'Drawdown' }, descricao: { pt: 'Perda acumulada.', en: 'Accumulated loss.', es: 'Pérdida acumulada.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.4', titulo: { pt: 'Sequência de Perdas', en: 'Losing Streaks', es: 'Secuencia de Pérdidas' }, descricao: { pt: 'Probabilidade estatística.', en: 'Statistical probability.', es: 'Probabilidad estadística.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.5', titulo: { pt: 'Alavancagem', en: 'Leverage', es: 'Apalancamiento' }, descricao: { pt: 'Amplifica tudo.', en: 'Amplifies everything.', es: 'Amplifica todo.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.6', titulo: { pt: 'Cérebro do Trader', en: 'Trader\'s Brain', es: 'Cerebro del Trader' }, descricao: { pt: 'Viés cognitivo, emoção.', en: 'Cognitive bias, emotion.', es: 'Sesgo cognitivo, emoción.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.7', titulo: { pt: 'Overtrading', en: 'Overtrading', es: 'Overtrading' }, descricao: { pt: 'Operar demais.', en: 'Trading too much.', es: 'Operar demasiado.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.8', titulo: { pt: 'Revenge Trade', en: 'Revenge Trade', es: 'Revenge Trade' }, descricao: { pt: 'Querer recuperar.', en: 'Wanting to recover.', es: 'Querer recuperar.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.9', titulo: { pt: 'FOMO', en: 'FOMO', es: 'FOMO' }, descricao: { pt: 'Medo de ficar fora.', en: 'Fear of missing out.', es: 'Miedo a quedarse fuera.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.10', titulo: { pt: 'Disciplina', en: 'Discipline', es: 'Disciplina' }, descricao: { pt: 'Execução mecânica.', en: 'Mechanical execution.', es: 'Ejecución mecánica.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.11', titulo: { pt: 'Rotina', en: 'Routine', es: 'Rutina' }, descricao: { pt: 'Pré, durante, pós mercado.', en: 'Pre, during, post market.', es: 'Pre, durante, post mercado.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.12', titulo: { pt: 'Leitura ao Vivo', en: 'Live Reading', es: 'Lectura en Vivo' }, descricao: { pt: 'Interpretação em tempo real.', en: 'Real-time interpretation.', es: 'Interpretación en tiempo real.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.13', titulo: { pt: 'Gestão Durante Trade', en: 'Trade Management', es: 'Gestión Durante Trade' }, descricao: { pt: 'Ajuste de stop/alvo.', en: 'Stop/target adjustment.', es: 'Ajuste de stop/objetivo.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '3.14', titulo: { pt: 'Saída Inteligente', en: 'Smart Exit', es: 'Salida Inteligente' }, descricao: { pt: 'Parcial, total, erro.', en: 'Partial, full, error.', es: 'Parcial, total, error.' }, video_pt: '', video_en: '', status: 'em_breve' }
    ]
  },

  // ─────────────────────────────────────────
  //  CURSO 4 — PROFISSIONAL
  // ─────────────────────────────────────────
  {
    id: 'profissional',
    nivel: { pt: 'Profissional', en: 'Professional', es: 'Profesional' },
    titulo: { pt: 'Curso Profissional', en: 'Professional Course', es: 'Curso Profesional' },
    descricao: {
      pt: 'Opere como um profissional — liquidez, execução sob pressão, plano de trade e rotina de alto desempenho.',
      en: 'Operate like a professional — liquidity, execution under pressure, trade plan and high performance routine.',
      es: 'Opera como un profesional — liquidez, ejecución bajo presión, plan de trading y rutina de alto rendimiento.'
    },
    badge_class: 'lvl-a',
    imagem: 'Profissional.jpg',
    badge_top: true,
    aulas: [
      { numero: '4.1', titulo: { pt: 'Liquidez', en: 'Liquidity', es: 'Liquidez' }, descricao: { pt: 'Onde estão as ordens grandes.', en: 'Where large orders are.', es: 'Dónde están las órdenes grandes.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.2', titulo: { pt: 'Stop Hunt', en: 'Stop Hunt', es: 'Stop Hunt' }, descricao: { pt: 'Mercado varrendo stops antes de ir.', en: 'Market sweeping stops before moving.', es: 'Mercado barriendo stops antes de moverse.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.3', titulo: { pt: 'Falso Rompimento', en: 'False Breakout', es: 'Falsa Ruptura' }, descricao: { pt: 'Rompimento sem continuidade.', en: 'Breakout without continuity.', es: 'Ruptura sin continuidad.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.4', titulo: { pt: 'Continuidade vs Exaustão', en: 'Continuity vs Exhaustion', es: 'Continuidad vs Agotamiento' }, descricao: { pt: 'Diferença entre força e fim de movimento.', en: 'Difference between strength and end of move.', es: 'Diferencia entre fuerza y fin de movimiento.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.5', titulo: { pt: 'Volume (uso correto)', en: 'Volume (correct use)', es: 'Volumen (uso correcto)' }, descricao: { pt: 'Volume como confirmação.', en: 'Volume as confirmation.', es: 'Volumen como confirmación.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.6', titulo: { pt: 'Contexto Macro', en: 'Macro Context', es: 'Contexto Macro' }, descricao: { pt: 'Direção maior do mercado.', en: 'Larger market direction.', es: 'Dirección mayor del mercado.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.7', titulo: { pt: 'Sequência de Trades', en: 'Trade Sequence', es: 'Secuencia de Trades' }, descricao: { pt: 'Operar múltiplos cenários.', en: 'Trading multiple scenarios.', es: 'Operar múltiples escenarios.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.8', titulo: { pt: 'Replay de Mercado', en: 'Market Replay', es: 'Replay de Mercado' }, descricao: { pt: 'Simulação e treino.', en: 'Simulation and training.', es: 'Simulación y entrenamiento.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.9', titulo: { pt: 'Execução sob Pressão', en: 'Execution Under Pressure', es: 'Ejecución bajo Presión' }, descricao: { pt: 'Velocidade e controle.', en: 'Speed and control.', es: 'Velocidad y control.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.10', titulo: { pt: 'Plano de Trade', en: 'Trade Plan', es: 'Plan de Trading' }, descricao: { pt: 'Regras completas.', en: 'Complete rules.', es: 'Reglas completas.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.11', titulo: { pt: 'Checklist', en: 'Checklist', es: 'Checklist' }, descricao: { pt: 'Validação antes de entrar.', en: 'Validation before entering.', es: 'Validación antes de entrar.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.12', titulo: { pt: 'Diário de Trade', en: 'Trade Journal', es: 'Diario de Trading' }, descricao: { pt: 'Registro detalhado.', en: 'Detailed record.', es: 'Registro detallado.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.13', titulo: { pt: 'Revisão Semanal', en: 'Weekly Review', es: 'Revisión Semanal' }, descricao: { pt: 'Análise de desempenho.', en: 'Performance analysis.', es: 'Análisis de rendimiento.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.14', titulo: { pt: 'Ajustes Estratégicos', en: 'Strategic Adjustments', es: 'Ajustes Estratégicos' }, descricao: { pt: 'Evolução baseada em dados.', en: 'Data-based evolution.', es: 'Evolución basada en datos.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.15', titulo: { pt: 'Rotina Profissional', en: 'Professional Routine', es: 'Rutina Profesional' }, descricao: { pt: 'Padronização diária.', en: 'Daily standardization.', es: 'Estandarización diaria.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.16', titulo: { pt: 'Consistência', en: 'Consistency', es: 'Consistencia' }, descricao: { pt: 'Repetição controlada.', en: 'Controlled repetition.', es: 'Repetición controlada.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.17', titulo: { pt: 'RSI', en: 'RSI', es: 'RSI' }, descricao: { pt: 'Divergência e força.', en: 'Divergence and strength.', es: 'Divergencia y fuerza.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.18', titulo: { pt: 'Confluência', en: 'Confluence', es: 'Confluencia' }, descricao: { pt: 'Combinar fatores.', en: 'Combining factors.', es: 'Combinar factores.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.19', titulo: { pt: 'Setup com Indicador', en: 'Setup with Indicator', es: 'Setup con Indicador' }, descricao: { pt: 'Integração com preço.', en: 'Integration with price.', es: 'Integración con precio.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '4.20', titulo: { pt: 'Limpeza de Gráfico', en: 'Chart Cleanup', es: 'Limpieza de Gráfico' }, descricao: { pt: 'Redução de ruído.', en: 'Noise reduction.', es: 'Reducción de ruido.' }, video_pt: '', video_en: '', status: 'em_breve' }
    ]
  },

  // ─────────────────────────────────────────
  //  CURSO 5 — INDICADORES
  // ─────────────────────────────────────────
  {
    id: 'indicadores',
    nivel: { pt: 'Intermediário', en: 'Intermediate', es: 'Intermedio' },
    titulo: { pt: 'Indicadores', en: 'Indicators', es: 'Indicadores' },
    descricao: {
      pt: 'Entenda como usar indicadores de forma correta — sem ruído, com contexto e integrados ao price action.',
      en: 'Understand how to use indicators correctly — without noise, with context and integrated with price action.',
      es: 'Entiende cómo usar los indicadores correctamente — sin ruido, con contexto e integrados al price action.'
    },
    badge_class: 'lvl-m',
    imagem: 'Indicadores.jpg',
    aulas: [
      { numero: '5.1', titulo: { pt: 'O que são Indicadores', en: 'What are Indicators', es: 'Qué son los Indicadores' }, descricao: { pt: 'Derivação do preço, atraso matemático.', en: 'Price derivation, mathematical lag.', es: 'Derivación del precio, retraso matemático.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '5.2', titulo: { pt: 'Tipos de Indicadores', en: 'Types of Indicators', es: 'Tipos de Indicadores' }, descricao: { pt: 'Tendência, momento, volatilidade, volume.', en: 'Trend, momentum, volatility, volume.', es: 'Tendencia, momento, volatilidad, volumen.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '5.3', titulo: { pt: 'Médias Móveis (EMA)', en: 'Moving Averages (EMA)', es: 'Medias Móviles (EMA)' }, descricao: { pt: 'Direção e inclinação.', en: 'Direction and slope.', es: 'Dirección e inclinación.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '5.4', titulo: { pt: 'Volume Básico', en: 'Basic Volume', es: 'Volumen Básico' }, descricao: { pt: 'Participação no movimento.', en: 'Participation in movement.', es: 'Participación en el movimiento.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '5.5', titulo: { pt: 'Bollinger Bands', en: 'Bollinger Bands', es: 'Bandas de Bollinger' }, descricao: { pt: 'Expansão e compressão.', en: 'Expansion and compression.', es: 'Expansión y compresión.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '5.6', titulo: { pt: 'RSI', en: 'RSI', es: 'RSI' }, descricao: { pt: 'Força e divergência.', en: 'Strength and divergence.', es: 'Fuerza y divergencia.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '5.7', titulo: { pt: 'VWAP', en: 'VWAP', es: 'VWAP' }, descricao: { pt: 'Preço médio institucional.', en: 'Institutional average price.', es: 'Precio promedio institucional.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '5.8', titulo: { pt: 'Fibonacci', en: 'Fibonacci', es: 'Fibonacci' }, descricao: { pt: 'Retração e zonas.', en: 'Retracement and zones.', es: 'Retracción y zonas.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '5.9', titulo: { pt: 'Confluência', en: 'Confluence', es: 'Confluencia' }, descricao: { pt: 'Combinar fatores.', en: 'Combining factors.', es: 'Combinar factores.' }, video_pt: '', video_en: '', status: 'em_breve' },
      { numero: '5.10', titulo: { pt: 'Indicadores Juntos', en: 'Indicators Together', es: 'Indicadores Juntos' }, descricao: { pt: 'Integração.', en: 'Integration.', es: 'Integración.' }, video_pt: '', video_en: '', status: 'em_breve' }
    ]
  }

];
