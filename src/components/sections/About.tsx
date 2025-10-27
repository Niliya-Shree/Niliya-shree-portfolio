import { motion } from 'framer-motion';
import { FiAward, FiCode, FiGlobe } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaAws, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="w-6 h-6 text-blue-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-blue-600" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6 text-green-600" /> },
    { name: 'Express', icon: <FiCode className="w-6 h-6 text-gray-700" /> },
    { name: 'MongoDB', icon: <FaDatabase className="w-6 h-6 text-green-700" /> },
    { name: 'AWS', icon: <FaAws className="w-6 h-6 text-yellow-500" /> },
    { name: 'Firebase', icon: <SiFirebase className="w-6 h-6 text-orange-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-cyan-400" /> },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full transform rotate-6"></div>
              <div className="absolute inset-2 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
                {/* Replace with actual profile image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <span className="text-4xl">👩‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Full-Stack Developer</h3>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                I'm a passionate Full-Stack Developer with a strong foundation in web development and a keen eye for creating intuitive user experiences. I specialize in building modern, responsive, and scalable web applications using the latest technologies.
              </p>
              <p>
                I combine academic knowledge with practical experience to deliver high-quality solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FiAward className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-center">Experience</h4>
                <p className="text-gray-600 text-center">1+ Year</p>
                <p className="text-sm text-gray-500 text-center">Web Development</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FiGlobe className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-center">Projects</h4>
                <p className="text-gray-600 text-center">10+ Completed</p>
                <p className="text-sm text-gray-500 text-center">Web Applications</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <FiCode className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-center">Education</h4>
                <p className="text-gray-600 text-center">B.Tech</p>
                <p className="text-sm text-gray-500 text-center">Computer Science</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">My Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill.icon}
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
