let characterSelect = new Vue({
    el: "#charSelect",
    data: {
        showCharacterSelect: false,
        charactersList: [],
        // charactersList: [
        //     {
        //         "Id": "characters/33-A",
        //         "TimePlayed": 7,
        //         "Name": "Anna",
        //         "LastName": "Anna2",
        //         "BackgroundImage": "../images/profile-card-background.jpg",
        //         "ProfileImage": "../images/default-profile-image.jpg",
        //     },
        //     {
        //         "Id": "characters/1-A",
        //         "TimePlayed": 2,
        //         "Name": "Kurwa",
        //         "LastName": "Maciek",
        //         "BackgroundImage": "../images/profile-card-background.jpg",
        //         "ProfileImage": "../images/default-profile-image.jpg",
        //     },
        //     {
        //         "Id": "characters/97-A",
        //         "TimePlayed": 16,
        //         "Name": "Edward",
        //         "LastName": "Testowy",
        //         "BackgroundImage": "../images/profile-card-background.jpg",
        //         "ProfileImage": "../images/default-profile-image.jpg",
        //     },
        //     {
        //         "Id": "characters/161-A",
        //         "TimePlayed": 8,
        //         "Name": "Ed",
        //         "LastName": "Eddy",
        //         "BackgroundImage": "../images/profile-card-background.jpg",
        //         "ProfileImage": "../images/default-profile-image.jpg",
        //     },
        //     {
        //         "Id": "characters/161-A",
        //         "TimePlayed": 8,
        //         "Name": "Ed",
        //         "LastName": "Eddy",
        //         "BackgroundImage": "../images/profile-card-background.jpg",
        //         "ProfileImage": "../images/default-profile-image.jpg",
        //     },
        //     {
        //         "Id": "characters/161-A",
        //         "TimePlayed": 8,
        //         "Name": "Ed",
        //         "LastName": "Eddy",
        //         "BackgroundImage": "../images/profile-card-background.jpg",
        //         "ProfileImage": "../images/default-profile-image.jpg",
        //     }
        // ],
    },
    methods: {
        createCharacter: function () {
            alert('Create character');
            alt.emit('tryToCreateNewCharacter');
        },
        populateCharacterList: function (characterJson) {
            // this.charactersList = JSON.parse(characterJson);
            this.charactersList = JSON.parse(characterJson);
            console.log('Character list after parsing client = ' + this.charactersList);
            this.showCharacterSelect = true;
        },
        chooseCharacter: function (characterId) {
            if (characterId) {
                characterId = Number(characterId);
                alert(typeof characterId + ' ' + characterId);
                alt.emit('loadCharacter', characterId);
            }
            else {
                alert("Złe ID postaci!");
            }
        },
    },
    computed: {
        filteredCharacterList() { // Sort characters by ID
            // return this.charactersList.sort(function (a, b) {
            //     return a.Id - b.Id;
            // })
            if (Array.isArray(this.charactersList)) {
                console.log("Character list is an array");
            }
            else {
                console.log("Character list is an object");
            }

            return this.charactersList.sort(function (a, b) {
                return a.Id - b.Id;
            })
        }
    },
});

alt.on('hideCharacterSelectWindow', () => {
    characterSelect.showCharacterSelect = false;
});