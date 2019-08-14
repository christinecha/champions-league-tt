const path = require('path')
const watch = require('node-watch')
const generatePages = require('./generate-pages')

const PAGES_DIR = path.resolve(__dirname, '../client/pages/')
 
watch(PAGES_DIR, { recursive: true }, () => {
  generatePages()
});