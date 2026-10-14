# NexGen Technology website

React + Vite + JavaScript (JSX) + Tailwind CSS + React Router + Framer Motion + Lucide.
Frontend only: no backend, database, API or CMS.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

## Add or update portfolio projects
Edit **`src/data/projects.js`** only. The file has a field guide and a ready-to-copy example (commented out).

1. Put screenshots in `public/projects/<project-name>/` (e.g. `cover.jpg`, `1.jpg`).
2. Add an object to the `projects` array (`id`, `slug`, `title`, `category`, `shortDescription`, `description`, `coverImage`, `gallery`, `technologies`, `liveUrl`, `githubUrl`, `featured`; optional `features`).
3. Save. It then appears automatically in:
   - the Work grid, with its category added to the filters,
   - its own page at `/work/<slug>`,
   - the home page, if `featured: true`.

Missing images show a neutral placeholder; empty `liveUrl` / `githubUrl` hide their buttons.
While the array is empty the site shows designed empty states and no fake work.

## Company details
Edit **`src/data/siteConfig.js`**: email, WhatsApp number (digits only, e.g. `919876543210`), phone, location, social links, budget options and live domain.
Replace the placeholder email `hello@example.com` before launch. WhatsApp and social links stay hidden until filled in.

## Contact form: how delivery works
There is no backend, so the form cannot send messages by itself.
- **Default:** "Send by email" opens the visitor's email app, and "Send on WhatsApp" opens WhatsApp, both with the message pre-filled. The site never claims a message was sent; it says nothing is sent until the visitor presses send.
- **To receive submissions directly:** create a form on a service such as Formspree and paste its endpoint into `formEndpoint` in `siteConfig.js`. The form then posts to it, and shows "Message sent" only if the service returns success, otherwise an error with your email address.

## Before going live
- Set `url` in `siteConfig.js` and make `og:image` in `index.html` an absolute URL.
- Hosting must rewrite all routes to `index.html` (`public/_redirects` for Netlify and `vercel.json` for Vercel are included).

## Structure
```
src/
  components/  Layout, ProjectCard, ProjectDetail, SafeImage, BrowserFrame, Seo, ...
  pages/       Home, Work, ProjectPage, Services, About, Contact, NotFound
  data/        projects.js, siteConfig.js, services.js, testimonials.js
  assets/      logo.png
```
Testimonials: add genuine ones to `src/data/testimonials.js`; the section appears only when the array has entries.
