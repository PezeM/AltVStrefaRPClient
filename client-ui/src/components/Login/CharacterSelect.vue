<template>
  <div class="character-select container-fluid">
    <div class="row mb-5 mx-auto pt-5">
      <error-modal v-bind:errorMessage="errorMessage" v-on:hide-error-window="hideErrorWindow"></error-modal>

      <div class="col-12 text-center title">
        <h1>Witaj na serwerze! Wybierz swoją postać</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4 mb-4">
        <div class="profile-card" @click="createCharacter()">
          <div class="new-char img">
            <img src="../../assets/images/strefa-logo.png">
          </div>
          <div class="mid-section">
            <div class="name">Nowa postać</div>
            <div class="line"></div>
            <div class="stats">
              <div class="stat">
                {{ charactersList.length }}
                <div class="subtext">Ilość postaci</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-4 mb-4"
        v-for="character in filteredCharacterList"
        :key="character.Id"
        @click="chooseCharacter(character.Id)"
      >
        <div class="profile-card">
          <div class="img">
            <img :src="getImage(character)">
          </div>
          <div class="mid-section">
            <div class="name">{{ getCharacterFullName(character) }}</div>
            <div class="line"></div>
            <div class="stats">
              <div class="stat">
                {{ character.TimePlayed }}
                <div class="subtext">Czas online</div>
              </div>
              <div class="stat">
                {{ character.Money }}$
                <div class="subtext">Pieniądze</div>
              </div>
              <div class="stat">
                {{ character.Id }}
                <div class="subtext">Id</div>
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
        ErrorModal,
    },
    props: {
        charactersList: {
            type: Array,
            default() {
                return [
                    {
                        Id: '1',
                        TimePlayed: 7,
                        FirstName: 'Anna',
                        LastName: 'Anna2',
                        Money: 2321312,
                        ProfileImage: 'default-profile-image.jpg',
                    },
                    {
                        Id: '2',
                        TimePlayed: 2,
                        FirstName: 'Kurwa',
                        LastName: 'Maciek',
                        Money: 2332,
                        ProfileImage: 'default-profile-image.jpg',
                    },
                    {
                        Id: '3',
                        TimePlayed: 16,
                        FirstName: 'Edward',
                        LastName: 'Testowy',
                        Money: 10000000,
                        ProfileImage: 'default-profile-image.jpg',
                    },
                ];
            },
        },
    },
    data() {
        return {
            errorMessage: '',
            // charactersList: [
            //     {
            //         Id: 'characters/33-A',
            //         TimePlayed: 7,
            //         Name: 'Anna',
            //         LastName: 'Anna2',
            //         ProfileImage: 'default-profile-image.jpg',
            //     },
            //     {
            //         Id: 'characters/1-A',
            //         TimePlayed: 2,
            //         Name: 'Kurwa',
            //         LastName: 'Maciek',
            //         ProfileImage: 'default-profile-image.jpg',
            //     },
            //     {
            //         Id: 'characters/97-A',
            //         TimePlayed: 16,
            //         Name: 'Edward',
            //         LastName: 'Testowy',
            //         ProfileImage: 'default-profile-image.jpg',
            //     },
            // ],
        };
    },
    methods: {
        createCharacter() {
            alt.emit('tryToCreateNewCharacter');
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
        },
        getCharacterFullName(character) {
            return character.FirstName + ' ' + character.LastName;
        },
        getImage(character) {
            return require(`@/assets/images/${character.ProfileImage}`);
        },
    },
    computed: {
        filteredCharacterList() {
            return this.charactersList.sort((a, b) => a.Id - b.Id);
        },
    },
};
</script>

<style scoped>
.character-select {
    background: rgba(0, 0, 0, 0.65);
    height: 100vh;
    overflow: auto;
}

.character-select .title {
    color: #fff;
    font-size: 3em;
}

.profile-card {
    width: 18rem;
    height: 20rem;
    background: white;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.3);
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    transition: 0.5s all;
    transform: perspective(300px) rotateY(0deg);
}

.profile-card:hover {
    box-shadow: 0 12px 18px rgba(0, 0, 0, 0.479), 0 12px 18px rgba(0, 0, 0, 0.644);
    transform: perspective(300px) rotateY(12deg);
}

.profile-card .mid-section {
    position: absolute;
    height: 10rem;
    width: 100%;
    top: 12rem;
    left: 0;
    padding: 0 10px 0;
    box-sizing: border-box;
    background: white;
}

.profile-card .mid-section .name {
    color: #333333;
    font-size: 1.4em;
    padding-top: 5px;
    background: rgba(255, 255, 255, 0.1);
    font-weight: bold;
}

.profile-card .mid-section .line {
    background: #0c0e74;
    width: 85%;
    height: 2px;
    margin: 5px auto -3px;
}

.profile-card .mid-section .stats {
    display: flex;
    position: absolute;
    left: 10%;
    padding-top: 10px;
    width: 80%;
    justify-content: space-around;
}

.profile-card .mid-section .stats .stat {
    font-size: 1.3em;
    color: #333333;
    padding: 5px;
    font-weight: bold;
}

.profile-card .mid-section .stats .subtext {
    color: gray;
    font-size: 0.6em;
    font-weight: normal;
}

.profile-card .img {
    height: 130px;
    width: 100%;
    background-image: url('../../assets/images/profile-card-background.jpg');
    padding: 20px;
    box-sizing: border-box;
    position: relative;
}

.profile-card .new-char {
    background-image: none;
    background-color: rgba(0, 0, 0, 0.8);
    height: 130px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
}

.profile-card .img img {
    width: 160px;
    height: 160px;
    padding: 3px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.6);
    position: absolute;
    left: calc(50% - 84px);
    top: 26px;
}

.profile-card .new-char img {
    background-color: #1d2631;
}

.profile-card .img:after {
    content: '';
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    left: calc(50% - 91.5px);
    top: 20px;
    border: 3px solid rgba(255, 255, 255, 0.4);
}
.profile-card .img:before {
    content: '';
    position: absolute;
    width: 190px;
    height: 190px;
    border-radius: 50%;
    left: calc(50% - 95px);
    top: 15.5px;
    border: 2px solid rgba(255, 255, 255, 0.2);
}
</style>
