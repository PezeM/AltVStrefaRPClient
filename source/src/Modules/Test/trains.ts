import * as alt from "alt";
import * as game from "natives";
import utils from "source/src/Helpers/utils";
import maths from "source/src/Helpers/maths";

const TRAIN_LOCATIONS: Vector3[] = [
  { x: 2533.0, y: 2833.0, z: 38.0 },
  { x: 2606.0, y: 2927.0, z: 40.0 },
  { x: 2463.0, y: 3872.0, z: 38.8 },
  { x: 1164.0, y: 6433.0, z: 32.0 },
  { x: 537.0, y: -1324.1, z: 29.1 },
  { x: 219.1, y: -2487.7, z: 6.0 }
];

const METRO_SCAN_POINTS = [
  {
    StationId: 0,
    x: 230.82389831543,
    y: -1204.0643310547,
    z: 38.902523040771
  },
  {
    StationId: 0,
    x: 249.59216308594,
    y: -1204.7095947266,
    z: 38.92488861084
  },
  {
    StationId: 0,
    x: 270.33166503906,
    y: -1204.5366210938,
    z: 38.902912139893
  },
  {
    StationId: 0,
    x: 285.96697998047,
    y: -1204.2261962891,
    z: 38.929733276367
  },
  {
    StationId: 0,
    x: 304.13528442383,
    y: -1204.3720703125,
    z: 38.892612457275
  },
  {
    StationId: 1,
    x: -294.53421020508,
    y: -353.38571166992,
    z: 10.063089370728
  },
  {
    StationId: 1,
    x: -294.96997070313,
    y: -335.69766235352,
    z: 10.06309223175
  },
  {
    StationId: 1,
    x: -294.66772460938,
    y: -318.29565429688,
    z: 10.063152313232
  },
  {
    StationId: 1,
    x: -294.73403930664,
    y: -303.77200317383,
    z: 10.063160896301
  },
  {
    StationId: 1,
    x: -294.84133911133,
    y: -296.04568481445,
    z: 10.063159942627
  },
  {
    StationId: 2,
    x: -795.28063964844,
    y: -126.3436050415,
    z: 19.950298309326
  },
  {
    StationId: 2,
    x: -811.87170410156,
    y: -136.16409301758,
    z: 19.950319290161
  },
  {
    StationId: 2,
    x: -819.25689697266,
    y: -140.25764465332,
    z: 19.95037651062
  },
  {
    StationId: 2,
    x: -826.06652832031,
    y: -143.90898132324,
    z: 19.95037651062
  },
  { StationId: 2, x: -839.2587890625, y: -151.32421875, z: 19.950378417969 },
  {
    StationId: 2,
    x: -844.77874755859,
    y: -154.31440734863,
    z: 19.950380325317
  },
  {
    StationId: 3,
    x: -1366.642578125,
    y: -440.04803466797,
    z: 15.045327186584
  },
  {
    StationId: 3,
    x: -1361.4998779297,
    y: -446.50497436523,
    z: 15.045324325562
  },
  {
    StationId: 3,
    x: -1357.4061279297,
    y: -453.40963745117,
    z: 15.045320510864
  },
  {
    StationId: 3,
    x: -1353.4593505859,
    y: -461.88238525391,
    z: 15.045323371887
  },
  {
    StationId: 3,
    x: -1346.1264648438,
    y: -474.15142822266,
    z: 15.045383453369
  },
  {
    StationId: 3,
    x: -1338.1717529297,
    y: -488.97756958008,
    z: 15.045383453369
  },
  {
    StationId: 3,
    x: -1335.0261230469,
    y: -493.50796508789,
    z: 15.045380592346
  },
  {
    StationId: 4,
    x: -530.67529296875,
    y: -673.33935546875,
    z: 11.808959960938
  },
  {
    StationId: 4,
    x: -517.35559082031,
    y: -672.76635742188,
    z: 11.808965682983
  },
  {
    StationId: 4,
    x: -499.44836425781,
    y: -673.37664794922,
    z: 11.808973312378
  },
  {
    StationId: 4,
    x: -483.1321105957,
    y: -672.68438720703,
    z: 11.809024810791
  },
  {
    StationId: 4,
    x: -468.05545043945,
    y: -672.74371337891,
    z: 11.80902671814
  },
  {
    StationId: 5,
    x: -206.90379333496,
    y: -1014.9454345703,
    z: 30.138082504272
  },
  {
    StationId: 5,
    x: -212.65534973145,
    y: -1031.6101074219,
    z: 30.208702087402
  },
  {
    StationId: 5,
    x: -212.65534973145,
    y: -1031.6101074219,
    z: 30.208702087402
  },
  {
    StationId: 5,
    x: -217.0216217041,
    y: -1042.4768066406,
    z: 30.573789596558
  },
  {
    StationId: 5,
    x: -221.29409790039,
    y: -1054.5914306641,
    z: 30.13950920105
  },
  {
    StationId: 6,
    x: 101.89681243896,
    y: -1714.7589111328,
    z: 30.112174987793
  },
  {
    StationId: 6,
    x: 113.05246734619,
    y: -1724.7247314453,
    z: 30.111650466919
  },
  {
    StationId: 6,
    x: 122.72943878174,
    y: -1731.7276611328,
    z: 30.54141998291
  },
  {
    StationId: 6,
    x: 132.55198669434,
    y: -1739.7276611328,
    z: 30.109527587891
  },
  {
    StationId: 7,
    x: -532.24133300781,
    y: -1263.6896972656,
    z: 26.901586532593
  },
  {
    StationId: 7,
    x: -539.62115478516,
    y: -1280.5207519531,
    z: 26.908163070679
  },
  {
    StationId: 7,
    x: -545.18548583984,
    y: -1290.9525146484,
    z: 26.901586532593
  },
  {
    StationId: 7,
    x: -549.92230224609,
    y: -1302.8682861328,
    z: 26.901605606079
  },
  {
    StationId: 8,
    x: -872.75714111328,
    y: -2289.3198242188,
    z: -11.732793807983
  },
  {
    StationId: 8,
    x: -875.53247070313,
    y: -2297.67578125,
    z: -11.732793807983
  },
  {
    StationId: 8,
    x: -880.05035400391,
    y: -2309.1235351563,
    z: -11.732788085938
  },
  {
    StationId: 8,
    x: -883.25482177734,
    y: -2321.3303222656,
    z: -11.732738494873
  },
  {
    StationId: 8,
    x: -890.087890625,
    y: -2336.2553710938,
    z: -11.732738494873
  },
  {
    StationId: 8,
    x: -894.92395019531,
    y: -2350.4128417969,
    z: -11.732727050781
  },
  {
    StationId: 9,
    x: -1062.7882080078,
    y: -2690.7492675781,
    z: -7.4116077423096
  },
  {
    StationId: 9,
    x: -1071.6839599609,
    y: -2701.8503417969,
    z: -7.410071849823
  },
  {
    StationId: 9,
    x: -1079.0869140625,
    y: -2710.7033691406,
    z: -7.4100732803345
  },
  {
    StationId: 9,
    x: -1086.8758544922,
    y: -2720.0673828125,
    z: -7.4101362228394
  },
  {
    StationId: 9,
    x: -1095.3796386719,
    y: -2729.8442382813,
    z: -7.4101347923279
  },
  {
    StationId: 9,
    x: -1103.7401123047,
    y: -2740.369140625,
    z: -7.4101300239563
  }
];

