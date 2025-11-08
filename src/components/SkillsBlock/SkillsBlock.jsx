import Skill from "../Skill/Skill";

export default function SkillsBlock() {
  const skills = [
    { image: "https://www.svgrepo.com/show/374118/tailwind.svg", name: "Tailwind" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg", name: "TypeScript" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png", name: "Vue.js" },
    { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png", name: "React" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", name: "PHP" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", name: "Laravel" },
    { image: "https://impactclient.net/img/java-icon.png", name: "Java" },
    { image: "https://cdn.worldvectorlogo.com/logos/spring-3.svg", name: "Spring" },    
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", name: "MySQL" },
    { image: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png", name: "PostgreSQL" },
    { image: "https://images.archbee.com/PL8X94efBsjvhfQV3wyyj-fMzoU2zBbnzXG5pDzUALe-20250908-073345.png?format=webp", name: "MongoDB" }, 
    { image: "https://svn.apache.org/repos/asf/kafka/site/logos/originals/png/ICON%20-%20White%20on%20Transparent.png", name: "Apache Kafka" },
    { image: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253808/git-icon-icon-md.png", name: "Git" },
    { image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png", name: "Docker" }
  ];

  return (
    <>
      {skills.map((skill, index) => (
          <Skill key={index} image={skill.image} name={skill.name} />
      ))}
    </>
  );
}
