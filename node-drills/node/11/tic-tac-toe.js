#!/usr/bin/env node

var player  = 'X'
  , aPlayer = 'O'
  , count   = 0
  , proc    = process
  , input   = proc.stdin
  , output  = proc.stdout
  , block   = [1, 2, 3, 4, 5, 6, 7, 8, 9]

input.setRawMode(1)
input.resume()
input.setEncoding('utf8')

function draw(){
  output.write('\033c' + block[0] + '|' + block[1] + '|' + block[2] + '\n' +
    block[3] + '|' + block[4] + '|' + block[5] + '\n' + block[6] + '|' +
    block[7] + '|' + block[8] + '\n')
}

function tic(first){
  if(typeof block[first - 1] == 'number'){
    block[first - 1] = player
    if(player == 'X'){
      player = 'O'
      aPlayer = 'X'
    } else {
      player = 'X'
      aPlayer = 'O'
    }
    count++
  }
}

function win(){
  if((block[0] == block[4] && block[4] == block[8]) ||
      (block[2] == block[4] && block[4] == block[6]) ||
      (block[0] == block[1] && block[1] == block[2]) ||
      (block[3] == block[4] && block[4] == block[5]) ||
      (block[6] == block[7] && block[7] == block[8]) ||
      (block[0] == block[3] && block[3] == block[6]) ||
      (block[1] == block[4] && block[4] == block[7]) ||
      (block[2] == block[5] && block[5] == block[8])){
  return 1
  }
}

input.on('data', function(key){
  if(key == 'q'){
    proc.exit()
  }
  if (key > 0 && key <= 9){
    tic(key)
  }
  draw()
  if(win()){
    output.write(aPlayer + ' wins!' + '\n')
    proc.exit()
  }
  if(count > 8){
    output.write('it\'s a draw!\n')
    proc.exit()
  }
})
draw()

//
// or, if you're an asshat playing code golf:
//
#!/usr/bin/env node

var P='X';var N='O';var C=0;var p=process;var i=p.stdin;i.setRawMode(1);
i.resume();i.setEncoding('utf8');var o=p.stdout;var b=[1,2,3,4,5,6,7,8,9];
function d(){o.write('\033c'+b[0]+'|'+b[1]+'|'+b[2]+'\n'+b[3]+'|'+b[4]+'|'+b[5]
+'\n'+b[6]+'|'+b[7]+'|'+b[8]+'\n');}function t(f){if(typeof b[f-1]=='number'){
b[f-1]=P;if(P=='X'){P='O';N='X';}else{P='X';N='O';}C++;}}function W(){
if((b[0]==b[4]&&b[4]==b[8])||(b[2]==b[4]&&b[4]==b[6])||(b[0]==b[1]&&b[1]==b[2])
||(b[3]==b[4]&&b[4]==b[5])||(b[6]==b[7]&&b[7]==b[8])||(b[0]==b[3]&&b[3]==b[6])
||(b[1]==b[4]&&b[4]==b[7])||(b[2]==b[5]&&b[5]==b[8])) return 1;}i.on('data',
function(k){if(k=='q')p.exit();if(k>0&&k<=9)t(k);d();if(W()){o.write(N+' WINS'+
'\n');p.exit();}if(C>8){o.write("It's a draw!\n");p.exit();}});d();
