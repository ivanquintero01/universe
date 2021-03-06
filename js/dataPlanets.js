const dataPlanets = {
    asteroid: {
        n: 'Asteroides',
        ptx: 2.5,
        pty: 0.5,
        sn: 0,
        de: 0,
        po: 0,
        pr: 0
    },
    ceres: {
        n: 'Ceres',
        ptx: 2,
        pty: 0.5,
        g: 0.27,
        tp: -106.15,
        sn: 0,
        snl: [
            'Sin sátelites'
        ],
        de: 952.4,
        po: 1683,
        pr: 0.375
    },
    comet: {
        n: 'Cometa',
        ptx: 2,
        pty: 0.5,
        sn: 0,
        de: 0,
        po: 0,
        pr: 0
    },
    earth: {
        n: 'Tierra',
        ptx: 2,
        pty: 0.5,
        g: 9.81,
        tp: 14.85,
        sn: 1,
        snl: [
            'Luna'
        ],
        de: 12756,
        po: 1,
        pr: 1
    },
    eris: {
        n: 'Eris',
        ptx: 1.5,
        pty: 0.5,
        g: '~0,8',
        tp: -243.15,
        sn: 1,
        snl: [
            'Disnomia'
        ],
        de: 2326,
        po: 557,
        pr: 'Desconocido'
    },
    haumea: {
        n: 'Haumea',
        ptx: 2.5,
        pty: 0.5,
        g: 0.44,
        tp: -223.15,
        sn: 2,
        snl: [
            'Namaka',
            'Ni\'iaka'
        ],
        de: 'Desconocido',
        po: 285.4,
        pr: 0.167
    },
    jupiter: {
        n: 'Júpiter',
        ptx: 2,
        pty: 0.5,
        g: 22.9,
        tp: -121.15,
        sn: 67,
        snl: [
            'Adrastea',
            'Aedea',
            'Aitné',
            'Amaltea',
            'Ananqué',
            'Ío',
            'Arce',
            'Autónoe',
            'Cálice',
            'Calírroe',
            'Calé',
            'Caldona',
            'Calisto',
            'Carmé',
            'Carpo',
            'Cilene',
            'Elara',
            'Erínome',
            'Euante',
            'Eukélade',
            'Euporia',
            'Eurídome',
            'Europa',
            'Ganímedes',
            'Harpálice',
            'Hegémone',
            'Heliké',
            'Hermipé',
            'Herse',
            'Himalia',
            'Isonoé',
            'Kallichore',
            'Kore',
            'Leda',
            'Lisitea',
            'Megaclite',
            'Metis',
            'Mnemea',
            'Ortosia',
            'Pasífae',
            'Pasítea',
            'Praxídice',
            'S/2000 J 11',
            'S/2003 J 10',
            'S/2003 J 12',
            'S/2003 J 15',
            'S/2003 J 16',
            'S/2003 J 18',
            'S/2003 J 19',
            'S/2003 J 2',
            'S/2003 J 23',
            'S/2003 J 3',
            'S/2003 J 4',
            'S/2003 J 5',
            'S/2003 J 9',
            'S/2010 J 1',
            'S/2010 J 2',
            'S/2011 J 1',
            'S/2011 J 2',
            'Sinope',
            'Spondé',
            'Táigete',
            'Tebe',
            'Telxínoe',
            'Temisto',
            'Tione',
            'Yocasta'
        ],
        de: 142984,
        po: 11.86,
        pr: 0.414
    },
    makemake: {
        n: 'Makemake',
        ptx: 2.75,
        pty: 0.5,
        g: 0.5,
        tp: -243.15,
        sn: 0,
        snl: [
            'Sin sátelites'
        ],
        de: 'Desconocido',
        po: 309.9,
        pr: 'Desconocido'
    },
    mars: {
        n: 'Marte',
        ptx: 2,
        pty: 0.5,
        g: 3.71,
        tp: '-87,15 / -5,15',
        sn: 2,
        snl: [
            'Deimos',
            'Fobos'
        ],
        de: 6787,
        po: 1.88,
        pr: 1
    },
    mercury: {
        n: 'Mercurio',
        ptx: 2.5,
        pty: 0.5,
        g: 2.8,
        tp: 166.85,
        sn: 0,
        snl: [
            'Sin sátelites'
        ],
        de: 4879,
        po: 0.24,
        pr: 58.7
    },
    moon: {
        n: 'Luna',
        ptx: 2.5,
        pty: 0.5,
        g: 1.62,
        tp: 123,
        sn: 0,
        snl: [],
        de: 1373,
        po: 27.3,
        pr: 27.3
    },
    neptune: {
        n: 'Neptuno',
        ptx: 2.5,
        pty: 0.5,
        g: 11,
        tp: -220.15,
        sn: 14,
        snl: [
            'Náyade',
            'Talasa',
            'Despina',
            'Galatea',
            'Larisa',
            'Hipocampo',
            'Proteo',
            'Tritón',
            'Nereida',
            'Halimede',
            'Sao',
            'Laomedeia',
            'Psámate',
            'Neso'
        ],
        de: 49538,
        po: 164.79,
        pr: 0.6745
    },
    pluto: {
        n: 'Plutón',
        ptx: 2,
        pty: 0.5,
        g: 0.27,
        tp: -233.15,
        sn: 5,
        snl: [
            'Caronte',
            'Nix',
            'Hidra',
            'Cerbero',
            'Estigia'
        ],
        de: 2370,
        po: 247.92,
        pr: '−6.38718'
    },
    saturn: {
        n: 'Saturno',
        ptx: 2.5,
        pty: 0.5,
        g: 9.1,
        tp: -139.15,
        sn: 62,
        snl: [
            'Aegir',
            'Albiorix',
            'Anthe',
            'Atlas',
            'Bebhionn',
            'Bergelmir',
            'Bestla',
            'Calipso',
            'Dafne',
            'Dione',
            'Egeón',
            'Encélado',
            'Epimeteo',
            'Erriapo',
            'Farbauti',
            'Febe',
            'Fenrir',
            'Fornjot',
            'Greip',
            'Hati',
            'Helena',
            'Hiperión',
            'Hyrokkin',
            'Ijiraq',
            'Jápeto',
            'Jano',
            'Jarnsaxa',
            'Kari',
            'Kiviuq',
            'Loge',
            'Metone',
            'Mimas',
            'Mundilfari',
            'Narvi',
            'Paaliaq',
            'Palene',
            'Pan',
            'Pandora',
            'Pollux',
            'Prometeo',
            'Rea',
            'S/2004 S 12',
            'S/2004 S 13',
            'S/2004 S 17',
            'S/2004 S 7',
            'S/2006 S 1',
            'S/2006 S 3',
            'S/2007 S 2',
            'S/2007 S 3',
            'S/2009 S 1',
            'Siarnaq',
            'Skadi',
            'Skoll',
            'Surtur',
            'Suttungr',
            'Tarqeq',
            'Tarvos',
            'Telesto',
            'Tetis',
            'Thrymr',
            'Titán',
            'Ymir'
        ],
        de: 120536,
        po: 29.46,
        pr: 0.426
    },
    sun: {
        n: 'Sol',
        ptx: 1.5,
        pty: 0.5,
        g: 274,
        tp: 5505,
        sn: 1,
        snl: [
            '(486958) Arrokoth'
        ],
        de: 1391016,
        po: 0,
        pr: '24-30'
    },
    uranus: {
        n: 'Urano',
        ptx: 2,
        pty: 0.5,
        g: 7.8,
        tp: -197.15,
        sn: 27,
        snl: [
            'Ariel',
            'Belinda',
            'Bianca',
            'Calibán',
            'Cordelia',
            'Crésida',
            'Cupido',
            'Desdémona',
            'Ferdinando',
            'Francisco',
            'Julieta',
            'Mab',
            'Margarita',
            'Miranda',
            'Oberón',
            'Ofelia',
            'Perdita',
            'Porcia',
            'Próspero',
            'Puck',
            'Rosalinda',
            'Setebos',
            'Sicorax',
            'Stefano',
            'Titania',
            'Trínculo',
            'Umbriel'
        ],
        de: 51108,
        po: 84.01,
        pr: 0.718
    },
    venus: {
        n: 'Venus',
        ptx: 2,
        pty: 0.5,
        g: 8.9,
        tp: 456.85,
        sn: 0,
        snl: [
            'Sin sátelites'
        ],
        de: 12100,
        po: 0.615,
        pr: 243
    }
};
