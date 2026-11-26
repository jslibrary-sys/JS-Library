const d = document.querySelector('#d')            // the screen
let s = ''                                        // the notebook: everything you pressed

// 1. Mouse: when any button is clicked, press its words
document.querySelectorAll('#keys div').forEach(b => {
  b.onclick = () => press(b.innerText)
})

// 2. Keyboard: when any key is pressed, press its name
document.onkeydown = e => press(e.key)

// 3. One function handles both mouse and keyboard
function press(x) {
  if (x == '×') x = '*'                           // change pretty symbols
  if (x == '÷') x = '/'                           // into computer symbols
  if (x == '−') x = '-'

  if (x == 'AC' || x == 'Escape') {               // clear
    s = ''
    d.innerText = 0
  } else if (x == '=' || x == 'Enter') {          // solve
    equals()
  } else if ('0123456789+-*/.'.includes(x)) {     // numbers and signs
    s = s + x
    d.innerText = s
  }
}

function equals() {
  const r = eval(s || 0)                          // solve the notebook
  if (isFinite(r)) {                              // good number? show it
    s = String(r)
    d.innerText = s
  } else {                                        // bad number (like 5 / 0)? show Error
    s = ''
    d.innerText = 'Error'
  }
}
