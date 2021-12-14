
const tanggalTujuan = new Date('Dec 9, 2021 21:00:00').getTime();

const hitungMundur = setInterval(function(){

	const waktuSekarang = new Date().getTime();
	const selisih = tanggalTujuan - waktuSekarang;
	const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
	const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
	const detik = Math.floor(selisih % (1000 * 60) / 1000);

	const text = document.getElementById('text');
	text.innerHTML = 'Waktu Anda Tinggal : ' + hari + ' Hari ' + jam + ' Jam ' + menit + ' Menit ' + detik + ' Detik ';
	
	if(selisih < 0){
		clearInterval(hitungMundur);
		text.innerHTML = 'Waktu Anda Habis';
	}

}, 1000);

document.body.addEventListener('mousemove', function(event){
	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
	const yPos = Math.round((event.clientY / window.innerHeight) * 255);
	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)';

});
