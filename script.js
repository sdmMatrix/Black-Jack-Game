
function main(){
    let y;
    let confirm = document.getElementById('total').innerHTML;

    if (confirm == "YOU LOSE !!"){
        alert('Game Over. Please restart the Game');
    }
    else{
    do {
    y = Math.floor((Math.random()*100)/7.6);
    console.log(y);
    } while(y == 0);

    let currentTT = parseInt(document.getElementById('display').innerHTML);
    let total = currentTT + y;
    document.getElementById('display').innerHTML = total ;
    
    if (total == 21){
        document.getElementById('total').innerHTML = "YOU HAVE WON !!"
        document.getElementById('button2').style.display = 'block';
        alert('YOU HAVE WON !!!!');

    }

    else if (total > 21){
        document.getElementById('total').innerHTML = "YOU LOSE !!"
        document.getElementById('button2').style.display = 'block';
        
    }

    else if(total < 21){
        document.getElementById('total').innerHTML = "Try Another Card ?"
    }

    var img = document.createElement('img');
    img.src = "image/" + y + ".png";
    img.height = 200 ;
    document.body.appendChild(img);    
}
}
function restart(){
    location.reload();
}
