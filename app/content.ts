// PERSONALIZE O ÁLBUM AQUI. Todo o texto, a data, a foto e a música ficam neste arquivo.
export const content = {
  herName: 'Julia', // Nome dela.
  myName: 'Gustavo', // Seu nome, usado na carta e na assinatura.
  letter: [
    { text: 'eu nem sei bem por onde começar.' },
    { text: 'Faz só dois meses, mas você já virou parte dos meus dias de um jeito que eu não esperava.' },
    { text: 'Acontece alguma coisa boba e minha primeira vontade é te contar. Gosto de ter você por perto, mesmo quando é por uma tela.' },
    { text: 'A distância pesa. Mesmo depois de uma conversa boa, eu ainda queria poder te olhar sem uma tela entre nós, te abraçar e simplesmente ficar ali.' },
    { text: 'Gosto do seu olhar e do jeito que seu riso acaba me fazendo rir também.' },
    { text: 'Tem pequenos jeitos seus que fui aprendendo a reconhecer. Talvez você nem note, mas eu gosto de reparar neles.' },
    { text: 'Lembro da primeira vez que ouvi sua voz, naquela call no Discord. Na hora, ela já mexeu comigo. Eu não imaginava que um dia ia querer ouvir você tantas vezes.' },
    { text: 'Com você eu fico à vontade. Posso ser eu mesmo, e isso importa muito pra mim.' },
    { text: 'Às vezes tenho medo de te perder e acabo me atrapalhando. Nem sempre consigo mostrar o que sinto do jeito que eu gostaria.' },
    { text: 'eu amo você.' },
    { text: 'Estou tentando não deixar o medo falar mais alto que esse amor.' },
    { text: 'Quero estar com você nos dias grandes e nos bem comuns: ver você correndo atrás dos seus sonhos, acordar ao teu lado e discutir quem vai levantar pra apagar a luz.' },
    { text: 'Quero construir uma vida com você, sem pressa e do nosso jeito.', mark: 'star' },
    { text: 'Quero dividir o pão, os planos, os dias difíceis e as conquistas com você — como seu companheiro, sempre do mesmo lado.', mark: 'companions' },
    { text: 'E sim, eu quero casar com você.' },
    { text: 'Porque você é o amor da minha vida.' },
    { text: 'Não sei como vai ser o nosso futuro. Mas, quando faço planos, gosto de pensar em você junto.' },
    { text: 'Talvez a nossa pequena revolução seja continuar escolhendo um ao outro, mesmo quando a distância aperta.', mark: 'revolution' },
    { text: 'Eu te amo, Julia.' },
    { text: 'Feliz dois meses pra nós. Quero continuar vivendo isso com você.' },
  ],
  letterSignoff: 'Com todo o meu amor,',
  communis: {
    title: 'Minha Gatinha',
    titleAccent: 'Comunista',
    subtitle: 'com a Amora no comitê',
    articles: [
      { number: 'Art. I', text: 'Carinho será distribuído sem medida.' },
      { number: 'Art. II', text: 'Amora tem assento permanente no comitê.' },
      { number: 'Art. III', text: 'Toda partida de xadrez dá direito à revanche.' },
      { number: 'Art. IV', text: 'A distância será vencida no nosso tempo.' },
    ],
    planTitle: 'Plano quinquenal da nossa revolução',
    planItems: [
      'nos ver mais vezes',
      'ter a Amora perto de mais bichos',
      'jogar xadrez e pedir revanche',
      'ter nosso cantinho',
    ],
  },
  photo: {
    src: '/fotos/otimizadas/nossa-primeira-foto.webp', // Troque pelo caminho da foto de vocês.
    alt: 'Nossa primeira fotografia juntos',
    caption: 'primeira vez que te vi',
  },
  fragments: [
    {
      mark: 'paw',
      prompt: 'Amora e a turma que vem aí',
      text: 'Quero ter mais bichos com você e ver a Amora conhecendo cada um. Já imagino a casa cheia, cada um com seu jeito, e nós dois tentando decorar todos os nomes.',
    },
    {
      mark: 'knight',
      prompt: 'uma partida de xadrez',
      text: 'Quero jogar xadrez com você. E já aviso: vou pedir revanche ganhando ou perdendo.',
    },
  ],
  closingTitle: 'gosto tanto de nós',
  closingPhrase: 'obrigado por esses dois meses comigo.',
  // Música opcional: inicia em repetição e libera o som no primeiro toque ou tecla.
  audio: {
    src: '/audio/fade-into-you.mp3',
    title: 'Fade Into You — Mazzy Star',
  },
};
