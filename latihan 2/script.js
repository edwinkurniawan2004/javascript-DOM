let ulang = true;

while(ulang){
let p = prompt('Pilih : gajah, orang, semut');

const comp = Math.random();

	if(comp < 0.34){
		comp = 'gajah';
	}else if(comp > 0.34 && comp < 0.68){
		comp = 'orang';
	}else{
		comp = 'semut';
	}

let hasil = "";
	if(p == comp){
		hasil = 'SERI!';
	}else if(p == 'gajah'){
		hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
	}else if(p == 'orang'){
		hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
	}else if(p == 'semut'){
		hasil = (comp == 'orang') ? 'KALAH' : 'MENANG'
	}else{
		hasil = 'anda memasukkan inputan yang salah!!!'
	}
alert('Player : ' + p + '\nComputer : ' + comp + '\nHasil-nya : ' + hasil);

ulang = confirm('apakah anda mau lagi?');

}