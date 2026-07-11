const message =
اعرف دتمرين بهواي ظروف سيئه واعرف جان عندج امل بالتدرج وهسه عندج احباط بس صدكيني رب العالمين اعلم بالمضموم ويعرف كلش زين انو هالشي مو خير الج
  لذلك خلاج تتركين الموضوع واعرفي كلش زين انو الله راح يعوضج عن كل التعب والمشاكل الي صارتلج وكاتبلج الخير لأن انتي متستاهلين غير الخير توكلي على الله وبس واني دا ادعيلج بكل صلاة وبكل وقت ادعي انو الله يريح بالج ويطمنج ويبعد عنج كل شر ويبعد عنج كل الي يكرهوج
ويصبرج ويقويج اكثر من هيج لأن انتي قوية كلش قوية وكد المسؤولية لأن ربنا لا يكلف نفسا الا وسعها 

function openLetter(){

document.querySelector(".container").style.display="none";

document.getElementById("letter").style.display="block";

typeWriter();

}

let i=0;

function typeWriter(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

function nextPage(){

alert("الصفحة التالية ستكون معرض الصور والرسائل الجميلة ❤️");

}
