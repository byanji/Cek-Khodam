function hashString(str) {
    let hash = 0;
    for(let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash - hash & hash;
    }
    return Math.abs(hash);
}

function getKhodam() {
    const username = document.getElementById("username").value.trim();
    const khodamOutput = document.getElementById("khodam");


    if(username === "") {
        alert("gimana mau gua cek khodam lo klo gadaa namanya")
        return;
    }


const khodamList = {
    "A-E": ["eyang pisang goreng", "nyaikeripik singkong", "kang cimol", "mbah martabak manis", "raja pecel lele", "pangeran otak-otak", "dewa seblak"],
    "F-J": ["mbah batgor", "ki telur asin", "sang gurita bakso", "putri roti bakar", "ki cilung perkasa"],
    "K-O": ["nyai bubur kacang ijo", "pangeran susu murni", " putri mi rebus", "kang cireng", "dewi kacang polong", "eyang es doger"],
    "P-T": ["nyai kolak pisang", "ki kerak telor", "mbah geprek", "raja cilok", "kadal wungu", "jin serius", "nyi jagung bakar"],
    "U-Z": ["ratu kunyit", "si raja emping", "dewa bubur ayam", "putri kelepon", "nyai cendol", "mbah kerupuk udang", "jin serius amat"]
};

const firstLetter = username[0].toUpperCase();
let group;

if(firstLetter >= 'A' && firstLetter <= 'E') {
    group = "A-E";
} else if (firstLetter >= 'F' && firstLetter <= 'J') {
    group = "F-J";
} else if(firstLetter >= 'K' && firstLetter <= 'O') {
    group = "K-O";
} else if(firstLetter >= 'P' && firstLetter <= 'T') {
    group = "P-T";
} else if(firstLetter >= 'U' && firstLetter <= 'Z') {
    group = "U-Z";
}

// const khodamChoices = khodamList[group];
// const randomKhodam = khodamChoices[Math.floor(Math.random() * khodamChoices.length)];

// khodamOutput.value = randomKhodam;

const khodamChoices = khodamList[group];
const hash = hashString(username);
const khodamIndex = hash % khodamChoices.length;
const khodam = khodamChoices[khodamIndex];

// Tampilkan hasil di input Khodam
khodamOutput.value = khodam;

}
