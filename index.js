//変数
let unko = "Heloo World!";

//unko = "Hello World2!!";

//定数
const bigUnko = "He..Hell...Hello World!"


//配列
let inoki = ["い～ち","にーい","さーん","ダー！！"];

//ループ文
//let index = 0;
//ile(index < inoki.length) {
//  //繰り返したい命令
//  console.log(inoki[index]);
//  index++; //index = 5
//}

//if / else
if(inoki.length > 5){
  console.log("ボンバイエ！");
}else{
  console.log("ボンバ...!");
}

//関数
const test = (arg) => {
  if(inoki.length > arg){
    console.log("ボンバイエ！");
  }else{
    console.log("ボンバ...!");
  }
};


//オブジェクト
const unko2 = {
  color: "pink",
  size: "large",
  purfume: "mint",
  goToilet: () => {
    console.log("Hello world!");
  }
};

document.getElementsByTagName('button')[0].addEventListener("click", () => {
  //命令を書く
  window.alert("Hello World!");
});
