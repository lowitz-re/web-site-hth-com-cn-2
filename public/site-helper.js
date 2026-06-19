'use strict';

(function() {
  const CONFIG = Object.freeze({
    siteUrl: 'https://web-site-hth.com.cn',
    keyword: '华体会',
    cardTitle: '站点指引',
    tagLabel: '关键词'
  });

  const TAG_COLORS = ['#e8f5e9', '#fff3e0', '#e3f2fd', '#fce4ec', '#f3e5f5', '#e0f2f1'];
  const TAG_BORDER = ['#4caf50', '#ff9800', '#2196f3', '#f44336', '#9c27b0', '#009688'];

  function createTagBadge(text, index) {
    const span = document.createElement('span');
    span.textContent = text;
    const idx = index % TAG_COLORS.length;
    span.style.cssText = `display:inline-block;padding:4px 12px;margin:4px;font-size:14px;border-radius:12px;background:${TAG_COLORS[idx]};border:1px solid ${TAG_BORDER[idx]};color:#333;font-weight:500;`;
    return span;
  }

  function buildInfoCard(config) {
    const card = document.createElement('div');
    card.style.cssText = 'max-width:360px;margin:20px auto;padding:20px;border-radius:16px;box-shadow:0 2px 12px rgba(0,0,0,0.1);background:#fff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;';

    const title = document.createElement('h3');
    title.textContent = config.cardTitle;
    title.style.cssText = 'margin:0 0 16px 0;font-size:20px;color:#222;text-align:center;';

    const link = document.createElement('a');
    link.href = config.siteUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '访问网站 →';
    link.style.cssText = 'display:inline-block;margin:0 0 16px 0;padding:8px 20px;background:#1976d2;color:#fff;text-decoration:none;border-radius:8px;font-size:15px;';

    const tagWrapper = document.createElement('div');
    tagWrapper.style.cssText = 'text-align:center;margin:12px 0;';

    const label = document.createElement('span');
    label.textContent = config.tagLabel + ': ';
    label.style.cssText = 'font-size:14px;color:#555;';

    const badge = createTagBadge(config.keyword, 0);

    const note = document.createElement('p');
    note.textContent = '请复制或点击上方链接，在浏览器中打开即可查看详情。';
    note.style.cssText = 'margin:16px 0 0 0;font-size:13px;color:#666;line-height:1.5;border-top:1px solid #eee;padding-top:12px;';

    tagWrapper.appendChild(label);
    tagWrapper.appendChild(badge);

    card.appendChild(title);
    card.appendChild(link);
    card.appendChild(tagWrapper);
    card.appendChild(note);

    return card;
  }

  function insertCard() {
    const config = CONFIG;
    const card = buildInfoCard(config);
    const places = document.querySelectorAll('.site-helper-target, [data-site-helper]');
    if (places.length) {
      places.forEach(el => el.appendChild(card.cloneNode(true)));
    } else {
      const body = document.body;
      if (body) {
        body.insertBefore(card, body.firstChild);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertCard);
  } else {
    insertCard();
  }
})();