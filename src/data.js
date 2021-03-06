export const projectsList = {
  frontend: {
    strangerThingsFrontEnd: {
      name: 'Stranger Things',
      translation: 'Projeto Stranger Things',
      path: 'stranger-things-frontend',
      url: 'https://matheusmartino97-pd.herokuapp.com/',
      repository:
        'https://github.com/MatheusMartino97/32_sd-09-stranger-things-frontend',
      miniature: 'https://i.ibb.co/m96VnHC/miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/P9HLz78/desktop.gif',
      },
      descriptions: {
        short: 'Um site que busca personagens da série Stranger Things.',
        long: {
          paragraphs: {
            1: 'Neste projeto tive que construir tanto o front-end quanto o back-end de uma aplicação e publicá-los no Heroku.',
            2: 'Fui capaz de publicar aplicações através do Heroku; visualizar logs das suas aplicações publicadas; monitorar suas aplicações publicadas; utilizar variáveis de ambiente dentro do Heroku; instalar, utilizar e aproveitar os principais recursos do PM2; fazer deploy no Heroku aproveitando recursos de um process manager.'
          },
        },
      },
      technologies: ['React', 'Heroku'],
      libraries: ['react', 'axios', 'dotenv'],
      apis: ['https://matheusmartino97-bd.herokuapp.com/', 'https://matheusmartino97-bk.herokuapp.com/'],
    },

    toDoListMaterialUI: {
      name: 'To Do List Material UI',
      translation: 'Lista de tarefas com Material UI',
      path: 'to-do-list-material-ui',
      url: 'https://matheusmartino97.github.io/to-do-list-material-ui/#/',
      repository: 'https://github.com/MatheusMartino97/to-do-list-material-ui',
      miniature:
        'https://i.ibb.co/3FXX7cy/to-do-list-material-ui-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/LhH03Gb/to-do-list-material-ui-desktop.gif',
        mobile: 'https://i.ibb.co/bK1K4bX/to-do-list-material-ui-mobile.gif',
      },
      descriptions: {
        short: 'Lista de tarefas utilizando Material UI.',
        long: {
          paragraphs: {
            1: 'Decidi revisitar o projeto To Do List que eu havia feito na Trybe, mas dessa vez desenvolvi uma lista de tarefas utilizando React, Router-DOM e Material UI.',
          },
        },
      },
      technologies: ['React', 'Material UI'],
      libraries: [
        'react',
        'react-router-dom',
        '@material-ui/core',
        '@material-ui/icons',
      ],
    },

    recipesApp: {
      name: 'Recipes App',
      translation: 'Aplicativo de Receitas',
      path: 'recipes-app',
      url: 'https://matheusmartino97.github.io/22_sd-09-project-recipes-app/#/',
      repository:
        'https://github.com/MatheusMartino97/22_sd-09-project-recipes-app',
      miniature: 'https://i.ibb.co/jyL7LBM/recipes-app-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/S3dpSGM/recipes-app-desktop.gif',
        mobile: 'https://i.ibb.co/p101VKn/recipes-app-mobile.gif',
      },
      descriptions: {
        short: 'Aplicativo de receitas feito com React e Redux.',
        long: {
          paragraphs: {
            1: 'Projeto em grupo realizado no módulo sobre desenvolvimento Fron-End durante a graduação na Trybe.',
            2: 'Este projeto consiste em um app de receitas desenvolvido com React. Utilizamos Redux para gerenciar o estado global da aplicação.',
            3: 'Durante o desenvolvimento pude aprimorar meus conhecimentos sobre os React Hooks useState e useEffect, assim como me habituar ainda mais com trabalho em equipe seguindo metodologias ágeis.',
            4: 'Nós alunos fomos responsáveis por definir o escopo de cada tarefa, assim como o nível de prioridade e como seriam distribuidas.',
          },
        },
      },
      technologies: ['React', 'Redux', 'Bootstrap'],
      libraries: [
        'react',
        'react-router-dom',
        'redux',
        'redux-thunk',
        'react-redux',
        'redux-devtools-extension',
        'bootstrap',
        'react-bootstrap',
        'prop-types',
        'react-multi-carousel',
      ],
      apis: [
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
        'https://www.themealdb.com/api/json/v1/1/filter.php?a=$area',
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=$category',
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=$category',
        'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
        'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
        'https://www.themealdb.com/api/json/v1/1/search.php?s=',
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
        'https://www.themealdb.com/api/json/v1/1/lookup.php?i=$id',
        'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=$id',
      ],
    },

    triviaGame: {
      name: 'Trivia Game',
      translation: 'Jogo de Trivia',
      path: 'trivia-game',
      url:
        'https://matheusmartino97.github.io/20_sd-09-project-trivia-react-redux/#/',
      repository:
        'https://github.com/MatheusMartino97/20_sd-09-project-trivia-react-redux',
      miniature: 'https://i.ibb.co/x8QTCct/trivia-game-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/XYxjD6S/trivia-game-desktop.gif',
        mobile: 'https://i.ibb.co/Ws5dbnB/trivia-game-mobile.gif',
      },
      descriptions: {
        short: 'Jogo de trivia desenvolvido com React e Redux.',
        long: {
          paragraphs: {
            1: 'O Trivia Game foi desenvolvido em grupo durante a minha formação na Trybe.',
            2: 'Este projeto nos proporcionou bastante desenvoltura quando se trata de desenvolver com React e Redux. Além disso, também praticamos nossas soft-skills com nossos colegas de grupo.',
            3: 'Utilizamos o Kanban para nos organizarmos e para tornar ágil a divisão de tarefas.',
          },
        },
      },
      technologies: ['React', 'Redux'],
      libraries: [
        'react',
        'react-router-dom',
        'react-redux',
        'redux',
        'redux-thunk',
        'crypto-js',
        'emoji-dictionary',
      ],
      apis: [
        'https://opentdb.com/api_token.php?command=request',
        'https://opentdb.com/api.php?amount=$QUANTITY&token=$TOKEN',
      ],
    },

    trybeWallet: {
      name: 'Trybe Wallet',
      translation: 'Carteira da Trybe',
      path: 'trybe-wallet',
      url: 'https://matheusmartino97.github.io/19_sd-09-project-trybewallet/#/',
      repository:
        'https://github.com/MatheusMartino97/19_sd-09-project-trybewallet',
      miniature: 'https://i.ibb.co/ccbL5Ft/trybe-wallet-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/TrxfBGh/trybe-wallet-desktop.gif',
        mobile: '',
      },
      descriptions: {
        short: 'Carteira de controle de gastos e conversão de moedas.',
        long: {
          paragraphs: {
            1: 'Esta carteira de gastos, além de registrar o gasto customizado pelo usuário, converte a moeda escolhida para real utilizando taxas de conversão fornecidas por uma API.',
            2: 'No momento em que o usuário adiciona o gasto uma função thunk é despachada, recebendo, assim, a taxa de câmbio mais atualizada possível e, depois que isso é feito, a soma total dos gastos é mostrada no cabeçalho da aplicação.',
          },
        },
      },
      technologies: ['React', 'Redux'],
      libraries: [
        'react',
        'react-router-dom',
        'redux',
        'react-redux',
        'redux-thunk',
        'validator',
      ],
      apis: ['https://economia.awesomeapi.com.br/json/all'],
    },

    jobSearch: {
      name: 'Job Search',
      translation: 'Busca de Empregos',
      path: 'job-search',
      url: 'https://matheusmartino97.github.io/job-search-react-redux/#/',
      repository: 'https://github.com/MatheusMartino97/job-search-react-redux',
      miniature: 'https://i.ibb.co/KxZh9TM/job-search-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/6JDvV45/job-search-desktop.gif',
        mobile: 'https://i.ibb.co/KDc5Nc1/job-search-mobile.gif',
      },
      descriptions: {
        short: 'Buscador de vagas de emprego por localização.',
        long: {
          paragraphs: {
            1: 'Esta é mais um projeto que fiz por conta própria para treinar minhas habilidades com React e Redux.',
            2: 'A aplicação usa a localização que o usuário informa para buscar cargos disponíveis na região. Quando um desses cargos é selecionado, as instituições que fornecem tal cargo são apresentadas e ao serem clicadas, uma busca no Google é feita com o nome da instituição e a cidade que foi informada pelo usuário.',
          },
        },
      },
      technologies: ['React', 'Redux'],
      libraries: ['react', 'react-router-dom', 'redux', 'react-redux'],
      apis: ['https://documenter.getpostman.com/view/7929631/TWDZGFKK'],
    },

    catsVsDogs: {
      name: 'Cats vs Dogs',
      translation: 'Gatos vs Gatos',
      path: 'cats-vs-dogs',
      url: 'https://matheusmartino97.github.io/cat-vs-dog-customer-register/#/',
      repository:
        'https://github.com/MatheusMartino97/cat-vs-dog-customer-register',
      miniature: 'https://i.ibb.co/Q9QkcQy/cats-vs-dogs-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/hDMNSC7/cats-vs-dogs-desktop.gif',
        mobile: 'https://i.ibb.co/hcmBv01/cats-vs-dogs-mobile.gif',
      },
      descriptions: {
        short:
          'Uma aplicação que se comporta de acordo com as informações do cliente cadastrado.',
        long: {
          paragraphs: {
            1: 'Este foi um projeto que fiz por conta própria para treinar minhas habilidades com React e Redux. Tentei utilizar tudo o que eu vinha aprendendo na graduação da Trybe até então.',
            2: 'Neste site, o usuário pode se cadastrar e informar se gosta de gatos ou cachorros. Quando fizer login, aparecerão fotos aletórias do animal escolhido.',
          },
        },
      },
      technologies: ['React', 'Redux'],
      libraries: ['react', 'react-router-dom', 'redux', 'react-redux'],
      apis: [
        'https://dog.ceo/api/breeds/image/random',
        'https://aws.random.cat/meow',
      ],
    },

    frontEndOnlineStore: {
      name: 'Front-End Online Store',
      translation: 'Loja Virtual Front-End',
      path: 'front-end-online-store',
      url:
        'https://matheusmartino97.github.io/17_sd-09-project-frontend-online-store/#/',
      repository:
        'https://github.com/MatheusMartino97/17_sd-09-project-frontend-online-store',
      miniature:
        'https://i.ibb.co/bBsRbd8/front-end-online-store-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/ckbj1V0/front-end-online-store-desktop.gif',
        mobile: '',
      },
      descriptions: {
        short: 'Front-end de uma loja virtual feito com React.',
        long: {
          paragraphs: {
            1: 'Projeto em grupo feito no módulo sobre desenvolvimento Front-End durante a graduação da Trybe.',
            2: 'Utilizamos o Kanban para organizarmos as divisões de tarefas e adotamos o SCRUM como metodologia ágil.',
            3: 'Note que neste projeto nenhuma tecnologia foi utilizada para nos auxiliar com o problema do "Prop-drilling". O objetivo do projeto foi nos mostrar a importância que as ferramentas como Redux e ContextAPI têm quando se trata de desenvolvimento com React, e como seria complicado trabalhar sem elas.',
          },
        },
      },
      technologies: ['React'],
      libraries: ['react', 'react-router-dom'],
      apis: [
        'https://api.mercadolibre.com/sites/MLB/categories',
        'https://api.mercadolibre.com/sites/MLB/search?category=$categoryId&q=$query',
        'https://api.mercadolibre.com/items?ids=$itemId',
      ],
    },

    movieLibraryCRUD: {
      name: 'Movie Library CRUD',
      translation: 'Catálogo de Filmes CRUD',
      path: 'movie-library-crud',
      url:
        'https://matheusmartino97.github.io/16_sd-09-project-movie-card-library-crud/#/',
      repository:
        'https://github.com/MatheusMartino97/16_sd-09-project-movie-card-library-crud',
      miniature: 'https://i.ibb.co/0qNCLds/movie-library-CRUD-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/qdMPtFM/movie-library-CRUD-desktop.gif',
        mobile: '',
      },
      descriptions: {
        short:
          'Um catálogo de cards com informações de filmes implementado com CRUD (Create, Read, Update, Delete).',
        long: {
          paragraphs: {
            1: 'Este foi um projeto do módulo de Front-End da Trybe onde o desafio era desenvolver uma aplicação implementando CRUD.',
            2: 'Além disso, pude desenvolver minhas habilidades com ciclo de vida dos componentes React, props.children e como utilizá-la, a criação de rotas e links com BrowserRouter, Switch, Route, Link e Redirect.',
          },
        },
      },
      technologies: ['React'],
      libraries: ['react', 'react-router-dom'],
    },

    testedPokedex: {
      name: 'Tested Pokedex',
      translation: 'Pokedex Testado',
      path: 'tested-pokedex',
      url:
        'https://matheusmartino97.github.io/18_sd-09-project-react-testing-library/#/',
      repository:
        'https://github.com/MatheusMartino97/18_sd-09-project-react-testing-library',
      miniature: 'https://i.ibb.co/w7CLyvR/tested-pokedex-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/Fb6vZJH/tested-pokedex-desktop.gif',
        mobile: 'https://i.ibb.co/HCqk37W/tested-pokedex-mobile.gif',
      },
      descriptions: {
        short: 'Testando o pokedex com React Testing Library.',
        long: {
          paragraphs: {
            1: 'Este é um projeto, presente a graduação da Trybe, que os alunos são responsáveis por realizar os testes.',
            2: 'Para realizar os testes unitários e de integração, utilizei React Testing Library em conjunto com os matchers do Jest.',
          },
        },
      },
      technologies: ['React Testing Library', 'Jest'],
      libraries: [
        '@testing-library/jest-dom',
        '@testing-library/react',
        '@testing-library/user-event',
      ],
      apis: ['react', 'testing', 'library', 'react testing '],
    },

    pokedex: {
      name: 'Pokedex',
      translation: 'Pokedex',
      path: 'pokedex',
      url: 'https://matheusmartino97.github.io/pokedex-react/',
      repository: 'https://github.com/MatheusMartino97/pokedex-react',
      miniature: 'https://i.ibb.co/FbKndcj/pokedex-miniature.jpg',
      gifs: {
        desktop: 'https://i.ibb.co/GcJQqGk/pokedex-desktop.gif',
        mobile: 'https://i.ibb.co/175hqYn/pokedex-mobile.gif',
      },
      descriptions: {
        short: 'Um pokedex simples feito com React.',
        long: {
          paragraphs: {
            1: 'Este projeto foi um exercício da Trybe para os alunos praticarem a sintaxe do React.',
            2: 'O pokedex percorre um objeto de pokemons e mostra na tela cada pokemon com suas informações.',
            3: 'Uma ideia interessante é a possível implementação de consumo de uma API que nos disponibiliza, não só alguns, mas todos os pokemons, assim como suas informações.',
          },
        },
      },
      technologies: ['React'],
      libraries: ['react'],
    },

    shoppingCard: {
      name: 'Shopping Cart',
      translation: 'Carrinho de Compras',
      path: 'shopping-cart',
      miniature: 'https://i.ibb.co/7XZ5QrC/shopping-cart-miniature.jpg',
      url: 'https://matheusmartino97.github.io/12_sd-09-project-shopping-cart/',
      repository:
        'https://github.com/MatheusMartino97/12_sd-09-project-shopping-cart',
      gifs: {
        desktop: 'https://i.ibb.co/Cm0W0Lh/ezgif-com-gif-maker.gif',
        mobile: '',
      },
      descriptions: {
        short:
          'Um carrinho de compras básico utilizando a API do Mercado Livre Brasil.',
        long: {
          paragraphs: {
            1: 'O meu primeiro contato com consumo de apis foi desenvolvendo este projeto. Aprendi como fazer requisições para uma API, como interpretar sua documentação e como tratar sua resposta para que esta esteja no formato desejado.',
            2: 'Além disso, pratiquei a manipular e utilizar o Local Storage para guardar informações necessárias dos usuários da aplicação.',
          },
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      apis: ['https://api.mercadolibre.com/sites/MLB/search?q=$QUERY'],
    },

    toDoList: {
      name: 'To Do List',
      translation: 'Lista de Tarefas',
      path: 'to-do-list',
      miniature: 'https://i.ibb.co/cbvzQ6M/to-do-list-miniature.jpg',
      url: 'https://matheusmartino97.github.io/04_sd-09-project-todo-list/',
      repository:
        'https://github.com/MatheusMartino97/04_sd-09-project-todo-list',
      gifs: {
        desktop: 'https://i.ibb.co/28dvCTY/to-do-list-gif-desktop.gif',
        mobile: 'https://i.ibb.co/8PBGwpm/to-do-list-gif-mobile.gif',
      },
      descriptions: {
        short: 'Lista de tarefa simples estilizada com Bulma.',
        long: {
          paragraphs: {
            1: 'Este aqui foi uns dos primeiros projetos que desenvolvi na Trybe. Esta lista de tarefas, que, apesar de ser relativamente simples, me fez perceber que desenvolvimento de softwares seria, definitivamente, a minha profissão',
            2: 'Durante o desenvolvimento deste projeto, percebi também a importância da metodologia Mobile First. Entendi que pode ser extremamente vantajoso produzir primeiro para telas pequenas e, posteriormente, expandir para telas maiores.',
            3: 'Além disso, foi aqui que tive o meu primeiro contato com qualquer tipo de biblioteca externa. Utilizei Bulma para estilizar este aplicativo.',
          },
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      libraries: ['bulma'],
    },

    colorGuess: {
      name: 'Color Guess',
      translation: 'Adivinhe a Cor',
      path: 'color-guess',
      miniature: 'https://i.ibb.co/1sZZd3t/color-guess-miniature.jpg',
      url: 'https://matheusmartino97.github.io/06_sd-09-project-color-guess/',
      repository:
        'https://github.com/MatheusMartino97/06_sd-09-project-color-guess',
      gifs: {
        desktop: 'https://i.ibb.co/T8WLDr8/color-guess-desktop.gif',
        mobile: '',
      },
      descriptions: {
        short:
          'Jogo onde se deve acertar qual é a cor correspondente com o valor RGB.',
        long: {
          paragraphs: {
            1: 'Durante o desenvolvimento deste projeto pude treinar e entender melhor como funcionam implementações de regras de negócio básicas.',
            2: 'Este foi o primeiro projeto em que tive contato com números aleatórios no JavaScript. Aprendi a gerá-los e a manipulá-los para que tenham o formato desejado.',
          },
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },

    pixelsArt: {
      name: 'Pixels Art',
      translation: 'Arte com Pixels',
      path: 'pixels-art',
      miniature: 'https://i.ibb.co/5r6wCCZ/pixel-art-miniature.jpg',
      url: 'https://matheusmartino97.github.io/03_sd-09-project-pixels-art/',
      repository:
        'https://github.com/MatheusMartino97/03_sd-09-project-pixels-art',
      gifs: {
        desktop: 'https://i.ibb.co/jgPXJ6g/pixels-art-desktop.gif',
        mobile: '',
      },
      descriptions: {
        short: 'Um canvas simples feito com JavaScript puro.',
        long: {
          paragraphs: {
            1: 'Um projeto bem divertido feito com HTML, CSS e JavaScript puro.',
            2: 'Pra mim, a parte mais interessante de desenvolvê-lo, como iniciante em programação, foi treinar iterações e me familiarizar como a lógica de programação é aplicada na pratica.',
            3: 'Essa é a primeira página que um aluno desenvolve utilizando JavaScript na formação da Trybe e, acredito que, tenha sido importantíssimo para nos dar motivação e nos apresentar a imensidão de posibilidades que um programador pode desenvolver.',
          },
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },

    memeGenerator: {
      name: 'Meme Generator',
      translation: 'Gerador de Memes',
      path: 'meme-generator',
      miniature: 'https://i.ibb.co/gvMrKKr/meme-generator-miniature.jpg',
      url:
        'https://matheusmartino97.github.io/05_sd-09-project-meme-generator/',
      repository:
        'https://github.com/MatheusMartino97/05_sd-09-project-meme-generator',
      gifs: {
        desktop: 'https://i.ibb.co/M7NXbFC/meme-generator-desktop.gif',
        mobile: '',
      },
      descriptions: {
        short:
          'Essa aplicação possibilita o usuário a colocar legenda em uma foto a sua escolha.',
        long: {
          paragraphs: {
            1: 'O objetivo deste projeto bônus da Trybe é desenvolver uma aplicação que possibilita o usuário a colocar legendas em imagens que foram carregadas de seu computador.',
            2: '',
          },
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },

    misteryLetter: {
      name: 'Mistery Letter',
      translation: 'Carta Misteriosa',
      path: 'mistery-letter',
      miniature: 'https://i.ibb.co/GCQp96M/mistery-letter-miniature.jpg',
      url:
        'https://matheusmartino97.github.io/07_sd-09-project-mistery-letter/',
      repository:
        'https://github.com/MatheusMartino97/07_sd-09-project-mistery-letter',
      gifs: {
        desktop: 'https://i.ibb.co/JnxC7Cb/mistery-letter-desktop.gif',
        mobile: '',
      },
      descriptions: {
        short:
          'O objetivo desta aplicação é estilizar aleatoriamente cada palavra da frase que o usuário escrever.',
        long: {
          paragraphs: {
            1: 'O objetivo deste projeto da Trybe, ao meu ver, foi fazer com que os alunos treinassem e se familiarizassem com a manipulação de classes CSS.',
            2: 'Durante o desenvolvimento deste projeto pude entender melhor como os objetos JavaScript são úteis para encapsular, e facilitar o acesso de elementos de mesmo contexto.',
          },
        },
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
  },

  backend: {
    strangerThingsBackEnd: {
      name: 'Stranger Things',
      translation: 'Projeto Stranger Things',
      path: 'stranger-things-backend',
      repository: 'https://github.com/MatheusMartino97/32_sd-09-stranger-things-backend',
      miniature: 'https://blog.4linux.com.br/wp-content/uploads/2018/01/Heroku.png',
      descriptions: {
        short: 'Um site que busca personagens da série Stranger Things.',
        long: {
          paragraphs: {
            1: 'Neste projeto tive que construir tanto o front-end quanto o back-end de uma aplicação e publicá-los no Heroku.',
            2: 'Fui capaz de publicar aplicações através do Heroku; visualizar logs das suas aplicações publicadas; monitorar suas aplicações publicadas; utilizar variáveis de ambiente dentro do Heroku; instalar, utilizar e aproveitar os principais recursos do PM2; fazer deploy no Heroku aproveitando recursos de um process manager.'
          },
        },
      },
      technologies: ['Express', 'Heroku'],
      libraries: ['express', 'cors', 'dotenv', 'flipout', 'pm2', 'nodemon'],
    },

    cookmaster: {
      name: 'Cookmaster',
      translation: 'Mestre Cuca',
      path: 'cookmaster',
      repository: 'https://github.com/MatheusMartino97/31_sd-09-cookmaster',
      miniature:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
      descriptions: {
        short:
          'App desenvolvido com a arquitetura MSC onde é possível realizar o CRUD de pessoas usuárias e receitas.',
        long: {
          paragraphs: {
            1: 'Este projeto é uma aplicação onde é possível fazer o cadastro e login de pessoas usuárias, onde apenas essas pessoas podem acessar, modificar e deletar as receitas que cadastraram.',
            2: 'Nele fui capaz de entender o que há por dentro de um token de autenticação; gerar tokens a partir de informações como login e senha; autenticar rotas do Express, usando o token JWT; fazer upload de arquivos em APIs REST; salvar arquivos no servidor através de uma API REST; consultar arquivos do servidor através de uma api REST e realizar testes de integração.',
          },
        },
      },
      technologies: ['Node.js', 'Express', 'MongoDB'],
      libraries: [
        'express',
        'dotenv',
        'express-rescue',
        'jsonwebtoken',
        'mongodb',
        'multer',
        'chai',
        'chai-http',
        'mocha',
        'sinon',
        'mongodb-memory-server',
        'nodemon',
      ],
    },

    storeManager: {
      name: 'Store Manager',
      translation: 'Gerenciador de Loja',
      path: 'store-manager',
      repository: 'https://github.com/MatheusMartino97/30_sd-09-store-manager',
      miniature:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
      descriptions: {
        short:
          'Esta RESTful API, construída utilizando a arquitetura MSC, trata-se de um sistema CRUD de gerenciamento de produtos e vendas.',
        long: {
          paragraphs: {
            1: 'Este foi o primeiro projeto, que realizei durante a graduação na Trybe, onde tive contato com a arquitetura MSC (Models, Services e Controllers).',
            2: 'Neste projeto, fui capaz de entender o funcionamento da camada de Model; delegar responsabilidades específicas para essa camada; conectar a aplicação com diferentes collections do bancos de dados; estruturar uma aplicação em camadas; delegar responsabilidades específicas para cada parte do seu app; melhorar manutenibilidade e reusabilidade do seu código; entender e aplicar os padrões REST; escrever assinaturas para APIs intuitivas e facilmente entendíveis.',
          },
        },
      },
      technologies: ['Node.js', 'Express', 'MongoDB'],
      libraries: [
        'express',
        'express-rescue',
        'body-parser',
        'dotenv',
        'mongodb',
        'nodemon',
        'chai',
        'mocha',
        'sinon',
        'mongodb-memory-server',
      ],
    },

    talkerManager: {
      name: 'Talker Manager',
      translation: 'Gerenciador de Palestrantes',
      path: 'talker-manager',
      repository:
        'https://github.com/MatheusMartino97/29_sd-09-project-talker-manager',
      miniature:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
      descriptions: {
        short:
          'Uma API de um CRUD (Create, Read, Update e Delete) de palestrantes.',
        long: {
          paragraphs: {
            1: 'O primeiro projeto utilizando Express feito durante o módulo de Back-End da graduação na Trybe.',
            2: 'Neste projeto, fui capaz de realizar operações assíncronas utilizando callbacks; realizar operações assíncronas utilizando Promises; ler e escrever arquivos localmente com NodeJS; escrever meus próprios scripts que criam e consomem Promises; reescrever código que usa callbacks para que use Promises; realizar chamadas de funções de forma consciente; entender os conceitos básicos de como o JavaScript funciona; detectar e solucionar problemas no código de forma mais objetiva; entender a diferença entre execução síncrona e assíncrona; entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express; escrever APIs utilizando Node e Express; entender a estrutura de uma aplicação Express e como organizar meu código; criar rotas e aplicar middlewares.',
          },
        },
      },
      technologies: ['Node.js', 'Express'],
      libraries: [
        'express',
        'express-rescue',
        'crypto-js',
        'body-parser',
        'nodemon',
      ],
    },

    mongodbAggregations: {
      name: 'MongoDB Aggregations',
      translation: '"Aggregations" no MongoDB',
      path: 'mongodb-aggregations',
      repository:
        'https://github.com/MatheusMartino97/28_sd-09-mongodb-aggregations',
      miniature:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      descriptions: {
        short:
          'Desafios onde foi possível praticar com os diversos operadores e estágios do aggregation pipeline.',
        long: {
          paragraphs: {
            1: 'Neste projeto foi utilizado vários datasets, de forma que foi possível praticar em vários cenários a execução buscas complexas no banco MongoDB, assim como a utilização dos operadores de aggregation para fazer uma pipeline.',
          },
        },
      },
      technologies: ['MongoDB', 'MongoDB for VS Code'],
    },

    mongodbCommerce: {
      name: 'MongoDB Commerce',
      translation: 'Comércio com MongoDB',
      path: 'mongodb-commerce',
      repository:
        'https://github.com/MatheusMartino97/27_sd-09-mongodb-commerce',
      miniature:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      descriptions: {
        short: 'Uma série de desafios com diferentes níveis de complexidade.',
        long: {
          paragraphs: {
            1: "O objetivo do projeto é trabalhar com o banco de dados commerce, que contém dados do cardápio do McDonald's, como ingredientes, valores nutricionais e dados fictícios de vendas.",
            2: 'Durante o desenvolvimento fui capaz de utilizar o método updateOne() e updateMany(); utilizar os operadores $set, $mul, $inc, $min, $max e $currentDate; renomear e remover campos; incorporar dados aos documentos através de arrays; utilizar os operadores $pop, $pull e $push; utilizar o operador $addToSet; utilizar os operadores $each, $slice e $sort; utilizar o operador $all para filtrar documentos; utilizar o operador $elemMatch para filtrar documentos; utilizar o operador $size para filtrar documentos pelo tamanho de arrays; utilizar o operador $expr para criar expressões de agregação; utilizar expressões regulares e o operador $regex para buscar documentos; utilizar o índice textual e o operador $text; utilizar o operador $mod.',
          },
        },
      },
      technologies: ['MongoDB', 'MongoDB for VS Code'],
    },

    mongodbDataflights: {
      name: 'MongoDB Dataflights',
      translation: 'MongoDB Informações de Vôos',
      path: 'mongodb-dataflights',
      repository:
        'https://github.com/MatheusMartino97/26_sd-09-mongodb-dataflights',
      miniature:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      descriptions: {
        short:
          'Queries para consultar, deletar e contar documentos da coleção do projeto.',
        long: {
          paragraphs: {
            1: 'Primeiro projeto sobre MongoDB e bancos de dados não relazionais no módulo de Back-End da graduação da Trybe.',
            2: 'Com esse projeto fui capaz de buscar documentos na coleção do projeto; utilizar filtros de busca; deletar documentos conforme o filtro; contar documentos compreendidos nos filtros pedidos; inserir documentos no banco de dados.',
          },
        },
      },
      technologies: ['MongoDB', 'MongoDB for VS Code'],
    },

    mySqlOneForAll: {
      name: 'MySQL One For All',
      translation: 'MySQL Um Por Todos',
      path: 'mysql-one-for-all',
      repository:
        'https://github.com/MatheusMartino97/25_sd-09-mysql-one-for-all',
      miniature:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      descriptions: {
        short:
          'Normalização de tabelas, criação de diagramas de relacionamentos e planejamento do modelo lógico de um banco de dados.',
        long: {
          paragraphs: {
            1: 'Projeto sobre MySQL feito durante o módulo de Back-End na graduação da Trybe.',
            2: 'Neste projeto fui capaz de criar o diagrama de relacionamentos e modelar um banco de dados identificando suas entidades, atributos e relacionamentos; aplicar a 1ª, 2ª e 3ª forma normal; criar e alterar tabelas; lidar com VIEWs; criar reações dinâmicas com TRIGGERS.',
          },
        },
      },
      technologies: ['MySQL', 'MySQL Workbench'],
    },

    mySqlVocabularyBooster: {
      name: 'MySQL Vocabulary Booster',
      translation: 'Aprimorador de Vocabulário MySQL',
      path: 'mysql-vocabulary-booster',
      repository:
        'https://github.com/MatheusMartino97/24_sd-09-mysql-vocabulary-booster',
      miniature:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      descriptions: {
        short:
          'Desafios que necessitam de queries mais elaboradas para serem resolvidos.',
        long: {
          paragraphs: {
            1: 'Projeto sobre MySQL feito durante o módulo de Back-End na graduação da Trybe.',
            2: 'Com estes desafios fui capaz de criar condicionais no SQL usando IF e CASE; manipular strings no SQL; usar diversar funções matemáticas do MySQL; extrair informações específicas sobre datas de uma tabela; utilizar funções de agregação como AVG, MIN, MAX, SUM e COUNT; exibir e filtrar dados de forma agrupada com GROUP BY e HAVING; utilizar INNER JOIN, LEFT JOIN, RIGHT JOIN para combinar dados de uma ou mais tabelas; utilizar SELF JOIN para fazer join de uma tabela com ela própria; utilizar SUBQUERIES; ciar queries mais eficientes através do EXISTS; montar blocor de código SQL reutilizáveis com STORED PROCEDURES e STORED FUNCTIONS.',
          },
        },
      },
      technologies: ['MySQL', 'MySQL Workbench'],
    },

    mySqlAllForOne: {
      name: 'MySQL All For One',
      translation: 'MySQL Todos Por Um',
      path: 'mysql-all-for-one',
      repository:
        'https://github.com/MatheusMartino97/23_sd-09-mysql-all-for-one',
      miniature:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      descriptions: {
        short:
          'Queries para encontrar as informações esperadas pelos desafios.',
        long: {
          paragraphs: {
            1: 'Primeiro projeto sobre Back-End feito durante a graduação na Trybe.',
            2: 'Pude praticar minha habilidades em gerar valores e selecionar colunas individualmente com SELECT; renomear e gerar colunas com AS; concatenar colunas e valores com CONCAT; remover dados duplicados em uma consulta com DISTINCT; contar resultados com COUNT; limitar resultados em uma consulta com LIMIT; pular resultados com OFFSET; ordenar com ORDER BY; filtrar com WHERE; utilizar operadores booleanos e relacionais em consultas; criar consultas dinâmicas com LIKE; consultar faixas de resultados com IN e BETWEEN; consultar datas; inserir, atualizar e deletar dados em tabelas com INSERT, UPDATE e DELETE.',
          },
        },
      },
      technologies: ['MySQL', 'MySQL Workbench'],
    },
  },
};

export const skills = [
  {
    skill: 'HTML5',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    description:
      'Linguagem de marcação de texto amplamente utilizada na construção de páginas na Web.',
  },
  {
    skill: 'CSS3',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    description:
      'Linguagem de estilização que define a apresentação e layout dos elementos de uma página na Web.',
  },
  {
    skill: 'JavaScript',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    description:
      'Linguagem de programação utilizada para a criação de conteúdos interativos e dinâmicos para a Web que se atualizam em tempo de execução.',
  },
  {
    skill: 'Jest',
    logo: 'https://i.ibb.co/3sSDC6P/jest.png',
    description:
      'Framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript.',
  },
  {
    skill: 'React',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    description:
      'Uma biblioteca JavaScript para criar interfaces de usuário dinâmicas implementando componentes reutilizaveis.',
  },
  {
    skill: 'Material UI',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
    description:
      'O Material UI é uma biblioteca de componentes React para um desenvolvimento ágil e fácil.',
  },
  {
    skill: 'React Router Dom',
    logo:
      'https://camo.githubusercontent.com/bb743ede87c7763c66f77840f607ae4ef1b778e7fef4bc9accbb84a4e023639e/68747470733a2f2f7365656b6c6f676f2e636f6d2f696d616765732f522f72656163742d726f757465722d6c6f676f2d414235424642363338462d7365656b6c6f676f2e636f6d2e706e67',
    description:
      'O React Router é a biblioteca padrão de roteamento do React que mantém a interface do usuário em sincronia com o valor atual da URL acessada.',
  },
  {
    skill: 'Redux',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    description:
      'Redux é uma biblioteca feita para gerenciar estados em uma aplicação, facilitando o compartilhamento de estados entre componentes React.',
  },
  {
    skill: 'React Testing Library',
    logo:
      'https://camo.githubusercontent.com/aa85cea585880ae694b4fe8dde116d092b8907d6351c71fcd76f00f7586fad72/68747470733a2f2f74657374696e672d6c6962726172792e636f6d2f696d672f6f63746f7075732d313238783132382e706e67',
    description:
      'Um conjunto de utilitários que permitem testar componentes React sem depender dos detalhes de implementação.',
  },
  {
    skill: 'MySQL',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    description:
      'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.',
  },
  {
    skill: 'MongoDB',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    description:
      'MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma.',
  },
  {
    skill: 'Bash',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg',
    description:
      'Interpretador de comandos, um entre os diversos tradutores entre o usuário e o sistema operacional conhecidos como shell.',
  },
  {
    skill: 'Git',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    description:
      'O Git é um sistema open-source de controle de versão utilizado pela grande maioria dos desenvolvedores atualmente.',
  },
  {
    skill: 'GitHub',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
    description:
      'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.',
  },
  {
    skill: 'Linux',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
    description: 'Sistemas operacionais Unix-Like que utilizam o Kernel Linux.',
  },
  {
    skill: 'Ubuntu',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain.svg',
    description:
      'Ubuntu é um sistema operacional de código aberto, construído a partir do núcleo Linux, baseado no Debian e utiliza GNOME como ambiente de desktop.',
  },
  {
    skill: 'Bootstrap',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg',
    description:
      'Um framework web open-source para de interface e front-end para aplicações web usando HTML, CSS e JavaScript.',
  },
  {
    skill: 'Visual Studio Code (VS Code)',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg',
    description:
      'O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS.',
  },
  {
    skill: 'TypeScript',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    description:
      'TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem.',
  },
  {
    skill: 'MongoDB Compass',
    logo: 'https://i.ibb.co/vZcVDXs/mongodb-compass.png',
    description:
      'O MongoDB Compass analisa os documentos e exibe estruturas sofisticadas dentro das coleções por meio de uma GUI intuitiva.',
  },
  {
    skill: 'MySQL Workbench',
    logo: 'https://i.ibb.co/P51zLS5/my-sql-workbench.png',
    description:
      'O MySQL Workbench é uma ferramenta visual de design de banco de dados que integra desenvolvimento, administração, design, criação e manutenção de SQL.',
  },
  {
    skill: 'Node.js',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    description:
      'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',
  },
  {
    skill: 'Node Package Manager',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg',
    description:
      'Node Package Manager (npm) é o gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.js.',
  },
  {
    skill: 'Mocha',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/mocha/mocha-plain.svg',
    description:
      'Um framework de teste JavaScript, que possibilita a cobertura dos testes tanto no back-end quanto no front-end.',
  },
  {
    skill: 'Chai',
    logo: 'https://avatars.githubusercontent.com/u/1515293?s=200&v=4',
    description:
      'Chai visa ser uma forma expressiva e facilmente acessível para escrever asserções para o projeto de testes JavaScript.',
  },
  {
    skill: 'Sinon',
    logo: 'https://sinonjs.org/assets/images/logo.png',
    description:
      'Um pacote open-source que fornece diversas funcionalidades (como mocks, spies e stubs) que facilitam os nossos testes no JavaScript.',
  },
  {
    skill: 'Express',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
    description:
      'Um framework para Node.js que fornece recursos mínimos para construção de servidores web.',
  },
  {
    skill: 'Sass',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    description:
      'Uma linguagem de extensão ao CSS que dá um controle mais profissional e dinâmico para suas folhas de estilo.',
  },
  {
    skill: 'JSON Web Token',
    logo: 'https://i.ibb.co/XjvqGMT/JWT-logo.png',
    description:
      'O JSON Web Token (JWT) é um padrão da Internet para a criação de dados com assinatura opcional e/ou criptografia cujo payload contém o JSON que afirma algum número de declarações.',
  },
  {
    skill: 'Heroku',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-plain.svg',
    description:
      'A Heroku é uma plataforma nuvem que faz deploy de várias aplicações back-end seja para hospedagem, testes em produção ou escalar as suas aplicações.',
  },
  {
    skill: 'Sequelize',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg',
    description:
      'O Sequelize é um ORM (Object-Relational Mapper) baseado em Promise para Node.js e io.js. Suporta vários dialetos e recursos a transação, relacionamentos, replicação de leitura e muito mais.',
  },
  {
    skill: 'Socket.io',
    logo:
      'https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg',
    description:
      'Socket.io é uma biblioteca JavaScript para aplicativos da web em tempo real. Permite comunicação bidirecional em tempo real entre clientes e servidores da Web.',
  },
];

// projectName: {
//   name: '',
//   translation: '',
//   path: '',
//   url: '',
//   repository: '',
//   miniature: '',
//   gifs: {
//     desktop: '',
//     mobile: '',
//   },
//   descriptions: {
//     short: '',
//     long: {
//       paragraphs: {
//         1: '',
//       },
//     },
//   },
//   technologies: [],
//   libraries: [],
//   apis: [],
// },

// {
//   skill: '',
//   logo: '',
//   description: '',
// },
