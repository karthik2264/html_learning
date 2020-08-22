document.getElementById('make_me_big').addEventListener('click', makeMeBig);
document.getElementById('make_me_small').addEventListener('click', makeMeSmall);

function makeMeBig(){
    document.getElementById('line2').classList.add('big');
}

function makeMeSmall(){
    document.getElementById('line2').classList.remove('big');
}




// document.getElementsByName('p')