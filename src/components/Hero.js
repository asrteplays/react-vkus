function Hero () {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero-content__img">
            <img src="/img/error.png" alt="404" />
          </div>
          <p className="hero-content__text">Страница не найдена, но вы можете продолжить поиск по сайту. Просто введите свой запрос в строку поиска — и мы найдём для вас полезную информацию.</p>
          <div className="hero-content__controls">
            <a href="#" className="button-link button-link--green">В каталог</a>
            <a href="#" className="button-link">На главную</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;