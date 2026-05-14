function App() {
  return (
    <div>
      <header>
        <a className="site-logo" href="#anasayfa" aria-label="Chicky ana sayfa">
          <img src="/images/logo.jpeg" alt="Chicky logo" />
          <span>Chicky</span>
        </a>

        <nav>
          <a href="#anasayfa">Ana Sayfa</a>
          <a href="#menuler">Menülerimiz</a>
          <a href="#iletisim">İletişim</a>
          <a href="#hakkimizda">Hakkımızda</a>
        </nav>
      </header>

      <main>
        <section id="anasayfa" className="hero">
          <div className="hero-content">
            <span className="hero-badge">Sıcak • Doyurucu • Lezzetli</span>

            <h2>Chicky Tavuk Döner</h2>

            <p>
              Bol malzemeli dürümler, özel soslar ve sıcacık tavuk döner
              lezzetiyle Chicky seni bekliyor.
            </p>

            <a className="hero-button" href="#menuler">
              Menülerimize Bak
            </a>
          </div>
        </section>

        <section className="gallery-section">
          <span className="section-badge">Chicky Lezzetleri</span>

          <h2>Chicky’den Kareler</h2>

          <p className="section-description">
            Sıcak servis, bol malzemeli dürümler ve iştah açan Chicky
            lezzetleri.
          </p>

          <div className="gallery-grid">
            <div className="gallery-card">
              <img src="/images/gallery-1.jpeg" alt="Chicky işletme görseli 1" />
            </div>

            <div className="gallery-card">
              <img src="/images/gallery-2.jpeg" alt="Chicky işletme görseli 2" />
            </div>

            <div className="gallery-card">
              <img src="/images/gallery-3.jpeg" alt="Chicky işletme görseli 3" />
            </div>
          </div>
        </section>

        <section className="seo-section">
  <span className="section-badge">Çay’da Chicky Lezzeti</span>

  <h2>Çay/Afyonkarahisar Tavuk Döner ve Dürüm Lezzetleri</h2>

  <p>
    Chicky, Çay/Afyonkarahisar’da sıcak servis edilen tavuk döner, soslu dürüm,
    burger menü, ekmek arası lezzetler ve paket servis seçenekleriyle hizmet
    verir. Bol malzemeli dürümlerimiz, özel soslarımız ve doyurucu menülerimizle
    hızlı, lezzetli ve pratik bir yemek deneyimi sunuyoruz.
  </p>

  <p>
    Chicky menüsünde Chicky Dürüm, Chicky Mexicano, Chicky Barbekü, Chicky
    Garlic, Chicky Cheese, tavuk burger, et burger, ekmek arası tavuk döner,
    patates, soğan halkası, nugget ve içecek seçenekleri bulunur.
  </p>

  <p>
    Çay’da tavuk döner, dürüm, burger veya paket servis arayanlar için Chicky;
    lezzetli menüleri, kolay ulaşılabilir konumu ve hızlı iletişim seçenekleriyle
    müşterilerini bekliyor.
  </p>
</section>

       <section id="menuler" className="menu-section">
  <span className="section-badge">Lezzet Seçimi</span>

  <h2>Menülerimiz</h2>

  <p className="section-description">
    Chicky’nin soslu dürümleri, doyurucu menüleri, burgerleri, ekmek arası
    lezzetleri ve içecek seçenekleri.
  </p>

  <div className="menu-category-grid">
    <div className="menu-category">
      <h3>Soslu Dürümler</h3>

      <div className="price-line">
        <span>Chicky Dürüm</span>
        <strong>130 TL</strong>
      </div>

      <div className="price-line">
        <span>Chicky Mexicano</span>
        <strong>140 TL</strong>
      </div>

      <div className="price-line">
        <span>Chicky Barbekü</span>
        <strong>140 TL</strong>
      </div>

      <div className="price-line">
        <span>Chicky Garlic</span>
        <strong>140 TL</strong>
      </div>

      <div className="price-line">
        <span>Chicky Cheese</span>
        <strong>160 TL</strong>
      </div>

      <div className="price-line price-extra">
        <span>Jumbo Fark</span>
        <strong>+40 TL</strong>
      </div>

      <div className="price-line price-extra">
        <span>King Fark</span>
        <strong>+60 TL</strong>
      </div>
    </div>

    <div className="menu-category">
      <h3>Dürüm Menüleri</h3>

      <div className="price-line">
        <span>Chicky + Patates + Ayran</span>
        <strong>190 TL</strong>
      </div>

      <div className="price-line">
        <span>Chicky + Patates + Meşrubat</span>
        <strong>210 TL</strong>
      </div>

      <div className="price-line">
        <span>Chicky + Soğan Halkası + Ayran</span>
        <strong>190 TL</strong>
      </div>

      <div className="price-line">
        <span>Chicky + Soğan Halkası + Meşrubat</span>
        <strong>210 TL</strong>
      </div>

      <div className="price-line">
        <span>Chicky + Nugget + Ayran</span>
        <strong>190 TL</strong>
      </div>

      <div className="price-line">
        <span>Chicky + Nugget + Meşrubat</span>
        <strong>210 TL</strong>
      </div>
    </div>

    <div className="menu-category">
      <h3>Ekstralar</h3>

      <div className="price-line">
        <span>Patates</span>
        <strong>Seçenekli</strong>
      </div>

      <div className="price-line">
        <span>Soğan Halkası</span>
        <strong>Seçenekli</strong>
      </div>

      <div className="price-line">
        <span>Nugget</span>
        <strong>Seçenekli</strong>
      </div>

      <div className="price-line">
        <span>6’lı</span>
        <strong>70 TL</strong>
      </div>

      <div className="price-line">
        <span>9’lu</span>
        <strong>90 TL</strong>
      </div>

      <div className="price-line">
        <span>12’li</span>
        <strong>120 TL</strong>
      </div>

      <div className="price-line">
        <span>Karışık Sepet</span>
        <strong>150 TL</strong>
      </div>
    </div>

    <div className="menu-category">
      <h3>Burger Menüleri</h3>

      <div className="price-line">
        <span>Tavuk Burger + Patates + Ayran</span>
        <strong>200 TL</strong>
      </div>

      <div className="price-line">
        <span>Tavuk Burger + Patates + Kola</span>
        <strong>230 TL</strong>
      </div>

      <div className="price-line">
        <span>Et Burger + Patates + Ayran</span>
        <strong>250 TL</strong>
      </div>

      <div className="price-line">
        <span>Et Burger + Patates + Kola</span>
        <strong>280 TL</strong>
      </div>
    </div>

    <div className="menu-category">
      <h3>Ekmek Arası</h3>

      <div className="price-line">
        <span>Tavuk Döner</span>
        <strong>100 TL</strong>
      </div>

      <div className="price-line">
        <span>Ekmek Arası Köfte</span>
        <strong>150 TL</strong>
      </div>
    </div>

    <div className="menu-category">
      <h3>Meşrubatlar</h3>

      <div className="price-line">
        <span>Teneke Meşrubat</span>
        <strong>60 TL</strong>
      </div>

      <div className="price-line">
        <span>Şişe Meşrubat</span>
        <strong>35 TL</strong>
      </div>

      <div className="price-line">
        <span>Küçük Ayran</span>
        <strong>15 TL</strong>
      </div>

      <div className="price-line">
        <span>Büyük Ayran</span>
        <strong>30 TL</strong>
      </div>

      <div className="price-line">
        <span>Maden Suyu</span>
        <strong>15 TL</strong>
      </div>

      <div className="price-line">
        <span>Meyveli Maden Suyu</span>
        <strong>20 TL</strong>
      </div>

      <div className="price-line">
        <span>Su</span>
        <strong>10 TL</strong>
      </div>
    </div>
  </div>
</section>

        <section id="iletisim" className="contact-section">
  <span className="section-badge">Bize Ulaş</span>

  <h2>İletişim</h2>

  <p className="section-description">
    Chicky lezzetlerine ulaşmak, sipariş vermek veya konum bilgisi almak için
    bizimle iletişime geçebilirsin.
  </p>

  <div className="contact-grid">
    <div className="contact-card">
  <h3>Telefon</h3>
  <p>0540 263 03 03</p>

  <div className="contact-actions">
    <a
      className="contact-button"
      href="https://wa.me/905402630303"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp’tan Yaz
    </a>

    <a className="contact-button contact-button-outline" href="tel:+905402630303">
      Ara
    </a>
  </div>
</div>

    <div className="contact-card">
      <h3>Adres</h3>
      <p>
       Şirinevler, Uzun Sk. Özel Adile Hanım Kız Öğrenci Yurdu No:58, 03700, 03700 Çay/Afyonkarahisar
      </p>

      <a
        className="contact-button"
        href="https://www.google.com/maps/place/Chicky/@38.5928534,31.0231261,17z/data=!4m14!1m7!3m6!1s0x14cfa44270e0cc4b:0xcc2086a91b0df670!2zw5Z6ZWwgQWRpbGUgSGFuxLFtIEvEsXogw5bEn3JlbmNpIFl1cmR1!8m2!3d38.59311!4d31.018316!16s%2Fg%2F113fb7gzx!3m5!1s0x14cfa5002b722217:0xcc21075aa2f4c4d4!8m2!3d38.5930422!4d31.0243412!16s%2Fg%2F11yyh29lh9?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noreferrer"
      >
        Konuma Git
      </a>
    </div>

    <div className="contact-card">
      <h3>Sosyal Medya</h3>
      <p>@cay_chicky</p>

      <a
        className="contact-button"
        href="https://www.instagram.com/cay_chicky"
        target="_blank"
        rel="noreferrer"
      >
        Instagram’a Git
      </a>
    </div>
  </div>
</section>

<section id="hakkimizda" className="about-section">
          <div className="about-content">
            <span className="section-badge">Biz Kimiz?</span>

            <h2>Hakkımızda</h2>

            <p>
              Chicky olarak tavuk döneri sadece hızlı bir yemek değil, keyifli
              ve doyurucu bir lezzet deneyimi olarak sunuyoruz. Sıcak servis,
              özel soslar ve bol malzemeli dürümlerimizle misafirlerimize her
              zaman kaliteli bir lezzet ulaştırmayı hedefliyoruz.
            </p>

            <p>
              Menü seçeneklerimizle hem klasik lezzetleri sevenlere hem de
              farklı soslar denemek isteyenlere hitap ediyoruz.
            </p>
          </div>
        </section>
      </main>

<footer className="footer">
  <p>© 2026 Chicky. Tüm hakları saklıdır.</p>
  <p>Tavuk dönerin en lezzetli hali.</p>
</footer>

<a className="floating-call" href="tel:+905402630303">
  Sipariş İçin Ara
</a>
    </div>
  );
}

export default App;