const METRO_EXIT_POINTS = [
  {
    StationId: 0,
    x: 294.46011352539,
    y: -1203.5991210938,
    z: 38.902496337891,
    heading: 90.168075561523
  },
  {
    StationId: 1,
    x: -294.76913452148,
    y: -303.44619750977,
    z: 10.063159942627,
    heading: 185.19216918945
  },
  {
    StationId: 2,
    x: -839.20843505859,
    y: -151.43312072754,
    z: 19.950380325317,
    heading: 298.70877075195
  },
  {
    StationId: 3,
    x: -1337.9787597656,
    y: -488.36145019531,
    z: 15.045375823975,
    heading: 28.487064361572
  },
  {
    StationId: 4,
    x: -474.07037353516,
    y: -673.10729980469,
    z: 11.809032440186,
    heading: 81.799621582031
  },
  {
    StationId: 5,
    x: -222.13038635254,
    y: -1054.5043945313,
    z: 30.139930725098,
    heading: 155.81954956055
  },
  {
    StationId: 6,
    x: 133.13328552246,
    y: -1739.5617675781,
    z: 30.109495162964,
    heading: 231.40335083008
  },
  {
    StationId: 7,
    x: -550.79998779297,
    y: -1302.4467773438,
    z: 26.901605606079,
    heading: 155.53070068359
  },
  {
    StationId: 8,
    x: -891.87664794922,
    y: -2342.6486816406,
    z: -11.732737541199,
    heading: 353.59387207031
  },
  {
    StationId: 9,
    x: -1099.6376953125,
    y: -2734.8957519531,
    z: -7.410129070282,
    heading: 314.91424560547
  }
];

