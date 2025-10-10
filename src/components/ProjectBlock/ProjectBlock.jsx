import { ModalVideo } from "../ModalVideo/ModalVideo";
import Project from "../Project/Project";
import { useState } from "react";

export default function ProjectBlock() {

    const setarLinkDoVideo = (link) => {
        steLinkVideo(link);
    }

    const [linkvideo, steLinkVideo] = useState("");

    const projetos = [
        {
            name: "AdMon",
            descricao: 'Gerenciador financeiro focado em organização pessoal e controle de fluxo de caixa. Permite registrar entradas e saídas de forma detalhada, categorizando cada transação para facilitar a análise. Oferece um dashboard intuitivo que apresenta gráficos e indicadores atualizados em tempo real, facilitando a visualização clara do comportamento financeiro ao longo do mês. Com funcionalidades que auxiliam no planejamento, o sistema ajuda o usuário a identificar padrões de gastos, prever despesas futuras e tomar decisões mais informadas para melhorar a saúde financeira. A interface é simples e objetiva, priorizando a usabilidade para que o gerenciamento seja ágil e eficiente.​',
            github: "",
            deploy: "",
            stackImages: [
                "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            ]
        },
        {
            name: "Verval",
            descricao: 'Gerenciador de validade focado em comerciantes que precisam controlar produtos com datas de vencimento próximas. Permite cadastrar detalhadamente os produtos, incluindo informações essenciais para monitoramento eficiente. O sistema envia alertas preventivos, garantindo que o usuário seja avisado antes que os produtos expirem, evitando perdas e facilitando a rotatividade do estoque. A interface combina agilidade e clareza, possibilitando consultas rápidas e gestão precisa do inventário, otimizando a organização e a tomada de decisão no comércio.​​',
            github: "",
            deploy: "",
            stackImages: [
                "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
                "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            ]
        },
        {
            name: "ConfeitaAqui",
            descricao: 'Aplicação web robusta voltada para o segmento de confeitarias, oferecendo funcionalidades para cadastro detalhado de estabelecimentos e seus produtos. A interface foi pensada para ser moderna e intuitiva, facilitando a navegação e o uso tanto para administradores quanto para usuários finais. Um diferencial importante é a integração com mapas, que permite ao usuário localizar as confeitarias mais próximas à sua posição atual, tornando a experiência mais prática e direcionada. O sistema atende tanto às necessidades de gestão quanto à usabilidade, garantindo eficiência e satisfação no uso diário.​',
            github: "",
            deploy: "",
            video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7323866404384919552?compact=1",
            setarLinkDoVideo: () => { setarLinkDoVideo("https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7323866404384919552?compact=1") },
            stackImages: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
                "https://avatars.githubusercontent.com/u/47703742?s=280&v=4",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
            ]
        },
        {
            name: "Curriculados",
            descricao: 'Plataforma prática e acessível para criação rápida de currículos personalizados. O usuário escolhe entre diversos modelos pré-formatados e simplesmente preenche um formulário com suas informações, que são automaticamente inseridas no template selecionado. O sistema simplifica o processo de elaboração do currículo, eliminando a necessidade de conhecimento técnico em design ou formatação, garantindo um resultado profissional com pouco esforço. Ideal para quem busca agilidade e qualidade na apresentação do seu perfil profissional.​​',
            github: "",
            deploy: "",
            stackImages: [
                "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", // PHP
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", // Laravel
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" // MySQL
            ]
        },
        {
            name: "FutOne",
            descricao: 'Portal de notícias focado no universo dos games, que permite aos usuários criar postagens contendo imagem, título e texto, fomentando uma comunidade ativa e participativa. A interface implementa rolagem infinita por meio da Fetch API, garantindo uma navegação fluida e contínua sem recarregamento da página. O sistema é pensado para oferecer uma experiência dinâmica e envolvente, facilitando o acesso a conteúdos atualizados e promovendo interação constante entre os usuários.​',
            github: "",
            deploy: "",
            stackImages: [
                "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", // Node.js
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", // Express.js
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" // MySQL
            ]
        },
        {
            name: "ComPrei",
            descricao: 'Plataforma de e-commerce funcional que oferece recursos essenciais como cadastro de produtos, painel administrativo para gerenciamento e um sistema de carrinho de compras intuitivo. A integração com o gateway de pagamento Mercado Pago possibilita transações seguras e práticas diretamente na loja, facilitando a finalização das compras. O sistema é estruturado para suportar operações básicas de comércio eletrônico, atendendo tanto às necessidades dos administradores quanto dos clientes com uma experiência simples e eficiente.',
            github: "",
            deploy: "",
            stackImages: [
                "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", // Java
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", // Spring
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
                "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
            ]
        },
        {
            name: "DashFreela",
            descricao: 'Dashboard pensado para freelancers que precisam gerenciar seus serviços de forma organizada e eficiente. A interface é clara e responsiva, facilitando a visualização e o controle das tarefas em andamento. O sistema permite cadastrar, acompanhar e atualizar projetos, ajudando no planejamento e no cumprimento de prazos. A combinação de tecnologias garante um desempenho estável e uma experiência de uso fluida, atendendo às demandas específicas do trabalho autônomo.​',
            github: "",
            deploy: "",
            stackImages: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", // HTML5
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", // CSS3    
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", // Bootstrap
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", // JavaScript
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", // PHP
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" // MySQL
            ]
        },
        {
            name: "ControlAccess",
            descricao: 'Sistema para gestão de correspondências que centraliza o cadastro e o monitoramento dos recebimentos. O administrador registra as correspondências e aciona notificações por e-mail para os usuários envolvidos, mantendo-os informados. Os clientes podem acessar a plataforma para visualizar os registros e autorizar a abertura da correspondência, garantindo controle e transparência no processo. Após a autorização, o administrador anexa o conteúdo digitalizado, que gera automaticamente uma nova notificação para o usuário, fechando o ciclo de comunicação de forma eficiente e segura.​',
            github: "",
            deploy: "",
            video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7348174085983502336?compact=1",
            setarLinkDoVideo: () => { setarLinkDoVideo("https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7348174085983502336?compact=1") },
            stackImages: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png",
                "https://avatars.githubusercontent.com/u/47703742?s=280&v=4",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
                "https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
            ]
        },
        {
            name: "DashTask",
            descricao: "Um gerenciador de frotas que permite controlar facilmente as frotas cadastradas pelo usuário. É possível definir o valor cobrado por quilômetro rodado, ajustando a cobrança conforme a necessidade. O sistema oferece um dashboard organizado em colunas que mostram entradas e saídas, facilitando a visualização e o acompanhamento financeiro. A interface é simples e funcional, auxiliando na gestão eficiente e na tomada de decisões baseadas em dados claros e atualizados.​",
            github: "",
            deploy: "",
            video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7329623364786982913?compact=1",
            setarLinkDoVideo: () => { setarLinkDoVideo("https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7329623364786982913?compact=1") },
            stackImages: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
                "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
            ]
        }
    ];

    return (
        <>
            {projetos.map((projeto, index) => (
                <Project
                    key={index}
                    name={projeto.name}
                    descricao={projeto.descricao}
                    github={projeto.github}
                    deploy={projeto.deploy}
                    video={projeto.video}
                    setarLinkDoVideo={projeto.setarLinkDoVideo}
                    stackImages={projeto.stackImages}
                />
            ))}

            {linkvideo && (<ModalVideo videoUrl={linkvideo} onClose={() => setarLinkDoVideo("")} />)}
        </>
    )
}