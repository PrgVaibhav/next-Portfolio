import styles from "../styles/Experience.module.scss";

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Graduation",
      description:
        "I have completed my graduation in Bachelors of Computer Applications.",
      place: "At Anugrah Narayan College, Patna",
      learnings: [
        "Learned many important technical stuffs and things",
        "Learned how to interact with people",
      ],
    },
    {
      id: 2,
      title: "Freelancing",
      description:
        "Currently I am a freelancer,and I'm working on some side projects.",
      place: "At Fiverr",
      learnings: [
        "Learned how to work with clients and their requirements",
        "Learned how to work with deadlines and time management",
      ],
    },
  ];
  return (
    <div className={styles.experience_container}>
      <h2>Experience</h2>
      {experienceData.map((experience) => {
        return (
          <div className={styles.experience} key={experience.id}>
            <div className={styles.experience_description}>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
              <p>{experience.place}</p>
              <ul>
                <li>{experience.learnings[0]}</li>
                <li>{experience.learnings[1]}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
