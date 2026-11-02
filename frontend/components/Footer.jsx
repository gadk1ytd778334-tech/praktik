import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <Link href="/" className="logo logo--footer">
            <span className="logo__mark">S</span>
            <span className="logo__text">Shoply</span>
          </Link>
          <p className="footer__text">Маркетплейс гаджетов и электроники.</p>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Магазин</h4>
          <ul className="footer__list">
            <li><Link href="#catalog">Каталог</Link></li>
            <li><Link href="#categories">Категории</Link></li>
            <li><Link href="#">Акции</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Помощь</h4>
          <ul className="footer__list">
            <li><Link href="#">Доставка</Link></li>
            <li><Link href="#">Оплата</Link></li>
            <li><Link href="#">Возврат</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Контакты</h4>
          <ul className="footer__list">
            <li><Link href="tel:+78000000000">8 800 000-00-00</Link></li>
            <li><Link href="mailto:hello@shoply.ru">hello@shoply.ru</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2025 Shoply. Все права защищены.</span>
      </div>
    </footer>
  );
}