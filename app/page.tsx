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

  const pdfFiles: PdfData[] = [
    { file: "/pdfs/J.P.Morgan_SCR_storytelling.pdf", cover: "/pdf-covers/J.P.Morgan_SCR_storytelling.png", title: "J.P.Morgan - SCR storytelling" },
    { file: "/pdfs/Portfolio_I.Daraev_2025.pdf", cover: "/pdf-covers/Portfolio_I.Daraev_2025.jpg", title: "My Portfolio" },
    { file: "/pdfs/Airbus.pdf", cover: "/pdf-covers/Airbus.png", title: "Airbus" },
    { file: "/pdfs/Sorwe.pdf", cover: "/pdf-covers/Sorwe.png", title: "Sorwe" },
    { file: "/pdfs/EcoTank.pdf", cover: "/pdf-covers/Ecotank.jpg", title: "EcoTank" },
    { file: "/pdfs/Zero.pdf", cover: "/pdf-covers/Zero.jpg", title: "Zero eDiscovery" },
    { file: "/pdfs/Nature_ASI_2025.pdf", cover: "/pdf-covers/Nature_ASI_2025.jpg", title: "АСИ - Концепция Единица природы" },
    { file: "/pdfs/Volac.pdf", cover: "/pdf-covers/Volac.jpg", title: "Volac - Board Presentation" },
    { file: "/pdfs/Idbi.pdf", cover: "/pdf-covers/Idbi.jpg", title: "IDBI Bank - Investors Presentation" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="hero hero-gray">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/avatar.png" alt="Iskander Daraev" className="hero-avatar" />
          </div>
          <div>
            <h1 className="hero-title">Искандер Дараев</h1>
            <p className="hero-subtitle">
              Консалтинг и корпоративные финансы – сторителлинг и дизайн
            </p>
          </div>
        </div>
      </section>

      {/* ================= JOB STYLE LAYOUT ================= */}
      <section className="section">
        <div className="job-layout">

          {/* MAIN CARD */}
          <div className="job-main-card">

            {/* TOP GRID */}
            <div className="job-top-grid">

              {/* Key Facts */}
              <div>
                <h3>Обо мне</h3>
                <ul className="fact-list">
                  <li>Более 15 лет опыта в разработке презентаций</li>
                  <li>Кросс-специалист с опытом работы в государственном секторе и финансовом консалтинге</li>
                  <li>Обширный опыт в экономике, корпоративных финансах и разработке презентаций для промышленности.</li>
                  <li>Экспертные навыки работы с Microsoft PowerPoint (включая макросы VBA) и Adobe</li>
                  <li>Сильные навыки визуализации данных и умение превращать идеи в наглядные визуальные материалы</li>
                </ul>
              </div>

              {/* Hard Skills */}
              <div>
                <h3>Владение ПО</h3>
                <div className="skills-pills">
                  <span>PowerPoint</span>
                  <span>Макросы (PPT, Word, Excel)</span>
                  <span>Excel</span>
                  <span>Visio</span>
                  <span>Google Slides</span>
                  <span>Figma</span>
                  <span>PPT Productivity</span>
                  <span>think-cell</span>
                  <span>Дизайн презентаций</span>
                  <span>Инфографика</span>
                  <span>Визуализация данных</span>
                  <span>Финансовые диаграммы</span>
                  <span>Adobe Creative Cloud</span>
                  <span>Blender</span>
                  <span>Python</span>
                  <span>ИИ</span>
                </div>
              </div>

              {/* Other Skills */}
              <div>
                <h3>Специализация и экспертиза</h3>
                <ul className="bullet-list">
                  <li><strong>Основные компетенции:</strong> дизайн презентаций 
                  (C-level/executive, board, консалтинговые, аналитические, инвестиционные, маркетинговые, финансовые, питчи), визуализация
сложных экономических и финансовых данных, анализ, сторителлинг (принцип Пирамиды, SCR-фреймворк), структурирование информации, форматирование и верстка (Большая четверка, Большая тройка)</li>
                  <li><strong>Визуальные материалы:</strong> финансовые и пользовательские диаграммы, графики и показатели (Excel/PowerPoint), карты, таблицы</li>
                  <li><strong>Продукты:</strong> бизнес-презентации, клиентские отчеты, маркетинговые материалы (пропозалы, мемо, onepager, годовые отчеты)</li>
                  <li><strong>Предметные области:</strong> стратегический консалтинг, инвестбанки, финтех, корпоративные финансы, ИТ, промышленность</li>
                </ul>
              </div>

            </div>

            <hr className="divider" />

            {/* BOTTOM GRID */}
            <div className="job-bottom-grid">

              <div>
                <h3>Прочие навыки</h3>
                <ul className="bullet-list">
                  <li>Быстрое погружение в новые отрасли и бизнес-цепочки</li>
                  <li>Problem solving</li>
                  <li>Организация работы команды и оптимизация процессов</li>
                  <li>Внимание к деталям</li>
                  <li>Соблюдение дедлайновs</li>
                  <li>Высокая скорость работы и автоматизация рутинных процессов</li>
                  <li>Предложение наилучших способов оптимизации и отображения сложных данных</li>
                  
                </ul>
              </div>

              <div>
                <h3>Дополнительное образование и сертификации</h3>
                <ul className="bullet-list">
                  <li><strong>2025:</strong> Введение в корпоративные финансы (The Wharton School of the University of Pennsylvania)</li>
                  <li><strong>2024:</strong> Консалтинговые презентации и сторителлинг (Emory University); Бизнес-презентации в PowerPoint (PriceWaterhouseCoopers); UX/UI дизайн (Google, IBM)</li>
                  <li><strong>2023:</strong> Сертификат Google по автоматизации в ИТ с использованием Python (Google)</li>
                  <li><strong>2022:</strong> ISTQB (ASTQB); PCEP – Certified Entry-Level Python Programmer (Python Institute); 
                  ВШЭ - Python для анализа данных (очно)</li>
                  <li><strong>2021:</strong> IELTS Academic; Структурирование бизнес-кейсов (Fless)</li>
                </ul>
              </div>

            </div>

          </div>

          {/* SIDEBAR */}
          <div className="job-sidebar">
            <div className="company-card">
              <div className="company-header">
                <div className="company-logo">ИД</div>
                <h3>Искандер Дараев</h3>
              </div>

              <div className="company-info">
                <h3><strong>Текущая позиция</strong></h3>
                <p><strong>Компания:</strong> Деловые Решения и Технологии (ранее Deloitte CIS), 2023 - по н/в</p>
                <p><strong>Позиция:</strong> Менеджер, глава Группы информационного дизайна</p>
                <p><strong>Департамент:</strong> Финансовое консультирование</p>
              </div>

              <div className="company-links">
                {/*<a href="https://www.linkedin.com/in/iskdaraev/" target="_blank">LinkedIn</a>
                <a href="https://www.behance.net/iskdaraev" target="_blank">Behance</a>*/}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="section">
        <div className="portfolio-wrapper">
          <PortfolioTabs images={imageFiles} pdfs={pdfFiles} />
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section contact-section">
        <h2>Обратная связь</h2>

        <form
          className="contact-form"
          action="https://formspree.io/f/xpqqzaww"
          method="POST"
        >
          <div className="form-group">
            <label>Имя<span>*</span></label>
            <input type="text" name="name" required />
          </div>

          <div className="form-group">
            <label>E-mail<span>*</span></label>
            <input type="email" name="email" required />
          </div>

          <div className="form-group">
            <label>Сообщение<span>*</span></label>
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
