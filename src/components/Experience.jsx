
import { motion } from "framer-motion";

const experienceData = [
  {
    company: "Airport and Aviation Services (Sri Lanka) (Private) Limited",
    title: "Software Engineer Intern",
    period: "Dec 2024 – May 2025",
    details: [
      "Gained hands-on experience in software development, server management, and system integration within the IT Division.",
      "Collaborated with senior IT staff on system maintenance and troubleshooting, ensuring smooth daily operations.",
      "Assisted in deploying, testing, and maintaining applications and network services."
    ]
  }
];

const Experience = () => {
  return (
    <section id="professional-journey" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Experience</h2>
        <div className="relative border-l-2 border-blue-400 dark:border-blue-600 ml-4">
          {experienceData.map((item, idx) => (
            <div key={idx} className="mb-10 ml-6 relative">
              <motion.div
                className="absolute w-4 h-4 bg-blue-400 dark:bg-blue-600 rounded-full -left-4 top-2 border-4 border-white dark:border-gray-950 ring-4 ring-blue-300 dark:ring-blue-700 z-10"
                animate={{ scale: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
              <div className="pl-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.company}</h3>
                <p className="text-md text-gray-700 dark:text-gray-300 font-medium mb-1">
                  {item.title} <span className="text-xs text-gray-500 dark:text-gray-400">{item.period}</span>
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-2">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
