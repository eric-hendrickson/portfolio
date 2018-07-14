const autoprefixer = require('autoprefixer')
const htmlStandards = require('spike-html-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.SPIKE_ENV

const projects = require('./assets/js/projects.js');

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.html', css: '*(**/)*.scss' },
  ignore: ['**/layout.html', '**/_*', '**/.*', 'README.md', 'yarn.lock', 'package-lock.json', 'shrinkwrap.yaml'],
  module: {
    rules: [
		{ 
			test: /\.scss/, 
			use: [{ 
				loader: 'sass-loader' 
			}],
		},
		{
			test: /bootstrap\.native/,
			use: [{
			  loader: 'bootstrap.native-loader'
			}],
		}
	],
  },
  reshape: htmlStandards({
    parser: false,
    locals: (ctx) => { 
		return { 
			pageId: pageId(ctx), 
			projects: projects 
		} 
	},
    minify: env === 'production'
  }),
  postcss: { plugins: [autoprefixer()] },
  babel: jsStandards()
}
