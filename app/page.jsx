import SkillItem from "@/features/SkillItem/SkillItem";
import ProjectItem from "@/features/ProjectItem/ProjectItem";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Field from "@/components/Inputs/Field";
import Textarea from "@/components/Inputs/Textarea";

async function getSkills() {
  const skills = [
    { name: "HTML5", icon: "html5", iconType: "logo" },
    { name: "CSS3", icon: "css3", iconType: "logo" },
    { name: "Javascript/ES6", icon: "javascript", iconType: "logo" },
    { name: "Typescript", icon: "typescript", iconType: "logo" },
    { name: "PHP", icon: "php", iconType: "logo" },
    { name: "Git", icon: "git", iconType: "logo" },
    { name: "React", icon: "react", iconType: "logo" },
    { name: "Node.js", icon: "nodejs", iconType: "logo" },
    { name: "React Native", icon: "react", iconType: "logo" },
    { name: "MySQL", icon: "data", iconType: "solid" },
    { name: "Firebase", icon: "firebase", iconType: "logo" },
    { name: "Bootstrap", icon: "bootstrap", iconType: "logo" },
    { name: "Tailwind CSS", icon: "tailwind-css", iconType: "logo" },
    { name: "Google Cloud Provider", icon: "google-cloud", iconType: "logo" },
  ];
  return skills;
}

async function getProjects() {
  const projects = [
    {
      title: "Nature Themed Homepage",
      githubLink: "https://github.com/dayyan-269/nature-landing-page",
      webLink: "https://dayyan-269.github.io/nature-landing-page/",
    },
    {
      title: "Restaurant Themed Homepage",
      githubLink: "https://github.com/dayyan-269/restaurant-landing-page",
      webLink: "https://dayyan-269.github.io/restaurant-landing-page/",
    },
    {
      title: "My Portofolio Website",
      githubLink: null,
      webLink: null,
    },
  ];
  return projects;
}

async function Home() {
  const skills = await getSkills();
  const projects = await getProjects();

  return (
    <main className='w-10/12 mx-auto lg:w-9/12'>
      {/* Identity Section */}
      <section className='flex flex-col gap-y-1 py-3 text-white'>
        Hello, I&rsquo;m
        <h1 className='prose-2xl text-accent-color font-bold tracking-wider text-primary'>
          Dayyan Syehan
        </h1>
        I&rsquo;m a Fullstack Web Developer from East Java, Indonesia
      </section>

      {/* Skills Section */}
      <section className='flex flex-col gap-y-4 py-3'>
        <h1 className='prose-2xl font-bold tracking-widest text-white'>
          Skills
        </h1>
        {skills ? (
          <div className='grid grid-cols-2 lg:grid-cols-7 lg:grid-rows-1 gap-3 justify-between'>
            {skills.map((skill, index) => {
              return (
                <SkillItem key={index} title={skill.name}>
                  <box-icon
                    type={skill.iconType}
                    name={skill.icon}
                    color='white'
                    size='lg'
                  ></box-icon>
                </SkillItem>
              );
            })}
          </div>
        ) : (
          <h1 className='text-white text-center'>There is no item(s) yet</h1>
        )}
      </section>

      {/* Projects Section */}
      <section className='flex flex-col py-3 gap-y-3'>
        <h1 className='prose-2xl font-bold tracking-widest text-white'>
          Projects
        </h1>
        {projects ? (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
            {projects.map((project, index) => {
              return <ProjectItem key={index} title={project.title} />;
            })}
          </div>
        ) : (
          <h1 className='text-white text-center'>There is no item(s) yet</h1>
        )}
      </section>

      {/* Contact Section */}
      <section className='flex flex-col py-3 gap-y-3'>
        <h1 className='prose-2xl font-bold tracking-widest text-white'>
          Contact
        </h1>
        <Field compName='fullname' placeholder='Fullname' isRequired={true} />
        <Field compName='email' placeholder='Email' isRequired={true} />
        <Textarea compName='message' placeholder='Your Message' />
        <PrimaryButton compType='submit'>Submit</PrimaryButton>
      </section>
    </main>
  );
}

export default Home;
