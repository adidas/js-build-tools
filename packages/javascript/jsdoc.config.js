module.exports = {
  opts: {
    template: 'node_modules/ink-docstrap/template',
    destination: 'doc'
  },
  tags: {
    allowUnknownTag: true
  },
  plugins: [ 'plugins/markdown' ],
  templates: {
    logoFile: '',
    cleverLinks: false,
    monospaceLinks: false,
    dateFormat: 'ddd MMM Do YYYY',
    outputSourceFiles: true,
    outputSourcePath: true,
    footer: '',
    copyright: '',
    navType: 'vertical',
    theme: 'flatly',
    linenums: true,
    collapseSymbols: false,
    inverseNav: false,
    protocol: 'html://',
    methodHeadingReturns: false
  },
  markdown: {
    parser: 'gfm',
    hardwrap: true
  }
};
