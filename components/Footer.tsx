export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* LEFT — disclaimer */}
        <div className="footer-left">
          Поиск и анализ данных, разработка визуальных элементов, за исключением иконок, а также дизайн 
          и верстка слайдов выполнены И. Дараевым. Все данные, использованные для разработки слайдов, 
          взяты из открытых источников или представляют собой случайные данные.         
        </div>

        {/* CENTER — copyright */}
        <div className="footer-center">
          <p>© 2026 | Создано с использованием Nextjs и Vercel Искандером Дараевым.</p>
          <p className="footer-sub">
            Этот сайт не собирает информацию о посетителях и не использует аналитические инструменты.
          </p>
        </div>

        {/* RIGHT — socials */}
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/iskdaraev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>

          <a
            href="https://www.behance.net/iskdaraev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <img src="/icons/behance.svg" alt="Behance" />
          </a>
        </div>
      </div>
    </footer>
  );
}
