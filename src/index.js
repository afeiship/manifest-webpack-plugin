export default class ManifestWebpackPlugin{
  apply(compiler){
    compiler.plugin('done',this.onDone);
  }

  onDone = (inStata) =>{
    console.log('========= instate start ==============');
    console.log(inStata);
    console.log('========= instate end  ==============');
  };
}

