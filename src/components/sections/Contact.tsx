import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiLoader, FiCheck, FiX } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset status when user makes changes
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_TEMPLATE_ID) {
        throw new Error('EmailJS environment variables are not properly configured');
      }
      
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      
      console.log('Email sent successfully:', response);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      
      // Log detailed error information
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          name: error.name,
          stack: error.stack
        });
      }
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          {/* <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div> */}
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me. I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <FiMail className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email Me</h3>
                <a 
                  href="mailto:niliyashree@example.com" 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  niliya1603@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Lucknow, India</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Niliya-Shree" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/niliya-shree-6a8b16229/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://medium.com/@niliya1603" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow-md transition-all"
                  aria-label="Medium"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 0v24h24v-24h-24zm19.938 5.686l-1.5 1.45c-.2.15-.3.35-.3.6v10.3c0 .25.1.45.3.6l1.4 1.4v.3h-7v-.3l1.5-1.4c.2-.15.2-.4.2-.6v-7.5l-4.2 9.3h-.6l-5-9.3v6.2c-.1.2 0 .5.2.6l2 2.5v.3h-6v-.3l2-2.5c.2-.2.2-.5.1-.7v-7.1c0-.1 0-.2-.1-.3l-1.7-2.3v-.3h5.2l3.9 8.6 3.4-8.6h4.8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Hi Niliya, I would like to discuss a project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: submitStatus ? 1 : 1.02 }}
                whileTap={{ scale: submitStatus ? 1 : 0.98 }}
                className={`w-full py-3 px-6 rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-500 text-white focus:ring-green-500 hover:bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-500 text-white focus:ring-red-500 hover:bg-red-600'
                    : 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500'
                } ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center justify-center space-x-2">
                  {isSubmitting && <FiLoader className="animate-spin" />}
                  {submitStatus === 'success' && <FiCheck />}
                  {submitStatus === 'error' && <FiX />}
                  <span>
                    {submitStatus === 'success' 
                      ? 'Message Sent!' 
                      : submitStatus === 'error' 
                        ? 'Failed to Send' 
                        : 'Send Message'}
                  </span>
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
