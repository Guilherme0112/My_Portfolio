import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Mail,
  Download,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";
import {
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiReact,
  SiPhp,
  SiLaravel,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiApachekafka,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { FaGithub, FaJava, FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import ProjectVideo from "@/components/ProjectVideo";


const skills = [
  { name: "Tailwind", icon: SiTailwindcss, category: "CSS" },
  { name: "TypeScript", icon: SiTypescript, category: "Linguagem" },
  { name: "JavaScript", icon: SiJavascript, category: "Linguagem" },
  { name: "Vue.js", icon: SiVuedotjs, category: "Framework" },
  { name: "React", icon: SiReact, category: "Framework" },
  { name: "PHP", icon: SiPhp, category: "Linguagem" },
  { name: "Laravel", icon: SiLaravel, category: "Framework" },
  { name: "Java", icon: FaJava, category: "Linguagem" },
  { name: "Spring", icon: SiSpring, category: "Framework" },
  { name: "MySQL", icon: SiMysql, category: "Banco de Dados" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Banco de Dados" },
  { name: "MongoDB", icon: SiMongodb, category: "Banco de Dados" },
  { name: "Apache Kafka", icon: SiApachekafka, category: "Ferramentas" },
  { name: "Git", icon: SiGit, category: "Ferramentas" },
  { name: "Docker", icon: SiDocker, category: "Ferramentas" },
];

const experiences = [
  {
    title: "Desenvolvedor Web Júnior",
    company: "Athena Office",
    period: "Nov 2025 - Atual",
    description:
      "Atuei como Desenvolvedor Júnior com foco em Laravel e Vue.js (TypeScript), participando ativamente da manutenção e evolução de sistemas em produção, desde a modelagem de entidades até a definição de regras de negócio e fluxos operacionais. Implementei processos assíncronos com filas para rotinas críticas, como emissão de notas fiscais e disparo de e-mails, integrei APIs externas e soluções de IA para automação de conteúdo em WordPress, e utilizei Docker para padronização de ambientes e melhoria do fluxo de deploy, garantindo maior estabilidade, escalabilidade e qualidade técnica das aplicações.",
  },
  {
    title: "Estágio em Desenvolvimento de Software",
    company: "Athena Office",
    period: "Fev 2025 - Nov 2025",
    description:
      "Automatizei processos internos utilizando Python e Make (Integromat), reduzindo significativamente o tempo gasto em tarefas repetitivas e permitindo que a equipe focasse em atividades estratégicas. Atuei também na manutenção e evolução de sistemas internos com Vue.js, PHP e Laravel, corrigindo bugs, implementando melhorias contínuas e otimizando a experiência do usuário e fluxos operacionais.",
  },
  {
    title: "Desenvolvedor Full Stack",
    company: "Freelancer",
    period: "",
    description:
      "Desenvolvi uma aplicação Full Stack para um ERP de gráficas utilizando Spring e React, estruturada em uma arquitetura monolítica modular, com funcionalidades de cadastro de clientes, orçamentos e pedidos, anexação e gerenciamento de arquivos e acompanhamento financeiro em tempo real. Integrei a aplicação com AWS S3 para armazenamento de arquivos, utilizei React Query para cache e sincronização eficiente de dados no front-end e implementei índices no banco de dados para otimização de consultas críticas, resultando em melhor desempenho, escalabilidade e eficiência operacional.",
  },
];

const projects = [
  {
    name: "AdMon",
    description:
      "Gerenciador financeiro focado em organização pessoal e controle de fluxo de caixa. Permite registrar entradas e saídas de forma detalhada, categorizando cada transação para facilitar a análise. Oferece um dashboard intuitivo que apresenta gráficos e indicadores atualizados em tempo real, facilitando a visualização clara do comportamento financeiro ao longo do mês. Com funcionalidades que auxiliam no planejamento, o sistema ajuda o usuário a identificar padrões de gastos, prever despesas futuras e tomar decisões mais informadas para melhorar a saúde financeira. A interface é simples e objetiva, priorizando a usabilidade para que o gerenciamento seja ágil e eficiente.",
    tags: ["React", "Dashboard", "Finanças"],
    links: { repo: "https://github.com/Guilherme0112/AdMon", demo: "#", video:  "#" },
  },
  {
    name: "ConfeitaAqui",
    description:
      "Aplicação web robusta voltada para o segmento de confeitarias, oferecendo funcionalidades para cadastro detalhado de estabelecimentos e seus produtos. A interface foi pensada para ser moderna e intuitiva, facilitando a navegação e o uso tanto para administradores quanto para usuários finais. Um diferencial importante é a integração com mapas, que permite ao usuário localizar as confeitarias mais próximas à sua posição atual, tornando a experiência mais prática e direcionada. O sistema atende tanto às necessidades de gestão quanto à usabilidade, garantindo eficiência e satisfação no uso diário.",
    tags: ["Web App", "Mapas", "E-commerce"],
    links: { repo: "https://github.com/Guilherme0112/ConfeitaAqui", demo: "#", video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7323866404384919552?compact=1" },
  },
  {
    name: "FutOne",
    description:
      "Portal de notícias focado no universo dos games, que permite aos usuários criar postagens contendo imagem, título e texto, fomentando uma comunidade ativa e participativa. A interface implementa rolagem infinita por meio da Fetch API, garantindo uma navegação fluida e contínua sem recarregamento da página. O sistema é pensado para oferecer uma experiência dinâmica e envolvente, facilitando o acesso a conteúdos atualizados e promovendo interação constante entre os usuários.",
    tags: ["Portal", "Comunidade", "Fetch API"],
    links: { repo: "https://github.com/Guilherme0112/FutOne", demo: "#", video:  "#" },
  },
  {
    name: "ComPrei",
    description:
      "Plataforma de e-commerce funcional que oferece recursos essenciais como cadastro de produtos, painel administrativo para gerenciamento e um sistema de carrinho de compras intuitivo. A integração com o gateway de pagamento Mercado Pago possibilita transações seguras e práticas diretamente na loja, facilitando a finalização das compras. O sistema é estruturado para suportar operações básicas de comércio eletrônico, atendendo tanto às necessidades dos administradores quanto dos clientes com uma experiência simples e eficiente.",
    tags: ["E-commerce", "Pagamentos", "Admin"],
    links: { repo: "https://github.com/Guilherme0112/ComPrei", demo: "#", video:  "#" },
  },
  {
    name: "ControlAccess",
    description:
      "Sistema para gestão de correspondências que centraliza o cadastro e o monitoramento dos recebimentos. O administrador registra as correspondências e aciona notificações por e-mail para os usuários envolvidos, mantendo-os informados. Os clientes podem acessar a plataforma para visualizar os registros e autorizar a abertura da correspondência, garantindo controle e transparência no processo. Após a autorização, o administrador anexa o conteúdo digitalizado, que gera automaticamente uma nova notificação para o usuário, fechando o ciclo de comunicação de forma eficiente e segura.",
    tags: ["Gestão", "Email", "Notificações"],
    links: { repo: "https://github.com/Guilherme0112/ControlAccess", demo: "#", video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7348174085983502336?compact=1" },
  },
  {
    name: "DashTask",
    description:
      "Um gerenciador de frotas que permite controlar facilmente as frotas cadastradas pelo usuário. É possível definir o valor cobrado por quilômetro rodado, ajustando a cobrança conforme a necessidade. O sistema oferece um dashboard organizado em colunas que mostram entradas e saídas, facilitando a visualização e o acompanhamento financeiro. A interface é simples e funcional, auxiliando na gestão eficiente e na tomada de decisões baseadas em dados claros e atualizados.",
    tags: ["Frotas", "Dashboard", "Gestão"],
    links: { repo: "https://github.com/Guilherme0112/DashTask", demo: "#", video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7329623364786982913?compact=1" },
  },
  {
    name: "Rede",
    description:
      "Aplicação full stack inspirada no Twitter, construída com Node.js, React com TypeScript, Redux, MongoDB, JWT e Sass. O sistema oferece criação de postagens, comentários, curtidas em comentários, busca dinâmica de usuários e páginas individuais para cada perfil. A API segue boas práticas de organização e segurança com autenticação JWT, enquanto o front-end utiliza Redux para controle previsível de estado e Sass para estilização modular. O resultado é uma rede social funcional, estável e estruturada, demonstrando integração eficiente entre diversas tecnologias atuais.",
    tags: ["Social", "Full Stack", "Real-time"],
    links: { repo: "https://github.com/Guilherme0112/Rede", demo: "#", video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7395633760316194817?compact=1" },
  },
];

const education = [
  {
    title: "API - Application Programming Interface",
    institution: "DevMedia",
    date: "Julho de 2024",
    link: "https://www.devmedia.com.br/certificado/conclusao/?id=179442",
  },
  {
    title: "Sistemas para Internet",
    institution: "UNIPÊ - Centro Universitário de João Pessoa",
    date: "Janeiro de 2024 - Em andamento",
    link: "#",
  },
  {
    title: "Curso de Programação Orientada a Objetos com PHP",
    institution: "DevMedia",
    date: "Julho de 2024",
    link: "https://www.devmedia.com.br/certificado/conclusao/?id=179219",
  },
  {
    title: "Primeiros passos com o Docker",
    institution: "DevMedia",
    date: "Janeiro de 2025",
    link: "https://www.devmedia.com.br/certificado/conclusao/?id=183833",
  },
  {
    title: "Básico de Java e Orientação a Objetos",
    institution: "DevMedia",
    date: "Dezembro de 2024",
    link: "https://www.devmedia.com.br/certificado/unificado/java/guilherme-gomes-20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Home() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const { theme, toggleTheme } = useTheme();
  const email = "guimendesmen124@gmail.com";
  const github = "https://github.com/Guilherme0112";
  const linkedin = "https://www.linkedin.com/in/guilherme-mendes-gomes";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="font-bold text-lg text-foreground ml-6 w-8"></div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-sm hover:text-accent transition-colors"
            >
              Sobre
            </a>
            <a
              href="#skills"
              className="text-sm hover:text-accent transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm hover:text-accent transition-colors"
            >
              Experiência
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-accent transition-colors"
            >
              Projetos
            </a>
            <a
              href="#education"
              className="text-sm hover:text-accent transition-colors"
            >
              Estudos
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground hover:text-accent"
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="gap-2 border-accent text-accent hover:bg-accent/10"
            >
              <a href="/Guilherme_Mendes_Gomes.pdf" download="Guilherme_Mendes_Gomes.pdf" className="inline-flex items-center gap-2">
                <Download size={16} />
                <span className="hidden sm:inline">CV</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)",
            }}
          />
        </div>

        <motion.div
          className="container relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Guilherme Mendes
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por resolver problemas através
              da programação. Curiosidade, lógica e transformação de ideias em
              soluções reais.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                size="lg"
                onClick={() => window.location.href = `mailto:${email}`}
              >
                <Mail size={18} />
                Entrar em Contato
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 gap-2"
                onClick={() => window.location.href = github}
              >
                <FaGithub size={18} />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 gap-2"
                onClick={() => window.location.href = linkedin}
              >
                <FaLinkedin size={18} />
                LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-accent" size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            Sobre Mim
          </h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            Sou um desenvolvedor full stack com paixão genuína por resolver
            problemas através da programação. Programar é algo que realmente me
            motiva. Gosto do desafio, da lógica e da possibilidade de
            transformar ideias em soluções reais. Sou uma pessoa muito curiosa,
            estou sempre buscando entender como as coisas funcionam por trás dos
            bastidores, o que me leva a aprender constantemente novas
            ferramentas, linguagens e conceitos. Tenho facilidade para aprender
            e me adaptar a novas tecnologias, o que me ajuda a evoluir
            rapidamente em projetos e equipes. Estou sempre pronto para
            encarar novos desafios e crescer como desenvolvedor.
          </motion.p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-border bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-foreground">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-4 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <IconComponent className="w-8 h-8 mx-auto mb-2 text-accent group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {skill.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {skill.category}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 border-t border-border">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            Experiência
          </h2>
          <div className="space-y-4 max-w-3xl">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="border-l-2 border-accent pl-6 py-4 cursor-pointer hover:pl-8 transition-all"
                variants={itemVariants}
                onClick={() =>
                  setExpandedExp(expandedExp === idx ? null : idx)
                }
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <p className="text-sm text-gray-400">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-border bg-secondary/30">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-foreground">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.links.repo}
                    className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 text-sm"
                  >
                    <FaGithub size={16} />
                    Repositório
                  </a>
                  {project.links.demo  != "#" && (
                    <a
                      href={project.links.demo}
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {project.links.video != "#" && (
                    <ProjectVideo videoUrl={project.links.video} title={project.name} />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 border-t border-border">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold mb-12 text-foreground">Estudos</h2>
          <div className="space-y-4 max-w-3xl">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="border-l-2 border-accent pl-6 py-4 hover:pl-8 transition-all"
                variants={itemVariants}
              >
                <h3 className="text-lg font-bold text-foreground">
                  {edu.title}
                </h3>
                <p className="text-accent font-semibold">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.date}</p>
                {edu.link != "#" && (
                  <a
                    href={edu.link}
                    className="text-accent hover:text-accent/80 transition-colors text-sm mt-2 inline-flex items-center gap-1"
                  >
                    Ver certificado <ExternalLink size={14} />
                  </a>
                )
                }
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-border bg-accent/5">
        <motion.div
          className="container text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Vamos Trabalhar Juntos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estou aberto a novas oportunidades, desafios e colaborações. Entre
            em contato comigo através de qualquer um dos canais abaixo.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
            >
                <a
                  href={`mailto:${email}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `mailto:${email}`;
                  }}
                  className="inline-flex items-center gap-2"
                >
                  <Mail size={18} />
                  Email
                </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 gap-2"
              onClick={() => window.location.href = github}
            >
              <FaGithub size={18} />
              GitHub
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-secondary/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 Guilherme Mendes. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
