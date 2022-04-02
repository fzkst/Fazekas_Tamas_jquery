    
    //$('#megrendeles').on('click', Rendeles);

    function Rendeles(){
        let nev = $('[name = nev]').val();
        let jelszo = $('[name = jelszo]').val();
        let cim = $('[name = cim]').val();
        let varos = $('[name = varos]').val();
        let orszag = $('[name = orszag]').val();
        let iszam = $('#iszam').val();
        let gyarto = $('[name = gyarto]').val();
        let feltetelek = $('#check').is(':checked');
        let tipus = $('[name = tipus]').val();
        let hossz = $('[name = hossz]').val();        
        let szin = $('[name = szin]').val();
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
        if (orszag === '') {
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
        if (feltetelek === false){
            minden_kitoltve = false;
        alert('Fogadja el a vásárlási feltételeket!')
        }
        if (tipus === '') {
            minden_kitoltve = false;
        alert('A típus kiválasztása kötelező!')
        }
        if (hossz === '') {
            minden_kitoltve = false;
        alert('A hossz kiválasztása kötelező!')
        }
        if (szin === '') {
            minden_kitoltve = false;
        alert('A szín kiválasztása kötelező!')
        }
        if (minden_kitoltve){
            let rendeles = {
            nev: nev,
            jelszo: jelszo,
            cim: cim,
            varos: varos,
            orszag: orszag,
            iszam: iszam,
            gyarto: gyarto,
            feltetelek: 'elfogadva',
            tipus: tipus,
            hossz: hossz,
            szin: szin,                
        }
        console.log(rendeles); 
        }
    };
