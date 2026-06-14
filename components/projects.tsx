export default function Projects() {
  const projects = [
    {
      name: "JoblyAI",
      description:
        "A full-stack, AI-powered platform leveraging advanced LLMs and asynchronous processing for personalized resume tailoring, intelligent job matching, and comprehensive interview preparation.",
      image: "/img/projects/joblyai.png",
      alt: "JoblyAI Project",
      link: "https://jobly-ai-weld.vercel.app",
      secondary_link: "https://joblyai-documentation.vercel.app",
      secondary_link_text: "View Documentation",
      test_account: { email: "joblyai01@gmail.com", password: "123456789" },
      technologies_used: [
        { name: "React", badge_color: "bg-blue-600" },
        { name: "Python", badge_color: "bg-yellow-600" },
        { name: "PostgreSQL", badge_color: "bg-blue-700" },
        { name: "OpenAI", badge_color: "bg-green-800" },
        { name: "Deepgram", badge_color: "bg-gray-700" },
        { name: "ElevenLabs", badge_color: "bg-indigo-600" },
      ],
    },

    {
      name: "Jarvis Designs",
      description:
        "A custom e-commerce system tailored for sublimation business. This platform simplifies the creation of custom apparel and merchandise, offering a seamless experience from design concept to final product.",
      image: "/img/projects/jarvis.png",
      alt: "Jarvis Designs Project",
      link: "https://jarvis-designs.it.com",
      test_account: null,
      technologies_used: [
        { name: "Vue.js", badge_color: "bg-green-500" },
        { name: "Laravel", badge_color: "bg-red-600" },
        { name: "AWS", badge_color: "bg-yellow-600" },
        { name: "PostgreSQL", badge_color: "bg-blue-700" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects && projects.length > 0 && projects.map((project, idx) => (
            <div className="glass-effect rounded-2xl overflow-hidden tech-card h-fit" key={idx}>
              <div className="h-52 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-violet-400">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.test_account && (
                  <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700 text-sm">
                    <p className="text-gray-300 font-semibold mb-1">Test Account:</p>
                    <p className="text-gray-400">Email: <span className="text-gray-300">{project.test_account.email}</span></p>
                    <p className="text-gray-400">Password: <span className="text-gray-300">{project.test_account.password}</span></p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies_used.map((tech, i) => (
                    <span
                      key={tech.name + i}
                      className={`px-3 py-1 ${tech.badge_color} rounded-full text-xs`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-3 mt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 font-semibold"
                  >
                    View Project &rarr;
                  </a>
                  {project.secondary_link && (
                    <a
                      href={project.secondary_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      {project.secondary_link_text} &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}