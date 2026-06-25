import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

// Импортируем собранный SSR-бандл и рендерим приложение в строку.
const ssrEntry = pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href
const { render } = await import(ssrEntry)
const appHtml = render()

const indexPath = path.resolve('dist/index.html')
let html = fs.readFileSync(indexPath, 'utf-8')

if (!html.includes('<div id="root"></div>')) {
  console.warn('prerender: маркер <div id="root"></div> не найден — пропускаю')
} else {
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  fs.writeFileSync(indexPath, html)
  console.log(`prerender: контент (${appHtml.length} символов) внедрён в dist/index.html`)
}
