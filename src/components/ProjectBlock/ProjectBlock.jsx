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
        },
        {
            name: "Rede",
            descricao: "Aplicação full stack inspirada no Twitter, construída com Node.js, React com TypeScript, Redux, MongoDB, JWT e Sass. O sistema oferece criação de postagens, comentários, curtidas em comentários, busca dinâmica de usuários e páginas individuais para cada perfil. A API segue boas práticas de organização e segurança com autenticação JWT, enquanto o front-end utiliza Redux para controle previsível de estado e Sass para estilização modular. O resultado é uma rede social funcional, estável e estruturada, demonstrando integração eficiente entre diversas tecnologias atuais.​",
            github: "https://github.com/Guilherme0112/Rede",
            deploy: "",
            video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395633760316194817?compact=1",
            setarLinkDoVideo: () => { setarLinkDoVideo("https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395633760316194817?compact=1") },
            stackImages: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
                "https://images.archbee.com/PL8X94efBsjvhfQV3wyyj-fMzoU2zBbnzXG5pDzUALe-20250908-073345.png?format=webp",
                "https://img.icons8.com/color/512/sass.png",
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