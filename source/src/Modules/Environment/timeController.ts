import * as alt from 'alt';
import * as native from 'natives';
import { Weather } from 'source/src/Constans/Weathers';

const MS_PER_GAME_MINUTE = 3000; // 3s per 1 min in game, 1min irl = 20 min in game
class TimeController {
    currentWeather: Weather;
    constructor() {
        this.currentWeather = Weather.ExtraSunny;

        alt.setMsPerGameMinute(MS_PER_GAME_MINUTE);
    }

    setWeather(weatherId: number, transitionDuration: number) {
        const weather = this.weatherDict[weatherId];
        native.setWeatherTypeOverTime(weather, transitionDuration);
    }

    setTime(hour: number, minute: number, second: number) {
        native.setClockTime(hour, minute, second);
    }

    // tslint:disable-next-line: member-ordering
    private weatherDict: string[] = [
        'EXTRASUNNY',
        'CLEAR',
        'CLOUDS',
        'SMOG',
        'FOGGY',
        'OVERCAST',
        'RAIN',
        'THUNDER',
        'CLEARING',
        'NEUTRAL',
        'SNOW',
        'BLIZZARD',
        'SNOWLIGHT',
        'XMAS',
    ];
}

const timeController = new TimeController();
export default timeController;