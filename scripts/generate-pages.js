const ejs = require('ejs')
const path = require('path')
const fs = require('fs-extra')
const pages = require('../pages-config')

const PUBLIC_DIR = path.resolve(__dirname, '../public/')

const generatePages = () => {
  pages.forEach(page => {
    ejs.renderFile(page.template, page, {}, (err, str) => {
      if (err) {
        console.log(err)
        return
      }
      
      const filename = path.resolve(PUBLIC_DIR, page.filename)
      console.log('Generated page:', filename)
      fs.writeFileSync(filename, str)
    })
  })
}

module.exports = generatePages