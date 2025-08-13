import './App.css';
import Header from './components/Header';
import FadeInSection from './components/FadeInSection';
import About from './components/About';
import Skill from './components/Skills';
import Project from './components/Project';
import Studies from './components/Studies';
import Experience from './components/Experience';
import style from "./css/Components.module.css";
import ShootingStars from './components/ShootingStarts';

function App() {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = 'Guilherme_Mendes_Gomes.pdf';
    link.download = 'Guilherme_Mendes_Gomes.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (

    <>
      <ShootingStars />
      <FadeInSection>

        <Header />

        <main style={{ marginTop: "120px" }}>
          <div style={{ display: "flex", width: "100%", justifyContent: "space-around", margin: "60px 0" }}>
            <div>
              <button className={style.gradient_border_button} onClick={downloadCV}>Baixar CV</button>
            </div>
          </div>

          <About />

          <section id='skills' style={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>

            <div style={{ width: "100%", margin: "20px 0" }}>
              <h1>Skills</h1>
            </div>

            <div style={{ maxWidth: "1200px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
              <Skill image="https://www.svgrepo.com/show/374118/tailwind.svg" name="Tailwind" />
              <Skill image="https://th.bing.com/th/id/R.7321a5c4e2a5df026a063e326b36bfe9?rik=WMGH49RNFxeF%2bQ&pid=ImgRaw&r=0" name="Bootstrap" />
              <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" name="JavaScript" />
              <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" name="React" />
              <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" name="PHP" />
              <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" name="Laravel" />
              <Skill image="https://impactclient.net/img/java-icon.png" name="Java" />
              <Skill image="https://cdn.worldvectorlogo.com/logos/spring-3.svg" name="Spring" />
              <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" name="MySQL" />
              <Skill image="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" name="PostgreSQL" />
              <Skill image="https://www.svgrepo.com/show/354202/postman-icon.svg" name="Postman" />
              <Skill image="https://svn.apache.org/repos/asf/kafka/site/logos/originals/png/ICON%20-%20White%20on%20Transparent.png" name="Apache Kafka" />
              <Skill image="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253808/git-icon-icon-md.png" name="Git" />
              <Skill image="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" name="Docker" />
            </div>
          </section>

          <section id='experiencias'>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <h1>Experiências</h1>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "start" }}>
              <Experience
                empresa="Athena Office"
                cargo="Estagiário de TI"
                periodo="02/2025 - atual"
                descricao="Na Athena Office, atuei no desenvolvimento e manutenção de sistemas internos utilizando Laravel e Vue.js, 
            contribuindo para a evolução e estabilidade das plataformas da empresa. Além disso, desenvolvi automações de processos 
            utilizando Python e Make (antigo Integromat), otimizando fluxos operacionais e reduzindo tarefas manuais, o que gerou ganho
            de produtividade para diversas áreas." />

              <Experience
                empresa="Freelancer"
                cargo="Desenvolvedor Full Stack"
                periodo="05/2025 - atual"
                descricao="Desenvolvi diversos projetos como freelancer, atuando em diferentes áreas e tecnologias, mas o destaque foi o desenvolvimento de um ERP voltado para gráficas, focado em otimizar a gestão dos processos internos dessas empresas. O sistema permite cadastro detalhado de clientes, orçamentos, pedidos e controle de produção, facilitando o acompanhamento de cada etapa. Com dashboards que exibem dados em tempo real, oferece visibilidade clara sobre prazos, custos e status dos pedidos para decisões ágeis. Atuei em todas as etapas do desenvolvimento Full Stack, da modelagem do banco ao front-end, usando principalmente React, Spring Framework e PostgreSQL. Sempre busquei entregar soluções modernas, escaláveis e de alta performance, alinhadas às necessidades dos clientes." />
            </div>
          </section>

          <section id='projetos'>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <h1>Projetos</h1>
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "start" }}>
              <Project name="AdMon"
                descricao='Gerenciador financeiro focado em organização pessoal e controle de fluxo de caixa. Permite registrar entradas e saídas de forma detalhada, categorizando cada transação para facilitar a análise. Oferece um dashboard intuitivo que apresenta gráficos e indicadores atualizados em tempo real, facilitando a visualização clara do comportamento financeiro ao longo do mês. Com funcionalidades que auxiliam no planejamento, o sistema ajuda o usuário a identificar padrões de gastos, prever despesas futuras e tomar decisões mais informadas para melhorar a saúde financeira. A interface é simples e objetiva, priorizando a usabilidade para que o gerenciamento seja ágil e eficiente.​'
                github="https://github.com/Guilherme0112/AdMon"
                deploy=""
                stackImages={[
                  "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                  "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                ]}
              />
              <Project name="Verval"
                descricao='Gerenciador de validade focado em comerciantes que precisam controlar produtos com datas de vencimento próximas. Permite cadastrar detalhadamente os produtos, incluindo informações essenciais para monitoramento eficiente. O sistema envia alertas preventivos, garantindo que o usuário seja avisado antes que os produtos expirem, evitando perdas e facilitando a rotatividade do estoque. A interface combina agilidade e clareza, possibilitando consultas rápidas e gestão precisa do inventário, otimizando a organização e a tomada de decisão no comércio.​​'
                github="https://github.com/Guilherme0112/Verval"
                deploy=""
                stackImages={[
                  "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
                  "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                ]} />
              <Project name="ConfeitaAqui"
                descricao='Aplicação web robusta voltada para o segmento de confeitarias, oferecendo funcionalidades para cadastro detalhado de estabelecimentos e seus produtos. A interface foi pensada para ser moderna e intuitiva, facilitando a navegação e o uso tanto para administradores quanto para usuários finais. Um diferencial importante é a integração com mapas, que permite ao usuário localizar as confeitarias mais próximas à sua posição atual, tornando a experiência mais prática e direcionada. O sistema atende tanto às necessidades de gestão quanto à usabilidade, garantindo eficiência e satisfação no uso diário.​'
                github="https://github.com/Guilherme0112/ConfeitaAqui"
                deploy=""
                stackImages={[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
                  "https://avatars.githubusercontent.com/u/47703742?s=280&v=4",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                  "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
                ]}
              />
              <Project name="Curriculados"
                descricao='Plataforma prática e acessível para criação rápida de currículos personalizados. O usuário escolhe entre diversos modelos pré-formatados e simplesmente preenche um formulário com suas informações, que são automaticamente inseridas no template selecionado. O sistema simplifica o processo de elaboração do currículo, eliminando a necessidade de conhecimento técnico em design ou formatação, garantindo um resultado profissional com pouco esforço. Ideal para quem busca agilidade e qualidade na apresentação do seu perfil profissional.​​'
                github="https://github.com/Guilherme0112/Curriculados"
                deploy=""
                stackImages={[
                  "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", // PHP
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", // Laravel
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" // MySQL
                ]}
              />
              <Project name="FutOne"
                descricao='Portal de notícias focado no universo dos games, que permite aos usuários criar postagens contendo imagem, título e texto, fomentando uma comunidade ativa e participativa. A interface implementa rolagem infinita por meio da Fetch API, garantindo uma navegação fluida e contínua sem recarregamento da página. O sistema é pensado para oferecer uma experiência dinâmica e envolvente, facilitando o acesso a conteúdos atualizados e promovendo interação constante entre os usuários.​'
                github="https://github.com/Guilherme0112/FutOne"
                deploy=""
                stackImages={[
                  "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", // Node.js
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", // Express.js
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" // MySQL
                ]}

              />
              <Project name="ComPrei"
                descricao='Plataforma de e-commerce funcional que oferece recursos essenciais como cadastro de produtos, painel administrativo para gerenciamento e um sistema de carrinho de compras intuitivo. A integração com o gateway de pagamento Mercado Pago possibilita transações seguras e práticas diretamente na loja, facilitando a finalização das compras. O sistema é estruturado para suportar operações básicas de comércio eletrônico, atendendo tanto às necessidades dos administradores quanto dos clientes com uma experiência simples e eficiente.'
                github="https://github.com/Guilherme0112/ComPrei"
                deploy=""
                stackImages={[
                  "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", // Java
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", // Spring
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
                  "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
                ]}

              />
              <Project name="DashFreela"
                descricao='Dashboard pensado para freelancers que precisam gerenciar seus serviços de forma organizada e eficiente. A interface é clara e responsiva, facilitando a visualização e o controle das tarefas em andamento. O sistema permite cadastrar, acompanhar e atualizar projetos, ajudando no planejamento e no cumprimento de prazos. A combinação de tecnologias garante um desempenho estável e uma experiência de uso fluida, atendendo às demandas específicas do trabalho autônomo.​'
                github="https://github.com/Guilherme0112/ComPrei"
                deploy=""
                stackImages={[
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", // HTML5
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", // CSS3
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", // Bootstrap
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", // JavaScript
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", // PHP
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" // MySQL
                ]}

              />
              <Project name="ControlAccess"
                descricao='Sistema para gestão de correspondências que centraliza o cadastro e o monitoramento dos recebimentos. O administrador registra as correspondências e aciona notificações por e-mail para os usuários envolvidos, mantendo-os informados. Os clientes podem acessar a plataforma para visualizar os registros e autorizar a abertura da correspondência, garantindo controle e transparência no processo. Após a autorização, o administrador anexa o conteúdo digitalizado, que gera automaticamente uma nova notificação para o usuário, fechando o ciclo de comunicação de forma eficiente e segura.​'
                github="https://github.com/Guilherme0112/ControlAccess"
                deploy=""
                stackImages={[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png",
                  "https://avatars.githubusercontent.com/u/47703742?s=280&v=4",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
                  "https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
                ]}

              />
              <Project name="DashTask"
                descricao='Um gerenciador de frotas que permite controlar facilmente as frotas cadastradas pelo usuário. É possível definir o valor cobrado por quilômetro rodado, ajustando a cobrança conforme a necessidade. O sistema oferece um dashboard organizado em colunas que mostram entradas e saídas, facilitando a visualização e o acompanhamento financeiro. A interface é simples e funcional, auxiliando na gestão eficiente e na tomada de decisões baseadas em dados claros e atualizados.​'
                github="https://github.com/Guilherme0112/DashTask"
                deploy=""
                stackImages={[
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                  "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
                  "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
                ]}

              />
            </div>
          </section>

          <section id='estudos'>
            <div style={{ width: "100%", margin: "20px 0" }}>
              <h1>Estudos</h1>
            </div>

            <div style={{ maxWidth: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
              <Studies cursoP="Application Programming Interface"
                unidadeP="DevMedia"
                periodoP="Julho de 2024" />
              <Studies cursoP="Sistemas para Internet"
                unidadeP="UNIPÊ"
                periodoP="Janeiro de 2024 - em andamento" />
              <Studies cursoP="PHP POO"
                unidadeP="DevMedia"
                periodoP="Julho de 2024" />
              <Studies cursoP="Docker"
                unidadeP="DevMedia"
                periodoP="Janeiro de 2025" />
            </div>
          </section>

        </main>

      </FadeInSection>
    </>
  );
}

export default App;
