import * as alt from 'alt';
import * as natives from 'natives';
import testModule from 'source/src/testModule';

natives.freezeEntityPosition(alt.getLocalPlayer().scriptID, false);
natives.setPedDefaultComponentVariation(alt.getLocalPlayer().scriptID);

async function something() {
    alt.log('Eldo');
    const className = testModule.className;
    className.replace('s', '2');
}

something();
