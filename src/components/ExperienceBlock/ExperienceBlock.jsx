import Experience from "../Experience/Experience";
import style from "./ExperienceBlock.module.css";

export default function ExperienceBlock() {

    const experiencias = [
           {
            empresa: "Athena Office",
            cargo: "Desenvolvedor Web Júnior",
            periodo: "Nov 2025 - atual",
            descricao: "Durante minha atuação como Dev. Júnior na Athena Office, desenvolvi e mantive sistemas internos utilizando Laravel, MongoDB e Vue.js, garantindo maior estabilidade e desempenho das plataformas. Também trabalhei com Docker para padronizar ambientes e facilitar o processo de deploy, além de contribuir para a otimização de fluxos internos e aumento da eficiência das operações.",
            lado: "left"
        },
        {
            empresa: "Athena Office",
            cargo: "Estágio em Desenvolvimento de Software",
            periodo: "Fev 2025 - Nov 2025",
            descricao: "Na Athena Office, atuei no desenvolvimento e manutenção de sistemas internos utilizando Laravel e Vue.js, contribuindo para a evolução e estabilidade das plataformas da empresa. Além disso, desenvolvi automações de processos utilizando Python e Make (antigo Integromat), otimizando fluxos operacionais e reduzindo tarefas manuais, o que gerou ganho de produtividade para diversas áreas.",
            lado: "right"
        },
        {
            empresa: "Freelancer",
            cargo: "Desenvolvedor Full Stack",
            periodo: "",
            descricao: "Desenvolvi diversos projetos como freelancer, atuando em diferentes áreas e tecnologias, mas o destaque foi o desenvolvimento de um ERP voltado para gráficas, focado em otimizar a gestão dos processos internos dessas empresas. O sistema permite cadastro detalhado de clientes, orçamentos, pedidos e controle de produção, facilitando o acompanhamento de cada etapa. Com dashboards que exibem dados em tempo real, oferece visibilidade clara sobre prazos, custos e status dos pedidos para decisões ágeis. Atuei em todas as etapas do desenvolvimento Full Stack, da modelagem do banco ao front-end, usando principalmente React, Spring Framework e PostgreSQL. Sempre busquei entregar soluções modernas, escaláveis e de alta performance, alinhadas às necessidades dos clientes.",
            lado: "left"
        }
    ]

    return (
        <div className={style.experienceBlock}>
            {experiencias.map((exp, index) => (
                <Experience
                    key={index}
                    empresa={exp.empresa}
                    cargo={exp.cargo}
                    periodo={exp.periodo}
                    descricao={exp.descricao}
                    lado={exp.lado}
                />
            ))}

        </div>
    );
}
