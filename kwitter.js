

function login(){
    var Input = document.getElementById('user_name').value;

    localStorage.setItem('USERNAME',Input);

    window.location = 'kwitter_room.html';
}
