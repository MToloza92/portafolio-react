import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const SocialSidebar = ({ position = 'left' }) => {

  // Definición de los links sociales y acciones
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/tolozadev',
      label: 'LinkedIn',
      external: true
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/MToloza92',
      label: 'GitHub',
      external: true
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:toloza.dev@gmail.com',
      label: 'Enviar correo',
      external: false
    },
    {
      icon: <FaFileDownload />,
      url: '/resume.pdf',
      label: 'Descargar CV',
      external: false,
      download: true
    }
  ];

  // Posición dinámica del sidebar
  const positionClasses = position === 'left' ? 'left-0' : 'right-0';

  return (
    <aside
      className={`fixed ${positionClasses} top-1/2 -translate-y-1/2 z-40 hidden md:block`}
    >
      <div className="flex flex-col gap-4 p-4 bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            aria-label={link.label}
            className="p-3 text-white hover:text-cyan-400 transition-transform duration-300 hover:scale-110 hover:bg-white/10 rounded-lg"
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            download={link.download ? true : undefined}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default SocialSidebar;
