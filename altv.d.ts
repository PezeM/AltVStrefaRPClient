/* alt:V Typings
 * Generated from branch gamiee/dev (Build unknown) on Fri, 28 Dec 2018 02:46:47 GMT
 * Copyright 2018 - 2018 alt:V Team
 */

// Interface definitions

interface DiscordInfoReturnObject {
  /**
   * User's Snowflake ID
   * @type number
   */
  id: number
  /**
   * User's User Name
   * @type string
   */
  name: string
  /**
   * User's Discriminator
   * @type string
   */
  discriminator: string
  /**
   * User's Avatar URL
   * @type string
   */
  avatar: string
}


type NativeEntity = number
type NativeHash = number
type NativePlayer = number
type NativeFireId = number
type NativePed = number
type NativeVehicle = number
type NativeCam = number
type NativeCarGenerator = number
type NativeGroup = number
type NativeTrain = number
type NativePickup = number
type NativeObject = number
type NativeWeapon = number
type NativeInterior = number
type NativeBlip = number
type NativeTexture = number
type NativeTextureDict = number
type NativeCoverPoint = number
type NativeCamera = number
type NativeTaskSequence = number
type NativeColourIndex = number
type NativeSphere = number
type NativeScrHandle = number
type NativeAny = number
type NativeVector3 = { x: number, y: number, z: number }
type NativeBOOL = boolean


// Modules definitions

