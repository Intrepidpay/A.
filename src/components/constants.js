import React from 'react';

export const LANGUAGE_NAMES = {
  en: 'English',
  tr: 'Türkçe', // Turkish added
  ru: 'Русский',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  ja: '日本語'
};
export const POPUP_TEXTS = {
  en: 'Choose your preferred language',
  tr: 'Tercih ettiğiniz dili seçin', // Turkish added
  ru: 'Выберите предпочитаемый язык',
  fr: 'Choisissez votre langue préférée',
  es: 'Elige tu idioma preferido',
  de: 'Wählen Sie Ihre bevorzugte Sprache',
  ja: '希望の言語を選択してください'
};
export const SELECT_BUTTON_TEXTS = {
  en: 'Select',
  tr: 'Seç', // Turkish added
  ru: 'Выбрать',
  fr: 'Sélectionner',
  es: 'Seleccionar',
  de: 'Auswählen',
  ja: '選択する'
};
export const TRANSLATING_MESSAGE = {
  en: 'Translating your experience...',
  tr: 'Deneyiminiz çevriliyor...', // Turkish added
  ru: 'Переводим ваш интерфейс...',
  fr: 'Traduction de votre expérience...',
  es: 'Traduciendo tu experiencia...',
  de: 'Ihre Erfahrung wird übersetzt...',
  ja: 'エクスペリエンスを翻訳しています...'
};
// Turkish added after English
export const SUPPORTED_LANGUAGES = ['en', 'tr', 'ru', 'fr', 'es', 'de', 'ja'];

/* --- New: Stripe payment popup text constants (added, does not modify above) --- */
export const STRIPE_POPUP_GREETING = {
  en: 'Payment Guide',
  tr: 'Ödeme Rehberi',
  ru: 'Руководство по оплате',
  fr: 'Guide de paiement',
  es: 'Guía de pago',
  de: 'Zahlungsanleitung',
  ja: 'お支払いガイド'
};

export const STRIPE_POPUP_REDIRECT_TEXT = {
  en: () => (
    <>
      Visa/Mastercard payments are securely handled by our payment partner, <strong>BANXA</strong>. Your invoice pending amount and receiving address have already been registered on the Banxa page, simply click “<strong>Create Order</strong>”, as shown in the image below.
    </>
  ),
  tr: () => (
    <>
      Visa/Mastercard ödemeleri, ödeme ortağımız <strong>BANXA</strong> tarafından güvenli bir şekilde işlenir. Faturanızın bekleyen tutarı ve alıcı adresi Banxa sayfasına zaten kaydedilmiştir; aşağıdaki görselde gösterildiği gibi “<strong>Sipariş Oluştur</strong>” seçeneğine tıklamanız yeterlidir.
    </>
  ),
  ru: () => (
    <>
      Платежи Visa/Mastercard безопасно обрабатываются нашим платежным партнером <strong>BANXA</strong>. Сумма, ожидающая оплаты по вашему счету, и адрес получателя уже зарегистрированы на странице Banxa; просто нажмите «<strong>Создать заказ</strong>», как показано на изображении ниже.
    </>
  ),
  fr: () => (
    <>
      Les paiements Visa/Mastercard sont traités en toute sécurité par notre partenaire de paiement, <strong>BANXA</strong>. Le montant restant dû sur votre facture et l’adresse de réception ont déjà été enregistrés sur la page Banxa ; il vous suffit de cliquer sur « <strong>Créer une commande</strong> », comme indiqué sur l’image ci-dessous.
    </>
  ),
  es: () => (
    <>
      Los pagos con Visa/Mastercard son gestionados de forma segura por nuestro socio de pagos, <strong>BANXA</strong>. El importe pendiente de su factura y la dirección de recepción ya han sido registrados en la página de Banxa; simplemente haga clic en “<strong>Crear pedido</strong>”, como se muestra en la imagen a continuación.
    </>
  ),
  de: () => (
    <>
      Visa/Mastercard-Zahlungen werden sicher von unserem Zahlungspartner <strong>BANXA</strong> abgewickelt. Der ausstehende Betrag Ihrer Rechnung und die Empfangsadresse wurden bereits auf der Banxa-Seite hinterlegt. Klicken Sie einfach auf „<strong>Bestellung erstellen</strong>“, wie im Bild unten gezeigt.
    </>
  ),
  ja: () => (
    <>
      Visa/Mastercardでのお支払いは、決済パートナーの<strong>BANXA</strong>が安全に処理します。請求書の未払い金額と受取アドレスは、すでにBanxaのページに登録されていますので、下の画像に示されているように、<strong>「注文を作成」</strong>をクリックするだけです。
    </>
  )
};

