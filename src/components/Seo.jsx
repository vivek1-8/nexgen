import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import siteConfig from '../data/siteConfig.js'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Sets the page title, description and Open Graph tags for the current page.
export default function Seo({ title, description, image }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const full = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | Web development for growing businesses`
    document.title = full
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', siteConfig.url + pathname)
    if (image) setMeta('property', 'og:image', image.startsWith('http') ? image : siteConfig.url + image)
  }, [title, description, image, pathname])
  return null
}
