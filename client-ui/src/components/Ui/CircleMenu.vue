<template>
  <transition name="fade" mode="out-in">
    <div id="circleMenu" @mouseout="mouseOut" v-show="circleMenuActive" v-bind:style="styleObject">
      <div id="circleBackground"></div>
      <ul>
        <li
          v-for="(value, key, index) in currentMenuItems"
          v-bind:id="index"
          @mouseover="mouseOver($event, value)"
          v-bind:key="index"
        >
          <div
            v-bind:id="index"
            class="contents"
            :class="value.icon"
            @click="itemClick($event,key)"
          ></div>
        </li>
      </ul>
      <div id="8" class="centeredCircle" @mouseover="mouseOver" @click="itemClick">
        <div id="8" class="descriptionText">{{ mainCircleDescription }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
import EventBus from '@/event-bus.js';
import menusList from '@/components/Ui/circleMenuItems.js';

export default {
    name: 'circleMenu',
    data() {
        return {
            circleMenuActive: false,
            mainCircleDescription: 'Zamknij',
            currentMenuItems: null,
            optionIcons: [null, null, null, null, null, null, null, null],
            timer: null,
            styleObject: {
                width: '0px',
                height: '0px',
            },
        };
    },
    mounted() {
        EventBus.$on('openCircleMenu', this.display);
        EventBus.$on('closeCircleMenu', this.hide);
        this.display('animations');
    },
    methods: {
        startTimer() {
            this.timer = new Date().getTime();
        },
        getTime() {
            if (this.timer) {
                return new Date().getTime() - this.timer;
            } else {
                console.log('Timer not found');
                return;
            }
        },
        display(name) {
            this.startTimer();
            this.circleMenuActive = true;
            this.currentMenuItems = menusList[name];

            let i = 0;
            for (const key in this.currentMenuItems) {
                this.optionIcons[i] = this.currentMenuItems[key].icon;
                i++;
            }

            this.styleObject.width = '480px';
            this.styleObject.height = '480px';
            console.log(`Displayed in ${this.getTime()}ms.`);
        },
        mouseOver(event, hoveredItem) {
            if (hoveredItem == null) {
                this.mainCircleDescription = 'Zamknij';
            } else {
                this.mainCircleDescription = hoveredItem.desc;
            }
        },
        itemClick(e, clickedItemKey) {
            // If clicked on the middle/quit button - close the menu and send event to client
            if (!clickedItemKey || clickedItemKey === 'quit') {
                alt.emit('circleMenuCallback', 'close');
                this.hide();
                return;
            }

            // Open sub menu or send event to client script
            if (menusList.hasOwnProperty(clickedItemKey)) {
                this.currentMenuItems = menusList[clickedItemKey];

                // Display correct description
                let id = e.target.id;
                let newMenuValue = Object.values(this.currentMenuItems)[id];
                if (newMenuValue) {
                    this.mainCircleDescription = newMenuValue.desc;
                } else {
                    this.mainCircleDescription = 'Menu';
                }
            } else {
                console.log(`Doesn't have own property`);
                alt.emit('circleMenuCallback', clickedItemKey);
                this.hide();
            }
        },
        mouseOut() {
            this.mainCircleDescription = 'Zamknij';
        },
        hide() {
            this.styleObject.width = '0px';
            this.styleObject.height = '0px';
            this.circleMenuActive = false;
        },
    },
};

if (!global.alt) {
    global.alt = {
        uiDebug: true,
        on(ev, cb) {
            console.log('Alt on', ev, cb);
        },
        emit(ev, ...args) {
            console.log('Event triggered', ev, args);
        },
    };
}

alt.on('openCircleMenu', circleMenuName => {
    EventBus.$emit('openCircleMenu', circleMenuName);
});

alt.on('closeCircleMenu', () => {
    EventBus.$emit('closeCircleMenu');
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

#circleMenu {
    z-index: 10;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
}

#circleMenu #circleBackground {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(3, 3, 3, 0.8);
}

#circleMenu .centeredCircle {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(24, 24, 24);
    box-shadow: 3px 3px 8px rgba(3, 3, 3, 0.5);
    cursor: pointer;
}

#circleMenu .centeredCircle .descriptionText {
    padding: 0 8px;
    top: 50%;
    left: 50%;
    color: rgb(196, 184, 184);
    text-align: center;
    position: relative;
    transform: translate(-50%, -50%);
    font-size: 1em;
    font-weight: 600;
}

