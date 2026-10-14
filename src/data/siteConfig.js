// =====================================================================
//  SITE SETTINGS: edit this file to change company details everywhere.
// =====================================================================
const siteConfig = {
  name: 'NexGen Technology',
  url: 'https://www.example.com', // your live domain (used for canonical/OG tags)
  tagline: 'Web development studio',

  // TODO: replace with your real contact details.
  email: 'hello@example.com',
  // WhatsApp number in international format, digits only (e.g. "919876543210").
  // Leave empty ('') to hide all WhatsApp links.
  whatsapp: '',
  phoneDisplay: '', // optional, e.g. "+91 98765 43210"
  location: '',     // optional, e.g. "Surat, India"

  // Social links. Add objects like { label: 'LinkedIn', href: 'https://...' }.
  // Empty array = no social links shown.
  socials: [],

  // Contact form delivery. Without a backend, the form opens the visitor's email app
  // or WhatsApp with the message pre-filled. To receive submissions directly,
  // paste a form-service endpoint here (e.g. Formspree: 'https://formspree.io/f/xxxxxxx').
  formEndpoint: '',

  // Budget options in the contact form. Change the currency/ranges to suit you.
  budgets: ['Under ₹50,000', '₹50,000 – ₹1,50,000', '₹1,50,000 – ₹5,00,000', 'Above ₹5,00,000', 'Not sure yet'],
}

export default siteConfig
