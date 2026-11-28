const d = document.getElementById('d'), g = document.getElementById('g');
const keys = ['AC','÷','×','7','8','9','−','4','5','6','+','1','2','3','=','0','.'];
let done = 0;

keys.forEach(k => {
  const b = document.createElement('button');
  b.textContent = k;
  const bg = k == 'AC' ? '#e74c3c' : k == '=' ? '#27ae60' : '÷×−+'.includes(k) ? '#f39c12' : '#555';
  b.style.cssText = `height:48px;border:0;border-radius:6px;font:18px sans-serif;color:#fff;cursor:pointer;background:${bg};${k == 'AC' || k == '0' ? 'grid-column:span 2' : ''}`;
  b.onclick = () => press(k);
  g.appendChild(b);
});

function press(k) {
  if (k == 'AC') return done = 0, d.value = '0';
  if (k == '=') {
    if (/Error/.test(d.value)) return;
    try {
      const r = Function('return ' + d.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-'))();
      d.value = isFinite(r) ? +r.toFixed(10) : 'Error: Div by 0';
    } catch { d.value = 'Error'; }
    return done = 1;
  }
  if (/Error/.test(d.value) || (done && !'÷×−+'.includes(k))) d.value = '0';
  done = 0;
  d.value = d.value == '0' && !'÷×−+.'.includes(k) ? k : d.value + k;
}

document.addEventListener('keydown', e => {
  const map = { '*': '×', '/': '÷', '-': '−', Enter: '=', Escape: 'AC', c: 'AC', C: 'AC' };
  const k = map[e.key] || e.key;
  if (keys.includes(k)) { e.preventDefault(); press(k); }
  else if (e.key == 'Backspace') {
    done = 0;
    d.value = d.value.length > 1 && !/Error/.test(d.value) ? d.value.slice(0, -1) : '0';
  }
});
