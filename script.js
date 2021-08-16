function showFields()

{
	document.getElementById("firstsign").style.display = "block";
	country=document.getElementById("countries").value;
	const examples = [];
	examples['GB']="oy62rkf";
	examples['CZ']="1AI7634";
	examples['FI']="evf-960";
	examples['NO']="ju93186";
	examples['NL']="15-VT-SG";
	examples['DN']="ab44887";
	examples['SK']="BL644HL";
	examples['ZERO']="";
	document.getElementById("firstsign").value = examples[country];
    document.getElementById("examplefield").innerHTML = examples[country];
}


function checkNumber()
{


firstsign=document.getElementById("firstsign").value;
country=document.getElementById("countries").value;
const links = [];
links['GB']="https://www.carcheck.co.uk/reg?i="+firstsign;
links['CZ']="https://spz.penize.cz/"+firstsign;
links['FI']="https://www.biltema.fi/auton-varaosahaku/"+firstsign;
links['NO']="https://www.vegvesen.no/kjoretoy/kjop-og-salg/kjoretoyopplysninger/sjekk-kjoretoyopplysninger/?registreringsnummer="+firstsign;
links['NL']="https://www.kentekencheck.nl/kenteken?i="+firstsign;
links['DN']="https://www.nummerplade.net/nummerplade/"+firstsign+".html";
links['SK']="https://www.stkonline.sk/spz/"+firstsign;
links['ZERO']="index.html";
window.open(links[country]);

}