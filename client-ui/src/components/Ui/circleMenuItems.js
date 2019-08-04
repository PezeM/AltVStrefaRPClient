const USEFULL_OPTIONS = {
    quit: {
        desc: 'Zamknij menu',
        icon: 'quit',
    },
    back: {
        desc: 'Wróć',
        icon: 'back',
    },
    information: {
        desc: 'Wyświetl informacje',
        icon: 'information',
    },
};

export default {
    animations: {
        favorite: {
            desc: 'Ulubione animacje',
            icon: 'favourite',
        },
        dancingAnims: {
            desc: 'Animacje taneczne',
            icon: 'dancingAnims',
        },
        usefulAnims: {
            desc: 'Użyteczne animacje',
            icon: 'usefulAnims',
        },
        popularAnims: {
            desc: 'Najpopularniejsze animacje',
            icon: 'popular',
        },
        otherAnims: {
            desc: 'Inne animacje',
            icon: 'misc',
        },
    },
    favorite: {
        animations: USEFULL_OPTIONS.back,
    },
    usefulAnims: {
        animations: USEFULL_OPTIONS.back,
        mechanicAnims: {
            desc: 'Animacje dla mechaników',
            icon: 'carMechanic',
        },
        extraProps: {
            desc: 'Dodatkowe rzeczy',
            icon: 'misc',
        },
    },
    otherAnims: {
        animations: USEFULL_OPTIONS.back,
    },
    mechanicAnims: {
        usefulAnims: USEFULL_OPTIONS.back,
        box: {
            desc: 'Pudełko',
            icon: 'box',
        },
        toolbox: {
            desc: 'Narzędzia 1',
            icon: 'toolbox',
        },
        toolbox2: {
            desc: 'Narzędzia 2',
            icon: 'toolbox',
        },
        toolbox3: {
            desc: 'Narzędzia 3',
            icon: 'toolbox',
        },
    },
    extraProps: {
        usefulAnims: USEFULL_OPTIONS.back,
        suitcase: {
            desc: 'Walizka',
            icon: 'suitcase',
        },
        walizka: {
            desc: 'Walizka 2',
            icon: 'suitcase',
        },
        walizka2: {
            desc: 'Walizka 3',
            icon: 'suitcase',
        },
    },
    dancingAnims: {
        animations: USEFULL_OPTIONS.back,
        fastDances: {
            desc: 'Szybkie tańce',
            icon: 'fastDance',
        },
        slowDances: {
            desc: 'Wolne tańce',
            icon: 'slowDance',
        },
    },
    fastDances: {
        dancingAnims: USEFULL_OPTIONS.back,
        dance1: {
            desc: 'Jakiś szybki taniec',
            icon: 'someFastDance',
        },
        dance3: {
            desc: 'Jakiś szybki taniec',
            icon: 'someFastDance',
        },
    },
    slowDances: {
        dancingAnims: USEFULL_OPTIONS.back,
        dance2: {
            desc: 'Jakiś wolny taniec',
            icon: 'someFastDance',
        },
    },
    popularAnims: {
        animations: USEFULL_OPTIONS.back,
        box: {
            desc: 'Skrzynka',
            icon: 'someFastDance',
        },
        metal: {
            desc: 'Skrzynka',
            icon: 'someFastDance',
        },
    },
    player: {
        information: USEFULL_OPTIONS.information,
        quit: USEFULL_OPTIONS.quit,
    },
    vehicle: {
        openVehicle: {
            desc: 'Otwórz pojazd',
            icon: 'information',
        },
        sellVehicle: {
            desc: 'Sprzedaj pojazd',
            icon: 'information',
        },
        despawnVehicle: {
            desc: 'Zdespawnuj pojazd',
            icon: 'information',
        },
        openVehicleInventory: {
            desc: 'Otwórz inventory',
            icon: 'misc,'
        },
        information: USEFULL_OPTIONS.information,
        quit: USEFULL_OPTIONS.quit,
    },
    bank: {
        openBank: {
            desc: 'Otwórz bank',
            icon: 'openBank',
        },
        createAccount: {
            desc: 'Załóż konto bankowe',
            icon: 'createAccount',
        },
        information: USEFULL_OPTIONS.information,
        quit: USEFULL_OPTIONS.quit,
    },
    atm: {
        openAtm: {
            desc: 'Otwórz bankomat',
            icon: 'openAtm',
        },
        information: USEFULL_OPTIONS.information,
        quit: USEFULL_OPTIONS.quit,
    },
    trashBin: {
        searchBin: {
            desc: 'Przeszukaj śmieci',
            icon: 'trashBin',
        },
        information: USEFULL_OPTIONS.information,
        quit: USEFULL_OPTIONS.quit,
    },
    vehicleShop: {
        openMenu: {
            desc: 'Przeglądnij katalog',
            icon: 'trashBin',
        },
        information: USEFULL_OPTIONS.information,
        quit: USEFULL_OPTIONS.quit,
    },
};
