const diceEl = document.getElementById("dice");

const buttonEl = document.getElementById
("roll-button");

const rollHistoryEl = document.getElementById('roll-history');

let historyList = [];

function rollDice(){
    const rollResult = Math.floor(Math.random()*6) + 1;  /* 0--5 */
//     Math.random() 生成一个 [0, 1) 之间的随机浮点数（包含 0，不包含 1）
// 乘以 6 后，结果变成 [0, 6) 之间的随机浮点数（可能是 0.123、3.456 等）
// Math.floor() 会对这个浮点数进行向下取整，只保留整数部分，去掉小数部分
    // console.log(rollResult)
    const diceFace = getDiceFace(rollResult);
    // console.log(diceFace)
    diceEl.innerHTML = diceFace; /* 骰子面有特殊字符 可以用HTML渲染进呈现  */
    historyList.push(rollResult);
    // console.log(historyList);
    updateRollHistory();
}



function getDiceFace(rollResult){
    switch(rollResult) {
        case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";

    }
}

function  updateRollHistory(){  
    rollHistoryEl.innerHTML = '';
    for(let i =0 ; i<historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${ i + 1}: <span> ${getDiceFace(historyList[i])}</span>`;  /*  ${} 插入变量或表达式 */
        rollHistoryEl.appendChild(listItem);
    }
}

buttonEl.addEventListener('click',() =>{
diceEl.classList.add("roll-animation");
setTimeout(()=>{diceEl.classList.remove("roll-animation");
    rollDice();
},1000)
});