export const STRIPE_POPUP_THANKS_TEXT = {
  en: () => (
    <>
      Banxa may ask you to complete a verification step. This is a normal part of the payment process. Simply complete the requested verification and proceed with your payment. To start, click the <strong>“Continue”</strong> button below to open your invoice on Banxa and complete the payment.
    </>
  ),
  tr: () => (
    <>
      Banxa sizden bir doğrulama adımını tamamlamanızı isteyebilir. Bu, ödeme sürecinin normal bir parçasıdır. İstenen doğrulamayı tamamlayın ve ödemenize devam edin. Başlamak için aşağıdaki <strong>“Devam Et”</strong> düğmesine tıklayarak Banxa üzerindeki faturanızı açın ve ödemenizi tamamlayın.
    </>
  ),
  ru: () => (
    <>
      Banxa может попросить вас пройти проверку. Это обычная часть процесса оплаты. Просто пройдите запрошенную проверку и продолжите оплату. Для начала нажмите кнопку <strong>«Продолжить»</strong> ниже, чтобы открыть свой счет на странице Banxa и завершить оплату.
    </>
  ),
  fr: () => (
    <>
      Banxa peut vous demander d’effectuer une étape de vérification. Il s’agit d’une étape normale du processus de paiement. Effectuez simplement la vérification demandée et poursuivez votre paiement. Pour commencer, cliquez sur le bouton <strong>« Continuer »</strong> ci-dessous afin d’ouvrir votre facture sur Banxa et de finaliser le paiement.
    </>
  ),
  es: () => (
    <>
      Es posible que Banxa le solicite completar un paso de verificación. Esto es una parte normal del proceso de pago. Simplemente complete la verificación solicitada y continúe con su pago. Para comenzar, haga clic en el botón <strong>“Continuar”</strong> a continuación para abrir su factura en Banxa y completar el pago.
    </>
  ),
  de: () => (
    <>
      Banxa kann Sie auffordern, einen Verifizierungsschritt durchzuführen. Dies ist ein normaler Bestandteil des Zahlungsvorgangs. Führen Sie einfach die angeforderte Verifizierung durch und fahren Sie mit Ihrer Zahlung fort. Klicken Sie zunächst auf die unten stehende Schaltfläche <strong>„Weiter“</strong>, um Ihre Rechnung auf Banxa zu öffnen und die Zahlung abzuschließen.
    </>
  ),
  ja: () => (
    <>
      Banxaから本人確認などの認証手続きを求められる場合があります。これは通常の支払い手続きの一部です。案内に従って認証を完了し、そのままお支払いを進めてください。まず、下の<strong>「続行」</strong>ボタンをクリックしてBanxaの請求書ページを開き、お支払いを完了してください。
    </>
  )
};

export const STRIPE_PAY_BUTTON_TEXT = {
  en: 'Continue',
  tr: "Devam Et",
  ru: 'Продолжить',
  fr: 'Continuer',
  es: 'Continuar',
  de: 'Weiter',
  ja: '続行'
};

export const STRIPE_POPUP_CLOSE_ARIA_LABEL = {
  en: 'Close',
  tr: 'Kapat',
  ru: 'Закрыть',
  fr: 'Fermer',
  es: 'Cerrar',
  de: 'Schließen',
  ja: '閉じる'
};
