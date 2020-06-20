const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports = {
    paths: function(paths, env) {
        paths.appSrc     = resolveApp('.');
        paths.appIndexJs = resolveApp('docs/index.js');
        //paths.appTypeDeclarations = resolveApp('client/react-app-env.d.ts');
        return paths;
    }
}
