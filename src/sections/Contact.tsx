import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FadeInSection } from '../hooks/useFadeInOnScroll';
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('success');
      form.reset();
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="px-6 py-16 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-white scroll-mt-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="text-center text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300">{t('contact.title')}</div>
          <div className="h-1 bg-linear-to-r from-blue-400 to-blue-600 rounded-xl w-20"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-center max-w-xl transition-colors duration-300">{t('contact.subtitle')}</p>
        </div>

        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-100/80 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-300 dark:border-[#30363d] hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <IoIosMail className="w-6 h-6 text-blue-400" />
                  {t('contact.info.title')}
                </h3>
                
                {/* Email */}
                <div className="mb-6 group">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 transition-colors duration-300">{t('contact.info.email')}</p>
                  <a 
                    href="mailto:josephrosasp@gmail.com"
                    className="text-lg flex items-center gap-2 text-gray-900 dark:text-white hover:text-blue-400 transition-colors duration-300"
                  >
                    josephrosasp@gmail.com
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 transition-colors duration-300">{t('contact.info.connect')}</p>
                  <div className="flex gap-4">
                  {[
                    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/joseph-rosas-595a15371", size: 22, label: "LinkedIn" },
                    { Icon: FaGithub, href: "https://github.com/josephr04", size: 22, label: "GitHub" },
                    { Icon: IoIosMail, href: "mailto:josephrosasp@gmail.com", size: 26, label: "Email" }
                  ].map(({ Icon, href, size, label }, index) => (                   
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      aria-label={label}
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-13 h-13 bg-gray-200 dark:bg-gray-800/70 rounded-xl border border-gray-300 dark:border-white/10 hover:border-blue-500 hover:bg-gray-300 dark:hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-gray-700 dark:text-white group-hover:text-blue-400 transition-colors" size={size} />
                    </a>
                  ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-100/80 dark:bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-300 dark:border-[#30363d] hover:border-blue-500/30 transition-all duration-300"
            >
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="user_name"
                    placeholder={t('contact.form.name')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-200 dark:bg-gray-800/70 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="user_email"
                    placeholder={t('contact.form.email')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-200 dark:bg-gray-800/70 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={t('contact.form.subject')}
                    className="w-full px-4 py-3 rounded-xl bg-gray-200 dark:bg-gray-800/70 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <textarea 
                    name="message"
                    placeholder={t('contact.form.message')}
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-200 dark:bg-gray-800/70 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-600 dark:text-green-400 text-sm">
                    {t('contact.form.success') || 'Message sent successfully!'}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-600 dark:text-red-400 text-sm">
                    {t('contact.form.error') || 'Error sending message. Please try again.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-4 rounded-xl bg-linear-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{isLoading ? (t('contact.form.sending') || 'Sending...') : t('contact.form.send')}</span>
                </button>
              </div>
            </form>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}