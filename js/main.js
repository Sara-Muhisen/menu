var smP = 12; 
var mdP = 20; 
var lgP = 30; 
var finalPrice = document.getElementById('finalPrice');
window.onload = function(){
    finalPrice.textContent = smP;
}
function add() {
    var chesse = document.getElementById('chesse');
    if (chesse.checked == true){
        if(finalPrice.textContent == 12){
            finalPrice.textContent = smP + 2;
        }
        if(finalPrice.textContent == 20){
            finalPrice.textContent = mdP + 2;
        }
        if(finalPrice.textContent == 30){
            finalPrice.textContent = lgP + 2;
        }
    } else {
        if(finalPrice.textContent == 14){
            finalPrice.textContent = smP;
        }
        if(finalPrice.textContent == 22){
            finalPrice.textContent = mdP;
        }
        if(finalPrice.textContent == 32){
            finalPrice.textContent = lgP;
        }
    }
  }
var smBtn = document.getElementById('smBtn');
var mdBtn = document.getElementById('mdBtn');
var lgBtn = document.getElementById('lgBtn');
smBtn.onclick = function(){
    finalPrice.textContent = smP;
}
mdBtn.onclick = function(){
    finalPrice.textContent = mdP;
}
lgBtn.onclick = function(){
    finalPrice.textContent = lgP;
}
var plus = document.getElementById('plus');
var quan = document.getElementById('middle');
var minus = document.getElementById('minus');
var q = 1;
var f;

plus.onclick = function(){
    q++;
    quan.textContent = q;
}
minus.onclick = function(){
    if(q == 1){
        
    }else{
        q--;
        quan.textContent = q;
    
    }
}
