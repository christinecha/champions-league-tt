const path = require('path')
const fs = require('fs-extra')

const ASSETS_DIR = path.resolve(__dirname, '../assets/')
const PUBLIC_DIR = path.resolve(__dirname, '../public/assets')

fs.copySync(ASSETS_DIR, PUBLIC_DIR)