declare module "natives" {
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerPed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerPedScriptIndex(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerModel(player: NativePlayer, modelHash: NativeHash): void;
  /**
   *
   * @param {number} axel undefined
   */
  export function changePlayerPed(axel: number, ped: NativePed, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerRgbColour(player: NativePlayer, r: number, g: number, b: number): void;
  /**
   *
   */
  export function getNumberOfPlayers(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerTeam(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerTeam(player: NativePlayer, team: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerName(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getWantedLevelRadius(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerWantedCentrePosition(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerWantedCentrePosition(player: NativePlayer, x: number, y: number, z: number): void;
  /**
   *
   * @param {number} wantedLevel undefined
   */
  export function getWantedLevelThreshold(wantedLevel: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerWantedLevel(player: NativePlayer, wantedLevel: number, disableNoMission: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerWantedLevelNoDrop(player: NativePlayer, wantedLevel: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerWantedLevelNow(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function arePlayerFlashingStarsAboutToDrop(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function arePlayerStarsGreyedOut(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setDispatchCopsForPlayer(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerWantedLevelGreater(player: NativePlayer, wantedLevel: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function clearPlayerWantedLevel(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerDead(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerPressingHorn(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerControl(player: NativePlayer, toggle: NativeBOOL, flags: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerWantedLevel(player: NativePlayer): void;
  /**
   *
   * @param {number} maxWantedLevel undefined
   */
  export function setMaxWantedLevel(maxWantedLevel: number): void;
  /**
   *
   * @param {NativeAny} toggle undefined
   */
  export function setPoliceRadarBlips(toggle: NativeAny): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPoliceIgnorePlayer(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerPlaying(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setEveryoneIgnorePlayer(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setAllRandomPedsFlee(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setAllRandomPedsFleeThisFrame(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xDE45D1A1EF45EE61(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xC3376F42B1FACCC6(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setIgnoreLowPriorityShockingEvents(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function setWantedLevelMultiplier(multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setWantedLevelDifficulty(player: NativePlayer, difficulty: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function resetWantedLevelDifficulty(player: NativePlayer): void;
  /**
   *
   * @param {number} duration undefined
   */
  export function startFiringAmnesty(duration: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function reportCrime(player: NativePlayer, crimeType: number, wantedLvlThresh: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function switchCrimeType(player: NativePlayer, p1: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xBC9490CA15AEA8FB(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0x4669B3ED80F24B4E(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xAD73CE5A09E42D12(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0x36F1B38855F2A8DF(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xDC64D2C53493ED12(player: NativePlayer): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xB45EFF719D8427A6(p0: number): void;
  /**
   *
   */
  export function _0x0032A6DBA562C518(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function canPlayerStartMission(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerReadyForCutscene(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerTargettingEntity(player: NativePlayer, entity: NativeEntity): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerTargetEntity(player: NativePlayer, entity: NativeEntity): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerFreeAiming(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerFreeAimingAtEntity(player: NativePlayer, entity: NativeEntity): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getEntityPlayerIsFreeAimingAt(player: NativePlayer, entity: NativeEntity): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerLockonRangeOverride(player: NativePlayer, range: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerCanDoDriveBy(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerCanBeHassledByGangs(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerCanUseCover(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   */
  export function getMaxWantedLevel(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerTargettingAnything(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerSprint(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function resetPlayerStamina(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function restorePlayerStamina(player: NativePlayer, p1: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerSprintStaminaRemaining(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerSprintTimeRemaining(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerUnderwaterTimeRemaining(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerGroup(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerMaxArmour(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerControlOn(player: NativePlayer): void;
  /**
   *
   */
  export function isPlayerCamControlDisabled(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerScriptControlOn(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerClimbing(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerBeingArrested(player: NativePlayer, atArresting: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function resetPlayerArrestState(player: NativePlayer): void;
  /**
   *
   */
  export function getPlayersLastVehicle(): void;
  /**
   *
   */
  export function getPlayerIndex(): void;
  /**
   *
   * @param {number} value undefined
   */
  export function intToPlayerindex(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function intToParticipantindex(value: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getTimeSincePlayerHitVehicle(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getTimeSincePlayerHitPed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getTimeSincePlayerDroveOnPavement(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getTimeSincePlayerDroveAgainstTraffic(player: NativePlayer): void;
  /**
   *
   * @param {NativeVehicle} player undefined
   */
  export function isPlayerFreeForAmbientTask(player: NativeVehicle): void;
  /**
   *
   */
  export function playerId(): void;
  /**
   *
   */
  export function playerPedId(): void;
  /**
   *
   */
  export function networkPlayerIdToInt(): void;
  /**
   *
   * @param {number} cleanupFlags undefined
   */
  export function hasForceCleanupOccurred(cleanupFlags: number): void;
  /**
   *
   * @param {number} cleanupFlags undefined
   */
  export function forceCleanup(cleanupFlags: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function forceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;
  /**
   *
   */
  export function getCauseOfMostRecentForceCleanup(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerMayOnlyEnterThisVehicle(player: NativePlayer, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerMayNotEnterAnyVehicle(player: NativePlayer): void;
  /**
   *
   * @param {number} achievement undefined
   */
  export function giveAchievementToPlayer(achievement: number): void;
  /**
   *
   * @param {number} achId undefined
   */
  export function setAchievementProgression(achId: number, progression: number): void;
  /**
   *
   * @param {number} achId undefined
   */
  export function getAchievementProgression(achId: number): void;
  /**
   *
   * @param {number} achievement undefined
   */
  export function hasAchievementBeenPassed(achievement: number): void;
  /**
   *
   */
  export function isPlayerOnline(): void;
  /**
   *
   */
  export function isPlayerLoggingInNp(): void;
  /**
   *
   * @param {NativeBOOL} unk undefined
   */
  export function displaySystemSigninUi(unk: NativeBOOL): void;
  /**
   *
   */
  export function isSystemUiBeingDisplayed(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerInvincible(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerInvincible(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xCAC57395B151135F(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function removePlayerHelmet(player: NativePlayer, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function givePlayerRagdollControl(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerLockon(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} targetMode undefined
   */
  export function setPlayerTargetingMode(targetMode: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x5702B917B99DB1CD(p0: number): void;
  /**
   *
   */
  export function _0xB9CF1F793A9F1BF1(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function clearPlayerHasDamagedAtLeastOnePed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function hasPlayerDamagedAtLeastOnePed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function clearPlayerHasDamagedAtLeastOneNonAnimalPed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function hasPlayerDamagedAtLeastOneNonAnimalPed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setAirDragMultiplierForPlayersVehicle(player: NativePlayer, multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setSwimMultiplierForPlayer(player: NativePlayer, multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setRunSprintMultiplierForPlayer(player: NativePlayer, multiplier: number): void;
  /**
   *
   */
  export function getTimeSinceLastArrest(): void;
  /**
   *
   */
  export function getTimeSinceLastDeath(): void;
  /**
   *
   */
  export function assistedMovementCloseRoute(): void;
  /**
   *
   */
  export function assistedMovementFlushRoute(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerForcedAim(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerForcedZoom(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerForceSkipAimIntro(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function disablePlayerFiring(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0xB885852C39CC265D(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setDisableAmbientMeleeMove(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerMaxArmour(player: NativePlayer, value: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityDeactivate(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityDeactivateFast(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityReset(player: NativePlayer): void;
  /**
   *
   * @param {NativeCam} player undefined
   */
  export function _0xC9A763D8FE87436A(player: NativeCam): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityChargeSmall(player: NativePlayer, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityChargeMedium(player: NativePlayer, p1: NativeVehicle, p2: NativeVehicle): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityChargeLarge(player: NativePlayer, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityChargeContinuous(player: NativePlayer, p2: NativePed): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityChargeAbsolute(player: NativePlayer, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityChargeNormalized(player: NativePlayer, normalizedValue: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityFillMeter(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function specialAbilityDepleteMeter(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} playerModel undefined
   */
  export function specialAbilityLock(playerModel: NativeHash): void;
  /**
   *
   * @param {NativeHash} playerModel undefined
   */
  export function specialAbilityUnlock(playerModel: NativeHash): void;
  /**
   *
   * @param {NativeHash} playerModel undefined
   */
  export function isSpecialAbilityUnlocked(playerModel: NativeHash): void;
  /**
   *
   * @param {NativePed} player undefined
   */
  export function isSpecialAbilityActive(player: NativePed): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isSpecialAbilityMeterFull(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function enableSpecialAbility(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isSpecialAbilityEnabled(player: NativePlayer): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function setSpecialAbilityMultiplier(multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xFFEE8FA29AB9A18E(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0x5FC472C501CCADB3(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xF10B44FD479D69F3(player: NativePlayer, p1: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xDD2620B7B9D16FF1(player: NativePlayer, p1: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function startPlayerTeleport(player: NativePlayer, x: number, y: number, z: number, heading: number, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function hasPlayerTeleportFinished(player: NativePlayer): void;
  /**
   *
   */
  export function stopPlayerTeleport(): void;
  /**
   *
   */
  export function isPlayerTeleportActive(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerCurrentStealthNoise(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerHealthRechargeMultiplier(player: NativePlayer, regenRate: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerWeaponDamageModifier(player: NativePlayer, damageAmount: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerWeaponDefenseModifier(player: NativePlayer, modifier: NativeScrHandle): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerMeleeWeaponDamageModifier(player: NativePlayer, modifier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerMeleeWeaponDefenseModifier(player: NativePlayer, modifier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerVehicleDamageModifier(player: NativePlayer, damageAmount: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerVehicleDefenseModifier(player: NativePlayer, modifier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerParachuteTintIndex(player: NativePlayer, tintIndex: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerParachuteTintIndex(player: NativePlayer, tintIndex: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerReserveParachuteTintIndex(player: NativePlayer, index: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerReserveParachuteTintIndex(player: NativePlayer, index: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerParachutePackTintIndex(player: NativePlayer, tintIndex: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerParachutePackTintIndex(player: NativePlayer, tintIndex: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerHasReserveParachute(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerHasReserveParachute(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerCanLeaveParachuteSmokeTrail(player: NativePlayer, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerParachuteSmokeTrailColor(player: NativePlayer, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function getPlayerParachuteSmokeTrailColor(player: NativePlayer, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerResetFlagPreferRearSeats(player: NativePlayer, flags: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerNoiseMultiplier(player: NativePlayer, multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerSneakingNoiseMultiplier(player: NativePlayer, multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function canPedHearPlayer(player: NativePlayer, ped: NativePed): void;
  /**
   *
   * @param {NativePlayer} control undefined
   */
  export function simulatePlayerInputGait(control: NativePlayer, amount: number, gaitType: number, speed: number, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function resetPlayerInputGait(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setAutoGiveParachuteWhenEnterPlane(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xD2B315B6689D537D(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerStealthPerceptionModifier(player: NativePlayer, value: number): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function _0x690A61A6D13583F6(p0: NativePed): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0x9EDD76E87D5D51BA(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerSimulateAiming(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerClothPinFrames(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} index undefined
   */
  export function setPlayerClothPackageIndex(index: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function setPlayerClothLockCounter(value: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function playerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
  /**
   *
   */
  export function playerDetachVirtualBound(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function hasPlayerBeenSpottedInStolenVehicle(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0x38D28DA81E4E9BF9(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xBC0753C9CA14B506(player: NativePlayer, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function expandWorldLimits(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerRidingTrain(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function hasPlayerLeftTheWorld(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xFF300C7649724A0B(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerParachuteVariationOverride(player: NativePlayer, p1: number, p2: NativeAny, p3: NativeAny, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function clearPlayerParachuteVariationOverride(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerParachuteModelOverride(player: NativePlayer, model: NativeHash): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function clearPlayerParachuteModelOverride(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerParachutePackModelOverride(player: NativePlayer, model: NativeHash): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function clearPlayerParachutePackModelOverride(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function disablePlayerVehicleRewards(player: NativePlayer): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x2F7CEB6520288061(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x5DC40A8869C22141(p0: NativeBOOL, p1: NativeScrHandle): void;
  /**
   *
   * @param {NativePlayer} p0 undefined
   */
  export function _0x65FAEE425DE637B0(p0: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} p0 undefined
   */
  export function _0x5501B7A5CDB79D37(p0: NativePlayer): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x56105E599CAB0EFA(p0: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function doesEntityExist(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function doesEntityBelongToThisScript(entity: NativeEntity, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function doesEntityHaveDrawable(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function doesEntityHavePhysics(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function hasEntityAnimFinished(entity: NativeEntity, animDict: string, animName: string, p3: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function hasEntityBeenDamagedByAnyObject(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function hasEntityBeenDamagedByAnyPed(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function hasEntityBeenDamagedByAnyVehicle(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function hasEntityBeenDamagedByEntity(entity1: NativeEntity, entity2: NativeEntity, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function hasEntityClearLosToEntity(entity1: NativeEntity, entity2: NativeEntity, traceType: number): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function hasEntityClearLosToEntityInFront(entity1: NativeEntity, entity2: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function hasEntityCollidedWithAnything(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getLastMaterialHitByEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getCollisionNormalOfLastHitForEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function forceEntityAiAndAnimationUpdate(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityAnimCurrentTime(entity: NativeEntity, animDict: string, animName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityAnimTotalTime(entity: NativeEntity, animDict: string, animName: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function getAnimDuration(animDict: string, animName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityAttachedTo(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityCoords(entity: NativeEntity, alive: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityForwardVector(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityForwardX(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityForwardY(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityHeading(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityPhysicsHeading(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityHealth(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityMaxHealth(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityMaxHealth(entity: NativeEntity, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityHeight(entity: NativeEntity, X: number, Y: number, Z: number, atTop: NativeBOOL, inWorldCoords: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityHeightAboveGround(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityMatrix(entity: NativeEntity, rightVector: NativeVector3, forwardVector: NativeVector3, upVector: NativeVector3, position: NativeVector3): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityModel(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getOffsetFromEntityGivenWorldCoords(entity: NativeEntity, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getOffsetFromEntityInWorldCoords(entity: NativeEntity, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityPitch(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityQuaternion(entity: NativeEntity, x: number, y: number, z: number, w: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityRoll(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityRotation(entity: NativeEntity, rotationOrder: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityRotationVelocity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityScript(entity: NativeEntity, script: NativeScrHandle): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntitySpeed(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntitySpeedVector(entity: NativeEntity, relative: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityUprightValue(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityVelocity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getObjectIndexFromEntityIndex(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getPedIndexFromEntityIndex(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getVehicleIndexFromEntityIndex(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getWorldPositionOfEntityBone(entity: NativeEntity, boneIndex: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getNearestPlayerToEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getNearestPlayerToEntityOnTeam(entity: NativeEntity, team: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityType(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityPopulationType(entity: NativeEntity): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function isAnEntity(handle: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityAPed(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityAMissionEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityAVehicle(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityAnObject(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityAtCoord(entity: NativeEntity, xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p7: NativeBOOL, p8: NativeBOOL, p9: number): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function isEntityAtEntity(entity1: NativeEntity, entity2: NativeEntity, xSize: number, ySize: number, zSize: number, p5: NativeBOOL, p6: NativeBOOL, p7: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityAttached(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityAttachedToAnyObject(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityAttachedToAnyPed(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityAttachedToAnyVehicle(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} from undefined
   */
  export function isEntityAttachedToEntity(from: NativeEntity, to: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityDead(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityInAir(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityInAngledArea(entity: NativeEntity, originX: number, originY: number, originZ: number, edgeX: number, edgeY: number, edgeZ: number, angle: number, p8: NativeBOOL, p9: NativeBOOL, p10: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityInArea(entity: NativeEntity, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: NativeBOOL, p8: NativeBOOL, p9: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityInZone(entity: NativeEntity, zone: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityInWater(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntitySubmergedLevel(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setUsedByPlayer(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityOnScreen(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityPlayingAnim(entity: NativeEntity, animDict: string, animName: string, taskFlag: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityStatic(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityTouchingEntity(entity: NativeEntity, targetEntity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityTouchingModel(entity: NativeEntity, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityUpright(entity: NativeEntity, angle: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityUpsidedown(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityVisible(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityVisibleToScript(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityOccluded(entity: NativeEntity): void;
  /**
   *
   * @param {NativeHash} entityModelHash undefined
   */
  export function wouldEntityBeOccluded(entityModelHash: NativeHash, x: number, y: number, z: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityWaitingForWorldCollision(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function applyForceToEntityCenterOfMass(entity: NativeEntity, forceType: number, x: number, y: number, z: number, p5: NativeBOOL, isDirectionRel: NativeBOOL, isForceRel: NativeBOOL, p8: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function applyForceToEntity(entity: NativeEntity, forceFlags: number, x: number, y: number, z: number, offX: number, offY: number, offZ: number, boneIndex: number, isDirectionRel: NativeBOOL, ignoreUpVec: NativeBOOL, isForceRel: NativeBOOL, p12: NativeBOOL, p13: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function attachEntityToEntity(entity1: NativeEntity, entity2: NativeEntity, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, p9: NativeBOOL, useSoftPinning: NativeBOOL, collision: NativeBOOL, isPed: NativeBOOL, vertexIndex: number, fixedRot: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function attachEntityToEntityPhysically(entity1: NativeEntity, entity2: NativeEntity, boneIndex1: number, boneIndex2: number, xPos1: number, yPos1: number, zPos1: number, xPos2: number, yPos2: number, zPos2: number, xRot: number, yRot: number, zRot: number, breakForce: number, fixedRot: NativeBOOL, p15: NativeBOOL, collision: NativeBOOL, teleport: NativeBOOL, p18: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function processEntityAttachments(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityBoneIndexByName(entity: NativeEntity, boneName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function clearEntityLastDamageEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function deleteEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function detachEntity(entity: NativeEntity, p1: NativeBOOL, collision: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function freezeEntityPosition(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntitySomething(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function playEntityAnim(entity: NativeEntity, animName: string, animDict: string, p3: number, loop: NativeBOOL, stayInAnim: NativeBOOL, p6: NativeBOOL, delta: number, bitset: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function playSynchronizedEntityAnim(entity: NativeEntity, SceneID: number, animName: string, animDict: string, speed: number, speedMult: number, flag: number, flag2: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function playSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: NativeAny, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: number, p9: number, p10: NativeAny, p11: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: NativeAny, p5: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function stopEntityAnim(entity: NativeEntity, animation: string, animGroup: string, p3: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function stopSynchronizedEntityAnim(entity: NativeEntity, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function hasAnimEventFired(entity: NativeEntity, actionHash: NativeHash): void;
  /**
   *
   * @param {string} animDictionary undefined
   */
  export function findAnimEventPhase(animDictionary: string, animName: string, p2: string, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityAnimCurrentTime(entity: NativeEntity, animDictionary: string, animName: string, time: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityAnimSpeed(entity: NativeEntity, animDictionary: string, animName: string, speedMultiplier: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityAsMissionEntity(entity: NativeEntity, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityAsNoLongerNeeded(entity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAsNoLongerNeeded(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleAsNoLongerNeeded(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function setObjectAsNoLongerNeeded(object: NativeObject): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityCanBeDamaged(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityCanBeDamagedByRelationshipGroup(entity: NativeEntity, bCanBeDamaged: NativeBOOL, relGroup: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityCanBeTargetedWithoutLos(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityCollision(entity: NativeEntity, toggle: NativeBOOL, keepPhysics: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityCollisonDisabled(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityCollision2(entity: NativeEntity, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityCoords(entity: NativeEntity, xPos: number, yPos: number, zPos: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL, clearArea: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityCoords2(entity: NativeEntity, xPos: number, yPos: number, zPos: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL, clearArea: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityCoordsNoOffset(entity: NativeEntity, xPos: number, yPos: number, zPos: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityDynamic(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityHeading(entity: NativeEntity, heading: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityHealth(entity: NativeEntity, health: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityInvincible(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityIsTargetPriority(entity: NativeEntity, p1: NativeBOOL, p2: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityLights(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityLoadCollisionFlag(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function hasCollisionLoadedAroundEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityMaxSpeed(entity: NativeEntity, speed: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityOnlyDamagedByPlayer(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityOnlyDamagedByRelationshipGroup(entity: NativeEntity, p1: NativeBOOL, relationshipHash: NativeHash): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityProofs(entity: NativeEntity, bulletProof: NativeBOOL, fireProof: NativeBOOL, explosionProof: NativeBOOL, collisionProof: NativeBOOL, meleeProof: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, drownProof: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityQuaternion(entity: NativeEntity, x: number, y: number, z: number, w: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityRecordsCollisions(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityRotation(entity: NativeEntity, pitch: number, roll: number, yaw: number, rotationOrder: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityVisible(entity: NativeEntity, toggle: NativeBOOL, unk: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityVelocity(entity: NativeEntity, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityHasGravity(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityLodDist(entity: NativeEntity, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityLodDist(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityAlpha(entity: NativeEntity, alphaLevel: number, skin: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getEntityAlpha(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function resetEntityAlpha(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x5C3B791D580E0BC2(entity: NativeEntity, p1: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityAlwaysPrerender(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityRenderScorched(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityTrafficlightOverride(entity: NativeEntity, state: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x78E8E3A640178255(entity: NativeEntity): void;
  /**
   *
   * @param {number} x undefined
   */
  export function createModelSwap(x: number, y: number, z: number, radius: number, originalModel: NativeHash, newModel: NativeHash, p6: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function removeModelSwap(x: number, y: number, z: number, radius: number, originalModel: NativeHash, newModel: NativeHash, p6: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function createModelHide(x: number, y: number, z: number, radius: number, model: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function removeModelHide(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function createForcedObject(x: number, y: number, z: number, p3: NativeAny, modelHash: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function removeForcedObject(posX: number, posY: number, posZ: number, unk: number, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function setEntityNoCollisionEntity(entity1: NativeEntity, entity2: NativeEntity, unknown: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityMotionBlur(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0xE12ABE5E3A389A6C(entity: NativeEntity, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0xA80AE305E0A3044F(entity: NativeEntity, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0xDC6F8601FAF2E893(entity: NativeEntity, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x2C2E3DC128F44309(entity: NativeEntity, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x1A092BB0C3808B96(entity: NativeEntity, p1: NativeBOOL): void;
  /**
   *
   * @param {number} pedType undefined
   */
  export function createPed(pedType: number, modelHash: NativeHash, x: number, y: number, z: number, heading: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function deletePed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clonePed(ped: NativePed, heading: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clonePedToTarget(ped: NativePed, targetPed: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInVehicle(ped: NativePed, vehicle: NativeVehicle, atGetIn: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInModel(ped: NativePed, modelHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInAnyVehicle(ped: NativePed, atGetIn: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function isCopPedInArea3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInjured(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedHurt(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedFatallyInjured(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedDeadOrDying(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isConversationPedDead(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedAimingFromCover(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedReloading(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedAPlayer(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function createPedInsideVehicle(vehicle: NativeVehicle, pedType: number, modelHash: NativeHash, seat: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDesiredHeading(ped: NativePed, heading: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function freezePedCameraRotation(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedFacingPed(ped: NativePed, otherPed: NativePed, angle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInMeleeCombat(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedStopped(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedShootingInArea(ped: NativePed, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: NativeBOOL, p8: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function isAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedShooting(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAccuracy(ped: NativePed, accuracy: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedAccuracy(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedModel(ped: NativePed, modelHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function explodePedHead(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function removePedElegantly(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function addArmourToPed(ped: NativePed, amount: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedArmour(ped: NativePed, amount: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedIntoVehicle(ped: NativePed, vehicle: NativeVehicle, seatIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAllowVehiclesOverride(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} unk undefined
   */
  export function canCreateRandomPed(unk: NativeBOOL): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function createRandomPed(posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function createRandomPedAsDriver(vehicle: NativeVehicle, returnHandle: NativeBOOL): void;
  /**
   *
   */
  export function canCreateRandomDriver(): void;
  /**
   *
   */
  export function canCreateRandomBikeRider(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMoveAnimsBlendOut(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanBeDraggedOut(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function _0xF2BEBCDFAFDAA19E(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedMale(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedHuman(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getVehiclePedIsIn(ped: NativePed, lastVehicle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetPedLastVehicle(ped: NativePed): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function setPedDensityMultiplierThisFrame(multiplier: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;
  /**
   *
   */
  export function _0x5A7F62FDA59759BD(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   */
  export function clearPedNonCreationArea(): void;
  /**
   *
   */
  export function _0x4759CC730F947C81(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedOnMount(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getMount(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedOnVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedOnSpecificVehicle(ped: NativePed, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMoney(ped: NativePed, amount: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedMoney(ped: NativePed): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xFF4803BC019852D9(p0: number, p1: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x6B0E6172C9A4D902(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x9911F4A24485F653(p0: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedSuffersCriticalHits(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xAFC976FD0580C7B3(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedSittingInVehicle(ped: NativePed, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedSittingInAnyVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedOnFoot(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedOnAnyBike(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedPlantingBomb(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getDeadPedPickupCoords(ped: NativePed, p1: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInAnyBoat(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInAnySub(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInAnyHeli(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInAnyPlane(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInFlyingVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDiesInWater(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDiesInSinkingVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedArmour(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedStayInVehicleWhenJacked(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanBeShotInVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedLastDamageBone(ped: NativePed, outBone: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedLastDamageBone(ped: NativePed): void;
  /**
   *
   * @param {number} value undefined
   */
  export function setAiWeaponDamageModifier(value: number): void;
  /**
   *
   */
  export function resetAiWeaponDamageModifier(): void;
  /**
   *
   * @param {number} modifier undefined
   */
  export function setAiMeleeWeaponDamageModifier(modifier: number): void;
  /**
   *
   */
  export function resetAiMeleeWeaponDamageModifier(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2F3C3D9F50681DE4(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanBeTargetted(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanBeTargettedByTeam(ped: NativePed, team: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanBeTargettedByPlayer(ped: NativePed, player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x061CB768363D6424(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setTimeExclusiveDisplayTexture(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInAnyPoliceVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function forcePedToOpenParachute(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInParachuteFreeFall(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedFalling(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedJumping(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedClimbing(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedVaulting(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedDiving(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedJumpingOutOfVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x26AF0E8E30BD2A2C(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedParachuteState(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedParachuteLandingType(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedParachuteTintIndex(ped: NativePed, tintIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedParachuteTintIndex(ped: NativePed, outTintIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedReserveParachuteTintIndex(ped: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x8C4F3BF23B6237DB(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDucking(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedDucking(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInAnyTaxi(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedIdRange(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x52D59AB61DDC05DD(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xEC4B4B3B9908052A(ped: NativePed, unk: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x733C87D4CE22BEA2(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedSeeingRange(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedHearingRange(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedVisualFieldMinAngle(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedVisualFieldMaxAngle(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedVisualFieldMinElevationAngle(ped: NativePed, angle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedVisualFieldMaxElevationAngle(ped: NativePed, angle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedVisualFieldPeripheralRange(ped: NativePed, range: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedVisualFieldCenterAngle(ped: NativePed, angle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedStealthMovement(ped: NativePed, p1: NativeBOOL, action: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedStealthMovement(ped: NativePed): void;
  /**
   *
   * @param {number} unused undefined
   */
  export function createGroup(unused: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAsGroupLeader(ped: NativePed, groupId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAsGroupMember(ped: NativePed, groupId: number): void;
  /**
   *
   * @param {NativePed} pedHandle undefined
   */
  export function setPedCanTeleportToGroupLeader(pedHandle: NativePed, groupHandle: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} groupId undefined
   */
  export function removeGroup(groupId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function removePedFromGroup(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedGroupMember(ped: NativePed, groupId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedHangingOnToVehicle(ped: NativePed): void;
  /**
   *
   * @param {number} groupHandle undefined
   */
  export function setGroupSeparationRange(groupHandle: number, separationRange: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMinGroundTimeForStungun(ped: NativePed, ms1000000: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedProne(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInCombat(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function canPedInCombatSeeTarget(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedDoingDriveby(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedJacking(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedBeingJacked(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedBeingStunned(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedsJacker(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getJackTarget(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedFleeing(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInCover(ped: NativePed, exceptUseWeapon: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInCoverFacingLeft(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedStandingInCover(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedGoingIntoCover(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPinnedDown(ped: NativePed, pinned: NativeBOOL, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getSeatPedIsTryingToEnter(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getVehiclePedIsTryingToEnter(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedSourceOfDeath(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedCauseOfDeath(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x1E98817B311AE98A(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5407B7288D0478B7(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x336B3D200AB007CB(p0: NativeAny, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedRelationshipGroupDefaultHash(ped: NativePed, hash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedRelationshipGroupHash(ped: NativePed, hash: NativeHash): void;
  /**
   *
   * @param {number} relationship undefined
   */
  export function setRelationshipBetweenGroups(relationship: number, group1: NativeHash, group2: NativeHash): void;
  /**
   *
   * @param {number} relationship undefined
   */
  export function clearRelationshipBetweenGroups(relationship: number, group1: NativeHash, group2: NativeHash): void;
  /**
   *
   * @param {string} name undefined
   */
  export function addRelationshipGroup(name: string, groupHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} groupHash undefined
   */
  export function removeRelationshipGroup(groupHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped1 undefined
   */
  export function getRelationshipBetweenPeds(ped1: NativePed, ped2: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedRelationshipGroupDefaultHash(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedRelationshipGroupHash(ped: NativePed): void;
  /**
   *
   * @param {NativeHash} group1 undefined
   */
  export function getRelationshipBetweenGroups(group1: NativeHash, group2: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanBeTargetedWithoutLos(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedToInformRespectedFriends(ped: NativePed, radius: number, maxFriends: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedRespondingToEvent(ped: NativePed, event: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedFiringPattern(ped: NativePed, patternHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedShootRate(ped: NativePed, shootRate: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setCombatFloat(ped: NativePed, combatType: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getCombatFloat(ped: NativePed, p1: number): void;
  /**
   *
   * @param {number} groupID undefined
   */
  export function getGroupSize(groupID: number, unknown: NativeAny, sizeInMembers: number): void;
  /**
   *
   * @param {number} groupId undefined
   */
  export function doesGroupExist(groupId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedGroupIndex(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInGroup(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPlayerPedIsFollowing(ped: NativePed): void;
  /**
   *
   * @param {number} groupId undefined
   */
  export function setGroupFormation(groupId: number, formationType: number): void;
  /**
   *
   * @param {number} groupId undefined
   */
  export function setGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} groupHandle undefined
   */
  export function resetGroupFormationDefaultSpacing(groupHandle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getVehiclePedIsUsing(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setExclusivePhoneRelationships(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedGravity(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function applyDamageToPed(ped: NativePed, damageAmount: number, armorFirst: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x36B77BB84687C318(ped: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAllowedToDuck(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedNeverLeavesGroup(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedType(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAsCop(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMaxHealth(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedMaxHealth(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMaxTimeInWater(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMaxTimeUnderwater(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x2735233A786B1BEF(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x952F06BEECD775CC(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE6CA85E7259CE16B(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanBeKnockedOffVehicle(ped: NativePed, state: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function canKnockPedOffVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function knockPedOffVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCoordsNoGang(ped: NativePed, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {number} groupID undefined
   */
  export function getPedAsGroupMember(groupID: number, memberNumber: number): void;
  /**
   *
   * @param {number} groupID undefined
   */
  export function getPedAsGroupLeader(groupID: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedKeepTask(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x49E50BDB8BA4DAB2(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedSwimming(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedSwimmingUnderWater(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCoordsKeepVehicle(ped: NativePed, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDiesInVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setCreateRandomCops(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setCreateRandomCopsNotOnScenarios(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setCreateRandomCopsOnScenarios(toggle: NativeBOOL): void;
  /**
   *
   */
  export function canCreateRandomCops(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAsEnemy(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanSmashGlass(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInAnyTrain(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedGettingIntoAVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedTryingToEnterALockedVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setEnableHandcuffs(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setEnableBoundAnkles(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setEnableScuba(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setCanAttackFriendly(ped: NativePed, toggle: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedAlertness(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAlertness(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedGetOutUpsideDownVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMovementClipset(ped: NativePed, clipSet: string, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetPedMovementClipset(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedStrafeClipset(ped: NativePed, clipSet: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetPedStrafeClipset(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedWeaponMovementClipset(ped: NativePed, clipSet: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetPedWeaponMovementClipset(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDriveByClipsetOverride(ped: NativePed, clipset: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedDriveByClipsetOverride(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9DBA107B4937F809(p0: NativeAny, p1: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC79196DCB36F6121(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x80054D7FCC70EEC6(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedInVehicleContext(ped: NativePed, context: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetPedInVehicleContext(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isScriptedScenarioPedUsingConditionalAnim(ped: NativePed, animDict: string, anim: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAlternateWalkAnim(ped: NativePed, animDict: string, animName: string, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedAlternateWalkAnim(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAlternateMovementAnim(ped: NativePed, stance: number, animDictionary: string, animationName: string, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedAlternateMovementAnim(ped: NativePed, stance: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedGestureGroup(ped: NativePed, animGroupGesture: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function getAnimInitialOffsetPosition(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function getAnimInitialOffsetRotation(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedDrawableVariation(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getNumberOfPedDrawableVariations(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedTextureVariation(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getNumberOfPedTextureVariations(ped: NativePed, componentId: number, drawableId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getNumberOfPedPropDrawableVariations(ped: NativePed, propId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getNumberOfPedPropTextureVariations(ped: NativePed, propId: number, drawableId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedPaletteVariation(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9E30E91FB03A2CAF(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1E77FA7A62EE6C4C(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF033419D1B81FAE8(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedComponentVariationValid(ped: NativePed, componentId: number, drawableId: number, textureId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedComponentVariation(ped: NativePed, componentId: number, drawableId: number, textureId: number, paletteId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedRandomComponentVariation(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedRandomProps(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDefaultComponentVariation(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedBlendFromParents(ped: NativePed, father: NativePed, mother: NativePed, fathersSide: number, mothersSide: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedHeadBlendData(ped: NativePed, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedHeadBlendData(ped: NativePed, headBlendData: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function updatePedHeadBlendData(ped: NativePed, shapeMix: number, skinMix: number, thirdMix: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedEyeColor(ped: NativePed, index: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedHeadOverlay(ped: NativePed, overlayID: number, index: number, opacity: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedHeadOverlayValue(ped: NativePed, overlayID: number): void;
  /**
   *
   * @param {number} overlayID undefined
   */
  export function getNumHeadOverlayValues(overlayID: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedHeadOverlayColor(ped: NativePed, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedHairColor(ped: NativePed, colorID: number, highlightColorID: number): void;
  /**
   *
   */
  export function getNumHairColors(): void;
  /**
   *
   */
  export function getNumMakeupColors(): void;
  /**
   *
   * @param {number} colorID undefined
   */
  export function getHairColor(colorID: number, R: number, G: number, B: number): void;
  /**
   *
   * @param {number} colorID undefined
   */
  export function getLipstickColor(colorID: number, R: number, G: number, B: NativeAny): void;
  /**
   *
   * @param {number} ColorID undefined
   */
  export function _0xED6D8E27A43B8CDE(ColorID: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEA9960D07DADCF10(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3E802F11FBE27674(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF41B5D290C99A3D6(p0: NativeAny): void;
  /**
   *
   * @param {number} colorID undefined
   */
  export function isPedHairColorValid(colorID: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xAAA6A3698A69E048(p0: NativeAny): void;
  /**
   *
   * @param {number} colorID undefined
   */
  export function isPedLipstickColorValid(colorID: number): void;
  /**
   *
   * @param {number} colorID undefined
   */
  export function isPedBlushColorValid(colorID: number): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function _0xC56FBF2F228E1DAC(modelHash: NativeHash, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedFaceFeature(ped: NativePed, index: number, scale: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function hasPedHeadBlendFinished(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x4668D80430D6C299(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xCC9682B8951C5229(ped: NativePed, r: number, g: number, b: number, p4: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xA21C118553BBDF02(ped: NativePed): void;
  /**
   *
   * @param {number} type undefined
   */
  export function getFirstParentIdForPedType(type: number): void;
  /**
   *
   * @param {number} type undefined
   */
  export function getNumParentPedsOfType(type: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x39D55A620FCB6A3A(ped: NativePed, slot: number, drawableId: number, textureId: number): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function _0x66680A92700F43DF(p0: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5AAB586FFEC0FD96(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedPropValid(ped: NativePed, componentId: number, drawableId: number, TextureId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x784002A632822099(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xF79F9DEF0AADE61A(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedPropIndex(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPropIndex(ped: NativePed, componentId: number, drawableId: number, TextureId: number, attach: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function knockOffPedProp(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedProp(ped: NativePed, propId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearAllPedProps(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xAFF4710E2A0A6C12(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedPropTextureIndex(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1280804F7CFD2D6C(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x36C6984C3ED0C911(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB50EB4CCB29704AC(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFEC9A3B1820F3331(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setBlockingOfNonTemporaryEvents(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedBoundsOrientation(ped: NativePed, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function registerTarget(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function registerHatedTargetsAroundPed(ped: NativePed, radius: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getClosestPed(x: number, y: number, z: number, radius: number, p4: NativeBOOL, p5: NativeBOOL, outPed: NativePed, p7: NativeBOOL, p8: NativeBOOL, pedType: number): void;
  /**
   *
   * @param {NativeBOOL} value undefined
   */
  export function setScenarioPedsToBeReturnedByNextCommand(value: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x03EA03AF85A85CB7(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, p8: NativeAny): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function setDriverRacingModifier(driver: NativePed, racingModifier: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function setDriverAbility(driver: NativePed, ability: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function setDriverAggressiveness(driver: NativePed, aggressiveness: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function canPedRagdoll(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedToRagdoll(ped: NativePed, time1: number, time2: number, ragdollType: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedToRagdollWithFall(ped: NativePed, time: number, p2: number, ragdollType: number, x: number, y: number, z: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedRagdollOnCollision(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedRagdoll(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedRunningRagdollTask(ped: NativePed): void;
  /**
   *
   * @param {NativePlayer} ped undefined
   */
  export function setPedRagdollForceFall(ped: NativePlayer): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetPedRagdollTimer(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanRagdoll(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xD1871251F3B5ACD7(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedRunningMobilePhoneTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xA3F3564A5B3646C0(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedRagdollBlockingFlags(ped: NativePed, flags: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetPedRagdollBlockingFlags(ped: NativePed, flags: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAngledDefensiveArea(ped: NativePed, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeBOOL, p9: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedSphereDefensiveArea(ped: NativePed, x: number, y: number, z: number, radius: number, p5: NativeBOOL, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDefensiveSphereAttachedToPed(ped: NativePed, target: NativePed, xOffset: number, yOffset: number, zOffset: number, radius: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xE4723DB6E736CCFF(ped: NativePed, p1: NativeAny, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDefensiveAreaAttachedToPed(ped: NativePed, attachPed: NativePed, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: NativeBOOL, p10: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDefensiveAreaDirection(ped: NativePed, p1: number, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function removePedDefensiveArea(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedDefensiveAreaPosition(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xBA63D9FE45412247(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPreferredCoverSet(ped: NativePed, itemSet: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function removePedPreferredCoverSet(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function reviveInjuredPed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resurrectPed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedNameDebug(ped: NativePed, name: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedExtractedDisplacement(ped: NativePed, worldSpace: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDiesWhenInjured(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedEnableWeaponBlocking(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xF9ACF4A08098EA25(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetPedVisibleDamage(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function applyPedBloodDamageByZone(ped: NativePed, p1: NativeAny, p2: number, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function applyPedBlood(ped: NativePed, boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function applyPedBloodByZone(ped: NativePed, p1: NativeAny, p2: number, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function applyPedBloodSpecific(ped: NativePed, p1: NativeAny, p2: number, p3: number, p4: number, p5: number, p6: NativeAny, p7: number, p8: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function applyPedDamageDecal(ped: NativePed, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeBOOL, p9: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function applyPedDamagePack(ped: NativePed, damagePack: string, damage: number, mult: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedBloodDamage(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedBloodDamageByZone(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function hidePedBloodDamageByZone(ped: NativePed, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedDamageDecalByZone(ped: NativePed, p1: number, p2: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedDecorationsState(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x2B694AFCF64E6994(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedWetness(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedWetnessHeight(ped: NativePed, height: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedWetnessEnabledThisFrame(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x6585D955A68452A5(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedSweat(ped: NativePed, sweat: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDecoration(ped: NativePed, collection: NativeHash, overlay: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedFacialDecoration(ped: NativePed, collection: NativeHash, overlay: NativeHash): void;
  /**
   *
   * @param {NativeHash} collection undefined
   */
  export function getTattooZone(collection: NativeHash, overlay: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedDecorations(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedFacialDecorations(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function wasPedSkeletonUpdated(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedBoneCoords(ped: NativePed, boneId: number, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {NativeBOOL} startImmediately undefined
   */
  export function createNmMessage(startImmediately: NativeBOOL, messageId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function givePedNmMessage(ped: NativePed): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function addScenarioBlockingArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: NativeBOOL): void;
  /**
   *
   */
  export function removeScenarioBlockingAreas(): void;
  /**
   *
   * @param {number} areaHandle undefined
   */
  export function removeScenarioBlockingArea(areaHandle: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setScenarioPedsSpawnInSphereArea(x: number, y: number, z: number, range: number, p4: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedUsingScenario(ped: NativePed, scenario: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedUsingAnyScenario(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFE07FF6495D52E2A(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9A77DFD295E29B09(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x25361A96E0F7E419(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEC6935EBE0847B90(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA3A9299C4F2ADB98(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF1C03A5352243A30(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEEED8FAFEC331A70(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x425AECF167663F48(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5B6010B3CBC29095(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCEDA60A74219D064(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function playFacialAnim(ped: NativePed, animName: string, animDict: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setFacialIdleAnimOverride(ped: NativePed, animName: string, animDict: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearFacialIdleAnimOverride(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanPlayGestureAnims(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanPlayVisemeAnims(ped: NativePed, toggle: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanPlayInjuredAnims(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanPlayAmbientAnims(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanPlayAmbientBaseAnims(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xC2EE020F5FB4DB53(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanArmIk(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanHeadIk(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanLegIk(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanTorsoIk(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xF5846EDB26A98A24(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x6647C5F6F5792496(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanUseAutoConversationLookat(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped1 undefined
   */
  export function isPedHeadtrackingPed(ped1: NativePed, ped2: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedHeadtrackingEntity(ped: NativePed, entity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPrimaryLookat(ped: NativePed, lookAt: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x78C4E9961DB3EB5B(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setPedClothProne(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA660FAF550EB37E5(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedConfigFlag(ped: NativePed, flagId: number, value: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedResetFlag(ped: NativePed, flagId: number, doReset: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedConfigFlag(ped: NativePed, flagId: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedResetFlag(ped: NativePed, flagId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedGroupMemberPassengerIndex(ped: NativePed, index: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanEvasiveDive(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedEvasiveDiving(ped: NativePed, evadingEntity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedShootsAtCoord(ped: NativePed, x: number, y: number, z: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedModelIsSuppressed(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   */
  export function stopAnyPedModelBeingSuppressed(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanBeTargetedWhenInjured(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedGeneratesDeadBodyEvents(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xE43A13C9E4CCCBCF(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanRagdollFromPlayerImpact(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function givePedHelmet(ped: NativePed, cannotRemove: NativeBOOL, helmetFlag: number, textureIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function removePedHelmet(ped: NativePed, instantly: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x14590DDBEDB1EC85(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedHelmet(ped: NativePed, canWearHelmet: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedHelmetFlag(ped: NativePed, helmetFlag: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedHelmetPropIndex(ped: NativePed, propIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedHelmetTextureIndex(ped: NativePed, textureIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedWearingHelmet(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x687C0B594907D2E8(ped: NativePed): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x451294E859ECC018(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9D728C1E12BF5518(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF2385935BFFD4D92(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedToLoadCover(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanCowerInCover(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanPeekInCover(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPlaysHeadOnHornAnimWhenDiesInVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedLegIkMode(ped: NativePed, mode: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMotionBlur(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCanSwitchWeapon(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDiesInstantlyInWater(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x1A330D297AAC6BC1(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function stopPedWeaponFiringWhenDropped(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setScriptedAnimSeatOffset(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCombatMovement(ped: NativePed, combatMovement: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedCombatMovement(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCombatAbility(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCombatRange(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedCombatRange(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCombatAttributes(ped: NativePed, attributeIndex: number, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedTargetLossResponse(ped: NativePed, responseType: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xDCCA191DF9980FD7(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedPerformingStealthKill(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xEBD0EDBA5BE957CF(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedBeingStealthKilled(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getMeleeTargetForPed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function wasPedKilledByStealth(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function wasPedKilledByTakedown(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x61767F73EACEED21(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedFleeAttributes(ped: NativePed, attributes: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCowerHash(ped: NativePed, p1: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2016C603D6B8987C(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedSteersAroundPeds(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedSteersAroundObjects(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedSteersAroundVehicles(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA9B61A329BFDCBEA(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x570389D1C3DE3C6B(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x576594E8D64375E2(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA52D5247A4227E14(p0: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function isAnyPedNearPoint(x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x2208438012482A1A(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFCF37A457CB96DC0(p0: NativeAny, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7D7A2E43E74E2EB8(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedFloodInvincibility(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCD018C591F94CB43(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x75BA1CB3B7D40CAF(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isTrackedPedVisible(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x511F1A683387C7E2(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedTracked(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function hasPedReceivedEvent(ped: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped1 undefined
   */
  export function canPedSeePed(ped1: NativePed, ped2: NativePed): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function _0x9C6A6C19B6C0C496(p0: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedBoneIndex(ped: NativePed, boneId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedRagdollBoneIndex(ped: NativePed, bone: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedEnveffScale(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedEnveffScale(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setEnablePedEnveffScale(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x110F526AB784111F(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xD69411AA0CEBF9E9(ped: NativePed, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1216E0BFA72CC703(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x2B5AA717A181FB4C(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xB8B52E498014F5B0(ped: NativePed): void;
  /**
   *
   * @param {number} x undefined
   */
  export function createSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function createSynchronizedScene2(x: number, y: number, z: number, radius: number, object: NativeHash): void;
  /**
   *
   * @param {number} sceneId undefined
   */
  export function isSynchronizedSceneRunning(sceneId: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function setSynchronizedSceneOrigin(sceneID: number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, unk: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function setSynchronizedScenePhase(sceneID: number, phase: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function getSynchronizedScenePhase(sceneID: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function setSynchronizedSceneRate(sceneID: number, rate: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function getSynchronizedSceneRate(sceneID: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function setSynchronizedSceneLooped(sceneID: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function isSynchronizedSceneLooped(sceneID: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function setSynchronizedSceneOcclusionPortal(sceneID: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} SceneID undefined
   */
  export function _0x7F2F4F13AC5257EF(SceneID: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function attachSynchronizedSceneToEntity(sceneID: number, entity: NativeEntity, boneIndex: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function detachSynchronizedScene(sceneID: number): void;
  /**
   *
   * @param {number} scene undefined
   */
  export function disposeSynchronizedScene(scene: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function forcePedMotionState(ped: NativePed, motionStateHash: NativeHash, p2: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xF60165E1D2C5370B(ped: NativePed, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMaxMoveBlendRatio(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMinMoveBlendRatio(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMoveRateOverride(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x46B05BCAE43856B0(ped: NativePed, flag: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedNearbyVehicles(ped: NativePed, sizeAndVehs: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedNearbyPeds(ped: NativePed, sizeAndPeds: number, ignore: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x7350823473013C02(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedUsingActionMode(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedUsingActionMode(ped: NativePed, p1: NativeBOOL, p2: NativeAny, action: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x781DE8FA214E87D2(ped: NativePed, p1: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCapsule(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function registerPedheadshot(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x953563CE563143AF(p0: NativeAny): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function unregisterPedheadshot(handle: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function isPedheadshotValid(handle: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function isPedheadshotReady(handle: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function getPedheadshotTxdString(handle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF0DAEF2F545BEE25(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5D517B27CF6ECD04(p0: NativeAny): void;
  /**
   *
   */
  export function _0xEBB376779A760AA8(): void;
  /**
   *
   */
  export function _0x876928DDDFCCC9CD(): void;
  /**
   *
   */
  export function _0xE8A169E666CBC541(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC1F6EBF9A3D55538(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x600048C60D5C2C51(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x2DF9038C90AD5264(p0: number, p1: number, p2: number, p3: number, p4: number, interiorFlags: number, scale: number, duration: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function _0xB2AFF10216DEFA2F(x: number, y: number, z: number, p3: number, p4: number, p5: number, p6: number, interiorFlags: number, scale: number, duration: number): void;
  /**
   *
   */
  export function _0xFEE4A5459472A9F8(): void;
  /**
   *
   */
  export function _0x3C67506996001F5E(): void;
  /**
   *
   */
  export function _0xA586FBEB32A53DBB(): void;
  /**
   *
   */
  export function _0xF445DE8DA80A1792(): void;
  /**
   *
   */
  export function _0xA635C11B8C44AFC2(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x280C7E3AC7F56E90(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB782F8238512BAD5(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setIkTarget(ped: NativePed, ikIndex: number, entityLookAt: NativeEntity, boneLookAt: number, offsetX: number, offsetY: number, offsetZ: number, p7: NativeAny, blendInDuration: number, blendOutDuration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xED3C76ADFA6D07C4(ped: NativePed): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function requestActionModeAsset(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function hasActionModeAssetLoaded(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function removeActionModeAsset(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function requestStealthModeAsset(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function hasStealthModeAssetLoaded(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function removeStealthModeAsset(asset: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedLodMultiplier(ped: NativePed, multiplier: number): void;
  /**
   *
   * @param {NativePickup} p0 undefined
   */
  export function _0xE861D0B05C7662B8(p0: NativePickup, p1: NativeAny, p2: NativeBlip): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x129466ED55140F8D(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCB968B53FC7F916D(p0: NativeAny, p1: NativeBOOL, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x68772DB2B2526F9F(ped: NativePed, x: number, y: number, z: number, range: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x06087579E7AA85A9(p0: NativeAny, p1: NativeAny, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD8C3BE3EE94CAF2D(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xD33DAA36272177C4(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x83A169EABCDB10A2(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x288DF530C92DAD6F(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function createVehicle(modelHash: NativeHash, x: number, y: number, z: number, heading: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function deleteVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x7D6F9A3EF26136A0(vehicle: NativeVehicle, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} veh undefined
   */
  export function setVehicleAllowNoPassengersLockon(veh: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE6B0E8CFC3633BF0(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleModel(vehicle: NativeVehicle, model: NativeHash): void;
  /**
   *
   * @param {number} v undefined
   */
  export function doesScriptVehicleGeneratorExist(v: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function createScriptVehicleGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number, modelHash: NativeHash, p7: number, p8: number, p9: number, p10: number, p11: NativeBOOL, p12: NativeBOOL, p13: NativeBOOL, p14: NativeBOOL, p15: NativeBOOL, p16: number): void;
  /**
   *
   * @param {number} vehicleGenerator undefined
   */
  export function deleteScriptVehicleGenerator(vehicleGenerator: number): void;
  /**
   *
   * @param {number} vehicleGenerator undefined
   */
  export function setScriptVehicleGenerator(vehicleGenerator: number, enabled: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function setAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   */
  export function setAllVehicleGeneratorsActive(): void;
  /**
   *
   * @param {NativeBOOL} active undefined
   */
  export function setAllLowPriorityVehicleGeneratorsActive(active: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x9A75585FB2E54FAD(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   */
  export function _0x0A436B8643716D14(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleOnGroundProperly(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} p0 undefined
   */
  export function setAllVehiclesSpawn(p0: NativeVehicle, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleStuckOnRoof(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function addVehicleUpsidedownCheck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function removeVehicleUpsidedownCheck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleStopped(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleNumberOfPassengers(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleMaxNumberOfPassengers(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleModelNumberOfSeats(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xF7F203E31F96F6A1(vehicle: NativeVehicle, flag: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE33FFA906CE74880(vehicle: NativeVehicle, p1: NativeAny): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function setVehicleDensityMultiplierThisFrame(multiplier: number): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function setRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function setParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setSomethingMultiplierThisFrame(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function setSomeVehicleDensityMultiplierThisFrame(value: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setFarDrawVehicles(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function setNumberOfParkedVehicles(value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorsLocked(vehicle: NativeVehicle, doorLockStatus: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setPedTargettableVehicleDestroy(vehicle: NativeVehicle, doorIndex: number, destroyType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function disableVehicleImpactExplosionActivation(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorsLockedForPlayer(vehicle: NativeVehicle, player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleDoorsLockedForPlayer(vehicle: NativeVehicle, player: NativePlayer): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorsLockedForAllPlayers(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x9737A37136F07E75(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorsLockedForTeam(vehicle: NativeVehicle, team: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function explodeVehicle(vehicle: NativeVehicle, isAudible: NativeBOOL, isInvisible: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleOutOfControl(vehicle: NativeVehicle, killDriver: NativeBOOL, explodeOnImpact: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleTimedExplosion(vehicle: NativeVehicle, ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x99AD4CCCB128CBC9(vehicle: NativeVehicle): void;
  /**
   *
   */
  export function _0x6ADAABD3068C5235(): void;
  /**
   *
   */
  export function requestVehiclePhoneExplosion(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setTaxiLights(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isTaxiLightOn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {string} garageName undefined
   */
  export function isVehicleInGarageArea(garageName: string, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleColours(vehicle: NativeVehicle, colorPrimary: number, colorSecondary: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleFullbeam(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function steerUnlockBias(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleCustomPrimaryColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleCustomPrimaryColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function clearVehicleCustomPrimaryColour(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getIsVehiclePrimaryColourCustom(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleCustomSecondaryColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleCustomSecondaryColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function clearVehicleCustomSecondaryColour(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getIsVehicleSecondaryColourCustom(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleEnveffScale(vehicle: NativeVehicle, fade: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleEnveffScale(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setCanResprayVehicle(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x33506883545AC0DF(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function jitterVehicle(vehicle: NativeVehicle, p1: NativeBOOL, yaw: number, pitch: number, roll: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setBoatAnchor(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getBoatAnchor(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE3EBAAE484798530(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xB28B1FE5BFADD7F5(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE842A9398079BD82(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x8F719973E1445BA2(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleSiren(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleSirenOn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleSirenSoundOn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleStrong(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function removeVehicleStuckCheck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleColours(vehicle: NativeVehicle, colorPrimary: number, colorSecondary: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleSeatFree(vehicle: NativeVehicle, seatIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getPedInVehicleSeat(vehicle: NativeVehicle, index: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getLastPedInVehicleSeat(vehicle: NativeVehicle, seatIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleLightsState(vehicle: NativeVehicle, lightsOn: NativeBOOL, highbeamsOn: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleTyreBurst(vehicle: NativeVehicle, wheel_rf: NativeVehicle, completely: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleForwardSpeed(vehicle: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleHalt(vehicle: NativeVehicle, distance: number, killEngine: number, unknown: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleForkliftHeight(vehicle: NativeVehicle, height: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setPedEnabledBikeRingtone(vehicle: NativeVehicle, entity: NativeEntity): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x62CA17B74C435651(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} object undefined
   */
  export function getVehicleAttachedToEntity(object: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x89D630CF5EA96D23(vehicle: NativeVehicle, entity: NativeEntity): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x6A98C2ECF57FA5D4(vehicle: NativeVehicle, entity: NativeEntity): void;
  /**
   *
   * @param {NativeVehicle} x undefined
   */
  export function _0x7C0043FDFF6436BC(x: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x8AA9180DE2FEDD45(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x0A6A279F3AA4FD70(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x634148744F385576(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE6F13851780394DA(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleTyreBurst(vehicle: NativeVehicle, index: number, onRim: NativeBOOL, p3: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorsShut(vehicle: NativeVehicle, closeInstantly: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleTyresCanBurst(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleTyresCanBurst(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleWheelsCanBreak(vehicle: NativeVehicle, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorOpen(vehicle: NativeVehicle, doorIndex: number, loose: NativeBOOL, openInstantly: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function removeVehicleWindow(vehicle: NativeVehicle, windowIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function rollDownWindows(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function rollDownWindow(vehicle: NativeVehicle, windowIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function rollUpWindow(vehicle: NativeVehicle, windowIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function smashVehicleWindow(vehicle: NativeVehicle, index: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function fixVehicleWindow(vehicle: NativeVehicle, index: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function detachVehicleWindscreen(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ejectJb700Roof(vehicle: NativeVehicle, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleLights(vehicle: NativeVehicle, state: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xC45C27EF50F36ADC(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleLightsMode(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleAlarm(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function startVehicleAlarm(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleAlarmActivated(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleInteriorlight(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleLightMultiplier(vehicle: NativeVehicle, multiplier: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function attachVehicleToTrailer(vehicle: NativeVehicle, trailer: NativeVehicle, radius: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x16B5E274BDE402F8(vehicle: NativeVehicle, trailer: NativeVehicle, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x374706271354CB18(vehicle: NativeVehicle, p1: NativeEntity, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function detachVehicleFromTrailer(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleAttachedToTrailer(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x2A8F319B392E7B3F(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x95CF53B3D687F9FA(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleTyreFixed(vehicle: NativeVehicle, tyreIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleNumberPlateText(vehicle: NativeVehicle, plateText: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleNumberPlateText(vehicle: NativeVehicle): void;
  /**
   *
   */
  export function getNumberOfVehicleNumberPlates(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleNumberPlateTextIndex(vehicle: NativeVehicle, plateIndex: number): void;
  /**
   *
   * @param {NativeVehicle} elegy undefined
   */
  export function getVehicleNumberPlateTextIndex(elegy: NativeVehicle): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setRandomTrains(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} variation undefined
   */
  export function createMissionTrain(variation: number, x: number, y: number, z: number, direction: NativeBOOL): void;
  /**
   *
   * @param {number} intersectionId undefined
   */
  export function switchTrainTrack(intersectionId: number, state: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x21973BBF8D17EDFA(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function deleteAllTrains(): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function setTrainSpeed(train: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function setTrainCruiseSpeed(train: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setRandomBoats(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setGarbageTrucks(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function doesVehicleHaveStuckVehicleCheck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function getVehicleRecordingId(p0: number, p1: string): void;
  /**
   *
   * @param {number} i undefined
   */
  export function requestVehicleRecording(i: number, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function hasVehicleRecordingBeenLoaded(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function removeVehicleRecording(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x92523B76657A517D(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function getPositionOfVehicleRecordingAtTime(p0: number, p1: number, p2: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF0F2103EFAF8CBA7(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getRotationOfVehicleRecordingAtTime(p0: NativeAny, p1: number, p2: NativeAny): void;
  /**
   *
   * @param {number} recordingID undefined
   */
  export function getTotalDurationOfVehicleRecordingId(recordingID: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getTotalDurationOfVehicleRecording(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getPositionInRecording(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getTimePositionInRecording(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function startPlaybackRecordedVehicle(vehicle: NativeVehicle, p1: number, playback: string, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function startPlaybackRecordedVehicleWithFlags(vehicle: NativeVehicle, p1: NativeAny, playback: string, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1F2E4E06DEA8992B(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function stopPlaybackRecordedVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function pausePlaybackRecordedVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function unpausePlaybackRecordedVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isPlaybackGoingOnForVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function isPlaybackUsingAiGoingOnForVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getCurrentPlaybackForVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function skipToEndAndStopPlaybackRecordedVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setPlaybackSpeed(vehicle: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function startPlaybackRecordedVehicleUsingAi(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function skipTimeInPlaybackRecordedVehicle(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setPlaybackToUseAi(vehicle: NativeVehicle, flag: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setPlaybackToUseAiTryToRevertBackLater(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x5845066D8A1EA7F7(vehicle: NativeVehicle, x: number, y: number, z: number, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x796A877E459B99EA(p0: NativeAny, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFAF2A78061FD9EF4(p0: NativeAny, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x063AE2B2CC273588(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function explodeVehicleInCutscene(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function addVehicleStuckCheckWithWarp(p0: NativeAny, p1: number, p2: NativeAny, p3: NativeBOOL, p4: NativeBOOL, p5: NativeBOOL, p6: NativeAny): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function setVehicleModelIsSuppressed(model: NativeHash, suppressed: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: NativeHash, flags: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function getRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function getRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: NativeHash, flags: number): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function getTrainCarriage(train: NativeVehicle, trailerNumber: number): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function deleteMissionTrain(train: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function setMissionTrainAsNoLongerNeeded(train: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function setMissionTrainCoords(train: NativeVehicle, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isThisModelABoat(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isThisModelAJetski(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isThisModelAPlane(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isThisModelAHeli(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isThisModelACar(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isThisModelATrain(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isThisModelABike(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isThisModelABicycle(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isThisModelAQuadbike(model: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setHeliBladesFullSpeed(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setHeliBladesSpeed(vehicle: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x99CAD8E7AFDB60FA(vehicle: NativeVehicle, p1: number, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleCanBeTargetted(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xDBC631F109350B8C(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleCanBeVisiblyDamaged(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x1AA8A837D2169D94(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x2311DD7159F00582(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleDirtLevel(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDirtLevel(vehicle: NativeVehicle, dirtLevel: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleDamaged(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} v undefined
   */
  export function isVehicleDoorFullyOpen(v: NativeVehicle, rwing: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleEngineOn(vehicle: NativeVehicle, value: NativeBOOL, instantly: NativeBOOL, otherwise: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleUndriveable(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleProvidesCover(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorControl(vehicle: NativeVehicle, doorIndex: number, speed: number, angle: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorLatched(vehicle: NativeVehicle, doorIndex: number, forceClose: NativeBOOL, lock: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleDoorAngleRatio(vehicle: NativeVehicle, door: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getPedUsingVehicleDoor(vehicle: NativeVehicle, doorIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorShut(vehicle: NativeVehicle, doorIndex: number, closeInstantly: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorBroken(vehicle: NativeVehicle, doorIndex: number, deleteDoor: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleCanBreak(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function doesVehicleHaveRoof(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isBigVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getNumberOfVehicleColours(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleColourCombination(vehicle: NativeVehicle, colorCombination: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleColourCombination(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleIsConsideredByPlayer(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xBE5C1255A1830FF5(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x9BECD4B9FEF3F8A6(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x88BC673CA9E0AE99(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE851E480B814D4BA(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function getRandomVehicleModelInMemory(p0: NativeBOOL, modelHash: NativeHash, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleDoorLockStatus(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} veh undefined
   */
  export function isVehicleDoorDamaged(veh: NativeVehicle, doorID: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDoorCanBreak(vehicle: NativeVehicle, doorIndex: number, isBreakable: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x27B926779DEB502D(vehicle: NativeVehicle, frontBumper: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleBumperBrokenOff(vehicle: NativeVehicle, front: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function isCopVehicleInArea3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleOnAllWheels(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleLayoutHash(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xA01BC64DD4BFBBAC(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function setRenderTrainAsDerailed(train: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleExtraColours(vehicle: NativeVehicle, pearlescentColor: number, wheelColor: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleExtraColours(vehicle: NativeVehicle, pearlescentColor: number, wheelColor: number): void;
  /**
   *
   */
  export function stopAllGarageActivity(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleFixed(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} vehicle undefined
   */
  export function setVehicleDeformationFixed(vehicle: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x206BC5DC9D1AC70A(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x51BB2D88D31A914B(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x192547247864DFDD(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setDisableVehiclePetrolTankFires(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setDisableVehiclePetrolTankDamage(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x91A0BD635321F145(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xC50CE861B55EAB8B(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x6EBFB22D646FFC18(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x25367DE49D64CF16(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function removeVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleSteerBias(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleExtraTurnedOn(vehicle: NativeVehicle, extraId: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleExtra(vehicle: NativeVehicle, extraId: number, disable: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function doesExtraExist(vehicle: NativeVehicle, extraId: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setConvertibleRoof(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function lowerConvertibleRoof(vehicle: NativeVehicle, instantlyLower: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function raiseConvertibleRoof(vehicle: NativeVehicle, instantlyRaise: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getConvertibleRoofState(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleAConvertible(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleStoppedAtTrafficLights(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleDamage(vehicle: NativeVehicle, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleEngineHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleEngineHealth(vehicle: NativeVehicle, health: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehiclePetrolTankHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehiclePetrolTankHealth(vehicle: NativeVehicle, health: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleStuckTimerUp(vehicle: NativeVehicle, p1: number, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function resetVehicleStuckTimer(vehicle: NativeVehicle, nullAttributes: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleDriveable(vehicle: NativeVehicle, isOnFireCheck: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleHasBeenOwnedByPlayer(vehicle: NativeVehicle, owned: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleNeedsToBeHotwired(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x9F3F689B814F2599(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x4E74E62E0A97E901(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function startVehicleHorn(vehicle: NativeVehicle, duration: number, mode: NativeHash, forever: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleSilent(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleHasStrongAxles(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getDisplayNameFromVehicleModel(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleDeformationAtPos(vehicle: NativeVehicle, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleLivery(vehicle: NativeVehicle, liveryIndex: number): void;
  /**
   *
   * @param {NativeVehicle} trailers2 undefined
   */
  export function getVehicleLivery(trailers2: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleLiveryCount(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleWindowIntact(vehicle: NativeVehicle, windowIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function areAllVehicleWindowsIntact(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function areAnyVehicleSeatsFree(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function resetVehicleWheels(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isHeliPartBroken(vehicle: NativeVehicle, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getHeliMainRotorHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getHeliTailRotorHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getHeliEngineHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function wasCounterActivated(vehicle: NativeVehicle, p1: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleNameDebug(vehicle: NativeVehicle, name: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleExplodesOnHighExplosionDamage(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x3441CAD2F2231923(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x2B6747FAA9DB9D6B(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function controlLandingGear(vehicle: NativeVehicle, state: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getLandingGearState(vehicle: NativeVehicle): void;
  /**
   *
   * @param {number} x undefined
   */
  export function isAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function requestVehicleHighDetailModel(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function removeVehicleHighDetailModel(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleHighDetail(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeHash} vehicleHash undefined
   */
  export function requestVehicleAsset(vehicleHash: NativeHash, vehicleAsset: number): void;
  /**
   *
   * @param {number} vehicleAsset undefined
   */
  export function hasVehicleAssetLoaded(vehicleAsset: number): void;
  /**
   *
   * @param {number} vehicleAsset undefined
   */
  export function removeVehicleAsset(vehicleAsset: number): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function setTowTruckCraneHeight(towTruck: NativeVehicle, height: number): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function attachVehicleToTowTruck(towTruck: NativeVehicle, vehicle: NativeVehicle, rear: NativeBOOL, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function detachVehicleFromTowTruck(towTruck: NativeVehicle, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function detachVehicleFromAnyTowTruck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function isVehicleAttachedToTowTruck(towTruck: NativeVehicle, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function getEntityAttachedToTowTruck(towTruck: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleAutomaticallyAttaches(vehicle: NativeVehicle, p1: NativeBOOL, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF8EBCCC96ADB9FB7(p0: NativeAny, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x56B94C6D7127DFBA(p0: NativeAny, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1093408B4B9D1146(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setDesiredVerticalFlightPhase(vehicle: NativeVehicle, angleRatio: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVerticalFlightPhase(vehicle: NativeVehicle, angle: number): void;
  /**
   *
   * @param {NativeVector3} outVec undefined
   */
  export function _0xA4822F1CF23F4810(outVec: NativeVector3, p1: NativeAny, outVec1: NativeVector3, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleBurnout(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleInBurnout(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleReduceGrip(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleIndicatorLights(vehicle: NativeVehicle, turnSignal: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleBrakeLights(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleHandbrake(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0x48ADC8A773564670(): void;
  /**
   *
   */
  export function _0x91D6DD290888CBAB(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x51DB102F4A3BA5E0(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleTrailerVehicle(vehicle: NativeVehicle, trailer: NativeVehicle): void;
  /**
   *
   * @param {string} vehicle undefined
   */
  export function _0xCAC66558B944DA67(vehicle: string, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleRudderBroken(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x1A78AD3D8240536F(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleMaxSpeed(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleMaxBraking(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleMaxTraction(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleAcceleration(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleModelMaxSpeed(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleModelMaxBraking(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleModelHandBrake(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleModelMaxTraction(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleModelAcceleration(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleModelDownForce(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleModelMaxKnots(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleModelMoveResistance(modelHash: NativeHash): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function getVehicleClassMaxSpeed(vehicleClass: number): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function getVehicleClassMaxTraction(vehicleClass: number): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function getVehicleClassMaxAgility(vehicleClass: number): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function getVehicleClassMaxAcceleration(vehicleClass: number): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function getVehicleClassMaxBraking(vehicleClass: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function addSpeedZoneForCoord(x: number, y: number, z: number, radius: number, speed: number, p5: NativeBOOL): void;
  /**
   *
   * @param {number} speedzone undefined
   */
  export function removeSpeedZone(speedzone: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function openBombBayDoors(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function closeBombBayDoors(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleSearchlightOn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} heli undefined
   */
  export function setVehicleSearchlight(heli: NativeVehicle, toggle: NativeBOOL, canBeUsedByAI: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x639431E895B9AA57(ped: NativePed, vehicle: NativeVehicle, p2: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function canShuffleSeat(vehicle: NativeVehicle, ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getNumModKits(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleModKit(vehicle: NativeVehicle, modKit: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleModKit(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleModKitType(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleWheelType(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleWheelType(vehicle: NativeVehicle, WheelType: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function getNumModColors(p0: number, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleModColor1(vehicle: NativeVehicle, paintType: number, color: number, p3: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleModColor2(vehicle: NativeVehicle, paintType: number, color: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleModColor1(vehicle: NativeVehicle, paintType: number, color: number, pearlescentColor: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleModColor2(vehicle: NativeVehicle, paintType: number, color: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleModColor1Name(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleModColor2Name(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleModLoadDone(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleMod(vehicle: NativeVehicle, modType: number, modIndex: number, customTires: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleMod(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleHeadlightColor(vehicle: NativeVehicle, color: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleModVariation(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getNumVehicleMods(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function removeVehicleMod(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function toggleVehicleMod(vehicle: NativeVehicle, modType: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isToggleModOn(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getModTextLabel(vehicle: NativeVehicle, modType: number, modValue: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getModSlotName(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getLiveryName(vehicle: NativeVehicle, liveryIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleModModifierValue(vehicle: NativeVehicle, modType: number, modIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleModData(vehicle: NativeVehicle, modType: number, modIndex: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function preloadVehicleMod(p0: NativeAny, modType: number, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function hasPreloadModsFinished(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function releasePreloadMods(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleTyreSmokeColor(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleTyreSmokeColor(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleWindowTint(vehicle: NativeVehicle, tint: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleWindowTint(vehicle: NativeVehicle): void;
  /**
   *
   */
  export function getNumVehicleWindowTints(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleColor(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xEEBFC7A7EFDC35B4(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleCauseOfDestruction(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getIsLeftVehicleHeadlightDamaged(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getIsRightVehicleHeadlightDamaged(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleEnginePowerMultiplier(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleSt(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x1F9FB66F3A3842D2(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x54B0F614960F4A5F(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE30524E1871F481D(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isAnyPassengerRappelling(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleEngineTorqueMultiplier(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0AD9E8F87FF7C16F(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleIsWanted(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF488C566413B4232(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC1F981A6F74F0C23(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0F3B4D4E43177236(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x6636C535F6CC2725(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function disablePlaneAileron(vehicle: NativeVehicle, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getIsVehicleEngineRunning(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x1D97D1E3A70A649F(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setBikeLeanAngle(vehicle: NativeVehicle, x: number, y: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xAB04325045427AAE(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xCFD778E7904C255E(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setLastDrivenVehicle(vehicle: NativeVehicle): void;
  /**
   *
   */
  export function getLastDrivenVehicle(): void;
  /**
   *
   */
  export function _0xE01903C47C7AC89E(): void;
  /**
   *
   * @param {NativeVehicle} p0 undefined
   */
  export function _0x02398B627547189C(p0: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} plane undefined
   */
  export function setPlaneMinHeightAboveTerrain(plane: NativeVehicle, height: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleLodMultiplier(vehicle: NativeVehicle, multiplier: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x428BACCDF5E26EAD(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x42A4BEB35D372407(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2C8CBFE1EA5FC631(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x4D9D109F63FEE1D4(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x279D50DE5652D935(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE44A982368A4AF23(vehicle: NativeVehicle, vehicle2: NativeVehicle): void;
  /**
   *
   */
  export function _0xF25E02CB9C5818F8(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xBC3CCA5844452B06(p0: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function setVehicleShootAtTarget(driver: NativePed, entity: NativeEntity, xTarget: number, yTarget: number, zTarget: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleOwner(vehicle: NativeVehicle, entity: NativeEntity): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setForceHdVehicle(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x182F266C2D9E2BEB(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehiclePlateType(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function trackVehicleVisibility(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleVisible(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleGravity(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xE6C0C80B8C867537(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x36492C2F0D134C56(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x06582AFF74894C75(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDFFCEF48E511DB48(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleShopResprayAllowed(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleEngineCanDegrade(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xF0E4BA16D1DB546C(vehicle: NativeVehicle, p1: number, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF87D9F2301F7D206(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function vehicleHasLandingGear(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function arePropellersUndamaged(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x0CDDA42F9E360CA6(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleStolen(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleIsStolen(vehicle: NativeVehicle, isStolen: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xAD2D28A1AFDFF131(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function areVehicleWingsIntact(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xB264C4D2F2B0A78B(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function detachVehicleFromCargobob(vehicle: NativeVehicle, cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function detachVehicleFromAnyCargobob(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function isVehicleAttachedToCargobob(cargobob: NativeVehicle, vehicleAttached: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function getVehicleAttachedToCargobob(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function attachVehicleToCargobob(vehicle: NativeVehicle, cargobob: NativeVehicle, p2: number, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function _0x571FEB383F629926(cargobob: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function getCargobobHookPosition(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function doesCargobobHavePickUpRope(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function createPickUpRopeForCargobob(cargobob: NativeVehicle, state: number): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function removePickUpRopeForCargobob(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function setCargobobHookPosition(cargobob: NativeVehicle, xOffset: number, yOffset: number, state: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCF1182F682F65307(p0: NativeAny, p1: NativePlayer): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function doesCargobobHavePickupMagnet(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function setCargobobPickupMagnetActive(cargobob: NativeVehicle, isActive: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function setCargobobPickupMagnetStrength(cargobob: NativeVehicle, strength: number): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function _0xA17BAD153B51547E(cargobob: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function _0x66979ACF5102FD2F(cargobob: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function _0x6D8EAC07506291FB(cargobob: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function _0xED8286F71A819BAA(cargobob: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x685D5561680D088B(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE301BD63E9E13CF0(vehicle: NativeVehicle, cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x9BDDC73CC6A115D4(vehicle: NativeVehicle, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x56EB5E94318D3FB6(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function doesVehicleHaveWeapons(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x2C4A1590ABF43E8B(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} disabled undefined
   */
  export function disableVehicleWeapon(disabled: NativeBOOL, weaponHash: NativeHash, vehicle: NativeVehicle, owner: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE05DD0E9707003A3(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x21115BCD6E44656A(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleClass(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getVehicleClassFromName(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setPlayersLastVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleCanBeUsedByFleeingPeds(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE5810AC70602F2F5(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleCreatesMoneyPickupsWhenExploded(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleJetEngineOn(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x10655FAB9915623D(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x79DF7E806202CE01(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9007A2F21DC108D4(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeVehicle} helicopter undefined
   */
  export function setHelicopterRollPitchYawMultHealth(helicopter: NativeVehicle, multiplier: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleFrictionOverride(vehicle: NativeVehicle, friction: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleWheelsCanBreakOffWhenBlowUp(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF78F94D60248C737(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleCeilingHeight(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x5E569EC46EC21CAE(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x6D6AF961B72728AE(vehicle: NativeVehicle): void;
  /**
   *
   * @param {string} decorator undefined
   */
  export function doesVehicleExistWithDecorator(decorator: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleExclusiveDriver(vehicle: NativeVehicle, ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleExclusiveDriver2(vehicle: NativeVehicle, ped: NativePed, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x500873A45724C863(vehicle: NativeVehicle, p1: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xB055A34527CB8FD7(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function displayDistantVehicles(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleNeonLightsColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleNeonLightsColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleNeonLightEnabled(vehicle: NativeVehicle, index: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleNeonLightEnabled(vehicle: NativeVehicle, index: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x35E0654F4BAD7971(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xB088E9A47AE6EDD5(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function requestVehicleScaleformMovie(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleBodyHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleBodyHealth(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xDF7E3EEB29642C38(vehicle: NativeVehicle, out1: NativeVector3, out2: NativeVector3): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleSuspensionHeight(vehicle: NativeVehicle): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function setCarHighSpeedBumpSeverityMultiplier(multiplier: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xA7DCDF4DED40A8F4(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleBodyHealth2(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xD4C4642CB7F50B5D(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xC361AA040D6637A8(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleHudSpecialAbilityBarActive(vehicle: NativeVehicle, active: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE16142B94664DEFD(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} modelHash undefined
   */
  export function createObject(modelHash: NativeObject, x: number, y: number, z: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL, dynamic: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function createObjectNoOffset(modelHash: NativeHash, x: number, y: number, z: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL, dynamic: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function deleteObject(object: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function placeObjectOnGroundProperly(object: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function slideObject(object: NativeObject, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function setObjectTargettable(object: NativeObject, targettable: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function enableObjectLod(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: NativeHash, isMission: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function hasObjectBeenBroken(object: NativeObject): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function hasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: NativeHash, p5: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x46494A2475701343(p0: number, p1: number, p2: number, p3: number, modelHash: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {number} xPos undefined
   */
  export function getObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): void;
  /**
   *
   * @param {NativeAny} coords undefined
   */
  export function _0x163F8B586BC95F2A(coords: NativeAny, radius: number, modelHash: NativeHash, x: number, y: number, z: number, p6: NativeVector3, p7: number): void;
  /**
   *
   * @param {NativeHash} type undefined
   */
  export function setStateOfClosestDoorOfType(type: NativeHash, x: number, y: number, z: number, locked: NativeBOOL, heading: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} type undefined
   */
  export function getStateOfClosestDoorOfType(type: NativeHash, x: number, y: number, z: number, locked: NativeBOOL, heading: number): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function doorControl(doorHash: NativeHash, x: number, y: number, z: number, locked: NativeBOOL, xRotMult: number, yRotMult: number, zRotMult: number): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function addDoorToSystem(doorHash: NativeHash, modelHash: NativeHash, x: number, y: number, z: number, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function removeDoorFromSystem(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function setDoorAccelerationLimit(doorHash: NativeHash, limit: number, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function _0x160AA1B32F6139B8(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function _0x4BC2854478F3A749(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function _0x03C27E13B42A0E82(doorHash: NativeHash, p1: number, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function _0x9BA001CB45CBF627(doorHash: NativeHash, heading: number, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function setDoorAjarAngle(doorHash: NativeHash, ajar: number, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function _0x65499865FCA6E5EC(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function _0xC485E07E4F0B7958(doorHash: NativeHash, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function _0xD9B71952F78A2640(doorHash: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function _0xA85A21582451E951(doorHash: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function doesDoorExist(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} door undefined
   */
  export function isDoorClosed(door: NativeHash): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xC7F29CA00F46350E(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x701FDA1E82076BA4(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDF97CDD4FC08FD34(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x589F80B325CC82C5(p0: number, p1: number, p2: number, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} garage undefined
   */
  export function isGarageEmpty(garage: NativeAny, p1: NativeBOOL, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x024A60DEB0EA69F0(p0: NativeAny, player: NativePlayer, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1761DC5D8471CBAA(p0: NativeAny, player: NativePlayer, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x85B6C850546FDDE2(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x673ED815D6E323B7(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x372EF6699146A1E4(p0: NativeAny, entity: NativeEntity, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF0EED5A6BC7B237A(p0: NativeAny, entity: NativeEntity, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x190428512B240692(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function _0xF2E1A7133DD356A6(hash: NativeHash, toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0x66A49D021870FE88(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isPointInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: NativeBOOL, p11: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0x4D89D607CB3DD1D2(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function setObjectPhysicsParams(object: NativeObject, mass: number, gravityFactor: number, dampingLinearC: number, dampingLinearV: number, dampingLinearV2: number, dampingAngularC: number, dampingAngularV: number, dampingAngularV2: number, margin: number, default2Pi: number, buoyancyFactor: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getObjectFragmentDamageHealth(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function setActivateObjectPhysicsAsSoonAsItIsUnfrozen(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function isAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} objectHash undefined
   */
  export function isObjectNearPoint(objectHash: NativeHash, x: number, y: number, z: number, range: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x4A39DB43E47CF3AA(p0: NativeAny): void;
  /**
   *
   * @param {NativeObject} p0 undefined
   */
  export function _0xE7E4C198B0185900(p0: NativeObject, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0xF9C1681347C8BD15(object: NativeObject): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function trackObjectVisibility(p0: NativeAny): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function isObjectVisible(object: NativeObject): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC6033D32241F6FB5(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEB6F1A9B5510A5D2(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBCE595371A5FBAAF(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getDesObject(x: number, y: number, z: number, rotation: number, name: string): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function setDesObjectState(handle: number, state: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function getDesObjectState(handle: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function doesDesObjectExist(handle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x260EE4FDBDF4DB01(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function createPickup(pickupHash: NativeHash, posX: number, posY: number, posZ: number, p4: number, value: number, p6: NativeBOOL, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function createPickupRotate(pickupHash: NativeHash, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: number, amount: number, p9: NativeAny, p10: NativeBOOL, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function createAmbientPickup(pickupHash: NativeHash, posX: number, posY: number, posZ: number, p4: number, value: number, modelHash: NativeHash, returnHandle: NativeBOOL, p8: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function createPortablePickup(pickupHash: NativeHash, x: number, y: number, z: number, placeOnGround: NativeBOOL, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function createPortablePickup2(pickupHash: NativeHash, x: number, y: number, z: number, placeOnGround: NativeBOOL, modelHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function attachPortablePickupToPed(ped: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function detachPortablePickupFromPed(ped: NativePed): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function _0x0BF3B3BD47D79C08(hash: NativeHash, p1: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x78857FC65CADB909(p0: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getSafePickupCoords(x: number, y: number, z: number, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function getPickupCoords(pickup: NativePickup): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function removeAllPickupsOfType(pickupHash: NativeHash): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function hasPickupBeenCollected(pickup: NativePickup): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function removePickup(pickup: NativePickup): void;
  /**
   *
   * @param {number} x undefined
   */
  export function createMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: NativeHash): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function doesPickupExist(pickup: NativePickup): void;
  /**
   *
   * @param {NativeObject} pickupObject undefined
   */
  export function doesPickupObjectExist(pickupObject: NativeObject): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function getPickupObject(pickup: NativePickup): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0378C08504160D0D(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function isPickupWithinRadius(pickupHash: NativeHash, x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function setPickupRegenerationTime(pickup: NativePickup, duration: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0x616093EC6B139DD9(player: NativePlayer, pickupHash: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} p0 undefined
   */
  export function _0x88EAEC617CD26926(p0: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function setTeamPickupObject(object: NativeObject, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0x92AEFB5F6E294023(object: NativeObject, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA08FE5E49BDC39DD(p0: NativeAny, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDB41D07A45A6D4B7(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x318516E02DE3ECE2(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x31F924B53EADDF65(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF92099527DB8E2A7(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0xA2C1F5E92AFE49ED(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x762DB2D380B48D04(p0: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function highlightPlacementCoords(x: number, y: number, z: number, colorIndex: number): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0xB2D0BDE54F0E8E5A(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePickup} pickupHash undefined
   */
  export function getWeaponHashFromPickup(pickupHash: NativePickup): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0x11D1E53A726891FE(object: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function setObjectTextureVariant(object: NativeObject, paintIndex: number): void;
  /**
   *
   * @param {NativePickup} pickupHash undefined
   */
  export function getPickupHash(pickupHash: NativePickup): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setForceObjectThisFrame(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function markObjectForDeletion(object: NativeObject): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPause(ped: NativePed, time: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskStandStill(ped: NativePed, time: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskJump(ped: NativePed, unused: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskCower(ped: NativePed, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskHandsUp(ped: NativePed, duration: number, facingPed: NativePed, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function updateTaskHandsUpDuration(ped: NativePed, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskOpenVehicleDoor(ped: NativePed, vehicle: NativeVehicle, timeOut: number, doorIndex: number, speed: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskEnterVehicle(ped: NativePed, vehicle: NativeVehicle, timeout: number, seat: number, speed: number, flag: number, p6: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskLeaveVehicle(ped: NativePed, vehicle: NativeVehicle, flags: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGetOffBoat(ped: NativePed, boat: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSkyDive(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskParachute(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskParachuteToTarget(ped: NativePed, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setParachuteTaskTarget(ped: NativePed, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setParachuteTaskThrust(ped: NativePed, thrust: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskRappelFromHeli(ped: NativePed, unused: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleDriveToCoord(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, speed: number, p6: NativeAny, vehicleModel: NativeHash, drivingMode: number, stopRange: number, p10: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleDriveToCoordLongrange(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, speed: number, driveMode: number, stopRange: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleDriveWander(ped: NativePed, vehicle: NativeVehicle, speed: number, drivingStyle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskFollowToOffsetOfEntity(ped: NativePed, entity: NativeEntity, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGoStraightToCoord(ped: NativePed, x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function taskGoStraightToCoordRelativeToEntity(entity1: NativeEntity, entity2: NativeEntity, p2: number, p3: number, p4: number, p5: number, p6: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskAchieveHeading(ped: NativePed, heading: number, timeout: number): void;
  /**
   *
   */
  export function taskFlushRoute(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function taskExtendRoute(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskFollowPointRoute(ped: NativePed, speed: number, unknown: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function taskGoToEntity(entity: NativeEntity, target: NativeEntity, duration: number, distance: number, speed: number, p5: number, p6: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSmartFleeCoord(ped: NativePed, x: number, y: number, z: number, distance: number, time: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSmartFleePed(ped: NativePed, fleeTarget: NativePed, distance: number, fleeTime: NativeAny, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskReactAndFleePed(ped: NativePed, fleeTarget: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskShockingEventReact(ped: NativePed, eventHandle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskWanderInArea(ped: NativePed, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskWanderStandard(ped: NativePed, p1: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehiclePark(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: NativeBOOL): void;
  /**
   *
   * @param {NativePed} killer undefined
   */
  export function taskStealthKill(killer: NativePed, target: NativePed, actionType: NativeHash, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPlantBomb(ped: NativePed, x: number, y: number, z: number, heading: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskFollowNavMeshToCoord(ped: NativePed, x: number, y: number, z: number, speed: number, timeout: number, stoppingRange: number, persistFollowing: NativeBOOL, unk: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskFollowNavMeshToCoordAdvanced(ped: NativePed, x: number, y: number, z: number, speed: number, timeout: number, unkFloat: number, unkInt: number, unkX: number, unkY: number, unkZ: number, unk_40000f: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPathCanUseClimbovers(ped: NativePed, Toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPathCanUseLadders(ped: NativePed, Toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPathCanDropFromHeight(ped: NativePed, Toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x88E32DB8C1A4AA4B(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPathsWidthPlant(ped: NativePed, mayEnterWater: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPathPreferToAvoidWater(ped: NativePed, avoidWater: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedPathAvoidFire(ped: NativePed, avoidFire: NativeBOOL): void;
  /**
   *
   * @param {number} height undefined
   */
  export function setGlobalMinBirdFlightHeight(height: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getNavmeshRouteDistanceRemaining(ped: NativePed, distRemaining: number, isPathReady: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getNavmeshRouteResult(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x3E38E28A1D80DDF6(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGoToCoordAnyMeans(ped: NativePed, x: number, y: number, z: number, speed: number, p5: NativeAny, p6: NativeBOOL, walkingStyle: number, p8: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGoToCoordAnyMeansExtraParams(ped: NativePed, x: number, y: number, z: number, speed: number, p5: NativeAny, p6: NativeBOOL, walkingStyle: number, p8: number, p9: NativeAny, p10: NativeAny, p11: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: NativePed, x: number, y: number, z: number, speed: number, p5: NativeAny, p6: NativeBOOL, walkingStyle: number, p8: number, p9: NativeAny, p10: NativeAny, p11: NativeAny, p12: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPlayAnim(ped: NativePed, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, lockX: NativeBOOL, lockY: NativeBOOL, lockZ: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPlayAnimAdvanced(ped: NativePed, animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, speed: number, speedMultiplier: number, duration: number, flag: NativeAny, animTime: number, p14: number, p15: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function stopAnimTask(ped: NativePed, animDictionary: string, animationName: string, p3: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskScriptedAnimation(ped: NativePed, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: number, p5: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playEntityScriptedAnim(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: number, p5: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function stopAnimPlayback(ped: NativePed, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setAnimWeight(p0: NativeAny, p1: number, p2: NativeAny, p3: NativeAny, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setAnimRate(p0: NativeAny, p1: number, p2: NativeAny, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setAnimLooped(p0: NativeAny, p1: NativeBOOL, p2: NativeAny, p3: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPlayPhoneGestureAnimation(ped: NativePed, animDict: string, animation: string, boneMaskType: string, p4: number, p5: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskStopPhoneGestureAnimation(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPlayingPhoneGestureAnim(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPhoneGestureAnimCurrentTime(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPhoneGestureAnimTotalTime(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function taskVehiclePlayAnim(vehicle: NativeVehicle, animation_set: string, animation_name: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function taskLookAtCoord(entity: NativeEntity, x: number, y: number, z: number, duration: number, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskLookAtEntity(ped: NativePed, lookAt: NativeEntity, duration: number, unknown1: number, unknown2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskClearLookAt(ped: NativePed): void;
  /**
   *
   * @param {NativeObject} taskSequence undefined
   */
  export function openSequenceTask(taskSequence: NativeObject): void;
  /**
   *
   * @param {NativeObject} taskSequence undefined
   */
  export function closeSequenceTask(taskSequence: NativeObject): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPerformSequence(ped: NativePed, taskSequence: NativeObject): void;
  /**
   *
   * @param {NativeObject} taskSequence undefined
   */
  export function clearSequenceTask(taskSequence: NativeObject): void;
  /**
   *
   * @param {NativeObject} taskSequence undefined
   */
  export function setSequenceToRepeat(taskSequence: NativeObject, repeat: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getSequenceProgress(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getIsTaskActive(ped: NativePed, taskNumber: number): void;
  /**
   *
   * @param {NativePed} targetPed undefined
   */
  export function getScriptTaskStatus(targetPed: NativePed, taskHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} veh undefined
   */
  export function getActiveVehicleMissionType(veh: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskLeaveAnyVehicle(ped: NativePed, p1: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskAimGunScripted(ped: NativePed, scriptTask: NativeHash, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskAimGunScriptedWithTarget(p0: NativeAny, p1: NativeAny, p2: number, p3: number, p4: number, p5: NativeAny, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function updateTaskAimGunScriptedTarget(p0: NativePed, p1: NativePed, p2: number, p3: number, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function getClipSetForScriptedGunTask(p0: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskAimGunAtEntity(ped: NativePed, entity: NativeEntity, duration: number, unk: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskTurnPedToFaceEntity(ped: NativePed, entity: NativeEntity, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskAimGunAtCoord(ped: NativePed, x: number, y: number, z: number, time: number, p5: NativeBOOL, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskShootAtCoord(ped: NativePed, x: number, y: number, z: number, duration: number, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskShuffleToNextVehicleSeat(ped: NativePed, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedTasks(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedSecondaryTask(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function taskEveryoneLeaveVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGotoEntityOffset(ped: NativePed, p1: NativeAny, p2: NativeAny, x: number, y: number, z: number, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGotoEntityOffsetXy(ped: NativePed, entity: NativeEntity, duration: number, xOffset: number, yOffset: number, zOffset: number, moveBlendRatio: number, useNavmesh: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskTurnPedToFaceCoord(ped: NativePed, x: number, y: number, z: number, duration: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function taskVehicleTempAction(driver: NativePed, vehicle: NativeVehicle, action: number, time: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function taskVehicleMission(p0: number, p1: number, veh: NativeVehicle, p3: NativeAny, p4: number, p5: NativeAny, p6: number, p7: number, p8: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleMissionPedTarget(ped: NativePed, vehicle: NativeVehicle, pedTarget: NativePed, mode: number, maxSpeed: number, drivingStyle: number, minDistance: number, p7: number, p8: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleMissionCoorsTarget(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleEscort(ped: NativePed, vehicle: NativeVehicle, targetVehicle: NativeVehicle, mode: number, speed: number, drivingStyle: number, minDistance: number, p7: number, noRoadsDistance: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function taskVehicleFollow(driver: NativePed, vehicle: NativeVehicle, targetEntity: NativeEntity, speed: number, drivingStyle: number, minDistance: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function taskVehicleChase(driver: NativePed, targetEnt: NativeEntity): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function taskVehicleHeliProtect(pilot: NativePed, vehicle: NativeVehicle, entityToFollow: NativeEntity, targetSpeed: number, p4: number, radius: number, altitude: number, p7: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setTaskVehicleChaseBehaviorFlag(ped: NativePed, flag: number, set: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setTaskVehicleChaseIdealPursuitDistance(ped: NativePed, distance: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function taskHeliChase(pilot: NativePed, entityToFollow: NativeEntity, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function taskPlaneChase(pilot: NativePed, entityToFollow: NativeEntity, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function taskPlaneLand(pilot: NativePed, plane: NativeVehicle, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function taskHeliMission(pilot: NativePed, aircraft: NativeVehicle, targetVehicle: NativeVehicle, targetPed: NativePed, destinationX: number, destinationY: number, destinationZ: number, missionFlag: number, maxSpeed: number, landingRadius: number, targetHeading: number, unk1: number, unk2: number, unk3: NativeHash, landingFlags: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function taskPlaneMission(pilot: NativePed, aircraft: NativeVehicle, targetVehicle: NativeVehicle, targetPed: NativePed, destinationX: number, destinationY: number, destinationZ: number, missionFlag: number, angularDrag: number, unk: number, targetHeading: number, maxZ: number, minZ: number): void;
  /**
   *
   * @param {NativePed} pedDriver undefined
   */
  export function taskBoatMission(pedDriver: NativePed, boat: NativeVehicle, p2: NativeAny, p3: NativeAny, x: number, y: number, z: number, p7: NativeAny, maxSpeed: number, drivingStyle: number, p10: number, p11: NativeAny): void;
  /**
   *
   * @param {NativePed} driverPed undefined
   */
  export function taskDriveBy(driverPed: NativePed, targetPed: NativePed, targetVehicle: NativeVehicle, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, p8: NativeBOOL, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativePed} shootingPed undefined
   */
  export function setDrivebyTaskTarget(shootingPed: NativePed, targetPed: NativePed, targetVehicle: NativeVehicle, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearDrivebyTaskUnderneathDrivingTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isDrivebyTaskUnderneathDrivingTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function controlMountedWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} shootingPed undefined
   */
  export function setMountedWeaponTarget(shootingPed: NativePed, targetPed: NativePed, targetVehicle: NativeVehicle, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isMountedWeaponTaskUnderneathDrivingTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskUseMobilePhone(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskUseMobilePhoneTimed(ped: NativePed, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskChatToPed(ped: NativePed, target: NativePed, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskWarpPedIntoVehicle(ped: NativePed, vehicle: NativeVehicle, seat: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function taskShootAtEntity(entity: NativeEntity, target: NativeEntity, duration: number, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskClimb(ped: NativePed, unused: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskClimbLadder(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedTasksImmediately(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskPerformSequenceFromProgress(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setNextDesiredMoveState(p0: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDesiredMoveBlendRatio(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedDesiredMoveBlendRatio(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGotoEntityAiming(ped: NativePed, target: NativeEntity, distanceToStopAt: number, StartAimingDist: number): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function taskSetDecisionMaker(p0: NativePed, p1: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskSetSphereDefensiveArea(p0: NativeAny, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskClearDefensiveArea(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPedSlideToCoord(ped: NativePed, x: number, y: number, z: number, heading: number, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPedSlideToCoordHdgRate(ped: NativePed, x: number, y: number, z: number, heading: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function addCoverPoint(posX: number, posY: number, posZ: number, heading: number, p4: NativeBOOL, p5: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativeScrHandle} coverpoint undefined
   */
  export function removeCoverPoint(coverpoint: NativeScrHandle): void;
  /**
   *
   * @param {number} x undefined
   */
  export function doesScriptedCoverPointExistAtCoords(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeScrHandle} coverpoint undefined
   */
  export function getScriptedCoverPointCoords(coverpoint: NativeScrHandle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskCombatPed(ped: NativePed, targetPed: NativePed, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskCombatPedTimed(p0: NativeAny, ped: NativePed, duration: number, p3: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSeekCoverFromPos(ped: NativePed, x: number, y: number, z: number, duration: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSeekCoverFromPed(ped: NativePed, target: NativePed, duration: number, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskSeekCoverToCoverPoint(p0: NativeAny, p1: NativeAny, p2: number, p3: number, p4: number, p5: NativeAny, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSeekCoverToCoords(ped: NativePed, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: NativeAny, p8: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPutPedDirectlyIntoCover(ped: NativePed, x: number, y: number, z: number, timeout: NativeAny, p5: NativeBOOL, p6: number, p7: NativeBOOL, p8: NativeBOOL, p9: NativeAny, p10: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskExitCover(ped: NativePed, p1: number, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPutPedDirectlyIntoMelee(ped: NativePed, target: NativePed, p2: number, p3: number, p4: number, flag: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function taskToggleDuck(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function taskGuardCurrentPosition(p0: NativePed, p1: number, p2: number, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskGuardAssignedDefensiveArea(p0: NativeAny, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeAny): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function taskGuardSphereDefensiveArea(p0: NativePed, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeAny, p7: number, p8: number, p9: number, p10: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskStandGuard(ped: NativePed, x: number, y: number, z: number, heading: number, scenarioName: string): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function setDriveTaskCruiseSpeed(driver: NativePed, cruiseSpeed: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setDriveTaskMaxCruiseSpeed(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setDriveTaskDrivingStyle(ped: NativePed, drivingStyle: number): void;
  /**
   *
   * @param {number} playerX undefined
   */
  export function addCoverBlockingArea(playerX: number, playerY: number, playerZ: number, radiusX: number, radiusY: number, radiusZ: number, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: NativeBOOL): void;
  /**
   *
   */
  export function removeAllCoverBlockingAreas(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskStartScenarioInPlace(ped: NativePed, scenarioName: string, unkDelay: number, playEnterAnim: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskStartScenarioAtPosition(ped: NativePed, scenarioName: string, x: number, y: number, z: number, heading: number, duration: number, sittingScenario: NativeBOOL, teleport: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskUseNearestScenarioToCoord(ped: NativePed, x: number, y: number, z: number, distance: number, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskUseNearestScenarioToCoordWarp(ped: NativePed, x: number, y: number, z: number, radius: number, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskUseNearestScenarioChainToCoord(p0: NativeAny, p1: number, p2: number, p3: number, p4: number, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskUseNearestScenarioChainToCoordWarp(p0: NativeAny, p1: number, p2: number, p3: number, p4: number, p5: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function doesScenarioExistInArea(x: number, y: number, z: number, radius: number, b: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function doesScenarioOfTypeExistInArea(p0: number, p1: number, p2: number, p3: NativeAny, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function pedHasUseScenarioTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function playAnimOnRunningScenario(ped: NativePed, animDict: string, animName: string): void;
  /**
   *
   * @param {string} scenarioGroup undefined
   */
  export function doesScenarioGroupExist(scenarioGroup: string): void;
  /**
   *
   * @param {string} scenarioGroup undefined
   */
  export function isScenarioGroupEnabled(scenarioGroup: string): void;
  /**
   *
   * @param {string} scenarioGroup undefined
   */
  export function setScenarioGroupEnabled(scenarioGroup: string, p1: NativeBOOL): void;
  /**
   *
   */
  export function resetScenarioGroupsEnabled(): void;
  /**
   *
   * @param {string} scenarioGroup undefined
   */
  export function setExclusiveScenarioGroup(scenarioGroup: string): void;
  /**
   *
   */
  export function resetExclusiveScenarioGroup(): void;
  /**
   *
   * @param {string} scenarioType undefined
   */
  export function isScenarioTypeEnabled(scenarioType: string): void;
  /**
   *
   * @param {string} scenarioType undefined
   */
  export function setScenarioTypeEnabled(scenarioType: string, toggle: NativeBOOL): void;
  /**
   *
   */
  export function resetScenarioTypesEnabled(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedActiveInScenario(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x621C6E4729388E41(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x8FD89A6240813FD0(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskCombatHatedTargetsInArea(ped: NativePed, x: number, y: number, z: number, radius: number, p5: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskCombatHatedTargetsAroundPed(ped: NativePed, radius: number, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskCombatHatedTargetsAroundPedTimed(p0: NativeAny, p1: number, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {number} ped undefined
   */
  export function taskThrowProjectile(ped: number, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSwapWeapon(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskReloadWeapon(ped: NativePed, unused: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedGettingUp(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskWrithe(ped: NativePed, target: NativePed, time: number, p3: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInWrithe(ped: NativePed): void;
  /**
   *
   * @param {string} patrolRoute undefined
   */
  export function openPatrolRoute(patrolRoute: string): void;
  /**
   *
   */
  export function closePatrolRoute(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function addPatrolRouteNode(p0: number, p1: string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p8: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function addPatrolRouteLink(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function createPatrolRoute(): void;
  /**
   *
   * @param {string} patrolRoute undefined
   */
  export function deletePatrolRoute(patrolRoute: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskPatrol(ped: NativePed, p1: string, p2: NativeAny, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskStayInCover(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function addVehicleSubtaskAttackCoord(ped: NativePed, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function addVehicleSubtaskAttackPed(ped: NativePed, ped2: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleShootAtPed(ped: NativePed, target: NativePed, flag: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleAimAtPed(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleShootAtCoord(ped: NativePed, x: number, y: number, z: number, p4: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleAimAtCoord(ped: NativePed, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleGotoNavmesh(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, speed: number, behaviorFlag: number, stoppingRange: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGoToCoordWhileAimingAtCoord(ped: NativePed, x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number, moveSpeed: number, p8: NativeBOOL, p9: number, p10: number, p11: NativeBOOL, flags: NativeAny, p13: NativeBOOL, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskGoToCoordWhileAimingAtEntity(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeAny, p5: number, p6: NativeBOOL, p7: number, p8: number, p9: NativeBOOL, p10: NativeAny, p11: NativeBOOL, p12: NativeAny, p13: NativeAny): void;
  /**
   *
   * @param {NativePed} pedHandle undefined
   */
  export function taskGoToCoordAndAimAtHatedEntitiesNearCoord(pedHandle: NativePed, goToLocationX: number, goToLocationY: number, goToLocationZ: number, focusLocationX: number, focusLocationY: number, focusLocationZ: number, speed: number, shootAtEnemies: NativeBOOL, distanceToStopAt: number, noRoadsDistance: number, unkTrue: NativeBOOL, unkFlag: number, aimingFlag: number, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskGoToEntityWhileAimingAtCoord(p0: NativeAny, p1: NativeAny, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL, p7: number, p8: number, p9: NativeBOOL, p10: NativeBOOL, p11: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskGoToEntityWhileAimingAtEntity(ped: NativePed, entityToWalkTo: NativeEntity, entityToAimAt: NativeEntity, speed: number, shootatEntity: NativeBOOL, p5: number, p6: number, p7: NativeBOOL, p8: NativeBOOL, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setHighFallTask(ped: NativePed, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {string} name undefined
   */
  export function requestWaypointRecording(name: string): void;
  /**
   *
   * @param {string} name undefined
   */
  export function getIsWaypointRecordingLoaded(name: string): void;
  /**
   *
   * @param {string} name undefined
   */
  export function removeWaypointRecording(name: string): void;
  /**
   *
   * @param {string} name undefined
   */
  export function waypointRecordingGetNumPoints(name: string, points: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function waypointRecordingGetCoord(name: string, point: number, coord: NativeVector3): void;
  /**
   *
   * @param {string} name undefined
   */
  export function waypointRecordingGetSpeedAtPoint(name: string, point: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function waypointRecordingGetClosestWaypoint(name: string, x: number, y: number, z: number, point: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function taskFollowWaypointRecording(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function isWaypointPlaybackGoingOnForPed(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedWaypointProgress(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedWaypointDistance(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedWaypointRouteOffset(ped: NativePed, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function getWaypointDistanceAlongRoute(p0: string, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackGetIsPaused(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackPause(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackResume(p0: NativeAny, p1: NativeBOOL, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackOverrideSpeed(p0: NativeAny, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackUseDefaultSpeed(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function useWaypointRecordingAsAssistedMovementRoute(p0: NativeAny, p1: NativeBOOL, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackStartAimingAtPed(p0: NativeAny, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackStartAimingAtCoord(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackStartShootingAtPed(p0: NativeAny, p1: NativeAny, p2: NativeBOOL, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackStartShootingAtCoord(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeBOOL, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function waypointPlaybackStopAimingOrShooting(p0: NativeAny): void;
  /**
   *
   * @param {string} route undefined
   */
  export function assistedMovementRequestRoute(route: string): void;
  /**
   *
   * @param {string} route undefined
   */
  export function assistedMovementRemoveRoute(route: string): void;
  /**
   *
   * @param {string} route undefined
   */
  export function assistedMovementIsRouteLoaded(route: string): void;
  /**
   *
   * @param {string} route undefined
   */
  export function assistedMovementSetRouteProperties(route: string, props: number): void;
  /**
   *
   * @param {number} dist undefined
   */
  export function assistedMovementOverrideLoadDistanceThisFrame(dist: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskVehicleFollowWaypointRecording(ped: NativePed, vehicle: NativeVehicle, WPRecording: string, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeBOOL, p9: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function isWaypointPlaybackGoingOnForVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleWaypointProgress(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getVehicleWaypointTargetPoint(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function vehicleWaypointPlaybackPause(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function vehicleWaypointPlaybackResume(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function vehicleWaypointPlaybackUseDefaultSpeed(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function vehicleWaypointPlaybackOverrideSpeed(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSetBlockingOfNonTemporaryEvents(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskForceMotionState(ped: NativePed, state: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskMoveNetwork(ped: NativePed, task: string, multiplier: number, p3: NativeBOOL, animDict: string, flags: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskMoveNetworkAdvanced(ped: NativePed, p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeAny, p9: number, p10: NativeBOOL, animDict: string, flags: number): void;
  /**
   *
   * @param {number} PlayerID undefined
   */
  export function _0x921CE12C489C4C41(PlayerID: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x30ED88D5E0C56A37(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xD01015C7316AE176(ped: NativePed, p1: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xAB13A5565480B6D9(ped: NativePed, unk: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x717E4D1F2048376D(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xD5BB4025AE449A4E(ped: NativePed, p1: string, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xB0A6CFD2C69C1088(ped: NativePed, p1: string, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xA7FFBA498E4AAF67(ped: NativePed, p1: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xB4F47213DF45A64C(ped: NativePed, p1: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isMoveBlendRatioStill(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isMoveBlendRatioWalking(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isMoveBlendRatioRunning(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isMoveBlendRatioSprinting(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedStill(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedWalking(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedRunning(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedSprinting(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedStrafing(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSynchronizedScene(ped: NativePed, scene: number, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSweepAimEntity(ped: NativePed, animDict: string, animName1: string, animName2: string, animName3: string, duration: number, entity: NativeEntity, p7: number, p8: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function updateTaskSweepAimEntity(ped: NativePed, entity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskSweepAimPosition(ped: NativePed, animDict: string, animName1: string, animName2: string, animName3: string, timeout: number, X: number, Y: number, Z: number, unk: number, flag: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function updateTaskSweepAimPosition(ped: NativePed, X: number, Y: number, Z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function taskArrestPed(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedRunningArrestTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedBeingArrested(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function uncuffPed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedCuffed(ped: NativePed): void;
  /**
   *
   */
  export function getAllocatedStackSize(): void;
  /**
   *
   * @param {number} threadId undefined
   */
  export function getFreeStackSlotsCount(threadId: number): void;
  /**
   *
   * @param {number} time undefined
   */
  export function setRandomSeed(time: number): void;
  /**
   *
   * @param {number} time undefined
   */
  export function setTimeScale(time: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setMissionFlag(toggle: NativeBOOL): void;
  /**
   *
   */
  export function getMissionFlag(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setRandomEventFlag(p0: NativeAny): void;
  /**
   *
   */
  export function getRandomEventFlag(): void;
  /**
   *
   */
  export function getGlobalCharBuffer(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x4DCDF92BF64236CD(p0: string, p1: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x31125FD509D9043F(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEBD3205A207939ED(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x97E7E2C04245115B(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEB078CA2B5E82ADD(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x703CC7F60CBB2B57(p0: NativeAny): void;
  /**
   *
   */
  export function _0x8951EB9C6906D3C8(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBA4B8D83BDC75551(p0: NativeAny): void;
  /**
   *
   */
  export function _0xE8B9C0EC9E183F35(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x65D2EBB47E1CEC21(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x6F2135B6129620C1(p0: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x8D74E26F54B4E5C3(p0: string): void;
  /**
   *
   * @param {NativeAny} p1 undefined
   */
  export function _0xB335F761606DB47C(p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeBOOL): void;
  /**
   *
   */
  export function getPrevWeatherTypeHashName(): void;
  /**
   *
   */
  export function getNextWeatherTypeHashName(): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function isPrevWeatherType(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function isNextWeatherType(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function setWeatherTypePersist(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function setWeatherTypeNowPersist(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function setWeatherTypeNow(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function setWeatherTypeOverTime(weatherType: string, time: number): void;
  /**
   *
   */
  export function setRandomWeatherType(): void;
  /**
   *
   */
  export function clearWeatherTypePersist(): void;
  /**
   *
   * @param {NativeHash} weatherType1 undefined
   */
  export function getWeatherTypeTransition(weatherType1: NativeHash, weatherType2: NativeHash, percentWeather2: number): void;
  /**
   *
   * @param {NativeHash} weatherType1 undefined
   */
  export function setWeatherTypeTransition(weatherType1: NativeHash, weatherType2: NativeHash, percentWeather2: number): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function setOverrideWeather(weatherType: string): void;
  /**
   *
   */
  export function clearOverrideWeather(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xB8F87EAD7533B176(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xC3EAD29AB273ECE8(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xA7A1127490312C36(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x31727907B2C43C55(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x405591EC8FD9096D(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xF751B16FB32ABC1D(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xB3E6360DDE733E82(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x7C9C0B1EEB1F9072(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x6216B116083A7CB4(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x9F5E6BB6B34540DA(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xB9854DFDE0D833D6(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xC54A08C85AE4D410(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xA8434F1DFF41D6E7(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xC3C221ADDDE31A11(p0: number): void;
  /**
   *
   * @param {number} speed undefined
   */
  export function setWind(speed: number): void;
  /**
   *
   * @param {number} speed undefined
   */
  export function setWindSpeed(speed: number): void;
  /**
   *
   */
  export function getWindSpeed(): void;
  /**
   *
   * @param {number} direction undefined
   */
  export function setWindDirection(direction: number): void;
  /**
   *
   */
  export function getWindDirection(): void;
  /**
   *
   * @param {number} intensity undefined
   */
  export function setRainFxIntensity(intensity: number): void;
  /**
   *
   */
  export function getRainLevel(): void;
  /**
   *
   */
  export function getSnowLevel(): void;
  /**
   *
   */
  export function createLightningThunder(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x02DEAAC8F8EA7FE7(p0: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x11B56FBBF7224868(p0: string): void;
  /**
   *
   * @param {string} type undefined
   */
  export function setCloudHatTransition(type: string, transitionTime: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xA74802FB8D0B7814(p0: string, p1: number): void;
  /**
   *
   */
  export function clearCloudHat(): void;
  /**
   *
   * @param {number} opacity undefined
   */
  export function setCloudHatOpacity(opacity: number): void;
  /**
   *
   */
  export function getCloudHatOpacity(): void;
  /**
   *
   */
  export function getGameTimer(): void;
  /**
   *
   */
  export function getFrameTime(): void;
  /**
   *
   */
  export function getBenchmarkTime(): void;
  /**
   *
   */
  export function getFrameCount(): void;
  /**
   *
   * @param {number} startRange undefined
   */
  export function getRandomFloatInRange(startRange: number, endRange: number): void;
  /**
   *
   * @param {number} startRange undefined
   */
  export function getRandomIntInRange(startRange: number, endRange: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getGroundZFor3dCoord(x: number, y: number, z: number, groundZ: number, unk: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getGroundZCoordWithOffsets(x: number, y: number, z: number, groundZ: number, offsets: NativeVector3): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function asin(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function acos(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function tan(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function atan(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function atan2(p0: number, p1: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): void;
  /**
   *
   * @param {number} dx undefined
   */
  export function getHeadingFromVector2d(dx: number, dy: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x7F8F6405F4777AF6(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x21C235BC64831E5A(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xF56DFB7B61BE7276(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: NativeAny): void;
  /**
   *
   * @param {number} address undefined
   */
  export function setBit(address: number, offset: number): void;
  /**
   *
   * @param {number} address undefined
   */
  export function clearBit(address: number, offset: number): void;
  /**
   *
   * @param {string} string undefined
   */
  export function getHashKey(string: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xF2F6A2FA49278625(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: NativeAny, p10: NativeAny, p11: NativeAny, p12: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isAreaOccupied(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: NativeBOOL, p10: NativeBOOL, p11: NativeAny, p12: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function isPositionOccupied(x: number, y: number, z: number, range: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: NativeAny, p10: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeAny): void;
  /**
   *
   * @param {number} X undefined
   */
  export function clearArea(X: number, Y: number, Z: number, radius: number, p4: NativeBOOL, ignoreCopCars: NativeBOOL, ignoreObjects: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function clearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function clearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function clearAngledAreaOfVehicles(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeBOOL, p8: NativeBOOL, p9: NativeBOOL, p10: NativeBOOL, p11: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, isNetworkGame: NativeBOOL): void;
  /**
   *
   */
  export function _0x7EC6F9A478A6A512(): void;
  /**
   *
   * @param {NativeBOOL} unk undefined
   */
  export function setSaveMenuActive(unk: NativeBOOL): void;
  /**
   *
   */
  export function _0x397BAA01068BAA96(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setCreditsActive(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function _0xB51B9AB9EF81868C(toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0x075F1D57402C93BA(): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function terminateAllScriptsWithThisName(scriptName: string): void;
  /**
   *
   */
  export function networkSetScriptIsSafeForNetworkGame(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function addHospitalRestart(x: number, y: number, z: number, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {number} hospitalIndex undefined
   */
  export function disableHospitalRestart(hospitalIndex: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {number} policeIndex undefined
   */
  export function disablePoliceRestart(policeIndex: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setCustomRespawnPosition(x: number, y: number, z: number, heading: number): void;
  /**
   *
   */
  export function setNextRespawnToCustom(): void;
  /**
   *
   * @param {NativeBOOL} disableRespawn undefined
   */
  export function disableAutomaticRespawn(disableRespawn: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function ignoreNextRestart(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setFadeOutAfterDeath(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setFadeOutAfterArrest(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setFadeInAfterDeathArrest(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setFadeInAfterLoad(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {number} index undefined
   */
  export function setSaveHouse(index: number, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function overrideSaveHouse(p0: NativeBOOL, p1: number, p2: number, p3: number, p4: number, p5: NativeBOOL, p6: number, p7: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA4A0065E39C9F25C(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   */
  export function doAutoSave(): void;
  /**
   *
   */
  export function _0x6E04F06094C87047(): void;
  /**
   *
   */
  export function isAutoSaveInProgress(): void;
  /**
   *
   */
  export function _0x2107A3773771186D(): void;
  /**
   *
   */
  export function _0x06462A961E94B67C(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function beginReplayStats(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x69FE6DC87BD2A5E9(p0: NativeAny): void;
  /**
   *
   */
  export function endReplayStats(): void;
  /**
   *
   */
  export function _0xD642319C54AADEB6(): void;
  /**
   *
   */
  export function _0x5B1F2E327B6B6FE1(): void;
  /**
   *
   */
  export function _0x2B626A0150E4D449(): void;
  /**
   *
   */
  export function _0xDC9274A7EF6B2867(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8098C8D6597AAE18(p0: NativeAny): void;
  /**
   *
   */
  export function clearReplayStats(): void;
  /**
   *
   */
  export function _0x72DE52178C291CB5(): void;
  /**
   *
   */
  export function _0x44A0BDC559B35F6E(): void;
  /**
   *
   */
  export function _0xEB2104E905C6F2E9(): void;
  /**
   *
   */
  export function _0x2B5E102E4A42F2BF(): void;
  /**
   *
   */
  export function isMemoryCardInUse(): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: NativeBOOL, weaponHash: NativeHash, ownerPed: NativePed, isAudible: NativeBOOL, isInvisible: NativeBOOL, speed: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function shootSingleBulletBetweenCoordsPresetParams(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: NativeBOOL, weaponHash: NativeHash, ownerPed: NativePed, isAudible: NativeBOOL, isInvisible: NativeBOOL, speed: number, entity: NativeEntity): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function shootSingleBulletBetweenCoordsWithExtraParams(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: NativeBOOL, weaponHash: NativeHash, ownerPed: NativePed, isAudible: NativeBOOL, isInvisible: NativeBOOL, speed: number, entity: NativeEntity, p14: NativeBOOL, p15: NativeBOOL, p16: NativeBOOL, p17: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function getModelDimensions(modelHash: NativeHash, minimum: NativeVector3, maximum: NativeVector3): void;
  /**
   *
   * @param {number} fakeWantedLevel undefined
   */
  export function setFakeWantedLevel(fakeWantedLevel: number): void;
  /**
   *
   */
  export function getFakeWantedLevel(): void;
  /**
   *
   * @param {number} address undefined
   */
  export function isBitSet(address: number, offset: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function usingMissionCreator(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xDEA36202FC3382DF(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setMinigameInProgress(toggle: NativeBOOL): void;
  /**
   *
   */
  export function isMinigameInProgress(): void;
  /**
   *
   */
  export function isThisAMinigameScript(): void;
  /**
   *
   */
  export function isSniperInverted(): void;
  /**
   *
   */
  export function _0xD3D15555431AB793(): void;
  /**
   *
   * @param {number} profileSetting undefined
   */
  export function getProfileSetting(profileSetting: number): void;
  /**
   *
   * @param {string} string1 undefined
   */
  export function areStringsEqual(string1: string, string2: string): void;
  /**
   *
   * @param {string} str1 undefined
   */
  export function compareStrings(str1: string, str2: string, matchCase: NativeBOOL, maxLength: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function absi(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function absf(value: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, p7: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isProjectileTypeInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeAny, p8: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function isProjectileTypeInRadius(x: number, y: number, z: number, projHash: NativeHash, radius: number, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function getIsProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, projHash: NativeHash, projPos: NativeVector3, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getProjectileNearPedCoords(ped: NativePed, projHash: NativeHash, radius: number, projPos: NativeVector3, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getProjectileNearPed(ped: NativePed, projHash: NativeHash, radius: number, projPos: NativeVector3, projEnt: NativeEntity, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isBulletInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isBulletInArea(p0: number, p1: number, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isBulletInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function hasBulletImpactedInArea(x: number, y: number, z: number, p3: number, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function hasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   */
  export function isOrbisVersion(): void;
  /**
   *
   */
  export function isDurangoVersion(): void;
  /**
   *
   */
  export function isXbox360Version(): void;
  /**
   *
   */
  export function isPs3Version(): void;
  /**
   *
   */
  export function isPcVersion(): void;
  /**
   *
   */
  export function isAussieVersion(): void;
  /**
   *
   * @param {string} string undefined
   */
  export function isStringNull(string: string): void;
  /**
   *
   * @param {string} string undefined
   */
  export function isStringNullOrEmpty(string: string): void;
  /**
   *
   * @param {string} string undefined
   */
  export function stringToInt(string: string, outInteger: number): void;
  /**
   *
   * @param {number} variable undefined
   */
  export function setBitsInRange(variable: number, rangeStart: number, rangeEnd: number, p3: number): void;
  /**
   *
   * @param {number} variable undefined
   */
  export function getBitsInRange(variable: number, rangeStart: number, rangeEnd: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function addStuntJump(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: NativeAny, p16: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function addStuntJumpAngled(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: NativeAny, p18: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function deleteStuntJump(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function enableStuntJumpSet(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function disableStuntJumpSet(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xD79185689F8FD5DF(p0: NativeBOOL): void;
  /**
   *
   */
  export function isStuntJumpInProgress(): void;
  /**
   *
   */
  export function isStuntJumpMessageShowing(): void;
  /**
   *
   */
  export function _0x996DD1E1E02F1008(): void;
  /**
   *
   */
  export function _0x6856EC3D35C81EA4(): void;
  /**
   *
   */
  export function cancelStuntJump(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setGamePaused(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setThisScriptCanBePaused(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function hasButtonCombinationJustBeenEntered(hash: NativeHash, amount: number): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function hasCheatStringJustBeenEntered(hash: NativeHash): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function useFreemodeMapBehavior(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} flag undefined
   */
  export function setUnkMapFlag(flag: number): void;
  /**
   *
   */
  export function isFrontendFading(): void;
  /**
   *
   */
  export function populateNow(): void;
  /**
   *
   */
  export function getIndexOfCurrentLevel(): void;
  /**
   *
   * @param {number} level undefined
   */
  export function setGravityLevel(level: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function startSaveData(p0: NativeAny, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   */
  export function stopSaveData(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xA09F896CE912481F(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function registerIntToSave(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA735353C77334EA0(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function registerEnumToSave(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function registerFloatToSave(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function registerBoolToSave(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function registerTextLabelToSave(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6F7794F28C6B2535(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x48F069265A0E4BEC(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8269816F6CFD40F8(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFAA457EF263E8763(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function startSaveStruct(p0: NativeAny, p1: number, structName: string): void;
  /**
   *
   */
  export function stopSaveStruct(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function startSaveArray(p0: NativeAny, p1: number, arrayName: string): void;
  /**
   *
   */
  export function stopSaveArray(): void;
  /**
   *
   * @param {number} dispatchService undefined
   */
  export function enableDispatchService(dispatchService: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} type undefined
   */
  export function _0x9B2BD3773123EA2F(type: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} dispatchService undefined
   */
  export function getNumberOfDispatchedUnitsForPlayer(dispatchService: number): void;
  /**
   *
   * @param {number} incidentType undefined
   */
  export function createIncident(incidentType: number, x: number, y: number, z: number, p5: number, radius: number, outIncidentID: number): void;
  /**
   *
   * @param {number} incidentType undefined
   */
  export function createIncidentWithEntity(incidentType: number, ped: NativePed, amountOfPeople: number, radius: number, outIncidentID: number): void;
  /**
   *
   * @param {number} incidentId undefined
   */
  export function deleteIncident(incidentId: number): void;
  /**
   *
   * @param {number} incidentId undefined
   */
  export function isIncidentValid(incidentId: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB08B85D860E7BA3C(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD261BA3E7E998072(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function findSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number, spawnPoint: NativeVector3): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x67F6413D3220E18D(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1327E2FE9746BAEE(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB129E447A2EDA4BF(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x32C7A7E8C43A1F80(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE6869BECDD8F2403(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function enableTennisMode(ped: NativePed, toggle: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isTennisMode(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE266ED23311F24D4(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: number, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x17DF68D720AA77F8(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x19BFED045C647C49(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE95B0C7D5BA3B96B(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8FA9C42FC5D7C64B(p0: NativeAny, p1: NativeAny, p2: number, p3: number, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x54F157E0336A3822(p0: NativeAny, p1: string, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD10F442036302D50(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function resetDispatchIdealSpawnDistance(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setDispatchIdealSpawnDistance(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setDispatchTimeBetweenSpawnAttempts(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x918C7B2D2FF3928B(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x2D4259F1FEB81DA9(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function removeDispatchSpawnBlockingArea(p0: NativeAny): void;
  /**
   *
   */
  export function resetDispatchSpawnBlockingAreas(): void;
  /**
   *
   */
  export function _0xD9F692D349249528(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE532EC1A63231B4F(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB8721407EE9C3FF6(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function _0xB3CD58CCA6CDA852(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x2587A48BC88DFADF(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function displayOnscreenKeyboard2(p0: number, windowTitle: string, p2: NativeAny, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, defaultConcat4: string, defaultConcat5: string, defaultConcat6: string, defaultConcat7: string, maxInputLength: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function displayOnscreenKeyboard(p0: number, windowTitle: string, p2: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, maxInputLength: number): void;
  /**
   *
   */
  export function updateOnscreenKeyboard(): void;
  /**
   *
   */
  export function getOnscreenKeyboardResult(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x3ED1438C1F5C6612(p0: number): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function removeStealthKill(hash: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x1EAE0A6E978894A2(p0: number, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setExplosiveAmmoThisFrame(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setFireAmmoThisFrame(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setExplosiveMeleeThisFrame(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setSuperJumpThisFrame(player: NativePlayer): void;
  /**
   *
   */
  export function _0x6FDDF453C0C756EC(): void;
  /**
   *
   */
  export function _0xFB00CA71DA386228(): void;
  /**
   *
   */
  export function _0x5AA3BEFA29F03AD4(): void;
  /**
   *
   */
  export function _0xE3D969D2785FFB5E(): void;
  /**
   *
   */
  export function resetLocalplayerState(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0A60017F841A54F2(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   */
  export function _0x1FF6BF9A63E5757F(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1BB299305C3E8C13(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8EF5573A1F801A5C(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function _0x92790862E36C2ADA(): void;
  /**
   *
   */
  export function _0xC7DB36C24634F52B(): void;
  /**
   *
   */
  export function _0x437138B6A830166A(): void;
  /**
   *
   */
  export function _0x37DEB0AA183FB6D8(): void;
  /**
   *
   */
  export function _0xEA2F2061875EED90(): void;
  /**
   *
   */
  export function _0x3BBBD13E5041A79E(): void;
  /**
   *
   */
  export function _0xA049A5BE0F04F2F8(): void;
  /**
   *
   */
  export function _0x4750FC27570311EC(): void;
  /**
   *
   */
  export function _0x1B2366C3F2A5C8DF(): void;
  /**
   *
   */
  export function forceSocialClubUpdate(): void;
  /**
   *
   */
  export function _0x14832BF2ABA53FC5(): void;
  /**
   *
   */
  export function _0xC79AE21974B01FB2(): void;
  /**
   *
   */
  export function _0x684A41975F077262(): void;
  /**
   *
   */
  export function _0xABB2FA71C83A1B72(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setShowPedInPauseMenu(toggle: NativeBOOL): void;
  /**
   *
   */
  export function getShowPedInPauseMenu(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x9D8D44ADBBA61EF2(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x23227DF0B2115469(): void;
  /**
   *
   */
  export function _0xD10282B6E3751BA0(): void;
  /**
   *
   * @param {string} ringtoneName undefined
   */
  export function playPedRingtone(ringtoneName: string, ped: NativePed, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedRingtonePlaying(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function stopPedRingtone(ped: NativePed): void;
  /**
   *
   */
  export function isMobilePhoneCallOngoing(): void;
  /**
   *
   */
  export function _0xC8B1B2425604CDD0(): void;
  /**
   *
   */
  export function createNewScriptedConversation(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function addLineToConversation(p0: number, p1: string, p2: string, p3: number, p4: number, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: number, p10: NativeBOOL, p11: NativeBOOL, p12: NativeBOOL): void;
  /**
   *
   * @param {number} pedIndex undefined
   */
  export function addPedToConversation(pedIndex: number, ped: NativePed, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x33E3C6C6F2F0B506(p0: NativeAny, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x892B6AB8F33606F5(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setMicrophonePosition(p0: NativeBOOL, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x0B568201DD99F0EB(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x61631F5DF50D1C34(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function startScriptPhoneConversation(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function preloadScriptPhoneConversation(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function startScriptConversation(p0: NativeBOOL, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function preloadScriptConversation(p0: NativeBOOL, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   */
  export function startPreloadedConversation(): void;
  /**
   *
   */
  export function _0xE73364DB90778FFA(): void;
  /**
   *
   */
  export function isScriptedConversationOngoing(): void;
  /**
   *
   */
  export function isScriptedConversationLoaded(): void;
  /**
   *
   */
  export function getCurrentScriptedConversationLine(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function pauseScriptedConversation(p0: NativeBOOL): void;
  /**
   *
   */
  export function restartScriptedConversation(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function stopScriptedConversation(p0: NativeBOOL): void;
  /**
   *
   */
  export function skipToNextScriptedConversationLine(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function interruptConversation(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function _0x8A694D7A68F8DC38(p0: NativePed, p1: string, p2: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xAA19F5572C38B564(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xB542DE8C3D1CB210(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function registerScriptWithAudio(p0: number): void;
  /**
   *
   */
  export function unregisterScriptWithAudio(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function requestMissionAudioBank(p0: string, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function requestAmbientAudioBank(p0: string, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function requestScriptAudioBank(p0: string, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function hintAmbientAudioBank(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function hintScriptAudioBank(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function releaseMissionAudioBank(): void;
  /**
   *
   */
  export function releaseAmbientAudioBank(): void;
  /**
   *
   * @param {string} audioBank undefined
   */
  export function releaseNamedScriptAudioBank(audioBank: string): void;
  /**
   *
   */
  export function releaseScriptAudioBank(): void;
  /**
   *
   */
  export function _0x19AF7ED9B9D23058(): void;
  /**
   *
   */
  export function _0x9AC92EED5E4793AB(): void;
  /**
   *
   */
  export function getSoundId(): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function releaseSoundId(soundId: number): void;
  /**
   *
   * @param {NativePlayer} soundId undefined
   */
  export function playSound(soundId: NativePlayer, audioName: string, audioRef: string, p3: NativeBOOL, p4: NativeAny, p5: NativeBOOL): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function playSoundFrontend(soundId: number, audioName: string, audioRef: string, p3: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xCADA5A0D0702381E(p0: string, soundset: string): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function playSoundFromEntity(soundId: number, audioName: string, entity: NativeEntity, audioRef: string, p4: NativeBOOL, p5: NativeAny): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function playSoundFromCoord(soundId: number, audioName: string, x: number, y: number, z: number, audioRef: string, p6: NativeBOOL, range: number, p8: NativeBOOL): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function stopSound(soundId: number): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function getNetworkIdFromSoundId(soundId: number): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function getSoundIdFromNetworkId(netId: number): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function setVariableOnSound(soundId: number, variableName: string, value: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function setVariableOnStream(p0: string, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function overrideUnderwaterStream(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {string} name undefined
   */
  export function _0x733ADF241531E5C2(name: string, p1: number): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function hasSoundFinished(soundId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function playAmbientSpeech1(ped: NativePed, speechName: string, speechParam: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function playAmbientSpeech2(ped: NativePed, speechName: string, speechParam: string): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function playAmbientSpeechWithVoice(p0: NativePed, speechName: string, voiceName: string, speechParam: string, p4: NativeBOOL): void;
  /**
   *
   * @param {string} speechName undefined
   */
  export function playAmbientSpeechAtCoords(speechName: string, speechParam: string, x: number, y: number, z: number, p5: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function overrideTrevorRage(p0: string): void;
  /**
   *
   */
  export function resetTrevorRage(): void;
  /**
   *
   * @param {NativePed} playerPed undefined
   */
  export function setPlayerAngry(playerPed: NativePed, value: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function playPain(ped: NativePed, painID: number, p1: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xD01005D2BA2EB778(p0: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xDDC635D5B3262C56(p0: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setAmbientVoiceName(ped: NativePed, name: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetAmbientVoice(ped: NativePed): void;
  /**
   *
   * @param {NativePed} playerPed undefined
   */
  export function _0x7CDC8C3B89F661B3(playerPed: NativePed, p1: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA5342D390CDA41D6(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedMute(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function stopCurrentPlayingAmbientSpeech(ped: NativePed): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function isAmbientSpeechPlaying(p0: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function isScriptedSpeechPlaying(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isAnySpeechPlaying(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function canPedSpeak(ped: NativePed, speechName: string, unk: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedInCurrentConversation(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedIsDrunk(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEE066C7006C49C0A(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC265DF9FB44A9FBD(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} animal undefined
   */
  export function setAnimalMood(animal: NativePed, mood: number): void;
  /**
   *
   */
  export function isMobilePhoneRadioActive(): void;
  /**
   *
   * @param {NativeBOOL} state undefined
   */
  export function setMobilePhoneRadioState(state: NativeBOOL): void;
  /**
   *
   */
  export function getPlayerRadioStationIndex(): void;
  /**
   *
   */
  export function getPlayerRadioStationName(): void;
  /**
   *
   * @param {number} radioStation undefined
   */
  export function getRadioStationName(radioStation: number): void;
  /**
   *
   */
  export function getPlayerRadioStationGenre(): void;
  /**
   *
   */
  export function isRadioRetuning(): void;
  /**
   *
   */
  export function _0x0626A247D2405330(): void;
  /**
   *
   */
  export function _0xFF266D1D0EB1195D(): void;
  /**
   *
   */
  export function _0xDD6BCF9E94425DF9(): void;
  /**
   *
   * @param {string} stationName undefined
   */
  export function setRadioToStationName(stationName: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehRadioStation(vehicle: NativeVehicle, radioStation: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleAsAmbientEmmitter(vehicle: NativeVehicle): void;
  /**
   *
   * @param {string} emitterName undefined
   */
  export function setEmitterRadioStation(emitterName: string, radioStation: string): void;
  /**
   *
   * @param {string} emitterName undefined
   */
  export function setStaticEmitterEnabled(emitterName: string, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} radioStation undefined
   */
  export function setRadioToStationIndex(radioStation: number): void;
  /**
   *
   * @param {NativeBOOL} active undefined
   */
  export function setFrontendRadioActive(active: NativeBOOL): void;
  /**
   *
   * @param {number} newsStory undefined
   */
  export function unlockMissionNewsStory(newsStory: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getNumberOfPassengerVoiceVariations(p0: NativeAny): void;
  /**
   *
   */
  export function getAudibleMusicTrackTextId(): void;
  /**
   *
   * @param {NativeBOOL} play undefined
   */
  export function playEndCreditsMusic(play: NativeBOOL): void;
  /**
   *
   */
  export function skipRadioForward(): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function freezeRadioStation(radioStation: string): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function unfreezeRadioStation(radioStation: string): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setRadioAutoUnfreeze(toggle: NativeBOOL): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function setInitialPlayerStation(radioStation: string): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setUserRadioControlEnabled(toggle: NativeBOOL): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function setRadioTrack(radioStation: string, radioTrack: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleRadioLoud(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isVehicleRadioLoud(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeBOOL} Toggle undefined
   */
  export function setMobileRadioEnabledDuringGameplay(Toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0x109697E2FFBAC8A1(): void;
  /**
   *
   */
  export function isPlayerVehicleRadioEnabled(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleRadioEnabled(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function _0x4E404A9361F75BB2(radioStation: string, p1: string, p2: NativeBOOL): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function _0x1654F24A88A8E3FE(radioStation: string): void;
  /**
   *
   */
  export function maxRadioStationIndex(): void;
  /**
   *
   * @param {number} station undefined
   */
  export function findRadioStationIndex(station: number): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function _0x774BD811F656A122(radioStation: string, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x2C96CDB04FCA358E(p0: number): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function _0x031ACB6ABA18C729(radioStation: string, p1: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF3365489E0DD50F9(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setAmbientZoneState(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {string} zoneName undefined
   */
  export function clearAmbientZoneState(zoneName: string, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function setAmbientZoneListState(p0: string, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function clearAmbientZoneListState(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {string} ambientZone undefined
   */
  export function setAmbientZoneStatePersistent(ambientZone: string, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {string} ambientZone undefined
   */
  export function setAmbientZoneListStatePersistent(ambientZone: string, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {string} ambientZone undefined
   */
  export function isAmbientZoneEnabled(ambientZone: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function setCutsceneAudioOverride(p0: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function getPlayerHeadsetSoundAlternate(p0: string, p1: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function playPoliceReport(name: string, p1: number): void;
  /**
   *
   */
  export function disablePoliceReports(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function blipSiren(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function overrideVehHorn(vehicle: NativeVehicle, mute: NativeBOOL, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function isHornActive(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setAggressiveHorns(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x02E93C796ABD3A97(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x58BB377BEC7CD5F4(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   */
  export function isStreamPlaying(): void;
  /**
   *
   */
  export function getStreamPlayTime(): void;
  /**
   *
   * @param {string} streamName undefined
   */
  export function loadStream(streamName: string, soundSet: string): void;
  /**
   *
   * @param {string} streamName undefined
   */
  export function loadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function playStreamFromPed(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function playStreamFromVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function playStreamFromObject(object: NativeObject): void;
  /**
   *
   */
  export function playStreamFrontend(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function specialFrontendEqual(x: number, y: number, z: number): void;
  /**
   *
   */
  export function stopStream(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function stopPedSpeaking(ped: NativePed, speaking: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function disablePedPainAudio(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isAmbientSpeechDisabled(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setSirenWithNoDriver(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function soundVehicleHornThisFrame(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setHornEnabled(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setAudioVehiclePriority(vehicle: NativeVehicle, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9D3AF56E94C9AE98(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function useSirenAsHorn(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function forceVehicleEngineAudio(vehicle: NativeVehicle, audioName: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF1F8157B8C3F171C(p0: NativeAny, p1: string, p2: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD2DCCD8E16E20997(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x5DB8010EE71FDEF2(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x59E7B488451F4D3A(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x01BB4D577D38BD9E(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1C073274E065C6D2(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2BE4BC731D039D5A(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function setVehicleBoostActive(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6FDDAD856E36988A(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x06C0023BED16DD6B(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function playVehicleDoorOpenSound(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function playVehicleDoorCloseSound(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xC15907D667F7CFB2(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   */
  export function isGameInControlOfMusic(): void;
  /**
   *
   * @param {NativeBOOL} active undefined
   */
  export function setGpsActive(active: NativeBOOL): void;
  /**
   *
   * @param {string} audioName undefined
   */
  export function playMissionCompleteAudio(audioName: string): void;
  /**
   *
   */
  export function isMissionCompletePlaying(): void;
  /**
   *
   */
  export function _0x6F259F82D873B8B8(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xF154B8D1775B2DEC(p0: NativeBOOL): void;
  /**
   *
   * @param {string} scene undefined
   */
  export function startAudioScene(scene: string): void;
  /**
   *
   * @param {string} scene undefined
   */
  export function stopAudioScene(scene: string): void;
  /**
   *
   */
  export function stopAudioScenes(): void;
  /**
   *
   * @param {string} scene undefined
   */
  export function isAudioSceneActive(scene: string): void;
  /**
   *
   * @param {string} scene undefined
   */
  export function setAudioSceneVariable(scene: string, variable: string, value: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA5F377B175A699C5(p0: NativeAny): void;
  /**
   *
   * @param {NativeEntity} p0 undefined
   */
  export function dynamicMixerRelatedFn(p0: NativeEntity, p1: string, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x18EB48CFC41F2EA0(p0: NativeAny, p1: number): void;
  /**
   *
   */
  export function audioIsScriptedMusicPlaying(): void;
  /**
   *
   * @param {string} eventName undefined
   */
  export function prepareMusicEvent(eventName: string): void;
  /**
   *
   * @param {string} eventName undefined
   */
  export function cancelMusicEvent(eventName: string): void;
  /**
   *
   * @param {string} eventName undefined
   */
  export function triggerMusicEvent(eventName: string): void;
  /**
   *
   */
  export function _0xA097AB275061FB21(): void;
  /**
   *
   */
  export function getMusicPlaytime(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFBE20329593DEC9D(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   */
  export function clearAllBrokenGlass(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x70B8EC8FC108A634(p0: NativeBOOL, p1: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x149AEE66F0CB3A99(p0: number, p1: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x8BF907833BE275DE(p0: number, p1: number): void;
  /**
   *
   */
  export function _0x062D5EAD4DA2FA6A(): void;
  /**
   *
   * @param {string} alarmName undefined
   */
  export function prepareAlarm(alarmName: string): void;
  /**
   *
   * @param {string} alarmName undefined
   */
  export function startAlarm(alarmName: string, p2: NativeBOOL): void;
  /**
   *
   * @param {string} alarmName undefined
   */
  export function stopAlarm(alarmName: string, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} stop undefined
   */
  export function stopAllAlarms(stop: NativeBOOL): void;
  /**
   *
   * @param {string} alarmName undefined
   */
  export function isAlarmPlaying(alarmName: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleDefaultHorn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function getVehicleHornHash(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function resetPedAudioFlags(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD2CC78CD3D0B50F9(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBF4DC1784BE94DFA(p0: NativeAny, p1: NativeBOOL, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x75773E11BA459E90(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   */
  export function _0xD57AAAE0E2214D11(): void;
  /**
   *
   * @param {NativeBOOL} value undefined
   */
  export function forceAmbientSiren(value: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x43FA0DFC5DF87815(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {string} flagName undefined
   */
  export function setAudioFlag(flagName: string, toggle: NativeBOOL): void;
  /**
   *
   * @param {string} audioName undefined
   */
  export function prepareSynchronizedAudioEvent(audioName: string, unk: NativeBOOL): void;
  /**
   *
   * @param {number} SceneID undefined
   */
  export function prepareSynchronizedAudioEventForScene(SceneID: number, audioName: string): void;
  /**
   *
   * @param {number} SceneID undefined
   */
  export function playSynchronizedAudioEvent(SceneID: number): void;
  /**
   *
   * @param {number} SceneID undefined
   */
  export function stopSynchronizedAudioEvent(SceneID: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC8EDE9BDBCCBA6D4(p0: NativeAny, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function setSynchronizedAudioEventPositionThisFrame(p0: string, p1: NativeEntity): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x12561FCBB62D5B9C(p0: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x044DBAD7A7FA2BE5(p0: string, p1: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xB4BBFD9CD8B3922B(p0: string): void;
  /**
   *
   */
  export function _0xE4E6DD5566D28C82(): void;
  /**
   *
   */
  export function _0x3A48AB4445D499BE(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedTalk(ped: NativePed): void;
  /**
   *
   */
  export function _0x0150B6FF25A9E2E5(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xBEF34B1D9624D5DD(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x806058BBDC136E06(): void;
  /**
   *
   */
  export function _0x544810ED9DB6BBE6(): void;
  /**
   *
   */
  export function _0x5B50ABB1FE3746F4(): void;
  /**
   *
   * @param {string} cutsceneName undefined
   */
  export function requestCutscene(cutsceneName: string, p1: number): void;
  /**
   *
   * @param {string} cutsceneName undefined
   */
  export function requestCutsceneEx(cutsceneName: string, p1: number, p2: number): void;
  /**
   *
   */
  export function removeCutscene(): void;
  /**
   *
   */
  export function hasCutsceneLoaded(): void;
  /**
   *
   * @param {string} cutsceneName undefined
   */
  export function hasThisCutsceneLoaded(cutsceneName: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x8D9DF6ECA8768583(p0: number): void;
  /**
   *
   */
  export function _0xB56BBBCC2955D9CB(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x71B74D2AE19338D0(p0: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x4C61C75BEE8184C2(p0: string, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x06A3524161C502BA(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA1C996C2A744262E(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD00D76A7DFC9D852(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0ABC54DE641DC0FC(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function startCutscene(p0: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function startCutsceneAtCoords(x: number, y: number, z: number, p3: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function stopCutscene(p0: NativeBOOL): void;
  /**
   *
   */
  export function stopCutsceneImmediately(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setCutsceneOrigin(x: number, y: number, z: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x011883F41211432A(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   */
  export function getCutsceneTime(): void;
  /**
   *
   */
  export function getCutsceneTotalDuration(): void;
  /**
   *
   */
  export function wasCutsceneSkipped(): void;
  /**
   *
   */
  export function hasCutsceneFinished(): void;
  /**
   *
   */
  export function isCutsceneActive(): void;
  /**
   *
   */
  export function isCutscenePlaying(): void;
  /**
   *
   */
  export function getCutsceneSectionPlaying(): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: NativeHash): void;
  /**
   *
   */
  export function _0x583DF8E3D4AFBD98(): void;
  /**
   *
   * @param {string} cutsceneName undefined
   */
  export function _0x4CEBC1ED31E8925E(cutsceneName: string): void;
  /**
   *
   * @param {NativePed} cutscenePed undefined
   */
  export function registerEntityForCutscene(cutscenePed: NativePed, cutsceneEntName: string, p2: number, modelHash: NativeHash, p4: number): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function _0x7F96F23FA9B73327(modelHash: NativeHash): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function canSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: NativeHash): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function canSetExitStateForCamera(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function _0xC61B86C9F61EB404(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setCutsceneFadeValues(p0: NativeBOOL, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x20746F7B1032A3C7(p0: NativeBOOL, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x06EE9048FD080382(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xA0FE76168A189DDB(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x2F137B508DE238F2(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xE36A98D8AB3D3C66(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x5EDEF0CF8C1DAB3C(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x41FAA8FB2ECE8720(p0: NativeBOOL): void;
  /**
   *
   */
  export function registerSynchronisedScriptSpeech(): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function setCutscenePedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: NativeHash): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function _0x2A56C06EBEF2B0D9(cutsceneEntName: string, ped: NativePed, modelHash: NativeHash): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function doesCutsceneEntityExist(cutsceneEntName: string, modelHash: NativeHash): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function setCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: NativeHash): void;
  /**
   *
   */
  export function _0x708BDD8CD795B043(): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function getInteriorGroupId(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function getOffsetFromInteriorInWorldCoords(interiorID: number, x: number, y: number, z: number): void;
  /**
   *
   */
  export function isInteriorScene(): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function isValidInterior(interiorID: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function clearRoomForEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function forceRoomForEntity(entity: NativeEntity, interiorID: number, roomHashKey: NativeHash): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getRoomKeyFromEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getKeyForEntityInRoom(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getInteriorFromEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x82EBB79E258FA2B7(entity: NativeEntity, interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function _0x920D853F3E17F1DA(interiorID: number, roomHashKey: NativeHash): void;
  /**
   *
   * @param {string} roomName undefined
   */
  export function _0xAF348AFCB575A441(roomName: string): void;
  /**
   *
   * @param {NativeHash} roomHashKey undefined
   */
  export function _0x405DC2AEF6AF95B9(roomHashKey: NativeHash): void;
  /**
   *
   */
  export function getRoomKeyFromGameplayCam(): void;
  /**
   *
   */
  export function _0x23B59D8912F94246(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getInteriorAtCoords(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function addPickupToInteriorRoomByName(pickup: NativePickup, roomName: string): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function loadInterior(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function unpinInterior(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function isInteriorReady(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function _0x4C2330E61D3DEB56(interiorID: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): void;
  /**
   *
   * @param {number} x undefined
   */
  export function unkGetInteriorAtCoords(x: number, y: number, z: number, unk: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function areCoordsCollidingWithExterior(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getInteriorFromCollision(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function enableInteriorProp(interiorID: number, propName: string): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function disableInteriorProp(interiorID: number, propName: string): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function isInteriorPropEnabled(interiorID: number, propName: string): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function refreshInterior(interiorID: number): void;
  /**
   *
   * @param {NativeHash} mapObjectHash undefined
   */
  export function hideMapObjectThisFrame(mapObjectHash: NativeHash): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function disableInterior(interiorID: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function isInteriorDisabled(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function capInterior(interiorID: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function isInteriorCapped(interiorID: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function _0x9E6542F0CE8E70A3(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} render undefined
   */
  export function renderScriptCams(render: NativeBOOL, ease: NativeBOOL, easeTime: number, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} render undefined
   */
  export function renderFirstPersonCam(render: NativeBOOL, p1: number, p2: number): void;
  /**
   *
   * @param {string} camName undefined
   */
  export function createCam(camName: string, unk: NativeBOOL): void;
  /**
   *
   * @param {string} camName undefined
   */
  export function createCamWithParams(camName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: NativeBOOL, p9: number): void;
  /**
   *
   * @param {NativeHash} camHash undefined
   */
  export function createCamera(camHash: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} camHash undefined
   */
  export function createCameraWithParams(camHash: NativeHash, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: NativeBOOL, p9: NativeAny): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function destroyCam(cam: NativeCam, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} thisScriptCheck undefined
   */
  export function destroyAllCams(thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function doesCamExist(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamActive(cam: NativeCam, active: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function isCamActive(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function isCamRendering(cam: NativeCam): void;
  /**
   *
   */
  export function getRenderingCam(): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamCoord(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamRot(cam: NativeCam, rotationOrder: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamFov(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamNearClip(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamFarClip(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamFarDof(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamParams(cam: NativeCam, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fieldOfView: number, p8: NativeAny, p9: number, p10: number, p11: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamCoord(cam: NativeCam, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamRot(cam: NativeCam, pitch: number, roll: number, yaw: number, rotationOrder: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamFov(cam: NativeCam, fieldOfView: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamNearClip(cam: NativeCam, nearClip: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamFarClip(cam: NativeCam, farClip: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamMotionBlurStrength(cam: NativeCam, strength: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamNearDof(cam: NativeCam, nearDOF: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamFarDof(cam: NativeCam, farDOF: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamDofStrength(cam: NativeCam, dofStrength: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamDofPlanes(cam: NativeCam, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamUseShallowDofMode(cam: NativeCam, toggle: NativeBOOL): void;
  /**
   *
   */
  export function setUseHiDof(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF55E4046F6F831DC(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE111A7C0D200CBC5(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function setCamDofFnumberOfLens(camera: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function setCamDofFocusDistanceBias(camera: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function setCamDofMaxNearInFocusDistance(camera: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function setCamDofMaxNearInFocusDistanceBlendLevel(camera: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function attachCamToEntity(cam: NativeCam, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, isRelative: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function attachCamToPedBone(cam: NativeCam, ped: NativePed, boneIndex: number, x: number, y: number, z: number, heading: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function detachCam(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamInheritRollVehicle(cam: NativeCam, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function pointCamAtCoord(cam: NativeCam, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function pointCamAtEntity(cam: NativeCam, entity: NativeEntity, p2: number, p3: number, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function pointCamAtPedBone(cam: NativeCam, ped: number, boneIndex: number, x: number, y: number, z: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function stopCamPointing(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamAffectsAiming(cam: NativeCam, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x661B5C8654ADD825(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA2767257A320FC82(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x271017B9BA825366(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function setCamDebugName(camera: NativeCam, name: string): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function addCamSplineNode(camera: NativeCam, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, length: number, p8: number, transitionType: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0A9F2A468B328E74(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0FB82563989CF4FB(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x609278246A29CA34(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamSplinePhase(cam: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamSplinePhase(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamSplineNodePhase(cam: NativeCam): void;
  /**
   *
   * @param {number} cam undefined
   */
  export function setCamSplineDuration(cam: number, timeDuration: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD1B0F412F109EA5D(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamSplineNodeIndex(cam: NativeCam): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x83B8201ED82A9A2D(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA6385DEB180F319F(p0: NativeAny, p1: NativeAny, p2: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function overrideCamSplineVelocity(cam: NativeCam, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function overrideCamSplineMotionBlur(cam: NativeCam, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7BF1A54AE67AC070(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function isCamSplinePaused(p0: NativeAny): void;
  /**
   *
   * @param {NativeCam} camTo undefined
   */
  export function setCamActiveWithInterp(camTo: NativeCam, camFrom: NativeCam, duration: number, easeLocation: number, easeRotation: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function isCamInterpolating(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function shakeCam(cam: NativeCam, type: string, amplitude: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function animatedShakeCam(cam: NativeCam, p1: string, p2: string, p3: string, amplitude: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function isCamShaking(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamShakeAmplitude(cam: NativeCam, amplitude: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function stopCamShaking(cam: NativeCam, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xF4C8CF9E353AFECA(p0: string, p1: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xC2EAE3FB8CDBED31(p0: string, p1: string, p2: string, p3: number): void;
  /**
   *
   */
  export function isScriptGlobalShaking(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function stopScriptGlobalShaking(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function playCamAnim(cam: NativeCam, animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p9: NativeBOOL, p10: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function isCamPlayingAnim(cam: NativeCam, animName: string, animDictionary: string): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCamAnimCurrentPhase(cam: NativeCam, phase: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function getCamAnimCurrentPhase(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function playSynchronizedCamAnim(camera: NativeCam, SceneID: number, animName: string, animDictionary: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x503F5920162365B2(p0: NativeAny, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function setCameraRange(cam: NativeCam, range: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC91C6C55199308CA(p0: NativeAny, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeCam} p0 undefined
   */
  export function _0xC8B5C4A79CC18B94(p0: NativeCam): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5C48A1D6E3B33179(p0: NativeAny): void;
  /**
   *
   */
  export function isScreenFadedOut(): void;
  /**
   *
   */
  export function isScreenFadedIn(): void;
  /**
   *
   */
  export function isScreenFadingOut(): void;
  /**
   *
   */
  export function isScreenFadingIn(): void;
  /**
   *
   * @param {number} duration undefined
   */
  export function doScreenFadeIn(duration: number): void;
  /**
   *
   * @param {number} duration undefined
   */
  export function doScreenFadeOut(duration: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setWidescreenBorders(p0: NativeBOOL, p1: number): void;
  /**
   *
   */
  export function getGameplayCamCoord(): void;
  /**
   *
   * @param {number} rotationOrder undefined
   */
  export function getGameplayCamRot(rotationOrder: number): void;
  /**
   *
   */
  export function getGameplayCamFov(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function customMenuCoordinates(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x0225778816FDC28C(p0: number): void;
  /**
   *
   */
  export function getGameplayCamRelativeHeading(): void;
  /**
   *
   * @param {number} heading undefined
   */
  export function setGameplayCamRelativeHeading(heading: number): void;
  /**
   *
   */
  export function getGameplayCamRelativePitch(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setGameplayCamRelativePitch(x: number, Value2: number): void;
  /**
   *
   * @param {number} yaw undefined
   */
  export function setGameplayCamRawYaw(yaw: number): void;
  /**
   *
   * @param {number} pitch undefined
   */
  export function setGameplayCamRawPitch(pitch: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x469F2ECDEC046337(p0: NativeBOOL): void;
  /**
   *
   * @param {string} shakeName undefined
   */
  export function shakeGameplayCam(shakeName: string, intensity: number): void;
  /**
   *
   */
  export function isGameplayCamShaking(): void;
  /**
   *
   * @param {number} amplitude undefined
   */
  export function setGameplayCamShakeAmplitude(amplitude: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function stopGameplayCamShaking(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8BBACBF51DA047A8(p0: NativeAny): void;
  /**
   *
   */
  export function isGameplayCamRendering(): void;
  /**
   *
   */
  export function _0x3044240D2E0FA842(): void;
  /**
   *
   */
  export function _0x705A276EBFF3133D(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xDB90C6CCA48940F1(p0: NativeBOOL): void;
  /**
   *
   */
  export function enableCrosshairThisFrame(): void;
  /**
   *
   */
  export function isGameplayCamLookingBehind(): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x2AED6301F67007D5(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x49482F9FCD825AAA(entity: NativeEntity): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFD3151CD37EA2245(p0: NativeAny): void;
  /**
   *
   */
  export function _0xDD79DF9F4D26E1C9(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function isSphereVisible(x: number, y: number, z: number, radius: number): void;
  /**
   *
   */
  export function isFollowPedCamActive(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function setFollowPedCamCutsceneChat(p0: string, p1: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x271401846BD26E92(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   */
  export function _0xC8391C309684595A(): void;
  /**
   *
   * @param {number} minimum undefined
   */
  export function clampGameplayCamYaw(minimum: number, maximum: number): void;
  /**
   *
   * @param {number} minimum undefined
   */
  export function clampGameplayCamPitch(minimum: number, maximum: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function animateGameplayCamZoom(p0: number, distance: number): void;
  /**
   *
   * @param {NativeVehicle} p0 undefined
   */
  export function _0xE9EA16D6E54CDCA4(p0: NativeVehicle, p1: number): void;
  /**
   *
   */
  export function disableFirstPersonCamThisFrame(): void;
  /**
   *
   */
  export function _0x59424BD75174C9B1(): void;
  /**
   *
   */
  export function getFollowPedCamZoomLevel(): void;
  /**
   *
   */
  export function getFollowPedCamViewMode(): void;
  /**
   *
   * @param {number} viewMode undefined
   */
  export function setFollowPedCamViewMode(viewMode: number): void;
  /**
   *
   */
  export function isFollowVehicleCamActive(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x91EF6EE6419E5B97(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setTimeIdleDrop(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   */
  export function getFollowVehicleCamZoomLevel(): void;
  /**
   *
   * @param {number} zoomLevel undefined
   */
  export function setFollowVehicleCamZoomLevel(zoomLevel: number): void;
  /**
   *
   */
  export function getFollowVehicleCamViewMode(): void;
  /**
   *
   * @param {number} viewMode undefined
   */
  export function setFollowVehicleCamViewMode(viewMode: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEE778F8C7E1142E2(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2A2173E46DAECD12(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0x19CAFA3C87F7C2FF(): void;
  /**
   *
   */
  export function isAimCamActive(): void;
  /**
   *
   */
  export function _0x74BD83EA840F6BC9(): void;
  /**
   *
   */
  export function isFirstPersonAimCamActive(): void;
  /**
   *
   */
  export function disableAimCamThisUpdate(): void;
  /**
   *
   */
  export function getGameplayCamZoom(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x70894BD0915C5BCA(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xCED08CBE8EBB97C7(p0: number, p1: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x2F7F2B26DD3F18EE(p0: number, p1: number): void;
  /**
   *
   * @param {number} minAngle undefined
   */
  export function setFirstPersonCamPitchRange(minAngle: number, maxAngle: number): void;
  /**
   *
   * @param {number} distance undefined
   */
  export function setFirstPersonCamNearClip(distance: number): void;
  /**
   *
   * @param {number} distance undefined
   */
  export function setThirdPersonAimCamNearClip(distance: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x4008EDF7D6E48175(p0: NativeBOOL): void;
  /**
   *
   */
  export function getGameplayCamCoords(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x26903D9CD1175F2C(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0x80EC114669DAEFF4(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5F35F6732C3FBBA0(p0: NativeAny): void;
  /**
   *
   */
  export function _0xD0082607100D7193(): void;
  /**
   *
   */
  export function getGameplayCamFarClip(): void;
  /**
   *
   */
  export function getGameplayCamNearDof(): void;
  /**
   *
   */
  export function getGameplayCamFarDof(): void;
  /**
   *
   */
  export function _0x162F9D995753DC19(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setGameplayCoordHint(x: number, y: number, z: number, duration: number, blendOutDuration: number, blendInDuration: number, unk: number): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function setGameplayPedHint(p0: NativePed, x1: number, y1: number, z1: number, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setGameplayVehicleHint(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setGameplayObjectHint(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setGameplayEntityHint(entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, p4: NativeBOOL, duration: number, fadeInTime: number, fadeOutTime: number, flags: number): void;
  /**
   *
   */
  export function isGameplayHintActive(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function stopGameplayHint(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xCCD078C2665D2973(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x247ACBC4ABBC9D1C(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xBF72910D0F26F025(): void;
  /**
   *
   * @param {number} FOV undefined
   */
  export function setGameplayHintFov(FOV: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xF8BDBF3D573049A1(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xD1F8363DFAD03848(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x5D7B620DAE436138(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xC92717EF615B6704(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function getIsMultiplayerBrief(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setCinematicButtonActive(p0: NativeBOOL): void;
  /**
   *
   */
  export function isCinematicCamRendering(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function shakeCinematicCam(p0: string, p1: number): void;
  /**
   *
   */
  export function isCinematicCamShaking(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setCinematicCamShakeAmplitude(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function stopCinematicCamShaking(p0: NativeBOOL): void;
  /**
   *
   */
  export function disableVehicleFirstPersonCamThisFrame(): void;
  /**
   *
   */
  export function _0x62ECFCFDEE7885D6(): void;
  /**
   *
   */
  export function _0x9E4CFFF989258472(): void;
  /**
   *
   */
  export function _0xF4F2C0D4EE209E20(): void;
  /**
   *
   */
  export function _0xCA9D2AA3E326D720(): void;
  /**
   *
   */
  export function isInVehicleCamDisabled(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function createCinematicShot(p0: NativeAny, p1: number, p2: NativeAny, entity: NativeEntity): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function isCinematicShotActive(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function stopCinematicShot(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xA41BCD7213805AAC(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xDC9DA9E8789F5246(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setCinematicModeActive(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x1F2300CB7FA7B7F6(): void;
  /**
   *
   */
  export function _0x17FCA7199A530203(): void;
  /**
   *
   */
  export function stopCutsceneCamShaking(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x12DED8CA53D47EA5(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x89215EC747DF244A(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
  /**
   *
   */
  export function _0x5A43C76F7FC7BA5F(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setCamEffect(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5C41E6BABC9E2112(p0: NativeAny): void;
  /**
   *
   * @param {string} vehicleName undefined
   */
  export function _0x21E253A7F8DA5DFB(vehicleName: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x11FA5D3479C7DD47(p0: NativeAny): void;
  /**
   *
   */
  export function _0xEAF0FA793D05C592(): void;
  /**
   *
   */
  export function getReplayFreeCamMaxRange(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function enableLaserSightRendering(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function getWeaponComponentTypeModel(componentHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function getWeapontypeModel(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function getWeapontypeSlot(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function getWeapontypeGroup(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setCurrentPedWeapon(ped: NativePed, weaponHash: NativeHash, equipNow: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getCurrentPedWeapon(ped: NativePed, weaponHash: NativeHash, unused: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getCurrentPedWeaponEntityIndex(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getBestPedWeapon(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setCurrentPedVehicleWeapon(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getCurrentPedVehicleWeapon(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedArmed(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function isWeaponValid(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function hasPedGotWeapon(ped: NativePed, weaponHash: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedWeaponReadyToShoot(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedWeapontypeInSlot(ped: NativePed, weaponSlot: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getAmmoInPedWeapon(ped: NativePed, weaponhash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function addAmmoToPed(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAmmo(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedInfiniteAmmo(ped: NativePed, toggle: NativeBOOL, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedInfiniteAmmoClip(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function giveWeaponToPed(ped: NativePed, weaponHash: NativeHash, ammoCount: number, isHidden: NativeBOOL, equipNow: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function giveDelayedWeaponToPed(ped: NativePed, weaponHash: NativeHash, ammoCount: number, equipNow: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function removeAllPedWeapons(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function removeWeaponFromPed(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function hidePedWeaponForScriptedCutscene(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedCurrentWeaponVisible(ped: NativePed, visible: NativeBOOL, deselectWeapon: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDropsWeaponsWhenDead(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function hasPedBeenDamagedByWeapon(ped: NativePed, weaponHash: NativeHash, weaponType: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function clearPedLastWeaponDamage(ped: NativePed): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function hasEntityBeenDamagedByWeapon(entity: NativeEntity, weaponHash: NativeHash, weaponType: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function clearEntityLastWeaponDamage(entity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDropsWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedDropsInventoryWeapon(ped: NativePed, weaponHash: NativeHash, xOffset: number, yOffset: number, zOffset: number, ammoCount: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getMaxAmmoInClip(ped: NativePed, weaponHash: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getAmmoInClip(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setAmmoInClip(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getMaxAmmo(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedAmmoByType(ped: NativePed, ammoType: NativeAny, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedAmmoByType(ped: NativePed, ammoType: NativeAny): void;
  /**
   *
   * @param {NativeAny} ammoType undefined
   */
  export function setPedAmmoToDrop(ammoType: NativeAny, ammo: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xE620FD3512A04F18(p0: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedAmmoTypeFromWeapon(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedLastWeaponImpactCoord(ped: NativePed, coords: NativeVector3): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedGadget(ped: NativePed, gadgetHash: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getIsPedGadgetEquipped(ped: NativePed, gadgetHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getSelectedPedWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function explodeProjectiles(ped: NativePed, weaponHash: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function removeAllProjectilesOfType(weaponHash: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getLockonRangeOfCurrentPedWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getMaxRangeOfCurrentPedWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function hasVehicleGotProjectileAttached(driver: NativePed, vehicle: NativeVehicle, weaponHash: NativeHash, p3: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function giveWeaponComponentToPed(ped: NativePed, weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function removeWeaponComponentFromPed(ped: NativePed, weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function hasPedGotWeaponComponent(ped: NativePed, weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedWeaponComponentActive(ped: NativePed, weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function pedSkipNextReloading(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function makePedReload(ped: NativePed): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function requestWeaponAsset(weaponHash: NativeHash, p1: number, p2: number): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function hasWeaponAssetLoaded(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function removeWeaponAsset(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function createWeaponObject(weaponHash: NativeHash, ammoCount: number, x: number, y: number, z: number, showWorldModel: NativeBOOL, heading: number, p7: NativeAny): void;
  /**
   *
   * @param {NativeObject} weaponObject undefined
   */
  export function giveWeaponComponentToWeaponObject(weaponObject: NativeObject, addonHash: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function removeWeaponComponentFromWeaponObject(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeObject} weapon undefined
   */
  export function hasWeaponGotWeaponComponent(weapon: NativeObject, addonHash: NativeHash): void;
  /**
   *
   * @param {NativeObject} weaponObject undefined
   */
  export function giveWeaponObjectToPed(weaponObject: NativeObject, ped: NativePed): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function doesWeaponTakeWeaponComponent(weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getWeaponObjectFromPed(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedWeaponTintIndex(ped: NativePed, weaponHash: NativeHash, tintIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getPedWeaponTintIndex(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeObject} weapon undefined
   */
  export function setWeaponObjectTintIndex(weapon: NativeObject, tintIndex: number): void;
  /**
   *
   * @param {NativeObject} weapon undefined
   */
  export function getWeaponObjectTintIndex(weapon: NativeObject): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function getWeaponTintCount(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function getWeaponHudStats(weaponHash: NativeHash, outData: NativeAny): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function getWeaponComponentHudStats(componentHash: NativeHash, outData: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3133B907D8B32053(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function getWeaponClipSize(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setPedChanceOfFiringBlanks(ped: NativePed, xBias: number, yBias: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xB4C8D77C80C0421E(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativeEntity} weaponObject undefined
   */
  export function requestWeaponHighDetailModel(weaponObject: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isPedCurrentWeaponSilenced(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setWeaponSmokegrenadeAssigned(ped: NativePed): void;
  /**
   *
   * @param {number} distance undefined
   */
  export function setFlashLightFadeDistance(distance: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setWeaponAnimationOverride(ped: NativePed, animStyle: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function getWeaponDamageType(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xE4DCEC7FD5B739A5(ped: NativePed): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function canUseWeaponOnParachute(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} distri undefined
   */
  export function createItemset(distri: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function destroyItemset(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function isItemsetValid(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function addToItemset(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function removeFromItemset(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeScrHandle} x undefined
   */
  export function getItemsetSize(x: NativeScrHandle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getIndexedItemInItemset(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function isInItemset(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function cleanItemset(p0: NativeAny): void;
  /**
   *
   */
  export function loadAllObjectsNow(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function loadScene(x: number, y: number, z: number): void;
  /**
   *
   */
  export function networkUpdateLoadScene(): void;
  /**
   *
   */
  export function isNetworkLoadingScene(): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function setInteriorActive(interiorID: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function requestModel(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function requestMenuPedModel(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function hasModelLoaded(model: NativeHash): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function requestInteriorRoomByName(interiorID: number, roomName: string): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function setModelAsNoLongerNeeded(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isModelInCdimage(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isModelValid(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function isModelAVehicle(model: NativeHash): void;
  /**
   *
   * @param {number} x undefined
   */
  export function requestCollisionAtCoord(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function requestCollisionForModel(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function hasCollisionForModelLoaded(model: NativeHash): void;
  /**
   *
   * @param {number} x undefined
   */
  export function requestAdditionalCollisionAtCoord(x: number, y: number, z: number): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function doesAnimDictExist(animDict: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function requestAnimDict(animDict: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function hasAnimDictLoaded(animDict: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function removeAnimDict(animDict: string): void;
  /**
   *
   * @param {string} animSet undefined
   */
  export function requestAnimSet(animSet: string): void;
  /**
   *
   * @param {string} animSet undefined
   */
  export function hasAnimSetLoaded(animSet: string): void;
  /**
   *
   * @param {string} animSet undefined
   */
  export function removeAnimSet(animSet: string): void;
  /**
   *
   * @param {string} clipSet undefined
   */
  export function requestClipSet(clipSet: string): void;
  /**
   *
   * @param {string} clipSet undefined
   */
  export function hasClipSetLoaded(clipSet: string): void;
  /**
   *
   * @param {string} clipSet undefined
   */
  export function removeClipSet(clipSet: string): void;
  /**
   *
   * @param {string} iplName undefined
   */
  export function requestIpl(iplName: string): void;
  /**
   *
   * @param {string} iplName undefined
   */
  export function removeIpl(iplName: string): void;
  /**
   *
   * @param {string} iplName undefined
   */
  export function isIplActive(iplName: string): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setStreaming(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setGamePausesForStreaming(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setReducePedModelBudget(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setReduceVehicleModelBudget(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setDitchPoliceModels(toggle: NativeBOOL): void;
  /**
   *
   */
  export function getNumberOfStreamingRequests(): void;
  /**
   *
   */
  export function requestPtfxAsset(): void;
  /**
   *
   */
  export function hasPtfxAssetLoaded(): void;
  /**
   *
   */
  export function removePtfxAsset(): void;
  /**
   *
   * @param {string} assetName undefined
   */
  export function requestNamedPtfxAsset(assetName: string): void;
  /**
   *
   * @param {string} assetName undefined
   */
  export function hasNamedPtfxAssetLoaded(assetName: string): void;
  /**
   *
   * @param {string} assetName undefined
   */
  export function removeNamedPtfxAsset(assetName: string): void;
  /**
   *
   * @param {number} budget undefined
   */
  export function setVehiclePopulationBudget(budget: number): void;
  /**
   *
   * @param {number} budget undefined
   */
  export function setPedPopulationBudget(budget: number): void;
  /**
   *
   */
  export function clearFocus(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setFocusEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityFocus(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} p0 undefined
   */
  export function _0x0811381EF5062FEC(p0: NativeEntity): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xAF12610C644A35C9(p0: string, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x4E52E752C76E7E7A(p0: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function formatFocusHeading(x: number, y: number, z: number, rad: number, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x1F3F018BC3AFA77C(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeAny, p8: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x0AD9710CEE2F590F(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1EE7D8DF4425F053(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7D41E9D2D17C5B2D(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x07C313F94746702C(p0: NativeAny): void;
  /**
   *
   */
  export function _0xBC9823AB80A3DCAC(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function newLoadSceneStart(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function newLoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: NativeAny): void;
  /**
   *
   */
  export function newLoadSceneStop(): void;
  /**
   *
   */
  export function isNewLoadSceneActive(): void;
  /**
   *
   */
  export function isNewLoadSceneLoaded(): void;
  /**
   *
   */
  export function _0x71E7B2E657449AAD(): void;
  /**
   *
   * @param {NativePed} from undefined
   */
  export function startPlayerSwitch(from: NativePed, to: NativePed, flags: number, switchType: number): void;
  /**
   *
   */
  export function stopPlayerSwitch(): void;
  /**
   *
   */
  export function isPlayerSwitchInProgress(): void;
  /**
   *
   */
  export function getPlayerSwitchType(): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function getIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   */
  export function getPlayerSwitchState(): void;
  /**
   *
   */
  export function getPlayerShortSwitchState(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x5F2013F8BC24EE69(p0: number): void;
  /**
   *
   */
  export function _0x78C0D93253149435(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setPlayerSwitchOutro(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0FDE9DBFC0A6BC65(p0: NativeAny): void;
  /**
   *
   */
  export function _0x43D1680C6D19A8E9(): void;
  /**
   *
   */
  export function _0x74DE2E8739086740(): void;
  /**
   *
   */
  export function _0x8E2A065ABDAE6994(): void;
  /**
   *
   */
  export function _0xAD5FDF34B81BFE79(): void;
  /**
   *
   */
  export function _0xDFA80CB25D0A19B3(): void;
  /**
   *
   */
  export function _0xD4793DFF3AF2ABCD(): void;
  /**
   *
   */
  export function _0xBD605B8E0E18B3BB(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function switchOutPlayer(ped: NativePed, flags: number, switchType: number): void;
  /**
   *
   */
  export function _0x933BBEEB8C61B5F4(): void;
  /**
   *
   */
  export function setPlayerInvertedUp(): void;
  /**
   *
   */
  export function _0x5B48A06DD0E792A5(): void;
  /**
   *
   */
  export function destroyPlayerInPauseMenu(): void;
  /**
   *
   */
  export function _0x1E9057A74FD73E23(): void;
  /**
   *
   */
  export function _0x0C15B0E443B2349D(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xA76359FC80B2438E(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xBED8CA5FF5E04113(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   */
  export function _0x472397322E92A856(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x40AEFD1A244741F2(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x03F1A106BDA7DD3E(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x95A7DABDDBB78AE7(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0x63EB2B972A218CAC(): void;
  /**
   *
   */
  export function _0xFB199266061F820A(): void;
  /**
   *
   */
  export function _0xF4A0DADB70F57FA6(): void;
  /**
   *
   */
  export function _0x5068F488DDB54DD8(): void;
  /**
   *
   * @param {string} srl undefined
   */
  export function prefetchSrl(srl: string): void;
  /**
   *
   */
  export function isSrlLoaded(): void;
  /**
   *
   */
  export function beginSrl(): void;
  /**
   *
   */
  export function endSrl(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setSrlTime(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEF39EE20C537E98C(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBEB2D9A1D9A8F55A(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x20C6C7E4EB082A7F(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF8155A7F03DDFC8E(p0: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setHdArea(x: number, y: number, z: number, radius: number): void;
  /**
   *
   */
  export function clearHdArea(): void;
  /**
   *
   */
  export function loadMissionCreatorData(): void;
  /**
   *
   */
  export function shutdownCreatorBudget(): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function _0x0BC3144DEB678666(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF086AD9354FAC3A3(p0: NativeAny): void;
  /**
   *
   */
  export function _0x3D3D8B3BE5A83D35(): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function requestScript(scriptName: string): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function setScriptAsNoLongerNeeded(scriptName: string): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function hasScriptLoaded(scriptName: string): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function doesScriptExist(scriptName: string): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function requestScriptWithNameHash(scriptHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function setScriptWithNameHashAsNoLongerNeeded(scriptHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function hasScriptWithNameHashLoaded(scriptHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function doesScriptWithNameHashExist(scriptHash: NativeHash): void;
  /**
   *
   * @param {number} threadId undefined
   */
  export function terminateThread(threadId: number): void;
  /**
   *
   * @param {number} threadId undefined
   */
  export function isThreadActive(threadId: number): void;
  /**
   *
   * @param {number} threadId undefined
   */
  export function getNameOfThread(threadId: number): void;
  /**
   *
   */
  export function beginEnumeratingThreads(): void;
  /**
   *
   */
  export function getIdOfNextThreadInEnumeration(): void;
  /**
   *
   */
  export function getIdOfThisThread(): void;
  /**
   *
   */
  export function terminateThisThread(): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function getNumberOfInstancesOfScriptWithNameHash(scriptHash: NativeHash): void;
  /**
   *
   */
  export function getThisScriptName(): void;
  /**
   *
   */
  export function getHashOfThisScriptName(): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function getNumberOfEvents(eventGroup: number): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function getEventExists(eventGroup: number, eventIndex: number): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function getEventAtIndex(eventGroup: number, eventIndex: number): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function getEventData(eventGroup: number, eventIndex: number, argStruct: number, argStructSize: number): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function triggerScriptEvent(eventGroup: number, args: NativeAny, argCount: number, bit: NativeAny): void;
  /**
   *
   */
  export function shutdownLoadingScreen(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setNoLoadingScreen(toggle: NativeBOOL): void;
  /**
   *
   */
  export function getNoLoadingScreen(): void;
  /**
   *
   */
  export function _0xB1577667C3708F9B(): void;
  /**
   *
   * @param {string} string undefined
   */
  export function beginTextCommandBusyString(string: string): void;
  /**
   *
   * @param {number} busySpinnerType undefined
   */
  export function endTextCommandBusyString(busySpinnerType: number): void;
  /**
   *
   */
  export function removeLoadingPrompt(): void;
  /**
   *
   */
  export function _0xC65AB383CD91DF98(): void;
  /**
   *
   */
  export function isLoadingPromptBeingDisplayed(): void;
  /**
   *
   */
  export function _0xB2A592B04648A9CB(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x9245E81072704B8A(p0: NativeBOOL): void;
  /**
   *
   */
  export function showCursorThisFrame(): void;
  /**
   *
   * @param {number} spriteId undefined
   */
  export function setCursorSprite(spriteId: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x98215325A695E78A(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x3D9ACB1EB139E702(): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function _0x632B2940C67F4EA9(scaleformHandle: number, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x6F1554B0CC2089FA(p0: NativeBOOL): void;
  /**
   *
   * @param {number} pos undefined
   */
  export function clearNotificationsPos(pos: number): void;
  /**
   *
   */
  export function _0x25F87B30C382FCA7(): void;
  /**
   *
   */
  export function _0xA8FDB297A8D25FBA(): void;
  /**
   *
   * @param {number} notificationId undefined
   */
  export function removeNotification(notificationId: number): void;
  /**
   *
   */
  export function _0xA13C11E1B5C06BFC(): void;
  /**
   *
   */
  export function _0x583049884A2EEE3C(): void;
  /**
   *
   */
  export function _0xFDB423997FA30340(): void;
  /**
   *
   */
  export function _0xE1CD1E48E025E661(): void;
  /**
   *
   */
  export function _0xA9CBFD40B3FA3010(): void;
  /**
   *
   */
  export function _0xD4438C0564490E63(): void;
  /**
   *
   */
  export function _0xB695E2CD0A2DA9EE(): void;
  /**
   *
   */
  export function getCurrentNotification(): void;
  /**
   *
   */
  export function _0x56C8B608CFD49854(): void;
  /**
   *
   */
  export function _0xADED7F5748ACAFE6(): void;
  /**
   *
   * @param {number} hudIndex undefined
   */
  export function setNotificationBackgroundColor(hudIndex: number): void;
  /**
   *
   * @param {number} red undefined
   */
  export function setNotificationFlashColor(red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x17AD8C9706BDD88A(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x4A0C7C9BB10ABB36(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xFDD85225B2DEA55E(): void;
  /**
   *
   */
  export function _0xFDEC055AB549E328(): void;
  /**
   *
   */
  export function _0x80FE4F3AB4E1B62A(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xBAE4F9B97CD43B30(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x317EBA71D7543F52(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {string} text undefined
   */
  export function setNotificationTextEntry(text: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function setNotificationMessage(picName1: string, picName2: number, flash: NativeBOOL, iconType: number, p4: NativeBOOL, sender: string, subject: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function setNotificationMessage2(picName1: string, picName2: string, flash: NativeBOOL, iconType: number, sender: string, subject: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function setNotificationMessage3(picName1: string, picName2: string, p2: NativeBOOL, p3: NativeAny, p4: string, p5: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function setNotificationMessage4(picName1: string, picName2: string, flash: NativeBOOL, iconType: number, sender: string, subject: string, duration: number): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function setNotificationMessageClanTag(picName1: string, picName2: string, flash: NativeBOOL, iconType: number, sender: string, subject: string, duration: number, clanTag: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function setNotificationMessageClanTag2(picName1: string, picName2: string, flash: NativeBOOL, iconType1: number, sender: string, subject: string, duration: number, clanTag: string, iconType2: number, p9: number): void;
  /**
   *
   * @param {NativeBOOL} blink undefined
   */
  export function drawNotification(blink: NativeBOOL, showInBrief: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} blink undefined
   */
  export function drawNotification2(blink: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} blink undefined
   */
  export function drawNotification3(blink: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function drawNotificationAward(p0: string, p1: string, p2: number, p3: number, p4: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function drawNotificationApartmentInvite(p0: NativeBOOL, p1: NativeBOOL, p2: number, p3: number, isLeader: NativeBOOL, unk0: NativeBOOL, clanDesc: number, R: number, G: number, B: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function drawNotificationClanInvite(p0: NativeBOOL, p1: NativeBOOL, p2: number, p3: number, isLeader: NativeBOOL, unk0: NativeBOOL, clanDesc: number, playerName: string, R: number, G: number, B: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x33EE12743CCD6343(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xC8F3AAF93D0600BF(p0: string, p1: number, p2: string, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7AE0589093A2E088(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} blink undefined
   */
  export function drawNotification4(blink: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8EFCCF6EC66D85E4(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB6871B0555B02996(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} type undefined
   */
  export function drawNotificationWithIcon(type: number, image: number, text: string): void;
  /**
   *
   * @param {number} type undefined
   */
  export function drawNotificationWithButton(type: number, button: string, text: string): void;
  /**
   *
   * @param {string} GxtEntry undefined
   */
  export function beginTextCommandPrint(GxtEntry: string): void;
  /**
   *
   * @param {number} duration undefined
   */
  export function endTextCommandPrint(duration: number, drawImmediately: NativeBOOL): void;
  /**
   *
   * @param {string} text undefined
   */
  export function beginTextCommandIsMessageDisplayed(text: string): void;
  /**
   *
   */
  export function endTextCommandIsMessageDisplayed(): void;
  /**
   *
   * @param {string} text undefined
   */
  export function beginTextCommandDisplayText(text: string): void;
  /**
   *
   * @param {number} x undefined
   */
  export function endTextCommandDisplayText(x: number, y: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function beginTextCommandWidth(text: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function endTextCommandGetWidth(p0: NativeBOOL): void;
  /**
   *
   * @param {string} entry undefined
   */
  export function beginTextCommandLineCount(entry: string): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getTextScreenLineCount(x: number, y: number): void;
  /**
   *
   * @param {string} inputType undefined
   */
  export function beginTextCommandDisplayHelp(inputType: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function endTextCommandDisplayHelp(p0: NativeAny, loop: NativeBOOL, beep: NativeBOOL, duration: number): void;
  /**
   *
   * @param {string} labelName undefined
   */
  export function beginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function endTextCommandIsThisHelpMessageBeingDisplayed(p0: number): void;
  /**
   *
   * @param {string} gxtentry undefined
   */
  export function beginTextCommandSetBlipName(gxtentry: string): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function endTextCommandSetBlipName(blip: NativeBlip): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function beginTextCommandObjective(p0: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function endTextCommandObjective(p0: NativeBOOL): void;
  /**
   *
   * @param {string} text undefined
   */
  export function beginTextCommandClearPrint(text: string): void;
  /**
   *
   */
  export function endTextCommandClearPrint(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function beginTextCommandTimer(p0: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function endTextCommandTimer(p0: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function addTextComponentInteger(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function addTextComponentFloat(value: number, decimalPlaces: number): void;
  /**
   *
   * @param {string} labelName undefined
   */
  export function addTextComponentSubstringTextLabel(labelName: string): void;
  /**
   *
   * @param {NativeHash} gxtEntryHash undefined
   */
  export function addTextComponentSubstringTextLabelHashKey(gxtEntryHash: NativeHash): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function addTextComponentSubstringBlipName(blip: NativeBlip): void;
  /**
   *
   * @param {string} text undefined
   */
  export function addTextComponentSubstringPlayerName(text: string): void;
  /**
   *
   * @param {number} timestamp undefined
   */
  export function addTextComponentSubstringTime(timestamp: number, flags: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function addTextComponentFormattedInteger(value: number, commaSeparated: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function addTextComponentAppTitle(p0: string, p1: number): void;
  /**
   *
   * @param {string} website undefined
   */
  export function addTextComponentSubstringWebsite(website: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function addTextComponentScaleform(p0: string): void;
  /**
   *
   * @param {number} hudIndex undefined
   */
  export function setNotificationColorNext(hudIndex: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function getTextSubstring(text: string, position: number, length: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function getTextSubstringSafe(text: string, position: number, length: number, maxLength: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function getTextSubstringSlice(text: string, startPosition: number, endPosition: number): void;
  /**
   *
   * @param {string} labelName undefined
   */
  export function getLabelText(labelName: string): void;
  /**
   *
   */
  export function clearPrints(): void;
  /**
   *
   */
  export function clearBrief(): void;
  /**
   *
   */
  export function clearAllHelpMessages(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function clearThisPrint(p0: string): void;
  /**
   *
   */
  export function clearSmallPrints(): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function doesTextBlockExist(gxt: string): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function requestAdditionalText(gxt: string, slot: number): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function requestAdditionalText2(gxt: string, slot: number): void;
  /**
   *
   * @param {number} slot undefined
   */
  export function hasAdditionalTextLoaded(slot: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function clearAdditionalText(p0: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isStreamingAdditionalText(p0: number): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function hasThisAdditionalTextLoaded(gxt: string, slot: number): void;
  /**
   *
   */
  export function isMessageBeingDisplayed(): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function doesTextLabelExist(gxt: string): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function getLengthOfStringWithThisTextLabel(gxt: string): void;
  /**
   *
   * @param {string} string undefined
   */
  export function getLengthOfLiteralString(string: string): void;
  /**
   *
   * @param {string} STRING undefined
   */
  export function getLengthOfString(STRING: string): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function getStreetNameFromHashKey(hash: NativeHash): void;
  /**
   *
   */
  export function isHudPreferenceSwitchedOn(): void;
  /**
   *
   */
  export function isRadarPreferenceSwitchedOn(): void;
  /**
   *
   */
  export function isSubtitlePreferenceSwitchedOn(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function displayHud(toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0x7669F9E39DC17063(): void;
  /**
   *
   */
  export function _0x402F9ED62087E898(): void;
  /**
   *
   * @param {NativeBOOL} Toggle undefined
   */
  export function displayRadar(Toggle: NativeBOOL): void;
  /**
   *
   */
  export function isHudHidden(): void;
  /**
   *
   */
  export function isRadarHidden(): void;
  /**
   *
   */
  export function isRadarEnabled(): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipRoute(blip: NativeBlip, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipRouteColour(blip: NativeBlip, colour: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function addNextMessageToPreviousBriefs(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x57D760D55F54E071(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function respondingAsTemp(p0: number): void;
  /**
   *
   * @param {number} zoomLevel undefined
   */
  export function setRadarZoom(zoomLevel: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF98E4B3E56AFC7B1(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {number} zoomLevel undefined
   */
  export function setRadarZoomLevelThisFrame(zoomLevel: number): void;
  /**
   *
   */
  export function _0xD2049635DEB9C375(): void;
  /**
   *
   * @param {number} hudColorIndex undefined
   */
  export function getHudColour(hudColorIndex: number, r: number, g: number, b: number, a: number): void;
  /**
   *
   * @param {number} r undefined
   */
  export function _0xD68A5FF8A3A89874(r: number, g: number, b: number, a: number): void;
  /**
   *
   * @param {number} r undefined
   */
  export function _0x16A304E6CB2BFAB9(r: number, g: number, b: number, a: number): void;
  /**
   *
   * @param {number} hudColorIndex undefined
   */
  export function setHudColoursSwitch(hudColorIndex: number, hudColorIndex2: number): void;
  /**
   *
   * @param {number} hudColorIndex undefined
   */
  export function setHudColour(hudColorIndex: number, r: number, g: number, b: number, a: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function flashAbilityBar(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function setAbilityBarValue(value: number, maxValue: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function flashWantedDisplay(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xBA8D65C1C65702E5(p0: NativeBOOL): void;
  /**
   *
   * @param {number} size undefined
   */
  export function getTextScaleHeight(size: number, font: number): void;
  /**
   *
   * @param {number} scale undefined
   */
  export function setTextScale(scale: number, size: number): void;
  /**
   *
   * @param {number} red undefined
   */
  export function setTextColour(red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {NativeBOOL} align undefined
   */
  export function setTextCentre(align: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setTextRightJustify(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} justifyType undefined
   */
  export function setTextJustification(justifyType: number): void;
  /**
   *
   * @param {number} start undefined
   */
  export function setTextWrap(start: number, end: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setTextLeading(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setTextProportional(p0: NativeBOOL): void;
  /**
   *
   * @param {number} fontType undefined
   */
  export function setTextFont(fontType: number): void;
  /**
   *
   */
  export function setTextDropShadow(): void;
  /**
   *
   * @param {number} distance undefined
   */
  export function setTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;
  /**
   *
   */
  export function setTextOutline(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setTextEdge(p0: number, r: number, g: number, b: number, a: number): void;
  /**
   *
   * @param {number} renderId undefined
   */
  export function setTextRenderId(renderId: number): void;
  /**
   *
   */
  export function getDefaultScriptRendertargetRenderId(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function registerNamedRendertarget(p0: string, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function isNamedRendertargetRegistered(p0: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function releaseNamedRendertarget(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function linkNamedRendertarget(hash: NativeHash): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function getNamedRendertargetRenderId(p0: string): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function isNamedRendertargetLinked(hash: NativeHash): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function clearHelp(toggle: NativeBOOL): void;
  /**
   *
   */
  export function isHelpMessageOnScreen(): void;
  /**
   *
   */
  export function _0x214CD562A939246A(): void;
  /**
   *
   */
  export function isHelpMessageBeingDisplayed(): void;
  /**
   *
   */
  export function isHelpMessageFadingOut(): void;
  /**
   *
   */
  export function _0x4A9923385BDB9DAD(): void;
  /**
   *
   */
  export function getBlipInfoIdIterator(): void;
  /**
   *
   */
  export function getNumberOfActiveBlips(): void;
  /**
   *
   * @param {number} blipSprite undefined
   */
  export function getNextBlipInfoId(blipSprite: number): void;
  /**
   *
   * @param {number} blipSprite undefined
   */
  export function getFirstBlipInfoId(blipSprite: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipInfoIdCoord(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipInfoIdDisplay(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipInfoIdType(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipInfoIdEntityIndex(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipInfoIdPickupIndex(blip: NativeBlip): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getBlipFromEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function addBlipForEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function addBlipForPickup(pickup: NativePickup): void;
  /**
   *
   * @param {number} x undefined
   */
  export function addBlipForCoord(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function _0x72DD432F3CDFC0EE(posX: number, posY: number, posZ: number, radius: number, p4: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x60734CC207C9833C(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipCoords(blip: NativeBlip, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipCoords(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipSprite(blip: NativeBlip, spriteId: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipSprite(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipNameFromTextFile(blip: NativeBlip, gxtEntry: string): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipNameToPlayerName(blip: NativeBlip, player: NativePlayer): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipAlpha(blip: NativeBlip, alpha: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipAlpha(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipFade(blip: NativeBlip, opacity: number, duration: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipRotation(blip: NativeBlip, rotation: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipFlashTimer(blip: NativeBlip, duration: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipFlashInterval(blip: NativeBlip, p1: NativeAny): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipColour(blip: NativeBlip, color: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipSecondaryColour(blip: NativeBlip, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipColour(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function getBlipHudColour(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function isBlipShortRange(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function isBlipOnMinimap(blip: NativeBlip): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDD2238F57B977751(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x54318C915D27E4CE(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipHighDetail(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipAsMissionCreatorBlip(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function isMissionCreatorBlip(blip: NativeBlip): void;
  /**
   *
   */
  export function disableBlipNameForVar(): void;
  /**
   *
   */
  export function _0x4167EFE0527D706E(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xF1A6C18B35BCADE6(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipFlashes(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipFlashesAlternate(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function isBlipFlashing(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipAsShortRange(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipScale(blip: NativeBlip, scale: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipPriority(blip: NativeBlip, priority: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipDisplay(blip: NativeBlip, displayId: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipCategory(blip: NativeBlip, index: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function removeBlip(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipAsFriendly(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function pulseBlip(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function showNumberOnBlip(blip: NativeBlip, number: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function hideNumberOnBlip(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function _0x75A16C3DA34F1245(blip: NativeBlip, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function showTickOnBlip(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function showHeadingIndicatorOnBlip(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipFriendly(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipFriend(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDCFB5D4DB8BF367E(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC4278F70131BAA6D(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipShrink(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x25615540D894B814(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function doesBlipExist(blip: NativeBlip): void;
  /**
   *
   */
  export function setWaypointOff(): void;
  /**
   *
   */
  export function _0xD8E694757BCEA8E9(): void;
  /**
   *
   */
  export function refreshWaypoint(): void;
  /**
   *
   */
  export function isWaypointActive(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setNewWaypoint(x: number, y: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipBright(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function setBlipShowCone(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xC594B315EDF2D4AF(ped: NativePed): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setMinimapComponent(p0: number, p1: NativeBOOL, p2: number): void;
  /**
   *
   */
  export function _0x60E892BA4F5BDCA4(): void;
  /**
   *
   */
  export function getMainPlayerBlipId(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x41350B4FC28E3941(p0: NativeBOOL): void;
  /**
   *
   */
  export function hideLoadingOnFadeThisFrame(): void;
  /**
   *
   * @param {NativeHash} interior undefined
   */
  export function setRadarAsInteriorThisFrame(interior: NativeHash, x: number, y: number, heading: number, zoom: number): void;
  /**
   *
   */
  export function setRadarAsExteriorThisFrame(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setPlayerBlipPositionThisFrame(x: number, y: number): void;
  /**
   *
   */
  export function _0x9049FE339D5F6F6F(): void;
  /**
   *
   */
  export function disableRadarThisFrame(): void;
  /**
   *
   */
  export function _0x20FE7FDFEEAD38C0(): void;
  /**
   *
   */
  export function centerPlayerOnRadarThisFrame(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setWidescreenFormat(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function displayAreaName(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function displayCash(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function updateDisplayCash(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} cash undefined
   */
  export function setPlayerCashChange(cash: number, bank: number): void;
  /**
   *
   * @param {NativeBOOL} display undefined
   */
  export function displayAmmoThisFrame(display: NativeBOOL): void;
  /**
   *
   */
  export function displaySniperScopeThisFrame(): void;
  /**
   *
   */
  export function hideHudAndRadarThisFrame(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xE67C6DFD386EA5E7(p0: NativeBOOL): void;
  /**
   *
   */
  export function setDisplayCash(): void;
  /**
   *
   */
  export function removeDisplayCash(): void;
  /**
   *
   */
  export function setMultiplayerBankCash(): void;
  /**
   *
   */
  export function removeMultiplayerBankCash(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setMultiplayerHudCash(p0: number, p1: number): void;
  /**
   *
   */
  export function removeMultiplayerHudCash(): void;
  /**
   *
   */
  export function hideHelpTextThisFrame(): void;
  /**
   *
   * @param {string} message undefined
   */
  export function displayHelpTextThisFrame(message: string, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} forcedShow undefined
   */
  export function showWeaponWheel(forcedShow: NativeBOOL): void;
  /**
   *
   */
  export function blockWeaponWheelThisFrame(): void;
  /**
   *
   */
  export function _0xA48931185F0536FE(): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function _0x72C1056D678BB7D8(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA13E93403F26C812(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x14C9FDCC41F81F63(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setGpsFlags(p0: number, p1: number): void;
  /**
   *
   */
  export function clearGpsFlags(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x1EAC5F91BCBC5073(p0: NativeBOOL): void;
  /**
   *
   */
  export function clearGpsRaceTrack(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDB34E8D56FC13B08(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x311438A071DD9B1A(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x900086F371220B6F(p0: NativeBOOL, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function _0xE6DE0561D9232A64(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3D3D15AF7BCAAF83(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function _0xA905192A6781C41B(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x3DDA37128DD1ACA8(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x67EEDEA1B9BAFD94(): void;
  /**
   *
   */
  export function clearGpsPlayerWaypoint(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setGpsFlashes(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7B21E0BB01E8224A(p0: NativeAny): void;
  /**
   *
   */
  export function flashMinimapDisplay(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6B1DE27EE78E6A19(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function toggleStealthRadar(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function keyHudColour(p0: NativeBOOL, p1: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setMissionName(p0: NativeBOOL, name: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setMissionName2(p0: NativeBOOL, name: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x817B86108EB94E51(p0: NativeBOOL, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setMinimapBlockWaypoint(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setNorthYanktonMap(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setMinimapRevealed(toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0xE0130B41D3CF4574(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function isMinimapAreaRevealed(x: number, y: number, radius: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x62E849B7EB28E770(p0: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function _0x0923DBF87DFF735E(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x71BDB63DBAF8DA59(p0: NativeAny): void;
  /**
   *
   */
  export function _0x35EDD5B2E3FF01C0(): void;
  /**
   *
   * @param {number} angle undefined
   */
  export function lockMinimapAngle(angle: number): void;
  /**
   *
   */
  export function unlockMinimapAngle(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function lockMinimapPosition(x: number, y: number): void;
  /**
   *
   */
  export function unlockMinimapPosition(): void;
  /**
   *
   * @param {number} altitude undefined
   */
  export function setMinimapAttitudeIndicatorLevel(altitude: number, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3F5CC444DCAAA8F2(p0: NativeAny, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x975D66A0BC17064C(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x06A320535F5F0248(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggleBigMap undefined
   */
  export function setRadarBigmapEnabled(toggleBigMap: NativeBOOL, showFullMap: NativeBOOL): void;
  /**
   *
   * @param {number} id undefined
   */
  export function isHudComponentActive(id: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function isScriptedHudComponentActive(id: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function hideScriptedHudComponentThisFrame(id: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x09C0403ED9A751C2(p0: NativeAny): void;
  /**
   *
   * @param {number} id undefined
   */
  export function hideHudComponentThisFrame(id: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function showHudComponentThisFrame(id: number): void;
  /**
   *
   */
  export function _0xA4DEDE28B1814289(): void;
  /**
   *
   */
  export function resetReticuleValues(): void;
  /**
   *
   * @param {number} id undefined
   */
  export function resetHudComponentValues(id: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function setHudComponentPosition(id: number, x: number, y: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function getHudComponentPosition(id: number): void;
  /**
   *
   */
  export function clearReminderMessage(): void;
  /**
   *
   * @param {number} worldX undefined
   */
  export function getScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number, screenX: number, screenY: number): void;
  /**
   *
   */
  export function displayJobReport(): void;
  /**
   *
   */
  export function _0xEE4C0E6DBC6F2C6F(): void;
  /**
   *
   */
  export function _0x9135584D09A3437E(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2432784ACA090DA4(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7679CC1BCEBE3D4C(p0: NativeAny, p1: number, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x784BA7E0ECEB4178(p0: NativeAny, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB094BC1DB4018240(p0: NativeAny, p1: NativeAny, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x788E7FD431BD67F1(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function clearFloatingHelp(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {number} headDisplayId undefined
   */
  export function setMpGamerTagColor(headDisplayId: number, username: string, pointedClanTag: NativeBOOL, isRockstarClan: NativeBOOL, clanTag: string, p5: NativeAny, r: number, g: number, b: number): void;
  /**
   *
   */
  export function hasMpGamerTag(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function createMpGamerTag(ped: NativePed, username: string, pointedClanTag: NativeBOOL, isRockstarClan: NativeBOOL, clanTag: string, p5: NativeAny): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function removeMpGamerTag(gamerTagId: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function isMpGamerTagActive(gamerTagId: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function addTrevorRandomModifier(gamerTagId: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function setMpGamerTagVisibility(gamerTagId: number, component: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} headDisplayId undefined
   */
  export function setMpGamerTagIcons(headDisplayId: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function setMpGamerTagColour(gamerTagId: number, flag: number, color: number): void;
  /**
   *
   * @param {number} headDisplayId undefined
   */
  export function setMpGamerTagHealthBarColour(headDisplayId: number, color: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function setMpGamerTagAlpha(gamerTagId: number, component: number, alpha: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function setMpGamerTagWantedLevel(gamerTagId: number, wantedlvl: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function setMpGamerTagName(gamerTagId: number, string: string): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function hasMpGamerTag2(gamerTagId: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function setMpGamerTagChatting(gamerTagId: number, string: string): void;
  /**
   *
   */
  export function getActiveWebsiteId(): void;
  /**
   *
   */
  export function getCurrentWebsiteId(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE3B05614DCE1D014(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xB99C4E4D9499DF29(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xAF42195A42C63BBA(): void;
  /**
   *
   * @param {string} entryLine1 undefined
   */
  export function setWarningMessage(entryLine1: string, instructionalKey: number, entryLine2: string, p3: NativeBOOL, p4: NativeAny, p5: NativeAny, p6: NativeAny, background: NativeBOOL): void;
  /**
   *
   * @param {string} entryHeader undefined
   */
  export function setWarningMessageWithHeader(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny, background: NativeBOOL): void;
  /**
   *
   * @param {string} entryHeader undefined
   */
  export function setWarningMessage3(entryHeader: string, entryLine1: string, instructionalKey: NativeAny, entryLine2: string, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: NativeAny, p9: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0C5A80A9E096D529(p0: NativeAny, text: string, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDAF87174BE7454FF(p0: NativeAny): void;
  /**
   *
   */
  export function _0x6EF54AB721DC6242(): void;
  /**
   *
   */
  export function isWarningMessageActive(): void;
  /**
   *
   */
  export function _0x7792424AA0EAC32E(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setMapFullScreen(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1EAE6DD17B7A5EFA(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x551DF99658DB6EE8(p0: number, p1: number, p2: number): void;
  /**
   *
   */
  export function _0x2708FC083123F9FF(): void;
  /**
   *
   */
  export function _0x1121BFA1A1A522A8(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x82CEDC33687E1F50(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x211C4EF450086857(): void;
  /**
   *
   */
  export function _0xBF4F34A85CA2970C(): void;
  /**
   *
   * @param {NativeHash} menuhash undefined
   */
  export function activateFrontendMenu(menuhash: NativeHash, Toggle_Pause: NativeBOOL, component: number): void;
  /**
   *
   * @param {NativeHash} menuHash undefined
   */
  export function restartFrontendMenu(menuHash: NativeHash, p1: number): void;
  /**
   *
   */
  export function getCurrentFrontendMenu(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setPauseMenuActive(toggle: NativeBOOL): void;
  /**
   *
   */
  export function disableFrontendThisFrame(): void;
  /**
   *
   */
  export function _0xBA751764F0821256(): void;
  /**
   *
   */
  export function _0xCC3FDDED67BCFC63(): void;
  /**
   *
   * @param {NativeBOOL} active undefined
   */
  export function setFrontendActive(active: NativeBOOL): void;
  /**
   *
   */
  export function isPauseMenuActive(): void;
  /**
   *
   */
  export function _0x2F057596F2BD0061(): void;
  /**
   *
   */
  export function getPauseMenuState(): void;
  /**
   *
   */
  export function _0x5BFF36D6ED83E0AE(): void;
  /**
   *
   */
  export function isPauseMenuRestarting(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function logDebugInfo(p0: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x77F16B447824DA6C(p0: number): void;
  /**
   *
   */
  export function _0xCDCA26E80FAECB8F(): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function addFrontendMenuContext(hash: NativeHash): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function objectDecalToggle(hash: NativeHash): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function _0x84698AB38D0C6636(hash: NativeHash): void;
  /**
   *
   */
  export function _0x2A25ADC48F87841F(): void;
  /**
   *
   */
  export function _0xDE03620F8703A9DF(): void;
  /**
   *
   */
  export function _0x359AF31A4B52F5ED(): void;
  /**
   *
   */
  export function _0x13C4B962653A5280(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC8E1071177A23BE5(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function enableDeathbloodSeethrough(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xC78E239AC5B2DDB9(p0: NativeBOOL, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xF06EBB91A81E09E3(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x3BAB9A4E4F2FF5C7(): void;
  /**
   *
   */
  export function _0xEC9264727EEC0F28(): void;
  /**
   *
   */
  export function _0x14621BB1DF14E2B2(): void;
  /**
   *
   */
  export function _0x66E7CB63C97B7D20(): void;
  /**
   *
   */
  export function _0x593FEAE1F73392D4(): void;
  /**
   *
   */
  export function _0x4E3CD0EF8A489541(): void;
  /**
   *
   */
  export function _0xF284AC67940C6812(): void;
  /**
   *
   */
  export function _0x2E22FEFA0100275E(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0CF54F20DE43879C(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x36C1451A88A09630(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x7E17BE53E1AAABAF(p0: number, p1: number, p2: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xA238192F33110615(p0: number, p1: number, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setUseridsUihidden(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCA6B2F7CE32AB653(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x90A6526CF0381030(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x24A49BEAF468DC90(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5FBD7095FE7AE57F(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8F08017F9D7C47BD(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeHash} p0 undefined
   */
  export function _0x052991E59076E4E4(p0: NativeHash, p1: NativeAny): void;
  /**
   *
   */
  export function clearPedInPauseMenu(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function givePedToPauseMenu(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x3CA6050692BC61B0(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xECF128344E9FF9F1(p0: NativeBOOL): void;
  /**
   *
   */
  export function showSocialClubLegalScreen(): void;
  /**
   *
   */
  export function _0xF13FE2A80C05C561(): void;
  /**
   *
   */
  export function _0x6F72CD94F7B5B68C(): void;
  /**
   *
   */
  export function _0x75D3691713C3B05A(): void;
  /**
   *
   */
  export function _0xD2B32BE3FC1626C6(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x9E778248D6685FE0(p0: string): void;
  /**
   *
   */
  export function isSocialClubActive(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x1185A8087587322C(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x8817605C2BA76200(): void;
  /**
   *
   */
  export function isTextChatActive(): void;
  /**
   *
   */
  export function abortTextChat(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setTextChatUnk(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xCEF214315D276FD1(p0: NativeBOOL): void;
  /**
   *
   * @param {number} pedHandle undefined
   */
  export function setPedAiBlip(pedHandle: number, showViewCones: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function doesPedHaveAiBlip(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setAiBlipType(ped: NativePed, type: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function hideSpecialAbilityLockonOperation(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function isAiBlipAlwaysShown(ped: NativePed, flag: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setAiBlipMaxDistance(ped: NativePed, distance: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x7CD934010E115C2C(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function getAiBlip(ped: NativePed): void;
  /**
   *
   */
  export function _0xA277800A9EAE340E(): void;
  /**
   *
   */
  export function _0x2632482FD6B9AB87(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setDirectorMode(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x04655F9D075D0AE5(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} enabled undefined
   */
  export function setDebugLinesAndSpheresDrawingActive(enabled: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function drawDebugLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function drawDebugLineWithTwoColours(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, alpha1: number, alpha2: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function drawDebugSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function drawDebugBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function drawDebugCross(x: number, y: number, z: number, size: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function drawDebugText(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function drawDebugText2d(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function _0x23BA6B0C2AD7B0D3(toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0x1DD2139A9A20DCE8(): void;
  /**
   *
   */
  export function _0x90A78ECAA4E78453(): void;
  /**
   *
   */
  export function _0x0A46AF8A78DC5E0A(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x4862437A486F91B0(p0: string, p1: NativeAny, p2: NativeAny, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1670F8D05056F257(p0: NativeAny): void;
  /**
   *
   */
  export function _0x7FA5D82B8F58EC06(): void;
  /**
   *
   */
  export function _0x5B0316762AFD4A64(): void;
  /**
   *
   */
  export function _0x346EF3ECAAAB149E(): void;
  /**
   *
   */
  export function _0xA67C35C56EB1BD9D(): void;
  /**
   *
   */
  export function _0x0D6CA79EEEBD8CA3(): void;
  /**
   *
   */
  export function _0xD801CC02177FA3F1(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x1BBC135A4D25EDDE(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x3DEC726C25A11BAC(p0: number): void;
  /**
   *
   */
  export function _0x0C0C4E81E1AC60A0(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x759650634F07B6B4(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xCB82A0BF0E3E3265(p0: number): void;
  /**
   *
   */
  export function _0x6A12D88881435DCA(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x1072F115DAB0717E(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   */
  export function getMaximumNumberOfPhotos(): void;
  /**
   *
   */
  export function getMaximumNumberOfPhotos2(): void;
  /**
   *
   */
  export function getNumberOfPhotos(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x2A893980E96B659A(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xF5BED327CEA362B1(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x4AF92ACD3141D96C(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE791DF1F73ED2C8B(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEC72C258667BE5EA(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function returnTwo(p0: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function drawLightWithRangeAndShadow(x: number, y: number, z: number, r: number, g: number, b: number, range: number, intensity: number, shadow: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function drawLightWithRange(posX: number, posY: number, posZ: number, colorR: number, colorG: number, colorB: number, range: number, intensity: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function drawSpotLight(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, hardness: number, radius: number, falloff: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function drawSpotLightWithShadow(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number, falloff: number, shadowId: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xC9B18B4619F48F7B(p0: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function entityDescriptionText(entity: NativeEntity): void;
  /**
   *
   * @param {number} type undefined
   */
  export function drawMarker(type: number, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, red: number, green: number, blue: number, alpha: number, bobUpAndDown: NativeBOOL, faceCamera: NativeBOOL, p19: number, rotate: NativeBOOL, textureDict: string, textureName: string, drawOnEnts: NativeBOOL): void;
  /**
   *
   * @param {number} type undefined
   */
  export function createCheckpoint(type: number, posX1: number, posY1: number, posZ1: number, posX2: number, posY2: number, posZ2: number, radius: number, red: number, green: number, blue: number, alpha: number, reserved: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function setCheckpointScale(checkpoint: number, p0: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function setCheckpointCylinderHeight(checkpoint: number, nearHeight: number, farHeight: number, radius: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function setCheckpointRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function setCheckpointIconRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function _0xF51D36185993515D(checkpoint: number, posX: number, posY: number, posZ: number, unkX: number, unkY: number, unkZ: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function _0x615D3925E87A3B26(checkpoint: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function deleteCheckpoint(checkpoint: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x22A249A53034450A(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xDC459CFA0CCE245B(p0: NativeBOOL): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function requestStreamedTextureDict(textureDict: string, unused: NativeBOOL): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function hasStreamedTextureDictLoaded(textureDict: string): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function setStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;
  /**
   *
   * @param {number} x undefined
   */
  export function drawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xC6372ECD45D73BCD(p0: NativeBOOL): void;
  /**
   *
   * @param {number} layer undefined
   */
  export function setUiLayer(layer: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function screenDrawPositionBegin(x: number, y: number): void;
  /**
   *
   */
  export function screenDrawPositionEnd(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function screenDrawPositionRatio(x: number, y: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x6DD8F5AA635EB4B2(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   */
  export function getSafeZoneSize(): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function drawSprite(textureDict: string, textureName: string, screenX: number, screenY: number, width: number, height: number, heading: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function addEntityIcon(entity: NativeEntity, icon: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityIconVisibility(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityIconColor(entity: NativeEntity, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setDrawOrigin(x: number, y: number, z: number, p3: NativeAny): void;
  /**
   *
   */
  export function clearDrawOrigin(): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function attachTvAudioToEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setTvAudioFrontend(toggle: NativeBOOL): void;
  /**
   *
   * @param {string} movieMeshSetName undefined
   */
  export function loadMovieMeshSet(movieMeshSetName: string): void;
  /**
   *
   * @param {number} movieMeshSet undefined
   */
  export function releaseMovieMeshSet(movieMeshSet: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9B6E70C5CEEF4EEB(p0: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getScreenResolution(x: number, y: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getActiveScreenResolution(x: number, y: number): void;
  /**
   *
   * @param {NativeBOOL} b undefined
   */
  export function getAspectRatio(b: NativeBOOL): void;
  /**
   *
   */
  export function _0xB2EBE8CBC58B90E9(): void;
  /**
   *
   */
  export function getIsWidescreen(): void;
  /**
   *
   */
  export function getIsHidef(): void;
  /**
   *
   */
  export function _0xEFABC7722293DA7C(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setNightvision(toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0x35FB78DC42B7BD21(): void;
  /**
   *
   */
  export function isNightvisionActive(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xEF398BEEE4EF45F9(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setNoiseoveride(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function setNoisinessoveride(value: number): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function getTextureResolution(textureDict: string, textureName: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xE2892E7E55D7073A(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;
  /**
   *
   */
  export function _0x3669F1B198DCAA4F(): void;
  /**
   *
   * @param {NativeBOOL} enable undefined
   */
  export function setBlackout(enable: NativeBOOL): void;
  /**
   *
   */
  export function _0xC35A6D07C93802B2(): void;
  /**
   *
   */
  export function createTrackedPoint(): void;
  /**
   *
   * @param {number} point undefined
   */
  export function setTrackedPointInfo(point: number, x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {number} point undefined
   */
  export function isTrackedPointVisible(point: number): void;
  /**
   *
   * @param {number} point undefined
   */
  export function destroyTrackedPoint(point: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBE197EAA669238F4(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x61F95E5BB3E0A8C6(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xAE51BC858F32BA66(p0: NativeAny, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x649C97D52332341A(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2C42340F916C5930(p0: NativeAny): void;
  /**
   *
   */
  export function _0x14FC5833464340A8(): void;
  /**
   *
   */
  export function _0x0218BA067D249DEA(): void;
  /**
   *
   */
  export function _0x1612C45F9E3E0D44(): void;
  /**
   *
   */
  export function _0x5DEBD9C4DC995692(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6D955F6A9E0295B1(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   */
  export function _0x302C91AB2D477F7E(): void;
  /**
   *
   */
  export function _0x03FC694AE06C5A20(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD2936CAB8B58FCBD(p0: NativeAny, p1: NativeBOOL, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL, p7: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x5F0F3F56635809EF(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x5E9DAF5A20F15908(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x36F6626459D91457(p0: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setFarShadowsSuppressed(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x25FC3E33A31AD0C9(p0: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xB11D94BC55F41932(p0: string): void;
  /**
   *
   */
  export function _0x27CB772218215325(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x6DDBF9DFFC4AC080(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xD39D13C9FEBF0511(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x02AC28F3A01FA04A(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x0AE73D8DF3A762B2(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xA51C4B86B71652AE(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x312342E1A4874F3F(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x2485D34E50A22E84(p0: number, p1: number, p2: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x12995F2E53FFA601(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDBAA5EC848BA2D46(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xC0416B061F2B7E5E(p0: NativeBOOL): void;
  /**
   *
   * @param {number} type undefined
   */
  export function _0xB1BB03742917A5D6(type: number, xPos: number, yPos: number, zPos: number, p4: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x9CFDD90B2B844BF7(p0: number, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x06F761EA47C1D3ED(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xA4819F5E23E2FFAD(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA4664972A9B8F8BA(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setSeethrough(toggle: NativeBOOL): void;
  /**
   *
   */
  export function isSeethroughActive(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD7D0B00177485411(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xB3C641F3630BF6DA(p0: number): void;
  /**
   *
   */
  export function _0xE59343E9E96529E7(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xE63D7C6EECECB66B(p0: NativeBOOL): void;
  /**
   *
   * @param {number} unk undefined
   */
  export function _0xE3E2C1B4C59DBC77(unk: number): void;
  /**
   *
   * @param {number} transitionTime undefined
   */
  export function transitionToBlurred(transitionTime: number): void;
  /**
   *
   * @param {number} transitionTime undefined
   */
  export function transitionFromBlurred(transitionTime: number): void;
  /**
   *
   */
  export function _0xDE81239437E8C5A8(): void;
  /**
   *
   */
  export function isParticleFxDelayedBlink(): void;
  /**
   *
   */
  export function _0x7B226C785A52A0A9(): void;
  /**
   *
   * @param {NativeBOOL} enabled undefined
   */
  export function setFrozenRenderingDisabled(enabled: NativeBOOL): void;
  /**
   *
   */
  export function _0xEB3DAC2C86001E5E(): void;
  /**
   *
   */
  export function _0xE1C8709406F2C41C(): void;
  /**
   *
   */
  export function _0x851CD923176EBA7C(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xBA3D65906822BED5(p0: NativeBOOL, p1: NativeBOOL, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x7AC24EAB6D74118D(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xBCEDB009461DA156(): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function _0x27FEB5254759CDE3(textureDict: string, p1: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startNetworkedParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startParticleFxNonLoopedOnPedBone(effectName: string, ped: NativePed, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: NativeBOOL, axisY: NativeBOOL, axisZ: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startNetworkedParticleFxNonLoopedOnPedBone(effectName: string, ped: NativePed, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: NativeBOOL, axisY: NativeBOOL, axisZ: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startParticleFxNonLoopedOnEntity(effectName: string, entity: NativeEntity, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: NativeBOOL, axisY: NativeBOOL, axisZ: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startNetworkedParticleFxNonLoopedOnEntity(effectName: string, entity: NativeEntity, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: NativeBOOL, axisY: NativeBOOL, axisZ: NativeBOOL): void;
  /**
   *
   * @param {number} r undefined
   */
  export function setParticleFxNonLoopedColour(r: number, g: number, b: number): void;
  /**
   *
   * @param {number} alpha undefined
   */
  export function setParticleFxNonLoopedAlpha(alpha: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x8CDE909A0370BB3A(p0: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startParticleFxLoopedAtCoord(effectName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL, p11: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startParticleFxLoopedOnPedBone(effectName: string, ped: NativePed, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startParticleFxLoopedOnEntity(effectName: string, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startParticleFxLoopedOnEntityBone(effectName: string, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startNetworkedParticleFxLoopedOnEntity(effectName: string, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startNetworkedParticleFxLoopedOnEntityBone(effectName: string, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function stopParticleFxLooped(ptfxHandle: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function removeParticleFx(ptfxHandle: number, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function removeParticleFxFromEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} X undefined
   */
  export function removeParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function doesParticleFxLoopedExist(ptfxHandle: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function setParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function setParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, Id: NativeBOOL): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function setParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: NativeBOOL): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function setParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function setParticleFxLoopedScale(ptfxHandle: number, scale: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function setParticleFxLoopedFarClipDist(ptfxHandle: number, dist: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setParticleFxCamInsideVehicle(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setParticleFxCamInsideNonplayerVehicle(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setParticleFxShootoutBoat(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setParticleFxBloodScale(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function enableClownBloodVfx(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} Toggle undefined
   */
  export function enableAlienBloodVfx(Toggle: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x27E32866E9A5C416(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xBB90E12CAC1DAB25(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xCA4AE345A153D573(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x54E22EA2C1956A8D(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x949F397A288B28B3(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x9B079E5221D984D3(p0: NativeBOOL): void;
  /**
   *
   * @param {string} name undefined
   */
  export function useParticleFxAsset(name: string): void;
  /**
   *
   * @param {string} oldAsset undefined
   */
  export function setParticleFxAssetOldToNew(oldAsset: string, newAsset: string): void;
  /**
   *
   * @param {string} name undefined
   */
  export function resetParticleFxAssetOldToNew(name: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xA46B73FAA3460AE1(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xF78B803082D4386F(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function washDecalsInRange(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function washDecalsFromVehicle(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function fadeDecalsInRange(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function removeDecalsInRange(x: number, y: number, z: number, range: number): void;
  /**
   *
   * @param {NativeObject} obj undefined
   */
  export function removeDecalsFromObject(obj: NativeObject): void;
  /**
   *
   * @param {NativeObject} obj undefined
   */
  export function removeDecalsFromObjectFacing(obj: NativeObject, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function removeDecalsFromVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {number} decalType undefined
   */
  export function addDecal(decalType: number, posX: number, posY: number, posZ: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, width: number, height: number, rCoef: number, gCoef: number, bCoef: number, opacity: number, timeout: number, p17: NativeBOOL, p18: NativeBOOL, p19: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function addPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x99AC7F0D8B9C893D(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x967278682CB6967A(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   */
  export function _0x0A123435A26C36CD(): void;
  /**
   *
   * @param {NativeObject} decal undefined
   */
  export function removeDecal(decal: NativeObject): void;
  /**
   *
   * @param {NativeObject} decal undefined
   */
  export function isDecalAlive(decal: NativeObject): void;
  /**
   *
   * @param {number} decal undefined
   */
  export function getDecalWashLevel(decal: number): void;
  /**
   *
   */
  export function _0xD9454B5752C857DC(): void;
  /**
   *
   */
  export function _0x27CFB1B1E078CB2D(): void;
  /**
   *
   */
  export function _0x4B5CFC83122DF602(): void;
  /**
   *
   * @param {number} xCoord undefined
   */
  export function _0x2F09F7976C512404(xCoord: number, yCoord: number, zCoord: number, p3: number): void;
  /**
   *
   * @param {number} decalType undefined
   */
  export function overrideDecalTexture(decalType: number, textureDict: string, textureName: string): void;
  /**
   *
   * @param {number} decalType undefined
   */
  export function _0xB7ED70C49521A61D(decalType: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function moveVehicleDecals(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function addClanDecalToVehicle(vehicle: NativeVehicle, ped: NativePed, boneIndex: number, x1: number, x2: number, x3: number, y1: number, y2: number, y3: number, z1: number, z2: number, z3: number, scale: number, p13: NativeAny, alpha: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xD2300034310557E4(vehicle: NativeVehicle, p1: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xFE26117A5841B2FF(vehicle: NativeVehicle, p1: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function doesVehicleHaveDecal(vehicle: NativeVehicle, p1: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x0E4299C549F0D1F1(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x02369D5C8A51FDCF(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x46D1A61A21F566FC(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2A2A52824DB96700(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x1600FD8CF72EBC12(p0: number): void;
  /**
   *
   */
  export function _0xEFB55E7C25D3B3BE(): void;
  /**
   *
   */
  export function _0xA44FF770DFBC5DAE(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function disableVehicleDistantlights(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x03300B57FCAC6DDB(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x98EDF76A7271E4F2(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setForcePedFootstepsTracks(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setForceVehicleTrails(toggle: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xD7021272EB0A451E(p0: string): void;
  /**
   *
   * @param {string} modifierName undefined
   */
  export function setTimecycleModifier(modifierName: string): void;
  /**
   *
   * @param {number} strength undefined
   */
  export function setTimecycleModifierStrength(strength: number): void;
  /**
   *
   * @param {string} modifierName undefined
   */
  export function setTransitionTimecycleModifier(modifierName: string, transition: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x1CBA05AE7BD7EE05(p0: number): void;
  /**
   *
   */
  export function clearTimecycleModifier(): void;
  /**
   *
   */
  export function getTimecycleModifierIndex(): void;
  /**
   *
   */
  export function _0x459FD2C8D0AB78BC(): void;
  /**
   *
   */
  export function pushTimecycleModifier(): void;
  /**
   *
   */
  export function popTimecycleModifier(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xBBF327DED94E4DEB(p0: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xBDEB86F4D5809204(p0: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xBF59707B3E5ED531(p0: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1A8E2C8B9CF4549C(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x15E33297C3E8DC60(p0: NativeAny): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x5096FD9CCB49056D(p0: string): void;
  /**
   *
   */
  export function _0x92CCC17A7A2285DA(): void;
  /**
   *
   */
  export function _0xBB0527EC6341496D(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x2C328AF17210F009(p0: number): void;
  /**
   *
   */
  export function _0x2BF72AD5B41AA739(): void;
  /**
   *
   * @param {string} scaleformName undefined
   */
  export function requestScaleformMovie(scaleformName: string): void;
  /**
   *
   * @param {string} scaleformName undefined
   */
  export function requestScaleformMovieInstance(scaleformName: string): void;
  /**
   *
   * @param {string} scaleformName undefined
   */
  export function requestScaleformMovieInteractive(scaleformName: string): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function hasScaleformMovieLoaded(scaleformHandle: number): void;
  /**
   *
   * @param {string} scaleformName undefined
   */
  export function hasNamedScaleformMovieLoaded(scaleformName: string): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function hasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function setScaleformMovieAsNoLongerNeeded(scaleformHandle: number): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function setScaleformMovieToUseSystemTime(scaleform: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function drawScaleformMovie(scaleformHandle: number, x: number, y: number, width: number, height: number, red: number, green: number, blue: number, alpha: number, unk: number): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function drawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number, unk: number): void;
  /**
   *
   * @param {number} scaleform1 undefined
   */
  export function drawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function drawScaleformMovie3d(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, sharpness: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: NativeAny): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function drawScaleformMovie3dNonAdditive(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: NativeAny): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function callScaleformMovieMethod(scaleform: number, method: string): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function callScaleformMovieFunctionFloatParams(scaleform: number, functionName: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function callScaleformMovieFunctionStringParams(scaleform: number, functionName: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function callScaleformMovieFunctionMixedParams(scaleform: number, functionName: string, floatParam1: number, floatParam2: number, floatParam3: number, floatParam4: number, floatParam5: number, stringParam1: string, stringParam2: string, stringParam3: string, stringParam4: string, stringParam5: string): void;
  /**
   *
   * @param {number} hudComponent undefined
   */
  export function beginScaleformMovieMethodHudComponent(hudComponent: number, functionName: string): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function beginScaleformMovieMethod(scaleform: number, functionName: string): void;
  /**
   *
   * @param {string} functionName undefined
   */
  export function beginScaleformMovieMethodN(functionName: string): void;
  /**
   *
   * @param {string} functionName undefined
   */
  export function beginScaleformMovieMethodV(functionName: string): void;
  /**
   *
   */
  export function endScaleformMovieMethod(): void;
  /**
   *
   */
  export function endScaleformMovieMethodReturn(): void;
  /**
   *
   * @param {number} method_return undefined
   */
  export function getScaleformMovieFunctionReturnBool(method_return: number): void;
  /**
   *
   * @param {number} method_return undefined
   */
  export function getScaleformMovieFunctionReturnInt(method_return: number): void;
  /**
   *
   * @param {number} method_return undefined
   */
  export function sittingTv(method_return: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function addScaleformMovieMethodParameterInt(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function addScaleformMovieMethodParameterFloat(value: number): void;
  /**
   *
   * @param {NativeBOOL} value undefined
   */
  export function addScaleformMovieMethodParameterBool(value: NativeBOOL): void;
  /**
   *
   * @param {string} componentType undefined
   */
  export function beginTextCommandScaleformString(componentType: string): void;
  /**
   *
   */
  export function endTextCommandScaleformString(): void;
  /**
   *
   */
  export function endTextCommandScaleformString2(): void;
  /**
   *
   * @param {string} value undefined
   */
  export function addScaleformMovieMethodParameterString(value: string): void;
  /**
   *
   * @param {string} button undefined
   */
  export function addScaleformMovieMethodParameterButtonName(button: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x5E657EF1099EDD65(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xEC52C631A1831C03(p0: number): void;
  /**
   *
   * @param {number} hudComponent undefined
   */
  export function requestHudScaleform(hudComponent: number): void;
  /**
   *
   * @param {number} hudComponent undefined
   */
  export function hasHudScaleformLoaded(hudComponent: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF44A5456AC3F4F97(p0: NativeAny): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function _0xD1C7CB175E012964(scaleformHandle: number): void;
  /**
   *
   * @param {number} channel undefined
   */
  export function setTvChannel(channel: number): void;
  /**
   *
   */
  export function getTvChannel(): void;
  /**
   *
   * @param {number} volume undefined
   */
  export function setTvVolume(volume: number): void;
  /**
   *
   */
  export function getTvVolume(): void;
  /**
   *
   * @param {number} xPos undefined
   */
  export function drawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} TV_Channel undefined
   */
  export function loadTvChannelSequence(TV_Channel: number, VideoSequence: string, Restart: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2201C576FACAEBE8(p0: NativeAny, p1: string, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBEB3D46BB7F043C0(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} tvChannel undefined
   */
  export function loadTvChannel(tvChannel: NativeHash): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x74C180030FDE4B69(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD1C55B110E4DF534(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function enableMovieSubtitles(toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0xD3A10FC7FD8D98CD(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xF1CEA8A4198D8E9A(p0: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function drawShowroom(p0: string, ped: NativePed, p2: number, posX: number, posY: number, posZ: number): void;
  /**
   *
   */
  export function _0x7A42B2E236E71415(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x108BE26959A9D9BB(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xA356990E161C9E65(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x1C4FC5752BCD8E48(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x5CE62918F8D703C7(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function startScreenEffect(effectName: string, duration: number, looped: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function stopScreenEffect(effectName: string): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function getScreenEffectIsActive(effectName: string): void;
  /**
   *
   */
  export function stopAllScreenEffects(): void;
  /**
   *
   * @param {string} graphicsName undefined
   */
  export function _0xD2209BE128B5418C(graphicsName: string): void;
  /**
   *
   * @param {number} statSlot undefined
   */
  export function statClearSlotForReload(statSlot: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function statLoad(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function statSave(p0: number, p1: NativeBOOL, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5688585E6D563CD8(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function statLoadPending(p0: NativeAny): void;
  /**
   *
   */
  export function statSavePending(): void;
  /**
   *
   */
  export function statSavePendingOrRequested(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function statDeleteSlot(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function statSlotIsLoaded(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7F2C4CDF2E82DF4C(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE496A53BA5F50A56(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xF434A10BA01C37D0(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7E6946F68A38B74F(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA8733668D1047B51(p0: NativeAny): void;
  /**
   *
   */
  export function _0xECB41AC6AB754401(): void;
  /**
   *
   */
  export function _0x9B4BD21D69B1E609(): void;
  /**
   *
   */
  export function _0xC0E0D686DDFC6EAE(): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetInt(statName: NativeHash, value: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetFloat(statName: NativeHash, value: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetBool(statName: NativeHash, value: NativeBOOL, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetGxtLabel(statName: NativeHash, value: string, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetDate(statName: NativeHash, value: NativeAny, numFields: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetString(statName: NativeHash, value: string, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetPos(statName: NativeHash, x: number, y: number, z: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetMaskedInt(statName: NativeHash, p1: NativeAny, p2: NativeAny, p3: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetUserId(statName: NativeHash, value: string, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetCurrentPosixTime(statName: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function statGetInt(statHash: NativeHash, outValue: number, p2: number): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function statGetFloat(statHash: NativeHash, outValue: number, p2: NativeAny): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function statGetBool(statHash: NativeHash, outValue: NativeBOOL, p2: NativeAny): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function statGetDate(statHash: NativeHash, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function statGetString(statHash: NativeHash, p1: number): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function statGetPos(statHash: NativeHash, x: number, y: number, z: number, p4: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function statGetMaskedInt(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function statGetUserId(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statGetLicensePlate(statName: NativeHash): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetLicensePlate(statName: NativeHash, str: string): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statIncrement(statName: NativeHash, value: number): void;
  /**
   *
   */
  export function _0x5A556B229A169402(): void;
  /**
   *
   */
  export function _0xB1D2BB1E1631F5B1(): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function _0xBED9F5693F34ED17(statName: NativeHash, p1: number, outValue: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x26D7399B9587FE89(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xA78B8FA58200DA56(p0: number): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statGetNumberOfDays(statName: NativeHash): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statGetNumberOfHours(statName: NativeHash): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statGetNumberOfMinutes(statName: NativeHash): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statGetNumberOfSeconds(statName: NativeHash): void;
  /**
   *
   * @param {number} profileSetting undefined
   */
  export function statSetProfileSetting(profileSetting: number, value: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xF4D8E7AC2A27758C(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x94F12ABF9C79E339(p0: number): void;
  /**
   *
   * @param {number} index undefined
   */
  export function getPstatBoolHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number): void;
  /**
   *
   * @param {number} index undefined
   */
  export function getPstatIntHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number): void;
  /**
   *
   * @param {number} index undefined
   */
  export function getTupstatBoolHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number): void;
  /**
   *
   * @param {number} index undefined
   */
  export function getTupstatIntHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number): void;
  /**
   *
   * @param {number} index undefined
   */
  export function getNgstatBoolHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number, section: string): void;
  /**
   *
   * @param {number} index undefined
   */
  export function getNgstatIntHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number, section: string): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statGetBoolMasked(statName: NativeHash, mask: number, p2: number): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function statSetBoolMasked(statName: NativeHash, value: NativeBOOL, mask: number, save: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x5009DFD741329729(p0: string, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsNpcInvite(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsAwardXp(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsRankUp(p0: NativeAny): void;
  /**
   *
   */
  export function _0x098760C7461724CD(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA071E0ED98F91286(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC5BE134EC7BA96A0(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsMissionStarted(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsMissionOver(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeBOOL, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsMissionCheckpoint(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x71862B1D855F32E1(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x121FB4DDDC2D5291(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsRaceCheckpoint(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6DEE77AFF8C21BD1(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsMatchStarted(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsShopItem(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1CAE5D2E3F9A07F0(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function playstatsAmbientMissionCrateCreated(p0: number, p1: number, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCB00196B31C39EB1(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2B69F5074C894811(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xADDD1C754E2E2914(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: NativeAny, p9: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x79AB33F0FBFAC40C(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} scaleformHash undefined
   */
  export function playstatsWebsiteVisited(scaleformHash: NativeHash, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsFriendActivity(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsOddjobDone(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsPropChange(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function playstatsClothChange(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE95C8A1875A02CA4(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {string} cheat undefined
   */
  export function playstatsCheatApplied(cheat: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF8C54A461C3E11DC(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF5BB8DAC426A52C0(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA736CF7FB7C5BFF4(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x14E0B2D1AD1044E0(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x90D0622866E80445(p0: number, p1: string): void;
  /**
   *
   * @param {number} time undefined
   */
  export function _0x5DA3A8DE8CB6226F(time: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xD1032E482629049E(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF4FF020A08BC8863(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x46326E13DA4E0546(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsGetNumberOfColumns(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsGetColumnId(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsGetColumnType(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function leaderboardsReadClearAll(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsReadClear(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsReadPending(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function _0xA31FD15197B192BD(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsReadSuccessful(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboards2ReadFriendsByRow(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeBOOL, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboards2ReadByHandle(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboards2ReadByRow(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboards2ReadByRank(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboards2ReadByRadius(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboards2ReadByScoreInt(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboards2ReadByScoreFloat(p0: NativeAny, p1: number, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC38DC1E90D22547C(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF1AE5DCDBFCA2721(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA0F93D5465B3094D(p0: NativeAny): void;
  /**
   *
   */
  export function _0x71B008056E5692D6(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x34770B9CE0E03B91(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x88578F6EC36B4A3A(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x38491439B6BA7F7D(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboards2WriteData(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0BCA1D2C47B0D269(p0: NativeAny, p1: NativeAny, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2E65248609523599(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsCacheDataRow(p0: NativeAny): void;
  /**
   *
   */
  export function leaderboardsClearCacheData(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8EC74CEB042E7CFF(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsGetCacheExists(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsGetCacheTime(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x58A651CD201D89AD(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboardsGetCacheDataRow(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x11FF1C80276097ED(p0: string, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x30A6614C1F7799B8(p0: NativeAny, p1: number, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6483C25849031C4F(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   */
  export function _0x5EAD2BF6484852E4(): void;
  /**
   *
   */
  export function _0xC141B8917E0017EC(): void;
  /**
   *
   */
  export function _0xB475F27C6A994D65(): void;
  /**
   *
   * @param {number} value undefined
   */
  export function _0xF1A1803D3476F215(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function _0x38BAAA5DD4C9D19F(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function _0x55384438FC55AD8E(value: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x723C1CE13FBFDB67(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0D01D20616FC73FB(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function leaderboardsDeaths(statName: NativeHash, value: number): void;
  /**
   *
   */
  export function _0x047CBED6F6F8B63C(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function leaderboards2WriteDataEx(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0x6F361B8889A792A3(): void;
  /**
   *
   */
  export function _0xC847B43F369AC0B5(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA5C80D8E768A9E66(p0: NativeAny): void;
  /**
   *
   */
  export function _0x9A62EC95AE10E011(): void;
  /**
   *
   */
  export function _0x4C89FE2BDEB3F169(): void;
  /**
   *
   */
  export function _0xC6E0E2616A7576BB(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5BD5F255321C4AAF(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDEAAF77EB3687E97(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0xC70DDCE56D0D3A99(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x886913BBEACA68C1(p0: NativeAny): void;
  /**
   *
   */
  export function _0x4FEF53183C3C6414(): void;
  /**
   *
   */
  export function _0x567384DFA67029E6(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3270F67EED31FBC1(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCE5AA445ABA8DEE0(p0: NativeAny): void;
  /**
   *
   */
  export function _0x98E2BC1CA26287C3(): void;
  /**
   *
   */
  export function _0x629526ABA383BCAA(): void;
  /**
   *
   */
  export function _0xB3DA2606774A8E2D(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDAC073C7901F9E15(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF6792800AC95350D(p0: NativeAny): void;
  /**
   *
   * @param {string} name undefined
   */
  export function addScriptToRandomPed(name: string, model: NativeHash, p2: number, p3: number): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function registerObjectScriptBrain(scriptName: string, objectName: NativeHash, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function isObjectWithinBrainActivationRange(object: NativeObject): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function registerWorldPointScriptBrain(p0: NativeAny, p1: number, p2: NativeAny): void;
  /**
   *
   */
  export function isWorldPointWithinBrainActivationRange(): void;
  /**
   *
   * @param {number} brainSet undefined
   */
  export function enableScriptBrainSet(brainSet: number): void;
  /**
   *
   * @param {number} brainSet undefined
   */
  export function disableScriptBrainSet(brainSet: number): void;
  /**
   *
   */
  export function _0x0B40ED49D7D6FF84(): void;
  /**
   *
   */
  export function _0x4D953DF78EBF8158(): void;
  /**
   *
   * @param {string} action undefined
   */
  export function _0x6D6840CEE8845831(action: string): void;
  /**
   *
   * @param {string} action undefined
   */
  export function _0x6E91B04E08773030(action: string): void;
  /**
   *
   * @param {number} p3 undefined
   */
  export function createMobilePhone(p3: number): void;
  /**
   *
   */
  export function destroyMobilePhone(): void;
  /**
   *
   * @param {number} scale undefined
   */
  export function setMobilePhoneScale(scale: number): void;
  /**
   *
   * @param {number} rotX undefined
   */
  export function setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: NativeAny): void;
  /**
   *
   * @param {NativeVector3} rotation undefined
   */
  export function getMobilePhoneRotation(rotation: NativeVector3, p1: NativeVehicle): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function setMobilePhonePosition(posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeVector3} position undefined
   */
  export function getMobilePhonePosition(position: NativeVector3): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function scriptIsMovingMobilePhoneOffscreen(toggle: NativeBOOL): void;
  /**
   *
   */
  export function canPhoneBeSeenOnScreen(): void;
  /**
   *
   * @param {number} direction undefined
   */
  export function moveFinger(direction: number): void;
  /**
   *
   * @param {NativeBOOL} Toggle undefined
   */
  export function setPhoneLean(Toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function cellCamActivate(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function disablePhoneThisFrame(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} toggle undefined
   */
  export function _0xA2CCBE62CD4C91A4(toggle: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x1B0B4AEED5B9B41C(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x53F4892D18EC90A4(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x3117D84EFA60F77B(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x15E69E2802C24B8D(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xAC2890471901861C(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xD6ADE981781FCA09(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xF1E22DC13F5EEBAD(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x466DA42C89865553(p0: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function cellCamIsCharVisibleNoFaceCheck(entity: NativeEntity): void;
  /**
   *
   * @param {number} renderId undefined
   */
  export function getMobilePhoneRenderId(renderId: number): void;
  /**
   *
   */
  export function appDataValid(): void;
  /**
   *
   * @param {NativeScrHandle} property undefined
   */
  export function appGetInt(property: NativeScrHandle): void;
  /**
   *
   * @param {string} property undefined
   */
  export function appGetFloat(property: string): void;
  /**
   *
   * @param {string} property undefined
   */
  export function appGetString(property: string): void;
  /**
   *
   * @param {number} hour undefined
   */
  export function setClockTime(hour: number, minute: number, second: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function pauseClock(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} hour undefined
   */
  export function advanceClockTimeTo(hour: number, minute: number, second: number): void;
  /**
   *
   * @param {number} hours undefined
   */
  export function addToClockTime(hours: number, minutes: number, seconds: number): void;
  /**
   *
   */
  export function getClockHours(): void;
  /**
   *
   */
  export function getClockMinutes(): void;
  /**
   *
   */
  export function getClockSeconds(): void;
  /**
   *
   * @param {number} day undefined
   */
  export function setClockDate(day: number, month: number, year: number): void;
  /**
   *
   */
  export function getClockDayOfWeek(): void;
  /**
   *
   */
  export function getClockDayOfMonth(): void;
  /**
   *
   */
  export function getClockMonth(): void;
  /**
   *
   */
  export function getClockYear(): void;
  /**
   *
   */
  export function getMillisecondsPerGameMinute(): void;
  /**
   *
   */
  export function getPosixTime(): void;
  /**
   *
   * @param {number} year undefined
   */
  export function getUtcTime(year: number, month: number, day: number, hour: number, minute: number, second: number): void;
  /**
   *
   * @param {number} year undefined
   */
  export function getLocalTime(year: number, month: number, day: number, hour: number, minute: number, second: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function setRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown1: NativeBOOL, unknown2: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function setRoadsInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number, unknown1: NativeBOOL, unknown2: NativeBOOL, unknown3: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getSafeCoordForPed(x: number, y: number, z: number, onGround: NativeBOOL, outPosition: NativeVector3, flags: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getClosestVehicleNode(x: number, y: number, z: number, outPosition: NativeVector3, nodeType: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getClosestMajorVehicleNode(x: number, y: number, z: number, outPosition: NativeVector3, p5: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getClosestVehicleNodeWithHeading(x: number, y: number, z: number, outPosition: NativeVector3, outHeading: number, nodeType: number, p6: number, p7: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, outPosition: NativeVector3, p6: NativeBOOL, p7: number, p8: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: NativeVector3, outHeading: number, outInt: number, p6: number, p7: number, p8: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: NativeVector3, outHeading: number, p6: NativeAny, p7: number, p8: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, outPosition: NativeVector3, outHeading: number, nodetype: number, p10: NativeAny, p11: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getVehicleNodeProperties(x: number, y: number, z: number, density: number, flags: number): void;
  /**
   *
   * @param {number} vehicleNodeId undefined
   */
  export function isVehicleNodeIdValid(vehicleNodeId: number): void;
  /**
   *
   * @param {number} nodeId undefined
   */
  export function getVehicleNodePosition(nodeId: number, outPosition: NativeVector3): void;
  /**
   *
   * @param {number} nodeID undefined
   */
  export function getSupportsGpsRouteFlag(nodeID: number): void;
  /**
   *
   * @param {number} nodeID undefined
   */
  export function getIsSlowRoadFlag(nodeID: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p5: NativeVector3, p6: NativeVector3, p7: NativeAny, p8: NativeAny, p9: number, p10: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x228E5C6AD4D74BFD(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xF7B79A50B905A30D(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x07FB139B592FA687(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setRoadsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function setRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x0B919E1FB47CC4E0(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xAA76052DDA9BFC3E(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setPedPathsBackToOriginal(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, outPosition: NativeVector3, nodeId: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getStreetNameAtCoord(x: number, y: number, z: number, streetName: NativeHash, crossingRoad: NativeHash): void;
  /**
   *
   * @param {number} x undefined
   */
  export function generateDirectionsToCoord(x: number, y: number, z: number, p3: NativeBOOL, direction: number, vehicle: number, distToNxJunction: number): void;
  /**
   *
   * @param {NativeBOOL} ignore undefined
   */
  export function setIgnoreNoGpsFlag(ignore: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x1FC289A0C3FF470F(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setGpsDisabledZone(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   */
  export function _0xBBB45C3CF5C8AA85(): void;
  /**
   *
   */
  export function _0x869DAACBBE9FA006(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x16F46FB18C8009E4(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function isPointOnRoad(x: number, y: number, z: number, vehicle: NativeVehicle): void;
  /**
   *
   */
  export function _0xD3A6A0EF48823A8C(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD0BC1C6FB18EE154(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2801D0012266DF07(p0: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function addNavmeshRequiredRegion(x: number, y: number, radius: number): void;
  /**
   *
   */
  export function removeNavmeshRequiredRegions(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function disableNavmeshInArea(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   */
  export function areAllNavmeshRegionsLoaded(): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x01708E8DD3FF8C65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function addNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeBOOL, p8: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function updateNavmeshBlockingObject(p0: NativeAny, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function removeNavmeshBlockingObject(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function doesNavmeshBlockingObjectExist(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x29C24BFBED8AB8FB(p0: number, p1: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x8ABE8608576D9CE3(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} left undefined
   */
  export function _0x336511A34F2E5185(left: number, right: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x3599D741C9AC6310(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isControlEnabled(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isControlPressed(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isControlReleased(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isControlJustPressed(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isControlJustReleased(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function getControlValue(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function getControlNormal(inputGroup: number, control: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x5B73C77D9EB66E24(p0: NativeBOOL): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function _0x5B84D09CEC5209C5(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function setControlNormal(inputGroup: number, control: number, amount: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isDisabledControlPressed(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isDisabledControlJustPressed(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isDisabledControlJustReleased(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function getDisabledControlNormal(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function _0x4F8A26A890FD62FB(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xD7D22F5592AED8BA(p0: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isInputDisabled(inputGroup: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function isInputJustDisabled(inputGroup: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function setCursorLocation(x: number, y: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x23F09EADC01449D6(p0: NativeBOOL): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function _0x6CD79468A1E595C6(inputGroup: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function getControlInstructionalButton(inputGroup: number, control: number, p2: NativePlayer): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function _0x80C2FD58D720C801(inputGroup: number, control: number, p2: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x8290252FFF36ACB5(p0: number, red: number, green: number, blue: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCB0360EFEFB2580D(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function setPadShake(p0: number, duration: number, frequency: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x14D29BB12D47F68C(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function stopPadShake(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF239400E16C23E08(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA0CEFCEA390AAB9B(p0: NativeAny): void;
  /**
   *
   */
  export function isLookInverted(): void;
  /**
   *
   */
  export function _0xE1615EC03B3BB4FD(): void;
  /**
   *
   */
  export function getLocalPlayerAimState(): void;
  /**
   *
   */
  export function _0x59B9A7AF4C95133C(): void;
  /**
   *
   */
  export function _0x0F70731BACCFBB96(): void;
  /**
   *
   */
  export function _0xFC859E2374407556(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setPlayerpadShakesWhenControllerDisabled(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function setInputExclusive(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function disableControlAction(inputGroup: number, control: number, disable: NativeBOOL): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function enableControlAction(inputGroup: number, control: number, enable: NativeBOOL): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function disableAllControlActions(inputGroup: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function enableAllControlActions(inputGroup: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x3D42B92563939375(p0: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x4683149ED1DDE7A1(p0: string): void;
  /**
   *
   */
  export function _0x643ED62D5EA3BEBD(): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function disableInputGroup(inputGroup: number): void;
  /**
   *
   * @param {NativeBlip} x undefined
   */
  export function _0xAD6875BBC0FC899C(x: NativeBlip): void;
  /**
   *
   */
  export function _0x6CC86E78358D5119(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFCCAE5B92A830878(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x15FF52B809DB2353(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF8CC1EBE0B62E29F(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x22DA66936E0FFF37(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8F5EA1C01D65A100(p0: NativeAny): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xC84527E235FCA219(p0: string, p1: NativeBOOL, p2: string, p3: NativeAny, p4: NativeAny, type: string, p6: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xA5EFC3E847D60507(p0: string, p1: string, p2: string, p3: string, p4: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x648E7A5434AF7969(p0: string, p1: NativeAny, p2: NativeBOOL, p3: NativeAny, p4: NativeAny, p5: NativeAny, type: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x4645DE9980999E93(p0: string, p1: string, p2: string, p3: string, type: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x692D808C34A82143(p0: string, p1: number, type: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xA69AC4ADE82B57A4(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x9CB0BFA7A9342C3D(p0: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x52818819057F2B40(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x01095C95CD46B624(p0: number): void;
  /**
   *
   * @param {string} filename undefined
   */
  export function loadUgcFile(filename: string): void;
  /**
   *
   */
  export function datafileCreate(): void;
  /**
   *
   */
  export function datafileDelete(): void;
  /**
   *
   */
  export function _0x2ED61456317B8178(): void;
  /**
   *
   */
  export function _0xC55854C7D7274882(): void;
  /**
   *
   */
  export function datafileGetFileDict(): void;
  /**
   *
   * @param {string} filename undefined
   */
  export function _0x83BCCE3224735F05(filename: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x4DFDD9EB705F8140(p0: NativeBOOL): void;
  /**
   *
   */
  export function datafileIsSavePending(): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueAddBoolean(objectData: NativeAny, key: string, value: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueAddInteger(objectData: NativeAny, key: string, value: number): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueAddFloat(objectData: NativeAny, key: string, value: number): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueAddString(objectData: NativeAny, key: string, value: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueAddVector3(objectData: NativeAny, key: string, valueX: number, valueY: number, valueZ: number): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueAddObject(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueAddArray(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueGetBoolean(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueGetInteger(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueGetFloat(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueGetString(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueGetVector3(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} sCloudFile undefined
   */
  export function objectValueGetObject(sCloudFile: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueGetArray(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function objectValueGetType(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueAddBoolean(arrayData: NativeAny, value: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueAddInteger(arrayData: NativeAny, value: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueAddFloat(arrayData: NativeAny, value: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueAddString(arrayData: NativeAny, value: string): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueAddVector3(arrayData: NativeAny, valueX: number, valueY: number, valueZ: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueAddObject(arrayData: NativeAny): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueGetBoolean(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueGetInteger(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueGetFloat(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueGetString(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueGetVector3(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueGetObject(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueGetSize(arrayData: NativeAny): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function arrayValueGetType(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {number} X undefined
   */
  export function startScriptFire(X: number, Y: number, Z: number, maxChildren: number, isGasFire: NativeBOOL): void;
  /**
   *
   * @param {number} fireHandle undefined
   */
  export function removeScriptFire(fireHandle: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function startEntityFire(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function stopEntityFire(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function isEntityOnFire(entity: NativeEntity): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function stopFireInRange(x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {NativeVector3} outPosition undefined
   */
  export function getClosestFirePos(outPosition: NativeVector3, x: number, y: number, z: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function addExplosion(x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: NativeBOOL, isInvisible: NativeBOOL, cameraShake: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function addOwnedExplosion(ped: NativePed, x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: NativeBOOL, isInvisible: NativeBOOL, cameraShake: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function addExplosionWithUserVfx(x: number, y: number, z: number, explosionType: number, explosionFx: NativeHash, damageScale: number, isAudible: NativeBOOL, isInvisible: NativeBOOL, cameraShake: number): void;
  /**
   *
   * @param {number} explosionType undefined
   */
  export function isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {number} unk undefined
   */
  export function _0x6070104B699B2EF4(unk: number, PosX1: number, PosY1: number, PosZ1: number, PosX2: number, PosY2: number, PosZ2: number): void;
  /**
   *
   * @param {number} explosionType undefined
   */
  export function isExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {number} explosionType undefined
   */
  export function isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number): void;
  /**
   *
   * @param {number} explosionType undefined
   */
  export function getPedInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function setDecisionMaker(ped: NativePed, name: NativeHash): void;
  /**
   *
   * @param {NativeHash} name undefined
   */
  export function clearDecisionMakerEventResponse(name: NativeHash, type: number): void;
  /**
   *
   * @param {NativeHash} name undefined
   */
  export function blockDecisionMakerEvent(name: NativeHash, type: number): void;
  /**
   *
   * @param {NativeHash} name undefined
   */
  export function unblockDecisionMakerEvent(name: NativeHash, type: number): void;
  /**
   *
   * @param {number} type undefined
   */
  export function addShockingEventAtPosition(type: number, x: number, y: number, z: number, duration: number): void;
  /**
   *
   * @param {number} type undefined
   */
  export function addShockingEventForEntity(type: number, entity: NativeEntity, duration: number): void;
  /**
   *
   * @param {number} type undefined
   */
  export function isShockingEventInSphere(type: number, x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {NativeScrHandle} event undefined
   */
  export function removeShockingEvent(event: NativeScrHandle): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function removeAllShockingEvents(p0: NativeBOOL): void;
  /**
   *
   */
  export function removeShockingEventSpawnBlockingAreas(): void;
  /**
   *
   */
  export function suppressShockingEventsNextFrame(): void;
  /**
   *
   * @param {number} type undefined
   */
  export function suppressShockingEventTypeNextFrame(type: number): void;
  /**
   *
   */
  export function suppressAgitationEventsNextFrame(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getZoneAtCoords(x: number, y: number, z: number): void;
  /**
   *
   * @param {string} zoneName undefined
   */
  export function getZoneFromNameId(zoneName: string): void;
  /**
   *
   * @param {number} zoneId undefined
   */
  export function getZonePopschedule(zoneId: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getNameOfZone(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} zoneId undefined
   */
  export function setZoneEnabled(zoneId: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} zoneId undefined
   */
  export function getZoneScumminess(zoneId: number): void;
  /**
   *
   * @param {number} scheduleId undefined
   */
  export function overridePopscheduleVehicleModel(scheduleId: number, vehicleHash: NativeHash): void;
  /**
   *
   * @param {number} scheduleId undefined
   */
  export function clearPopscheduleOverrideVehicleModel(scheduleId: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getHashOfMapAreaAtCoords(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function addRope(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, length: number, ropeType: number, maxLength: number, minLength: number, p10: number, p11: NativeBOOL, p12: NativeBOOL, rigid: NativeBOOL, p14: number, breakWhenShot: NativeBOOL, unkPtr: NativeAny): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function deleteRope(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function deleteChildRope(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function doesRopeExist(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function ropeDrawShadowEnabled(rope: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function loadRopeData(rope: NativeObject, rope_preset: string): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function pinRopeVertex(rope: NativeObject, vertex: number, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function unpinRopeVertex(rope: NativeObject, vertex: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function getRopeVertexCount(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function attachEntitiesToRope(rope: NativeObject, ent1: NativeEntity, ent2: NativeEntity, ent1_x: number, ent1_y: number, ent1_z: number, ent2_x: number, ent2_y: number, ent2_z: number, length: number, p10: NativeBOOL, p11: NativeBOOL, boneName1: string, boneName2: string): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function attachRopeToEntity(rope: NativeObject, entity: NativeEntity, x: number, y: number, z: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function detachRopeFromEntity(rope: NativeObject, entity: NativeEntity): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function ropeSetUpdatePinverts(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function updateRope(rope: NativeObject, update: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x36CCB9BE67B970FD(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x84DE3B5FB3E666F0(p0: NativeAny): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function getRopeLastVertexCoord(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function getRopeVertexCoord(rope: NativeObject, vertex: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function startRopeWinding(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function stopRopeWinding(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function startRopeUnwindingFront(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function stopRopeUnwindingFront(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function ropeConvertToSimple(rope: NativeObject): void;
  /**
   *
   */
  export function ropeLoadTextures(): void;
  /**
   *
   */
  export function ropeAreTexturesLoaded(): void;
  /**
   *
   */
  export function ropeUnloadTextures(): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function _0x271C9D3ACA5D6409(rope: NativeObject): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBC0CE682D4D05650(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: NativeAny, p9: NativeAny, p10: NativeAny, p11: NativeAny, p12: NativeAny, p13: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB1B6216CA2E7B55E(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB743F735C03D7810(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function getRopeLength(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function ropeForceLength(rope: NativeObject, length: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function ropeResetLength(rope: NativeObject, length: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function applyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function setDamping(rope: NativeObject, vertex: number, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function activatePhysics(entity: NativeEntity): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function setCgoffset(rope: NativeObject, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function getCgoffset(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function setCgAtBoundcenter(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function breakEntityGlass(object: NativeObject, posX: number, posY: number, posZ: number, p4: number, offsetX: number, offsetY: number, offsetZ: number, p8: number, p9: number, p10: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function setDisableBreaking(rope: NativeObject, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0xCC6E963682533882(object: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function setDisableFragDamage(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getWaterHeight(x: number, y: number, z: number, height: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function getWaterHeightNoWaves(x: number, y: number, z: number, height: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function testProbeAgainstWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, result: NativeVector3): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function testProbeAgainstAllWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, unkVector: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function testVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: NativeAny, height: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function modifyWater(x: number, y: number, radius: number, height: number): void;
  /**
   *
   * @param {number} xLow undefined
   */
  export function addCurrentRise(xLow: number, yLow: number, xHigh: number, yHigh: number, height: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function removeCurrentRise(p0: number): void;
  /**
   *
   * @param {number} intensity undefined
   */
  export function setCurrentIntensity(intensity: number): void;
  /**
   *
   */
  export function getCurrentIntensity(): void;
  /**
   *
   */
  export function resetCurrentIntensity(): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function startShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, ent: NativeEntity, p8: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function startShapeTestRay(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: NativeEntity, p8: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function startShapeTestBoundingBox(entity: NativeEntity, flags1: number, flags2: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function startShapeTestBox(x: number, y: number, z: number, x1: number, y2: number, z2: number, rotX: number, rotY: number, rotZ: number, p9: NativeAny, p10: NativeAny, entity: NativeAny, p12: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function startShapeTestBound(entity: NativeEntity, flags1: number, flags2: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function startShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: NativeEntity, p9: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function startShapeTestCapsule2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: NativeEntity, p9: NativeAny): void;
  /**
   *
   * @param {NativeVector3} pVec1 undefined
   */
  export function startShapeTestSurroundingCoords(pVec1: NativeVector3, pVec2: NativeVector3, flag: number, entity: NativeEntity, flag2: number): void;
  /**
   *
   * @param {number} rayHandle undefined
   */
  export function getShapeTestResult(rayHandle: number, hit: NativeBOOL, endCoords: NativeVector3, surfaceNormal: NativeVector3, entityHit: NativeEntity): void;
  /**
   *
   * @param {number} rayHandle undefined
   */
  export function getShapeTestResultEx(rayHandle: number, hit: NativeBOOL, endCoords: NativeVector3, surfaceNormal: NativeVector3, materialHash: NativeHash, entityHit: NativeEntity): void;
  /**
   *
   * @param {NativeHash} entityHit undefined
   */
  export function shapeTestResultEntity(entityHit: NativeHash): void;
  /**
   *
   */
  export function networkIsSignedIn(): void;
  /**
   *
   */
  export function networkIsSignedOnline(): void;
  /**
   *
   */
  export function _0xBD545D44CCE70597(): void;
  /**
   *
   */
  export function _0xEBCAB9E5048434F4(): void;
  /**
   *
   */
  export function _0x74FB3E29E6D10FA9(): void;
  /**
   *
   */
  export function _0x7808619F31FF22DB(): void;
  /**
   *
   */
  export function _0xA0FA4EC6A05DA44E(): void;
  /**
   *
   */
  export function networkAreRosAvailable(): void;
  /**
   *
   */
  export function networkIsPsnAvailable(): void;
  /**
   *
   */
  export function networkIsCloudAvailable(): void;
  /**
   *
   */
  export function _0x67A5589628E0CFF6(): void;
  /**
   *
   */
  export function _0xBA9775570DB788CF(): void;
  /**
   *
   */
  export function networkIsHost(): void;
  /**
   *
   */
  export function _0x4237E822315D8BA9(): void;
  /**
   *
   */
  export function networkHaveOnlinePrivileges(): void;
  /**
   *
   */
  export function networkHasRestrictedProfile(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x72D918C99BCACC54(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xAEEF48CDF5B6CE7C(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x78321BEA235FD8CD(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x595F028698072DD9(p0: NativeAny, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x83F28CE49FBBFFBA(p0: NativeAny, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   */
  export function _0x76BF03FADBF154F5(): void;
  /**
   *
   */
  export function _0x9614B71F8ADB982B(): void;
  /**
   *
   */
  export function _0x5EA784D197556507(): void;
  /**
   *
   */
  export function _0xA8ACB6459542A8C8(): void;
  /**
   *
   */
  export function _0x83FE8D7229593017(): void;
  /**
   *
   */
  export function networkCanBail(): void;
  /**
   *
   */
  export function networkBail(): void;
  /**
   *
   */
  export function _0x283B6062A2C01E9B(): void;
  /**
   *
   * @param {number} loadingState undefined
   */
  export function networkCanAccessMultiplayer(loadingState: number): void;
  /**
   *
   */
  export function networkIsMultiplayerDisabled(): void;
  /**
   *
   */
  export function networkCanEnterMultiplayer(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkSessionEnter(p0: NativeAny, p1: NativeAny, p2: NativeAny, maxPlayers: number, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSessionFriendMatchmaking(p0: number, p1: number, maxPlayers: number, p3: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSessionCrewMatchmaking(p0: number, p1: number, p2: number, maxPlayers: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkSessionActivityQuickmatch(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSessionHost(p0: number, maxPlayers: number, p2: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSessionHostClosed(p0: number, maxPlayers: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSessionHostFriendsOnly(p0: number, maxPlayers: number): void;
  /**
   *
   */
  export function networkSessionIsClosedFriends(): void;
  /**
   *
   */
  export function networkSessionIsClosedCrew(): void;
  /**
   *
   */
  export function networkSessionIsSolo(): void;
  /**
   *
   */
  export function networkSessionIsPrivate(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkSessionEnd(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkSessionKickPlayer(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkSessionIsPlayerVotedToKick(player: NativePlayer): void;
  /**
   *
   */
  export function _0x59DF79317F85A7E0(): void;
  /**
   *
   */
  export function _0xFFE1E5B792D92B34(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSctvSlots(p0: number): void;
  /**
   *
   * @param {number} playerType undefined
   */
  export function networkSessionSetMaxPlayers(playerType: number, playerCount: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSessionGetUnk(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCAE55F48D3D7875C(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF49ABC20D8552257(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x4811BBAC21C5FCD5(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x5539C3EBF104A53A(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x702BC4D605522539(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x3F52E880AAF6C8CA(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF1EEA2DDA9FFA69D(p0: NativeAny): void;
  /**
   *
   */
  export function _0x1153FA02A659051C(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkSessionHosted(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkAddFollowers(p0: number, p1: number): void;
  /**
   *
   */
  export function networkClearFollowers(): void;
  /**
   *
   * @param {number} hours undefined
   */
  export function networkGetServerTime(hours: number, minutes: number, seconds: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x600F8CB31C7AAB6E(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkXAffectsGamers(p0: NativeAny): void;
  /**
   *
   * @param {number} unk undefined
   */
  export function networkFindMatchedGamers(unk: number, p1: number, neg1a: number, neg1b: number): void;
  /**
   *
   */
  export function networkIsFindingGamers(): void;
  /**
   *
   */
  export function _0xF9B83B77929D8863(): void;
  /**
   *
   */
  export function networkGetNumFoundGamers(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetFoundGamer(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function networkClearFoundGamers(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x85A0EF54A500882C(p0: NativeAny): void;
  /**
   *
   */
  export function _0x2CC848A861D01493(): void;
  /**
   *
   */
  export function _0x94A8394D150B013A(): void;
  /**
   *
   */
  export function _0x5AE17C6B0134B7F1(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x02A8BEC6FD9AF660(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0x86E0660E4F5C956D(): void;
  /**
   *
   */
  export function networkIsPlayerAnimationDrawingSynchronized(): void;
  /**
   *
   */
  export function networkSessionCancelInvite(): void;
  /**
   *
   */
  export function networkSessionForceCancelInvite(): void;
  /**
   *
   */
  export function networkHasPendingInvite(): void;
  /**
   *
   */
  export function _0xC42DD763159F3461(): void;
  /**
   *
   */
  export function _0x62A0296C1BB1CEB3(): void;
  /**
   *
   */
  export function networkSessionWasInvited(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkSessionGetInviter(networkHandle: number): void;
  /**
   *
   */
  export function _0xD313DE83394AF134(): void;
  /**
   *
   */
  export function _0xBDB6F89C729CF388(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function networkSuppressInvite(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function networkBlockInvites(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xCFEB8AF24FC1D0BB(p0: NativeBOOL): void;
  /**
   *
   */
  export function serverHandler(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkBlockKickedPlayers(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x7AC752103856FB20(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x74698374C45701D2(): void;
  /**
   *
   */
  export function _0x140E6A44870A11CE(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSessionHostSinglePlayer(p0: number): void;
  /**
   *
   */
  export function networkSessionLeaveSinglePlayer(): void;
  /**
   *
   */
  export function networkIsGameInProgress(): void;
  /**
   *
   */
  export function networkIsSessionActive(): void;
  /**
   *
   */
  export function networkIsInSession(): void;
  /**
   *
   */
  export function networkIsSessionStarted(): void;
  /**
   *
   */
  export function networkIsSessionBusy(): void;
  /**
   *
   */
  export function networkCanSessionEnd(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkSessionMarkVisible(p0: NativeBOOL): void;
  /**
   *
   */
  export function networkSessionIsVisible(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkSessionBlockJoinRequests(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSessionChangeSlots(p0: number, p1: NativeBOOL): void;
  /**
   *
   */
  export function _0x53AFD64C6758F2F9(): void;
  /**
   *
   */
  export function networkSessionVoiceHost(): void;
  /**
   *
   */
  export function networkSessionVoiceLeave(): void;
  /**
   *
   * @param {NativeAny} globalPtr undefined
   */
  export function networkVoiceConnectToPlayer(globalPtr: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkSetKeepFocuspoint(p0: NativeBOOL, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5B8ED3DB018927B1(p0: NativeAny): void;
  /**
   *
   */
  export function _0x855BC38818F6F684(): void;
  /**
   *
   */
  export function _0xB5D3453C98456528(): void;
  /**
   *
   */
  export function _0xEF0912DDF7C4CB4B(): void;
  /**
   *
   * @param {string} message undefined
   */
  export function networkSendTextMessage(message: string, networkHandle: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function networkSetActivitySpectator(toggle: NativeBOOL): void;
  /**
   *
   */
  export function networkIsActivitySpectator(): void;
  /**
   *
   * @param {number} maxSpectators undefined
   */
  export function networkSetActivitySpectatorMax(maxSpectators: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkGetActivityPlayerNum(p0: NativeBOOL): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkIsActivitySpectatorFromHandle(networkHandle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkHostTransition(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkDoTransitionQuickmatch(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkDoTransitionQuickmatchAsync(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkDoTransitionQuickmatchWithGroup(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   */
  export function networkJoinGroupActivity(): void;
  /**
   *
   */
  export function _0xB13E88E655E5A3BC(): void;
  /**
   *
   */
  export function _0x6512765E3BE78C50(): void;
  /**
   *
   */
  export function _0x0DBD5D7E3C5BEC3B(): void;
  /**
   *
   */
  export function _0x5DC577201723960A(): void;
  /**
   *
   */
  export function _0x5A6AA44FF8E931E6(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x261E97AD7BCF3D40(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x39917E1B4CB0F911(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkSetTransitionCreatorHandle(p0: NativeAny): void;
  /**
   *
   */
  export function networkClearTransitionCreatorHandle(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkInviteGamersToTransition(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkSetGamerInvitedToTransition(networkHandle: number): void;
  /**
   *
   */
  export function networkLeaveTransition(): void;
  /**
   *
   */
  export function networkLaunchTransition(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xA2E9C1AB8A92E8CD(p0: NativeBOOL): void;
  /**
   *
   */
  export function networkBailTransition(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkDoTransitionToGame(p0: NativeBOOL, maxPlayers: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkDoTransitionToNewGame(p0: NativeBOOL, maxPlayers: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkDoTransitionToFreemode(p0: NativeAny, p1: NativeAny, p2: NativeBOOL, players: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkDoTransitionToNewFreemode(p0: NativeAny, p1: NativeAny, players: number, p3: NativeBOOL, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   */
  export function networkIsTransitionToGame(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetTransitionMembers(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkApplyTransitionParameter(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEBEFC2E77084F599(p0: NativeAny, p1: string, p2: NativeBOOL): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkSendTransitionGamerInstruction(networkHandle: number, p1: string, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkMarkTransitionGamerAsFullyJoined(p0: NativeAny): void;
  /**
   *
   */
  export function networkIsTransitionHost(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkIsTransitionHostFromHandle(networkHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkGetTransitionHost(networkHandle: number): void;
  /**
   *
   */
  export function networkIsInTransition(): void;
  /**
   *
   */
  export function networkIsTransitionStarted(): void;
  /**
   *
   */
  export function networkIsTransitionBusy(): void;
  /**
   *
   */
  export function networkIsTransitionMatchmaking(): void;
  /**
   *
   */
  export function _0xC571D0E77D8BBC29(): void;
  /**
   *
   */
  export function networkOpenTransitionMatchmaking(): void;
  /**
   *
   */
  export function networkCloseTransitionMatchmaking(): void;
  /**
   *
   */
  export function _0x37A4494483B9F5C9(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x0C978FDA19692C2C(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   */
  export function _0xD0A484CB2F829FBE(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkSetTransitionActivityId(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkChangeTransitionSlots(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x973D76AA760A6CB6(p0: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkHasPlayerStartedTransition(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkAreTransitionDetailsValid(p0: NativeAny): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkJoinTransition(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkHasInvitedGamerToTransition(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3F9990BF5F22759C(p0: NativeAny): void;
  /**
   *
   */
  export function networkIsActivitySession(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkBlockInvites2(p0: NativeBOOL): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkSendPresenceInvite(networkHandle: number, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkSendPresenceTransitionInvite(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1171A97A3D3981B6(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x742B58F723233ED9(p0: NativeAny): void;
  /**
   *
   */
  export function networkGetNumPresenceInvites(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkAcceptPresenceInvite(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkRemovePresenceInvite(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetPresenceInviteId(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetPresenceInviteInviter(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetPresenceInviteHandle(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetPresenceInviteSessionId(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x24409FC4C55CB22D(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD39B3FFF8FFDD5BF(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x728C4CC7920CD102(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3DBF2DF0AEB7D289(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkAnalPurple777(p0: NativeAny): void;
  /**
   *
   */
  export function networkHasFollowInvite(): void;
  /**
   *
   */
  export function networkActionFollowInvite(): void;
  /**
   *
   */
  export function networkClearFollowInvite(): void;
  /**
   *
   */
  export function _0xEBF8284D8CADEB53(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkRemoveTransitionInvite(p0: NativeAny): void;
  /**
   *
   */
  export function networkRemoveAllTransitionInvite(): void;
  /**
   *
   */
  export function _0xF083835B70BA9BFE(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkInviteGamers(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkHasInvitedGamer(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetCurrentlySelectedGamerHandleFromInviteMenu(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkSetCurrentlySelectedGamerHandleFromInviteMenu(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x66F010A4B031A331(p0: NativeAny): void;
  /**
   *
   * @param {NativePlayer} p0 undefined
   */
  export function pocakGay(p0: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0D77A82DC2D0DA59(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function filloutPmPlayerList(networkHandle: number, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function filloutPmPlayerListWithNames(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function usingNetworkWeapontype(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkCheckDataManagerForHandle(p0: NativeAny): void;
  /**
   *
   */
  export function _0x2FC5650B0271CB57(): void;
  /**
   *
   */
  export function _0x01ABCE5E7CBDA196(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x120364DE2845DAF8(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0xFD8B834A8BA05048(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkIsChattingInPlatformParty(networkHandle: number): void;
  /**
   *
   */
  export function _0x2BF66D2E7414F686(): void;
  /**
   *
   */
  export function _0x14922ED3E38761F0(): void;
  /**
   *
   */
  export function _0xFA2888E3833C8E96(): void;
  /**
   *
   */
  export function _0x25D990F8E0E3F13C(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF1B84178F8674195(p0: NativeAny): void;
  /**
   *
   */
  export function networkGetRandomInt(): void;
  /**
   *
   * @param {number} rangeStart undefined
   */
  export function networkGetRandomIntInRange(rangeStart: number, rangeEnd: number): void;
  /**
   *
   */
  export function networkPlayerIsCheater(): void;
  /**
   *
   */
  export function networkPlayerIsUnk(): void;
  /**
   *
   */
  export function networkPlayerIsBadsport(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkIsPlayerInScript(player: NativePlayer, p1: number, scriptHash: NativeHash): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function badSportPlayerLeftDetected(networkHandle: number, event: number, amountReceived: number): void;
  /**
   *
   * @param {NativeEntity} p0 undefined
   */
  export function _0xE66C690248F11150(p0: NativeEntity, p1: NativeAny): void;
  /**
   *
   * @param {number} lobbySize undefined
   */
  export function networkSetThisScriptIsNetworkScript(lobbySize: number, p1: NativeBOOL, playerId: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkIsThisScriptMarked(p0: NativeAny, p1: NativeBOOL, p2: NativeAny): void;
  /**
   *
   */
  export function networkGetThisScriptIsNetworkScript(): void;
  /**
   *
   */
  export function networkGetNumParticipantsHost(): void;
  /**
   *
   */
  export function networkGetNumParticipants(): void;
  /**
   *
   */
  export function networkGetScriptStatus(): void;
  /**
   *
   * @param {number} vars undefined
   */
  export function networkRegisterHostBroadcastVariables(vars: number, sizeofVars: number): void;
  /**
   *
   * @param {number} vars undefined
   */
  export function networkRegisterPlayerBroadcastVariables(vars: number, numVars: number): void;
  /**
   *
   */
  export function _0x64F62AFB081E260D(): void;
  /**
   *
   */
  export function _0x5D10B3795F3FC886(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkGetPlayerIndex(player: NativePlayer): void;
  /**
   *
   * @param {number} index undefined
   */
  export function networkGetParticipantIndex(index: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function networkGetPlayerIndexFromPed(ped: NativePed): void;
  /**
   *
   */
  export function networkGetNumConnectedPlayers(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkIsPlayerConnected(player: NativePlayer): void;
  /**
   *
   */
  export function _0xCF61D4B4702EE9EB(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkIsParticipantActive(p0: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkIsPlayerActive(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkIsPlayerAParticipant(p0: NativeAny): void;
  /**
   *
   */
  export function networkIsHostOfThisScript(): void;
  /**
   *
   */
  export function networkGetHostOfThisScript(): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function networkGetHostOfScript(scriptName: string, p1: number, p2: number): void;
  /**
   *
   */
  export function networkSetMissionFinished(): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function networkIsScriptActive(scriptName: string, player: NativePlayer, p2: NativeBOOL, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetNumScriptParticipants(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function networkGetPlayerPedFromIndex(): void;
  /**
   *
   * @param {NativePlayer} p0 undefined
   */
  export function _0x1AD5B71586B94820(p0: NativePlayer, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function _0x2302C0264EA58D31(): void;
  /**
   *
   */
  export function _0x741A3D8380319A81(): void;
  /**
   *
   */
  export function participantId(): void;
  /**
   *
   */
  export function participantIdToInt(): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function networkGetDestroyerOfNetworkId(netId: number, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetDesroyerOfEntity(p0: NativeAny, p1: NativeAny, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkGetEntityKillerOfPlayer(player: NativePlayer, weaponHash: NativeHash): void;
  /**
   *
   * @param {number} x undefined
   */
  export function networkResurrectLocalPlayer(x: number, y: number, z: number, heading: number, unk: NativeBOOL, changetime: NativeBOOL): void;
  /**
   *
   * @param {number} time undefined
   */
  export function networkSetLocalPlayerInvincibleTime(time: number): void;
  /**
   *
   */
  export function networkIsLocalPlayerInvincible(): void;
  /**
   *
   * @param {number} player undefined
   */
  export function networkDisableInvincibleFlashing(player: number, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x524FF0AEFF9C3973(p0: NativeAny): void;
  /**
   *
   * @param {NativeEntity} p0 undefined
   */
  export function _0xB07D3185E11657A5(p0: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkGetNetworkIdFromEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function networkGetEntityFromNetworkId(netId: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkGetEntityIsNetworked(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkGetEntityIsLocal(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkRegisterEntityAsNetworked(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkUnregisterNetworkedEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} netID undefined
   */
  export function networkDoesNetworkIdExist(netID: number): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function networkDoesEntityExistWithNetworkId(netId: number): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function networkRequestControlOfNetworkId(netId: number): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function networkHasControlOfNetworkId(netId: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkRequestControlOfEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} doorID undefined
   */
  export function networkRequestControlOfDoor(doorID: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkHasControlOfEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function networkHasControlOfPickup(pickup: NativePickup): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function networkHasControlOfDoor(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function networkHasControlOfPavementStats(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function vehToNet(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function pedToNet(ped: NativePed): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function objToNet(object: NativeObject): void;
  /**
   *
   * @param {number} netHandle undefined
   */
  export function netToVeh(netHandle: number): void;
  /**
   *
   * @param {number} netHandle undefined
   */
  export function netToPed(netHandle: number): void;
  /**
   *
   * @param {number} netHandle undefined
   */
  export function netToObj(netHandle: number): void;
  /**
   *
   * @param {number} netHandle undefined
   */
  export function netToEnt(netHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkGetLocalHandle(networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {string} userId undefined
   */
  export function networkHandleFromUserId(userId: string, networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {string} memberId undefined
   */
  export function networkHandleFromMemberId(memberId: string, networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkHandleFromPlayer(player: NativePlayer, networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkHashFromPlayerHandle(player: NativePlayer): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkHashFromGamerHandle(networkHandle: number): void;
  /**
   *
   * @param {NativePlayer} friendIndex undefined
   */
  export function networkHandleFromFriend(friendIndex: NativePlayer, networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkGamertagFromHandleStart(networkHandle: number): void;
  /**
   *
   */
  export function networkGamertagFromHandlePending(): void;
  /**
   *
   */
  export function networkGamertagFromHandleSucceeded(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkGetGamertagFromHandle(networkHandle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD66C9E72B3CC4982(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x58CC181719256197(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {number} netHandle1 undefined
   */
  export function networkAreHandlesTheSame(netHandle1: number, netHandle2: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkIsHandleValid(networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkGetPlayerFromGamerHandle(networkHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkMemberIdFromGamerHandle(networkHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkIsGamerInMySession(networkHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkShowProfileUi(networkHandle: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkPlayerGetName(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkPlayerGetUserid(player: NativePlayer, userID: string): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkPlayerIsRockstarDev(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkPlayerSomething(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkIsInactiveProfile(p0: NativeAny): void;
  /**
   *
   */
  export function networkGetMaxFriends(): void;
  /**
   *
   */
  export function networkGetFriendCount(): void;
  /**
   *
   * @param {number} friendIndex undefined
   */
  export function networkGetFriendName(friendIndex: number): void;
  /**
   *
   * @param {number} friendIndex undefined
   */
  export function networkGetFriendNameFromIndex(friendIndex: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function networkIsFriendOnline(name: string): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkIsFriendOnline2(networkHandle: number): void;
  /**
   *
   * @param {string} friendName undefined
   */
  export function networkIsFriendInSameTitle(friendName: string): void;
  /**
   *
   * @param {string} friendName undefined
   */
  export function networkIsFriendInMultiplayer(friendName: string): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkIsFriend(networkHandle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkIsPendingFriend(p0: NativeAny): void;
  /**
   *
   */
  export function networkIsAddingFriend(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkAddFriend(networkHandle: number, message: string): void;
  /**
   *
   * @param {number} friendIndex undefined
   */
  export function networkIsFriendIndexOnline(friendIndex: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x1B857666604B1A74(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x82377B65E943F72D(p0: NativeAny): void;
  /**
   *
   */
  export function networkCanSetWaypoint(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB309EBEA797E001F(p0: NativeAny): void;
  /**
   *
   */
  export function _0x26F07DD83A5F7F98(): void;
  /**
   *
   */
  export function networkHasHeadset(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x7D395EA61622E116(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xC0D2AF00BCC234CA(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGamerHasHeadset(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkIsGamerTalking(p0: number): void;
  /**
   *
   * @param {number} player undefined
   */
  export function networkCanCommunicateWithGamer(player: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkIsGamerMutedByMe(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkAmIMutedByGamer(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkIsGamerBlockedByMe(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkAmIBlockedByGamer(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB57A49545BA53CE7(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCCA4318E1AB03F1F(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x07DD29D5E22763F1(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x135F9B7B7ADD2185(p0: NativeAny): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkIsPlayerTalking(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkPlayerHasHeadset(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkIsPlayerMutedByMe(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkAmIMutedByPlayer(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkIsPlayerBlockedByMe(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkAmIBlockedByPlayer(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetPlayerLoudness(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSetTalkerProximity(p0: number): void;
  /**
   *
   */
  export function networkGetTalkerProximity(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function networkSetVoiceActive(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xCFEB46DCD7D8D5EB(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkOverrideTransitionChat(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function networkSetTeamOnlyChat(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} team undefined
   */
  export function _0x6F697A66CE78674E(team: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function networkSetOverrideSpectatorMode(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x3C5C1E2C2FF814B1(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x9D7AFCBF21C51712(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xF46A1E03E8755980(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x6A5D89D7769A40D8(p0: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkOverrideChatRestrictions(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkOverrideSendRestrictions(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkChatMute(p0: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkOverrideReceiveRestrictions(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x0FF2862B61A58AF9(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkSetVoiceChannel(p0: NativeAny): void;
  /**
   *
   */
  export function networkClearVoiceChannel(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function isNetworkVehicleBeenDamagedByAnyObject(x: number, y: number, z: number): void;
  /**
   *
   */
  export function _0xF03755696450470C(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5E3AA4CA2B6FB0EE(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCA575C391FEA25CC(p0: NativeAny): void;
  /**
   *
   * @param {NativePlayer} p0 undefined
   */
  export function _0xADB57E5B663CCA8B(p0: NativePlayer, p1: number, p2: number): void;
  /**
   *
   */
  export function networkIsTextChatActive(): void;
  /**
   *
   */
  export function shutdownAndLaunchSinglePlayerGame(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function networkSetFriendlyFireOption(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSetRichPresence(p0: number, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkSetRichPresence2(p0: number, gxtLabel: string): void;
  /**
   *
   */
  export function networkGetTimeoutTime(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkRespawnCoords(player: NativePlayer, x: number, y: number, z: number, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkRespawnPlayer(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x715135F4B82AC90D(entity: NativeEntity): void;
  /**
   *
   */
  export function networkPlayerIsInClan(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkClanPlayerIsActive(networkHandle: number): void;
  /**
   *
   * @param {number} clanDesc undefined
   */
  export function networkClanPlayerGetDesc(clanDesc: number, bufferSize: number, networkHandle: number): void;
  /**
   *
   * @param {number} clanDesc undefined
   */
  export function _0x7543BB439F63792B(clanDesc: number, bufferSize: number): void;
  /**
   *
   * @param {number} clanDesc undefined
   */
  export function _0xF45352426FF3A4F0(clanDesc: number, bufferSize: number, networkHandle: number): void;
  /**
   *
   */
  export function getNumMembershipDesc(): void;
  /**
   *
   * @param {number} memberDesc undefined
   */
  export function networkClanGetMembershipDesc(memberDesc: number, p1: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function networkClanDownloadMembership(networkHandle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkClanDownloadMembershipPending(p0: NativeAny): void;
  /**
   *
   */
  export function networkIsClanMembershipFinishedDownloading(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkClanRemoteMembershipsAreInCache(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkClanGetMembershipCount(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkClanGetMembershipValid(p0: number, p1: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkClanGetMembership(p0: number, clanMembership: number, p2: number): void;
  /**
   *
   * @param {number} clanDesc undefined
   */
  export function networkClanJoin(clanDesc: number): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function networkClanAnimation(animDict: string, animName: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x2B51EDBEFC301339(p0: number, p1: string): void;
  /**
   *
   */
  export function _0xC32EA7A2F6CA7557(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkGetPlayerCrewEmblemTxdName(player: NativePlayer, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x13518FF1C6B28938(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA134777FF7F33331(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x113E6E3E50E286B0(p0: NativeAny): void;
  /**
   *
   */
  export function networkGetPrimaryClanDataClear(): void;
  /**
   *
   */
  export function networkGetPrimaryClanDataCancel(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetPrimaryClanDataStart(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function networkGetPrimaryClanDataPending(): void;
  /**
   *
   */
  export function networkGetPrimaryClanDataSuccess(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetPrimaryClanDataNew(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function setNetworkIdCanMigrate(netId: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function setNetworkIdExistsOnAllMachines(netId: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function setNetworkIdSyncToPlayer(netId: number, player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkSetEntityCanBlend(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkSetEntityInvisibleToNetwork(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function setNetworkIdVisibleInCutscene(netId: number, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xAAA553E7DD28A457(p0: NativeBOOL): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function _0x3FA36981311FA4FF(netId: number, state: NativeBOOL): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function networkCanNetworkIdBeSeen(netId: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setLocalPlayerVisibleInCutscene(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setLocalPlayerInvisibleLocally(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function setLocalPlayerVisibleLocally(p0: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerInvisibleLocally(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function setPlayerVisibleLocally(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function fadeOutLocalPlayer(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkFadeOutEntity(entity: NativeEntity, normal: NativeBOOL, slow: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkFadeInEntity(entity: NativeEntity, state: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x631DC5DFF4B110E3(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x422F32CC7E56ABAD(p0: NativeAny): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function isPlayerInCutscene(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setEntityVisibleInCutscene(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityLocallyInvisible(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function setEntityLocallyVisible(entity: NativeEntity): void;
  /**
   *
   * @param {number} netID undefined
   */
  export function isDamageTrackerActiveOnNetworkId(netID: number): void;
  /**
   *
   * @param {number} netID undefined
   */
  export function activateDamageTrackerOnNetworkId(netID: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function isSphereVisibleToPlayer(p0: NativeAny, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function reserveNetworkMissionObjects(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function reserveNetworkMissionPeds(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function reserveNetworkMissionVehicles(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function canRegisterMissionObjects(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function canRegisterMissionPeds(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function canRegisterMissionVehicles(amount: number): void;
  /**
   *
   * @param {number} ped_amt undefined
   */
  export function canRegisterMissionEntities(ped_amt: number, vehicle_amt: number, object_amt: number, pickup_amt: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function getNumReservedMissionObjects(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function getNumReservedMissionPeds(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function getNumReservedMissionVehicles(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x12B6281B6C6706C0(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xCB215C4B56A7FAE7(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x0CD9AB83489430EA(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xC7BE335216B5EC7C(): void;
  /**
   *
   */
  export function _0x0C1F7D49C39D2289(): void;
  /**
   *
   */
  export function _0x0AFCE529F69B21FF(): void;
  /**
   *
   */
  export function _0xA72835064DD63E4C(): void;
  /**
   *
   */
  export function getNetworkTime(): void;
  /**
   *
   */
  export function _0x89023FBBF9200E9F(): void;
  /**
   *
   */
  export function hasNetworkTimeStarted(): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function getTimeOffset(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function isTimeLessThan(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function isTimeMoreThan(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function isTimeEqualTo(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function getTimeDifference(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} time undefined
   */
  export function getTimeAsString(time: number): void;
  /**
   *
   * @param {number} unixEpoch undefined
   */
  export function getDateAndTimeFromUnixEpoch(unixEpoch: number, timeStructure: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function networkSetInSpectatorMode(toggle: NativeBOOL, playerPed: NativePed): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x419594E137637120(p0: NativeBOOL, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xFC18DB55AE19E046(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x5C707A667DF8B9FA(p0: NativeBOOL, p1: NativeAny): void;
  /**
   *
   */
  export function networkIsInSpectatorMode(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function networkSetInMpCutscene(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   */
  export function networkIsInMpCutscene(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkIsPlayerInMpCutscene(player: NativePlayer): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function setNetworkVehicleRespotTimer(netId: number, time: number): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function setNetworkObjectNonContact(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function usePlayerColourInsteadOfTeamColour(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x21D04D7BC538C146(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x77758139EC9B66C7(p0: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function networkCreateSynchronisedScene(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p6: number, p7: number, p8: number, p9: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function networkAddPedToSynchronisedScene(ped: NativePed, netScene: number, animDict: string, animName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function networkAddEntityToSynchronisedScene(entity: NativeEntity, netScene: number, animDict: string, animName: string, speed: number, speedMulitiplier: number, flag: number): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function networkForceLocalUseOfSyncedSceneCamera(netScene: number, animDict: string, animName: string): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function networkAttachSynchronisedSceneToEntity(netScene: number, entity: NativeEntity, bone: number): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function networkStartSynchronisedScene(netScene: number): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function networkStopSynchronisedScene(netScene: number): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function networkConvertSynchronisedSceneToSynchronizedScene(netScene: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC9B43A33D09CADA7(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xFB1F9381E80FA13F(p0: number, p1: NativeAny): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0x5A6FFA2433E2F14C(player: NativePlayer, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, flags: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0x4BA92A18502BCA61(player: NativePlayer, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, flags: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3C891A251567DFCE(p0: NativeAny): void;
  /**
   *
   */
  export function _0xFB8F2A6F3DF08CBE(): void;
  /**
   *
   * @param {number} randomInt undefined
   */
  export function networkGetRespawnResult(randomInt: number, coordinates: NativeVector3, heading: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6C34F1208B8923FD(p0: NativeAny): void;
  /**
   *
   */
  export function _0x17E0198B3882C2CB(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFB680D403909DC70(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function networkEndTutorialSession(): void;
  /**
   *
   */
  export function networkIsInTutorialSession(): void;
  /**
   *
   */
  export function _0xB37E4E6A2388CA7B(): void;
  /**
   *
   */
  export function _0x35F0B98A8387274D(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3B39236746714134(p0: NativeAny): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function networkIsPlayerEqualToIndex(player: NativePlayer, index: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBBDF066252829606(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x919B3C98ED8292F9(p0: NativeAny): void;
  /**
   *
   * @param {number} Hours undefined
   */
  export function networkOverrideClockTime(Hours: number, Minutes: number, Seconds: number): void;
  /**
   *
   */
  export function networkClearClockTimeOverride(): void;
  /**
   *
   */
  export function networkIsClockTimeOverridden(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkAddEntityArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function networkAddEntityAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x25B99872D588A101(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkRemoveEntityArea(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE64A3CA08DFA37A9(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x4DF7CFFF471A7FB1(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x4A2D4E8BF4265B0F(p0: NativeAny): void;
  /**
   *
   * @param {number} netID undefined
   */
  export function networkSetNetworkIdDynamic(netID: number, toggle: NativeBOOL): void;
  /**
   *
   */
  export function networkRequestCloudBackgroundScripts(): void;
  /**
   *
   */
  export function hasBgScriptBeenDownloaded(): void;
  /**
   *
   */
  export function networkRequestCloudTunables(): void;
  /**
   *
   */
  export function hasTunablesBeenDownloaded(): void;
  /**
   *
   */
  export function _0x10BD227A753B0D84(): void;
  /**
   *
   * @param {string} tunableContext undefined
   */
  export function networkDoesTunableExist(tunableContext: string, tunableName: string): void;
  /**
   *
   * @param {string} tunableContext undefined
   */
  export function networkAccessTunableInt(tunableContext: string, tunableName: string, value: number): void;
  /**
   *
   * @param {string} tunableContext undefined
   */
  export function networkAccessTunableFloat(tunableContext: string, tunableName: string, value: number): void;
  /**
   *
   * @param {string} tunableContext undefined
   */
  export function networkAccessTunableBool(tunableContext: string, tunableName: string): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function networkDoesTunableExistHash(tunableContext: NativeHash, tunableName: NativeHash): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function networkAccessTunableIntHash(tunableContext: NativeHash, tunableName: NativeHash, value: number): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function networkAccessTunableFloatHash(tunableContext: NativeHash, tunableName: NativeHash, value: number): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function networkAccessTunableBoolHash(tunableContext: NativeHash, tunableName: NativeHash): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function networkAccessTunableBoolHashFailVal(tunableContext: NativeHash, tunableName: NativeHash, defaultValue: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} contentHash undefined
   */
  export function getTunablesContentModifierId(contentHash: NativeHash): void;
  /**
   *
   */
  export function _0x7DB53B37A2F211A0(): void;
  /**
   *
   */
  export function networkResetBodyTracker(): void;
  /**
   *
   */
  export function _0xD38C4A6D047C019D(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2E0BF682CC778D49(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x0EDE326D47CD0F3E(ped: NativePed, player: NativePlayer): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function networkExplodeVehicle(vehicle: NativeVehicle, isAudible: NativeBOOL, isInvisible: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0xCD71A4ECAB22709E(entity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xA7E30DE9272B6D49(ped: NativePed, x: number, y: number, z: number, p4: number): void;
  /**
   *
   * @param {number} netID undefined
   */
  export function _0x407091CF6037118E(netID: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkSetPropertyId(p0: NativeAny): void;
  /**
   *
   */
  export function networkClearPropertyId(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x367EF5E2F439B4C6(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x94538037EE44F5CF(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xBD0BE0BFC927EAC1(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x237D5336A9A54108(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function networkCopyPedBlendData(ped: NativePed, player: NativePlayer): void;
  /**
   *
   */
  export function _0xF2EAC213D5EA0623(): void;
  /**
   *
   */
  export function _0xEA14EEF5B7CD2C30(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB606E6CC59664972(p0: NativeAny): void;
  /**
   *
   */
  export function _0x1D4DC17C38FEAFF0(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x662635855957C411(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB4271092CA7EDF48(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCA94551B50B4932C(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2A7776C709904AB0(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6F44CBF56D79FAC0(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x58C21165F6545892(p0: string, p1: string): void;
  /**
   *
   */
  export function _0x2EAC52B4019E2782(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function setStoreEnabled(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA2F952104FC6DD4B(p0: NativeAny): void;
  /**
   *
   */
  export function _0x72D0706CD6CCDB58(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x722F5D28B61C5EA8(p0: NativeAny): void;
  /**
   *
   */
  export function _0x883D79C4071E18B3(): void;
  /**
   *
   */
  export function _0x265635150FB0D82E(): void;
  /**
   *
   */
  export function _0x444C4525ECE0A4B9(): void;
  /**
   *
   */
  export function _0x59328EB08C5CEB2B(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFAE628F1E9ADB239(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC64DED7EF0D2FE37(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x4C61B39930D045DA(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3A3D5568AF297CD5(p0: NativeAny): void;
  /**
   *
   */
  export function downloadCheck(): void;
  /**
   *
   */
  export function _0xC7ABAC5DE675EE3B(): void;
  /**
   *
   */
  export function networkEnableMotionDrugged(): void;
  /**
   *
   */
  export function _0x8B0C2964BA471961(): void;
  /**
   *
   */
  export function _0x88B588B41FF7868E(): void;
  /**
   *
   */
  export function _0x67FC09BC554A75E5(): void;
  /**
   *
   */
  export function _0x966DD84FB6A46017(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x152D90E4C1B4738A(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0x9FEDF86898F100E9(): void;
  /**
   *
   */
  export function _0x5E24341A7F92A74B(): void;
  /**
   *
   */
  export function _0x24E4E51FC16305F9(): void;
  /**
   *
   */
  export function _0xFBC5E768C7A77A6A(): void;
  /**
   *
   */
  export function _0xC55A0B40FFB1ED23(): void;
  /**
   *
   */
  export function _0x17440AA15D1D3739(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9BF438815F5D96EA(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x692D58DF40657E8C(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x158EC424F35EC469(p0: string, p1: NativeBOOL, contentType: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC7397A83F7A2A462(p0: NativeAny, p1: NativeAny, p2: NativeBOOL, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6D4CB481FAC835E8(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD5A4B59980401588(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3195F8DD0D531052(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF9E1CCAE8BA4C281(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9F6E2821885CAEE2(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x678BB03C1A3BD51E(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setBalanceAddMachine(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function setBalanceAddMachines(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA7862BC5ED1DFD7E(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function networkGetBackgroundLoadingRecipients(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5324A0E3E4CE3570(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   */
  export function _0xE9B99B6853181409(): void;
  /**
   *
   */
  export function _0xD53ACDBEF24A46E8(): void;
  /**
   *
   */
  export function _0x02ADA21EA2F6918F(): void;
  /**
   *
   */
  export function _0x941E5306BCD7C2C7(): void;
  /**
   *
   */
  export function _0xC87E740D9F3872CC(): void;
  /**
   *
   */
  export function _0xEDF7F927136C224B(): void;
  /**
   *
   */
  export function _0xE0A6138401BCB837(): void;
  /**
   *
   */
  export function _0x769951E2455E2EB5(): void;
  /**
   *
   */
  export function _0x3A17A27D75C74887(): void;
  /**
   *
   */
  export function _0xBA96394A0EECFA65(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function getPlayerAdvancedModifierPrivileges(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x584770794D758C18(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8C8D2739BA44AF0F(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x703F12425ECA8BF5(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xAEAB987727C5A8A4(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function getContentCategory(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getContentId(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getRootContentId(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBF09786A7FCAB582(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getContentDescriptionHash(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xBAF6BABF9E7CCC13(p0: number, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCFD115B373C0DF63(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getContentFileVersion(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1D610EB0FEA716D9(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7FCC39C46C3C03BD(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x32DD916F3F7C9672(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3054F114121C21EA(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA9240A96C74CCA13(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1ACCFBA3D8DAB2EE(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x759299C5BB31D2A9(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x87E5C46C187FE0AE(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x4E548C0D7AE39FF9(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x70EA8DA57840F9BE(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x993CBE59D350D225(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x171DF6A0C07FB3DC(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7FD2990AF016795E(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5E0165278F6339EE(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2D5DC831176D0114(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEBFA8D50ADDC54C4(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x162C23CA83ED0A62(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x40F7E66472DF3E5C(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5A34CD9C3C5BEC44(p0: NativeAny): void;
  /**
   *
   */
  export function _0x68103E2247887242(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1DE0F5F50D723CAA(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x274A1519DFC1094F(p0: NativeAny, p1: NativeBOOL, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD05D1A6C74DA3498(p0: NativeAny, p1: NativeBOOL, p2: NativeAny): void;
  /**
   *
   */
  export function _0x45E816772E93A9DB(): void;
  /**
   *
   */
  export function _0x299EF3C576773506(): void;
  /**
   *
   */
  export function _0x793FF272D5B365F4(): void;
  /**
   *
   */
  export function _0x5A0A3D1A186A5508(): void;
  /**
   *
   */
  export function _0xA1E5E0204A6FCC70(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xB746D20B17F2A229(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0x63B406D7884BFA95(): void;
  /**
   *
   */
  export function _0x4D02279C83BE69FE(): void;
  /**
   *
   */
  export function _0x597F8DBA9B206FC7(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5CAE833B0EE0C500(p0: NativeAny): void;
  /**
   *
   */
  export function _0x61A885D3F7CFEE9A(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xF98DDE0A8ED09323(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xFD75DABC0957BF33(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF53E48461B71EECB(p0: NativeAny): void;
  /**
   *
   * @param {string} heistName undefined
   */
  export function facebookSetHeistComplete(heistName: string, cashEarned: number, xpEarned: number): void;
  /**
   *
   */
  export function facebookSetCreateCharacterComplete(): void;
  /**
   *
   * @param {number} milestoneId undefined
   */
  export function facebookSetMilestoneComplete(milestoneId: number): void;
  /**
   *
   */
  export function facebookIsSendingData(): void;
  /**
   *
   */
  export function facebookDoUnkCheck(): void;
  /**
   *
   */
  export function facebookIsAvailable(): void;
  /**
   *
   * @param {number} PlayerHandle undefined
   */
  export function textureDownloadRequest(PlayerHandle: number, FilePath: string, Name: string, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0B203B4AFDE53A4F(p0: NativeAny, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x308F96458B7087CC(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function textureDownloadRelease(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function textureDownloadHasFailed(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function textureDownloadGetName(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8BD6C6DEA20E82C6(p0: NativeAny): void;
  /**
   *
   */
  export function _0x60EDD13EB3AC1FF3(): void;
  /**
   *
   */
  export function networkIsCableConnected(): void;
  /**
   *
   */
  export function _0x66B59CFFD78467AF(): void;
  /**
   *
   */
  export function _0x606E4D3E3CCCF3EB(): void;
  /**
   *
   */
  export function isRockstarBanned(): void;
  /**
   *
   */
  export function isSocialclubBanned(): void;
  /**
   *
   */
  export function canPlayOnline(): void;
  /**
   *
   */
  export function _0x422D396F80A96547(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA699957E60D80214(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xC22912B1D85F26B1(p0: number, p1: number, p2: NativeVector3): void;
  /**
   *
   */
  export function _0x593570C289A77688(): void;
  /**
   *
   */
  export function _0x91B87C55093DE351(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x36391F397731595D(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xDEB2B99A1AF1A2A6(p0: NativeAny): void;
  /**
   *
   */
  export function _0x9465E683B12D3F6B(): void;
  /**
   *
   */
  export function networkUpdatePlayerScars(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xC505036A35AFD01B(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x267C78C60E806B9A(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6BFF5F84102DF80A(p0: NativeAny): void;
  /**
   *
   */
  export function _0x5C497525F803486B(): void;
  /**
   *
   */
  export function _0x6FB7BB3607D27FA2(): void;
  /**
   *
   */
  export function _0x45A83257ED02D9BC(): void;
  /**
   *
   * @param {number} character undefined
   */
  export function getNumDecorations(character: number): void;
  /**
   *
   * @param {number} character undefined
   */
  export function _0xFF56381874F82086(character: number, p1: number, outComponent: number): void;
  /**
   *
   * @param {number} outComponent undefined
   */
  export function initShopPedComponent(outComponent: number): void;
  /**
   *
   * @param {number} outProp undefined
   */
  export function initShopPedProp(outProp: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x50F457823CE6EB5F(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} character undefined
   */
  export function getNumPropsFromOutfit(character: number, p1: number, p2: number, p3: NativeBOOL, p4: number, componentId: number): void;
  /**
   *
   * @param {number} componentId undefined
   */
  export function getShopPedQueryComponent(componentId: number, outComponent: number): void;
  /**
   *
   * @param {NativeHash} p0 undefined
   */
  export function getShopPedComponent(p0: NativeHash, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getShopPedQueryProp(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5D5CAFF661DDF6FC(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getHashNameForComponent(entity: NativeEntity, componentId: number, drawableVariant: number, textureVariant: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function getHashNameForProp(entity: NativeEntity, componentId: number, propIndex: number, propTextureIndex: number): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function _0xC17AD0E5752BECDA(componentHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function getVariantComponent(componentHash: NativeHash, componentId: number, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function getNumForcedComponents(componentHash: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x017568A8182D98A6(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function getForcedComponent(componentHash: NativeHash, componentId: number, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE1CA84EBF72E691D(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function _0x341DE7ED1D2A1BFD(componentHash: NativeHash, drawableSlotHash: NativeHash, componentId: number): void;
  /**
   *
   * @param {number} character undefined
   */
  export function _0xF3FBE2D50A6A8C28(character: number, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getShopPedQueryOutfit(p0: NativeAny, outfit: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getShopPedOutfit(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function getShopPedOutfitLocate(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA9F9C2E0FDE11CBB(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} outfit undefined
   */
  export function getPropFromOutfit(outfit: NativeAny, slot: number, item: NativeAny): void;
  /**
   *
   */
  export function getNumDlcVehicles(): void;
  /**
   *
   * @param {number} dlcVehicleIndex undefined
   */
  export function getDlcVehicleModel(dlcVehicleIndex: number): void;
  /**
   *
   * @param {number} dlcVehicleIndex undefined
   */
  export function getDlcVehicleData(dlcVehicleIndex: number, outData: number): void;
  /**
   *
   * @param {number} dlcVehicleIndex undefined
   */
  export function getDlcVehicleFlags(dlcVehicleIndex: number): void;
  /**
   *
   */
  export function getNumDlcWeapons(): void;
  /**
   *
   * @param {number} dlcWeaponIndex undefined
   */
  export function getDlcWeaponData(dlcWeaponIndex: number, outData: number): void;
  /**
   *
   * @param {number} dlcWeaponIndex undefined
   */
  export function getNumDlcWeaponComponents(dlcWeaponIndex: number): void;
  /**
   *
   * @param {number} dlcWeaponIndex undefined
   */
  export function getDlcWeaponComponentData(dlcWeaponIndex: number, dlcWeapCompIndex: number, ComponentDataPtr: NativeAny): void;
  /**
   *
   * @param {NativeAny} dlcData undefined
   */
  export function isDlcDataEmpty(dlcData: NativeAny): void;
  /**
   *
   * @param {NativeAny} modData undefined
   */
  export function isDlcVehicleMod(modData: NativeAny): void;
  /**
   *
   * @param {number} modData undefined
   */
  export function _0xC098810437312FFF(modData: number): void;
  /**
   *
   * @param {NativeHash} dlcHash undefined
   */
  export function isDlcPresent(dlcHash: NativeHash): void;
  /**
   *
   */
  export function _0xF2E07819EF1A5289(): void;
  /**
   *
   */
  export function _0x9489659372A81585(): void;
  /**
   *
   */
  export function _0xA213B11DFF526300(): void;
  /**
   *
   */
  export function _0x8D30F648014A92B5(): void;
  /**
   *
   */
  export function getIsLoadingScreenActive(): void;
  /**
   *
   * @param {NativeAny} variable undefined
   */
  export function nullify(variable: NativeAny, unused: NativeAny): void;
  /**
   *
   */
  export function _0xD7C10C4A637992C9(): void;
  /**
   *
   */
  export function loadMpDlcMaps(): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function decorSetTime(entity: NativeEntity, propertyName: string, timestamp: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function decorSetBool(entity: NativeEntity, propertyName: string, value: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function decorSetFloat(entity: NativeEntity, propertyName: string, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function decorSetInt(entity: NativeEntity, propertyName: string, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function decorGetBool(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function decorGetFloat(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function decorGetInt(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function decorExistOn(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function decorRemove(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {string} propertyName undefined
   */
  export function decorRegister(propertyName: string, type: number): void;
  /**
   *
   * @param {string} propertyName undefined
   */
  export function decorIsRegisteredAsType(propertyName: string, type: number): void;
  /**
   *
   */
  export function decorRegisterLock(): void;
  /**
   *
   */
  export function _0x241FCA5B1AA14F75(): void;
  /**
   *
   */
  export function getTotalScInboxIds(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function scInboxMessageInit(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function isScInboxValid(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function scInboxMessagePop(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function scInboxMessageGetDataInt(p0: number, context: string, out: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function scInboxMessageGetDataBool(p0: number, p1: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function scInboxMessageGetDataString(p0: number, context: string, out: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function scInboxMessagePush(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function scInboxMessageGetString(p0: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function _0xDA024BDBD600F44A(networkHandle: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xA68D3D229F4F3B06(p0: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function scInboxMessageGetUgcdata(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {string} playerName undefined
   */
  export function _0x6AFD2CD753FEEF83(playerName: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x87E0052F08BD64E6(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {number} offset undefined
   */
  export function scInboxGetEmails(offset: number, limit: number): void;
  /**
   *
   */
  export function _0x16DA8172459434AA(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x4737980E8A283806(p0: number, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x44ACA259D67651DB(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function scEmailMessagePushGamerToRecipList(player: NativePlayer): void;
  /**
   *
   */
  export function scEmailMessageClearRecipList(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x116FB94DC4B79F17(p0: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xBFA0A56A817C6C7D(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0xBC1CC91205EC8D6E(): void;
  /**
   *
   */
  export function _0xDF649C4E9AFDD788(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1F1E9682483697C7(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x287F1F75D2803595(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x487912FD248EFDDF(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x8416FE4E4629D7D7(p0: string): void;
  /**
   *
   * @param {string} string undefined
   */
  export function scStartCheckStringTask(string: string, taskHandle: number): void;
  /**
   *
   * @param {number} taskHandle undefined
   */
  export function scHasCheckStringTaskCompleted(taskHandle: number): void;
  /**
   *
   * @param {number} taskHandle undefined
   */
  export function scGetCheckStringStatus(taskHandle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x85535ACF97FC0969(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x930DE22F07B1CCE3(p0: NativeAny): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xF6BAAAF762E1BF40(p0: string, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF22CA0FD74B80E7A(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9237E334F6E43156(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x700569DBA175A77C(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1D4446A62D35B0D0(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2E89990DDFF670C3(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD0EE05FE193646EA(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1989C6E6F67E76A8(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x07C61676E5BB52CD(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8147FFF6A718E1AD(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0F73393BAC7E6730(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD302E99EDF0449CF(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5C4EBFFA98BDB41C(p0: NativeAny): void;
  /**
   *
   */
  export function _0xFF8F3A92B75ED67A(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x4A7D6E727F941747(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x8CC469AB4D349B7C(p0: number, p1: string, p2: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x699E4A5C8C893A18(p0: number, p1: string, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x19853B5B17D77BCA(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6BFB12CE158E3DD4(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFE4C1D0D3B9CC17E(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function _0xD8122C407663B995(): void;
  /**
   *
   */
  export function _0x3001BEF2FECA3680(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x92DA6E70EF249BD1(p0: string, p1: number): void;
  /**
   *
   */
  export function _0x675721C9F644D161(): void;
  /**
   *
   */
  export function infamousByEnough007Bitch(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x225798743970412B(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x418DC16FAE452C1C(p0: number): void;
  /**
   *
   */
  export function _0xF2CA003F167E21D2(): void;
  /**
   *
   */
  export function _0xEF7D17BC6C85264C(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xB0C56BD3D808D863(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x8AA464D4E0F6ACCD(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function isInLoadingScreen(p0: NativeBOOL): void;
  /**
   *
   */
  export function isUiLoadingMultiplayer(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xC7E7181C09F33B69(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xFA1E0E893D915215(p0: NativeBOOL): void;
  /**
   *
   */
  export function getCurrentLanguageId(): void;
  /**
   *
   */
  export function getUserLanguageId(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x48621C9FCA3EBD28(p0: NativeBOOL): void;
  /**
   *
   */
  export function _0x81CBAE94390F9F89(): void;
  /**
   *
   */
  export function _0x13B350B8AD0EEE10(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x293220DA1B46CEBC(p0: number, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {string} missionNameLabel undefined
   */
  export function _0x208784099002BC30(missionNameLabel: string, p1: NativeAny): void;
  /**
   *
   */
  export function _0xEB2D525B57F42B40(): void;
  /**
   *
   */
  export function _0xF854439EFBB3B583(): void;
  /**
   *
   */
  export function _0xAF66DCEE6609B148(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x66972397E0757E7A(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {number} mode undefined
   */
  export function startRecording(mode: number): void;
  /**
   *
   */
  export function stopRecordingAndSaveClip(): void;
  /**
   *
   */
  export function stopRecordingAndDiscardClip(): void;
  /**
   *
   */
  export function _0x644546EC5287471B(): void;
  /**
   *
   */
  export function isRecording(): void;
  /**
   *
   */
  export function _0xDF4B952F7D381B95(): void;
  /**
   *
   */
  export function _0x4282E08174868BE3(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x33D47E85B476ABCD(p0: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x7E2BD3EF6C205F09(p0: string, p1: NativeBOOL): void;
  /**
   *
   */
  export function isInteriorRenderingDisabled(): void;
  /**
   *
   */
  export function _0x5AD3932DAEB1E5D3(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xE058175F8EAFE79A(p0: NativeBOOL): void;
  /**
   *
   */
  export function resetEditorValues(): void;
  /**
   *
   */
  export function activateRockstarEditor(): void;
  /**
   *
   */
  export function getOnlineVersion(): void;
}

declare module "alt" {
  /**
   */
  export function log(): void;
  /**
   */
  export function logInfo(): void;
  /**
   */
  export function logWarning(): void;
  /**
   */
  export function logError(): void;
  /**
   */
  export function getLocalPlayer(): void;
  /**
   */
  export function onServer(): void;
  /**
   * Script Event Handler
   *
   * @param {string} eventName Name of event
   */
  export function on(eventName: string, callback: (...params: any[]) => void): void;
  /**
   */
  export function emitServer(): void;
  /**
   */
  export function emit(): void;
  /**
   */
  export function toggleGameControls(): void;
  /**
   */
  export function showCursor(): void;
  /**
   */
  export function gameControlsEnabled(): void;
  /**
   */
  export function drawRect2D(): void;
  /**
   */
  export function loadModel(): void;
  /**
   * Loads an IPL
   *
   * @param {string} iplName IPL Name
   */
  export function requestIpl(iplName: string): void;
  /**
   */
  export function removeIpl(): void;
  /**
   */
  export function setModel(): void;
  /**
   */
  export function wait(): void;
  /**
   * Checks if game is in Sandbox mode
   * @returns boolean Is game in Sandbox mode
   */
  export function isInSandbox(): boolean;
  /**
   * Get Information from Discord
   * @returns DiscordInfoReturnObject Discord Information Object
   */
  export function discordInfo(): DiscordInfoReturnObject;
}
