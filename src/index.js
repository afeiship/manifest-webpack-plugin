export default class ManifestWebpackPlugin{
  static defaults = {
    dist:'dist'
  };
  
  constructor(inOptions){
    this.options = Object.assign(inOptions,ManifestWebpackPlugin.defaults);
  }
  
  apply(compiler){
    compiler.plugin('emit',this.onDone);
  }

  onDone = (compilation, callback) =>{    
    //console.log(inStata);
    for (var filename in compilation.assets) {
      console.log(file);
    }
  };
}

