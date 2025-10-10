import './App.css';
import Header from './components/Header/Header';
import FadeInSection from './components/FadeInSection';
import About from './components/About/About';
import ShootingStars from './components/ShootingStarts';
import ExperienceBlock from './components/ExperienceBlock/ExperienceBlock';
import ProjectBlock from './components/ProjectBlock/ProjectBlock';
import SkillsBlock from './components/SkillsBlock/SkillsBlock';
import StudiesBlock from './components/StudiesBlock/StudiesBlock';
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
    <>
      <ShootingStars />
      <FadeInSection>
        <Header />

        <main className="mt-[150px]">

          <div className="flex justify-around w-full">
            <div className='w-[300px]'>
              <button className={style.gradient_border_button} onClick={downloadCV}>Baixar CV</button>
            </div>
          </div>

          <div className='mt-[50px]'>
            <About />
          </div>

          <section id="skills" className="w-full flex justify-center flex-wrap">
            <div className="w-full text-center">
              <h1 className="text-3xl font-bold my-[50px]">Skills</h1>
            </div>
            <div className="max-w-[1200px] flex justify-center flex-wrap">
              <SkillsBlock />
            </div>
          </section>

          <section id="experiencias" className="w-full my-8">
            <div className="w-full my-7 text-center my-[50px]">
              <h1 className="text-3xl font-bold">Experiências</h1>
            </div>
            <div className="w-full flex justify-center flex-wrap items-start">
              <ExperienceBlock />
            </div>
          </section>

          <section id="projetos" className="w-full my-8">
            <div className="w-full my-5 text-center">
              <h1 className="text-3xl font-bold">Projetos</h1>
            </div>
            <div className="w-full flex justify-center flex-wrap items-start my-[50px]">
              <ProjectBlock />
            </div>
          </section>

          <section id="estudos" className="w-full my-8">
            <div className="w-full my-5 text-center my-[50px]">
              <h1 className="text-3xl font-bold">Estudos</h1>
            </div>
            <div className="max-w-full flex justify-center flex-wrap">
              <StudiesBlock />
            </div>
          </section>

        </main>
      </FadeInSection>
    </>
  );
}

export default App;