import './App.css';
import Header from './components/Header';
import FadeInSection from './components/FadeInSection';
import About from './components/About';
import Skill from './components/Skills';
import Studies from './components/Studies';
import Project from './components/Project';
import style from "./css/Components.module.css";

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
            <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" name="HTML" />
            <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" name="CSS" />
            <Skill image="https://th.bing.com/th/id/R.7321a5c4e2a5df026a063e326b36bfe9?rik=WMGH49RNFxeF%2bQ&pid=ImgRaw&r=0" name="Bootstrap" />
            <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" name="JavaScript" />
            <Skill image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" name="React" />
            <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" name="PHP" />
            <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" name="Laravel" />
            <Skill image="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" name="NodeJS" />
            <Skill image="https://seekvectors.com/files/download/234b110fb32958f68f318e13c7a0610e.png" name="ExpressJS" />
            <Skill image="https://impactclient.net/img/java-icon.png" name="Java" />
            <Skill image="https://cdn.worldvectorlogo.com/logos/spring-3.svg" name="Spring" />
            <Skill image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" name="MySQL" />
            <Skill image="https://www.svgrepo.com/show/354202/postman-icon.svg" name="Postman" />
            <Skill image="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253808/git-icon-icon-md.png" name="Git" />
            <Skill image="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" name="Docker" />
          </div>
        </section>

        <section id='projetos'>
          <div style={{ width: "100%", margin: "20px 0" }}>
            <h1>Projetos</h1>
          </div>
              
          <div style={{ maxWidth: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <Project name="AdMon"
                     descricao='Um gerenciador de validade para comerciantes, onde é possível cadastrar os dados dos produtos e receber 
                     avisos quando os produtos estiverem próximos do vencimento. Desenvolvido em Java com Spring.​' 
                     github="https://github.com/Guilherme0112/AdMon"
                     deploy="" /> 
            <Project name="Verval"
                     descricao='Um gerenciador de validade para comerciantes, onde é possível cadastrar os dados dos 
                     produtos e receber avisos quando os produtos estiverem próximos do vencimento. Desenvolvido em Java com Spring e NextJS.​​' 
                     github="https://github.com/Guilherme0112/Verval"
                     deploy="" /> 
            <Project name="Curriculados"
                     descricao='Plataforma que permite criar currículos de maneira fácil e prática. Oferece vários modelos pré-definidos, onde
                      o usuário apenas insere as informações desejadas no formulário ee depois é renderizada nos templates. Desenvolvido em PHP com Laravel.​​' 
                     github="https://github.com/Guilherme0112/Curriculados"
                     deploy="" /> 
            <Project name="FutOne"
                     descricao='Projeto de portal de notícias sobre games, onde os usuários podem fazer postagens inserindo uma imagem, um título e o conteúdo.
                     Também foi feito o uso do Fecth API para possibilitar a rolagem infinita na tela de início, foi feito com NodeJS e ExpressJS.​' 
                     github="https://github.com/Guilherme0112/FutOne"
                     deploy="" /> 
            <Project name="ComPrei"
                     descricao='Um e-commerce básico com as funcionalidades básicas para o funcionamento, ele também é integrado com o gateway de pagamento do mercado pago.​
                     Foi desenvolvido com Java e Spring.' 
                     github="https://github.com/Guilherme0112/ComPrei"
                     deploy="" /> 
            <Project name="DashFreela"
                     descricao='Dashboard que auxilia freelancers a organizar seus serviços. O front-end é feito com HTML, CSS (Bootstrap) e JavaScript, enquanto o back-end utiliza PHP orientado a objetos e banco de dados MySQL.​' 
                     github="https://github.com/Guilherme0112/ComPrei"
                     deploy="" /> 
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
  );
}

export default App;
