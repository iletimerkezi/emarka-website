import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

export default function B186() {

  return (
    <div className="main-bg margin-top-none">
      <Layout>
        <header>
          <div class="hero shadow--lw">
            <div class="container">
              <h1 class="hero__title">B186 Nedir?</h1>
              <p class="hero__subtitle">
                B186, Bilgi Teknolojileri Kurumu (BTK) tarafından eMarka İletişim A.Ş.'ye tahsis edilmiş olan operatör kodudur ve 12.04.2016 tarihli,
                {' '}
                <Link to="https://btk.gov.tr/File/?path=ROOT%2f1%2fDocuments%2fKurul+Karar%C4%B1%2fCLIya+Iliskin+Duzenlemeler_12_04_2016.pdf">
                2016/DK-YED/211 sayılı kurul kararı
                </Link>
                {' '}
                gereğince servis üzerinden geçen tüm SMS mesajlarının sonuna otomatik olarak eklenir.
              </p>
              <div>
                <Link
                  to="/consent"
                  class="button button--danger button--outline button--lg">
                  SMS Şikayet ve İptal Formu
                </Link>
              </div>
              <p className='margin-top--lg'>
                Bilgi Teknolojileri ve İletişim Kurumu (BTK) tarafından
                12 Nisan 2016 tarihinde yapılan düzenleme ile, alfanümerik karakterli
                CLI’a (Arayan Hat Bilgisi) sahip SMS başlatan işletmeciler tarafından,
                SMS metninin sonuna gelecek şekilde eklenecek, haberleşmenin gizliliğine
                yönelik mevzuata riayet edilerek, kendilerine BTK tarafından tahsis edilen
                Numara Taşınabilirliği Yönlendirme Kodu’nun (B ile başlayan BXXX yapısındaki kod)
                eklenmesi zorunlu hale getirilmiştir. Böylece SMS’in hangi işletmeci üzerinden
                gönderildiği ve dolayısıyla <b>hangi abone tarafından</b> atıldığı tespit edilebilecek,
                kararı nedeni ile abonelerimiz tarafından gönderilen tüm SMS'lerin sonuna operatör
                kodumuz olan <b>B186</b> otomatik olarak eklenmektedir.
              </p>

              <p className='margin-top--md'>
                Sistemimizde ortak liste veya numara havuzu <b>bulunmamaktadır.</b>
                Mesajin sonunda bulunan B186 kodu ile GSM numaranıza gelmiş olan
                ticari içerikli SMS mesajları engellemek istiyorsanız tıklayınız.
              </p>
            </div>
          </div>
        </header>
      </Layout>
    </div>
  );
}