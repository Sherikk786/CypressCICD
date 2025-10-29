const { spawn } = require('child_process');
const spec = process.env.SPEC || process.argv[2] || 'cypress/e2e/**/*.cy.ts';
const cmd = 'npx';
const args = ['cypress', 'run', '--spec', spec];
const p = spawn(cmd, args, { stdio: 'inherit', shell: true });
p.on('exit', code => process.exit(code));
