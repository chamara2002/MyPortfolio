
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const experienceData = [
  {
    title: "Software Engineer Intern",
    company: "Airport and Aviation Services (Sri Lanka) (Private) Limited",
    period: "Dec 2024 – May 2025",
    details: [
      "Gained hands-on experience in software development, server management, and system integration within the IT Division.",
      "Collaborated with senior IT staff on system maintenance and troubleshooting, ensuring smooth daily operations.",
      "Assisted in deploying, testing, and maintaining applications and network services."
    ]
  }
];

const Experience = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scale: [1, 0.7, 1] });
  }, [controls]);

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Experience</h2>
        <div className="relative border-l-2 border-blue-400 dark:border-blue-600 ml-4">
          {experienceData.map((item, idx) => (
            <div key={idx} className="mb-12 ml-10 relative group">
              <motion.div
                className="absolute w-6 h-6 bg-gradient-to-tr from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-400 rounded-full -left-8 top-2 border-4 border-white dark:border-gray-950 ring-4 ring-blue-200 dark:ring-blue-800 z-20 shadow-lg"
                animate={controls}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              />
              <div className="pl-2 py-4 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-blue-100 dark:border-blue-900 hover:scale-[1.025] transition-transform">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                {item.company && <p className="text-gray-700 dark:text-gray-300 mb-1">{item.company}</p>}
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-2 mt-2 space-y-1">
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
