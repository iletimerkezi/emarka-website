import React from 'react';
import Layout from '@theme/Layout';
import { useForm, ValidationError } from '@formspree/react';

export default function Consent() {

  const [state, handleSubmit] = useForm("mgeqrkpr");

  return (
    <div className="main-bg margin-top-none">
      <Layout>
        <header>
          <div class="hero shadow--lw">
            <div class="container">
              <h1 class="hero__title">eMarka Ticari SMS Şikayet Sistemi</h1>

              <p class="hero__subtitle">
                Abonelerimiz tarafından gönderilen tüm mesajların sonuna operatör kodumuz olan <b>B186</b> otomatik olarak eklenmektedir. Ticari içerikli mesajları engellemek için aşağıdaki formu doldurmanız yeterlidir.
              </p>

              {state.succeeded? (
                <div class="alert alert--success" role="alert">
                  Şikayet oluşturulmuştur, teşekkür ederiz.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="margin-top--md margin-bottom--md form-floating">
                    <input
                      name="sender"
                      placeholder=""
                      type="text"
                      id="sender"
                      className="form-control" />
                    <label htmlFor="sender">
                      Mesajın Başlığı
                    </label>
                  </div>
                  <div className="margin-top--md margin-bottom--md form-floating">
                    <input
                      name="to"
                      placeholder=""
                      type="text"
                      id="to"
                      className="form-control" />
                    <label htmlFor="to">
                      Mesajın Geldiği Telefon Numarası
                    </label>
                  </div>
                  <div className="margin-top--md margin-bottom--md form-floating">
                    <input
                      name="body"
                      placeholder=""
                      type="text"
                      id="body"
                      className="form-control" />
                    <label htmlFor="body">
                      Mesaj içeriği
                    </label>
                  </div>
                  <div className="margin-top--md margin-bottom--md form-floating">
                    <input
                      name="email"
                      placeholder=""
                      type="text"
                      id="email"
                      className="form-control" />
                    <label htmlFor="email">
                      Email Adresiniz
                    </label>
                  </div>
                  <button
                    type="submit" disabled={state.submitting}
                    className="button button--danger button--outline button--lg">
                    Şikayet Talebi Oluştur
                  </button>
                </form>
              )}
            </div>
          </div>
        </header>
      </Layout>
    </div>
  );
}