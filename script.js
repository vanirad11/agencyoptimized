const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;
  const fields = form.querySelectorAll('input, textarea');

  fields.forEach(field => {
    const error = field.parentElement.querySelector('.error');
    error.textContent = '';
    field.removeAttribute('aria-invalid');

    if (!field.value.trim()) {
      error.textContent = 'This field is required.';
      field.setAttribute('aria-invalid', 'true');
      valid = false;
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      error.textContent = 'Please enter a valid email address.';
      field.setAttribute('aria-invalid', 'true');
      valid = false;
    }
  });

  if (!valid) {
    status.textContent = '';
    return;
  }

  status.textContent = 'Thanks — your inquiry is ready to go. We’ll be in touch soon.';
  form.reset();
});
