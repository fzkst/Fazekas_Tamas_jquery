        document.getElementById('rendel').addEventListener('click', () => {
        let nev = document.forms['kabel_rendelo']['nev'].value;
        let jelszo = document.forms['kabel_rendelo']['jelszo'].value;
        let cim = document.forms['kabel_rendelo']['cim'].value;
        let varos = document.forms['kabel_rendelo']['varos'].value;
        let orszag = document.forms['kabel_rendelo']['orszag'].value;
        let iszam = document.forms['kabel_rendelo']['iszam'].value;
        let gyarto = document.forms['kabel_rendelo']['gyarto'].value;
        let tipus = document.forms['kabel_rendelo']['tipus'].value;
        //let hossz = document.forms['kabel_rendelo']['hossz'].value;
        //let szin = document.forms['kabel_rendelo']['szin'].value;
        let minden_kitoltve = true;
        if (nev === '') {
            minden_kitoltve = false;
        alert('A név kitöltése kötelező!')
        }
        if (jelszo === '') {
            minden_kitoltve = false;
        alert('A jelszó kitöltése kötelező!')
        }
        if (cim === '') {
            minden_kitoltve = false;
        alert('A cím kitöltése kötelező!')
        }
        if (varos === '') {
            minden_kitoltve = false;
        alert('A város kitöltése kötelező!')
        }
        if (ország === '') {
            minden_kitoltve = false;
        alert('Az ország kiválasztása kötelező!')
        }
         if (iszam === '') {
            minden_kitoltve = false;
        alert('Az  irányítószám megadása kötelező!')
                }
        if (gyarto === '') {
            minden_kitoltve = false;
        alert('A név kitöltése kötelező!')
                }
        if (tipus === '') {
            minden_kitoltve = false;
        alert('A típus megadása kötelező!')
                }
        // if (hossz === '') {
        //     minden_kitoltve = false;
        // alert('A név kitöltése kötelező!')
        //         }
        // if (szin === '') {
        //     minden_kitoltve = false;
        // alert('A név kitöltése kötelező!')
        //         }
        if (minden_kitoltve){
            let rendeles = {
            //nev: nev,
            //email: email,
            gyarto: gyarto,
            //hossz: hossz,
            //szin: szin,                
        }
        console.log(rendeles); 
    }
});