#circleMenu ul {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 3px 5px 15px rgba(3, 3, 3, 0.5);
    cursor: pointer;
}

#circleMenu ul li {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    transform-origin: 100% 100%;
    background-color: transparent;
}

#circleMenu ul li:hover {
    background-color: rgba(0, 0, 0, 0.65);
    box-shadow: 3px 5px 5px rgba(3, 3, 3, 0.5);
}

#circleMenu ul li .contents {
    position: absolute;
    width: 50%;
    height: 50%;
    right: 19px;
    bottom: 5px;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
}

#circleMenu ul li:nth-child(0) {
    transform: rotate(-45deg) skew(45deg);
}

#circleMenu ul li:nth-child(0) .contents {
    transform: skew(-45deg) rotate(45deg);
}

#circleMenu ul li:nth-child(1) {
    transform: rotate(0deg) skew(45deg);
}

#circleMenu ul li:nth-child(1) .contents {
    transform: skew(-45deg) rotate(0deg);
}

#circleMenu ul li:nth-child(2) {
    transform: rotate(45deg) skew(45deg);
}

#circleMenu ul li:nth-child(2) .contents {
    transform: skew(-45deg) rotate(-45deg);
}

#circleMenu ul li:nth-child(3) {
    transform: rotate(90deg) skew(45deg);
}

#circleMenu ul li:nth-child(3) .contents {
    transform: skew(-45deg) rotate(-90deg);
}

#circleMenu ul li:nth-child(4) {
    transform: rotate(135deg) skew(45deg);
}

#circleMenu ul li:nth-child(4) .contents {
    transform: skew(-45deg) rotate(-135deg);
}

#circleMenu ul li:nth-child(5) {
    transform: rotate(180deg) skew(45deg);
}

#circleMenu ul li:nth-child(5) .contents {
    transform: skew(-45deg) rotate(-180deg);
}

#circleMenu ul li:nth-child(6) {
    transform: rotate(225deg) skew(45deg);
}

#circleMenu ul li:nth-child(6) .contents {
    transform: skew(-45deg) rotate(-225deg);
}

#circleMenu ul li:nth-child(7) {
    transform: rotate(270deg) skew(45deg);
}

#circleMenu ul li:nth-child(7) .contents {
    transform: skew(-45deg) rotate(-270deg);
}

#circleMenu ul li:nth-child(8) {
    transform: rotate(315deg) skew(45deg);
}

#circleMenu ul li:nth-child(8) .contents {
    transform: skew(-45deg) rotate(-315deg);
}

#circleMenu .back {
    background-image: url('../../assets/circleIcons/back.png');
}

#circleMenu .information {
    background-image: url('../../assets/circleIcons/info.png');
}

#circleMenu .quit {
    background-image: url('../../assets/circleIcons/quit.png');
}

#circleMenu .popular {
    background-image: url('../../assets/circleIcons/popular.png');
}

#circleMenu .favourite {
    background-image: url('../../assets/circleIcons/favourite.png');
}

#circleMenu .misc {
    background-image: url('../../assets/circleIcons/misc.png');
}

#circleMenu .dancingAnims {
    background-image: url('../../assets/circleIcons/dancingAnims.png');
}

#circleMenu .fastDance {
    background-image: url('../../assets/circleIcons/fastDance.png');
}

#circleMenu .slowDance {
    background-image: url('../../assets/circleIcons/slowDance.png');
}

#circleMenu .someFastDance {
    background-image: url('../../assets/circleIcons/someFastDance.png');
}

#circleMenu .usefulAnims {
    background-image: url('../../assets/circleIcons/usefulAnims.png');
}

#circleMenu .box {
    background-image: url('../../assets/circleIcons/box.png');
}

#circleMenu .toolbox {
    background-image: url('../../assets/circleIcons/toolbox.png');
}

#circleMenu .suitcase {
    background-image: url('../../assets/circleIcons/suitcase.png');
}

#circleMenu .carMechanic {
    background-image: url('../../assets/circleIcons/carMechanic.png');
}

/* Banking */

#circleMenu .openBank {
    background-image: url('../../assets/circleIcons/open-bank.png');
}

#circleMenu .openAtm {
    background-image: url('../../assets/circleIcons/open-atm.png');
}

#circleMenu .createAccount {
    background-image: url('../../assets/circleIcons/create-account.png');
}

/* Trash bin */
#circleMenu .trashBin {
    background-image: url('../../assets/circleIcons/trashBin.png');
}
</style>
