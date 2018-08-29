// Vue.jsのソース解析を習熟するためのソース
// Vueの最初の初期化が関数定義だったため、ちゃんと動くのか、どのように動くのか検証するために実装した
(function(param){
  function SomeObj(options){
    console.log(options.msg+"Hi! "+param+" / instance of SomeObj? : " + (this instanceof SomeObj));
  }

  SomeObj.prototype.hoge = function(v){
    console.log("[X]"+v);
  }

  function ex1(Obj){
    Obj.p = param;
  }

  ex1(SomeObj); // Vue関数がひとつのオブジェクトとして存在していることを意味している

  console.log(SomeObj.p);

  v = new SomeObj({msg:"[Create]"}); // new 命令でVueというクラスのインスタンスにもなることも示している

  v.hoge(param);

  SomeObj({msg:"[Call]"});

}('Some Obj is Here!'));
