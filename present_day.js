	function set_today()
	{
	var dzisiaj = new Date();
	var dzien = dzisiaj.getDate();
	var miesiac = dzisiaj.getMonth()+1;
	var rok = dzisiaj.getFullYear();
	
	if (miesiac<10) miesiac= "0"+miesiac;
	
	if (dzien<10) dzien ="0"+sek;
	document.getElementById("today").value = rok +"-"+ miesiac+ "-"+ dzien ;

	}
	