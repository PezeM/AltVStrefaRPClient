import * as game from 'natives';
import * as alt from 'alt';
import { getMinimapAnchor } from 'src/Helpers/uiHelper.js';

export default class ZoneNames {
    constructor(localPlayerId) {
        alt.log('Initialized zone names class');
        this.localPlayerId = localPlayerId;
        this.zoneNamesShort = ["AIRP", "ALAMO", "ALTA", "ARMYB", "BANHAMC", "BANNING", "BEACH", "BHAMCA", "BRADP", "BRADT", "BURTON", "CALAFB", "CANNY", "CCREAK", "CHAMH", "CHIL", "CHU", "CMSW", "CYPRE", "DAVIS", "DELBE", "DELPE", "DELSOL", "DESRT", "DOWNT", "DTVINE", "EAST_V", "EBURO", "ELGORL", "ELYSIAN", "GALFISH", "GOLF", "GRAPES", "GREATC", "HARMO", "HAWICK", "HORS", "HUMLAB", "JAIL", "KOREAT", "LACT", "LAGO", "LDAM", "LEGSQU", "LMESA", "LOSPUER", "MIRR", "MORN", "MOVIE", "MTCHIL", "MTGORDO", "MTJOSE", "MURRI", "NCHU", "NOOSE", "OCEANA", "PALCOV", "PALETO", "PALFOR", "PALHIGH", "PALMPOW", "PBLUFF", "PBOX", "PROCOB", "RANCHO", "RGLEN", "RICHM", "ROCKF", "RTRAK", "SANAND", "SANCHIA", "SANDY", "SKID", "SLAB", "STAD", "STRAW", "TATAMO", "TERMINA", "TEXTI", "TONGVAH", "TONGVAV", "VCANA", "VESP", "VINE", "WINDF", "WVINE", "ZANCUDO", "ZP_ORT", "ZQ_UAR"];
        this.zoneNames = ["Los Santos International Airport", "Alamo Sea", "Alta", "Fort Zancudo", "Banham Canyon Dr", "Banning", "Vespucci Beach", "Banham Canyon", "Braddock Pass", "Braddock Tunnel", "Burton", "Calafia Bridge", "Raton Canyon", "Cassidy Creek", "Chamberlain Hills", "Vinewood Hills", "Chumash", "Chiliad Mountain State Wilderness", "Cypress Flats", "Davis", "Del Perro Beach", "Del Perro", "La Puerta", "Grand Senora Desert", "Downtown", "Downtown Vinewood", "East Vinewood", "El Burro Heights", "El Gordo Lighthouse", "Elysian Island", "Galilee", "GWC and Golfing Society", "Grapeseed", "Great Chaparral", "Harmony", "Hawick", "Vinewood Racetrack", "Humane Labs and Research", "Bolingbroke Penitentiary", "Little Seoul", "Land Act Reservoir", "Lago Zancudo", "Land Act Dam", "Legion Square", "La Mesa", "La Puerta", "Mirror Park", "Morningwood", "Richards Majestic", "Mount Chiliad", "Mount Gordo", "Mount Josiah", "Murrieta Heights", "North Chumash", "N.O.O.S.E", "Pacific Ocean", "Paleto Cove", "Paleto Bay", "Paleto Forest", "Palomino Highlands", "Palmer-Taylor Power Station", "Pacific Bluffs", "Pillbox Hill", "Procopio Beach", "Rancho", "Richman Glen", "Richman", "Rockford Hills", "Redwood Lights Track", "San Andreas", "San Chianski Mountain Range", "Sandy Shores", "Mission Row", "Stab City", "Maze Bank Arena", "Strawberry", "Tataviam Mountains", "Terminal", "Textile City", "Tongva Hills", "Tongva Valley", "Vespucci Canals", "Vespucci", "Vinewood", "Ron Alternates Wind Farm", "West Vinewood", "Zancudo River", "Port of South Los Santos", "Davis Quartz"];
        this.streetName;
        this.realZoneName;
        this.minimap = {};
        this.minimapUpdateInterval = 500; // milliseconds, lower value = more accurate, at the cost of performance
        alt.setInterval(() => {
            this.getZoneNames();
        }, this.minimapUpdateInterval);
    }

    getZoneNames() {
        // only do stuff if radar is enabled and visible
        if (game.isRadarEnabled() && !game.isRadarHidden()) {
            this.minimap = getMinimapAnchor(); // Gets coords of minimap

            const position = game.getEntityCoords(this.localPlayerId, true);
            let getStreet = game.getStreetNameAtCoord(position.x, position.y, position.z, 0, 0); // Returns array of 3 items, second one is hash
            this.streetName = game.getStreetNameFromHashKey(getStreet[1]);
            let zoneName = game.getNameOfZone(position.x, position.y, position.z);
            if (this.zoneNamesShort.includes(zoneName)) {
                this.realZoneName = this.zoneNames[this.zoneNamesShort.indexOf(zoneName)];
            }
        } else {
            // alt.log('Radar is hidden or not enabled');
            this.streetName = null;
            this.realZoneName = null;
        }
    }

}
