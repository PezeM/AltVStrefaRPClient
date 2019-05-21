<template>
  <div class="charSelect">
    <error-modal v-bind:errorMessage="errorMessage" v-on:hide-error-window="hideErrorWindow"></error-modal>

    <div class="char-select-title">
      <h1>Witaj na serwerze! Wybierz swoją postać</h1>
    </div>
    <div class="char-select-body">
      <div class="char-select-body-container">
        <div class="character-card card new-char" @click="createCharacter()">
          <div class="card-top"></div>
          <div class="card-profile">
            <div class="profile-image"></div>
          </div>
          <div class="card-info">
            <div class="info-title">
              <h2>Stwórz nową postać</h2>
              <h3>StrefaRP.pl</h3>
            </div>
          </div>
        </div>

        <div
          class="character-card card"
          v-for="character in filteredCharacterList"
          :key="character.Id"
          @click="chooseCharacter(character.Id)"
        >
          <div
            class="card-top"
            :style="{ backgroundImage: `url(${require(`@/assets/images/${character.BackgroundImage}`)})` }"
          ></div>
          <div class="card-profile">
            <div
              class="profile-image"
              :style="{ backgroundImage: `url(${require(`@/assets/images/${character.ProfileImage}`)})` }"
            ></div>
          </div>
          <div class="card-info">
            <div class="info-title">
              <h2>{{ character.Name }} {{ character.LastName }}</h2>
              <h3>Pieniądze: {{ character.Id }}$</h3>
            </div>
            <div class="info-follow">
              <div>
                <span>{{ character.TimePlayed }}</span>
                <br>
                <span>Czas online</span>
              </div>
              <div>
                <span>{{ character.Id }}</span>
                <br>
                <span>Id</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorModal from '@/components/Login/ErrorModal.vue';
import EventBus from '@/event-bus.js';

export default {
    name: 'characterSelect',
    components: {
        ErrorModal
    },
    mounted() {
        console.log('Mounted');
        EventBus.$on('succesfullyLoggedIn', this.populateCharacterList);
    },
    data() {
        return {
            errorMessage: '',
            charactersList: []
            // charactersList: [
            //     {
            //         Id: 'characters/33-A',
            //         TimePlayed: 7,
            //         Name: 'Anna',
            //         LastName: 'Anna2',
            //         BackgroundImage: 'profile-card-background.jpg',
            //         ProfileImage: 'default-profile-image.jpg'
            //     },
            //     {
            //         Id: 'characters/1-A',
            //         TimePlayed: 2,
            //         Name: 'Kurwa',
            //         LastName: 'Maciek',
            //         BackgroundImage: 'profile-card-background.jpg',
            //         ProfileImage: 'default-profile-image.jpg'
            //     },
            //     {
            //         Id: 'characters/97-A',
            //         TimePlayed: 16,
            //         Name: 'Edward',
            //         LastName: 'Testowy',
            //         BackgroundImage: 'profile-card-background.jpg',
            //         ProfileImage: 'default-profile-image.jpg'
            //     },
            //     {
            //         Id: 'characters/161-A',
            //         TimePlayed: 8,
            //         Name: 'Ed',
            //         LastName: 'Eddy',
            //         BackgroundImage: 'profile-card-background.jpg',
            //         ProfileImage: 'default-profile-image.jpg'
            //     },
            //     {
            //         Id: 'characters/162-A',
            //         TimePlayed: 8,
            //         Name: 'Ed',
            //         LastName: 'Eddy',
            //         BackgroundImage: 'profile-card-background.jpg',
            //         ProfileImage: 'default-profile-image.jpg'
            //     },
            //     {
            //         Id: 'characters/163-A',
            //         TimePlayed: 8,
            //         Name: 'Ed',
            //         LastName: 'Eddy',
            //         BackgroundImage: 'profile-card-background.jpg',
            //         ProfileImage: 'default-profile-image.jpg'
            //     }
            // ]
        };
    },
    methods: {
        createCharacter() {
            alt.emit('tryToCreateNewCharacter');
        },
        populateCharacterList(characterJson) {
            this.charactersList = characterJson;
            console.log(
                'New characterList = ' + JSON.stringify(this.charactersList)
            );
        },
        chooseCharacter(characterId) {
            if (characterId) {
                alt.emit('loadCharacter', characterId);
            } else {
                this.errorMessage = 'Złe ID postaci!';
            }
        },
        hideErrorWindow() {
            console.log('Hide error window loginWIndow.vue');
            this.errorMessage = '';
        }
    },
    computed: {
        filteredCharacterList() {
            // Sort characters by ID
            return this.charactersList.sort(function(a, b) {
                return a.Id - b.Id;
            });
        }
    },
    beforeDestroy() {
        EventBus.$off('succesfullyLoggedIn', this.populateCharacterList);
    }
};
</script>


<style scoped>
.charSelect {
    display: grid;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
    grid-template-rows: 25% auto;
    grid-template-columns: auto;
}

.char-select-title {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.char-select-title h1 {
    color: #fff;
    font-size: 3em;
}

.char-select-body {
    grid-column: 1;
    grid-row: 2;
    /* height: 100%; */
    overflow-y: auto;
}

.char-select-body-container {
    margin: 1vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    grid-row-gap: 2vh;
}

.charSelect .character-card {
    width: 30vh;
    height: 32vh;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.384), 0 6px 12px rgba(0, 0, 0, 0.486);
    transition: all 0.3s;
}

.charSelect .character-card:hover {
    width: 30vh;
    height: 32vh;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 12px 18px rgba(0, 0, 0, 0.479),
        0 12px 18px rgba(0, 0, 0, 0.644);
    transform: perspective(350px) rotateY(10deg);
}

.card {
    overflow: hidden;
    border-radius: 4px;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
}

.card .card-top {
    flex-basis: 155px;
    flex-shrink: 1;
    background-color: rgba(0, 0, 0, 0.863);
    background-position: center;
    background-size: cover;
}

.card .card-profile {
    flex-basis: 35px;
    flex-shrink: 1;
}

.card .card-profile .profile-image {
    overflow: hidden;
    border-radius: 100%;
    position: absolute;
    left: calc(50% - 75px);
    top: calc(25% - 75px);
    border: 4px solid white;
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: center;
}

.card .card-info {
    flex-basis: 56, 66665%;
    flex-grow: 1;
    padding: 0 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
}

.card-info h2 {
    font-size: 1.5em;
    font-weight: 700;
}

.card-info h3 {
    font-size: 1.2em;
    font-weight: 400;
}

.card .card-info .info-title {
    padding-bottom: 15px;
}

.card .card-info .info-title h3 {
    font-weight: 400;
}

.card .card-info .info-follow {
    display: flex;
    padding: 8px 0;
    font-size: 1em;
}

.card .card-info .info-follow > div {
    flex-grow: 1;
    flex-basis: 1px;
    min-height: 20px;
    max-height: 80px;
    /* max-height: 30px; */
}

.card.new-char .card-top {
    background: rgba(0, 0, 0, 0.877);
}

.card.new-char .profile-image {
    /* background-image: url('../../assets/images/profile-card-background.jpg'); */
    background-image: url('../../assets/images/strefa-logo.png');
}
</style>