const TRAIN_MODELS = [
  "freight",
  "freightcar",
  "freightgrain",
  "freightcont1",
  "freightcont2",
  "freighttrailer",
  "tankercar",
  "metrotrain"
];

const TRAIN_DRIVER_MODEL = "s_m_m_lsmetro_01";

class TrainsController {
  private train = 0;
  private trainDriver = 0;

  constructor() {
    this.loadTrainsModels();
    alt.on("consoleCommand", this.onConsoleCommand.bind(this));
    alt.onServer("Train-TestCreate", this.onTrainServerTestCreate.bind(this));
  }

  async loadTrainsModels() {
    TRAIN_MODELS.forEach(async train => {
      await utils.loadModelAsync(train);
      alt.log(`Loaded train model ${train}`);
    });
  }

  async createTrain() {
    game.deleteAllTrains();

    const trainPosition = TRAIN_LOCATIONS[0];
    this.train = game.createMissionTrain(
      maths.getRandom(0, 22),
      trainPosition.x,
      trainPosition.y,
      trainPosition.z,
      false
    );
    await utils.delay(1000);

    await utils.loadModelAsync(TRAIN_DRIVER_MODEL);
    this.trainDriver = game.createPedInsideVehicle(
      this.train,
      26,
      game.getHashKey(TRAIN_DRIVER_MODEL),
      -1,
      true,
      true
    );
    game.setBlockingOfNonTemporaryEvents(this.trainDriver, true);
    game.setPedFleeAttributes(this.trainDriver, 0, false);
    game.setEntityInvincible(this.trainDriver, true);
    game.setEntityAsMissionEntity(this.trainDriver, true, true);

    game.setEntityAsMissionEntity(this.train, true, true);
    game.setEntityInvincible(this.train, true);
    game.setModelAsNoLongerNeeded(game.getHashKey(TRAIN_DRIVER_MODEL));
  }

  testTrain() {
    alt.emitServer("Train-TestSpawn");
  }

  onTrainServerTestCreate(vehicle: alt.Vehicle) {
    alt.log(
      `Got train entity from server with id ${vehicle.id} and scriptID ${vehicle.scriptID}`
    );
    game.setEntityAsMissionEntity(vehicle.scriptID, true, true);
    game.setEntityInvincible(vehicle.scriptID, true);
    game.setMissionTrainCoords(
      vehicle.scriptID,
      vehicle.pos.x,
      vehicle.pos.y,
      vehicle.pos.z
    );
  }

  async onConsoleCommand(command: string, ...args: string[]) {
    switch (command) {
      case "value":
        break;

      case "createTrain":
        await this.createTrain();
        break;

      case "testTrain":
        this.testTrain();
        break;

      default:
        break;
    }
  }
}

const trainsController = new TrainsController();
export default trainsController;

// HOW TO DO IT
// 1 PLAYER ON THE SERVER IS THE HOST,
