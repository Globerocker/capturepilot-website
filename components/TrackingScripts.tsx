import Script from "next/script";

/**
 * Site-wide tracking pixels. Fires only when the corresponding env var is set,
 * so the site stays cookie-clean until IDs are provisioned.
 *
 * Required env vars (set in Vercel project settings):
 *   NEXT_PUBLIC_GA4_MEASUREMENT_ID    e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_GTM_CONTAINER_ID      e.g. GTM-XXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID         e.g. 1234567890123456
 *   NEXT_PUBLIC_LINKEDIN_PARTNER_ID   e.g. 1234567
 *   NEXT_PUBLIC_GOOGLE_ADS_ID         e.g. AW-1234567890
 *
 * All read via `process.env.NEXT_PUBLIC_*` so the value is inlined at build
 * time. Tag-Manager-managed sites can ignore the GA/Meta/LinkedIn vars and
 * route everything through GTM by setting only NEXT_PUBLIC_GTM_CONTAINER_ID.
 */
export default function TrackingScripts() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedinId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const fbAppId = process.env.NEXT_PUBLIC_FB_APP_ID;

  return (
    <>
      {gtmId && (
        <Script id="gtm-init" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}</Script>
      )}

      {(ga4Id || googleAdsId) && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id || googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${ga4Id ? `gtag('config', '${ga4Id}', { send_page_view: true });` : ""}
            ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
          `}</Script>
        </>
      )}

      {metaPixelId && (
        // Raw <script> (not next/script) so the snippet lands in the SSR HTML
        // response. Meta's Event Setup Tool and domain crawler don't execute
        // JS, so anything emitted only after hydration is invisible to them.
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`,
          }}
        />
      )}

      {fbAppId && (
        <Script id="fb-sdk" strategy="afterInteractive">{`
          window.fbAsyncInit = function() {
            FB.init({ appId: '${fbAppId}', cookie: true, xfbml: true, version: 'v22.0' });
            FB.AppEvents.logPageView();
          };
          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `}</Script>
      )}

      {linkedinId && (
        <Script id="linkedin-insight" strategy="afterInteractive">{`
          _linkedin_partner_id = "${linkedinId}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l){if(!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];
          var b=document.createElement("script");b.type="text/javascript";b.async=true;
          b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b,s);})(window.lintrk);
        `}</Script>
      )}
    </>
  );
}

/** Optional noscript fallback for GTM — include inside <body> if you use GTM. */
export function TrackingNoscript() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <>
      {gtmId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
      {metaPixelId && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
}
