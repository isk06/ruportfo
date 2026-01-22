import fs from "fs";
import path from "path";
import PortfolioTabs, { PdfData } from "../components/PortfolioTabs";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";


export default function HomePage() {
  const imagesDir = path.join(process.cwd(), "public/images");
  const imageFiles = fs.existsSync(imagesDir)
    ? fs
        .readdirSync(imagesDir)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort()
    : [];

  const pdfFiles = [
    { file: "/pdfs/J.P.Morgan_SCR_storytelling.pdf", 
      cover: "/pdf-covers/J.P.Morgan_SCR_storytelling.png",
      title: "J.P.Morgan - SCR storytelling"},

    { file: "/pdfs/Portfolio_I.Daraev_2025.pdf", 
      cover: "/pdf-covers/Portfolio_I.Daraev_2025.png",
      title: "My Portfolio"},

    { file: "/pdfs/Airbus.pdf", 
      cover: "/pdf-covers/Airbus.png",
      title: "Airbus"},

    { file: "/pdfs/Sorwe.pdf", 
      cover: "/pdf-covers/Sorwe.png",
      title: "Sorwe"},

    // Add more PDFs here
  ];

  return (
    <>
      <section className="hero hero-gray">
  <div className="hero-content">
    {/* Logo */}
    <div className="hero-logo">
      <img
        src="/avatar.png"
        alt="Iskander Daraev"
        className="hero-avatar"
      />
    </div>

    {/* Name & subtitle */}
    <div>
      <h1 className="hero-title">Искандер Дараев</h1>
      <p className="hero-subtitle">
        Консалтинг и корпоративные финансы – сторителлинг и дизайн
      </p>
    </div>

    {/* Social links 
    <div className="hero-socials">
      <a
        href="https://www.linkedin.com/in/iskdaraev/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          style={{ width: 200, height: 200 }}
        />
      </a>

      <a
        href="https://www.behance.net/iskdaraev"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/icons/behance.svg"
          alt="Behance"
          style={{ width: 200, height: 200 }}
        />
      </a>

      <a
        href="mailto:isk.daraev@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/icons/mail5.svg"
          alt="E-mail"
          style={{ width: 230, height: 230 }}
        />
      </a>

    </div> */}
  </div>
</section>


<section className="section">
  <h2>Обо мне</h2>

  <p className="about">
    Специалист по визуализации данных и разработке презентаций с 
    более чем 15-летним опытом работы в консалтинге и государственном секторе. 
    Эксперт в создании критически важных для бизнеса презентаций, структурировании 
    больших презентаций и визуализации сложных финансовых данных. 
    Обширный опыт в экономике, корпоративных финансах и разработке презентаций для промышленности.    
  </p>

  <ul className="about-list">
    <li>
      <strong>Кросс-специалист</strong> с глубоким исполнительским и управленческим опытом 
      в госсекторе и финансовом консалтинге - как дизайне, так и организации работы 
      в качестве Team Lead.
    </li>
    <li>
      <strong>Специализация:</strong> визуализация сложных экономических 
      и финансовых данных, схем и метрик (Excel/PowerPoint), 
      финансовые и кастомные диаграммы, сторителлинг (Big4, Big3), 
      структурирование информации, форматирование и верстка (Big4, Big3).
    </li>
    <li>
      <strong>Продукты:</strong> бизнес-презентации, клиентские отчеты, 
      маркетинговые материалы (пропозалы, мемо, one pagers, годовые отчеты), 
      диаграммы, карты, схемы.
    </li>
    <li>
      <strong>Компетенции:</strong> дизайн и форматирование презентаций 
      (C-level, маркетинговые, финансовые, консалтинговые), 
      отчетов, анализ и визуализация, организация работы команды 
      и оптимизация процессов.
    </li>
    <li>
      <strong>Предметные области:</strong> стратегический консалтинг, инвестбанки, 
      финтех, корпфин, государственные экономические проекты, ИТ, промышленность.
    </li>
    <li>
      <strong>Широта отраслевой экспертизы</strong>, быстрое погружение в новую отрасль 
      и бизнес-цепочки.
    </li>
  </ul>
</section>


      {/* <section className="section">
        <h2>Get in touch</h2>
        <p className="contact">isk.daraev@gmail.com</p>
      </section> */}

      <section className="section">
        <div className="portfolio-wrapper">
          <PortfolioTabs images={imageFiles} pdfs={pdfFiles} />
        </div>
      </section>

    {/* ================= GET IN TOUCH ================= */}
      <section className="section contact-section">
        <h2>Свяжитесь со мной</h2>

      <form
        className="contact-form"
        action="https://formspree.io/f/xpqqzaww"
        method="POST"
      >
        <div className="form-group">
          <label>
            Имя<span>*</span>
          </label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>
            E-mail<span>*</span>
          </label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>
            Сообщение<span>*</span>
          </label>
          <textarea name="message" rows={5} required />
        </div>

        <button type="submit" className="form-submit">
          Отправить
        </button>
      </form>

      </section>

      
      <BackToTop />


      <Footer />
    </>
  );
}
