const newAnzPlatforms = 125;
const newPlatform_B = [true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,true,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false,true,false,false,false,false];
const newPlatform_I = [112,2012,9,2017,9,3500,5000,4,0,20000000,0,999999,0,56,-1,-1,0,3,0,0,113,2016,9,2021,9,4000,5900,5,0,20000000,0,999999,0,56,-1,-1,0,3,0,0,114,2008,2,2013,2,3300,4800,3,0,15000000,0,999999,0,56,-1,-1,0,3,0,0,115,2012,2,2017,2,3600,5200,4,0,13000000,0,999999,0,56,-1,-1,0,3,0,0,116,2016,2,2021,2,4000,5900,5,0,10000000,0,999999,0,56,-1,-1,0,3,0,0,117,2009,2,2014,2,2700,4100,3,0,17000000,0,999999,0,56,-1,-1,0,3,0,0,118,2013,2,2018,2,3300,4600,4,0,14000000,0,999999,0,56,-1,-1,0,3,0,0,119,1976,2,1981,2,35000,17000,2,612500,3000000,0,999999,0,59,-1,-1,2,4,0,0,120,1981,2,1986,2,56000,30000,3,0,3000000,0,999999,0,59,-1,-1,2,4,0,0,121,1986,2,1991,2,127000,45000,4,0,3000000,0,999999,0,59,-1,-1,2,4,0,0,122,1991,2,1995,2,150000,72000,5,0,3000000,0,999999,0,59,-1,-1,2,4,0,0,123,1995,2,2000,2,280000,95000,6,0,3000000,0,999999,0,59,-1,-1,2,4,0,0,124,2000,2,2005,2,470000,120000,7,0,3000000,0,999999,0,59,-1,-1,2,4,0,0,125,2005,2,999999,1,720000,215000,8,0,3000000,0,999999,0,59,-1,-1,2,4,0,0];
const newPlatform_F = [0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,100,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0];
const newPlatform_S = [ "Minisoft Phone I", "Minisoft Phone I", "Minisoft", "Minisoft", "windowsPhone1.png", "", "Minisoft Phone I", "Minisoft", "", "", "Minisoft Phone I", "Minisoft", "Minisoft Phone I", "Minisoft", "Minisoft Phone I", "ミニソフト", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Minisoft Phone II", "Minisoft Phone II", "Minisoft", "Minisoft", "windowsPhone2.png", "", "Minisoft Phone II", "Minisoft", "", "", "Minisoft Phone II", "Minisoft", "Minisoft Phone II", "Minisoft", "Minisoft Phone II", "ミニソフト", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Redberry Z5", "Redberry Z5", "Redberry Ltd.", "Redberry Ltd.", "Blackberry1.png", "", "Redberry Z5", "Redberry Ltd.", "", "", "Redberry Z5", "Redberry Ltd.", "Redberry Z5", "Redberry Ltd.", "Redberry Z5", "レッドベリー", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Redberry Z10", "Redberry Z10", "Redberry Ltd.", "Redberry Ltd.", "Blackberry2.png", "", "Redberry Z10", "Redberry Ltd.", "", "", "Redberry Z10", "Redberry Ltd.", "Redberry Z10", "Redberry Ltd.", "Redberry Z10", "レッドベリー", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Redberry Z20", "Redberry Z20", "Redberry Ltd.", "Redberry Ltd.", "Blackberry3.png", "", "Redberry Z20", "Redberry Ltd.", "", "", "Redberry Z20", "Redberry Ltd.", "Redberry Z20", "Redberry Ltd.", "Redberry Z20", "レッドベリー", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Sybios 500", "Sybios 500", "Nokida ", "Nokida", "symbian1.png", "", "Sybios 500", "Nokida", "", "", "Sybios 500", "Nokida", "Sybios 500", "Nokida", "Sybios 500", "ノキダ", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Sybios 800", "Sybios 800", "Nokida", "Nokida", "symbian2.png", "", "Sybios 800", "Nokida", "", "", "Sybios 800", "Nokida", "Sybios 800", "Nokida", "Sybios 800", "ノキダ", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Arcade System 500", "Arcade System 500", "Arcade Electrics", "Arcade Electrics", "ASB1.png", "", "Arcade System 500", "Arcade Electrics", "", "", "Arcade System 500", "Arcade Electrics", "Arcade System 500", "Arcade Electrics", "アーケード システム500", "アーケード電機", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Arcade System 800", "Arcade System 800", "Arcade Electrics", "Arcade Electrics", "ASB2.png", "", "Arcade System 800", "Arcade Electrics", "", "", "Arcade System 800", "Arcade Electrics", "Arcade System 800", "Arcade Electrics", "アーケード システム800", "アーケード電機", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Arcade System 1000", "Arcade System 1000", "Arcade Electrics", "Arcade Electrics", "ASB3.png", "", "Arcade System 1000", "Arcade Electrics", "", "", "Arcade System 1000", "Arcade Electrics", "Arcade System 1000", "Arcade Electrics", "アーケード システム1000", "アーケード電機", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Arcade System 1500", "Arcade System 1500", "Arcade Electrics", "Arcade Electrics", "ASB4.png", "", "Arcade System 1500", "Arcade Electrics", "", "", "Arcade System 1500", "Arcade Electrics", "Arcade System 1500", "Arcade Electrics", "アーケード システム1500", "アーケード電機", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Arcade System 1800", "Arcade System 1800", "Arcade Electrics", "Arcade Electrics", "ASB5.png", "", "Arcade System 1800", "Arcade Electrics", "", "", "Arcade System 1800", "Arcade Electrics", "Arcade System 1800", "Arcade Electrics", "アーケード システム1800", "アーケード電機", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Arcade System 2000", "Arcade System 2000", "Arcade Electrics", "Arcade Electrics", "ASB6.png", "", "Arcade System 2000", "Arcade Electrics", "", "", "Arcade System 2000", "Arcade Electrics", "Arcade System 2000", "Arcade Electrics", "アーケード システム2000", "アーケード電機", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "Arcade System 2500", "Arcade System 2500", "Arcade Electrics", "Arcade Electrics", "ASB7.png", "", "Arcade System 2500", "Arcade Electrics", "", "", "Arcade System 2500", "Arcade Electrics", "Arcade System 2500", "Arcade Electrics", "アーケード システム2500", "アーケード電機", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null ];

