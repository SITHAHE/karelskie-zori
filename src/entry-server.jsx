import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Рендер приложения в строку HTML на этапе сборки (пре-рендеринг).
// Контент попадает в index.html, поэтому поисковики (особенно Яндекс)
// видят текст без выполнения JavaScript.
export function render() {
  return renderToString(<App />)
}
