document.querySelector('#make_me_big').addEventListener('click', makeMeBig);
document.querySelector('#make_me_small').addEventListener('click', makeMeSmall);

function makeMeBig(){
    document.querySelector('p').classList.add('big');
}

function makeMeSmall(){
    document.querySelector('p').classList.remove('big');
}