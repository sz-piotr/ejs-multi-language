const fsx = require('fs-extra')

fsx.removeSync('dist')
fsx.copySync('src', 'dist')
