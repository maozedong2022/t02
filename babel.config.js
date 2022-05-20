module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      // style: true 
      style: (name) => `${name}/style/less`  //指定样式路径 style: (name) 就会换成这个路径${name}/style/less
    }, 'vant']
  ]
}
