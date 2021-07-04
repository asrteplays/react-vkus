function Header () {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header-inner__logo">
            <button className="burger">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H5Z" fill="#1A1A1A"/>
              </svg>
            </button>
            <picture>
              <source media="(max-width: 1251px)" srcSet="/img/logo-mobile.svg"/>
              <img src="/img/logo.svg" alt="logo" className="logo" />
            </picture>
          </div>
          <div className="header-inner__search">
            <button className="header-inner__btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.71 19.29L17.31 15.9C18.407 14.5025 19.0022 12.7767 19 11C19 9.41775 18.5308 7.87103 17.6518 6.55544C16.7727 5.23985 15.5233 4.21447 14.0615 3.60897C12.5997 3.00347 10.9911 2.84504 9.43928 3.15372C7.88743 3.4624 6.46197 4.22433 5.34315 5.34315C4.22433 6.46197 3.4624 7.88743 3.15372 9.43928C2.84504 10.9911 3.00347 12.5997 3.60897 14.0615C4.21447 15.5233 5.23985 16.7727 6.55544 17.6518C7.87103 18.5308 9.41775 19 11 19C12.7767 19.0022 14.5025 18.407 15.9 17.31L19.29 20.71C19.383 20.8037 19.4936 20.8781 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8781 20.617 20.8037 20.71 20.71C20.8037 20.617 20.8781 20.5064 20.9289 20.3846C20.9797 20.2627 21.0058 20.132 21.0058 20C21.0058 19.868 20.9797 19.7373 20.9289 19.6154C20.8781 19.4936 20.8037 19.383 20.71 19.29ZM5 11C5 9.81332 5.3519 8.65328 6.01119 7.66658C6.67047 6.67989 7.60755 5.91085 8.7039 5.45673C9.80026 5.0026 11.0067 4.88378 12.1705 5.11529C13.3344 5.3468 14.4035 5.91825 15.2426 6.75736C16.0818 7.59648 16.6532 8.66558 16.8847 9.82946C17.1162 10.9933 16.9974 12.1997 16.5433 13.2961C16.0892 14.3925 15.3201 15.3295 14.3334 15.9888C13.3467 16.6481 12.1867 17 11 17C9.4087 17 7.88258 16.3679 6.75736 15.2426C5.63214 14.1174 5 12.5913 5 11Z" fill="#949494"/>
              </svg>
            </button>
            <input type="search" className="search-input" placeholder="Поиск по товарам, рецептам и статьям"/>
          </div>
          <div className="header-inner__purchase">
            <div className="header-purchase__geo">
              <div className="header-geo__icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.0664 1.53334L1.52977 5.71201C1.46488 5.73351 1.40817 5.77445 1.36733 5.82927C1.3265 5.88409 1.3035 5.95015 1.30146 6.01848C1.29942 6.08681 1.31844 6.15411 1.35594 6.21127C1.39344 6.26843 1.44761 6.31267 1.5111 6.33801L7.3331 8.66667L10.2831 14.5667C10.3131 14.6268 10.3606 14.6764 10.4193 14.709C10.478 14.7416 10.5452 14.7558 10.612 14.7496C10.6789 14.7434 10.7424 14.7171 10.7941 14.6743C10.8458 14.6314 10.8833 14.5739 10.9018 14.5093L14.4931 1.94067C14.5097 1.88228 14.5101 1.82046 14.4942 1.76187C14.4782 1.70329 14.4466 1.65016 14.4027 1.60824C14.3588 1.56631 14.3043 1.53718 14.245 1.52398C14.1857 1.51078 14.124 1.51402 14.0664 1.53334Z" fill="#949494"/>
                </svg>
              </div>
              Мск
            </div>
            <div className="header-purchase__order">
              <a href="#" className="header-order__link">
                <div className="header-order__name">Заказать продукты</div>
                <div className="header-order__desc">Доставка или самовызов</div>
              </a>
              <div className="header-order__icon">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M9 1L5 5L1 1" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <button className="button-cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 22C7.55228 22 8 21.5523 8 21C8 20.4477 7.55228 20 7 20C6.44772 20 6 20.4477 6 21C6 21.5523 6.44772 22 7 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 22C18.5523 22 19 21.5523 19 21C19 20.4477 18.5523 20 18 20C17.4477 20 17 20.4477 17 21C17 21.5523 17.4477 22 18 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 1L5.68 14.39C5.77144 14.8504 6.02191 15.264 6.38755 15.5583C6.75318 15.8526 7.2107 16.009 7.68 16H17.4C17.8693 16.009 18.3268 15.8526 18.6925 15.5583C19.0581 15.264 19.3086 14.8504 19.4 14.39L21 6H4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span className="button-cart__total">12 430 &#8381;</span>
            </button>
          </div>
          <div className="header-inner__account">
            <button className="header-account__favorite">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.6896 2H6.13723C4.86072 2 4 3.04035 4 4.32487V23L12.0146 19.4364L20 22.9236V4.32487C20 3.04035 18.9661 2 17.6896 2ZM18 19.4364L12.0146 16.9211L6 19.4364V4H18V19.4364Z" fill="#949494"/>
              </svg>
            </button>
            <button className="header-account__login">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7742 10.15C13.8867 10.15 15.5992 8.43749 15.5992 6.325C15.5992 4.21251 13.8867 2.5 11.7742 2.5C9.66173 2.5 7.94922 4.21251 7.94922 6.325C7.94922 8.43749 9.66173 10.15 11.7742 10.15Z" stroke="#949494" stroke-width="2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21 21C21 15.8453 16.9706 13 12 13C7.02944 13 3 15.8453 3 21C10.7143 21 14.5714 21 21 21Z" stroke="#949494" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>
        <div className="header__subinner">
          <div className="header-subinner__main">
            <div className="header-subinner__catalog">             
              <a href="#" className="header-catalog__link"><svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.60078 2.79999H4.40078C3.97643 2.79999 3.56947 2.96856 3.26941 3.26862C2.96935 3.56868 2.80078 3.97564 2.80078 4.39999V7.59999C2.80078 8.02433 2.96935 8.4313 3.26941 8.73136C3.56947 9.03142 3.97643 9.19999 4.40078 9.19999H7.60078C8.02513 9.19999 8.43209 9.03142 8.73215 8.73136C9.03221 8.4313 9.20078 8.02433 9.20078 7.59999V4.39999C9.20078 3.97564 9.03221 3.56868 8.73215 3.26862C8.43209 2.96856 8.02513 2.79999 7.60078 2.79999ZM4.40078 7.59999V4.39999H7.60078V7.59999H4.40078Z" fill="#36BA5F"/>
                <path d="M4.40078 7.59999V4.39999H7.60078V7.59999H4.40078Z" fill="#36BA5F"/>
                <path d="M15.6008 2.79999H12.4008C11.9764 2.79999 11.5695 2.96856 11.2694 3.26862C10.9694 3.56868 10.8008 3.97564 10.8008 4.39999V7.59999C10.8008 8.02433 10.9694 8.4313 11.2694 8.73136C11.5695 9.03142 11.9764 9.19999 12.4008 9.19999H15.6008C16.0251 9.19999 16.4321 9.03142 16.7322 8.73136C17.0322 8.4313 17.2008 8.02433 17.2008 7.59999V4.39999C17.2008 3.97564 17.0322 3.56868 16.7322 3.26862C16.4321 2.96856 16.0251 2.79999 15.6008 2.79999ZM12.4008 7.59999V4.39999H15.6008V7.59999H12.4008Z" fill="#36BA5F"/>
                <path d="M12.4008 7.59999V4.39999H15.6008V7.59999H12.4008Z" fill="#36BA5F"/>
                <path d="M7.60078 10.8H4.40078C3.97643 10.8 3.56947 10.9686 3.26941 11.2686C2.96935 11.5687 2.80078 11.9756 2.80078 12.4V15.6C2.80078 16.0243 2.96935 16.4313 3.26941 16.7314C3.56947 17.0314 3.97643 17.2 4.40078 17.2H7.60078C8.02513 17.2 8.43209 17.0314 8.73215 16.7314C9.03221 16.4313 9.20078 16.0243 9.20078 15.6V12.4C9.20078 11.9756 9.03221 11.5687 8.73215 11.2686C8.43209 10.9686 8.02513 10.8 7.60078 10.8ZM4.40078 15.6V12.4H7.60078V15.6H4.40078Z" fill="#36BA5F"/>
                <path d="M4.40078 15.6V12.4H7.60078V15.6H4.40078Z" fill="#36BA5F"/>
                <path d="M15.6008 10.8H12.4008C11.9764 10.8 11.5695 10.9686 11.2694 11.2686C10.9694 11.5687 10.8008 11.9756 10.8008 12.4V15.6C10.8008 16.0243 10.9694 16.4313 11.2694 16.7314C11.5695 17.0314 11.9764 17.2 12.4008 17.2H15.6008C16.0251 17.2 16.4321 17.0314 16.7322 16.7314C17.0322 16.4313 17.2008 16.0243 17.2008 15.6V12.4C17.2008 11.9756 17.0322 11.5687 16.7322 11.2686C16.4321 10.9686 16.0251 10.8 15.6008 10.8ZM12.4008 15.6V12.4H15.6008V15.6H12.4008Z" fill="#36BA5F"/>
                <path d="M12.4008 15.6V12.4H15.6008V15.6H12.4008Z" fill="#36BA5F"/>
              </svg>Каталог</a>
            </div>
            <div className="header-subinner__promotion">             
              <a href="#" className="header-promotion__link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <circle cx="12" cy="12" r="12" fill="#FDD35A"/>
                </mask>
                <g mask="url(#mask0)">
                <path d="M8.23205 11.0365C9.97994 11.0365 11.4171 9.71408 11.4171 8.05159C11.4171 6.42688 9.97994 5.06667 8.23205 5.06667C6.46473 5.06667 5.06641 6.42688 5.06641 8.05159C5.06641 9.71408 6.46473 11.0365 8.23205 11.0365ZM6.69171 17.2622C6.23015 17.8472 6.64678 18.7066 7.39187 18.7066C7.6649 18.7066 7.92289 18.5816 8.09202 18.3672L17.2689 6.73776C17.7305 6.15284 17.3139 5.29337 16.5688 5.29337C16.2957 5.29337 16.0377 5.41843 15.8686 5.63276L6.69171 17.2622ZM8.23205 9.29846C7.51347 9.29846 6.95025 8.75059 6.95025 8.05159C6.95025 7.37148 7.51347 6.80472 8.23205 6.80472C8.95063 6.80472 9.53326 7.37148 9.53326 8.05159C9.53326 8.75059 8.95063 9.29846 8.23205 9.29846ZM12.6018 15.9673C12.6018 17.6109 14.0001 18.9333 15.7674 18.9333C17.5153 18.9333 18.9331 17.6109 18.9331 15.9673C18.9331 14.3426 17.5153 12.9824 15.7674 12.9824C14.0001 12.9824 12.6018 14.3426 12.6018 15.9673ZM14.4856 15.9484C14.4856 15.2683 15.0489 14.7015 15.7674 14.7015C16.486 14.7015 17.0686 15.2683 17.0686 15.9484C17.0686 16.6474 16.486 17.1953 15.7674 17.1953C15.0489 17.1953 14.4856 16.6474 14.4856 15.9484Z" fill="#F78C07"/>
                </g>
              </svg>Акции</a>
            </div>
            <nav className="header-subinner__nav">
              <ul className="header-nav__products">
                <li className="header-products__item"><a href="#" className="header-products__link">Сладости, десерты, мороженое</a></li>
                <li className="header-products__item"><a href="#" className="header-products__link">Кулинария</a></li>
                <li className="header-products__item"><a href="#" className="header-products__link">ВкусВиллАйс</a></li>
                <li className="header-products__item"><a href="#" className="header-products__link">Праздник</a></li>
                <li className="header-products__item"><a href="#" className="header-products__link">Новый год</a></li>
              </ul>
            </nav>
          </div>      
          <div className="header-subinner__other">
            <ul className="header-other__list">
              <li className="header-other__item">                
                <a href="#" className="header-other__link"><svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C3.89543 5 3 5.89543 3 7V15C3 16.1046 3.89543 17 5 17H5.06488C5.06489 18.1046 5.96032 19 7.06488 19C8.16943 19 9.06486 18.1046 9.06488 17H15.0649C15.0649 18.1046 15.9603 19 17.0649 19C18.1694 19 19.0649 18.1046 19.0649 17L19.0649 16.999C20.3412 16.9592 21.2607 15.7414 20.9356 14.4951L19.3702 8.4951C19.1404 7.61447 18.3451 7 17.435 7H15C15 5.89543 14.1046 5 13 5H5ZM13 6.5H5C4.72386 6.5 4.5 6.72386 4.5 7V15C4.5 15.2761 4.72386 15.5 5 15.5H13.5V7C13.5 6.72386 13.2761 6.5 13 6.5ZM17.435 8.5H15.2621V12.5H18.8649L17.9188 8.87378C17.8613 8.65362 17.6625 8.5 17.435 8.5ZM19.2562 14H15.2621V15.5H19.0004C19.3278 15.5 19.5668 15.1906 19.4842 14.8738L19.2562 14Z" fill="#1A1A1A"/>
                </svg>Доставка</a>
              </li>
              <li className="header-other__item">
                <a href="#" className="header-other__link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.9997 3.66667C10.2431 3.66658 8.55739 4.3598 7.30904 5.59566C6.0607 6.83152 5.35057 8.51014 5.33301 10.2667C5.33301 14.8333 11.208 19.9167 11.458 20.1333C11.609 20.2624 11.801 20.3334 11.9997 20.3334C12.1983 20.3334 12.3904 20.2624 12.5413 20.1333C12.833 19.9167 18.6663 14.8333 18.6663 10.2667C18.6488 8.51014 17.9386 6.83152 16.6903 5.59566C15.442 4.3598 13.7563 3.66658 11.9997 3.66667ZM11.9997 18.375C10.608 17.05 6.99967 13.375 6.99967 10.2667C6.99967 8.94059 7.52646 7.66882 8.46414 6.73114C9.40182 5.79346 10.6736 5.26667 11.9997 5.26667C13.3258 5.26667 14.5975 5.79346 15.5352 6.73114C16.4729 7.66882 16.9997 8.94059 16.9997 10.2667C16.9997 13.35 13.3913 17.05 11.9997 18.375Z" fill="#1A1A1A"/>
                  <path d="M12 8C11.6044 8 11.2178 8.1173 10.8889 8.33706C10.56 8.55682 10.3036 8.86918 10.1522 9.23463C10.0009 9.60009 9.96126 10.0022 10.0384 10.3902C10.1156 10.7781 10.3061 11.1345 10.5858 11.4142C10.8655 11.6939 11.2219 11.8844 11.6098 11.9616C11.9978 12.0387 12.3999 11.9991 12.7654 11.8478C13.1308 11.6964 13.4432 11.44 13.6629 11.1111C13.8827 10.7822 14 10.3956 14 10C14 9.46957 13.7893 8.96086 13.4142 8.58579C13.0391 8.21071 12.5304 8 12 8ZM12 10.8571C11.8305 10.8571 11.6648 10.8069 11.5238 10.7127C11.3828 10.6185 11.273 10.4846 11.2081 10.328C11.1432 10.1714 11.1263 9.99905 11.1593 9.83278C11.1924 9.66651 11.274 9.51378 11.3939 9.39391C11.5138 9.27403 11.6665 9.1924 11.8328 9.15933C11.999 9.12625 12.1714 9.14323 12.328 9.2081C12.4846 9.27298 12.6185 9.38284 12.7127 9.5238C12.8069 9.66475 12.8571 9.83047 12.8571 10C12.8571 10.2273 12.7668 10.4453 12.6061 10.6061C12.4453 10.7668 12.2273 10.8571 12 10.8571Z" fill="#1A1A1A"/>
                  <path d="M12 10.8571C11.8305 10.8571 11.6648 10.8069 11.5238 10.7127C11.3828 10.6185 11.273 10.4846 11.2081 10.328C11.1432 10.1714 11.1263 9.99905 11.1593 9.83278C11.1924 9.66651 11.274 9.51378 11.3939 9.39391C11.5138 9.27403 11.6665 9.1924 11.8328 9.15933C11.999 9.12625 12.1714 9.14323 12.328 9.2081C12.4846 9.27298 12.6185 9.38284 12.7127 9.5238C12.8069 9.66475 12.8571 9.83047 12.8571 10C12.8571 10.2273 12.7668 10.4453 12.6061 10.6061C12.4453 10.7668 12.2273 10.8571 12 10.8571Z" fill="#1A1A1A"/>
                </svg>Магазины</a>
              </li>
              <li className="header-other__item">           
                <a href="#" className="header-other__link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H5Z" fill="#1A1A1A"/>
                </svg>Меню</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

