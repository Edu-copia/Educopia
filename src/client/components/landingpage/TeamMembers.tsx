import React from "react";
import "tailwindcss/tailwind.css";
import Team from "./Team";

export default function TeamInfoSection() {
  const teamMembers = [
    {
      name: "Jesse Chou",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U05BZ4FFHHV-e6b25299e14c-512",
      githubLink: "https://github.com/jesse-chou/",
      linkedinLink: "https://www.linkedin.com/in/jesse-chou/",
      role: "Software Engineer",
    },
    {
      name: "Derek Coughlan",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U057QU0L9LG-10e0ff54b26c-512",
      githubLink: "https://github.com/derekcoughlan",
      linkedinLink: "https://www.linkedin.com/in/derekcoughlan/",
      role: "Software Engineer",
    },
    {
      name: "Bassel Fares",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U057STDNNJV-2cb6ca555f7b-512",
      githubLink: "https://github.com/basselfares",
      linkedinLink:
        "https://www.linkedin.com/in/basselfares/",
      role: "Software Engineer",
    },
    {
      name: "Jonathan Kim",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U054CDMLH0D-77df7090bc54-512",
      githubLink: "https://github.com/jonbingkim",
      linkedinLink: "https://www.linkedin.com/in/jonbkim/",
      role: "Software Engineer",
    },
    {
      name: "Binetou Maggio",
      avatarSrc:
        "https://ca.slack-edge.com/T04VCTELHPX-U057EHQ775L-e9b31e3821fa-512",
      githubLink: "https://github.com/bimaggio",
      linkedinLink: "https://www.linkedin.com/in/binetou-maggio/",
      role: "Software Engineer",
    },
  ];
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Educopia is a distributed team with engineers around the world
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
          {teamMembers.map((member, index) => (
            <Team key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
