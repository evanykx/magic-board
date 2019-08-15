const expect = require('chai').expect;

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

describe('Test root path of current project', () => {
    it('appDirectory', () => {
        expect(appDirectory).to.be.equal(path.dirname(path.dirname(__filename)))
    })
});