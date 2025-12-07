"use client";

import { motion } from "framer-motion";
import { House } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa6";

export default function Certificados() {
  const certificacoes = [
    {
      titulo: "Gestão da Tecnologia da Informação",
      org: "Universidade AGES",
      data: "Emitido: Ago 2025",
      imagem: "/certificados/gti.jpg",
      pdf: "/certificados/gti.pdf",
    },
    {
      titulo: "JavaScript Essentials 1",
      org: "Cisco Networking Academy Program",
      data: "Emitido: Mar 2025",
      imagem: "/certificados/javascript.jpg",
      pdf: "/certificados/javascript.pdf",
    },
    {
      titulo: "Fundamentos Python 1",
      org: "Cisco Networking Academy Program",
      data: "Emitido: Mar 2025",
      imagem: "/certificados/python.jpg",
      pdf: "/certificados/python.pdf",
    },
    {
      titulo: "Liderando [40 Horas]",
      org: "Universidade AGES",
      data: "Emitido: Jun 2025",
      imagem: "/certificados/liderando.jpg",
      pdf: "/certificados/liderando.pdf",
    },
    {
      titulo: "Tecnologias sociais: inovações para o desenvolvimento e inclusão social.",
      org: "Universidade AGES",
      data: "Emitido: Dez 2024",
      imagem: "/certificados/tecnologia-sociais.jpg",
      pdf: "/certificados/tecnologia-sociais.pdf",
    },
    {
      titulo: "Cuidado integral em saúde: práticas e abordagens complementares",
      org: "Universidade AGES",
      data: "Emitido: Dez 2024",
      imagem: "/certificados/saude.jpg",
      pdf: "/certificados/saude.pdf",
    },
    {
      titulo: "Scrum Fundamentals Certified",
      org: "SCRUMstudy",
      data: "Emitido: Abr 2025",
      imagem: "/certificados/scrum.jpg",
      pdf: "/certificados/scrum.pdf",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.12,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="min-h-screen px-6 sm:px-10 md:px-16 py-24 text-center">
      {/* Título */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Meus Certificados
      </motion.h2>

      {/* Grid de cartões */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificacoes.map((cert, i) => (
          <motion.a
            key={cert.titulo}
            href={cert.pdf}              // 👉 cada card abre um PDF diferente
            rel="noopener noreferrer"
            target="_blank"
            className="bg-neutral-800 rounded-xl overflow-hidden text-left shadow-md flex flex-col cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{
              scale: 1.08,
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 24,
              },
            }}
          >
            {/* Imagem em cima da parte cinza */}
            <div className="w-full h-45 bg-neutral-700">
              <img
                src={cert.imagem}
                alt={cert.titulo}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Conteúdo do card */}
            <div className="p-5 flex gap-4 items-start">
              <FaLaptopCode size={24} className="text-white shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">{cert.titulo}</p>
                <p className="text-gray-300 text-sm">{cert.org}</p>
                <p className="text-gray-500 text-xs mt-1">{cert.data}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Botão */}
      <motion.a
        href="/"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg
             shadow-md inline-block transition-none"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.12,
          y: -6,
          boxShadow: "0px 12px 25px rgba(0,0,0,0.35)",
          transition: { duration: 0.15, ease: "easeOut" },
        }}
        whileTap={{
          scale: 0.96,
          y: 0,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
          transition: { duration: 0.1, ease: "easeIn" },
        }}
      >
        <span className="inline-flex items-center gap-2">
          <House size={16} className="inline-block" />
          Voltar para Home
        </span>
      </motion.a>
    </section>
  );
}
