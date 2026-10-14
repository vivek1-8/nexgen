import siteConfig from '../data/siteConfig.js'

export const mailto = (subject = '', body = '') =>
  `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export const whatsappLink = (text = '') =>
  siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}` : ''
