module.exports = {
  presets: [
    '@babel/preset-env',
    /* dont need to import react when only using jsx */
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
}
