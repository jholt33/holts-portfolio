import PageTitle from "../components/PageTitle";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
  return (
    <>
      <PageTitle title="Projects" subtitle="Past and Present Web Projects" />
      <section className="container my-5">
        <ProjectCards />
      </section>
    </>
  );
}
export default Projects;
