const usefullOptions = {
    quit: {
        desc: "Zamknij menu",
        icon: "trunk"
    },
    back: {
        desc: "Wróć",
        icon: "back"
    },
    information: {
        desc: "Wyświetl informacje",
        icon: "licenses",
    }
}

const menusList = {
    "animations": {
        "favorite": {
            desc: "Ulubione animacje",
            icon: "favourite"
        },
        "dancingAnims": {
            desc: "Animacje taneczne",
            icon: "dancingAnims"
        },
        "usefulAnims": {
            desc: "Użyteczne animacje",
            icon: "usefulAnims"
        },
        "popularAnims": {
            desc: "Najpopularniejsze animacje",
            icon: "popular",
        },
        "otherAnims": {
            desc: "Inne animacje",
            icon: "misc",
        }
    },
    "favorite": {
        "animations": usefullOptions.back,
    },
    "usefulAnims": {
        "animations": usefullOptions.back,
        "mechanicAnims": {
            desc: "Animacje dla mechaników",
            icon: "carMechanic",
        },
        "extraProps": {
            desc: "Dodatkowe rzeczy",
            icon: "misc",
        }
    },
    "mechanicAnims": {
        "usefulAnims": usefullOptions.back,
        "box": {
            desc: "Pudełko",
            icon: "box",
        },
        "toolbox": {
            desc: "Narzędzia 1",
            icon: "toolbox",
        },
        "toolbox2": {
            desc: "Narzędzia 2",
            icon: "toolbox",
        },
        "toolbox3": {
            desc: "Narzędzia 3",
            icon: "toolbox",
        }
    },
    "extraProps": {
        "usefulAnims": usefullOptions.back,
        "suitcase": {
            desc: "Walizka",
            icon: "suitcase",
        },
        "walizka": {
            desc: "Walizka 2",
            icon: "suitcase",
        },
        "walizka2": {
            desc: "Walizka 3",
            icon: "suitcase",
        },
    },
    "dancingAnims": {
        "animations": usefullOptions.back,
        "fastDances": {
            desc: "Szybkie tańce",
            icon: "fastDance",
        },
        "slowDances": {
            desc: "Wolne tańce",
            icon: "slowDance",
        }
    },
    "fastDances": {
        "dancingAnims": usefullOptions.back,
        "dance1": {
            desc: "Jakiś szybki taniec",
            icon: "someFastDance",
        },
        "dance3": {
            desc: "Jakiś szybki taniec",
            icon: "someFastDance",
        }
    },
    "slowDances": {
        "dancingAnims": usefullOptions.back,
        "dance2": {
            desc: "Jakiś wolny taniec",
            icon: "someFastDance",
        }
    },
    "popularAnims": {
        "animations": usefullOptions.back,
        "box": {
            desc: "Skrzynka",
            icon: "someFastDance",
        },
        "metal": {
            desc: "Skrzynka",
            icon: "someFastDance",
        }
    },
    "player": {
        "quit": usefullOptions.quit,
    },
    "bank": {
        "openBank": {
            desc: "Otwórz bank",
            icon: "handshake",
        },
        "createAccount": {
            desc: "Załóż konto bankowe",
            icon: "handshake",
        },
        "information": usefullOptions.information,
        "quit": usefullOptions.quit,
    },
    "atm": {
        "openAtm": {
            desc: "Otwórz bankomat",
            icon: "handshake",
        },
        "information": usefullOptions.information,
        "quit": usefullOptions.quit,
    }
}

var circleMenu = new Vue({
    el: '#circleMenu',
    data: {
        circleMenuActive: false,
        mainCircleDescription: "Zamknij",
        currentMenuSet: null,
        optionIcons: [null, null, null, null, null, null, null, null],
        timer: null,
    },
    methods: {
        startTimer: function () {
            this.timer = new Date().getTime();
        },
        getTime: function () {
            if (this.timer) {
                return new Date().getTime() - this.timer;
            } else {
                console.log('Timer not found');
                return;
            }
        },
        display: function (name) {
            this.startTimer();
            this.circleMenuActive = true;
            this.currentMenuSet = menusList[name];
            console.log(`Current item = ${JSON.stringify(this.currentMenuSet)}`);
            var i = 0;
            Object.entries(this.currentMenuSet).forEach(([key, value]) => {
                this.optionIcons[i] = value.icon;
                i++;
            });
            $('#circleMenu').css('width', '480px');
            $('#circleMenu').css('height', '480px');
            console.log(`Displayed in ${this.getTime()}ms.`);
        },
        mouseOver: function (event, hoveredItem) {
            // console.log(JSON.stringify(hoveredItem));
            if (!hoveredItem) {
                this.mainCircleDescription = "Zamknij";
            } else {
                this.mainCircleDescription = hoveredItem.desc;
            }
        },
        itemClick: function (e, clickedItemKey) {
            // If clicked on the middle/quit button - close the menu and send event to client
            if (!clickedItemKey || clickedItemKey === "quit") {
                console.log('Clicked on middle - close');
                alt.emit('circleMenuCallback', 'close');
                this.hide();
                return;
            }

            // Open sub menu or send event to client script
            if (menusList.hasOwnProperty(clickedItemKey)) {
                this.currentMenuSet = menusList[clickedItemKey];

                // Display correct description
                let id = e.target.id
                let newMenuValue = Object.values(this.currentMenuSet)[id];
                if (newMenuValue) {
                    this.mainCircleDescription = newMenuValue.desc;
                } else {
                    this.mainCircleDescription = "Menu";
                }
            } else {
                console.log(`Doesn't have own property`);
                alt.emit('circleMenuCallback', clickedItemKey);
                this.hide();
            }
        },
        mouseOut: function () {
            this.mainCircleDescription = "Zamknij";
        },
        hide: function () {
            $('#circleMenu').css('width', '0px');
            $('#circleMenu').css('height', '0px');
            this.circleMenuActive = false;
        }
    }
})

alt.on('openCircleMenu', (circleMenuName) => {
    circleMenu.display(circleMenuName);
});

alt.on('closeCircleMenu', () => {
    circleMenu.hide();
});