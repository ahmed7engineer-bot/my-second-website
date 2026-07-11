const message = `اعرف دتمرين بهواي ظروف سيئه واعرف جان عندج امل بالتدرج وهسه عندج احباط، بس صدكيني رب العالمين أعلم بالمضموم ويعرف كلش زين أنو هالشي مو خير إلج.

لذلك خلاج تتركين الموضوع، واعرفي كلش زين أنو الله راح يعوضج عن كل التعب والمشاكل الي صارتلج، وكاتبلج الخير لأن انتي متستاهلين غير الخير.

توكلي على الله وبس، واني دا أدعيلج بكل صلاة وبكل وقت، وأدعي أنو الله يريح بالج ويطمنج ويبعد عنج كل شر.

ويصبرج ويقويج أكثر من هيج، لأن انتي قوية كلش قوية وكد المسؤولية.

﴿لا يكلف الله نفسًا إلا وسعها﴾`;

function openLetter() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("letter").style.display = "block";
    typeWriter();
}

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 45);
    }
}

function nextPage() {
    document.getElementById("letter").style.display = "none";

    document.body.innerHTML = `
    <div style="
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    text-align:center;
    color:white;
    font-size:18px;
    line-height:1.8;
    padding:40px;
    font-family:Cairo;
    ">
    كل ما تحسين نفسج ضايجة، تذكري أن أكو شخص يهمه أمرج، ومستعد يسوي كلشي حتى يشوفج بخير.
    <br><br>
    أتمنى هالموقع البسيط خلاج تبتسمين
    يمكن شفت سنونج🫣💜
    </div>`;
}