const newGameplayFeatures_TYP = [5,5,5];
const newGameplayFeatures_RES_POINTS = [530,25,430];
const newGameplayFeatures_RES_POINTS_LEFT = [530,25,430];
const newGameplayFeatures_PRICE = [108000, 5000, 86000];
const newGameplayFeatures_DEV_COSTS = [61000, 3000, 48500];
const newGameplayFeatures_DATE_YEAR = [1998, 1976, 1993];
const newGameplayFeatures_DATE_MONTH = [4, 1, 9];
const newGameplayFeatures_GAMEPLAY = [80, 5, 40];
const newGameplayFeatures_GRAPHIC = [0, 0, 0];
const newGameplayFeatures_SOUND = [0, 0, 0];
const newGameplayFeatures_TECHNIK = [120, 5, 110];
const newGameplayFeatures_LEVEL = [0, 0, 0];
const newGameplayFeatures_GOOD = [[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[true,false,false,false,false,true,true,false,true,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false,false]];
const newGameplayFeatures_BAD = [[false,false,true,true,true,true,true,true,false,true,false,true,true,true,true,true,true,true],[false,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,true,false,false,false,false,false,false]];
const newGameplayFeatures_NAME_EN = ["Dance pad support", "Arcade Joystick Support", "Flight Stick Support"];
const newGameplayFeatures_NAME_GE = ["Tanzpad Support", "Arcade Joystick Support", "Flight Stick Support"];
const newGameplayFeatures_NAME_TU = ["Dance pad support", "Arcade Joystick Support", "Flight Stick Support"];
const newGameplayFeatures_NAME_CH = ["Dance pad support", "Arcade Joystick Support", "Flight Stick Support"];
const newGameplayFeatures_NAME_FR = ["Dance pad support", "Arcade Joystick Support", "Flight Stick Support"];
const newGameplayFeatures_NAME_PB = ["Suporte para tapete de dança", "Suporte para joystick de fliperama", "Suporte para joystick de voo"];
const newGameplayFeatures_NAME_CT = ["跳舞毯支援", "街機搖桿支援", "飛行搖桿支援"];
const newGameplayFeatures_NAME_HU = ["Dance pad support", "Arcade Joystick Support", "Flight Stick Support"];
const newGameplayFeatures_NAME_ES = ["Soporte de pad de baile", "Compatibilidad con joystick arcade", "Soporte de Flight Stick"];
const newGameplayFeatures_NAME_CZ = ["Dance pad support", "Arcade Joystick Support", "Flight Stick Support"];
const newGameplayFeatures_NAME_KO = ["Dance pad support", "Arcade Joystick Support", "Flight Stick Support"];
const newGameplayFeatures_NAME_RU = ["Dance pad support", "Arcade Joystick Support", "Flight Stick Support"];
const newGameplayFeatures_NAME_IT = ["Supporto Tappeto Ballo", "Supporto Joystick Arcade", "Supporto Cloche Aereo"];
const newGameplayFeatures_NAME_AR = ["Dance pad support", "Arcade Joystick Support", "Flight Stick Support"]; 
const newGameplayFeatures_NAME_JA = ["ダンスパッド対応", "アーケードジョイスティック対応", "フライトスティック対応"];
const newGameplayFeatures_DESC_EN = ["This technique allows to<br>capture the dance movement of the player.", "This feature allows you to control<br>the game with an arcade joystick.", "These special joysticks are especially<br>popular among lovers of flight simulators."];
const newGameplayFeatures_DESC_GE = ["Diese Technik erlaubt es, die Tanzbewegung des Spielers zu erfassen.", "Dieses Feature erlaubt es,<br>das Spiel mit einem Arcade Joystick zu bedienen.", "Diese speziellen Joysticks sind vor allem<br>bei Liebhabern von Flugsimulatoren beliebt."];
const newGameplayFeatures_DESC_TU = ["This technique allows to<br>capture the dance movement of the player.", "This feature allows you to control<br>the game with an arcade joystick.", "These special joysticks are especially<br>popular among lovers of flight simulators."];
const newGameplayFeatures_DESC_CH = ["This technique allows to<br>capture the dance movement of the player.", "This feature allows you to control<br>the game with an arcade joystick.", "These special joysticks are especially<br>popular among lovers of flight simulators."];
const newGameplayFeatures_DESC_FR = ["This technique allows to<br>capture the dance movement of the player.", "This feature allows you to control<br>the game with an arcade joystick.", "These special joysticks are especially<br>popular among lovers of flight simulators."];
const newGameplayFeatures_DESC_PB = ["Esse recurso permite capturar<br>o movimento de dança do jogador.", "Esse recurso permite que você<br>controle o jogo com um joystick de fliperama.", "Esse joystick especial é muito popular<br>entre os fãs de simuladores de vôo."];
const newGameplayFeatures_DESC_CT = ["可以擷取玩家的舞步", "允許玩家使用街機搖桿進行遊戲", "這些特殊搖桿在飛行模疑特別受歡迎"];
const newGameplayFeatures_DESC_HU = ["This technique allows to<br>capture the dance movement of the player.", "This feature allows you to control<br>the game with an arcade joystick.", "These special joysticks are especially<br>popular among lovers of flight simulators."];
const newGameplayFeatures_DESC_ES = ["Esta técnica permite<br>Captura el movimiento de baile del jugador.", "Esta característica le permite controlar<br>el juego con un joystick arcade.", "Estos joysticks especiales son especialmente<br>po…ar entre los amantes de los simuladores de vuelo."];
const newGameplayFeatures_DESC_CZ = ["This technique allows to<br>capture the dance movement of the player.", "This feature allows you to control<br>the game with an arcade joystick.", "These special joysticks are especially<br>popular among lovers of flight simulators."];
const newGameplayFeatures_DESC_KO = ["This technique allows to<br>capture the dance movement of the player.", "This feature allows you to control<br>the game with an arcade joystick.", "These special joysticks are especially<br>popular among lovers of flight simulators."];
const newGameplayFeatures_DESC_RU = ["This technique allows to<br>capture the dance movement of the player.", "This feature allows you to control<br>the game with an arcade joystick.", "These special joysticks are especially<br>popular among lovers of flight simulators."];
const newGameplayFeatures_DESC_IT = ["Questa tecnologia permette<br>di catturare i passi di danza del giocatore.", "Questa funzione ti consente di controllare<br>il gioco con un joystick arcade.", "Questi joystick speciali sono particolarmente<br>popolari tra gli amanti dei simulatori di volo."];
const newGameplayFeatures_DESC_AR = ["This technique allows to<br>capture the dance movement of the player.", "This feature allows you to control<br>the game with an arcade joystick.", "These special joysticks are especially<br>popular among lovers of flight simulators."];
const newGameplayFeatures_DESC_JA = ["プレイヤーのダンスの動きを<br>捉えることができます。", "ゲームをアーケードジョイスティックで操作できます。", "操縦桿を模したジョイスティックは、<br>フライトシミュレーター愛好家から特に人気があります。"];

class SaveFileModifier {
  data = null;

  constructor (parsedJSON) {
    this.data = parsedJSON;
    console.log(`Received file with size: ${file.size}`);

    this.addToolUsageIntoHistory();

    this.fixArcades();

    this.download();
  }

  addToolUsageIntoHistory() {
    this.data.history.value.unshift("Modified with an online Tool to get Arcade Machines working\nMade by <b>NoobTenLuka</b>\nFind it here <i>https://noobtenluka.github.io/mgt2_arcadeFix</i>")
  }

  fixArcades() {
    this.fixGameplayFeatures();
    this.fixPlatforms();
  }

  fixGameplayFeatures() {
    for (let i = 0; i < 3; i++) {
      this.data.gameplayFeatures_UNLOCK.value.push(this.data.globals_int.value[3] >= newGameplayFeatures_DATE_YEAR[i]);
    }

    this.data.gameplayFeatures_TYP.value.push(...newGameplayFeatures_TYP);
    this.data.gameplayFeatures_RES_POINTS.value.push(...newGameplayFeatures_RES_POINTS);
    this.data.gameplayFeatures_RES_POINTS_LEFT.value.push(...newGameplayFeatures_RES_POINTS_LEFT);
    this.data.gameplayFeatures_PRICE.value.push(...newGameplayFeatures_PRICE);
    this.data.gameplayFeatures_DEV_COSTS.value.push(...newGameplayFeatures_DEV_COSTS);
    this.data.gameplayFeatures_DATE_YEAR.value.push(...newGameplayFeatures_DATE_YEAR);
    this.data.gameplayFeatures_DATE_MONTH.value.push(...newGameplayFeatures_DATE_MONTH);
    this.data.gameplayFeatures_GAMEPLAY.value.push(...newGameplayFeatures_GAMEPLAY);
    this.data.gameplayFeatures_GRAPHIC.value.push(...newGameplayFeatures_GRAPHIC);
    this.data.gameplayFeatures_SOUND.value.push(...newGameplayFeatures_SOUND);
    this.data.gameplayFeatures_TECHNIK.value.push(...newGameplayFeatures_TECHNIK);
    this.data.gameplayFeatures_LEVEL.value.push(...newGameplayFeatures_LEVEL);
    this.data.gameplayFeatures_GOOD.value.push(...newGameplayFeatures_GOOD);
    this.data.gameplayFeatures_BAD.value.push(...newGameplayFeatures_BAD);
    this.data.gameplayFeatures_NAME_EN.value.push(...newGameplayFeatures_NAME_EN);
    this.data.gameplayFeatures_NAME_GE.value.push(...newGameplayFeatures_NAME_GE);
    this.data.gameplayFeatures_NAME_TU.value.push(...newGameplayFeatures_NAME_TU);
    this.data.gameplayFeatures_NAME_CH.value.push(...newGameplayFeatures_NAME_CH);
    this.data.gameplayFeatures_NAME_FR.value.push(...newGameplayFeatures_NAME_FR);
    this.data.gameplayFeatures_NAME_PB.value.push(...newGameplayFeatures_NAME_PB);
    this.data.gameplayFeatures_NAME_CT.value.push(...newGameplayFeatures_NAME_CT);
    this.data.gameplayFeatures_NAME_HU.value.push(...newGameplayFeatures_NAME_HU);
    this.data.gameplayFeatures_NAME_ES.value.push(...newGameplayFeatures_NAME_ES);
    this.data.gameplayFeatures_NAME_CZ.value.push(...newGameplayFeatures_NAME_CZ);
    this.data.gameplayFeatures_NAME_KO.value.push(...newGameplayFeatures_NAME_KO);
    this.data.gameplayFeatures_NAME_RU.value.push(...newGameplayFeatures_NAME_RU);
    this.data.gameplayFeatures_NAME_IT.value.push(...newGameplayFeatures_NAME_IT);
    this.data.gameplayFeatures_NAME_AR.value.push(...newGameplayFeatures_NAME_AR);
    this.data.gameplayFeatures_NAME_JA.value.push(...newGameplayFeatures_NAME_JA);
    this.data.gameplayFeatures_DESC_EN.value.push(...newGameplayFeatures_DESC_EN);
    this.data.gameplayFeatures_DESC_GE.value.push(...newGameplayFeatures_DESC_GE);
    this.data.gameplayFeatures_DESC_TU.value.push(...newGameplayFeatures_DESC_TU);
    this.data.gameplayFeatures_DESC_CH.value.push(...newGameplayFeatures_DESC_CH);
    this.data.gameplayFeatures_DESC_FR.value.push(...newGameplayFeatures_DESC_FR);
    this.data.gameplayFeatures_DESC_PB.value.push(...newGameplayFeatures_DESC_PB);
    this.data.gameplayFeatures_DESC_CT.value.push(...newGameplayFeatures_DESC_CT);
    this.data.gameplayFeatures_DESC_HU.value.push(...newGameplayFeatures_DESC_HU);
    this.data.gameplayFeatures_DESC_ES.value.push(...newGameplayFeatures_DESC_ES);
    this.data.gameplayFeatures_DESC_CZ.value.push(...newGameplayFeatures_DESC_CZ);
    this.data.gameplayFeatures_DESC_KO.value.push(...newGameplayFeatures_DESC_KO);
    this.data.gameplayFeatures_DESC_RU.value.push(...newGameplayFeatures_DESC_RU);
    this.data.gameplayFeatures_DESC_IT.value.push(...newGameplayFeatures_DESC_IT);
    this.data.gameplayFeatures_DESC_AR.value.push(...newGameplayFeatures_DESC_AR);
    this.data.gameplayFeatures_DESC_JA.value.push(...newGameplayFeatures_DESC_JA);
    this.data.gameplayFeatures_ICONFILE.value.push("", "", "");
  }

  fixPlatforms() {
    for (let i = 0; i < newAnzPlatforms - this.data.anzPlatforms.value; i++) {
      const platform_B_Offset = i * 10;
      const platform_I_Offset = i * 20;

      // Check if the platform should be released by now
      newPlatform_B[platform_B_Offset + 1] = this.data.globals_int.value[3] >= newPlatform_I[platform_I_Offset + 1];

      // Check if the platform was took out the market by now
      newPlatform_B[platform_B_Offset + 4] = this.data.globals_int.value[3] >= newPlatform_I[platform_I_Offset + 3];

      if(newPlatform_B[platform_B_Offset + 1] && !newPlatform_B[platform_B_Offset + 4]) {
        newPlatform_I[platform_I_Offset + 8] = newPlatform_I[platform_I_Offset + 9]
      }
    }
    this.data.platform_B.value.push(...newPlatform_B);

    this.data.platform_I.value.push(...newPlatform_I);

    // Will have to look into how the floats work exactly
    this.data.platform_F.value.push(...newPlatform_F);

    this.data.platform_S.value.push(...newPlatform_S);

    this.data.anzPlatforms.value = newAnzPlatforms;
  }

  download() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.data)));
    element.setAttribute('download', "modifiedSave.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
}