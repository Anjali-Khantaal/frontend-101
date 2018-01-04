function additem() {
  list.innerHTML += '<li>' + item.value +'</li>';
  store();
  item.value = "";
}

function store() {
  window.localStorage.myitems = list.innerHTML;
}
  
function getValues() {
  var storedValues = window.localStorage.myitems;
  if(!storedValues) {
    list.innerHTML = '';
  }
  else {
    list.innerHTML = storedValues;
  }
}

list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

getValues();




