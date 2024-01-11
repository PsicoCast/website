const posts = {
    podcast: [
      {
        title: "O melhor podcast de tecnologia",
        text: "Neste podcast, discutimos as últimas novidades do mundo da tecnologia.",
        link: "https://www.example.com/podcasts/o-melhor-podcast-de-tecnologia",
        thumbnail: "https://example.com/images/podcast/1.jpg",
        category: "Tecnologia",
        created_at: new Date(),
      },
      {
        title: "Como instalar o WordPress",
        text: "Neste vídeo, mostramos como instalar o WordPress em seu site.",
        link: "https://www.example.com/videos/como-instalar-o-wordpress",
        thumbnail: "https://example.com/images/videos/2.jpg",
        created_at: new Date(),
      },
      {
        title: "O futuro da inteligência artificial",
        text: "Neste artigo, discutimos as últimas tendências da inteligência artificial.",
        link: "https://www.example.com/artigos/o-futuro-da-inteligencia-artificial",
        thumbnail: "https://example.com/images/artigos/3.jpg",
        created_at: new Date(),
      },
      {
        title: "Fale conosco",
        text: "Entre em contato conosco para saber mais sobre nossos produtos e serviços.",
        link: "https://www.example.com/contato",
        thumbnail: "https://example.com/images/contato/4.jpg",
        created_at: new Date(),
      },
      {
        title: "Nossos módulos",
        text: "Conheça nossos módulos personalizados para o seu negócio.",
        link: "https://www.example.com/modulos",
        thumbnail: "https://example.com/images/modulos/5.jpg",
        created_at: new Date(),
      },
    ],
    videos: [
      {
        title: "Como fazer um site",
        text: "Neste vídeo, mostramos como criar um site do zero.",
        link: "https://www.example.com/videos/como-fazer-um-site",
        thumbnail: "https://example.com/images/videos/6.jpg",
        created_at: new Date(),
      },
      {
        title: "Como instalar um plugin no WordPress",
        text: "Neste vídeo, mostramos como instalar um plugin no WordPress.",
        link: "https://www.example.com/videos/como-instalar-um-plugin-no-wordpress",
        thumbnail: "https://example.com/images/videos/7.jpg",
        created_at: new Date(),
      },
      {
        title: "Como usar o Google Analytics",
        text: "Neste vídeo, mostramos como usar o Google Analytics para analisar seu site.",
        link: "https://www.example.com/videos/como-usar-o-google-analytics",
        thumbnail: "https://example.com/images/videos/8.jpg",
        created_at: new Date(),
      },
      {
        title: "Como criar um e-mail marketing",
        text: "Neste vídeo, mostramos como criar um e-mail marketing para promover seu negócio.",
        link: "https://www.example.com/videos/como-criar-um-e-mail-marketing",
        thumbnail: "https://example.com/images/videos/9.jpg",
        created_at: new Date(),
      },
      {
        title: "Como vender online",
        text: "Neste vídeo, mostramos como vender seus produtos ou serviços online.",
        link: "https://www.example.com/videos/como-vender-online",
        thumbnail: "https://example.com/images/videos/10.jpg",
        created_at: new Date(),
      },
    ],
    artigos: [  {
        title: "Como criar um site profissional",
        text: "Um site profissional é essencial para qualquer empresa ou organização que deseja ter sucesso online. Ele fornece uma plataforma para você compartilhar informações sobre seus produtos ou serviços, conectar-se com clientes e parceiros, e construir sua marca.",
        link: "https://www.example.com/artigos/como-criar-um-site-profissional",
        thumbnail: "https://example.com/images/artigos/como-criar-um-site-profissional.jpg",
        created_at: new Date(),
      },
      {
        title: "Como usar as redes sociais para promover seu negócio",
        text: "As redes sociais são uma ótima maneira de promover seu negócio e se conectar com clientes em potencial. Com mais de 4,6 bilhões de pessoas usando as redes sociais, elas oferecem um alcance ilimitado para sua mensagem.",
        link: "https://www.example.com/artigos/como-usar-as-redes-sociais-para-promover-seu-negocio",
        thumbnail: "https://example.com/images/artigos/como-usar-as-redes-sociais-para-promover-seu-negocio.jpg",
        created_at: new Date(),
      },
      {
        title: "Como criar um e-mail marketing eficaz",
        text: "O e-mail marketing é uma forma eficaz de se comunicar com seus clientes e promover seus produtos ou serviços. Com um e-mail marketing eficaz, você pode aumentar o conhecimento da marca, gerar leads e vendas.",
        link: "https://www.example.com/artigos/como-criar-um-e-mail-marketing-eficaz",
        thumbnail: "https://example.com/images/artigos/como-criar-um-e-mail-marketing-eficaz.jpg",
        created_at: new Date(),
      },
      {
        title: "Como aumentar as vendas do seu negócio",
        text: "Toda empresa quer aumentar as vendas, mas nem sempre é fácil saber como fazer isso. Existem muitas estratégias diferentes que você pode usar para aumentar as vendas do seu negócio, e a melhor estratégia para você dependerá das suas necessidades específicas.",
        link: "https://www.example.com/artigos/como-aumentar-as-vendas-do-seu-negocio",
        thumbnail: "https://example.com/images/artigos/como-aumentar-as-vendas-do-seu-negocio.jpg",
        created_at: new Date(),
      },
      {
        title: "Como criar um plano de marketing eficaz",
        text: "Um plano de marketing eficaz é essencial para o sucesso de qualquer empresa. Ele ajuda você a definir seus objetivos, desenvolver estratégias e medir seus resultados.",
        link: "https://www.example.com/artigos/como-criar-um-plano-de-marketing-eficaz",
        thumbnail: "https://example.com/images/artigos/como-criar-um-plano-de-marketing-eficaz.jpg",
        created_at: new Date(),
      },], 
      modulos: [
        {
          title: "Módulo de E-commerce",
          text: "Crie a sua loja online completa e venda seus produtos com facilidade.",
          link: "https://www.example.com/modulos/e-commerce",
          thumbnail: "https://example.com/images/modulos/16.jpg",
          created_at: new Date(),
        },
        {
          title: "Módulo de Blog",
          text: "Crie um blog profissional e compartilhe seu conteúdo com o mundo.",
          link: "https://www.example.com/modulos/blog",
          thumbnail: "https://example.com/images/modulos/17.jpg",
          created_at: new Date(),
        },
        {
          title: "Módulo de Formulários",
          text: "Crie formulários personalizados para coletar dados de seus leads e clientes.",
          link: "https://www.example.com/modulos/formularios",
          thumbnail: "https://example.com/images/modulos/18.jpg",
          created_at: new Date(),
        },
        {
          title: "Módulo de Galeria",
          text: "Crie galerias de fotos e vídeos para showcase seus produtos e serviços.",
          link: "https://www.example.com/modulos/galeria",
          thumbnail: "https://example.com/images/modulos/19.jpg",
          created_at: new Date(),
        },
        {
          title: "Módulo de Agendamento",
          text: "Permita que seus clientes agendem horários diretamente em seu site.",
          link: "https://www.example.com/modulos/agendamento",
          thumbnail: "https://example.com/images/modulos/20.jpg",
          created_at: new Date(),
        },
      ]
    };

    // fazendo PR desenv.

    export default posts;