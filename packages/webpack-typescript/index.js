const rules = [
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
      compilerOptions: {
        declaration: false
      }
    }
  }
];

module.exports = {
  rules,
  extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
};
