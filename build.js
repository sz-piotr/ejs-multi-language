const fsx = require('fs-extra')
const ejs = require('ejs')

fsx.removeSync('dist')
fsx.copySync('src/styles', 'dist/styles')

const translations = ['pl', 'en', 'ru']

for (const language of translations) {
  const html = ejs.render(
    fsx.readFileSync('src/index.ejs', 'utf-8'),
    JSON.parse(fsx.readFileSync(`src/translations/${language}.json`, 'utf-8')),
  )
  fsx.outputFileSync(`dist/${language}/index.html`, html)
  if (language === translations[0]) {
    fsx.outputFileSync(`dist/index.html`, html)
  }
}
