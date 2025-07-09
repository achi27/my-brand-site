document.addEventListener('DOMContentLoaded', () => {
  const emailLink = document.querySelector('a[href^="mailto:"]');

  emailLink.addEventListener('click', (e) => {
    e.preventDefault(); // 防止預設開啟 email 應用程式

    const email = emailLink.textContent.trim();
    navigator.clipboard.writeText(email)
      .then(() => showToast(`📋 已複製 Email：${email}`))
      .catch(() => showToast('❌ 複製失敗，請手動複製'));
  });

  function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'toast';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
});
