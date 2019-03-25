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
  export function GetPlayerPed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerPedScriptIndex(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerModel(player: NativePlayer, modelHash: NativeHash): void;
  /**
   *
   * @param {number} axel undefined
   */
  export function ChangePlayerPed(axel: number, ped: NativePed, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerRgbColour(player: NativePlayer, r: number, g: number, b: number): void;
  /**
   *
   */
  export function GetNumberOfPlayers(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerTeam(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerTeam(player: NativePlayer, team: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerName(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetWantedLevelRadius(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerWantedCentrePosition(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerWantedCentrePosition(player: NativePlayer, x: number, y: number, z: number): void;
  /**
   *
   * @param {number} wantedLevel undefined
   */
  export function GetWantedLevelThreshold(wantedLevel: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerWantedLevel(player: NativePlayer, wantedLevel: number, disableNoMission: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerWantedLevelNoDrop(player: NativePlayer, wantedLevel: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerWantedLevelNow(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ArePlayerFlashingStarsAboutToDrop(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ArePlayerStarsGreyedOut(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetDispatchCopsForPlayer(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerWantedLevelGreater(player: NativePlayer, wantedLevel: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ClearPlayerWantedLevel(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerDead(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerPressingHorn(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerControl(player: NativePlayer, toggle: NativeBOOL, flags: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerWantedLevel(player: NativePlayer): void;
  /**
   *
   * @param {number} maxWantedLevel undefined
   */
  export function SetMaxWantedLevel(maxWantedLevel: number): void;
  /**
   *
   * @param {NativeAny} toggle undefined
   */
  export function SetPoliceRadarBlips(toggle: NativeAny): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPoliceIgnorePlayer(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerPlaying(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetEveryoneIgnorePlayer(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetAllRandomPedsFlee(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetAllRandomPedsFleeThisFrame(player: NativePlayer): void;
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
  export function SetIgnoreLowPriorityShockingEvents(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function SetWantedLevelMultiplier(multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetWantedLevelDifficulty(player: NativePlayer, difficulty: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ResetWantedLevelDifficulty(player: NativePlayer): void;
  /**
   *
   * @param {number} duration undefined
   */
  export function StartFiringAmnesty(duration: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ReportCrime(player: NativePlayer, crimeType: number, wantedLvlThresh: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SwitchCrimeType(player: NativePlayer, p1: number): void;
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
  export function CanPlayerStartMission(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerReadyForCutscene(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerTargettingEntity(player: NativePlayer, entity: NativeEntity): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerTargetEntity(player: NativePlayer, entity: NativeEntity): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerFreeAiming(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerFreeAimingAtEntity(player: NativePlayer, entity: NativeEntity): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetEntityPlayerIsFreeAimingAt(player: NativePlayer, entity: NativeEntity): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerLockonRangeOverride(player: NativePlayer, range: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerCanDoDriveBy(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerCanBeHassledByGangs(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerCanUseCover(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   */
  export function GetMaxWantedLevel(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerTargettingAnything(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerSprint(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ResetPlayerStamina(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function RestorePlayerStamina(player: NativePlayer, p1: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerSprintStaminaRemaining(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerSprintTimeRemaining(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerUnderwaterTimeRemaining(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerGroup(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerMaxArmour(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerControlOn(player: NativePlayer): void;
  /**
   *
   */
  export function IsPlayerCamControlDisabled(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerScriptControlOn(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerClimbing(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerBeingArrested(player: NativePlayer, atArresting: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ResetPlayerArrestState(player: NativePlayer): void;
  /**
   *
   */
  export function GetPlayersLastVehicle(): void;
  /**
   *
   */
  export function GetPlayerIndex(): void;
  /**
   *
   * @param {number} value undefined
   */
  export function IntToPlayerindex(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function IntToParticipantindex(value: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetTimeSincePlayerHitVehicle(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetTimeSincePlayerHitPed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetTimeSincePlayerDroveOnPavement(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetTimeSincePlayerDroveAgainstTraffic(player: NativePlayer): void;
  /**
   *
   * @param {NativeVehicle} player undefined
   */
  export function IsPlayerFreeForAmbientTask(player: NativeVehicle): void;
  /**
   *
   */
  export function PlayerId(): void;
  /**
   *
   */
  export function PlayerPedId(): void;
  /**
   *
   */
  export function NetworkPlayerIdToInt(): void;
  /**
   *
   * @param {number} cleanupFlags undefined
   */
  export function HasForceCleanupOccurred(cleanupFlags: number): void;
  /**
   *
   * @param {number} cleanupFlags undefined
   */
  export function ForceCleanup(cleanupFlags: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function ForceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function ForceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;
  /**
   *
   */
  export function GetCauseOfMostRecentForceCleanup(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerMayOnlyEnterThisVehicle(player: NativePlayer, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerMayNotEnterAnyVehicle(player: NativePlayer): void;
  /**
   *
   * @param {number} achievement undefined
   */
  export function GiveAchievementToPlayer(achievement: number): void;
  /**
   *
   * @param {number} achId undefined
   */
  export function SetAchievementProgression(achId: number, progression: number): void;
  /**
   *
   * @param {number} achId undefined
   */
  export function GetAchievementProgression(achId: number): void;
  /**
   *
   * @param {number} achievement undefined
   */
  export function HasAchievementBeenPassed(achievement: number): void;
  /**
   *
   */
  export function IsPlayerOnline(): void;
  /**
   *
   */
  export function IsPlayerLoggingInNp(): void;
  /**
   *
   * @param {NativeBOOL} unk undefined
   */
  export function DisplaySystemSigninUi(unk: NativeBOOL): void;
  /**
   *
   */
  export function IsSystemUiBeingDisplayed(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerInvincible(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerInvincible(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xCAC57395B151135F(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function RemovePlayerHelmet(player: NativePlayer, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GivePlayerRagdollControl(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerLockon(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} targetMode undefined
   */
  export function SetPlayerTargetingMode(targetMode: number): void;
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
  export function ClearPlayerHasDamagedAtLeastOnePed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function HasPlayerDamagedAtLeastOnePed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ClearPlayerHasDamagedAtLeastOneNonAnimalPed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function HasPlayerDamagedAtLeastOneNonAnimalPed(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetAirDragMultiplierForPlayersVehicle(player: NativePlayer, multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetSwimMultiplierForPlayer(player: NativePlayer, multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetRunSprintMultiplierForPlayer(player: NativePlayer, multiplier: number): void;
  /**
   *
   */
  export function GetTimeSinceLastArrest(): void;
  /**
   *
   */
  export function GetTimeSinceLastDeath(): void;
  /**
   *
   */
  export function AssistedMovementCloseRoute(): void;
  /**
   *
   */
  export function AssistedMovementFlushRoute(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerForcedAim(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerForcedZoom(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerForceSkipAimIntro(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function DisablePlayerFiring(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0xB885852C39CC265D(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetDisableAmbientMeleeMove(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerMaxArmour(player: NativePlayer, value: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityDeactivate(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityDeactivateFast(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityReset(player: NativePlayer): void;
  /**
   *
   * @param {NativeCam} player undefined
   */
  export function _0xC9A763D8FE87436A(player: NativeCam): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityChargeSmall(player: NativePlayer, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityChargeMedium(player: NativePlayer, p1: NativeVehicle, p2: NativeVehicle): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityChargeLarge(player: NativePlayer, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityChargeContinuous(player: NativePlayer, p2: NativePed): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityChargeAbsolute(player: NativePlayer, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityChargeNormalized(player: NativePlayer, normalizedValue: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityFillMeter(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SpecialAbilityDepleteMeter(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} playerModel undefined
   */
  export function SpecialAbilityLock(playerModel: NativeHash): void;
  /**
   *
   * @param {NativeHash} playerModel undefined
   */
  export function SpecialAbilityUnlock(playerModel: NativeHash): void;
  /**
   *
   * @param {NativeHash} playerModel undefined
   */
  export function IsSpecialAbilityUnlocked(playerModel: NativeHash): void;
  /**
   *
   * @param {NativePed} player undefined
   */
  export function IsSpecialAbilityActive(player: NativePed): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsSpecialAbilityMeterFull(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function EnableSpecialAbility(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsSpecialAbilityEnabled(player: NativePlayer): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function SetSpecialAbilityMultiplier(multiplier: number): void;
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
  export function StartPlayerTeleport(player: NativePlayer, x: number, y: number, z: number, heading: number, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function HasPlayerTeleportFinished(player: NativePlayer): void;
  /**
   *
   */
  export function StopPlayerTeleport(): void;
  /**
   *
   */
  export function IsPlayerTeleportActive(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerCurrentStealthNoise(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerHealthRechargeMultiplier(player: NativePlayer, regenRate: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerWeaponDamageModifier(player: NativePlayer, damageAmount: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerWeaponDefenseModifier(player: NativePlayer, modifier: NativeScrHandle): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerMeleeWeaponDamageModifier(player: NativePlayer, modifier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerMeleeWeaponDefenseModifier(player: NativePlayer, modifier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerVehicleDamageModifier(player: NativePlayer, damageAmount: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerVehicleDefenseModifier(player: NativePlayer, modifier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerParachuteTintIndex(player: NativePlayer, tintIndex: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerParachuteTintIndex(player: NativePlayer, tintIndex: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerReserveParachuteTintIndex(player: NativePlayer, index: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerReserveParachuteTintIndex(player: NativePlayer, index: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerParachutePackTintIndex(player: NativePlayer, tintIndex: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerParachutePackTintIndex(player: NativePlayer, tintIndex: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerHasReserveParachute(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerHasReserveParachute(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerCanLeaveParachuteSmokeTrail(player: NativePlayer, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerParachuteSmokeTrailColor(player: NativePlayer, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function GetPlayerParachuteSmokeTrailColor(player: NativePlayer, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerResetFlagPreferRearSeats(player: NativePlayer, flags: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerNoiseMultiplier(player: NativePlayer, multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerSneakingNoiseMultiplier(player: NativePlayer, multiplier: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function CanPedHearPlayer(player: NativePlayer, ped: NativePed): void;
  /**
   *
   * @param {NativePlayer} control undefined
   */
  export function SimulatePlayerInputGait(control: NativePlayer, amount: number, gaitType: number, speed: number, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ResetPlayerInputGait(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetAutoGiveParachuteWhenEnterPlane(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xD2B315B6689D537D(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerStealthPerceptionModifier(player: NativePlayer, value: number): void;
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
  export function SetPlayerSimulateAiming(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerClothPinFrames(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} index undefined
   */
  export function SetPlayerClothPackageIndex(index: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function SetPlayerClothLockCounter(value: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function PlayerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
  /**
   *
   */
  export function PlayerDetachVirtualBound(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function HasPlayerBeenSpottedInStolenVehicle(player: NativePlayer): void;
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
  export function ExpandWorldLimits(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function IsPlayerRidingTrain(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function HasPlayerLeftTheWorld(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function _0xFF300C7649724A0B(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerParachuteVariationOverride(player: NativePlayer, p1: number, p2: NativeAny, p3: NativeAny, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ClearPlayerParachuteVariationOverride(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerParachuteModelOverride(player: NativePlayer, model: NativeHash): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ClearPlayerParachuteModelOverride(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerParachutePackModelOverride(player: NativePlayer, model: NativeHash): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function ClearPlayerParachutePackModelOverride(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function DisablePlayerVehicleRewards(player: NativePlayer): void;
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
  export function DoesEntityExist(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DoesEntityBelongToThisScript(entity: NativeEntity, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DoesEntityHaveDrawable(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DoesEntityHavePhysics(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function HasEntityAnimFinished(entity: NativeEntity, animDict: string, animName: string, p3: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function HasEntityBeenDamagedByAnyObject(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function HasEntityBeenDamagedByAnyPed(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function HasEntityBeenDamagedByAnyVehicle(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function HasEntityBeenDamagedByEntity(entity1: NativeEntity, entity2: NativeEntity, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function HasEntityClearLosToEntity(entity1: NativeEntity, entity2: NativeEntity, traceType: number): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function HasEntityClearLosToEntityInFront(entity1: NativeEntity, entity2: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function HasEntityCollidedWithAnything(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetLastMaterialHitByEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetCollisionNormalOfLastHitForEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ForceEntityAiAndAnimationUpdate(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityAnimCurrentTime(entity: NativeEntity, animDict: string, animName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityAnimTotalTime(entity: NativeEntity, animDict: string, animName: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function GetAnimDuration(animDict: string, animName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityAttachedTo(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityCoords(entity: NativeEntity, alive: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityForwardVector(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityForwardX(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityForwardY(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityHeading(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityPhysicsHeading(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityHealth(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityMaxHealth(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityMaxHealth(entity: NativeEntity, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityHeight(entity: NativeEntity, X: number, Y: number, Z: number, atTop: NativeBOOL, inWorldCoords: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityHeightAboveGround(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityMatrix(entity: NativeEntity, rightVector: NativeVector3, forwardVector: NativeVector3, upVector: NativeVector3, position: NativeVector3): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityModel(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetOffsetFromEntityGivenWorldCoords(entity: NativeEntity, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetOffsetFromEntityInWorldCoords(entity: NativeEntity, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityPitch(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityQuaternion(entity: NativeEntity, x: number, y: number, z: number, w: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityRoll(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityRotation(entity: NativeEntity, rotationOrder: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityRotationVelocity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityScript(entity: NativeEntity, script: NativeScrHandle): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntitySpeed(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntitySpeedVector(entity: NativeEntity, relative: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityUprightValue(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityVelocity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetObjectIndexFromEntityIndex(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetPedIndexFromEntityIndex(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetVehicleIndexFromEntityIndex(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetWorldPositionOfEntityBone(entity: NativeEntity, boneIndex: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetNearestPlayerToEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetNearestPlayerToEntityOnTeam(entity: NativeEntity, team: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityType(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityPopulationType(entity: NativeEntity): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function IsAnEntity(handle: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityAPed(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityAMissionEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityAVehicle(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityAnObject(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityAtCoord(entity: NativeEntity, xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p7: NativeBOOL, p8: NativeBOOL, p9: number): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function IsEntityAtEntity(entity1: NativeEntity, entity2: NativeEntity, xSize: number, ySize: number, zSize: number, p5: NativeBOOL, p6: NativeBOOL, p7: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityAttached(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityAttachedToAnyObject(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityAttachedToAnyPed(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityAttachedToAnyVehicle(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} from undefined
   */
  export function IsEntityAttachedToEntity(from: NativeEntity, to: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityDead(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityInAir(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityInAngledArea(entity: NativeEntity, originX: number, originY: number, originZ: number, edgeX: number, edgeY: number, edgeZ: number, angle: number, p8: NativeBOOL, p9: NativeBOOL, p10: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityInArea(entity: NativeEntity, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: NativeBOOL, p8: NativeBOOL, p9: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityInZone(entity: NativeEntity, zone: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityInWater(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntitySubmergedLevel(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetUsedByPlayer(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityOnScreen(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityPlayingAnim(entity: NativeEntity, animDict: string, animName: string, taskFlag: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityStatic(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityTouchingEntity(entity: NativeEntity, targetEntity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityTouchingModel(entity: NativeEntity, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityUpright(entity: NativeEntity, angle: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityUpsidedown(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityVisible(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityVisibleToScript(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityOccluded(entity: NativeEntity): void;
  /**
   *
   * @param {NativeHash} entityModelHash undefined
   */
  export function WouldEntityBeOccluded(entityModelHash: NativeHash, x: number, y: number, z: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityWaitingForWorldCollision(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ApplyForceToEntityCenterOfMass(entity: NativeEntity, forceType: number, x: number, y: number, z: number, p5: NativeBOOL, isDirectionRel: NativeBOOL, isForceRel: NativeBOOL, p8: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ApplyForceToEntity(entity: NativeEntity, forceFlags: number, x: number, y: number, z: number, offX: number, offY: number, offZ: number, boneIndex: number, isDirectionRel: NativeBOOL, ignoreUpVec: NativeBOOL, isForceRel: NativeBOOL, p12: NativeBOOL, p13: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function AttachEntityToEntity(entity1: NativeEntity, entity2: NativeEntity, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, p9: NativeBOOL, useSoftPinning: NativeBOOL, collision: NativeBOOL, isPed: NativeBOOL, vertexIndex: number, fixedRot: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function AttachEntityToEntityPhysically(entity1: NativeEntity, entity2: NativeEntity, boneIndex1: number, boneIndex2: number, xPos1: number, yPos1: number, zPos1: number, xPos2: number, yPos2: number, zPos2: number, xRot: number, yRot: number, zRot: number, breakForce: number, fixedRot: NativeBOOL, p15: NativeBOOL, collision: NativeBOOL, teleport: NativeBOOL, p18: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ProcessEntityAttachments(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityBoneIndexByName(entity: NativeEntity, boneName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ClearEntityLastDamageEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DeleteEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DetachEntity(entity: NativeEntity, p1: NativeBOOL, collision: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function FreezeEntityPosition(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntitySomething(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function PlayEntityAnim(entity: NativeEntity, animName: string, animDict: string, p3: number, loop: NativeBOOL, stayInAnim: NativeBOOL, p6: NativeBOOL, delta: number, bitset: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function PlaySynchronizedEntityAnim(entity: NativeEntity, SceneID: number, animName: string, animDict: string, speed: number, speedMult: number, flag: number, flag2: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function PlaySynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: NativeAny, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: number, p9: number, p10: NativeAny, p11: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function StopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: NativeAny, p5: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function StopEntityAnim(entity: NativeEntity, animation: string, animGroup: string, p3: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function StopSynchronizedEntityAnim(entity: NativeEntity, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function HasAnimEventFired(entity: NativeEntity, actionHash: NativeHash): void;
  /**
   *
   * @param {string} animDictionary undefined
   */
  export function FindAnimEventPhase(animDictionary: string, animName: string, p2: string, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityAnimCurrentTime(entity: NativeEntity, animDictionary: string, animName: string, time: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityAnimSpeed(entity: NativeEntity, animDictionary: string, animName: string, speedMultiplier: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityAsMissionEntity(entity: NativeEntity, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityAsNoLongerNeeded(entity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAsNoLongerNeeded(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleAsNoLongerNeeded(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function SetObjectAsNoLongerNeeded(object: NativeObject): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityCanBeDamaged(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityCanBeDamagedByRelationshipGroup(entity: NativeEntity, bCanBeDamaged: NativeBOOL, relGroup: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityCanBeTargetedWithoutLos(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityCollision(entity: NativeEntity, toggle: NativeBOOL, keepPhysics: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityCollisonDisabled(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityCollision2(entity: NativeEntity, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityCoords(entity: NativeEntity, xPos: number, yPos: number, zPos: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL, clearArea: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityCoords2(entity: NativeEntity, xPos: number, yPos: number, zPos: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL, clearArea: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityCoordsNoOffset(entity: NativeEntity, xPos: number, yPos: number, zPos: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityDynamic(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityHeading(entity: NativeEntity, heading: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityHealth(entity: NativeEntity, health: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityInvincible(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityIsTargetPriority(entity: NativeEntity, p1: NativeBOOL, p2: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityLights(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityLoadCollisionFlag(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function HasCollisionLoadedAroundEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityMaxSpeed(entity: NativeEntity, speed: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityOnlyDamagedByPlayer(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityOnlyDamagedByRelationshipGroup(entity: NativeEntity, p1: NativeBOOL, relationshipHash: NativeHash): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityProofs(entity: NativeEntity, bulletProof: NativeBOOL, fireProof: NativeBOOL, explosionProof: NativeBOOL, collisionProof: NativeBOOL, meleeProof: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, drownProof: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityQuaternion(entity: NativeEntity, x: number, y: number, z: number, w: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityRecordsCollisions(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityRotation(entity: NativeEntity, pitch: number, roll: number, yaw: number, rotationOrder: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityVisible(entity: NativeEntity, toggle: NativeBOOL, unk: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityVelocity(entity: NativeEntity, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityHasGravity(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityLodDist(entity: NativeEntity, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityLodDist(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityAlpha(entity: NativeEntity, alphaLevel: number, skin: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetEntityAlpha(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ResetEntityAlpha(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x5C3B791D580E0BC2(entity: NativeEntity, p1: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityAlwaysPrerender(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityRenderScorched(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityTrafficlightOverride(entity: NativeEntity, state: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x78E8E3A640178255(entity: NativeEntity): void;
  /**
   *
   * @param {number} x undefined
   */
  export function CreateModelSwap(x: number, y: number, z: number, radius: number, originalModel: NativeHash, newModel: NativeHash, p6: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function RemoveModelSwap(x: number, y: number, z: number, radius: number, originalModel: NativeHash, newModel: NativeHash, p6: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function CreateModelHide(x: number, y: number, z: number, radius: number, model: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function CreateModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RemoveModelHide(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function CreateForcedObject(x: number, y: number, z: number, p3: NativeAny, modelHash: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function RemoveForcedObject(posX: number, posY: number, posZ: number, unk: number, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function SetEntityNoCollisionEntity(entity1: NativeEntity, entity2: NativeEntity, unknown: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityMotionBlur(entity: NativeEntity, toggle: NativeBOOL): void;
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
  export function CreatePed(pedType: number, modelHash: NativeHash, x: number, y: number, z: number, heading: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function DeletePed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClonePed(ped: NativePed, heading: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClonePedToTarget(ped: NativePed, targetPed: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInVehicle(ped: NativePed, vehicle: NativeVehicle, atGetIn: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInModel(ped: NativePed, modelHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInAnyVehicle(ped: NativePed, atGetIn: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function IsCopPedInArea3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInjured(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedHurt(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedFatallyInjured(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedDeadOrDying(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsConversationPedDead(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedAimingFromCover(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedReloading(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedAPlayer(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function CreatePedInsideVehicle(vehicle: NativeVehicle, pedType: number, modelHash: NativeHash, seat: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDesiredHeading(ped: NativePed, heading: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function FreezePedCameraRotation(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedFacingPed(ped: NativePed, otherPed: NativePed, angle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInMeleeCombat(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedStopped(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedShootingInArea(ped: NativePed, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: NativeBOOL, p8: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function IsAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedShooting(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAccuracy(ped: NativePed, accuracy: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedAccuracy(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedModel(ped: NativePed, modelHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ExplodePedHead(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RemovePedElegantly(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function AddArmourToPed(ped: NativePed, amount: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedArmour(ped: NativePed, amount: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedIntoVehicle(ped: NativePed, vehicle: NativeVehicle, seatIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAllowVehiclesOverride(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} unk undefined
   */
  export function CanCreateRandomPed(unk: NativeBOOL): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function CreateRandomPed(posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function CreateRandomPedAsDriver(vehicle: NativeVehicle, returnHandle: NativeBOOL): void;
  /**
   *
   */
  export function CanCreateRandomDriver(): void;
  /**
   *
   */
  export function CanCreateRandomBikeRider(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMoveAnimsBlendOut(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanBeDraggedOut(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function _0xF2BEBCDFAFDAA19E(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedMale(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedHuman(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetVehiclePedIsIn(ped: NativePed, lastVehicle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetPedLastVehicle(ped: NativePed): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function SetPedDensityMultiplierThisFrame(multiplier: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;
  /**
   *
   */
  export function _0x5A7F62FDA59759BD(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function SetPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   */
  export function ClearPedNonCreationArea(): void;
  /**
   *
   */
  export function _0x4759CC730F947C81(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedOnMount(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetMount(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedOnVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedOnSpecificVehicle(ped: NativePed, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMoney(ped: NativePed, amount: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedMoney(ped: NativePed): void;
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
  export function SetPedSuffersCriticalHits(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xAFC976FD0580C7B3(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedSittingInVehicle(ped: NativePed, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedSittingInAnyVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedOnFoot(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedOnAnyBike(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedPlantingBomb(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetDeadPedPickupCoords(ped: NativePed, p1: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInAnyBoat(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInAnySub(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInAnyHeli(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInAnyPlane(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInFlyingVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDiesInWater(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDiesInSinkingVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedArmour(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedStayInVehicleWhenJacked(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanBeShotInVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedLastDamageBone(ped: NativePed, outBone: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedLastDamageBone(ped: NativePed): void;
  /**
   *
   * @param {number} value undefined
   */
  export function SetAiWeaponDamageModifier(value: number): void;
  /**
   *
   */
  export function ResetAiWeaponDamageModifier(): void;
  /**
   *
   * @param {number} modifier undefined
   */
  export function SetAiMeleeWeaponDamageModifier(modifier: number): void;
  /**
   *
   */
  export function ResetAiMeleeWeaponDamageModifier(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2F3C3D9F50681DE4(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanBeTargetted(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanBeTargettedByTeam(ped: NativePed, team: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanBeTargettedByPlayer(ped: NativePed, player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x061CB768363D6424(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetTimeExclusiveDisplayTexture(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInAnyPoliceVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ForcePedToOpenParachute(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInParachuteFreeFall(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedFalling(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedJumping(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedClimbing(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedVaulting(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedDiving(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedJumpingOutOfVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x26AF0E8E30BD2A2C(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedParachuteState(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedParachuteLandingType(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedParachuteTintIndex(ped: NativePed, tintIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedParachuteTintIndex(ped: NativePed, outTintIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedReserveParachuteTintIndex(ped: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x8C4F3BF23B6237DB(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDucking(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedDucking(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInAnyTaxi(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedIdRange(ped: NativePed, value: number): void;
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
  export function SetPedSeeingRange(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedHearingRange(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedVisualFieldMinAngle(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedVisualFieldMaxAngle(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedVisualFieldMinElevationAngle(ped: NativePed, angle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedVisualFieldMaxElevationAngle(ped: NativePed, angle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedVisualFieldPeripheralRange(ped: NativePed, range: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedVisualFieldCenterAngle(ped: NativePed, angle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedStealthMovement(ped: NativePed, p1: NativeBOOL, action: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedStealthMovement(ped: NativePed): void;
  /**
   *
   * @param {number} unused undefined
   */
  export function CreateGroup(unused: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAsGroupLeader(ped: NativePed, groupId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAsGroupMember(ped: NativePed, groupId: number): void;
  /**
   *
   * @param {NativePed} pedHandle undefined
   */
  export function SetPedCanTeleportToGroupLeader(pedHandle: NativePed, groupHandle: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} groupId undefined
   */
  export function RemoveGroup(groupId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RemovePedFromGroup(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedGroupMember(ped: NativePed, groupId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedHangingOnToVehicle(ped: NativePed): void;
  /**
   *
   * @param {number} groupHandle undefined
   */
  export function SetGroupSeparationRange(groupHandle: number, separationRange: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMinGroundTimeForStungun(ped: NativePed, ms1000000: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedProne(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInCombat(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function CanPedInCombatSeeTarget(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedDoingDriveby(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedJacking(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedBeingJacked(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedBeingStunned(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedsJacker(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetJackTarget(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedFleeing(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInCover(ped: NativePed, exceptUseWeapon: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInCoverFacingLeft(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedStandingInCover(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedGoingIntoCover(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPinnedDown(ped: NativePed, pinned: NativeBOOL, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetSeatPedIsTryingToEnter(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetVehiclePedIsTryingToEnter(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedSourceOfDeath(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedCauseOfDeath(ped: NativePed): void;
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
  export function SetPedRelationshipGroupDefaultHash(ped: NativePed, hash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedRelationshipGroupHash(ped: NativePed, hash: NativeHash): void;
  /**
   *
   * @param {number} relationship undefined
   */
  export function SetRelationshipBetweenGroups(relationship: number, group1: NativeHash, group2: NativeHash): void;
  /**
   *
   * @param {number} relationship undefined
   */
  export function ClearRelationshipBetweenGroups(relationship: number, group1: NativeHash, group2: NativeHash): void;
  /**
   *
   * @param {string} name undefined
   */
  export function AddRelationshipGroup(name: string, groupHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} groupHash undefined
   */
  export function RemoveRelationshipGroup(groupHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped1 undefined
   */
  export function GetRelationshipBetweenPeds(ped1: NativePed, ped2: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedRelationshipGroupDefaultHash(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedRelationshipGroupHash(ped: NativePed): void;
  /**
   *
   * @param {NativeHash} group1 undefined
   */
  export function GetRelationshipBetweenGroups(group1: NativeHash, group2: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanBeTargetedWithoutLos(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedToInformRespectedFriends(ped: NativePed, radius: number, maxFriends: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedRespondingToEvent(ped: NativePed, event: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedFiringPattern(ped: NativePed, patternHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedShootRate(ped: NativePed, shootRate: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetCombatFloat(ped: NativePed, combatType: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetCombatFloat(ped: NativePed, p1: number): void;
  /**
   *
   * @param {number} groupID undefined
   */
  export function GetGroupSize(groupID: number, unknown: NativeAny, sizeInMembers: number): void;
  /**
   *
   * @param {number} groupId undefined
   */
  export function DoesGroupExist(groupId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedGroupIndex(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInGroup(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPlayerPedIsFollowing(ped: NativePed): void;
  /**
   *
   * @param {number} groupId undefined
   */
  export function SetGroupFormation(groupId: number, formationType: number): void;
  /**
   *
   * @param {number} groupId undefined
   */
  export function SetGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} groupHandle undefined
   */
  export function ResetGroupFormationDefaultSpacing(groupHandle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetVehiclePedIsUsing(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetExclusivePhoneRelationships(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedGravity(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ApplyDamageToPed(ped: NativePed, damageAmount: number, armorFirst: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x36B77BB84687C318(ped: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAllowedToDuck(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedNeverLeavesGroup(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedType(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAsCop(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMaxHealth(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedMaxHealth(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMaxTimeInWater(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMaxTimeUnderwater(ped: NativePed, value: number): void;
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
  export function SetPedCanBeKnockedOffVehicle(ped: NativePed, state: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function CanKnockPedOffVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function KnockPedOffVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCoordsNoGang(ped: NativePed, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {number} groupID undefined
   */
  export function GetPedAsGroupMember(groupID: number, memberNumber: number): void;
  /**
   *
   * @param {number} groupID undefined
   */
  export function GetPedAsGroupLeader(groupID: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedKeepTask(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x49E50BDB8BA4DAB2(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedSwimming(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedSwimmingUnderWater(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCoordsKeepVehicle(ped: NativePed, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDiesInVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetCreateRandomCops(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetCreateRandomCopsNotOnScenarios(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetCreateRandomCopsOnScenarios(toggle: NativeBOOL): void;
  /**
   *
   */
  export function CanCreateRandomCops(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAsEnemy(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanSmashGlass(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInAnyTrain(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedGettingIntoAVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedTryingToEnterALockedVehicle(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetEnableHandcuffs(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetEnableBoundAnkles(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetEnableScuba(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetCanAttackFriendly(ped: NativePed, toggle: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedAlertness(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAlertness(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedGetOutUpsideDownVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMovementClipset(ped: NativePed, clipSet: string, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetPedMovementClipset(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedStrafeClipset(ped: NativePed, clipSet: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetPedStrafeClipset(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedWeaponMovementClipset(ped: NativePed, clipSet: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetPedWeaponMovementClipset(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDriveByClipsetOverride(ped: NativePed, clipset: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedDriveByClipsetOverride(ped: NativePed): void;
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
  export function SetPedInVehicleContext(ped: NativePed, context: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetPedInVehicleContext(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsScriptedScenarioPedUsingConditionalAnim(ped: NativePed, animDict: string, anim: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAlternateWalkAnim(ped: NativePed, animDict: string, animName: string, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedAlternateWalkAnim(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAlternateMovementAnim(ped: NativePed, stance: number, animDictionary: string, animationName: string, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedAlternateMovementAnim(ped: NativePed, stance: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedGestureGroup(ped: NativePed, animGroupGesture: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function GetAnimInitialOffsetPosition(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function GetAnimInitialOffsetRotation(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedDrawableVariation(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetNumberOfPedDrawableVariations(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedTextureVariation(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetNumberOfPedTextureVariations(ped: NativePed, componentId: number, drawableId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetNumberOfPedPropDrawableVariations(ped: NativePed, propId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetNumberOfPedPropTextureVariations(ped: NativePed, propId: number, drawableId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedPaletteVariation(ped: NativePed, componentId: number): void;
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
  export function IsPedComponentVariationValid(ped: NativePed, componentId: number, drawableId: number, textureId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedComponentVariation(ped: NativePed, componentId: number, drawableId: number, textureId: number, paletteId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedRandomComponentVariation(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedRandomProps(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDefaultComponentVariation(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedBlendFromParents(ped: NativePed, father: NativePed, mother: NativePed, fathersSide: number, mothersSide: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedHeadBlendData(ped: NativePed, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedHeadBlendData(ped: NativePed, headBlendData: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function UpdatePedHeadBlendData(ped: NativePed, shapeMix: number, skinMix: number, thirdMix: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedEyeColor(ped: NativePed, index: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedHeadOverlay(ped: NativePed, overlayID: number, index: number, opacity: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedHeadOverlayValue(ped: NativePed, overlayID: number): void;
  /**
   *
   * @param {number} overlayID undefined
   */
  export function GetNumHeadOverlayValues(overlayID: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedHeadOverlayColor(ped: NativePed, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedHairColor(ped: NativePed, colorID: number, highlightColorID: number): void;
  /**
   *
   */
  export function GetNumHairColors(): void;
  /**
   *
   */
  export function GetNumMakeupColors(): void;
  /**
   *
   * @param {number} colorID undefined
   */
  export function GetHairColor(colorID: number, R: number, G: number, B: number): void;
  /**
   *
   * @param {number} colorID undefined
   */
  export function GetLipstickColor(colorID: number, R: number, G: number, B: NativeAny): void;
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
  export function IsPedHairColorValid(colorID: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xAAA6A3698A69E048(p0: NativeAny): void;
  /**
   *
   * @param {number} colorID undefined
   */
  export function IsPedLipstickColorValid(colorID: number): void;
  /**
   *
   * @param {number} colorID undefined
   */
  export function IsPedBlushColorValid(colorID: number): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function _0xC56FBF2F228E1DAC(modelHash: NativeHash, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedFaceFeature(ped: NativePed, index: number, scale: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function HasPedHeadBlendFinished(ped: NativePed): void;
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
  export function GetFirstParentIdForPedType(type: number): void;
  /**
   *
   * @param {number} type undefined
   */
  export function GetNumParentPedsOfType(type: number): void;
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
  export function IsPedPropValid(ped: NativePed, componentId: number, drawableId: number, TextureId: number): void;
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
  export function GetPedPropIndex(ped: NativePed, componentId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPropIndex(ped: NativePed, componentId: number, drawableId: number, TextureId: number, attach: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function KnockOffPedProp(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedProp(ped: NativePed, propId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearAllPedProps(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xAFF4710E2A0A6C12(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedPropTextureIndex(ped: NativePed, componentId: number): void;
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
  export function SetBlockingOfNonTemporaryEvents(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedBoundsOrientation(ped: NativePed, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RegisterTarget(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RegisterHatedTargetsAroundPed(ped: NativePed, radius: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetClosestPed(x: number, y: number, z: number, radius: number, p4: NativeBOOL, p5: NativeBOOL, outPed: NativePed, p7: NativeBOOL, p8: NativeBOOL, pedType: number): void;
  /**
   *
   * @param {NativeBOOL} value undefined
   */
  export function SetScenarioPedsToBeReturnedByNextCommand(value: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x03EA03AF85A85CB7(ped: NativePed, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, p8: NativeAny): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function SetDriverRacingModifier(driver: NativePed, racingModifier: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function SetDriverAbility(driver: NativePed, ability: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function SetDriverAggressiveness(driver: NativePed, aggressiveness: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function CanPedRagdoll(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedToRagdoll(ped: NativePed, time1: number, time2: number, ragdollType: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedToRagdollWithFall(ped: NativePed, time: number, p2: number, ragdollType: number, x: number, y: number, z: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedRagdollOnCollision(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedRagdoll(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedRunningRagdollTask(ped: NativePed): void;
  /**
   *
   * @param {NativePlayer} ped undefined
   */
  export function SetPedRagdollForceFall(ped: NativePlayer): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetPedRagdollTimer(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanRagdoll(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xD1871251F3B5ACD7(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedRunningMobilePhoneTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xA3F3564A5B3646C0(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedRagdollBlockingFlags(ped: NativePed, flags: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetPedRagdollBlockingFlags(ped: NativePed, flags: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAngledDefensiveArea(ped: NativePed, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeBOOL, p9: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedSphereDefensiveArea(ped: NativePed, x: number, y: number, z: number, radius: number, p5: NativeBOOL, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDefensiveSphereAttachedToPed(ped: NativePed, target: NativePed, xOffset: number, yOffset: number, zOffset: number, radius: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xE4723DB6E736CCFF(ped: NativePed, p1: NativeAny, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDefensiveAreaAttachedToPed(ped: NativePed, attachPed: NativePed, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: NativeBOOL, p10: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDefensiveAreaDirection(ped: NativePed, p1: number, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RemovePedDefensiveArea(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedDefensiveAreaPosition(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xBA63D9FE45412247(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPreferredCoverSet(ped: NativePed, itemSet: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RemovePedPreferredCoverSet(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ReviveInjuredPed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResurrectPed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedNameDebug(ped: NativePed, name: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedExtractedDisplacement(ped: NativePed, worldSpace: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDiesWhenInjured(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedEnableWeaponBlocking(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xF9ACF4A08098EA25(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetPedVisibleDamage(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ApplyPedBloodDamageByZone(ped: NativePed, p1: NativeAny, p2: number, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ApplyPedBlood(ped: NativePed, boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ApplyPedBloodByZone(ped: NativePed, p1: NativeAny, p2: number, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ApplyPedBloodSpecific(ped: NativePed, p1: NativeAny, p2: number, p3: number, p4: number, p5: number, p6: NativeAny, p7: number, p8: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ApplyPedDamageDecal(ped: NativePed, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeBOOL, p9: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ApplyPedDamagePack(ped: NativePed, damagePack: string, damage: number, mult: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedBloodDamage(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedBloodDamageByZone(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function HidePedBloodDamageByZone(ped: NativePed, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedDamageDecalByZone(ped: NativePed, p1: number, p2: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedDecorationsState(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x2B694AFCF64E6994(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedWetness(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedWetnessHeight(ped: NativePed, height: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedWetnessEnabledThisFrame(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x6585D955A68452A5(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedSweat(ped: NativePed, sweat: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDecoration(ped: NativePed, collection: NativeHash, overlay: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedFacialDecoration(ped: NativePed, collection: NativeHash, overlay: NativeHash): void;
  /**
   *
   * @param {NativeHash} collection undefined
   */
  export function GetTattooZone(collection: NativeHash, overlay: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedDecorations(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedFacialDecorations(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function WasPedSkeletonUpdated(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedBoneCoords(ped: NativePed, boneId: number, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {NativeBOOL} startImmediately undefined
   */
  export function CreateNmMessage(startImmediately: NativeBOOL, messageId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GivePedNmMessage(ped: NativePed): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function AddScenarioBlockingArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: NativeBOOL): void;
  /**
   *
   */
  export function RemoveScenarioBlockingAreas(): void;
  /**
   *
   * @param {number} areaHandle undefined
   */
  export function RemoveScenarioBlockingArea(areaHandle: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetScenarioPedsSpawnInSphereArea(x: number, y: number, z: number, range: number, p4: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedUsingScenario(ped: NativePed, scenario: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedUsingAnyScenario(ped: NativePed): void;
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
  export function PlayFacialAnim(ped: NativePed, animName: string, animDict: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetFacialIdleAnimOverride(ped: NativePed, animName: string, animDict: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearFacialIdleAnimOverride(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanPlayGestureAnims(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanPlayVisemeAnims(ped: NativePed, toggle: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanPlayInjuredAnims(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanPlayAmbientAnims(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanPlayAmbientBaseAnims(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xC2EE020F5FB4DB53(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanArmIk(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanHeadIk(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanLegIk(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanTorsoIk(ped: NativePed, toggle: NativeBOOL): void;
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
  export function SetPedCanUseAutoConversationLookat(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped1 undefined
   */
  export function IsPedHeadtrackingPed(ped1: NativePed, ped2: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedHeadtrackingEntity(ped: NativePed, entity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPrimaryLookat(ped: NativePed, lookAt: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x78C4E9961DB3EB5B(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetPedClothProne(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA660FAF550EB37E5(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedConfigFlag(ped: NativePed, flagId: number, value: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedResetFlag(ped: NativePed, flagId: number, doReset: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedConfigFlag(ped: NativePed, flagId: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedResetFlag(ped: NativePed, flagId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedGroupMemberPassengerIndex(ped: NativePed, index: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanEvasiveDive(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedEvasiveDiving(ped: NativePed, evadingEntity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedShootsAtCoord(ped: NativePed, x: number, y: number, z: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedModelIsSuppressed(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   */
  export function StopAnyPedModelBeingSuppressed(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanBeTargetedWhenInjured(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedGeneratesDeadBodyEvents(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xE43A13C9E4CCCBCF(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanRagdollFromPlayerImpact(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GivePedHelmet(ped: NativePed, cannotRemove: NativeBOOL, helmetFlag: number, textureIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RemovePedHelmet(ped: NativePed, instantly: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x14590DDBEDB1EC85(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedHelmet(ped: NativePed, canWearHelmet: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedHelmetFlag(ped: NativePed, helmetFlag: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedHelmetPropIndex(ped: NativePed, propIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedHelmetTextureIndex(ped: NativePed, textureIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedWearingHelmet(ped: NativePed): void;
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
  export function SetPedToLoadCover(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanCowerInCover(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanPeekInCover(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPlaysHeadOnHornAnimWhenDiesInVehicle(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedLegIkMode(ped: NativePed, mode: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMotionBlur(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCanSwitchWeapon(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDiesInstantlyInWater(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x1A330D297AAC6BC1(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function StopPedWeaponFiringWhenDropped(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetScriptedAnimSeatOffset(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCombatMovement(ped: NativePed, combatMovement: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedCombatMovement(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCombatAbility(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCombatRange(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedCombatRange(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCombatAttributes(ped: NativePed, attributeIndex: number, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedTargetLossResponse(ped: NativePed, responseType: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xDCCA191DF9980FD7(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedPerformingStealthKill(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xEBD0EDBA5BE957CF(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedBeingStealthKilled(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetMeleeTargetForPed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function WasPedKilledByStealth(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function WasPedKilledByTakedown(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x61767F73EACEED21(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedFleeAttributes(ped: NativePed, attributes: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCowerHash(ped: NativePed, p1: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x2016C603D6B8987C(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedSteersAroundPeds(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedSteersAroundObjects(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedSteersAroundVehicles(ped: NativePed, toggle: NativeBOOL): void;
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
  export function IsAnyPedNearPoint(x: number, y: number, z: number, radius: number): void;
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
  export function GetPedFloodInvincibility(ped: NativePed, p1: NativeBOOL): void;
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
  export function IsTrackedPedVisible(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x511F1A683387C7E2(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedTracked(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function HasPedReceivedEvent(ped: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped1 undefined
   */
  export function CanPedSeePed(ped1: NativePed, ped2: NativePed): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function _0x9C6A6C19B6C0C496(p0: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedBoneIndex(ped: NativePed, boneId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedRagdollBoneIndex(ped: NativePed, bone: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedEnveffScale(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedEnveffScale(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetEnablePedEnveffScale(ped: NativePed, toggle: NativeBOOL): void;
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
  export function CreateSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function CreateSynchronizedScene2(x: number, y: number, z: number, radius: number, object: NativeHash): void;
  /**
   *
   * @param {number} sceneId undefined
   */
  export function IsSynchronizedSceneRunning(sceneId: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function SetSynchronizedSceneOrigin(sceneID: number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, unk: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function SetSynchronizedScenePhase(sceneID: number, phase: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function GetSynchronizedScenePhase(sceneID: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function SetSynchronizedSceneRate(sceneID: number, rate: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function GetSynchronizedSceneRate(sceneID: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function SetSynchronizedSceneLooped(sceneID: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function IsSynchronizedSceneLooped(sceneID: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function SetSynchronizedSceneOcclusionPortal(sceneID: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} SceneID undefined
   */
  export function _0x7F2F4F13AC5257EF(SceneID: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function AttachSynchronizedSceneToEntity(sceneID: number, entity: NativeEntity, boneIndex: number): void;
  /**
   *
   * @param {number} sceneID undefined
   */
  export function DetachSynchronizedScene(sceneID: number): void;
  /**
   *
   * @param {number} scene undefined
   */
  export function DisposeSynchronizedScene(scene: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ForcePedMotionState(ped: NativePed, motionStateHash: NativeHash, p2: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xF60165E1D2C5370B(ped: NativePed, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMaxMoveBlendRatio(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMinMoveBlendRatio(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedMoveRateOverride(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x46B05BCAE43856B0(ped: NativePed, flag: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedNearbyVehicles(ped: NativePed, sizeAndVehs: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedNearbyPeds(ped: NativePed, sizeAndPeds: number, ignore: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x7350823473013C02(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedUsingActionMode(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedUsingActionMode(ped: NativePed, p1: NativeBOOL, p2: NativeAny, action: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x781DE8FA214E87D2(ped: NativePed, p1: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCapsule(ped: NativePed, value: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RegisterPedheadshot(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x953563CE563143AF(p0: NativeAny): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function UnregisterPedheadshot(handle: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function IsPedheadshotValid(handle: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function IsPedheadshotReady(handle: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function GetPedheadshotTxdString(handle: number): void;
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
  export function SetIkTarget(ped: NativePed, ikIndex: number, entityLookAt: NativeEntity, boneLookAt: number, offsetX: number, offsetY: number, offsetZ: number, p7: NativeAny, blendInDuration: number, blendOutDuration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xED3C76ADFA6D07C4(ped: NativePed): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function RequestActionModeAsset(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function HasActionModeAssetLoaded(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function RemoveActionModeAsset(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function RequestStealthModeAsset(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function HasStealthModeAssetLoaded(asset: string): void;
  /**
   *
   * @param {string} asset undefined
   */
  export function RemoveStealthModeAsset(asset: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedLodMultiplier(ped: NativePed, multiplier: number): void;
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
  export function CreateVehicle(modelHash: NativeHash, x: number, y: number, z: number, heading: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function DeleteVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x7D6F9A3EF26136A0(vehicle: NativeVehicle, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} veh undefined
   */
  export function SetVehicleAllowNoPassengersLockon(veh: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE6B0E8CFC3633BF0(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleModel(vehicle: NativeVehicle, model: NativeHash): void;
  /**
   *
   * @param {number} v undefined
   */
  export function DoesScriptVehicleGeneratorExist(v: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function CreateScriptVehicleGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number, modelHash: NativeHash, p7: number, p8: number, p9: number, p10: number, p11: NativeBOOL, p12: NativeBOOL, p13: NativeBOOL, p14: NativeBOOL, p15: NativeBOOL, p16: number): void;
  /**
   *
   * @param {number} vehicleGenerator undefined
   */
  export function DeleteScriptVehicleGenerator(vehicleGenerator: number): void;
  /**
   *
   * @param {number} vehicleGenerator undefined
   */
  export function SetScriptVehicleGenerator(vehicleGenerator: number, enabled: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function SetAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   */
  export function SetAllVehicleGeneratorsActive(): void;
  /**
   *
   * @param {NativeBOOL} active undefined
   */
  export function SetAllLowPriorityVehicleGeneratorsActive(active: NativeBOOL): void;
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
  export function SetVehicleOnGroundProperly(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} p0 undefined
   */
  export function SetAllVehiclesSpawn(p0: NativeVehicle, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleStuckOnRoof(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function AddVehicleUpsidedownCheck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RemoveVehicleUpsidedownCheck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleStopped(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleNumberOfPassengers(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleMaxNumberOfPassengers(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleModelNumberOfSeats(modelHash: NativeHash): void;
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
  export function SetVehicleDensityMultiplierThisFrame(multiplier: number): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function SetRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function SetParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetSomethingMultiplierThisFrame(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function SetSomeVehicleDensityMultiplierThisFrame(value: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetFarDrawVehicles(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function SetNumberOfParkedVehicles(value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorsLocked(vehicle: NativeVehicle, doorLockStatus: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetPedTargettableVehicleDestroy(vehicle: NativeVehicle, doorIndex: number, destroyType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function DisableVehicleImpactExplosionActivation(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorsLockedForPlayer(vehicle: NativeVehicle, player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleDoorsLockedForPlayer(vehicle: NativeVehicle, player: NativePlayer): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorsLockedForAllPlayers(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x9737A37136F07E75(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorsLockedForTeam(vehicle: NativeVehicle, team: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ExplodeVehicle(vehicle: NativeVehicle, isAudible: NativeBOOL, isInvisible: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleOutOfControl(vehicle: NativeVehicle, killDriver: NativeBOOL, explodeOnImpact: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleTimedExplosion(vehicle: NativeVehicle, ped: NativePed, toggle: NativeBOOL): void;
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
  export function RequestVehiclePhoneExplosion(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetTaxiLights(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsTaxiLightOn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {string} garageName undefined
   */
  export function IsVehicleInGarageArea(garageName: string, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleColours(vehicle: NativeVehicle, colorPrimary: number, colorSecondary: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleFullbeam(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SteerUnlockBias(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleCustomPrimaryColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleCustomPrimaryColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ClearVehicleCustomPrimaryColour(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetIsVehiclePrimaryColourCustom(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleCustomSecondaryColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleCustomSecondaryColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ClearVehicleCustomSecondaryColour(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetIsVehicleSecondaryColourCustom(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleEnveffScale(vehicle: NativeVehicle, fade: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleEnveffScale(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetCanResprayVehicle(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x33506883545AC0DF(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function JitterVehicle(vehicle: NativeVehicle, p1: NativeBOOL, yaw: number, pitch: number, roll: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetBoatAnchor(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetBoatAnchor(vehicle: NativeVehicle): void;
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
  export function SetVehicleSiren(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleSirenOn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleSirenSoundOn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleStrong(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RemoveVehicleStuckCheck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleColours(vehicle: NativeVehicle, colorPrimary: number, colorSecondary: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleSeatFree(vehicle: NativeVehicle, seatIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetPedInVehicleSeat(vehicle: NativeVehicle, index: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetLastPedInVehicleSeat(vehicle: NativeVehicle, seatIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleLightsState(vehicle: NativeVehicle, lightsOn: NativeBOOL, highbeamsOn: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleTyreBurst(vehicle: NativeVehicle, wheel_rf: NativeVehicle, completely: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleForwardSpeed(vehicle: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleHalt(vehicle: NativeVehicle, distance: number, killEngine: number, unknown: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleForkliftHeight(vehicle: NativeVehicle, height: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetPedEnabledBikeRingtone(vehicle: NativeVehicle, entity: NativeEntity): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x62CA17B74C435651(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} object undefined
   */
  export function GetVehicleAttachedToEntity(object: NativeVehicle): void;
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
  export function SetVehicleTyreBurst(vehicle: NativeVehicle, index: number, onRim: NativeBOOL, p3: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorsShut(vehicle: NativeVehicle, closeInstantly: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleTyresCanBurst(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleTyresCanBurst(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleWheelsCanBreak(vehicle: NativeVehicle, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorOpen(vehicle: NativeVehicle, doorIndex: number, loose: NativeBOOL, openInstantly: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RemoveVehicleWindow(vehicle: NativeVehicle, windowIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RollDownWindows(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RollDownWindow(vehicle: NativeVehicle, windowIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RollUpWindow(vehicle: NativeVehicle, windowIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SmashVehicleWindow(vehicle: NativeVehicle, index: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function FixVehicleWindow(vehicle: NativeVehicle, index: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function DetachVehicleWindscreen(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function EjectJb700Roof(vehicle: NativeVehicle, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleLights(vehicle: NativeVehicle, state: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xC45C27EF50F36ADC(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleLightsMode(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleAlarm(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function StartVehicleAlarm(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleAlarmActivated(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleInteriorlight(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleLightMultiplier(vehicle: NativeVehicle, multiplier: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function AttachVehicleToTrailer(vehicle: NativeVehicle, trailer: NativeVehicle, radius: number): void;
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
  export function DetachVehicleFromTrailer(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleAttachedToTrailer(vehicle: NativeVehicle): void;
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
  export function SetVehicleTyreFixed(vehicle: NativeVehicle, tyreIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleNumberPlateText(vehicle: NativeVehicle, plateText: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleNumberPlateText(vehicle: NativeVehicle): void;
  /**
   *
   */
  export function GetNumberOfVehicleNumberPlates(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleNumberPlateTextIndex(vehicle: NativeVehicle, plateIndex: number): void;
  /**
   *
   * @param {NativeVehicle} elegy undefined
   */
  export function GetVehicleNumberPlateTextIndex(elegy: NativeVehicle): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetRandomTrains(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} variation undefined
   */
  export function CreateMissionTrain(variation: number, x: number, y: number, z: number, direction: NativeBOOL): void;
  /**
   *
   * @param {number} intersectionId undefined
   */
  export function SwitchTrainTrack(intersectionId: number, state: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x21973BBF8D17EDFA(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function DeleteAllTrains(): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function SetTrainSpeed(train: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function SetTrainCruiseSpeed(train: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetRandomBoats(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetGarbageTrucks(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function DoesVehicleHaveStuckVehicleCheck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function GetVehicleRecordingId(p0: number, p1: string): void;
  /**
   *
   * @param {number} i undefined
   */
  export function RequestVehicleRecording(i: number, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function HasVehicleRecordingBeenLoaded(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RemoveVehicleRecording(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x92523B76657A517D(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function GetPositionOfVehicleRecordingAtTime(p0: number, p1: number, p2: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF0F2103EFAF8CBA7(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetRotationOfVehicleRecordingAtTime(p0: NativeAny, p1: number, p2: NativeAny): void;
  /**
   *
   * @param {number} recordingID undefined
   */
  export function GetTotalDurationOfVehicleRecordingId(recordingID: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetTotalDurationOfVehicleRecording(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetPositionInRecording(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetTimePositionInRecording(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function StartPlaybackRecordedVehicle(vehicle: NativeVehicle, p1: number, playback: string, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function StartPlaybackRecordedVehicleWithFlags(vehicle: NativeVehicle, p1: NativeAny, playback: string, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1F2E4E06DEA8992B(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function StopPlaybackRecordedVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PausePlaybackRecordedVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function UnpausePlaybackRecordedVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsPlaybackGoingOnForVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function IsPlaybackUsingAiGoingOnForVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetCurrentPlaybackForVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SkipToEndAndStopPlaybackRecordedVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetPlaybackSpeed(vehicle: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StartPlaybackRecordedVehicleUsingAi(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SkipTimeInPlaybackRecordedVehicle(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetPlaybackToUseAi(vehicle: NativeVehicle, flag: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetPlaybackToUseAiTryToRevertBackLater(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeBOOL): void;
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
  export function ExplodeVehicleInCutscene(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function AddVehicleStuckCheckWithWarp(p0: NativeAny, p1: number, p2: NativeAny, p3: NativeBOOL, p4: NativeBOOL, p5: NativeBOOL, p6: NativeAny): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function SetVehicleModelIsSuppressed(model: NativeHash, suppressed: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: NativeHash, flags: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function GetRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function GetRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: NativeHash, flags: number): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function GetTrainCarriage(train: NativeVehicle, trailerNumber: number): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function DeleteMissionTrain(train: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function SetMissionTrainAsNoLongerNeeded(train: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function SetMissionTrainCoords(train: NativeVehicle, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsThisModelABoat(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsThisModelAJetski(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsThisModelAPlane(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsThisModelAHeli(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsThisModelACar(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsThisModelATrain(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsThisModelABike(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsThisModelABicycle(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsThisModelAQuadbike(model: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetHeliBladesFullSpeed(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetHeliBladesSpeed(vehicle: NativeVehicle, speed: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x99CAD8E7AFDB60FA(vehicle: NativeVehicle, p1: number, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleCanBeTargetted(vehicle: NativeVehicle, state: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xDBC631F109350B8C(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleCanBeVisiblyDamaged(vehicle: NativeVehicle, state: NativeBOOL): void;
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
  export function GetVehicleDirtLevel(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDirtLevel(vehicle: NativeVehicle, dirtLevel: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleDamaged(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} v undefined
   */
  export function IsVehicleDoorFullyOpen(v: NativeVehicle, rwing: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleEngineOn(vehicle: NativeVehicle, value: NativeBOOL, instantly: NativeBOOL, otherwise: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleUndriveable(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleProvidesCover(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorControl(vehicle: NativeVehicle, doorIndex: number, speed: number, angle: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorLatched(vehicle: NativeVehicle, doorIndex: number, forceClose: NativeBOOL, lock: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleDoorAngleRatio(vehicle: NativeVehicle, door: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetPedUsingVehicleDoor(vehicle: NativeVehicle, doorIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorShut(vehicle: NativeVehicle, doorIndex: number, closeInstantly: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorBroken(vehicle: NativeVehicle, doorIndex: number, deleteDoor: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleCanBreak(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function DoesVehicleHaveRoof(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsBigVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetNumberOfVehicleColours(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleColourCombination(vehicle: NativeVehicle, colorCombination: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleColourCombination(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleIsConsideredByPlayer(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function GetRandomVehicleModelInMemory(p0: NativeBOOL, modelHash: NativeHash, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleDoorLockStatus(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} veh undefined
   */
  export function IsVehicleDoorDamaged(veh: NativeVehicle, doorID: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDoorCanBreak(vehicle: NativeVehicle, doorIndex: number, isBreakable: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x27B926779DEB502D(vehicle: NativeVehicle, frontBumper: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleBumperBrokenOff(vehicle: NativeVehicle, front: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function IsCopVehicleInArea3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleOnAllWheels(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleLayoutHash(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xA01BC64DD4BFBBAC(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} train undefined
   */
  export function SetRenderTrainAsDerailed(train: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleExtraColours(vehicle: NativeVehicle, pearlescentColor: number, wheelColor: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleExtraColours(vehicle: NativeVehicle, pearlescentColor: number, wheelColor: number): void;
  /**
   *
   */
  export function StopAllGarageActivity(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleFixed(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} vehicle undefined
   */
  export function SetVehicleDeformationFixed(vehicle: NativeAny): void;
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
  export function SetDisableVehiclePetrolTankFires(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetDisableVehiclePetrolTankDamage(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function RemoveVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleSteerBias(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleExtraTurnedOn(vehicle: NativeVehicle, extraId: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleExtra(vehicle: NativeVehicle, extraId: number, disable: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function DoesExtraExist(vehicle: NativeVehicle, extraId: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetConvertibleRoof(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function LowerConvertibleRoof(vehicle: NativeVehicle, instantlyLower: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RaiseConvertibleRoof(vehicle: NativeVehicle, instantlyRaise: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetConvertibleRoofState(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleAConvertible(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleStoppedAtTrafficLights(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleDamage(vehicle: NativeVehicle, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleEngineHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleEngineHealth(vehicle: NativeVehicle, health: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehiclePetrolTankHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehiclePetrolTankHealth(vehicle: NativeVehicle, health: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleStuckTimerUp(vehicle: NativeVehicle, p1: number, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ResetVehicleStuckTimer(vehicle: NativeVehicle, nullAttributes: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleDriveable(vehicle: NativeVehicle, isOnFireCheck: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleHasBeenOwnedByPlayer(vehicle: NativeVehicle, owned: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleNeedsToBeHotwired(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function StartVehicleHorn(vehicle: NativeVehicle, duration: number, mode: NativeHash, forever: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleSilent(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleHasStrongAxles(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetDisplayNameFromVehicleModel(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleDeformationAtPos(vehicle: NativeVehicle, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleLivery(vehicle: NativeVehicle, liveryIndex: number): void;
  /**
   *
   * @param {NativeVehicle} trailers2 undefined
   */
  export function GetVehicleLivery(trailers2: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleLiveryCount(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleWindowIntact(vehicle: NativeVehicle, windowIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function AreAllVehicleWindowsIntact(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function AreAnyVehicleSeatsFree(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ResetVehicleWheels(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsHeliPartBroken(vehicle: NativeVehicle, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetHeliMainRotorHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetHeliTailRotorHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetHeliEngineHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function WasCounterActivated(vehicle: NativeVehicle, p1: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleNameDebug(vehicle: NativeVehicle, name: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleExplodesOnHighExplosionDamage(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function ControlLandingGear(vehicle: NativeVehicle, state: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetLandingGearState(vehicle: NativeVehicle): void;
  /**
   *
   * @param {number} x undefined
   */
  export function IsAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RequestVehicleHighDetailModel(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RemoveVehicleHighDetailModel(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleHighDetail(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeHash} vehicleHash undefined
   */
  export function RequestVehicleAsset(vehicleHash: NativeHash, vehicleAsset: number): void;
  /**
   *
   * @param {number} vehicleAsset undefined
   */
  export function HasVehicleAssetLoaded(vehicleAsset: number): void;
  /**
   *
   * @param {number} vehicleAsset undefined
   */
  export function RemoveVehicleAsset(vehicleAsset: number): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function SetTowTruckCraneHeight(towTruck: NativeVehicle, height: number): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function AttachVehicleToTowTruck(towTruck: NativeVehicle, vehicle: NativeVehicle, rear: NativeBOOL, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function DetachVehicleFromTowTruck(towTruck: NativeVehicle, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function DetachVehicleFromAnyTowTruck(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function IsVehicleAttachedToTowTruck(towTruck: NativeVehicle, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} towTruck undefined
   */
  export function GetEntityAttachedToTowTruck(towTruck: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleAutomaticallyAttaches(vehicle: NativeVehicle, p1: NativeBOOL, p2: NativeAny): void;
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
  export function SetDesiredVerticalFlightPhase(vehicle: NativeVehicle, angleRatio: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVerticalFlightPhase(vehicle: NativeVehicle, angle: number): void;
  /**
   *
   * @param {NativeVector3} outVec undefined
   */
  export function _0xA4822F1CF23F4810(outVec: NativeVector3, p1: NativeAny, outVec1: NativeVector3, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleBurnout(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleInBurnout(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleReduceGrip(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleIndicatorLights(vehicle: NativeVehicle, turnSignal: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleBrakeLights(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleHandbrake(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function GetVehicleTrailerVehicle(vehicle: NativeVehicle, trailer: NativeVehicle): void;
  /**
   *
   * @param {string} vehicle undefined
   */
  export function _0xCAC66558B944DA67(vehicle: string, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleRudderBroken(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x1A78AD3D8240536F(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleMaxSpeed(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleMaxBraking(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleMaxTraction(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleAcceleration(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleModelMaxSpeed(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleModelMaxBraking(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleModelHandBrake(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleModelMaxTraction(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleModelAcceleration(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleModelDownForce(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleModelMaxKnots(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleModelMoveResistance(modelHash: NativeHash): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function GetVehicleClassMaxSpeed(vehicleClass: number): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function GetVehicleClassMaxTraction(vehicleClass: number): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function GetVehicleClassMaxAgility(vehicleClass: number): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function GetVehicleClassMaxAcceleration(vehicleClass: number): void;
  /**
   *
   * @param {number} vehicleClass undefined
   */
  export function GetVehicleClassMaxBraking(vehicleClass: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function AddSpeedZoneForCoord(x: number, y: number, z: number, radius: number, speed: number, p5: NativeBOOL): void;
  /**
   *
   * @param {number} speedzone undefined
   */
  export function RemoveSpeedZone(speedzone: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function OpenBombBayDoors(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function CloseBombBayDoors(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleSearchlightOn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} heli undefined
   */
  export function SetVehicleSearchlight(heli: NativeVehicle, toggle: NativeBOOL, canBeUsedByAI: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x639431E895B9AA57(ped: NativePed, vehicle: NativeVehicle, p2: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function CanShuffleSeat(vehicle: NativeVehicle, ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetNumModKits(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleModKit(vehicle: NativeVehicle, modKit: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleModKit(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleModKitType(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleWheelType(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleWheelType(vehicle: NativeVehicle, WheelType: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function GetNumModColors(p0: number, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleModColor1(vehicle: NativeVehicle, paintType: number, color: number, p3: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleModColor2(vehicle: NativeVehicle, paintType: number, color: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleModColor1(vehicle: NativeVehicle, paintType: number, color: number, pearlescentColor: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleModColor2(vehicle: NativeVehicle, paintType: number, color: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleModColor1Name(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleModColor2Name(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleModLoadDone(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleMod(vehicle: NativeVehicle, modType: number, modIndex: number, customTires: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleMod(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleHeadlightColor(vehicle: NativeVehicle, color: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleModVariation(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetNumVehicleMods(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RemoveVehicleMod(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ToggleVehicleMod(vehicle: NativeVehicle, modType: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsToggleModOn(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetModTextLabel(vehicle: NativeVehicle, modType: number, modValue: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetModSlotName(vehicle: NativeVehicle, modType: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetLiveryName(vehicle: NativeVehicle, liveryIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleModModifierValue(vehicle: NativeVehicle, modType: number, modIndex: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleModData(vehicle: NativeVehicle, modType: number, modIndex: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PreloadVehicleMod(p0: NativeAny, modType: number, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function HasPreloadModsFinished(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ReleasePreloadMods(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleTyreSmokeColor(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleTyreSmokeColor(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleWindowTint(vehicle: NativeVehicle, tint: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleWindowTint(vehicle: NativeVehicle): void;
  /**
   *
   */
  export function GetNumVehicleWindowTints(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleColor(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xEEBFC7A7EFDC35B4(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleCauseOfDestruction(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetIsLeftVehicleHeadlightDamaged(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetIsRightVehicleHeadlightDamaged(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleEnginePowerMultiplier(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleSt(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function IsAnyPassengerRappelling(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleEngineTorqueMultiplier(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0AD9E8F87FF7C16F(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleIsWanted(vehicle: NativeVehicle, state: NativeBOOL): void;
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
  export function DisablePlaneAileron(vehicle: NativeVehicle, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetIsVehicleEngineRunning(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x1D97D1E3A70A649F(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetBikeLeanAngle(vehicle: NativeVehicle, x: number, y: number): void;
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
  export function SetLastDrivenVehicle(vehicle: NativeVehicle): void;
  /**
   *
   */
  export function GetLastDrivenVehicle(): void;
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
  export function SetPlaneMinHeightAboveTerrain(plane: NativeVehicle, height: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleLodMultiplier(vehicle: NativeVehicle, multiplier: number): void;
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
  export function SetVehicleShootAtTarget(driver: NativePed, entity: NativeEntity, xTarget: number, yTarget: number, zTarget: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleOwner(vehicle: NativeVehicle, entity: NativeEntity): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetForceHdVehicle(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x182F266C2D9E2BEB(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehiclePlateType(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function TrackVehicleVisibility(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleVisible(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleGravity(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function IsVehicleShopResprayAllowed(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleEngineCanDegrade(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function VehicleHasLandingGear(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ArePropellersUndamaged(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x0CDDA42F9E360CA6(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleStolen(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleIsStolen(vehicle: NativeVehicle, isStolen: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xAD2D28A1AFDFF131(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function AreVehicleWingsIntact(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xB264C4D2F2B0A78B(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function DetachVehicleFromCargobob(vehicle: NativeVehicle, cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function DetachVehicleFromAnyCargobob(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function IsVehicleAttachedToCargobob(cargobob: NativeVehicle, vehicleAttached: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function GetVehicleAttachedToCargobob(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function AttachVehicleToCargobob(vehicle: NativeVehicle, cargobob: NativeVehicle, p2: number, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function _0x571FEB383F629926(cargobob: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function GetCargobobHookPosition(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function DoesCargobobHavePickUpRope(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function CreatePickUpRopeForCargobob(cargobob: NativeVehicle, state: number): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function RemovePickUpRopeForCargobob(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function SetCargobobHookPosition(cargobob: NativeVehicle, xOffset: number, yOffset: number, state: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xCF1182F682F65307(p0: NativeAny, p1: NativePlayer): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function DoesCargobobHavePickupMagnet(cargobob: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function SetCargobobPickupMagnetActive(cargobob: NativeVehicle, isActive: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} cargobob undefined
   */
  export function SetCargobobPickupMagnetStrength(cargobob: NativeVehicle, strength: number): void;
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
  export function DoesVehicleHaveWeapons(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x2C4A1590ABF43E8B(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} disabled undefined
   */
  export function DisableVehicleWeapon(disabled: NativeBOOL, weaponHash: NativeHash, vehicle: NativeVehicle, owner: NativePed): void;
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
  export function GetVehicleClass(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetVehicleClassFromName(modelHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetPlayersLastVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleCanBeUsedByFleeingPeds(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE5810AC70602F2F5(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleCreatesMoneyPickupsWhenExploded(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleJetEngineOn(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function SetHelicopterRollPitchYawMultHealth(helicopter: NativeVehicle, multiplier: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleFrictionOverride(vehicle: NativeVehicle, friction: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleWheelsCanBreakOffWhenBlowUp(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF78F94D60248C737(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleCeilingHeight(vehicle: NativeVehicle, p1: number): void;
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
  export function DoesVehicleExistWithDecorator(decorator: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleExclusiveDriver(vehicle: NativeVehicle, ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleExclusiveDriver2(vehicle: NativeVehicle, ped: NativePed, p2: number): void;
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
  export function DisplayDistantVehicles(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleNeonLightsColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleNeonLightsColour(vehicle: NativeVehicle, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleNeonLightEnabled(vehicle: NativeVehicle, index: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleNeonLightEnabled(vehicle: NativeVehicle, index: number): void;
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
  export function RequestVehicleScaleformMovie(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleBodyHealth(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleBodyHealth(vehicle: NativeVehicle, value: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xDF7E3EEB29642C38(vehicle: NativeVehicle, out1: NativeVector3, out2: NativeVector3): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleSuspensionHeight(vehicle: NativeVehicle): void;
  /**
   *
   * @param {number} multiplier undefined
   */
  export function SetCarHighSpeedBumpSeverityMultiplier(multiplier: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xA7DCDF4DED40A8F4(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleBodyHealth2(vehicle: NativeVehicle): void;
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
  export function SetVehicleHudSpecialAbilityBarActive(vehicle: NativeVehicle, active: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xE16142B94664DEFD(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} modelHash undefined
   */
  export function CreateObject(modelHash: NativeObject, x: number, y: number, z: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL, dynamic: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function CreateObjectNoOffset(modelHash: NativeHash, x: number, y: number, z: number, isNetwork: NativeBOOL, thisScriptCheck: NativeBOOL, dynamic: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function DeleteObject(object: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function PlaceObjectOnGroundProperly(object: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function SlideObject(object: NativeObject, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function SetObjectTargettable(object: NativeObject, targettable: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function EnableObjectLod(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: NativeHash, isMission: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function HasObjectBeenBroken(object: NativeObject): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function HasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: NativeHash, p5: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x46494A2475701343(p0: number, p1: number, p2: number, p3: number, modelHash: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {number} xPos undefined
   */
  export function GetObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): void;
  /**
   *
   * @param {NativeAny} coords undefined
   */
  export function _0x163F8B586BC95F2A(coords: NativeAny, radius: number, modelHash: NativeHash, x: number, y: number, z: number, p6: NativeVector3, p7: number): void;
  /**
   *
   * @param {NativeHash} type undefined
   */
  export function SetStateOfClosestDoorOfType(type: NativeHash, x: number, y: number, z: number, locked: NativeBOOL, heading: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} type undefined
   */
  export function GetStateOfClosestDoorOfType(type: NativeHash, x: number, y: number, z: number, locked: NativeBOOL, heading: number): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function DoorControl(doorHash: NativeHash, x: number, y: number, z: number, locked: NativeBOOL, xRotMult: number, yRotMult: number, zRotMult: number): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function AddDoorToSystem(doorHash: NativeHash, modelHash: NativeHash, x: number, y: number, z: number, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function RemoveDoorFromSystem(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function SetDoorAccelerationLimit(doorHash: NativeHash, limit: number, p2: NativeBOOL, p3: NativeBOOL): void;
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
  export function SetDoorAjarAngle(doorHash: NativeHash, ajar: number, p2: NativeBOOL, p3: NativeBOOL): void;
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
  export function DoesDoorExist(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} door undefined
   */
  export function IsDoorClosed(door: NativeHash): void;
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
  export function IsGarageEmpty(garage: NativeAny, p1: NativeBOOL, p2: number): void;
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
  export function DoesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: NativeHash, p5: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsPointInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: NativeBOOL, p11: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0x4D89D607CB3DD1D2(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function SetObjectPhysicsParams(object: NativeObject, mass: number, gravityFactor: number, dampingLinearC: number, dampingLinearV: number, dampingLinearV2: number, dampingAngularC: number, dampingAngularV: number, dampingAngularV2: number, margin: number, default2Pi: number, buoyancyFactor: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetObjectFragmentDamageHealth(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function IsAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} objectHash undefined
   */
  export function IsObjectNearPoint(objectHash: NativeHash, x: number, y: number, z: number, range: number): void;
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
  export function TrackObjectVisibility(p0: NativeAny): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function IsObjectVisible(object: NativeObject): void;
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
  export function GetDesObject(x: number, y: number, z: number, rotation: number, name: string): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function SetDesObjectState(handle: number, state: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function GetDesObjectState(handle: number): void;
  /**
   *
   * @param {number} handle undefined
   */
  export function DoesDesObjectExist(handle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x260EE4FDBDF4DB01(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function CreatePickup(pickupHash: NativeHash, posX: number, posY: number, posZ: number, p4: number, value: number, p6: NativeBOOL, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function CreatePickupRotate(pickupHash: NativeHash, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: number, amount: number, p9: NativeAny, p10: NativeBOOL, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function CreateAmbientPickup(pickupHash: NativeHash, posX: number, posY: number, posZ: number, p4: number, value: number, modelHash: NativeHash, returnHandle: NativeBOOL, p8: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function CreatePortablePickup(pickupHash: NativeHash, x: number, y: number, z: number, placeOnGround: NativeBOOL, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function CreatePortablePickup2(pickupHash: NativeHash, x: number, y: number, z: number, placeOnGround: NativeBOOL, modelHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function AttachPortablePickupToPed(ped: NativePed, p1: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function DetachPortablePickupFromPed(ped: NativePed): void;
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
  export function GetSafePickupCoords(x: number, y: number, z: number, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function GetPickupCoords(pickup: NativePickup): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function RemoveAllPickupsOfType(pickupHash: NativeHash): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function HasPickupBeenCollected(pickup: NativePickup): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function RemovePickup(pickup: NativePickup): void;
  /**
   *
   * @param {number} x undefined
   */
  export function CreateMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: NativeHash): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function DoesPickupExist(pickup: NativePickup): void;
  /**
   *
   * @param {NativeObject} pickupObject undefined
   */
  export function DoesPickupObjectExist(pickupObject: NativeObject): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function GetPickupObject(pickup: NativePickup): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0378C08504160D0D(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} pickupHash undefined
   */
  export function IsPickupWithinRadius(pickupHash: NativeHash, x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function SetPickupRegenerationTime(pickup: NativePickup, duration: number): void;
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
  export function SetTeamPickupObject(object: NativeObject, p1: NativeAny, p2: NativeBOOL): void;
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
  export function HighlightPlacementCoords(x: number, y: number, z: number, colorIndex: number): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0xB2D0BDE54F0E8E5A(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePickup} pickupHash undefined
   */
  export function GetWeaponHashFromPickup(pickupHash: NativePickup): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0x11D1E53A726891FE(object: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function SetObjectTextureVariant(object: NativeObject, paintIndex: number): void;
  /**
   *
   * @param {NativePickup} pickupHash undefined
   */
  export function GetPickupHash(pickupHash: NativePickup): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetForceObjectThisFrame(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function MarkObjectForDeletion(object: NativeObject): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPause(ped: NativePed, time: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskStandStill(ped: NativePed, time: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskJump(ped: NativePed, unused: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskCower(ped: NativePed, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskHandsUp(ped: NativePed, duration: number, facingPed: NativePed, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function UpdateTaskHandsUpDuration(ped: NativePed, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskOpenVehicleDoor(ped: NativePed, vehicle: NativeVehicle, timeOut: number, doorIndex: number, speed: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskEnterVehicle(ped: NativePed, vehicle: NativeVehicle, timeout: number, seat: number, speed: number, flag: number, p6: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskLeaveVehicle(ped: NativePed, vehicle: NativeVehicle, flags: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGetOffBoat(ped: NativePed, boat: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSkyDive(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskParachute(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskParachuteToTarget(ped: NativePed, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetParachuteTaskTarget(ped: NativePed, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetParachuteTaskThrust(ped: NativePed, thrust: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskRappelFromHeli(ped: NativePed, unused: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleDriveToCoord(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, speed: number, p6: NativeAny, vehicleModel: NativeHash, drivingMode: number, stopRange: number, p10: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleDriveToCoordLongrange(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, speed: number, driveMode: number, stopRange: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleDriveWander(ped: NativePed, vehicle: NativeVehicle, speed: number, drivingStyle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskFollowToOffsetOfEntity(ped: NativePed, entity: NativeEntity, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGoStraightToCoord(ped: NativePed, x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;
  /**
   *
   * @param {NativeEntity} entity1 undefined
   */
  export function TaskGoStraightToCoordRelativeToEntity(entity1: NativeEntity, entity2: NativeEntity, p2: number, p3: number, p4: number, p5: number, p6: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskAchieveHeading(ped: NativePed, heading: number, timeout: number): void;
  /**
   *
   */
  export function TaskFlushRoute(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function TaskExtendRoute(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskFollowPointRoute(ped: NativePed, speed: number, unknown: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function TaskGoToEntity(entity: NativeEntity, target: NativeEntity, duration: number, distance: number, speed: number, p5: number, p6: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSmartFleeCoord(ped: NativePed, x: number, y: number, z: number, distance: number, time: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSmartFleePed(ped: NativePed, fleeTarget: NativePed, distance: number, fleeTime: NativeAny, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskReactAndFleePed(ped: NativePed, fleeTarget: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskShockingEventReact(ped: NativePed, eventHandle: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskWanderInArea(ped: NativePed, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskWanderStandard(ped: NativePed, p1: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehiclePark(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: NativeBOOL): void;
  /**
   *
   * @param {NativePed} killer undefined
   */
  export function TaskStealthKill(killer: NativePed, target: NativePed, actionType: NativeHash, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPlantBomb(ped: NativePed, x: number, y: number, z: number, heading: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskFollowNavMeshToCoord(ped: NativePed, x: number, y: number, z: number, speed: number, timeout: number, stoppingRange: number, persistFollowing: NativeBOOL, unk: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskFollowNavMeshToCoordAdvanced(ped: NativePed, x: number, y: number, z: number, speed: number, timeout: number, unkFloat: number, unkInt: number, unkX: number, unkY: number, unkZ: number, unk_40000f: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPathCanUseClimbovers(ped: NativePed, Toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPathCanUseLadders(ped: NativePed, Toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPathCanDropFromHeight(ped: NativePed, Toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x88E32DB8C1A4AA4B(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPathsWidthPlant(ped: NativePed, mayEnterWater: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPathPreferToAvoidWater(ped: NativePed, avoidWater: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedPathAvoidFire(ped: NativePed, avoidFire: NativeBOOL): void;
  /**
   *
   * @param {number} height undefined
   */
  export function SetGlobalMinBirdFlightHeight(height: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetNavmeshRouteDistanceRemaining(ped: NativePed, distRemaining: number, isPathReady: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetNavmeshRouteResult(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x3E38E28A1D80DDF6(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGoToCoordAnyMeans(ped: NativePed, x: number, y: number, z: number, speed: number, p5: NativeAny, p6: NativeBOOL, walkingStyle: number, p8: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGoToCoordAnyMeansExtraParams(ped: NativePed, x: number, y: number, z: number, speed: number, p5: NativeAny, p6: NativeBOOL, walkingStyle: number, p8: number, p9: NativeAny, p10: NativeAny, p11: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: NativePed, x: number, y: number, z: number, speed: number, p5: NativeAny, p6: NativeBOOL, walkingStyle: number, p8: number, p9: NativeAny, p10: NativeAny, p11: NativeAny, p12: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPlayAnim(ped: NativePed, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, lockX: NativeBOOL, lockY: NativeBOOL, lockZ: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPlayAnimAdvanced(ped: NativePed, animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, speed: number, speedMultiplier: number, duration: number, flag: NativeAny, animTime: number, p14: number, p15: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function StopAnimTask(ped: NativePed, animDictionary: string, animationName: string, p3: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskScriptedAnimation(ped: NativePed, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: number, p5: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlayEntityScriptedAnim(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: number, p5: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function StopAnimPlayback(ped: NativePed, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetAnimWeight(p0: NativeAny, p1: number, p2: NativeAny, p3: NativeAny, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetAnimRate(p0: NativeAny, p1: number, p2: NativeAny, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetAnimLooped(p0: NativeAny, p1: NativeBOOL, p2: NativeAny, p3: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPlayPhoneGestureAnimation(ped: NativePed, animDict: string, animation: string, boneMaskType: string, p4: number, p5: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskStopPhoneGestureAnimation(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPlayingPhoneGestureAnim(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPhoneGestureAnimCurrentTime(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPhoneGestureAnimTotalTime(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function TaskVehiclePlayAnim(vehicle: NativeVehicle, animation_set: string, animation_name: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function TaskLookAtCoord(entity: NativeEntity, x: number, y: number, z: number, duration: number, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskLookAtEntity(ped: NativePed, lookAt: NativeEntity, duration: number, unknown1: number, unknown2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskClearLookAt(ped: NativePed): void;
  /**
   *
   * @param {NativeObject} taskSequence undefined
   */
  export function OpenSequenceTask(taskSequence: NativeObject): void;
  /**
   *
   * @param {NativeObject} taskSequence undefined
   */
  export function CloseSequenceTask(taskSequence: NativeObject): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPerformSequence(ped: NativePed, taskSequence: NativeObject): void;
  /**
   *
   * @param {NativeObject} taskSequence undefined
   */
  export function ClearSequenceTask(taskSequence: NativeObject): void;
  /**
   *
   * @param {NativeObject} taskSequence undefined
   */
  export function SetSequenceToRepeat(taskSequence: NativeObject, repeat: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetSequenceProgress(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetIsTaskActive(ped: NativePed, taskNumber: number): void;
  /**
   *
   * @param {NativePed} targetPed undefined
   */
  export function GetScriptTaskStatus(targetPed: NativePed, taskHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} veh undefined
   */
  export function GetActiveVehicleMissionType(veh: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskLeaveAnyVehicle(ped: NativePed, p1: number, p2: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskAimGunScripted(ped: NativePed, scriptTask: NativeHash, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskAimGunScriptedWithTarget(p0: NativeAny, p1: NativeAny, p2: number, p3: number, p4: number, p5: NativeAny, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function UpdateTaskAimGunScriptedTarget(p0: NativePed, p1: NativePed, p2: number, p3: number, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function GetClipSetForScriptedGunTask(p0: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskAimGunAtEntity(ped: NativePed, entity: NativeEntity, duration: number, unk: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskTurnPedToFaceEntity(ped: NativePed, entity: NativeEntity, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskAimGunAtCoord(ped: NativePed, x: number, y: number, z: number, time: number, p5: NativeBOOL, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskShootAtCoord(ped: NativePed, x: number, y: number, z: number, duration: number, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskShuffleToNextVehicleSeat(ped: NativePed, vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedTasks(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedSecondaryTask(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function TaskEveryoneLeaveVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGotoEntityOffset(ped: NativePed, p1: NativeAny, p2: NativeAny, x: number, y: number, z: number, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGotoEntityOffsetXy(ped: NativePed, entity: NativeEntity, duration: number, xOffset: number, yOffset: number, zOffset: number, moveBlendRatio: number, useNavmesh: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskTurnPedToFaceCoord(ped: NativePed, x: number, y: number, z: number, duration: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function TaskVehicleTempAction(driver: NativePed, vehicle: NativeVehicle, action: number, time: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function TaskVehicleMission(p0: number, p1: number, veh: NativeVehicle, p3: NativeAny, p4: number, p5: NativeAny, p6: number, p7: number, p8: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleMissionPedTarget(ped: NativePed, vehicle: NativeVehicle, pedTarget: NativePed, mode: number, maxSpeed: number, drivingStyle: number, minDistance: number, p7: number, p8: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleMissionCoorsTarget(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleEscort(ped: NativePed, vehicle: NativeVehicle, targetVehicle: NativeVehicle, mode: number, speed: number, drivingStyle: number, minDistance: number, p7: number, noRoadsDistance: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function TaskVehicleFollow(driver: NativePed, vehicle: NativeVehicle, targetEntity: NativeEntity, speed: number, drivingStyle: number, minDistance: number): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function TaskVehicleChase(driver: NativePed, targetEnt: NativeEntity): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function TaskVehicleHeliProtect(pilot: NativePed, vehicle: NativeVehicle, entityToFollow: NativeEntity, targetSpeed: number, p4: number, radius: number, altitude: number, p7: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetTaskVehicleChaseBehaviorFlag(ped: NativePed, flag: number, set: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetTaskVehicleChaseIdealPursuitDistance(ped: NativePed, distance: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function TaskHeliChase(pilot: NativePed, entityToFollow: NativeEntity, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function TaskPlaneChase(pilot: NativePed, entityToFollow: NativeEntity, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function TaskPlaneLand(pilot: NativePed, plane: NativeVehicle, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function TaskHeliMission(pilot: NativePed, aircraft: NativeVehicle, targetVehicle: NativeVehicle, targetPed: NativePed, destinationX: number, destinationY: number, destinationZ: number, missionFlag: number, maxSpeed: number, landingRadius: number, targetHeading: number, unk1: number, unk2: number, unk3: NativeHash, landingFlags: number): void;
  /**
   *
   * @param {NativePed} pilot undefined
   */
  export function TaskPlaneMission(pilot: NativePed, aircraft: NativeVehicle, targetVehicle: NativeVehicle, targetPed: NativePed, destinationX: number, destinationY: number, destinationZ: number, missionFlag: number, angularDrag: number, unk: number, targetHeading: number, maxZ: number, minZ: number): void;
  /**
   *
   * @param {NativePed} pedDriver undefined
   */
  export function TaskBoatMission(pedDriver: NativePed, boat: NativeVehicle, p2: NativeAny, p3: NativeAny, x: number, y: number, z: number, p7: NativeAny, maxSpeed: number, drivingStyle: number, p10: number, p11: NativeAny): void;
  /**
   *
   * @param {NativePed} driverPed undefined
   */
  export function TaskDriveBy(driverPed: NativePed, targetPed: NativePed, targetVehicle: NativeVehicle, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, p8: NativeBOOL, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativePed} shootingPed undefined
   */
  export function SetDrivebyTaskTarget(shootingPed: NativePed, targetPed: NativePed, targetVehicle: NativeVehicle, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearDrivebyTaskUnderneathDrivingTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsDrivebyTaskUnderneathDrivingTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ControlMountedWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} shootingPed undefined
   */
  export function SetMountedWeaponTarget(shootingPed: NativePed, targetPed: NativePed, targetVehicle: NativeVehicle, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsMountedWeaponTaskUnderneathDrivingTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskUseMobilePhone(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskUseMobilePhoneTimed(ped: NativePed, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskChatToPed(ped: NativePed, target: NativePed, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskWarpPedIntoVehicle(ped: NativePed, vehicle: NativeVehicle, seat: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function TaskShootAtEntity(entity: NativeEntity, target: NativeEntity, duration: number, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskClimb(ped: NativePed, unused: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskClimbLadder(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedTasksImmediately(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskPerformSequenceFromProgress(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetNextDesiredMoveState(p0: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDesiredMoveBlendRatio(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedDesiredMoveBlendRatio(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGotoEntityAiming(ped: NativePed, target: NativeEntity, distanceToStopAt: number, StartAimingDist: number): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function TaskSetDecisionMaker(p0: NativePed, p1: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskSetSphereDefensiveArea(p0: NativeAny, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskClearDefensiveArea(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPedSlideToCoord(ped: NativePed, x: number, y: number, z: number, heading: number, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPedSlideToCoordHdgRate(ped: NativePed, x: number, y: number, z: number, heading: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function AddCoverPoint(posX: number, posY: number, posZ: number, heading: number, p4: NativeBOOL, p5: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {NativeScrHandle} coverpoint undefined
   */
  export function RemoveCoverPoint(coverpoint: NativeScrHandle): void;
  /**
   *
   * @param {number} x undefined
   */
  export function DoesScriptedCoverPointExistAtCoords(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeScrHandle} coverpoint undefined
   */
  export function GetScriptedCoverPointCoords(coverpoint: NativeScrHandle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskCombatPed(ped: NativePed, targetPed: NativePed, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskCombatPedTimed(p0: NativeAny, ped: NativePed, duration: number, p3: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSeekCoverFromPos(ped: NativePed, x: number, y: number, z: number, duration: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSeekCoverFromPed(ped: NativePed, target: NativePed, duration: number, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskSeekCoverToCoverPoint(p0: NativeAny, p1: NativeAny, p2: number, p3: number, p4: number, p5: NativeAny, p6: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSeekCoverToCoords(ped: NativePed, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: NativeAny, p8: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPutPedDirectlyIntoCover(ped: NativePed, x: number, y: number, z: number, timeout: NativeAny, p5: NativeBOOL, p6: number, p7: NativeBOOL, p8: NativeBOOL, p9: NativeAny, p10: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskExitCover(ped: NativePed, p1: number, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPutPedDirectlyIntoMelee(ped: NativePed, target: NativePed, p2: number, p3: number, p4: number, flag: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function TaskToggleDuck(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function TaskGuardCurrentPosition(p0: NativePed, p1: number, p2: number, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskGuardAssignedDefensiveArea(p0: NativeAny, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeAny): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function TaskGuardSphereDefensiveArea(p0: NativePed, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeAny, p7: number, p8: number, p9: number, p10: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskStandGuard(ped: NativePed, x: number, y: number, z: number, heading: number, scenarioName: string): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function SetDriveTaskCruiseSpeed(driver: NativePed, cruiseSpeed: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetDriveTaskMaxCruiseSpeed(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetDriveTaskDrivingStyle(ped: NativePed, drivingStyle: number): void;
  /**
   *
   * @param {number} playerX undefined
   */
  export function AddCoverBlockingArea(playerX: number, playerY: number, playerZ: number, radiusX: number, radiusY: number, radiusZ: number, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: NativeBOOL): void;
  /**
   *
   */
  export function RemoveAllCoverBlockingAreas(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskStartScenarioInPlace(ped: NativePed, scenarioName: string, unkDelay: number, playEnterAnim: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskStartScenarioAtPosition(ped: NativePed, scenarioName: string, x: number, y: number, z: number, heading: number, duration: number, sittingScenario: NativeBOOL, teleport: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskUseNearestScenarioToCoord(ped: NativePed, x: number, y: number, z: number, distance: number, duration: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskUseNearestScenarioToCoordWarp(ped: NativePed, x: number, y: number, z: number, radius: number, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskUseNearestScenarioChainToCoord(p0: NativeAny, p1: number, p2: number, p3: number, p4: number, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskUseNearestScenarioChainToCoordWarp(p0: NativeAny, p1: number, p2: number, p3: number, p4: number, p5: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function DoesScenarioExistInArea(x: number, y: number, z: number, radius: number, b: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function DoesScenarioOfTypeExistInArea(p0: number, p1: number, p2: number, p3: NativeAny, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function PedHasUseScenarioTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function PlayAnimOnRunningScenario(ped: NativePed, animDict: string, animName: string): void;
  /**
   *
   * @param {string} scenarioGroup undefined
   */
  export function DoesScenarioGroupExist(scenarioGroup: string): void;
  /**
   *
   * @param {string} scenarioGroup undefined
   */
  export function IsScenarioGroupEnabled(scenarioGroup: string): void;
  /**
   *
   * @param {string} scenarioGroup undefined
   */
  export function SetScenarioGroupEnabled(scenarioGroup: string, p1: NativeBOOL): void;
  /**
   *
   */
  export function ResetScenarioGroupsEnabled(): void;
  /**
   *
   * @param {string} scenarioGroup undefined
   */
  export function SetExclusiveScenarioGroup(scenarioGroup: string): void;
  /**
   *
   */
  export function ResetExclusiveScenarioGroup(): void;
  /**
   *
   * @param {string} scenarioType undefined
   */
  export function IsScenarioTypeEnabled(scenarioType: string): void;
  /**
   *
   * @param {string} scenarioType undefined
   */
  export function SetScenarioTypeEnabled(scenarioType: string, toggle: NativeBOOL): void;
  /**
   *
   */
  export function ResetScenarioTypesEnabled(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedActiveInScenario(ped: NativePed): void;
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
  export function TaskCombatHatedTargetsInArea(ped: NativePed, x: number, y: number, z: number, radius: number, p5: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskCombatHatedTargetsAroundPed(ped: NativePed, radius: number, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskCombatHatedTargetsAroundPedTimed(p0: NativeAny, p1: number, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {number} ped undefined
   */
  export function TaskThrowProjectile(ped: number, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSwapWeapon(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskReloadWeapon(ped: NativePed, unused: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedGettingUp(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskWrithe(ped: NativePed, target: NativePed, time: number, p3: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInWrithe(ped: NativePed): void;
  /**
   *
   * @param {string} patrolRoute undefined
   */
  export function OpenPatrolRoute(patrolRoute: string): void;
  /**
   *
   */
  export function ClosePatrolRoute(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function AddPatrolRouteNode(p0: number, p1: string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p8: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function AddPatrolRouteLink(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function CreatePatrolRoute(): void;
  /**
   *
   * @param {string} patrolRoute undefined
   */
  export function DeletePatrolRoute(patrolRoute: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskPatrol(ped: NativePed, p1: string, p2: NativeAny, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskStayInCover(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function AddVehicleSubtaskAttackCoord(ped: NativePed, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function AddVehicleSubtaskAttackPed(ped: NativePed, ped2: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleShootAtPed(ped: NativePed, target: NativePed, flag: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleAimAtPed(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleShootAtCoord(ped: NativePed, x: number, y: number, z: number, p4: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleAimAtCoord(ped: NativePed, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleGotoNavmesh(ped: NativePed, vehicle: NativeVehicle, x: number, y: number, z: number, speed: number, behaviorFlag: number, stoppingRange: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGoToCoordWhileAimingAtCoord(ped: NativePed, x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number, moveSpeed: number, p8: NativeBOOL, p9: number, p10: number, p11: NativeBOOL, flags: NativeAny, p13: NativeBOOL, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskGoToCoordWhileAimingAtEntity(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeAny, p5: number, p6: NativeBOOL, p7: number, p8: number, p9: NativeBOOL, p10: NativeAny, p11: NativeBOOL, p12: NativeAny, p13: NativeAny): void;
  /**
   *
   * @param {NativePed} pedHandle undefined
   */
  export function TaskGoToCoordAndAimAtHatedEntitiesNearCoord(pedHandle: NativePed, goToLocationX: number, goToLocationY: number, goToLocationZ: number, focusLocationX: number, focusLocationY: number, focusLocationZ: number, speed: number, shootAtEnemies: NativeBOOL, distanceToStopAt: number, noRoadsDistance: number, unkTrue: NativeBOOL, unkFlag: number, aimingFlag: number, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskGoToEntityWhileAimingAtCoord(p0: NativeAny, p1: NativeAny, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL, p7: number, p8: number, p9: NativeBOOL, p10: NativeBOOL, p11: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskGoToEntityWhileAimingAtEntity(ped: NativePed, entityToWalkTo: NativeEntity, entityToAimAt: NativeEntity, speed: number, shootatEntity: NativeBOOL, p5: number, p6: number, p7: NativeBOOL, p8: NativeBOOL, firingPattern: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetHighFallTask(ped: NativePed, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {string} name undefined
   */
  export function RequestWaypointRecording(name: string): void;
  /**
   *
   * @param {string} name undefined
   */
  export function GetIsWaypointRecordingLoaded(name: string): void;
  /**
   *
   * @param {string} name undefined
   */
  export function RemoveWaypointRecording(name: string): void;
  /**
   *
   * @param {string} name undefined
   */
  export function WaypointRecordingGetNumPoints(name: string, points: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function WaypointRecordingGetCoord(name: string, point: number, coord: NativeVector3): void;
  /**
   *
   * @param {string} name undefined
   */
  export function WaypointRecordingGetSpeedAtPoint(name: string, point: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function WaypointRecordingGetClosestWaypoint(name: string, x: number, y: number, z: number, point: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function TaskFollowWaypointRecording(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function IsWaypointPlaybackGoingOnForPed(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedWaypointProgress(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedWaypointDistance(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedWaypointRouteOffset(ped: NativePed, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function GetWaypointDistanceAlongRoute(p0: string, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackGetIsPaused(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackPause(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackResume(p0: NativeAny, p1: NativeBOOL, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackOverrideSpeed(p0: NativeAny, p1: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackUseDefaultSpeed(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function UseWaypointRecordingAsAssistedMovementRoute(p0: NativeAny, p1: NativeBOOL, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackStartAimingAtPed(p0: NativeAny, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackStartAimingAtCoord(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackStartShootingAtPed(p0: NativeAny, p1: NativeAny, p2: NativeBOOL, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackStartShootingAtCoord(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeBOOL, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function WaypointPlaybackStopAimingOrShooting(p0: NativeAny): void;
  /**
   *
   * @param {string} route undefined
   */
  export function AssistedMovementRequestRoute(route: string): void;
  /**
   *
   * @param {string} route undefined
   */
  export function AssistedMovementRemoveRoute(route: string): void;
  /**
   *
   * @param {string} route undefined
   */
  export function AssistedMovementIsRouteLoaded(route: string): void;
  /**
   *
   * @param {string} route undefined
   */
  export function AssistedMovementSetRouteProperties(route: string, props: number): void;
  /**
   *
   * @param {number} dist undefined
   */
  export function AssistedMovementOverrideLoadDistanceThisFrame(dist: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskVehicleFollowWaypointRecording(ped: NativePed, vehicle: NativeVehicle, WPRecording: string, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeBOOL, p9: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function IsWaypointPlaybackGoingOnForVehicle(p0: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleWaypointProgress(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetVehicleWaypointTargetPoint(ped: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function VehicleWaypointPlaybackPause(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function VehicleWaypointPlaybackResume(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function VehicleWaypointPlaybackUseDefaultSpeed(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function VehicleWaypointPlaybackOverrideSpeed(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSetBlockingOfNonTemporaryEvents(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskForceMotionState(ped: NativePed, state: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskMoveNetwork(ped: NativePed, task: string, multiplier: number, p3: NativeBOOL, animDict: string, flags: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskMoveNetworkAdvanced(ped: NativePed, p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeAny, p9: number, p10: NativeBOOL, animDict: string, flags: number): void;
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
  export function IsMoveBlendRatioStill(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsMoveBlendRatioWalking(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsMoveBlendRatioRunning(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsMoveBlendRatioSprinting(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedStill(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedWalking(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedRunning(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedSprinting(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedStrafing(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSynchronizedScene(ped: NativePed, scene: number, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSweepAimEntity(ped: NativePed, animDict: string, animName1: string, animName2: string, animName3: string, duration: number, entity: NativeEntity, p7: number, p8: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function UpdateTaskSweepAimEntity(ped: NativePed, entity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskSweepAimPosition(ped: NativePed, animDict: string, animName1: string, animName2: string, animName3: string, timeout: number, X: number, Y: number, Z: number, unk: number, flag: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function UpdateTaskSweepAimPosition(ped: NativePed, X: number, Y: number, Z: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function TaskArrestPed(ped: NativePed, target: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedRunningArrestTask(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedBeingArrested(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function UncuffPed(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedCuffed(ped: NativePed): void;
  /**
   *
   */
  export function GetAllocatedStackSize(): void;
  /**
   *
   * @param {number} threadId undefined
   */
  export function GetFreeStackSlotsCount(threadId: number): void;
  /**
   *
   * @param {number} time undefined
   */
  export function SetRandomSeed(time: number): void;
  /**
   *
   * @param {number} time undefined
   */
  export function SetTimeScale(time: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetMissionFlag(toggle: NativeBOOL): void;
  /**
   *
   */
  export function GetMissionFlag(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetRandomEventFlag(p0: NativeAny): void;
  /**
   *
   */
  export function GetRandomEventFlag(): void;
  /**
   *
   */
  export function GetGlobalCharBuffer(): void;
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
  export function GetPrevWeatherTypeHashName(): void;
  /**
   *
   */
  export function GetNextWeatherTypeHashName(): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function IsPrevWeatherType(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function IsNextWeatherType(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function SetWeatherTypePersist(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function SetWeatherTypeNowPersist(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function SetWeatherTypeNow(weatherType: string): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function SetWeatherTypeOverTime(weatherType: string, time: number): void;
  /**
   *
   */
  export function SetRandomWeatherType(): void;
  /**
   *
   */
  export function ClearWeatherTypePersist(): void;
  /**
   *
   * @param {NativeHash} weatherType1 undefined
   */
  export function GetWeatherTypeTransition(weatherType1: NativeHash, weatherType2: NativeHash, percentWeather2: number): void;
  /**
   *
   * @param {NativeHash} weatherType1 undefined
   */
  export function SetWeatherTypeTransition(weatherType1: NativeHash, weatherType2: NativeHash, percentWeather2: number): void;
  /**
   *
   * @param {string} weatherType undefined
   */
  export function SetOverrideWeather(weatherType: string): void;
  /**
   *
   */
  export function ClearOverrideWeather(): void;
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
  export function SetWind(speed: number): void;
  /**
   *
   * @param {number} speed undefined
   */
  export function SetWindSpeed(speed: number): void;
  /**
   *
   */
  export function GetWindSpeed(): void;
  /**
   *
   * @param {number} direction undefined
   */
  export function SetWindDirection(direction: number): void;
  /**
   *
   */
  export function GetWindDirection(): void;
  /**
   *
   * @param {number} intensity undefined
   */
  export function SetRainFxIntensity(intensity: number): void;
  /**
   *
   */
  export function GetRainLevel(): void;
  /**
   *
   */
  export function GetSnowLevel(): void;
  /**
   *
   */
  export function CreateLightningThunder(): void;
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
  export function SetCloudHatTransition(type: string, transitionTime: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xA74802FB8D0B7814(p0: string, p1: number): void;
  /**
   *
   */
  export function ClearCloudHat(): void;
  /**
   *
   * @param {number} opacity undefined
   */
  export function SetCloudHatOpacity(opacity: number): void;
  /**
   *
   */
  export function GetCloudHatOpacity(): void;
  /**
   *
   */
  export function GetGameTimer(): void;
  /**
   *
   */
  export function GetFrameTime(): void;
  /**
   *
   */
  export function GetBenchmarkTime(): void;
  /**
   *
   */
  export function GetFrameCount(): void;
  /**
   *
   * @param {number} startRange undefined
   */
  export function GetRandomFloatInRange(startRange: number, endRange: number): void;
  /**
   *
   * @param {number} startRange undefined
   */
  export function GetRandomIntInRange(startRange: number, endRange: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetGroundZFor3dCoord(x: number, y: number, z: number, groundZ: number, unk: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetGroundZCoordWithOffsets(x: number, y: number, z: number, groundZ: number, offsets: NativeVector3): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function Asin(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function Acos(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function Tan(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function Atan(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function Atan2(p0: number, p1: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function GetDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function GetAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): void;
  /**
   *
   * @param {number} dx undefined
   */
  export function GetHeadingFromVector2d(dx: number, dy: number): void;
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
  export function SetBit(address: number, offset: number): void;
  /**
   *
   * @param {number} address undefined
   */
  export function ClearBit(address: number, offset: number): void;
  /**
   *
   * @param {string} string undefined
   */
  export function GetHashKey(string: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xF2F6A2FA49278625(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: NativeAny, p10: NativeAny, p11: NativeAny, p12: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsAreaOccupied(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: NativeBOOL, p10: NativeBOOL, p11: NativeAny, p12: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function IsPositionOccupied(x: number, y: number, z: number, range: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: NativeAny, p10: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeAny): void;
  /**
   *
   * @param {number} X undefined
   */
  export function ClearArea(X: number, Y: number, Z: number, radius: number, p4: NativeBOOL, ignoreCopCars: NativeBOOL, ignoreObjects: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function ClearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function ClearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function ClearAngledAreaOfVehicles(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeBOOL, p8: NativeBOOL, p9: NativeBOOL, p10: NativeBOOL, p11: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function ClearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function ClearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function ClearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function ClearAreaOfProjectiles(x: number, y: number, z: number, radius: number, isNetworkGame: NativeBOOL): void;
  /**
   *
   */
  export function _0x7EC6F9A478A6A512(): void;
  /**
   *
   * @param {NativeBOOL} unk undefined
   */
  export function SetSaveMenuActive(unk: NativeBOOL): void;
  /**
   *
   */
  export function _0x397BAA01068BAA96(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetCreditsActive(toggle: NativeBOOL): void;
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
  export function TerminateAllScriptsWithThisName(scriptName: string): void;
  /**
   *
   */
  export function NetworkSetScriptIsSafeForNetworkGame(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function AddHospitalRestart(x: number, y: number, z: number, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {number} hospitalIndex undefined
   */
  export function DisableHospitalRestart(hospitalIndex: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function AddPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: NativeAny): void;
  /**
   *
   * @param {number} policeIndex undefined
   */
  export function DisablePoliceRestart(policeIndex: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetCustomRespawnPosition(x: number, y: number, z: number, heading: number): void;
  /**
   *
   */
  export function SetNextRespawnToCustom(): void;
  /**
   *
   * @param {NativeBOOL} disableRespawn undefined
   */
  export function DisableAutomaticRespawn(disableRespawn: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function IgnoreNextRestart(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetFadeOutAfterDeath(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetFadeOutAfterArrest(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetFadeInAfterDeathArrest(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetFadeInAfterLoad(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function RegisterSaveHouse(p0: number, p1: number, p2: number, p3: number, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {number} index undefined
   */
  export function SetSaveHouse(index: number, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function OverrideSaveHouse(p0: NativeBOOL, p1: number, p2: number, p3: number, p4: number, p5: NativeBOOL, p6: number, p7: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA4A0065E39C9F25C(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   */
  export function DoAutoSave(): void;
  /**
   *
   */
  export function _0x6E04F06094C87047(): void;
  /**
   *
   */
  export function IsAutoSaveInProgress(): void;
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
  export function BeginReplayStats(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x69FE6DC87BD2A5E9(p0: NativeAny): void;
  /**
   *
   */
  export function EndReplayStats(): void;
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
  export function ClearReplayStats(): void;
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
  export function IsMemoryCardInUse(): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function ShootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: NativeBOOL, weaponHash: NativeHash, ownerPed: NativePed, isAudible: NativeBOOL, isInvisible: NativeBOOL, speed: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function ShootSingleBulletBetweenCoordsPresetParams(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: NativeBOOL, weaponHash: NativeHash, ownerPed: NativePed, isAudible: NativeBOOL, isInvisible: NativeBOOL, speed: number, entity: NativeEntity): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function ShootSingleBulletBetweenCoordsWithExtraParams(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: NativeBOOL, weaponHash: NativeHash, ownerPed: NativePed, isAudible: NativeBOOL, isInvisible: NativeBOOL, speed: number, entity: NativeEntity, p14: NativeBOOL, p15: NativeBOOL, p16: NativeBOOL, p17: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function GetModelDimensions(modelHash: NativeHash, minimum: NativeVector3, maximum: NativeVector3): void;
  /**
   *
   * @param {number} fakeWantedLevel undefined
   */
  export function SetFakeWantedLevel(fakeWantedLevel: number): void;
  /**
   *
   */
  export function GetFakeWantedLevel(): void;
  /**
   *
   * @param {number} address undefined
   */
  export function IsBitSet(address: number, offset: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function UsingMissionCreator(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xDEA36202FC3382DF(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetMinigameInProgress(toggle: NativeBOOL): void;
  /**
   *
   */
  export function IsMinigameInProgress(): void;
  /**
   *
   */
  export function IsThisAMinigameScript(): void;
  /**
   *
   */
  export function IsSniperInverted(): void;
  /**
   *
   */
  export function _0xD3D15555431AB793(): void;
  /**
   *
   * @param {number} profileSetting undefined
   */
  export function GetProfileSetting(profileSetting: number): void;
  /**
   *
   * @param {string} string1 undefined
   */
  export function AreStringsEqual(string1: string, string2: string): void;
  /**
   *
   * @param {string} str1 undefined
   */
  export function CompareStrings(str1: string, str2: string, matchCase: NativeBOOL, maxLength: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function Absi(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function Absf(value: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function IsSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function IsProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function IsProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, p7: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsProjectileTypeInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeAny, p8: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function IsProjectileTypeInRadius(x: number, y: number, z: number, projHash: NativeHash, radius: number, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function GetIsProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, projHash: NativeHash, projPos: NativeVector3, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetProjectileNearPedCoords(ped: NativePed, projHash: NativeHash, radius: number, projPos: NativeVector3, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetProjectileNearPed(ped: NativePed, projHash: NativeHash, radius: number, projPos: NativeVector3, projEnt: NativeEntity, ownedByPlayer: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsBulletInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsBulletInArea(p0: number, p1: number, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsBulletInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function HasBulletImpactedInArea(x: number, y: number, z: number, p3: number, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function HasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: NativeBOOL, p7: NativeBOOL): void;
  /**
   *
   */
  export function IsOrbisVersion(): void;
  /**
   *
   */
  export function IsDurangoVersion(): void;
  /**
   *
   */
  export function IsXbox360Version(): void;
  /**
   *
   */
  export function IsPs3Version(): void;
  /**
   *
   */
  export function IsPcVersion(): void;
  /**
   *
   */
  export function IsAussieVersion(): void;
  /**
   *
   * @param {string} string undefined
   */
  export function IsStringNull(string: string): void;
  /**
   *
   * @param {string} string undefined
   */
  export function IsStringNullOrEmpty(string: string): void;
  /**
   *
   * @param {string} string undefined
   */
  export function StringToInt(string: string, outInteger: number): void;
  /**
   *
   * @param {number} variable undefined
   */
  export function SetBitsInRange(variable: number, rangeStart: number, rangeEnd: number, p3: number): void;
  /**
   *
   * @param {number} variable undefined
   */
  export function GetBitsInRange(variable: number, rangeStart: number, rangeEnd: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function AddStuntJump(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: NativeAny, p16: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function AddStuntJumpAngled(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: NativeAny, p18: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function DeleteStuntJump(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function EnableStuntJumpSet(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function DisableStuntJumpSet(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xD79185689F8FD5DF(p0: NativeBOOL): void;
  /**
   *
   */
  export function IsStuntJumpInProgress(): void;
  /**
   *
   */
  export function IsStuntJumpMessageShowing(): void;
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
  export function CancelStuntJump(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetGamePaused(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetThisScriptCanBePaused(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function HasButtonCombinationJustBeenEntered(hash: NativeHash, amount: number): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function HasCheatStringJustBeenEntered(hash: NativeHash): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function UseFreemodeMapBehavior(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} flag undefined
   */
  export function SetUnkMapFlag(flag: number): void;
  /**
   *
   */
  export function IsFrontendFading(): void;
  /**
   *
   */
  export function PopulateNow(): void;
  /**
   *
   */
  export function GetIndexOfCurrentLevel(): void;
  /**
   *
   * @param {number} level undefined
   */
  export function SetGravityLevel(level: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StartSaveData(p0: NativeAny, p1: NativeAny, p2: NativeBOOL): void;
  /**
   *
   */
  export function StopSaveData(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xA09F896CE912481F(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RegisterIntToSave(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA735353C77334EA0(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RegisterEnumToSave(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RegisterFloatToSave(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RegisterBoolToSave(p0: NativeAny, name: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RegisterTextLabelToSave(p0: NativeAny, name: string): void;
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
  export function StartSaveStruct(p0: NativeAny, p1: number, structName: string): void;
  /**
   *
   */
  export function StopSaveStruct(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StartSaveArray(p0: NativeAny, p1: number, arrayName: string): void;
  /**
   *
   */
  export function StopSaveArray(): void;
  /**
   *
   * @param {number} dispatchService undefined
   */
  export function EnableDispatchService(dispatchService: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} type undefined
   */
  export function _0x9B2BD3773123EA2F(type: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} dispatchService undefined
   */
  export function GetNumberOfDispatchedUnitsForPlayer(dispatchService: number): void;
  /**
   *
   * @param {number} incidentType undefined
   */
  export function CreateIncident(incidentType: number, x: number, y: number, z: number, p5: number, radius: number, outIncidentID: number): void;
  /**
   *
   * @param {number} incidentType undefined
   */
  export function CreateIncidentWithEntity(incidentType: number, ped: NativePed, amountOfPeople: number, radius: number, outIncidentID: number): void;
  /**
   *
   * @param {number} incidentId undefined
   */
  export function DeleteIncident(incidentId: number): void;
  /**
   *
   * @param {number} incidentId undefined
   */
  export function IsIncidentValid(incidentId: number): void;
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
  export function FindSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number, spawnPoint: NativeVector3): void;
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
  export function EnableTennisMode(ped: NativePed, toggle: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsTennisMode(ped: NativePed): void;
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
  export function ResetDispatchIdealSpawnDistance(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetDispatchIdealSpawnDistance(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetDispatchTimeBetweenSpawnAttempts(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetDispatchTimeBetweenSpawnAttemptsMultiplier(p0: NativeAny, p1: number): void;
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
  export function RemoveDispatchSpawnBlockingArea(p0: NativeAny): void;
  /**
   *
   */
  export function ResetDispatchSpawnBlockingAreas(): void;
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
  export function DisplayOnscreenKeyboard2(p0: number, windowTitle: string, p2: NativeAny, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, defaultConcat4: string, defaultConcat5: string, defaultConcat6: string, defaultConcat7: string, maxInputLength: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function DisplayOnscreenKeyboard(p0: number, windowTitle: string, p2: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, maxInputLength: number): void;
  /**
   *
   */
  export function UpdateOnscreenKeyboard(): void;
  /**
   *
   */
  export function GetOnscreenKeyboardResult(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x3ED1438C1F5C6612(p0: number): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function RemoveStealthKill(hash: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x1EAE0A6E978894A2(p0: number, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetExplosiveAmmoThisFrame(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetFireAmmoThisFrame(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetExplosiveMeleeThisFrame(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetSuperJumpThisFrame(player: NativePlayer): void;
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
  export function ResetLocalplayerState(): void;
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
  export function ForceSocialClubUpdate(): void;
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
  export function SetShowPedInPauseMenu(toggle: NativeBOOL): void;
  /**
   *
   */
  export function GetShowPedInPauseMenu(): void;
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
  export function PlayPedRingtone(ringtoneName: string, ped: NativePed, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedRingtonePlaying(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function StopPedRingtone(ped: NativePed): void;
  /**
   *
   */
  export function IsMobilePhoneCallOngoing(): void;
  /**
   *
   */
  export function _0xC8B1B2425604CDD0(): void;
  /**
   *
   */
  export function CreateNewScriptedConversation(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function AddLineToConversation(p0: number, p1: string, p2: string, p3: number, p4: number, p5: NativeBOOL, p6: NativeBOOL, p7: NativeBOOL, p8: NativeBOOL, p9: number, p10: NativeBOOL, p11: NativeBOOL, p12: NativeBOOL): void;
  /**
   *
   * @param {number} pedIndex undefined
   */
  export function AddPedToConversation(pedIndex: number, ped: NativePed, name: string): void;
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
  export function SetMicrophonePosition(p0: NativeBOOL, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void;
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
  export function StartScriptPhoneConversation(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function PreloadScriptPhoneConversation(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function StartScriptConversation(p0: NativeBOOL, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function PreloadScriptConversation(p0: NativeBOOL, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
  /**
   *
   */
  export function StartPreloadedConversation(): void;
  /**
   *
   */
  export function _0xE73364DB90778FFA(): void;
  /**
   *
   */
  export function IsScriptedConversationOngoing(): void;
  /**
   *
   */
  export function IsScriptedConversationLoaded(): void;
  /**
   *
   */
  export function GetCurrentScriptedConversationLine(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function PauseScriptedConversation(p0: NativeBOOL): void;
  /**
   *
   */
  export function RestartScriptedConversation(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function StopScriptedConversation(p0: NativeBOOL): void;
  /**
   *
   */
  export function SkipToNextScriptedConversationLine(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function InterruptConversation(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
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
  export function RegisterScriptWithAudio(p0: number): void;
  /**
   *
   */
  export function UnregisterScriptWithAudio(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function RequestMissionAudioBank(p0: string, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function RequestAmbientAudioBank(p0: string, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function RequestScriptAudioBank(p0: string, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function HintAmbientAudioBank(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function HintScriptAudioBank(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function ReleaseMissionAudioBank(): void;
  /**
   *
   */
  export function ReleaseAmbientAudioBank(): void;
  /**
   *
   * @param {string} audioBank undefined
   */
  export function ReleaseNamedScriptAudioBank(audioBank: string): void;
  /**
   *
   */
  export function ReleaseScriptAudioBank(): void;
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
  export function GetSoundId(): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function ReleaseSoundId(soundId: number): void;
  /**
   *
   * @param {NativePlayer} soundId undefined
   */
  export function PlaySound(soundId: NativePlayer, audioName: string, audioRef: string, p3: NativeBOOL, p4: NativeAny, p5: NativeBOOL): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function PlaySoundFrontend(soundId: number, audioName: string, audioRef: string, p3: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xCADA5A0D0702381E(p0: string, soundset: string): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function PlaySoundFromEntity(soundId: number, audioName: string, entity: NativeEntity, audioRef: string, p4: NativeBOOL, p5: NativeAny): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function PlaySoundFromCoord(soundId: number, audioName: string, x: number, y: number, z: number, audioRef: string, p6: NativeBOOL, range: number, p8: NativeBOOL): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function StopSound(soundId: number): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function GetNetworkIdFromSoundId(soundId: number): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function GetSoundIdFromNetworkId(netId: number): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function SetVariableOnSound(soundId: number, variableName: string, value: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function SetVariableOnStream(p0: string, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function OverrideUnderwaterStream(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {string} name undefined
   */
  export function _0x733ADF241531E5C2(name: string, p1: number): void;
  /**
   *
   * @param {number} soundId undefined
   */
  export function HasSoundFinished(soundId: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function PlayAmbientSpeech1(ped: NativePed, speechName: string, speechParam: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function PlayAmbientSpeech2(ped: NativePed, speechName: string, speechParam: string): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function PlayAmbientSpeechWithVoice(p0: NativePed, speechName: string, voiceName: string, speechParam: string, p4: NativeBOOL): void;
  /**
   *
   * @param {string} speechName undefined
   */
  export function PlayAmbientSpeechAtCoords(speechName: string, speechParam: string, x: number, y: number, z: number, p5: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function OverrideTrevorRage(p0: string): void;
  /**
   *
   */
  export function ResetTrevorRage(): void;
  /**
   *
   * @param {NativePed} playerPed undefined
   */
  export function SetPlayerAngry(playerPed: NativePed, value: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function PlayPain(ped: NativePed, painID: number, p1: number): void;
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
  export function SetAmbientVoiceName(ped: NativePed, name: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetAmbientVoice(ped: NativePed): void;
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
  export function SetPedMute(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function StopCurrentPlayingAmbientSpeech(ped: NativePed): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function IsAmbientSpeechPlaying(p0: NativePed): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function IsScriptedSpeechPlaying(p0: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsAnySpeechPlaying(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function CanPedSpeak(ped: NativePed, speechName: string, unk: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedInCurrentConversation(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedIsDrunk(ped: NativePed, toggle: NativeBOOL): void;
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
  export function SetAnimalMood(animal: NativePed, mood: number): void;
  /**
   *
   */
  export function IsMobilePhoneRadioActive(): void;
  /**
   *
   * @param {NativeBOOL} state undefined
   */
  export function SetMobilePhoneRadioState(state: NativeBOOL): void;
  /**
   *
   */
  export function GetPlayerRadioStationIndex(): void;
  /**
   *
   */
  export function GetPlayerRadioStationName(): void;
  /**
   *
   * @param {number} radioStation undefined
   */
  export function GetRadioStationName(radioStation: number): void;
  /**
   *
   */
  export function GetPlayerRadioStationGenre(): void;
  /**
   *
   */
  export function IsRadioRetuning(): void;
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
  export function SetRadioToStationName(stationName: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehRadioStation(vehicle: NativeVehicle, radioStation: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleAsAmbientEmmitter(vehicle: NativeVehicle): void;
  /**
   *
   * @param {string} emitterName undefined
   */
  export function SetEmitterRadioStation(emitterName: string, radioStation: string): void;
  /**
   *
   * @param {string} emitterName undefined
   */
  export function SetStaticEmitterEnabled(emitterName: string, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} radioStation undefined
   */
  export function SetRadioToStationIndex(radioStation: number): void;
  /**
   *
   * @param {NativeBOOL} active undefined
   */
  export function SetFrontendRadioActive(active: NativeBOOL): void;
  /**
   *
   * @param {number} newsStory undefined
   */
  export function UnlockMissionNewsStory(newsStory: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetNumberOfPassengerVoiceVariations(p0: NativeAny): void;
  /**
   *
   */
  export function GetAudibleMusicTrackTextId(): void;
  /**
   *
   * @param {NativeBOOL} play undefined
   */
  export function PlayEndCreditsMusic(play: NativeBOOL): void;
  /**
   *
   */
  export function SkipRadioForward(): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function FreezeRadioStation(radioStation: string): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function UnfreezeRadioStation(radioStation: string): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetRadioAutoUnfreeze(toggle: NativeBOOL): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function SetInitialPlayerStation(radioStation: string): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetUserRadioControlEnabled(toggle: NativeBOOL): void;
  /**
   *
   * @param {string} radioStation undefined
   */
  export function SetRadioTrack(radioStation: string, radioTrack: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleRadioLoud(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsVehicleRadioLoud(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeBOOL} Toggle undefined
   */
  export function SetMobileRadioEnabledDuringGameplay(Toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0x109697E2FFBAC8A1(): void;
  /**
   *
   */
  export function IsPlayerVehicleRadioEnabled(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetVehicleRadioEnabled(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function MaxRadioStationIndex(): void;
  /**
   *
   * @param {number} station undefined
   */
  export function FindRadioStationIndex(station: number): void;
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
  export function SetAmbientZoneState(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {string} zoneName undefined
   */
  export function ClearAmbientZoneState(zoneName: string, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function SetAmbientZoneListState(p0: string, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function ClearAmbientZoneListState(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {string} ambientZone undefined
   */
  export function SetAmbientZoneStatePersistent(ambientZone: string, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {string} ambientZone undefined
   */
  export function SetAmbientZoneListStatePersistent(ambientZone: string, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {string} ambientZone undefined
   */
  export function IsAmbientZoneEnabled(ambientZone: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function SetCutsceneAudioOverride(p0: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function GetPlayerHeadsetSoundAlternate(p0: string, p1: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function PlayPoliceReport(name: string, p1: number): void;
  /**
   *
   */
  export function DisablePoliceReports(): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function BlipSiren(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function OverrideVehHorn(vehicle: NativeVehicle, mute: NativeBOOL, p2: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function IsHornActive(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetAggressiveHorns(toggle: NativeBOOL): void;
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
  export function IsStreamPlaying(): void;
  /**
   *
   */
  export function GetStreamPlayTime(): void;
  /**
   *
   * @param {string} streamName undefined
   */
  export function LoadStream(streamName: string, soundSet: string): void;
  /**
   *
   * @param {string} streamName undefined
   */
  export function LoadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function PlayStreamFromPed(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function PlayStreamFromVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function PlayStreamFromObject(object: NativeObject): void;
  /**
   *
   */
  export function PlayStreamFrontend(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SpecialFrontendEqual(x: number, y: number, z: number): void;
  /**
   *
   */
  export function StopStream(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function StopPedSpeaking(ped: NativePed, speaking: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function DisablePedPainAudio(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsAmbientSpeechDisabled(ped: NativePed): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetSirenWithNoDriver(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SoundVehicleHornThisFrame(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetHornEnabled(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function SetAudioVehiclePriority(vehicle: NativeVehicle, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9D3AF56E94C9AE98(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function UseSirenAsHorn(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function ForceVehicleEngineAudio(vehicle: NativeVehicle, audioName: string): void;
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
  export function SetVehicleBoostActive(vehicle: NativeVehicle, toggle: NativeBOOL): void;
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
  export function PlayVehicleDoorOpenSound(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function PlayVehicleDoorCloseSound(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0xC15907D667F7CFB2(vehicle: NativeVehicle, toggle: NativeBOOL): void;
  /**
   *
   */
  export function IsGameInControlOfMusic(): void;
  /**
   *
   * @param {NativeBOOL} active undefined
   */
  export function SetGpsActive(active: NativeBOOL): void;
  /**
   *
   * @param {string} audioName undefined
   */
  export function PlayMissionCompleteAudio(audioName: string): void;
  /**
   *
   */
  export function IsMissionCompletePlaying(): void;
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
  export function StartAudioScene(scene: string): void;
  /**
   *
   * @param {string} scene undefined
   */
  export function StopAudioScene(scene: string): void;
  /**
   *
   */
  export function StopAudioScenes(): void;
  /**
   *
   * @param {string} scene undefined
   */
  export function IsAudioSceneActive(scene: string): void;
  /**
   *
   * @param {string} scene undefined
   */
  export function SetAudioSceneVariable(scene: string, variable: string, value: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA5F377B175A699C5(p0: NativeAny): void;
  /**
   *
   * @param {NativeEntity} p0 undefined
   */
  export function DynamicMixerRelatedFn(p0: NativeEntity, p1: string, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x18EB48CFC41F2EA0(p0: NativeAny, p1: number): void;
  /**
   *
   */
  export function AudioIsScriptedMusicPlaying(): void;
  /**
   *
   * @param {string} eventName undefined
   */
  export function PrepareMusicEvent(eventName: string): void;
  /**
   *
   * @param {string} eventName undefined
   */
  export function CancelMusicEvent(eventName: string): void;
  /**
   *
   * @param {string} eventName undefined
   */
  export function TriggerMusicEvent(eventName: string): void;
  /**
   *
   */
  export function _0xA097AB275061FB21(): void;
  /**
   *
   */
  export function GetMusicPlaytime(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xFBE20329593DEC9D(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   */
  export function ClearAllBrokenGlass(): void;
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
  export function PrepareAlarm(alarmName: string): void;
  /**
   *
   * @param {string} alarmName undefined
   */
  export function StartAlarm(alarmName: string, p2: NativeBOOL): void;
  /**
   *
   * @param {string} alarmName undefined
   */
  export function StopAlarm(alarmName: string, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} stop undefined
   */
  export function StopAllAlarms(stop: NativeBOOL): void;
  /**
   *
   * @param {string} alarmName undefined
   */
  export function IsAlarmPlaying(alarmName: string): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleDefaultHorn(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function GetVehicleHornHash(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ResetPedAudioFlags(ped: NativePed): void;
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
  export function ForceAmbientSiren(value: NativeBOOL): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function _0x43FA0DFC5DF87815(vehicle: NativeVehicle, p1: NativeBOOL): void;
  /**
   *
   * @param {string} flagName undefined
   */
  export function SetAudioFlag(flagName: string, toggle: NativeBOOL): void;
  /**
   *
   * @param {string} audioName undefined
   */
  export function PrepareSynchronizedAudioEvent(audioName: string, unk: NativeBOOL): void;
  /**
   *
   * @param {number} SceneID undefined
   */
  export function PrepareSynchronizedAudioEventForScene(SceneID: number, audioName: string): void;
  /**
   *
   * @param {number} SceneID undefined
   */
  export function PlaySynchronizedAudioEvent(SceneID: number): void;
  /**
   *
   * @param {number} SceneID undefined
   */
  export function StopSynchronizedAudioEvent(SceneID: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xC8EDE9BDBCCBA6D4(p0: NativeAny, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function SetSynchronizedAudioEventPositionThisFrame(p0: string, p1: NativeEntity): void;
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
  export function SetPedTalk(ped: NativePed): void;
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
  export function RequestCutscene(cutsceneName: string, p1: number): void;
  /**
   *
   * @param {string} cutsceneName undefined
   */
  export function RequestCutsceneEx(cutsceneName: string, p1: number, p2: number): void;
  /**
   *
   */
  export function RemoveCutscene(): void;
  /**
   *
   */
  export function HasCutsceneLoaded(): void;
  /**
   *
   * @param {string} cutsceneName undefined
   */
  export function HasThisCutsceneLoaded(cutsceneName: string): void;
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
  export function StartCutscene(p0: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function StartCutsceneAtCoords(x: number, y: number, z: number, p3: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function StopCutscene(p0: NativeBOOL): void;
  /**
   *
   */
  export function StopCutsceneImmediately(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetCutsceneOrigin(x: number, y: number, z: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x011883F41211432A(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   */
  export function GetCutsceneTime(): void;
  /**
   *
   */
  export function GetCutsceneTotalDuration(): void;
  /**
   *
   */
  export function WasCutsceneSkipped(): void;
  /**
   *
   */
  export function HasCutsceneFinished(): void;
  /**
   *
   */
  export function IsCutsceneActive(): void;
  /**
   *
   */
  export function IsCutscenePlaying(): void;
  /**
   *
   */
  export function GetCutsceneSectionPlaying(): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function GetEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: NativeHash): void;
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
  export function RegisterEntityForCutscene(cutscenePed: NativePed, cutsceneEntName: string, p2: number, modelHash: NativeHash, p4: number): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function GetEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} modelHash undefined
   */
  export function _0x7F96F23FA9B73327(modelHash: NativeHash): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function CanSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: NativeHash): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function CanSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: NativeHash): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function CanSetExitStateForCamera(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function _0xC61B86C9F61EB404(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetCutsceneFadeValues(p0: NativeBOOL, p1: NativeBOOL, p2: NativeBOOL, p3: NativeBOOL): void;
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
  export function RegisterSynchronisedScriptSpeech(): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function SetCutscenePedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: NativeHash): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function _0x2A56C06EBEF2B0D9(cutsceneEntName: string, ped: NativePed, modelHash: NativeHash): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function DoesCutsceneEntityExist(cutsceneEntName: string, modelHash: NativeHash): void;
  /**
   *
   * @param {string} cutsceneEntName undefined
   */
  export function SetCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: NativeHash): void;
  /**
   *
   */
  export function _0x708BDD8CD795B043(): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function GetInteriorGroupId(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function GetOffsetFromInteriorInWorldCoords(interiorID: number, x: number, y: number, z: number): void;
  /**
   *
   */
  export function IsInteriorScene(): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function IsValidInterior(interiorID: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ClearRoomForEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ForceRoomForEntity(entity: NativeEntity, interiorID: number, roomHashKey: NativeHash): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetRoomKeyFromEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetKeyForEntityInRoom(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetInteriorFromEntity(entity: NativeEntity): void;
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
  export function GetRoomKeyFromGameplayCam(): void;
  /**
   *
   */
  export function _0x23B59D8912F94246(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetInteriorAtCoords(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function AddPickupToInteriorRoomByName(pickup: NativePickup, roomName: string): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function LoadInterior(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function UnpinInterior(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function IsInteriorReady(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function _0x4C2330E61D3DEB56(interiorID: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): void;
  /**
   *
   * @param {number} x undefined
   */
  export function UnkGetInteriorAtCoords(x: number, y: number, z: number, unk: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function AreCoordsCollidingWithExterior(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetInteriorFromCollision(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function EnableInteriorProp(interiorID: number, propName: string): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function DisableInteriorProp(interiorID: number, propName: string): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function IsInteriorPropEnabled(interiorID: number, propName: string): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function RefreshInterior(interiorID: number): void;
  /**
   *
   * @param {NativeHash} mapObjectHash undefined
   */
  export function HideMapObjectThisFrame(mapObjectHash: NativeHash): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function DisableInterior(interiorID: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function IsInteriorDisabled(interiorID: number): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function CapInterior(interiorID: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function IsInteriorCapped(interiorID: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function _0x9E6542F0CE8E70A3(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} render undefined
   */
  export function RenderScriptCams(render: NativeBOOL, ease: NativeBOOL, easeTime: number, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} render undefined
   */
  export function RenderFirstPersonCam(render: NativeBOOL, p1: number, p2: number): void;
  /**
   *
   * @param {string} camName undefined
   */
  export function CreateCam(camName: string, unk: NativeBOOL): void;
  /**
   *
   * @param {string} camName undefined
   */
  export function CreateCamWithParams(camName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: NativeBOOL, p9: number): void;
  /**
   *
   * @param {NativeHash} camHash undefined
   */
  export function CreateCamera(camHash: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} camHash undefined
   */
  export function CreateCameraWithParams(camHash: NativeHash, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: NativeBOOL, p9: NativeAny): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function DestroyCam(cam: NativeCam, thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} thisScriptCheck undefined
   */
  export function DestroyAllCams(thisScriptCheck: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function DoesCamExist(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamActive(cam: NativeCam, active: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function IsCamActive(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function IsCamRendering(cam: NativeCam): void;
  /**
   *
   */
  export function GetRenderingCam(): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamCoord(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamRot(cam: NativeCam, rotationOrder: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamFov(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamNearClip(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamFarClip(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamFarDof(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamParams(cam: NativeCam, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fieldOfView: number, p8: NativeAny, p9: number, p10: number, p11: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamCoord(cam: NativeCam, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamRot(cam: NativeCam, pitch: number, roll: number, yaw: number, rotationOrder: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamFov(cam: NativeCam, fieldOfView: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamNearClip(cam: NativeCam, nearClip: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamFarClip(cam: NativeCam, farClip: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamMotionBlurStrength(cam: NativeCam, strength: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamNearDof(cam: NativeCam, nearDOF: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamFarDof(cam: NativeCam, farDOF: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamDofStrength(cam: NativeCam, dofStrength: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamDofPlanes(cam: NativeCam, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamUseShallowDofMode(cam: NativeCam, toggle: NativeBOOL): void;
  /**
   *
   */
  export function SetUseHiDof(): void;
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
  export function SetCamDofFnumberOfLens(camera: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function SetCamDofFocusDistanceBias(camera: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function SetCamDofMaxNearInFocusDistance(camera: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function SetCamDofMaxNearInFocusDistanceBlendLevel(camera: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function AttachCamToEntity(cam: NativeCam, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, isRelative: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function AttachCamToPedBone(cam: NativeCam, ped: NativePed, boneIndex: number, x: number, y: number, z: number, heading: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function DetachCam(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamInheritRollVehicle(cam: NativeCam, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function PointCamAtCoord(cam: NativeCam, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function PointCamAtEntity(cam: NativeCam, entity: NativeEntity, p2: number, p3: number, p4: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function PointCamAtPedBone(cam: NativeCam, ped: number, boneIndex: number, x: number, y: number, z: number, p6: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function StopCamPointing(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamAffectsAiming(cam: NativeCam, toggle: NativeBOOL): void;
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
  export function SetCamDebugName(camera: NativeCam, name: string): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function AddCamSplineNode(camera: NativeCam, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, length: number, p8: number, transitionType: number): void;
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
  export function SetCamSplinePhase(cam: NativeCam, p1: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamSplinePhase(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamSplineNodePhase(cam: NativeCam): void;
  /**
   *
   * @param {number} cam undefined
   */
  export function SetCamSplineDuration(cam: number, timeDuration: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xD1B0F412F109EA5D(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamSplineNodeIndex(cam: NativeCam): void;
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
  export function OverrideCamSplineVelocity(cam: NativeCam, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function OverrideCamSplineMotionBlur(cam: NativeCam, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7BF1A54AE67AC070(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function IsCamSplinePaused(p0: NativeAny): void;
  /**
   *
   * @param {NativeCam} camTo undefined
   */
  export function SetCamActiveWithInterp(camTo: NativeCam, camFrom: NativeCam, duration: number, easeLocation: number, easeRotation: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function IsCamInterpolating(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function ShakeCam(cam: NativeCam, type: string, amplitude: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function AnimatedShakeCam(cam: NativeCam, p1: string, p2: string, p3: string, amplitude: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function IsCamShaking(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamShakeAmplitude(cam: NativeCam, amplitude: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function StopCamShaking(cam: NativeCam, p1: NativeBOOL): void;
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
  export function IsScriptGlobalShaking(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function StopScriptGlobalShaking(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function PlayCamAnim(cam: NativeCam, animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p9: NativeBOOL, p10: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function IsCamPlayingAnim(cam: NativeCam, animName: string, animDictionary: string): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCamAnimCurrentPhase(cam: NativeCam, phase: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function GetCamAnimCurrentPhase(cam: NativeCam): void;
  /**
   *
   * @param {NativeCam} camera undefined
   */
  export function PlaySynchronizedCamAnim(camera: NativeCam, SceneID: number, animName: string, animDictionary: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x503F5920162365B2(p0: NativeAny, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeCam} cam undefined
   */
  export function SetCameraRange(cam: NativeCam, range: number): void;
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
  export function IsScreenFadedOut(): void;
  /**
   *
   */
  export function IsScreenFadedIn(): void;
  /**
   *
   */
  export function IsScreenFadingOut(): void;
  /**
   *
   */
  export function IsScreenFadingIn(): void;
  /**
   *
   * @param {number} duration undefined
   */
  export function DoScreenFadeIn(duration: number): void;
  /**
   *
   * @param {number} duration undefined
   */
  export function DoScreenFadeOut(duration: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetWidescreenBorders(p0: NativeBOOL, p1: number): void;
  /**
   *
   */
  export function GetGameplayCamCoord(): void;
  /**
   *
   * @param {number} rotationOrder undefined
   */
  export function GetGameplayCamRot(rotationOrder: number): void;
  /**
   *
   */
  export function GetGameplayCamFov(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function CustomMenuCoordinates(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x0225778816FDC28C(p0: number): void;
  /**
   *
   */
  export function GetGameplayCamRelativeHeading(): void;
  /**
   *
   * @param {number} heading undefined
   */
  export function SetGameplayCamRelativeHeading(heading: number): void;
  /**
   *
   */
  export function GetGameplayCamRelativePitch(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetGameplayCamRelativePitch(x: number, Value2: number): void;
  /**
   *
   * @param {number} yaw undefined
   */
  export function SetGameplayCamRawYaw(yaw: number): void;
  /**
   *
   * @param {number} pitch undefined
   */
  export function SetGameplayCamRawPitch(pitch: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x469F2ECDEC046337(p0: NativeBOOL): void;
  /**
   *
   * @param {string} shakeName undefined
   */
  export function ShakeGameplayCam(shakeName: string, intensity: number): void;
  /**
   *
   */
  export function IsGameplayCamShaking(): void;
  /**
   *
   * @param {number} amplitude undefined
   */
  export function SetGameplayCamShakeAmplitude(amplitude: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function StopGameplayCamShaking(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8BBACBF51DA047A8(p0: NativeAny): void;
  /**
   *
   */
  export function IsGameplayCamRendering(): void;
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
  export function EnableCrosshairThisFrame(): void;
  /**
   *
   */
  export function IsGameplayCamLookingBehind(): void;
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
  export function IsSphereVisible(x: number, y: number, z: number, radius: number): void;
  /**
   *
   */
  export function IsFollowPedCamActive(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function SetFollowPedCamCutsceneChat(p0: string, p1: number): void;
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
  export function ClampGameplayCamYaw(minimum: number, maximum: number): void;
  /**
   *
   * @param {number} minimum undefined
   */
  export function ClampGameplayCamPitch(minimum: number, maximum: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function AnimateGameplayCamZoom(p0: number, distance: number): void;
  /**
   *
   * @param {NativeVehicle} p0 undefined
   */
  export function _0xE9EA16D6E54CDCA4(p0: NativeVehicle, p1: number): void;
  /**
   *
   */
  export function DisableFirstPersonCamThisFrame(): void;
  /**
   *
   */
  export function _0x59424BD75174C9B1(): void;
  /**
   *
   */
  export function GetFollowPedCamZoomLevel(): void;
  /**
   *
   */
  export function GetFollowPedCamViewMode(): void;
  /**
   *
   * @param {number} viewMode undefined
   */
  export function SetFollowPedCamViewMode(viewMode: number): void;
  /**
   *
   */
  export function IsFollowVehicleCamActive(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x91EF6EE6419E5B97(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetTimeIdleDrop(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   */
  export function GetFollowVehicleCamZoomLevel(): void;
  /**
   *
   * @param {number} zoomLevel undefined
   */
  export function SetFollowVehicleCamZoomLevel(zoomLevel: number): void;
  /**
   *
   */
  export function GetFollowVehicleCamViewMode(): void;
  /**
   *
   * @param {number} viewMode undefined
   */
  export function SetFollowVehicleCamViewMode(viewMode: number): void;
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
  export function IsAimCamActive(): void;
  /**
   *
   */
  export function _0x74BD83EA840F6BC9(): void;
  /**
   *
   */
  export function IsFirstPersonAimCamActive(): void;
  /**
   *
   */
  export function DisableAimCamThisUpdate(): void;
  /**
   *
   */
  export function GetGameplayCamZoom(): void;
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
  export function SetFirstPersonCamPitchRange(minAngle: number, maxAngle: number): void;
  /**
   *
   * @param {number} distance undefined
   */
  export function SetFirstPersonCamNearClip(distance: number): void;
  /**
   *
   * @param {number} distance undefined
   */
  export function SetThirdPersonAimCamNearClip(distance: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x4008EDF7D6E48175(p0: NativeBOOL): void;
  /**
   *
   */
  export function GetGameplayCamCoords(): void;
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
  export function GetGameplayCamFarClip(): void;
  /**
   *
   */
  export function GetGameplayCamNearDof(): void;
  /**
   *
   */
  export function GetGameplayCamFarDof(): void;
  /**
   *
   */
  export function _0x162F9D995753DC19(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetGameplayCoordHint(x: number, y: number, z: number, duration: number, blendOutDuration: number, blendInDuration: number, unk: number): void;
  /**
   *
   * @param {NativePed} p0 undefined
   */
  export function SetGameplayPedHint(p0: NativePed, x1: number, y1: number, z1: number, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetGameplayVehicleHint(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetGameplayObjectHint(p0: NativeAny, p1: number, p2: number, p3: number, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetGameplayEntityHint(entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, p4: NativeBOOL, duration: number, fadeInTime: number, fadeOutTime: number, flags: number): void;
  /**
   *
   */
  export function IsGameplayHintActive(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function StopGameplayHint(p0: NativeBOOL): void;
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
  export function SetGameplayHintFov(FOV: number): void;
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
  export function GetIsMultiplayerBrief(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetCinematicButtonActive(p0: NativeBOOL): void;
  /**
   *
   */
  export function IsCinematicCamRendering(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function ShakeCinematicCam(p0: string, p1: number): void;
  /**
   *
   */
  export function IsCinematicCamShaking(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetCinematicCamShakeAmplitude(p0: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function StopCinematicCamShaking(p0: NativeBOOL): void;
  /**
   *
   */
  export function DisableVehicleFirstPersonCamThisFrame(): void;
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
  export function IsInVehicleCamDisabled(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function CreateCinematicShot(p0: NativeAny, p1: number, p2: NativeAny, entity: NativeEntity): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function IsCinematicShotActive(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StopCinematicShot(p0: NativeAny): void;
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
  export function SetCinematicModeActive(p0: NativeBOOL): void;
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
  export function StopCutsceneCamShaking(): void;
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
  export function SetCamEffect(p0: number): void;
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
  export function GetReplayFreeCamMaxRange(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function EnableLaserSightRendering(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function GetWeaponComponentTypeModel(componentHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function GetWeapontypeModel(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function GetWeapontypeSlot(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function GetWeapontypeGroup(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetCurrentPedWeapon(ped: NativePed, weaponHash: NativeHash, equipNow: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetCurrentPedWeapon(ped: NativePed, weaponHash: NativeHash, unused: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetCurrentPedWeaponEntityIndex(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetBestPedWeapon(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetCurrentPedVehicleWeapon(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetCurrentPedVehicleWeapon(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedArmed(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function IsWeaponValid(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function HasPedGotWeapon(ped: NativePed, weaponHash: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedWeaponReadyToShoot(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedWeapontypeInSlot(ped: NativePed, weaponSlot: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetAmmoInPedWeapon(ped: NativePed, weaponhash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function AddAmmoToPed(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAmmo(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedInfiniteAmmo(ped: NativePed, toggle: NativeBOOL, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedInfiniteAmmoClip(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GiveWeaponToPed(ped: NativePed, weaponHash: NativeHash, ammoCount: number, isHidden: NativeBOOL, equipNow: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GiveDelayedWeaponToPed(ped: NativePed, weaponHash: NativeHash, ammoCount: number, equipNow: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RemoveAllPedWeapons(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RemoveWeaponFromPed(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function HidePedWeaponForScriptedCutscene(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedCurrentWeaponVisible(ped: NativePed, visible: NativeBOOL, deselectWeapon: NativeBOOL, p3: NativeBOOL, p4: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDropsWeaponsWhenDead(ped: NativePed, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function HasPedBeenDamagedByWeapon(ped: NativePed, weaponHash: NativeHash, weaponType: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ClearPedLastWeaponDamage(ped: NativePed): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function HasEntityBeenDamagedByWeapon(entity: NativeEntity, weaponHash: NativeHash, weaponType: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ClearEntityLastWeaponDamage(entity: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDropsWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedDropsInventoryWeapon(ped: NativePed, weaponHash: NativeHash, xOffset: number, yOffset: number, zOffset: number, ammoCount: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetMaxAmmoInClip(ped: NativePed, weaponHash: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetAmmoInClip(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetAmmoInClip(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetMaxAmmo(ped: NativePed, weaponHash: NativeHash, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedAmmoByType(ped: NativePed, ammoType: NativeAny, ammo: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedAmmoByType(ped: NativePed, ammoType: NativeAny): void;
  /**
   *
   * @param {NativeAny} ammoType undefined
   */
  export function SetPedAmmoToDrop(ammoType: NativeAny, ammo: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xE620FD3512A04F18(p0: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedAmmoTypeFromWeapon(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedLastWeaponImpactCoord(ped: NativePed, coords: NativeVector3): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedGadget(ped: NativePed, gadgetHash: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetIsPedGadgetEquipped(ped: NativePed, gadgetHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetSelectedPedWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function ExplodeProjectiles(ped: NativePed, weaponHash: NativeHash, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function RemoveAllProjectilesOfType(weaponHash: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetLockonRangeOfCurrentPedWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetMaxRangeOfCurrentPedWeapon(ped: NativePed): void;
  /**
   *
   * @param {NativePed} driver undefined
   */
  export function HasVehicleGotProjectileAttached(driver: NativePed, vehicle: NativeVehicle, weaponHash: NativeHash, p3: NativeAny): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GiveWeaponComponentToPed(ped: NativePed, weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function RemoveWeaponComponentFromPed(ped: NativePed, weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function HasPedGotWeaponComponent(ped: NativePed, weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedWeaponComponentActive(ped: NativePed, weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function PedSkipNextReloading(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function MakePedReload(ped: NativePed): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function RequestWeaponAsset(weaponHash: NativeHash, p1: number, p2: number): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function HasWeaponAssetLoaded(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function RemoveWeaponAsset(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function CreateWeaponObject(weaponHash: NativeHash, ammoCount: number, x: number, y: number, z: number, showWorldModel: NativeBOOL, heading: number, p7: NativeAny): void;
  /**
   *
   * @param {NativeObject} weaponObject undefined
   */
  export function GiveWeaponComponentToWeaponObject(weaponObject: NativeObject, addonHash: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RemoveWeaponComponentFromWeaponObject(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeObject} weapon undefined
   */
  export function HasWeaponGotWeaponComponent(weapon: NativeObject, addonHash: NativeHash): void;
  /**
   *
   * @param {NativeObject} weaponObject undefined
   */
  export function GiveWeaponObjectToPed(weaponObject: NativeObject, ped: NativePed): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function DoesWeaponTakeWeaponComponent(weaponHash: NativeHash, componentHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetWeaponObjectFromPed(ped: NativePed, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedWeaponTintIndex(ped: NativePed, weaponHash: NativeHash, tintIndex: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetPedWeaponTintIndex(ped: NativePed, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeObject} weapon undefined
   */
  export function SetWeaponObjectTintIndex(weapon: NativeObject, tintIndex: number): void;
  /**
   *
   * @param {NativeObject} weapon undefined
   */
  export function GetWeaponObjectTintIndex(weapon: NativeObject): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function GetWeaponTintCount(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function GetWeaponHudStats(weaponHash: NativeHash, outData: NativeAny): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function GetWeaponComponentHudStats(componentHash: NativeHash, outData: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3133B907D8B32053(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function GetWeaponClipSize(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetPedChanceOfFiringBlanks(ped: NativePed, xBias: number, yBias: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xB4C8D77C80C0421E(ped: NativePed, p1: number): void;
  /**
   *
   * @param {NativeEntity} weaponObject undefined
   */
  export function RequestWeaponHighDetailModel(weaponObject: NativeEntity): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsPedCurrentWeaponSilenced(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetWeaponSmokegrenadeAssigned(ped: NativePed): void;
  /**
   *
   * @param {number} distance undefined
   */
  export function SetFlashLightFadeDistance(distance: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetWeaponAnimationOverride(ped: NativePed, animStyle: NativeHash): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function GetWeaponDamageType(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xE4DCEC7FD5B739A5(ped: NativePed): void;
  /**
   *
   * @param {NativeHash} weaponHash undefined
   */
  export function CanUseWeaponOnParachute(weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} distri undefined
   */
  export function CreateItemset(distri: NativeVehicle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function DestroyItemset(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function IsItemsetValid(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function AddToItemset(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RemoveFromItemset(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeScrHandle} x undefined
   */
  export function GetItemsetSize(x: NativeScrHandle): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetIndexedItemInItemset(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function IsInItemset(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function CleanItemset(p0: NativeAny): void;
  /**
   *
   */
  export function LoadAllObjectsNow(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function LoadScene(x: number, y: number, z: number): void;
  /**
   *
   */
  export function NetworkUpdateLoadScene(): void;
  /**
   *
   */
  export function IsNetworkLoadingScene(): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function SetInteriorActive(interiorID: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function RequestModel(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function RequestMenuPedModel(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function HasModelLoaded(model: NativeHash): void;
  /**
   *
   * @param {number} interiorID undefined
   */
  export function RequestInteriorRoomByName(interiorID: number, roomName: string): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function SetModelAsNoLongerNeeded(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsModelInCdimage(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsModelValid(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function IsModelAVehicle(model: NativeHash): void;
  /**
   *
   * @param {number} x undefined
   */
  export function RequestCollisionAtCoord(x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function RequestCollisionForModel(model: NativeHash): void;
  /**
   *
   * @param {NativeHash} model undefined
   */
  export function HasCollisionForModelLoaded(model: NativeHash): void;
  /**
   *
   * @param {number} x undefined
   */
  export function RequestAdditionalCollisionAtCoord(x: number, y: number, z: number): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function DoesAnimDictExist(animDict: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function RequestAnimDict(animDict: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function HasAnimDictLoaded(animDict: string): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function RemoveAnimDict(animDict: string): void;
  /**
   *
   * @param {string} animSet undefined
   */
  export function RequestAnimSet(animSet: string): void;
  /**
   *
   * @param {string} animSet undefined
   */
  export function HasAnimSetLoaded(animSet: string): void;
  /**
   *
   * @param {string} animSet undefined
   */
  export function RemoveAnimSet(animSet: string): void;
  /**
   *
   * @param {string} clipSet undefined
   */
  export function RequestClipSet(clipSet: string): void;
  /**
   *
   * @param {string} clipSet undefined
   */
  export function HasClipSetLoaded(clipSet: string): void;
  /**
   *
   * @param {string} clipSet undefined
   */
  export function RemoveClipSet(clipSet: string): void;
  /**
   *
   * @param {string} iplName undefined
   */
  export function RequestIpl(iplName: string): void;
  /**
   *
   * @param {string} iplName undefined
   */
  export function RemoveIpl(iplName: string): void;
  /**
   *
   * @param {string} iplName undefined
   */
  export function IsIplActive(iplName: string): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetStreaming(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetGamePausesForStreaming(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetReducePedModelBudget(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetReduceVehicleModelBudget(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetDitchPoliceModels(toggle: NativeBOOL): void;
  /**
   *
   */
  export function GetNumberOfStreamingRequests(): void;
  /**
   *
   */
  export function RequestPtfxAsset(): void;
  /**
   *
   */
  export function HasPtfxAssetLoaded(): void;
  /**
   *
   */
  export function RemovePtfxAsset(): void;
  /**
   *
   * @param {string} assetName undefined
   */
  export function RequestNamedPtfxAsset(assetName: string): void;
  /**
   *
   * @param {string} assetName undefined
   */
  export function HasNamedPtfxAssetLoaded(assetName: string): void;
  /**
   *
   * @param {string} assetName undefined
   */
  export function RemoveNamedPtfxAsset(assetName: string): void;
  /**
   *
   * @param {number} budget undefined
   */
  export function SetVehiclePopulationBudget(budget: number): void;
  /**
   *
   * @param {number} budget undefined
   */
  export function SetPedPopulationBudget(budget: number): void;
  /**
   *
   */
  export function ClearFocus(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetFocusEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityFocus(entity: NativeEntity): void;
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
  export function FormatFocusHeading(x: number, y: number, z: number, rad: number, p4: NativeAny, p5: NativeAny): void;
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
  export function NewLoadSceneStart(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function NewLoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: NativeAny): void;
  /**
   *
   */
  export function NewLoadSceneStop(): void;
  /**
   *
   */
  export function IsNewLoadSceneActive(): void;
  /**
   *
   */
  export function IsNewLoadSceneLoaded(): void;
  /**
   *
   */
  export function _0x71E7B2E657449AAD(): void;
  /**
   *
   * @param {NativePed} from undefined
   */
  export function StartPlayerSwitch(from: NativePed, to: NativePed, flags: number, switchType: number): void;
  /**
   *
   */
  export function StopPlayerSwitch(): void;
  /**
   *
   */
  export function IsPlayerSwitchInProgress(): void;
  /**
   *
   */
  export function GetPlayerSwitchType(): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function GetIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   */
  export function GetPlayerSwitchState(): void;
  /**
   *
   */
  export function GetPlayerShortSwitchState(): void;
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
  export function SetPlayerSwitchOutro(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeAny): void;
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
  export function SwitchOutPlayer(ped: NativePed, flags: number, switchType: number): void;
  /**
   *
   */
  export function _0x933BBEEB8C61B5F4(): void;
  /**
   *
   */
  export function SetPlayerInvertedUp(): void;
  /**
   *
   */
  export function _0x5B48A06DD0E792A5(): void;
  /**
   *
   */
  export function DestroyPlayerInPauseMenu(): void;
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
  export function PrefetchSrl(srl: string): void;
  /**
   *
   */
  export function IsSrlLoaded(): void;
  /**
   *
   */
  export function BeginSrl(): void;
  /**
   *
   */
  export function EndSrl(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetSrlTime(p0: number): void;
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
  export function SetHdArea(x: number, y: number, z: number, radius: number): void;
  /**
   *
   */
  export function ClearHdArea(): void;
  /**
   *
   */
  export function LoadMissionCreatorData(): void;
  /**
   *
   */
  export function ShutdownCreatorBudget(): void;
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
  export function RequestScript(scriptName: string): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function SetScriptAsNoLongerNeeded(scriptName: string): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function HasScriptLoaded(scriptName: string): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function DoesScriptExist(scriptName: string): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function RequestScriptWithNameHash(scriptHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function SetScriptWithNameHashAsNoLongerNeeded(scriptHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function HasScriptWithNameHashLoaded(scriptHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function DoesScriptWithNameHashExist(scriptHash: NativeHash): void;
  /**
   *
   * @param {number} threadId undefined
   */
  export function TerminateThread(threadId: number): void;
  /**
   *
   * @param {number} threadId undefined
   */
  export function IsThreadActive(threadId: number): void;
  /**
   *
   * @param {number} threadId undefined
   */
  export function GetNameOfThread(threadId: number): void;
  /**
   *
   */
  export function BeginEnumeratingThreads(): void;
  /**
   *
   */
  export function GetIdOfNextThreadInEnumeration(): void;
  /**
   *
   */
  export function GetIdOfThisThread(): void;
  /**
   *
   */
  export function TerminateThisThread(): void;
  /**
   *
   * @param {NativeHash} scriptHash undefined
   */
  export function GetNumberOfInstancesOfScriptWithNameHash(scriptHash: NativeHash): void;
  /**
   *
   */
  export function GetThisScriptName(): void;
  /**
   *
   */
  export function GetHashOfThisScriptName(): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function GetNumberOfEvents(eventGroup: number): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function GetEventExists(eventGroup: number, eventIndex: number): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function GetEventAtIndex(eventGroup: number, eventIndex: number): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function GetEventData(eventGroup: number, eventIndex: number, argStruct: number, argStructSize: number): void;
  /**
   *
   * @param {number} eventGroup undefined
   */
  export function TriggerScriptEvent(eventGroup: number, args: NativeAny, argCount: number, bit: NativeAny): void;
  /**
   *
   */
  export function ShutdownLoadingScreen(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetNoLoadingScreen(toggle: NativeBOOL): void;
  /**
   *
   */
  export function GetNoLoadingScreen(): void;
  /**
   *
   */
  export function _0xB1577667C3708F9B(): void;
  /**
   *
   * @param {string} string undefined
   */
  export function BeginTextCommandBusyString(string: string): void;
  /**
   *
   * @param {number} busySpinnerType undefined
   */
  export function EndTextCommandBusyString(busySpinnerType: number): void;
  /**
   *
   */
  export function RemoveLoadingPrompt(): void;
  /**
   *
   */
  export function _0xC65AB383CD91DF98(): void;
  /**
   *
   */
  export function IsLoadingPromptBeingDisplayed(): void;
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
  export function ShowCursorThisFrame(): void;
  /**
   *
   * @param {number} spriteId undefined
   */
  export function SetCursorSprite(spriteId: number): void;
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
  export function ClearNotificationsPos(pos: number): void;
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
  export function RemoveNotification(notificationId: number): void;
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
  export function GetCurrentNotification(): void;
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
  export function SetNotificationBackgroundColor(hudIndex: number): void;
  /**
   *
   * @param {number} red undefined
   */
  export function SetNotificationFlashColor(red: number, green: number, blue: number, alpha: number): void;
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
  export function SetNotificationTextEntry(text: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function SetNotificationMessage(picName1: string, picName2: number, flash: NativeBOOL, iconType: number, p4: NativeBOOL, sender: string, subject: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function SetNotificationMessage2(picName1: string, picName2: string, flash: NativeBOOL, iconType: number, sender: string, subject: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function SetNotificationMessage3(picName1: string, picName2: string, p2: NativeBOOL, p3: NativeAny, p4: string, p5: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function SetNotificationMessage4(picName1: string, picName2: string, flash: NativeBOOL, iconType: number, sender: string, subject: string, duration: number): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function SetNotificationMessageClanTag(picName1: string, picName2: string, flash: NativeBOOL, iconType: number, sender: string, subject: string, duration: number, clanTag: string): void;
  /**
   *
   * @param {string} picName1 undefined
   */
  export function SetNotificationMessageClanTag2(picName1: string, picName2: string, flash: NativeBOOL, iconType1: number, sender: string, subject: string, duration: number, clanTag: string, iconType2: number, p9: number): void;
  /**
   *
   * @param {NativeBOOL} blink undefined
   */
  export function DrawNotification(blink: NativeBOOL, showInBrief: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} blink undefined
   */
  export function DrawNotification2(blink: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} blink undefined
   */
  export function DrawNotification3(blink: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function DrawNotificationAward(p0: string, p1: string, p2: number, p3: number, p4: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function DrawNotificationApartmentInvite(p0: NativeBOOL, p1: NativeBOOL, p2: number, p3: number, isLeader: NativeBOOL, unk0: NativeBOOL, clanDesc: number, R: number, G: number, B: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function DrawNotificationClanInvite(p0: NativeBOOL, p1: NativeBOOL, p2: number, p3: number, isLeader: NativeBOOL, unk0: NativeBOOL, clanDesc: number, playerName: string, R: number, G: number, B: number): void;
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
  export function DrawNotification4(blink: NativeBOOL, p1: NativeBOOL): void;
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
  export function DrawNotificationWithIcon(type: number, image: number, text: string): void;
  /**
   *
   * @param {number} type undefined
   */
  export function DrawNotificationWithButton(type: number, button: string, text: string): void;
  /**
   *
   * @param {string} GxtEntry undefined
   */
  export function BeginTextCommandPrint(GxtEntry: string): void;
  /**
   *
   * @param {number} duration undefined
   */
  export function EndTextCommandPrint(duration: number, drawImmediately: NativeBOOL): void;
  /**
   *
   * @param {string} text undefined
   */
  export function BeginTextCommandIsMessageDisplayed(text: string): void;
  /**
   *
   */
  export function EndTextCommandIsMessageDisplayed(): void;
  /**
   *
   * @param {string} text undefined
   */
  export function BeginTextCommandDisplayText(text: string): void;
  /**
   *
   * @param {number} x undefined
   */
  export function EndTextCommandDisplayText(x: number, y: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function BeginTextCommandWidth(text: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function EndTextCommandGetWidth(p0: NativeBOOL): void;
  /**
   *
   * @param {string} entry undefined
   */
  export function BeginTextCommandLineCount(entry: string): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetTextScreenLineCount(x: number, y: number): void;
  /**
   *
   * @param {string} inputType undefined
   */
  export function BeginTextCommandDisplayHelp(inputType: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function EndTextCommandDisplayHelp(p0: NativeAny, loop: NativeBOOL, beep: NativeBOOL, duration: number): void;
  /**
   *
   * @param {string} labelName undefined
   */
  export function BeginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function EndTextCommandIsThisHelpMessageBeingDisplayed(p0: number): void;
  /**
   *
   * @param {string} gxtentry undefined
   */
  export function BeginTextCommandSetBlipName(gxtentry: string): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function EndTextCommandSetBlipName(blip: NativeBlip): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function BeginTextCommandObjective(p0: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function EndTextCommandObjective(p0: NativeBOOL): void;
  /**
   *
   * @param {string} text undefined
   */
  export function BeginTextCommandClearPrint(text: string): void;
  /**
   *
   */
  export function EndTextCommandClearPrint(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function BeginTextCommandTimer(p0: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function EndTextCommandTimer(p0: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function AddTextComponentInteger(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function AddTextComponentFloat(value: number, decimalPlaces: number): void;
  /**
   *
   * @param {string} labelName undefined
   */
  export function AddTextComponentSubstringTextLabel(labelName: string): void;
  /**
   *
   * @param {NativeHash} gxtEntryHash undefined
   */
  export function AddTextComponentSubstringTextLabelHashKey(gxtEntryHash: NativeHash): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function AddTextComponentSubstringBlipName(blip: NativeBlip): void;
  /**
   *
   * @param {string} text undefined
   */
  export function AddTextComponentSubstringPlayerName(text: string): void;
  /**
   *
   * @param {number} timestamp undefined
   */
  export function AddTextComponentSubstringTime(timestamp: number, flags: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function AddTextComponentFormattedInteger(value: number, commaSeparated: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function AddTextComponentAppTitle(p0: string, p1: number): void;
  /**
   *
   * @param {string} website undefined
   */
  export function AddTextComponentSubstringWebsite(website: string): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function AddTextComponentScaleform(p0: string): void;
  /**
   *
   * @param {number} hudIndex undefined
   */
  export function SetNotificationColorNext(hudIndex: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function GetTextSubstring(text: string, position: number, length: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function GetTextSubstringSafe(text: string, position: number, length: number, maxLength: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function GetTextSubstringSlice(text: string, startPosition: number, endPosition: number): void;
  /**
   *
   * @param {string} labelName undefined
   */
  export function GetLabelText(labelName: string): void;
  /**
   *
   */
  export function ClearPrints(): void;
  /**
   *
   */
  export function ClearBrief(): void;
  /**
   *
   */
  export function ClearAllHelpMessages(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function ClearThisPrint(p0: string): void;
  /**
   *
   */
  export function ClearSmallPrints(): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function DoesTextBlockExist(gxt: string): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function RequestAdditionalText(gxt: string, slot: number): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function RequestAdditionalText2(gxt: string, slot: number): void;
  /**
   *
   * @param {number} slot undefined
   */
  export function HasAdditionalTextLoaded(slot: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function ClearAdditionalText(p0: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsStreamingAdditionalText(p0: number): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function HasThisAdditionalTextLoaded(gxt: string, slot: number): void;
  /**
   *
   */
  export function IsMessageBeingDisplayed(): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function DoesTextLabelExist(gxt: string): void;
  /**
   *
   * @param {string} gxt undefined
   */
  export function GetLengthOfStringWithThisTextLabel(gxt: string): void;
  /**
   *
   * @param {string} string undefined
   */
  export function GetLengthOfLiteralString(string: string): void;
  /**
   *
   * @param {string} STRING undefined
   */
  export function GetLengthOfString(STRING: string): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function GetStreetNameFromHashKey(hash: NativeHash): void;
  /**
   *
   */
  export function IsHudPreferenceSwitchedOn(): void;
  /**
   *
   */
  export function IsRadarPreferenceSwitchedOn(): void;
  /**
   *
   */
  export function IsSubtitlePreferenceSwitchedOn(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function DisplayHud(toggle: NativeBOOL): void;
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
  export function DisplayRadar(Toggle: NativeBOOL): void;
  /**
   *
   */
  export function IsHudHidden(): void;
  /**
   *
   */
  export function IsRadarHidden(): void;
  /**
   *
   */
  export function IsRadarEnabled(): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipRoute(blip: NativeBlip, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipRouteColour(blip: NativeBlip, colour: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function AddNextMessageToPreviousBriefs(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x57D760D55F54E071(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function RespondingAsTemp(p0: number): void;
  /**
   *
   * @param {number} zoomLevel undefined
   */
  export function SetRadarZoom(zoomLevel: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xF98E4B3E56AFC7B1(p0: NativeAny, p1: number): void;
  /**
   *
   * @param {number} zoomLevel undefined
   */
  export function SetRadarZoomLevelThisFrame(zoomLevel: number): void;
  /**
   *
   */
  export function _0xD2049635DEB9C375(): void;
  /**
   *
   * @param {number} hudColorIndex undefined
   */
  export function GetHudColour(hudColorIndex: number, r: number, g: number, b: number, a: number): void;
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
  export function SetHudColoursSwitch(hudColorIndex: number, hudColorIndex2: number): void;
  /**
   *
   * @param {number} hudColorIndex undefined
   */
  export function SetHudColour(hudColorIndex: number, r: number, g: number, b: number, a: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function FlashAbilityBar(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function SetAbilityBarValue(value: number, maxValue: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function FlashWantedDisplay(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xBA8D65C1C65702E5(p0: NativeBOOL): void;
  /**
   *
   * @param {number} size undefined
   */
  export function GetTextScaleHeight(size: number, font: number): void;
  /**
   *
   * @param {number} scale undefined
   */
  export function SetTextScale(scale: number, size: number): void;
  /**
   *
   * @param {number} red undefined
   */
  export function SetTextColour(red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {NativeBOOL} align undefined
   */
  export function SetTextCentre(align: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetTextRightJustify(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} justifyType undefined
   */
  export function SetTextJustification(justifyType: number): void;
  /**
   *
   * @param {number} start undefined
   */
  export function SetTextWrap(start: number, end: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetTextLeading(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetTextProportional(p0: NativeBOOL): void;
  /**
   *
   * @param {number} fontType undefined
   */
  export function SetTextFont(fontType: number): void;
  /**
   *
   */
  export function SetTextDropShadow(): void;
  /**
   *
   * @param {number} distance undefined
   */
  export function SetTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;
  /**
   *
   */
  export function SetTextOutline(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetTextEdge(p0: number, r: number, g: number, b: number, a: number): void;
  /**
   *
   * @param {number} renderId undefined
   */
  export function SetTextRenderId(renderId: number): void;
  /**
   *
   */
  export function GetDefaultScriptRendertargetRenderId(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function RegisterNamedRendertarget(p0: string, p1: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function IsNamedRendertargetRegistered(p0: string): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function ReleaseNamedRendertarget(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function LinkNamedRendertarget(hash: NativeHash): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function GetNamedRendertargetRenderId(p0: string): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function IsNamedRendertargetLinked(hash: NativeHash): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function ClearHelp(toggle: NativeBOOL): void;
  /**
   *
   */
  export function IsHelpMessageOnScreen(): void;
  /**
   *
   */
  export function _0x214CD562A939246A(): void;
  /**
   *
   */
  export function IsHelpMessageBeingDisplayed(): void;
  /**
   *
   */
  export function IsHelpMessageFadingOut(): void;
  /**
   *
   */
  export function _0x4A9923385BDB9DAD(): void;
  /**
   *
   */
  export function GetBlipInfoIdIterator(): void;
  /**
   *
   */
  export function GetNumberOfActiveBlips(): void;
  /**
   *
   * @param {number} blipSprite undefined
   */
  export function GetNextBlipInfoId(blipSprite: number): void;
  /**
   *
   * @param {number} blipSprite undefined
   */
  export function GetFirstBlipInfoId(blipSprite: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipInfoIdCoord(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipInfoIdDisplay(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipInfoIdType(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipInfoIdEntityIndex(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipInfoIdPickupIndex(blip: NativeBlip): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetBlipFromEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function AddBlipForRadius(posX: number, posY: number, posZ: number, radius: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function AddBlipForEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function AddBlipForPickup(pickup: NativePickup): void;
  /**
   *
   * @param {number} x undefined
   */
  export function AddBlipForCoord(x: number, y: number, z: number): void;
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
  export function SetBlipCoords(blip: NativeBlip, posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipCoords(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipSprite(blip: NativeBlip, spriteId: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipSprite(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipNameFromTextFile(blip: NativeBlip, gxtEntry: string): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipNameToPlayerName(blip: NativeBlip, player: NativePlayer): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipAlpha(blip: NativeBlip, alpha: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipAlpha(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipFade(blip: NativeBlip, opacity: number, duration: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipRotation(blip: NativeBlip, rotation: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipFlashTimer(blip: NativeBlip, duration: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipFlashInterval(blip: NativeBlip, p1: NativeAny): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipColour(blip: NativeBlip, color: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipSecondaryColour(blip: NativeBlip, r: number, g: number, b: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipColour(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function GetBlipHudColour(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function IsBlipShortRange(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function IsBlipOnMinimap(blip: NativeBlip): void;
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
  export function SetBlipHighDetail(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipAsMissionCreatorBlip(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function IsMissionCreatorBlip(blip: NativeBlip): void;
  /**
   *
   */
  export function DisableBlipNameForVar(): void;
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
  export function SetBlipFlashes(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipFlashesAlternate(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function IsBlipFlashing(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipAsShortRange(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipScale(blip: NativeBlip, scale: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipPriority(blip: NativeBlip, priority: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipDisplay(blip: NativeBlip, displayId: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipCategory(blip: NativeBlip, index: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function RemoveBlip(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipAsFriendly(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function PulseBlip(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function ShowNumberOnBlip(blip: NativeBlip, number: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function HideNumberOnBlip(blip: NativeBlip): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function _0x75A16C3DA34F1245(blip: NativeBlip, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function ShowTickOnBlip(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function ShowHeadingIndicatorOnBlip(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipFriendly(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipFriend(blip: NativeBlip, toggle: NativeBOOL): void;
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
  export function SetBlipShrink(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x25615540D894B814(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function DoesBlipExist(blip: NativeBlip): void;
  /**
   *
   */
  export function SetWaypointOff(): void;
  /**
   *
   */
  export function _0xD8E694757BCEA8E9(): void;
  /**
   *
   */
  export function RefreshWaypoint(): void;
  /**
   *
   */
  export function IsWaypointActive(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetNewWaypoint(x: number, y: number): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipBright(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBlip} blip undefined
   */
  export function SetBlipShowCone(blip: NativeBlip, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0xC594B315EDF2D4AF(ped: NativePed): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetMinimapComponent(p0: number, p1: NativeBOOL, p2: number): void;
  /**
   *
   */
  export function _0x60E892BA4F5BDCA4(): void;
  /**
   *
   */
  export function GetMainPlayerBlipId(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x41350B4FC28E3941(p0: NativeBOOL): void;
  /**
   *
   */
  export function HideLoadingOnFadeThisFrame(): void;
  /**
   *
   * @param {NativeHash} interior undefined
   */
  export function SetRadarAsInteriorThisFrame(interior: NativeHash, x: number, y: number, heading: number, zoom: number): void;
  /**
   *
   */
  export function SetRadarAsExteriorThisFrame(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetPlayerBlipPositionThisFrame(x: number, y: number): void;
  /**
   *
   */
  export function _0x9049FE339D5F6F6F(): void;
  /**
   *
   */
  export function DisableRadarThisFrame(): void;
  /**
   *
   */
  export function _0x20FE7FDFEEAD38C0(): void;
  /**
   *
   */
  export function CenterPlayerOnRadarThisFrame(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetWidescreenFormat(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function DisplayAreaName(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function DisplayCash(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function UpdateDisplayCash(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} cash undefined
   */
  export function SetPlayerCashChange(cash: number, bank: number): void;
  /**
   *
   * @param {NativeBOOL} display undefined
   */
  export function DisplayAmmoThisFrame(display: NativeBOOL): void;
  /**
   *
   */
  export function DisplaySniperScopeThisFrame(): void;
  /**
   *
   */
  export function HideHudAndRadarThisFrame(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xE67C6DFD386EA5E7(p0: NativeBOOL): void;
  /**
   *
   */
  export function SetDisplayCash(): void;
  /**
   *
   */
  export function RemoveDisplayCash(): void;
  /**
   *
   */
  export function SetMultiplayerBankCash(): void;
  /**
   *
   */
  export function RemoveMultiplayerBankCash(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetMultiplayerHudCash(p0: number, p1: number): void;
  /**
   *
   */
  export function RemoveMultiplayerHudCash(): void;
  /**
   *
   */
  export function HideHelpTextThisFrame(): void;
  /**
   *
   * @param {string} message undefined
   */
  export function DisplayHelpTextThisFrame(message: string, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} forcedShow undefined
   */
  export function ShowWeaponWheel(forcedShow: NativeBOOL): void;
  /**
   *
   */
  export function BlockWeaponWheelThisFrame(): void;
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
  export function SetGpsFlags(p0: number, p1: number): void;
  /**
   *
   */
  export function ClearGpsFlags(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x1EAC5F91BCBC5073(p0: NativeBOOL): void;
  /**
   *
   */
  export function ClearGpsRaceTrack(): void;
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
  export function ClearGpsPlayerWaypoint(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetGpsFlashes(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x7B21E0BB01E8224A(p0: NativeAny): void;
  /**
   *
   */
  export function FlashMinimapDisplay(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6B1DE27EE78E6A19(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function ToggleStealthRadar(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function KeyHudColour(p0: NativeBOOL, p1: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetMissionName(p0: NativeBOOL, name: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetMissionName2(p0: NativeBOOL, name: string): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x817B86108EB94E51(p0: NativeBOOL, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetMinimapBlockWaypoint(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetNorthYanktonMap(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetMinimapRevealed(toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0xE0130B41D3CF4574(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function IsMinimapAreaRevealed(x: number, y: number, radius: number): void;
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
  export function LockMinimapAngle(angle: number): void;
  /**
   *
   */
  export function UnlockMinimapAngle(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function LockMinimapPosition(x: number, y: number): void;
  /**
   *
   */
  export function UnlockMinimapPosition(): void;
  /**
   *
   * @param {number} altitude undefined
   */
  export function SetMinimapAttitudeIndicatorLevel(altitude: number, p1: NativeBOOL): void;
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
  export function SetRadarBigmapEnabled(toggleBigMap: NativeBOOL, showFullMap: NativeBOOL): void;
  /**
   *
   * @param {number} id undefined
   */
  export function IsHudComponentActive(id: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function IsScriptedHudComponentActive(id: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function HideScriptedHudComponentThisFrame(id: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x09C0403ED9A751C2(p0: NativeAny): void;
  /**
   *
   * @param {number} id undefined
   */
  export function HideHudComponentThisFrame(id: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function ShowHudComponentThisFrame(id: number): void;
  /**
   *
   */
  export function _0xA4DEDE28B1814289(): void;
  /**
   *
   */
  export function ResetReticuleValues(): void;
  /**
   *
   * @param {number} id undefined
   */
  export function ResetHudComponentValues(id: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function SetHudComponentPosition(id: number, x: number, y: number): void;
  /**
   *
   * @param {number} id undefined
   */
  export function GetHudComponentPosition(id: number): void;
  /**
   *
   */
  export function ClearReminderMessage(): void;
  /**
   *
   * @param {number} worldX undefined
   */
  export function GetScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number, screenX: number, screenY: number): void;
  /**
   *
   */
  export function DisplayJobReport(): void;
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
  export function ClearFloatingHelp(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {number} headDisplayId undefined
   */
  export function SetMpGamerTagColor(headDisplayId: number, username: string, pointedClanTag: NativeBOOL, isRockstarClan: NativeBOOL, clanTag: string, p5: NativeAny, r: number, g: number, b: number): void;
  /**
   *
   */
  export function HasMpGamerTag(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function CreateMpGamerTag(ped: NativePed, username: string, pointedClanTag: NativeBOOL, isRockstarClan: NativeBOOL, clanTag: string, p5: NativeAny): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function RemoveMpGamerTag(gamerTagId: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function IsMpGamerTagActive(gamerTagId: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function AddTrevorRandomModifier(gamerTagId: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function SetMpGamerTagVisibility(gamerTagId: number, component: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} headDisplayId undefined
   */
  export function SetMpGamerTagIcons(headDisplayId: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function SetMpGamerTagColour(gamerTagId: number, flag: number, color: number): void;
  /**
   *
   * @param {number} headDisplayId undefined
   */
  export function SetMpGamerTagHealthBarColour(headDisplayId: number, color: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function SetMpGamerTagAlpha(gamerTagId: number, component: number, alpha: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function SetMpGamerTagWantedLevel(gamerTagId: number, wantedlvl: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function SetMpGamerTagName(gamerTagId: number, string: string): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function HasMpGamerTag2(gamerTagId: number): void;
  /**
   *
   * @param {number} gamerTagId undefined
   */
  export function SetMpGamerTagChatting(gamerTagId: number, string: string): void;
  /**
   *
   */
  export function GetActiveWebsiteId(): void;
  /**
   *
   */
  export function GetCurrentWebsiteId(): void;
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
  export function SetWarningMessage(entryLine1: string, instructionalKey: number, entryLine2: string, p3: NativeBOOL, p4: NativeAny, p5: NativeAny, p6: NativeAny, background: NativeBOOL): void;
  /**
   *
   * @param {string} entryHeader undefined
   */
  export function SetWarningMessageWithHeader(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny, background: NativeBOOL): void;
  /**
   *
   * @param {string} entryHeader undefined
   */
  export function SetWarningMessage3(entryHeader: string, entryLine1: string, instructionalKey: NativeAny, entryLine2: string, p4: NativeBOOL, p5: NativeAny, p6: NativeAny, p7: NativeAny, p8: NativeAny, p9: NativeBOOL): void;
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
  export function IsWarningMessageActive(): void;
  /**
   *
   */
  export function _0x7792424AA0EAC32E(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetMapFullScreen(toggle: NativeBOOL): void;
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
  export function ActivateFrontendMenu(menuhash: NativeHash, Toggle_Pause: NativeBOOL, component: number): void;
  /**
   *
   * @param {NativeHash} menuHash undefined
   */
  export function RestartFrontendMenu(menuHash: NativeHash, p1: number): void;
  /**
   *
   */
  export function GetCurrentFrontendMenu(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetPauseMenuActive(toggle: NativeBOOL): void;
  /**
   *
   */
  export function DisableFrontendThisFrame(): void;
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
  export function SetFrontendActive(active: NativeBOOL): void;
  /**
   *
   */
  export function IsPauseMenuActive(): void;
  /**
   *
   */
  export function _0x2F057596F2BD0061(): void;
  /**
   *
   */
  export function GetPauseMenuState(): void;
  /**
   *
   */
  export function _0x5BFF36D6ED83E0AE(): void;
  /**
   *
   */
  export function IsPauseMenuRestarting(): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function LogDebugInfo(p0: string): void;
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
  export function AddFrontendMenuContext(hash: NativeHash): void;
  /**
   *
   * @param {NativeHash} hash undefined
   */
  export function ObjectDecalToggle(hash: NativeHash): void;
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
  export function EnableDeathbloodSeethrough(p0: NativeBOOL): void;
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
  export function SetUseridsUihidden(p0: NativeAny, p1: NativeAny): void;
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
  export function ClearPedInPauseMenu(): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GivePedToPauseMenu(ped: NativePed, p1: number): void;
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
  export function ShowSocialClubLegalScreen(): void;
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
  export function IsSocialClubActive(): void;
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
  export function IsTextChatActive(): void;
  /**
   *
   */
  export function AbortTextChat(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetTextChatUnk(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xCEF214315D276FD1(p0: NativeBOOL): void;
  /**
   *
   * @param {number} pedHandle undefined
   */
  export function SetPedAiBlip(pedHandle: number, showViewCones: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function DoesPedHaveAiBlip(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetAiBlipType(ped: NativePed, type: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function HideSpecialAbilityLockonOperation(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function IsAiBlipAlwaysShown(ped: NativePed, flag: NativeBOOL): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetAiBlipMaxDistance(ped: NativePed, distance: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function _0x7CD934010E115C2C(ped: NativePed): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function GetAiBlip(ped: NativePed): void;
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
  export function SetDirectorMode(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x04655F9D075D0AE5(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} enabled undefined
   */
  export function SetDebugLinesAndSpheresDrawingActive(enabled: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function DrawDebugLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function DrawDebugLineWithTwoColours(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, alpha1: number, alpha2: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function DrawDebugSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function DrawDebugBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function DrawDebugCross(x: number, y: number, z: number, size: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function DrawDebugText(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {string} text undefined
   */
  export function DrawDebugText2d(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function DrawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function DrawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function DrawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;
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
  export function GetMaximumNumberOfPhotos(): void;
  /**
   *
   */
  export function GetMaximumNumberOfPhotos2(): void;
  /**
   *
   */
  export function GetNumberOfPhotos(): void;
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
  export function ReturnTwo(p0: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function DrawLightWithRangeAndShadow(x: number, y: number, z: number, r: number, g: number, b: number, range: number, intensity: number, shadow: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function DrawLightWithRange(posX: number, posY: number, posZ: number, colorR: number, colorG: number, colorB: number, range: number, intensity: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function DrawSpotLight(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, hardness: number, radius: number, falloff: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function DrawSpotLightWithShadow(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number, falloff: number, shadowId: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xC9B18B4619F48F7B(p0: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function EntityDescriptionText(entity: NativeEntity): void;
  /**
   *
   * @param {number} type undefined
   */
  export function DrawMarker(type: number, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, red: number, green: number, blue: number, alpha: number, bobUpAndDown: NativeBOOL, faceCamera: NativeBOOL, p19: number, rotate: NativeBOOL, textureDict: string, textureName: string, drawOnEnts: NativeBOOL): void;
  /**
   *
   * @param {number} type undefined
   */
  export function CreateCheckpoint(type: number, posX1: number, posY1: number, posZ1: number, posX2: number, posY2: number, posZ2: number, radius: number, red: number, green: number, blue: number, alpha: number, reserved: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function SetCheckpointScale(checkpoint: number, p0: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function SetCheckpointCylinderHeight(checkpoint: number, nearHeight: number, farHeight: number, radius: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function SetCheckpointRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} checkpoint undefined
   */
  export function SetCheckpointIconRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;
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
  export function DeleteCheckpoint(checkpoint: number): void;
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
  export function RequestStreamedTextureDict(textureDict: string, unused: NativeBOOL): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function HasStreamedTextureDictLoaded(textureDict: string): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function SetStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;
  /**
   *
   * @param {number} x undefined
   */
  export function DrawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xC6372ECD45D73BCD(p0: NativeBOOL): void;
  /**
   *
   * @param {number} layer undefined
   */
  export function SetUiLayer(layer: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function ScreenDrawPositionBegin(x: number, y: number): void;
  /**
   *
   */
  export function ScreenDrawPositionEnd(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function ScreenDrawPositionRatio(x: number, y: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x6DD8F5AA635EB4B2(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   */
  export function GetSafeZoneSize(): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function DrawSprite(textureDict: string, textureName: string, screenX: number, screenY: number, width: number, height: number, heading: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function AddEntityIcon(entity: NativeEntity, icon: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityIconVisibility(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityIconColor(entity: NativeEntity, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetDrawOrigin(x: number, y: number, z: number, p3: NativeAny): void;
  /**
   *
   */
  export function ClearDrawOrigin(): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function AttachTvAudioToEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetTvAudioFrontend(toggle: NativeBOOL): void;
  /**
   *
   * @param {string} movieMeshSetName undefined
   */
  export function LoadMovieMeshSet(movieMeshSetName: string): void;
  /**
   *
   * @param {number} movieMeshSet undefined
   */
  export function ReleaseMovieMeshSet(movieMeshSet: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x9B6E70C5CEEF4EEB(p0: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetScreenResolution(x: number, y: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetActiveScreenResolution(x: number, y: number): void;
  /**
   *
   * @param {NativeBOOL} b undefined
   */
  export function GetAspectRatio(b: NativeBOOL): void;
  /**
   *
   */
  export function _0xB2EBE8CBC58B90E9(): void;
  /**
   *
   */
  export function GetIsWidescreen(): void;
  /**
   *
   */
  export function GetIsHidef(): void;
  /**
   *
   */
  export function _0xEFABC7722293DA7C(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetNightvision(toggle: NativeBOOL): void;
  /**
   *
   */
  export function _0x35FB78DC42B7BD21(): void;
  /**
   *
   */
  export function IsNightvisionActive(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xEF398BEEE4EF45F9(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetNoiseoveride(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} value undefined
   */
  export function SetNoisinessoveride(value: number): void;
  /**
   *
   * @param {string} textureDict undefined
   */
  export function GetTextureResolution(textureDict: string, textureName: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0xE2892E7E55D7073A(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function SetFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;
  /**
   *
   */
  export function _0x3669F1B198DCAA4F(): void;
  /**
   *
   * @param {NativeBOOL} enable undefined
   */
  export function SetBlackout(enable: NativeBOOL): void;
  /**
   *
   */
  export function _0xC35A6D07C93802B2(): void;
  /**
   *
   */
  export function CreateTrackedPoint(): void;
  /**
   *
   * @param {number} point undefined
   */
  export function SetTrackedPointInfo(point: number, x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {number} point undefined
   */
  export function IsTrackedPointVisible(point: number): void;
  /**
   *
   * @param {number} point undefined
   */
  export function DestroyTrackedPoint(point: number): void;
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
  export function SetFarShadowsSuppressed(toggle: NativeBOOL): void;
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
  export function SetSeethrough(toggle: NativeBOOL): void;
  /**
   *
   */
  export function IsSeethroughActive(): void;
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
  export function TransitionToBlurred(transitionTime: number): void;
  /**
   *
   * @param {number} transitionTime undefined
   */
  export function TransitionFromBlurred(transitionTime: number): void;
  /**
   *
   */
  export function _0xDE81239437E8C5A8(): void;
  /**
   *
   */
  export function IsParticleFxDelayedBlink(): void;
  /**
   *
   */
  export function _0x7B226C785A52A0A9(): void;
  /**
   *
   * @param {NativeBOOL} enabled undefined
   */
  export function SetFrozenRenderingDisabled(enabled: NativeBOOL): void;
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
  export function StartParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartNetworkedParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartParticleFxNonLoopedOnPedBone(effectName: string, ped: NativePed, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: NativeBOOL, axisY: NativeBOOL, axisZ: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartNetworkedParticleFxNonLoopedOnPedBone(effectName: string, ped: NativePed, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: NativeBOOL, axisY: NativeBOOL, axisZ: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartParticleFxNonLoopedOnEntity(effectName: string, entity: NativeEntity, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: NativeBOOL, axisY: NativeBOOL, axisZ: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartNetworkedParticleFxNonLoopedOnEntity(effectName: string, entity: NativeEntity, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: NativeBOOL, axisY: NativeBOOL, axisZ: NativeBOOL): void;
  /**
   *
   * @param {number} r undefined
   */
  export function SetParticleFxNonLoopedColour(r: number, g: number, b: number): void;
  /**
   *
   * @param {number} alpha undefined
   */
  export function SetParticleFxNonLoopedAlpha(alpha: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x8CDE909A0370BB3A(p0: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartParticleFxLoopedAtCoord(effectName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL, p11: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartParticleFxLoopedOnPedBone(effectName: string, ped: NativePed, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartParticleFxLoopedOnEntity(effectName: string, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartParticleFxLoopedOnEntityBone(effectName: string, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartNetworkedParticleFxLoopedOnEntity(effectName: string, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StartNetworkedParticleFxLoopedOnEntityBone(effectName: string, entity: NativeEntity, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: NativeBOOL, yAxis: NativeBOOL, zAxis: NativeBOOL): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function StopParticleFxLooped(ptfxHandle: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function RemoveParticleFx(ptfxHandle: number, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function RemoveParticleFxFromEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} X undefined
   */
  export function RemoveParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function DoesParticleFxLoopedExist(ptfxHandle: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function SetParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function SetParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, Id: NativeBOOL): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function SetParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: NativeBOOL): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function SetParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function SetParticleFxLoopedScale(ptfxHandle: number, scale: number): void;
  /**
   *
   * @param {number} ptfxHandle undefined
   */
  export function SetParticleFxLoopedFarClipDist(ptfxHandle: number, dist: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetParticleFxCamInsideVehicle(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetParticleFxCamInsideNonplayerVehicle(p0: NativeAny, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetParticleFxShootoutBoat(p0: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetParticleFxBloodScale(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function EnableClownBloodVfx(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} Toggle undefined
   */
  export function EnableAlienBloodVfx(Toggle: NativeBOOL): void;
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
  export function UseParticleFxAsset(name: string): void;
  /**
   *
   * @param {string} oldAsset undefined
   */
  export function SetParticleFxAssetOldToNew(oldAsset: string, newAsset: string): void;
  /**
   *
   * @param {string} name undefined
   */
  export function ResetParticleFxAssetOldToNew(name: string): void;
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
  export function WashDecalsInRange(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function WashDecalsFromVehicle(vehicle: NativeVehicle, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function FadeDecalsInRange(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function RemoveDecalsInRange(x: number, y: number, z: number, range: number): void;
  /**
   *
   * @param {NativeObject} obj undefined
   */
  export function RemoveDecalsFromObject(obj: NativeObject): void;
  /**
   *
   * @param {NativeObject} obj undefined
   */
  export function RemoveDecalsFromObjectFacing(obj: NativeObject, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function RemoveDecalsFromVehicle(vehicle: NativeVehicle): void;
  /**
   *
   * @param {number} decalType undefined
   */
  export function AddDecal(decalType: number, posX: number, posY: number, posZ: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, width: number, height: number, rCoef: number, gCoef: number, bCoef: number, opacity: number, timeout: number, p17: NativeBOOL, p18: NativeBOOL, p19: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function AddPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): void;
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
  export function RemoveDecal(decal: NativeObject): void;
  /**
   *
   * @param {NativeObject} decal undefined
   */
  export function IsDecalAlive(decal: NativeObject): void;
  /**
   *
   * @param {number} decal undefined
   */
  export function GetDecalWashLevel(decal: number): void;
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
  export function OverrideDecalTexture(decalType: number, textureDict: string, textureName: string): void;
  /**
   *
   * @param {number} decalType undefined
   */
  export function _0xB7ED70C49521A61D(decalType: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function MoveVehicleDecals(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function AddClanDecalToVehicle(vehicle: NativeVehicle, ped: NativePed, boneIndex: number, x1: number, x2: number, x3: number, y1: number, y2: number, y3: number, z1: number, z2: number, z3: number, scale: number, p13: NativeAny, alpha: number): void;
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
  export function DoesVehicleHaveDecal(vehicle: NativeVehicle, p1: NativeAny): void;
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
  export function DisableVehicleDistantlights(toggle: NativeBOOL): void;
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
  export function SetForcePedFootstepsTracks(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function SetForceVehicleTrails(toggle: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0xD7021272EB0A451E(p0: string): void;
  /**
   *
   * @param {string} modifierName undefined
   */
  export function SetTimecycleModifier(modifierName: string): void;
  /**
   *
   * @param {number} strength undefined
   */
  export function SetTimecycleModifierStrength(strength: number): void;
  /**
   *
   * @param {string} modifierName undefined
   */
  export function SetTransitionTimecycleModifier(modifierName: string, transition: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x1CBA05AE7BD7EE05(p0: number): void;
  /**
   *
   */
  export function ClearTimecycleModifier(): void;
  /**
   *
   */
  export function GetTimecycleModifierIndex(): void;
  /**
   *
   */
  export function _0x459FD2C8D0AB78BC(): void;
  /**
   *
   */
  export function PushTimecycleModifier(): void;
  /**
   *
   */
  export function PopTimecycleModifier(): void;
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
  export function RequestScaleformMovie(scaleformName: string): void;
  /**
   *
   * @param {string} scaleformName undefined
   */
  export function RequestScaleformMovieInstance(scaleformName: string): void;
  /**
   *
   * @param {string} scaleformName undefined
   */
  export function RequestScaleformMovieInteractive(scaleformName: string): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function HasScaleformMovieLoaded(scaleformHandle: number): void;
  /**
   *
   * @param {string} scaleformName undefined
   */
  export function HasNamedScaleformMovieLoaded(scaleformName: string): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function HasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function SetScaleformMovieAsNoLongerNeeded(scaleformHandle: number): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function SetScaleformMovieToUseSystemTime(scaleform: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} scaleformHandle undefined
   */
  export function DrawScaleformMovie(scaleformHandle: number, x: number, y: number, width: number, height: number, red: number, green: number, blue: number, alpha: number, unk: number): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function DrawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number, unk: number): void;
  /**
   *
   * @param {number} scaleform1 undefined
   */
  export function DrawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function DrawScaleformMovie3d(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, sharpness: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: NativeAny): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function DrawScaleformMovie3dNonAdditive(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: NativeAny): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function CallScaleformMovieMethod(scaleform: number, method: string): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function CallScaleformMovieFunctionFloatParams(scaleform: number, functionName: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function CallScaleformMovieFunctionStringParams(scaleform: number, functionName: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function CallScaleformMovieFunctionMixedParams(scaleform: number, functionName: string, floatParam1: number, floatParam2: number, floatParam3: number, floatParam4: number, floatParam5: number, stringParam1: string, stringParam2: string, stringParam3: string, stringParam4: string, stringParam5: string): void;
  /**
   *
   * @param {number} hudComponent undefined
   */
  export function BeginScaleformMovieMethodHudComponent(hudComponent: number, functionName: string): void;
  /**
   *
   * @param {number} scaleform undefined
   */
  export function BeginScaleformMovieMethod(scaleform: number, functionName: string): void;
  /**
   *
   * @param {string} functionName undefined
   */
  export function BeginScaleformMovieMethodN(functionName: string): void;
  /**
   *
   * @param {string} functionName undefined
   */
  export function BeginScaleformMovieMethodV(functionName: string): void;
  /**
   *
   */
  export function EndScaleformMovieMethod(): void;
  /**
   *
   */
  export function EndScaleformMovieMethodReturn(): void;
  /**
   *
   * @param {number} method_return undefined
   */
  export function GetScaleformMovieFunctionReturnBool(method_return: number): void;
  /**
   *
   * @param {number} method_return undefined
   */
  export function GetScaleformMovieFunctionReturnInt(method_return: number): void;
  /**
   *
   * @param {number} method_return undefined
   */
  export function SittingTv(method_return: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function AddScaleformMovieMethodParameterInt(value: number): void;
  /**
   *
   * @param {number} value undefined
   */
  export function AddScaleformMovieMethodParameterFloat(value: number): void;
  /**
   *
   * @param {NativeBOOL} value undefined
   */
  export function AddScaleformMovieMethodParameterBool(value: NativeBOOL): void;
  /**
   *
   * @param {string} componentType undefined
   */
  export function BeginTextCommandScaleformString(componentType: string): void;
  /**
   *
   */
  export function EndTextCommandScaleformString(): void;
  /**
   *
   */
  export function EndTextCommandScaleformString2(): void;
  /**
   *
   * @param {string} value undefined
   */
  export function AddScaleformMovieMethodParameterString(value: string): void;
  /**
   *
   * @param {string} button undefined
   */
  export function AddScaleformMovieMethodParameterButtonName(button: string): void;
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
  export function RequestHudScaleform(hudComponent: number): void;
  /**
   *
   * @param {number} hudComponent undefined
   */
  export function HasHudScaleformLoaded(hudComponent: number): void;
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
  export function SetTvChannel(channel: number): void;
  /**
   *
   */
  export function GetTvChannel(): void;
  /**
   *
   * @param {number} volume undefined
   */
  export function SetTvVolume(volume: number): void;
  /**
   *
   */
  export function GetTvVolume(): void;
  /**
   *
   * @param {number} xPos undefined
   */
  export function DrawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, red: number, green: number, blue: number, alpha: number): void;
  /**
   *
   * @param {number} TV_Channel undefined
   */
  export function LoadTvChannelSequence(TV_Channel: number, VideoSequence: string, Restart: NativeBOOL): void;
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
  export function LoadTvChannel(tvChannel: NativeHash): void;
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
  export function EnableMovieSubtitles(toggle: NativeBOOL): void;
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
  export function DrawShowroom(p0: string, ped: NativePed, p2: number, posX: number, posY: number, posZ: number): void;
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
  export function StartScreenEffect(effectName: string, duration: number, looped: NativeBOOL): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function StopScreenEffect(effectName: string): void;
  /**
   *
   * @param {string} effectName undefined
   */
  export function GetScreenEffectIsActive(effectName: string): void;
  /**
   *
   */
  export function StopAllScreenEffects(): void;
  /**
   *
   * @param {string} graphicsName undefined
   */
  export function _0xD2209BE128B5418C(graphicsName: string): void;
  /**
   *
   * @param {number} statSlot undefined
   */
  export function StatClearSlotForReload(statSlot: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function StatLoad(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function StatSave(p0: number, p1: NativeBOOL, p2: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5688585E6D563CD8(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StatLoadPending(p0: NativeAny): void;
  /**
   *
   */
  export function StatSavePending(): void;
  /**
   *
   */
  export function StatSavePendingOrRequested(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StatDeleteSlot(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StatSlotIsLoaded(p0: NativeAny): void;
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
  export function StatSetInt(statName: NativeHash, value: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetFloat(statName: NativeHash, value: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetBool(statName: NativeHash, value: NativeBOOL, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetGxtLabel(statName: NativeHash, value: string, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetDate(statName: NativeHash, value: NativeAny, numFields: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetString(statName: NativeHash, value: string, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetPos(statName: NativeHash, x: number, y: number, z: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetMaskedInt(statName: NativeHash, p1: NativeAny, p2: NativeAny, p3: number, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetUserId(statName: NativeHash, value: string, save: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetCurrentPosixTime(statName: NativeHash, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function StatGetInt(statHash: NativeHash, outValue: number, p2: number): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function StatGetFloat(statHash: NativeHash, outValue: number, p2: NativeAny): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function StatGetBool(statHash: NativeHash, outValue: NativeBOOL, p2: NativeAny): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function StatGetDate(statHash: NativeHash, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function StatGetString(statHash: NativeHash, p1: number): void;
  /**
   *
   * @param {NativeHash} statHash undefined
   */
  export function StatGetPos(statHash: NativeHash, x: number, y: number, z: number, p4: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StatGetMaskedInt(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StatGetUserId(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatGetLicensePlate(statName: NativeHash): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetLicensePlate(statName: NativeHash, str: string): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatIncrement(statName: NativeHash, value: number): void;
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
  export function StatGetNumberOfDays(statName: NativeHash): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatGetNumberOfHours(statName: NativeHash): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatGetNumberOfMinutes(statName: NativeHash): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatGetNumberOfSeconds(statName: NativeHash): void;
  /**
   *
   * @param {number} profileSetting undefined
   */
  export function StatSetProfileSetting(profileSetting: number, value: number): void;
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
  export function GetPstatBoolHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number): void;
  /**
   *
   * @param {number} index undefined
   */
  export function GetPstatIntHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number): void;
  /**
   *
   * @param {number} index undefined
   */
  export function GetTupstatBoolHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number): void;
  /**
   *
   * @param {number} index undefined
   */
  export function GetTupstatIntHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number): void;
  /**
   *
   * @param {number} index undefined
   */
  export function GetNgstatBoolHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number, section: string): void;
  /**
   *
   * @param {number} index undefined
   */
  export function GetNgstatIntHash(index: number, spStat: NativeBOOL, charStat: NativeBOOL, character: number, section: string): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatGetBoolMasked(statName: NativeHash, mask: number, p2: number): void;
  /**
   *
   * @param {NativeHash} statName undefined
   */
  export function StatSetBoolMasked(statName: NativeHash, value: NativeBOOL, mask: number, save: NativeBOOL): void;
  /**
   *
   * @param {string} p0 undefined
   */
  export function _0x5009DFD741329729(p0: string, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsNpcInvite(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsAwardXp(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsRankUp(p0: NativeAny): void;
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
  export function PlaystatsMissionStarted(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsMissionOver(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeBOOL, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsMissionCheckpoint(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
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
  export function PlaystatsRaceCheckpoint(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x6DEE77AFF8C21BD1(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsMatchStarted(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsShopItem(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x1CAE5D2E3F9A07F0(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function PlaystatsAmbientMissionCrateCreated(p0: number, p1: number, p2: number): void;
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
  export function PlaystatsWebsiteVisited(scaleformHash: NativeHash, p1: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsFriendActivity(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsOddjobDone(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsPropChange(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function PlaystatsClothChange(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xE95C8A1875A02CA4(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {string} cheat undefined
   */
  export function PlaystatsCheatApplied(cheat: string): void;
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
  export function LeaderboardsGetNumberOfColumns(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function LeaderboardsGetColumnId(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function LeaderboardsGetColumnType(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function LeaderboardsReadClearAll(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function LeaderboardsReadClear(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function LeaderboardsReadPending(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function _0xA31FD15197B192BD(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function LeaderboardsReadSuccessful(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function Leaderboards2ReadFriendsByRow(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeBOOL, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function Leaderboards2ReadByHandle(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function Leaderboards2ReadByRow(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function Leaderboards2ReadByRank(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function Leaderboards2ReadByRadius(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function Leaderboards2ReadByScoreInt(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function Leaderboards2ReadByScoreFloat(p0: NativeAny, p1: number, p2: NativeAny): void;
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
  export function Leaderboards2WriteData(p0: NativeAny): void;
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
  export function LeaderboardsCacheDataRow(p0: NativeAny): void;
  /**
   *
   */
  export function LeaderboardsClearCacheData(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x8EC74CEB042E7CFF(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function LeaderboardsGetCacheExists(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function LeaderboardsGetCacheTime(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x58A651CD201D89AD(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function LeaderboardsGetCacheDataRow(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
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
  export function LeaderboardsDeaths(statName: NativeHash, value: number): void;
  /**
   *
   */
  export function _0x047CBED6F6F8B63C(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function Leaderboards2WriteDataEx(p0: NativeAny, p1: NativeAny): void;
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
  export function AddScriptToRandomPed(name: string, model: NativeHash, p2: number, p3: number): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function RegisterObjectScriptBrain(scriptName: string, objectName: NativeHash, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function IsObjectWithinBrainActivationRange(object: NativeObject): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RegisterWorldPointScriptBrain(p0: NativeAny, p1: number, p2: NativeAny): void;
  /**
   *
   */
  export function IsWorldPointWithinBrainActivationRange(): void;
  /**
   *
   * @param {number} brainSet undefined
   */
  export function EnableScriptBrainSet(brainSet: number): void;
  /**
   *
   * @param {number} brainSet undefined
   */
  export function DisableScriptBrainSet(brainSet: number): void;
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
  export function CreateMobilePhone(p3: number): void;
  /**
   *
   */
  export function DestroyMobilePhone(): void;
  /**
   *
   * @param {number} scale undefined
   */
  export function SetMobilePhoneScale(scale: number): void;
  /**
   *
   * @param {number} rotX undefined
   */
  export function SetMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: NativeAny): void;
  /**
   *
   * @param {NativeVector3} rotation undefined
   */
  export function GetMobilePhoneRotation(rotation: NativeVector3, p1: NativeVehicle): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function SetMobilePhonePosition(posX: number, posY: number, posZ: number): void;
  /**
   *
   * @param {NativeVector3} position undefined
   */
  export function GetMobilePhonePosition(position: NativeVector3): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function ScriptIsMovingMobilePhoneOffscreen(toggle: NativeBOOL): void;
  /**
   *
   */
  export function CanPhoneBeSeenOnScreen(): void;
  /**
   *
   * @param {number} direction undefined
   */
  export function MoveFinger(direction: number): void;
  /**
   *
   * @param {NativeBOOL} Toggle undefined
   */
  export function SetPhoneLean(Toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function CellCamActivate(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function DisablePhoneThisFrame(toggle: NativeBOOL): void;
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
  export function CellCamIsCharVisibleNoFaceCheck(entity: NativeEntity): void;
  /**
   *
   * @param {number} renderId undefined
   */
  export function GetMobilePhoneRenderId(renderId: number): void;
  /**
   *
   */
  export function AppDataValid(): void;
  /**
   *
   * @param {NativeScrHandle} property undefined
   */
  export function AppGetInt(property: NativeScrHandle): void;
  /**
   *
   * @param {string} property undefined
   */
  export function AppGetFloat(property: string): void;
  /**
   *
   * @param {string} property undefined
   */
  export function AppGetString(property: string): void;
  /**
   *
   * @param {number} hour undefined
   */
  export function SetClockTime(hour: number, minute: number, second: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function PauseClock(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} hour undefined
   */
  export function AdvanceClockTimeTo(hour: number, minute: number, second: number): void;
  /**
   *
   * @param {number} hours undefined
   */
  export function AddToClockTime(hours: number, minutes: number, seconds: number): void;
  /**
   *
   */
  export function GetClockHours(): void;
  /**
   *
   */
  export function GetClockMinutes(): void;
  /**
   *
   */
  export function GetClockSeconds(): void;
  /**
   *
   * @param {number} day undefined
   */
  export function SetClockDate(day: number, month: number, year: number): void;
  /**
   *
   */
  export function GetClockDayOfWeek(): void;
  /**
   *
   */
  export function GetClockDayOfMonth(): void;
  /**
   *
   */
  export function GetClockMonth(): void;
  /**
   *
   */
  export function GetClockYear(): void;
  /**
   *
   */
  export function GetMillisecondsPerGameMinute(): void;
  /**
   *
   */
  export function GetPosixTime(): void;
  /**
   *
   * @param {number} year undefined
   */
  export function GetUtcTime(year: number, month: number, day: number, hour: number, minute: number, second: number): void;
  /**
   *
   * @param {number} year undefined
   */
  export function GetLocalTime(year: number, month: number, day: number, hour: number, minute: number, second: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function SetRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown1: NativeBOOL, unknown2: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function SetRoadsInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number, unknown1: NativeBOOL, unknown2: NativeBOOL, unknown3: NativeBOOL): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function SetPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetSafeCoordForPed(x: number, y: number, z: number, onGround: NativeBOOL, outPosition: NativeVector3, flags: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetClosestVehicleNode(x: number, y: number, z: number, outPosition: NativeVector3, nodeType: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetClosestMajorVehicleNode(x: number, y: number, z: number, outPosition: NativeVector3, p5: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetClosestVehicleNodeWithHeading(x: number, y: number, z: number, outPosition: NativeVector3, outHeading: number, nodeType: number, p6: number, p7: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, outPosition: NativeVector3, p6: NativeBOOL, p7: number, p8: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: NativeVector3, outHeading: number, outInt: number, p6: number, p7: number, p8: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: NativeVector3, outHeading: number, p6: NativeAny, p7: number, p8: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, outPosition: NativeVector3, outHeading: number, nodetype: number, p10: NativeAny, p11: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetVehicleNodeProperties(x: number, y: number, z: number, density: number, flags: number): void;
  /**
   *
   * @param {number} vehicleNodeId undefined
   */
  export function IsVehicleNodeIdValid(vehicleNodeId: number): void;
  /**
   *
   * @param {number} nodeId undefined
   */
  export function GetVehicleNodePosition(nodeId: number, outPosition: NativeVector3): void;
  /**
   *
   * @param {number} nodeID undefined
   */
  export function GetSupportsGpsRouteFlag(nodeID: number): void;
  /**
   *
   * @param {number} nodeID undefined
   */
  export function GetIsSlowRoadFlag(nodeID: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p5: NativeVector3, p6: NativeVector3, p7: NativeAny, p8: NativeAny, p9: number, p10: NativeBOOL): void;
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
  export function SetRoadsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function SetRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number): void;
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
  export function SetPedPathsBackToOriginal(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: NativeBOOL, p5: NativeBOOL, p6: NativeBOOL, outPosition: NativeVector3, nodeId: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetStreetNameAtCoord(x: number, y: number, z: number, streetName: NativeHash, crossingRoad: NativeHash): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GenerateDirectionsToCoord(x: number, y: number, z: number, p3: NativeBOOL, direction: number, vehicle: number, distToNxJunction: number): void;
  /**
   *
   * @param {NativeBOOL} ignore undefined
   */
  export function SetIgnoreNoGpsFlag(ignore: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x1FC289A0C3FF470F(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetGpsDisabledZone(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
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
  export function IsPointOnRoad(x: number, y: number, z: number, vehicle: NativeVehicle): void;
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
  export function AddNavmeshRequiredRegion(x: number, y: number, radius: number): void;
  /**
   *
   */
  export function RemoveNavmeshRequiredRegions(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function DisableNavmeshInArea(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny, p6: NativeAny): void;
  /**
   *
   */
  export function AreAllNavmeshRegionsLoaded(): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function IsNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x01708E8DD3FF8C65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function AddNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: NativeBOOL, p8: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function UpdateNavmeshBlockingObject(p0: NativeAny, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function RemoveNavmeshBlockingObject(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function DoesNavmeshBlockingObjectExist(p0: NativeAny): void;
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
  export function CalculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function IsControlEnabled(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function IsControlPressed(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function IsControlReleased(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function IsControlJustPressed(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function IsControlJustReleased(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function GetControlValue(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function GetControlNormal(inputGroup: number, control: number): void;
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
  export function SetControlNormal(inputGroup: number, control: number, amount: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function IsDisabledControlPressed(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function IsDisabledControlJustPressed(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function IsDisabledControlJustReleased(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function GetDisabledControlNormal(inputGroup: number, control: number): void;
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
  export function IsInputDisabled(inputGroup: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function IsInputJustDisabled(inputGroup: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function SetCursorLocation(x: number, y: number): void;
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
  export function GetControlInstructionalButton(inputGroup: number, control: number, p2: NativePlayer): void;
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
  export function SetPadShake(p0: number, duration: number, frequency: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x14D29BB12D47F68C(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function StopPadShake(p0: NativeAny): void;
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
  export function IsLookInverted(): void;
  /**
   *
   */
  export function _0xE1615EC03B3BB4FD(): void;
  /**
   *
   */
  export function GetLocalPlayerAimState(): void;
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
  export function SetPlayerpadShakesWhenControllerDisabled(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function SetInputExclusive(inputGroup: number, control: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function DisableControlAction(inputGroup: number, control: number, disable: NativeBOOL): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function EnableControlAction(inputGroup: number, control: number, enable: NativeBOOL): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function DisableAllControlActions(inputGroup: number): void;
  /**
   *
   * @param {number} inputGroup undefined
   */
  export function EnableAllControlActions(inputGroup: number): void;
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
  export function DisableInputGroup(inputGroup: number): void;
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
  export function LoadUgcFile(filename: string): void;
  /**
   *
   */
  export function DatafileCreate(): void;
  /**
   *
   */
  export function DatafileDelete(): void;
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
  export function DatafileGetFileDict(): void;
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
  export function DatafileIsSavePending(): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueAddBoolean(objectData: NativeAny, key: string, value: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueAddInteger(objectData: NativeAny, key: string, value: number): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueAddFloat(objectData: NativeAny, key: string, value: number): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueAddString(objectData: NativeAny, key: string, value: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueAddVector3(objectData: NativeAny, key: string, valueX: number, valueY: number, valueZ: number): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueAddObject(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueAddArray(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueGetBoolean(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueGetInteger(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueGetFloat(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueGetString(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueGetVector3(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} sCloudFile undefined
   */
  export function ObjectValueGetObject(sCloudFile: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueGetArray(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} objectData undefined
   */
  export function ObjectValueGetType(objectData: NativeAny, key: string): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueAddBoolean(arrayData: NativeAny, value: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueAddInteger(arrayData: NativeAny, value: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueAddFloat(arrayData: NativeAny, value: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueAddString(arrayData: NativeAny, value: string): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueAddVector3(arrayData: NativeAny, valueX: number, valueY: number, valueZ: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueAddObject(arrayData: NativeAny): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueGetBoolean(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueGetInteger(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueGetFloat(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueGetString(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueGetVector3(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueGetObject(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueGetSize(arrayData: NativeAny): void;
  /**
   *
   * @param {NativeAny} arrayData undefined
   */
  export function ArrayValueGetType(arrayData: NativeAny, arrayIndex: number): void;
  /**
   *
   * @param {number} X undefined
   */
  export function StartScriptFire(X: number, Y: number, Z: number, maxChildren: number, isGasFire: NativeBOOL): void;
  /**
   *
   * @param {number} fireHandle undefined
   */
  export function RemoveScriptFire(fireHandle: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function StartEntityFire(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function StopEntityFire(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function IsEntityOnFire(entity: NativeEntity): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetNumberOfFiresInRange(x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function StopFireInRange(x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {NativeVector3} outPosition undefined
   */
  export function GetClosestFirePos(outPosition: NativeVector3, x: number, y: number, z: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function AddExplosion(x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: NativeBOOL, isInvisible: NativeBOOL, cameraShake: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function AddOwnedExplosion(ped: NativePed, x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: NativeBOOL, isInvisible: NativeBOOL, cameraShake: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function AddExplosionWithUserVfx(x: number, y: number, z: number, explosionType: number, explosionFx: NativeHash, damageScale: number, isAudible: NativeBOOL, isInvisible: NativeBOOL, cameraShake: number): void;
  /**
   *
   * @param {number} explosionType undefined
   */
  export function IsExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
  /**
   *
   * @param {number} unk undefined
   */
  export function _0x6070104B699B2EF4(unk: number, PosX1: number, PosY1: number, PosZ1: number, PosX2: number, PosY2: number, PosZ2: number): void;
  /**
   *
   * @param {number} explosionType undefined
   */
  export function IsExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {number} explosionType undefined
   */
  export function IsExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number): void;
  /**
   *
   * @param {number} explosionType undefined
   */
  export function GetPedInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function SetDecisionMaker(ped: NativePed, name: NativeHash): void;
  /**
   *
   * @param {NativeHash} name undefined
   */
  export function ClearDecisionMakerEventResponse(name: NativeHash, type: number): void;
  /**
   *
   * @param {NativeHash} name undefined
   */
  export function BlockDecisionMakerEvent(name: NativeHash, type: number): void;
  /**
   *
   * @param {NativeHash} name undefined
   */
  export function UnblockDecisionMakerEvent(name: NativeHash, type: number): void;
  /**
   *
   * @param {number} type undefined
   */
  export function AddShockingEventAtPosition(type: number, x: number, y: number, z: number, duration: number): void;
  /**
   *
   * @param {number} type undefined
   */
  export function AddShockingEventForEntity(type: number, entity: NativeEntity, duration: number): void;
  /**
   *
   * @param {number} type undefined
   */
  export function IsShockingEventInSphere(type: number, x: number, y: number, z: number, radius: number): void;
  /**
   *
   * @param {NativeScrHandle} event undefined
   */
  export function RemoveShockingEvent(event: NativeScrHandle): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function RemoveAllShockingEvents(p0: NativeBOOL): void;
  /**
   *
   */
  export function RemoveShockingEventSpawnBlockingAreas(): void;
  /**
   *
   */
  export function SuppressShockingEventsNextFrame(): void;
  /**
   *
   * @param {number} type undefined
   */
  export function SuppressShockingEventTypeNextFrame(type: number): void;
  /**
   *
   */
  export function SuppressAgitationEventsNextFrame(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetZoneAtCoords(x: number, y: number, z: number): void;
  /**
   *
   * @param {string} zoneName undefined
   */
  export function GetZoneFromNameId(zoneName: string): void;
  /**
   *
   * @param {number} zoneId undefined
   */
  export function GetZonePopschedule(zoneId: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetNameOfZone(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} zoneId undefined
   */
  export function SetZoneEnabled(zoneId: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} zoneId undefined
   */
  export function GetZoneScumminess(zoneId: number): void;
  /**
   *
   * @param {number} scheduleId undefined
   */
  export function OverridePopscheduleVehicleModel(scheduleId: number, vehicleHash: NativeHash): void;
  /**
   *
   * @param {number} scheduleId undefined
   */
  export function ClearPopscheduleOverrideVehicleModel(scheduleId: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetHashOfMapAreaAtCoords(x: number, y: number, z: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function AddRope(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, length: number, ropeType: number, maxLength: number, minLength: number, p10: number, p11: NativeBOOL, p12: NativeBOOL, rigid: NativeBOOL, p14: number, breakWhenShot: NativeBOOL, unkPtr: NativeAny): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function DeleteRope(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function DeleteChildRope(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function DoesRopeExist(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function RopeDrawShadowEnabled(rope: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function LoadRopeData(rope: NativeObject, rope_preset: string): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function PinRopeVertex(rope: NativeObject, vertex: number, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function UnpinRopeVertex(rope: NativeObject, vertex: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function GetRopeVertexCount(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function AttachEntitiesToRope(rope: NativeObject, ent1: NativeEntity, ent2: NativeEntity, ent1_x: number, ent1_y: number, ent1_z: number, ent2_x: number, ent2_y: number, ent2_z: number, length: number, p10: NativeBOOL, p11: NativeBOOL, boneName1: string, boneName2: string): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function AttachRopeToEntity(rope: NativeObject, entity: NativeEntity, x: number, y: number, z: number, p5: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function DetachRopeFromEntity(rope: NativeObject, entity: NativeEntity): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function RopeSetUpdatePinverts(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function UpdateRope(rope: NativeObject, update: NativeBOOL): void;
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
  export function GetRopeLastVertexCoord(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function GetRopeVertexCoord(rope: NativeObject, vertex: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function StartRopeWinding(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function StopRopeWinding(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function StartRopeUnwindingFront(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function StopRopeUnwindingFront(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function RopeConvertToSimple(rope: NativeObject): void;
  /**
   *
   */
  export function RopeLoadTextures(): void;
  /**
   *
   */
  export function RopeAreTexturesLoaded(): void;
  /**
   *
   */
  export function RopeUnloadTextures(): void;
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
  export function GetRopeLength(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function RopeForceLength(rope: NativeObject, length: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function RopeResetLength(rope: NativeObject, length: number): void;
  /**
   *
   * @param {number} posX undefined
   */
  export function ApplyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function SetDamping(rope: NativeObject, vertex: number, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function ActivatePhysics(entity: NativeEntity): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function SetCgoffset(rope: NativeObject, x: number, y: number, z: number): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function GetCgoffset(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function SetCgAtBoundcenter(rope: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function BreakEntityGlass(object: NativeObject, posX: number, posY: number, posZ: number, p4: number, offsetX: number, offsetY: number, offsetZ: number, p8: number, p9: number, p10: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} rope undefined
   */
  export function SetDisableBreaking(rope: NativeObject, enabled: NativeBOOL): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function _0xCC6E963682533882(object: NativeObject): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function SetDisableFragDamage(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetWaterHeight(x: number, y: number, z: number, height: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function GetWaterHeightNoWaves(x: number, y: number, z: number, height: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function TestProbeAgainstWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, result: NativeVector3): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function TestProbeAgainstAllWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, unkVector: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function TestVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: NativeAny, height: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function ModifyWater(x: number, y: number, radius: number, height: number): void;
  /**
   *
   * @param {number} xLow undefined
   */
  export function AddCurrentRise(xLow: number, yLow: number, xHigh: number, yHigh: number, height: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function RemoveCurrentRise(p0: number): void;
  /**
   *
   * @param {number} intensity undefined
   */
  export function SetCurrentIntensity(intensity: number): void;
  /**
   *
   */
  export function GetCurrentIntensity(): void;
  /**
   *
   */
  export function ResetCurrentIntensity(): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function StartShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, ent: NativeEntity, p8: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function StartShapeTestRay(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: NativeEntity, p8: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function StartShapeTestBoundingBox(entity: NativeEntity, flags1: number, flags2: number): void;
  /**
   *
   * @param {number} x undefined
   */
  export function StartShapeTestBox(x: number, y: number, z: number, x1: number, y2: number, z2: number, rotX: number, rotY: number, rotZ: number, p9: NativeAny, p10: NativeAny, entity: NativeAny, p12: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function StartShapeTestBound(entity: NativeEntity, flags1: number, flags2: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function StartShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: NativeEntity, p9: number): void;
  /**
   *
   * @param {number} x1 undefined
   */
  export function StartShapeTestCapsule2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: NativeEntity, p9: NativeAny): void;
  /**
   *
   * @param {NativeVector3} pVec1 undefined
   */
  export function StartShapeTestSurroundingCoords(pVec1: NativeVector3, pVec2: NativeVector3, flag: number, entity: NativeEntity, flag2: number): void;
  /**
   *
   * @param {number} rayHandle undefined
   */
  export function GetShapeTestResult(rayHandle: number, hit: NativeBOOL, endCoords: NativeVector3, surfaceNormal: NativeVector3, entityHit: NativeEntity): void;
  /**
   *
   * @param {number} rayHandle undefined
   */
  export function GetShapeTestResultEx(rayHandle: number, hit: NativeBOOL, endCoords: NativeVector3, surfaceNormal: NativeVector3, materialHash: NativeHash, entityHit: NativeEntity): void;
  /**
   *
   * @param {NativeHash} entityHit undefined
   */
  export function ShapeTestResultEntity(entityHit: NativeHash): void;
  /**
   *
   */
  export function NetworkIsSignedIn(): void;
  /**
   *
   */
  export function NetworkIsSignedOnline(): void;
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
  export function NetworkAreRosAvailable(): void;
  /**
   *
   */
  export function NetworkIsPsnAvailable(): void;
  /**
   *
   */
  export function NetworkIsCloudAvailable(): void;
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
  export function NetworkIsHost(): void;
  /**
   *
   */
  export function _0x4237E822315D8BA9(): void;
  /**
   *
   */
  export function NetworkHaveOnlinePrivileges(): void;
  /**
   *
   */
  export function NetworkHasRestrictedProfile(): void;
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
  export function NetworkCanBail(): void;
  /**
   *
   */
  export function NetworkBail(): void;
  /**
   *
   */
  export function _0x283B6062A2C01E9B(): void;
  /**
   *
   * @param {number} loadingState undefined
   */
  export function NetworkCanAccessMultiplayer(loadingState: number): void;
  /**
   *
   */
  export function NetworkIsMultiplayerDisabled(): void;
  /**
   *
   */
  export function NetworkCanEnterMultiplayer(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkSessionEnter(p0: NativeAny, p1: NativeAny, p2: NativeAny, maxPlayers: number, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSessionFriendMatchmaking(p0: number, p1: number, maxPlayers: number, p3: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSessionCrewMatchmaking(p0: number, p1: number, p2: number, maxPlayers: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkSessionActivityQuickmatch(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSessionHost(p0: number, maxPlayers: number, p2: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSessionHostClosed(p0: number, maxPlayers: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSessionHostFriendsOnly(p0: number, maxPlayers: number): void;
  /**
   *
   */
  export function NetworkSessionIsClosedFriends(): void;
  /**
   *
   */
  export function NetworkSessionIsClosedCrew(): void;
  /**
   *
   */
  export function NetworkSessionIsSolo(): void;
  /**
   *
   */
  export function NetworkSessionIsPrivate(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkSessionEnd(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkSessionKickPlayer(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkSessionIsPlayerVotedToKick(player: NativePlayer): void;
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
  export function NetworkSctvSlots(p0: number): void;
  /**
   *
   * @param {number} playerType undefined
   */
  export function NetworkSessionSetMaxPlayers(playerType: number, playerCount: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSessionGetUnk(p0: number): void;
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
  export function NetworkSessionHosted(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkAddFollowers(p0: number, p1: number): void;
  /**
   *
   */
  export function NetworkClearFollowers(): void;
  /**
   *
   * @param {number} hours undefined
   */
  export function NetworkGetServerTime(hours: number, minutes: number, seconds: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x600F8CB31C7AAB6E(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkXAffectsGamers(p0: NativeAny): void;
  /**
   *
   * @param {number} unk undefined
   */
  export function NetworkFindMatchedGamers(unk: number, p1: number, neg1a: number, neg1b: number): void;
  /**
   *
   */
  export function NetworkIsFindingGamers(): void;
  /**
   *
   */
  export function _0xF9B83B77929D8863(): void;
  /**
   *
   */
  export function NetworkGetNumFoundGamers(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetFoundGamer(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function NetworkClearFoundGamers(): void;
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
  export function NetworkIsPlayerAnimationDrawingSynchronized(): void;
  /**
   *
   */
  export function NetworkSessionCancelInvite(): void;
  /**
   *
   */
  export function NetworkSessionForceCancelInvite(): void;
  /**
   *
   */
  export function NetworkHasPendingInvite(): void;
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
  export function NetworkSessionWasInvited(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkSessionGetInviter(networkHandle: number): void;
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
  export function NetworkSuppressInvite(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function NetworkBlockInvites(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xCFEB8AF24FC1D0BB(p0: NativeBOOL): void;
  /**
   *
   */
  export function ServerHandler(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkBlockKickedPlayers(p0: NativeBOOL): void;
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
  export function NetworkSessionHostSinglePlayer(p0: number): void;
  /**
   *
   */
  export function NetworkSessionLeaveSinglePlayer(): void;
  /**
   *
   */
  export function NetworkIsGameInProgress(): void;
  /**
   *
   */
  export function NetworkIsSessionActive(): void;
  /**
   *
   */
  export function NetworkIsInSession(): void;
  /**
   *
   */
  export function NetworkIsSessionStarted(): void;
  /**
   *
   */
  export function NetworkIsSessionBusy(): void;
  /**
   *
   */
  export function NetworkCanSessionEnd(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkSessionMarkVisible(p0: NativeBOOL): void;
  /**
   *
   */
  export function NetworkSessionIsVisible(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkSessionBlockJoinRequests(p0: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSessionChangeSlots(p0: number, p1: NativeBOOL): void;
  /**
   *
   */
  export function _0x53AFD64C6758F2F9(): void;
  /**
   *
   */
  export function NetworkSessionVoiceHost(): void;
  /**
   *
   */
  export function NetworkSessionVoiceLeave(): void;
  /**
   *
   * @param {NativeAny} globalPtr undefined
   */
  export function NetworkVoiceConnectToPlayer(globalPtr: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkSetKeepFocuspoint(p0: NativeBOOL, p1: NativeAny): void;
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
  export function NetworkSendTextMessage(message: string, networkHandle: number): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function NetworkSetActivitySpectator(toggle: NativeBOOL): void;
  /**
   *
   */
  export function NetworkIsActivitySpectator(): void;
  /**
   *
   * @param {number} maxSpectators undefined
   */
  export function NetworkSetActivitySpectatorMax(maxSpectators: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkGetActivityPlayerNum(p0: NativeBOOL): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkIsActivitySpectatorFromHandle(networkHandle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkHostTransition(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkDoTransitionQuickmatch(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkDoTransitionQuickmatchAsync(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkDoTransitionQuickmatchWithGroup(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny, p4: NativeAny, p5: NativeAny): void;
  /**
   *
   */
  export function NetworkJoinGroupActivity(): void;
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
  export function NetworkSetTransitionCreatorHandle(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkClearTransitionCreatorHandle(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkInviteGamersToTransition(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkSetGamerInvitedToTransition(networkHandle: number): void;
  /**
   *
   */
  export function NetworkLeaveTransition(): void;
  /**
   *
   */
  export function NetworkLaunchTransition(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xA2E9C1AB8A92E8CD(p0: NativeBOOL): void;
  /**
   *
   */
  export function NetworkBailTransition(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkDoTransitionToGame(p0: NativeBOOL, maxPlayers: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkDoTransitionToNewGame(p0: NativeBOOL, maxPlayers: number, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkDoTransitionToFreemode(p0: NativeAny, p1: NativeAny, p2: NativeBOOL, players: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkDoTransitionToNewFreemode(p0: NativeAny, p1: NativeAny, players: number, p3: NativeBOOL, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   */
  export function NetworkIsTransitionToGame(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetTransitionMembers(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkApplyTransitionParameter(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xEBEFC2E77084F599(p0: NativeAny, p1: string, p2: NativeBOOL): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkSendTransitionGamerInstruction(networkHandle: number, p1: string, p2: number, p3: number, p4: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkMarkTransitionGamerAsFullyJoined(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkIsTransitionHost(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkIsTransitionHostFromHandle(networkHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkGetTransitionHost(networkHandle: number): void;
  /**
   *
   */
  export function NetworkIsInTransition(): void;
  /**
   *
   */
  export function NetworkIsTransitionStarted(): void;
  /**
   *
   */
  export function NetworkIsTransitionBusy(): void;
  /**
   *
   */
  export function NetworkIsTransitionMatchmaking(): void;
  /**
   *
   */
  export function _0xC571D0E77D8BBC29(): void;
  /**
   *
   */
  export function NetworkOpenTransitionMatchmaking(): void;
  /**
   *
   */
  export function NetworkCloseTransitionMatchmaking(): void;
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
  export function NetworkSetTransitionActivityId(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkChangeTransitionSlots(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x973D76AA760A6CB6(p0: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkHasPlayerStartedTransition(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkAreTransitionDetailsValid(p0: NativeAny): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkJoinTransition(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkHasInvitedGamerToTransition(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x3F9990BF5F22759C(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkIsActivitySession(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkBlockInvites2(p0: NativeBOOL): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkSendPresenceInvite(networkHandle: number, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkSendPresenceTransitionInvite(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
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
  export function NetworkGetNumPresenceInvites(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkAcceptPresenceInvite(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkRemovePresenceInvite(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetPresenceInviteId(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetPresenceInviteInviter(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetPresenceInviteHandle(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetPresenceInviteSessionId(p0: NativeAny): void;
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
  export function NetworkAnalPurple777(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkHasFollowInvite(): void;
  /**
   *
   */
  export function NetworkActionFollowInvite(): void;
  /**
   *
   */
  export function NetworkClearFollowInvite(): void;
  /**
   *
   */
  export function _0xEBF8284D8CADEB53(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkRemoveTransitionInvite(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkRemoveAllTransitionInvite(): void;
  /**
   *
   */
  export function _0xF083835B70BA9BFE(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkInviteGamers(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkHasInvitedGamer(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetCurrentlySelectedGamerHandleFromInviteMenu(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkSetCurrentlySelectedGamerHandleFromInviteMenu(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x66F010A4B031A331(p0: NativeAny): void;
  /**
   *
   * @param {NativePlayer} p0 undefined
   */
  export function PocakGay(p0: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x0D77A82DC2D0DA59(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function FilloutPmPlayerList(networkHandle: number, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function FilloutPmPlayerListWithNames(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function UsingNetworkWeapontype(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkCheckDataManagerForHandle(p0: NativeAny): void;
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
  export function NetworkIsChattingInPlatformParty(networkHandle: number): void;
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
  export function NetworkGetRandomInt(): void;
  /**
   *
   * @param {number} rangeStart undefined
   */
  export function NetworkGetRandomIntInRange(rangeStart: number, rangeEnd: number): void;
  /**
   *
   */
  export function NetworkPlayerIsCheater(): void;
  /**
   *
   */
  export function NetworkPlayerIsUnk(): void;
  /**
   *
   */
  export function NetworkPlayerIsBadsport(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkIsPlayerInScript(player: NativePlayer, p1: number, scriptHash: NativeHash): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function BadSportPlayerLeftDetected(networkHandle: number, event: number, amountReceived: number): void;
  /**
   *
   * @param {NativeEntity} p0 undefined
   */
  export function _0xE66C690248F11150(p0: NativeEntity, p1: NativeAny): void;
  /**
   *
   * @param {number} lobbySize undefined
   */
  export function NetworkSetThisScriptIsNetworkScript(lobbySize: number, p1: NativeBOOL, playerId: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkIsThisScriptMarked(p0: NativeAny, p1: NativeBOOL, p2: NativeAny): void;
  /**
   *
   */
  export function NetworkGetThisScriptIsNetworkScript(): void;
  /**
   *
   */
  export function NetworkGetNumParticipantsHost(): void;
  /**
   *
   */
  export function NetworkGetNumParticipants(): void;
  /**
   *
   */
  export function NetworkGetScriptStatus(): void;
  /**
   *
   * @param {number} vars undefined
   */
  export function NetworkRegisterHostBroadcastVariables(vars: number, sizeofVars: number): void;
  /**
   *
   * @param {number} vars undefined
   */
  export function NetworkRegisterPlayerBroadcastVariables(vars: number, numVars: number): void;
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
  export function NetworkGetPlayerIndex(player: NativePlayer): void;
  /**
   *
   * @param {number} index undefined
   */
  export function NetworkGetParticipantIndex(index: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function NetworkGetPlayerIndexFromPed(ped: NativePed): void;
  /**
   *
   */
  export function NetworkGetNumConnectedPlayers(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkIsPlayerConnected(player: NativePlayer): void;
  /**
   *
   */
  export function _0xCF61D4B4702EE9EB(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkIsParticipantActive(p0: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkIsPlayerActive(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkIsPlayerAParticipant(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkIsHostOfThisScript(): void;
  /**
   *
   */
  export function NetworkGetHostOfThisScript(): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function NetworkGetHostOfScript(scriptName: string, p1: number, p2: number): void;
  /**
   *
   */
  export function NetworkSetMissionFinished(): void;
  /**
   *
   * @param {string} scriptName undefined
   */
  export function NetworkIsScriptActive(scriptName: string, player: NativePlayer, p2: NativeBOOL, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetNumScriptParticipants(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   */
  export function NetworkGetPlayerPedFromIndex(): void;
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
  export function ParticipantId(): void;
  /**
   *
   */
  export function ParticipantIdToInt(): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function NetworkGetDestroyerOfNetworkId(netId: number, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetDesroyerOfEntity(p0: NativeAny, p1: NativeAny, weaponHash: NativeHash): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkGetEntityKillerOfPlayer(player: NativePlayer, weaponHash: NativeHash): void;
  /**
   *
   * @param {number} x undefined
   */
  export function NetworkResurrectLocalPlayer(x: number, y: number, z: number, heading: number, unk: NativeBOOL, changetime: NativeBOOL): void;
  /**
   *
   * @param {number} time undefined
   */
  export function NetworkSetLocalPlayerInvincibleTime(time: number): void;
  /**
   *
   */
  export function NetworkIsLocalPlayerInvincible(): void;
  /**
   *
   * @param {number} player undefined
   */
  export function NetworkDisableInvincibleFlashing(player: number, p1: NativeBOOL): void;
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
  export function NetworkGetNetworkIdFromEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function NetworkGetEntityFromNetworkId(netId: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkGetEntityIsNetworked(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkGetEntityIsLocal(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkRegisterEntityAsNetworked(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkUnregisterNetworkedEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} netID undefined
   */
  export function NetworkDoesNetworkIdExist(netID: number): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function NetworkDoesEntityExistWithNetworkId(netId: number): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function NetworkRequestControlOfNetworkId(netId: number): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function NetworkHasControlOfNetworkId(netId: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkRequestControlOfEntity(entity: NativeEntity): void;
  /**
   *
   * @param {number} doorID undefined
   */
  export function NetworkRequestControlOfDoor(doorID: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkHasControlOfEntity(entity: NativeEntity): void;
  /**
   *
   * @param {NativePickup} pickup undefined
   */
  export function NetworkHasControlOfPickup(pickup: NativePickup): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function NetworkHasControlOfDoor(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} doorHash undefined
   */
  export function NetworkHasControlOfPavementStats(doorHash: NativeHash): void;
  /**
   *
   * @param {NativeVehicle} vehicle undefined
   */
  export function VehToNet(vehicle: NativeVehicle): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function PedToNet(ped: NativePed): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function ObjToNet(object: NativeObject): void;
  /**
   *
   * @param {number} netHandle undefined
   */
  export function NetToVeh(netHandle: number): void;
  /**
   *
   * @param {number} netHandle undefined
   */
  export function NetToPed(netHandle: number): void;
  /**
   *
   * @param {number} netHandle undefined
   */
  export function NetToObj(netHandle: number): void;
  /**
   *
   * @param {number} netHandle undefined
   */
  export function NetToEnt(netHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkGetLocalHandle(networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {string} userId undefined
   */
  export function NetworkHandleFromUserId(userId: string, networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {string} memberId undefined
   */
  export function NetworkHandleFromMemberId(memberId: string, networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkHandleFromPlayer(player: NativePlayer, networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkHashFromPlayerHandle(player: NativePlayer): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkHashFromGamerHandle(networkHandle: number): void;
  /**
   *
   * @param {NativePlayer} friendIndex undefined
   */
  export function NetworkHandleFromFriend(friendIndex: NativePlayer, networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkGamertagFromHandleStart(networkHandle: number): void;
  /**
   *
   */
  export function NetworkGamertagFromHandlePending(): void;
  /**
   *
   */
  export function NetworkGamertagFromHandleSucceeded(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkGetGamertagFromHandle(networkHandle: number): void;
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
  export function NetworkAreHandlesTheSame(netHandle1: number, netHandle2: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkIsHandleValid(networkHandle: number, bufferSize: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkGetPlayerFromGamerHandle(networkHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkMemberIdFromGamerHandle(networkHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkIsGamerInMySession(networkHandle: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkShowProfileUi(networkHandle: number): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkPlayerGetName(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkPlayerGetUserid(player: NativePlayer, userID: string): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkPlayerIsRockstarDev(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkPlayerSomething(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkIsInactiveProfile(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkGetMaxFriends(): void;
  /**
   *
   */
  export function NetworkGetFriendCount(): void;
  /**
   *
   * @param {number} friendIndex undefined
   */
  export function NetworkGetFriendName(friendIndex: number): void;
  /**
   *
   * @param {number} friendIndex undefined
   */
  export function NetworkGetFriendNameFromIndex(friendIndex: number): void;
  /**
   *
   * @param {string} name undefined
   */
  export function NetworkIsFriendOnline(name: string): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkIsFriendOnline2(networkHandle: number): void;
  /**
   *
   * @param {string} friendName undefined
   */
  export function NetworkIsFriendInSameTitle(friendName: string): void;
  /**
   *
   * @param {string} friendName undefined
   */
  export function NetworkIsFriendInMultiplayer(friendName: string): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkIsFriend(networkHandle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkIsPendingFriend(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkIsAddingFriend(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkAddFriend(networkHandle: number, message: string): void;
  /**
   *
   * @param {number} friendIndex undefined
   */
  export function NetworkIsFriendIndexOnline(friendIndex: number): void;
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
  export function NetworkCanSetWaypoint(): void;
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
  export function NetworkHasHeadset(): void;
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
  export function NetworkGamerHasHeadset(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkIsGamerTalking(p0: number): void;
  /**
   *
   * @param {number} player undefined
   */
  export function NetworkCanCommunicateWithGamer(player: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkIsGamerMutedByMe(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkAmIMutedByGamer(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkIsGamerBlockedByMe(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkAmIBlockedByGamer(p0: NativeAny): void;
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
  export function NetworkIsPlayerTalking(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkPlayerHasHeadset(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkIsPlayerMutedByMe(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkAmIMutedByPlayer(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkIsPlayerBlockedByMe(player: NativePlayer): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkAmIBlockedByPlayer(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetPlayerLoudness(p0: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSetTalkerProximity(p0: number): void;
  /**
   *
   */
  export function NetworkGetTalkerProximity(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function NetworkSetVoiceActive(toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0xCFEB46DCD7D8D5EB(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkOverrideTransitionChat(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function NetworkSetTeamOnlyChat(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} team undefined
   */
  export function _0x6F697A66CE78674E(team: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function NetworkSetOverrideSpectatorMode(toggle: NativeBOOL): void;
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
  export function NetworkOverrideChatRestrictions(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkOverrideSendRestrictions(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkChatMute(p0: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkOverrideReceiveRestrictions(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function _0x0FF2862B61A58AF9(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkSetVoiceChannel(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkClearVoiceChannel(): void;
  /**
   *
   * @param {number} x undefined
   */
  export function IsNetworkVehicleBeenDamagedByAnyObject(x: number, y: number, z: number): void;
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
  export function NetworkIsTextChatActive(): void;
  /**
   *
   */
  export function ShutdownAndLaunchSinglePlayerGame(): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function NetworkSetFriendlyFireOption(toggle: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSetRichPresence(p0: number, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkSetRichPresence2(p0: number, gxtLabel: string): void;
  /**
   *
   */
  export function NetworkGetTimeoutTime(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkRespawnCoords(player: NativePlayer, x: number, y: number, z: number, p4: NativeBOOL, p5: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkRespawnPlayer(player: NativePlayer, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function _0x715135F4B82AC90D(entity: NativeEntity): void;
  /**
   *
   */
  export function NetworkPlayerIsInClan(): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkClanPlayerIsActive(networkHandle: number): void;
  /**
   *
   * @param {number} clanDesc undefined
   */
  export function NetworkClanPlayerGetDesc(clanDesc: number, bufferSize: number, networkHandle: number): void;
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
  export function GetNumMembershipDesc(): void;
  /**
   *
   * @param {number} memberDesc undefined
   */
  export function NetworkClanGetMembershipDesc(memberDesc: number, p1: number): void;
  /**
   *
   * @param {number} networkHandle undefined
   */
  export function NetworkClanDownloadMembership(networkHandle: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkClanDownloadMembershipPending(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkIsClanMembershipFinishedDownloading(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkClanRemoteMembershipsAreInCache(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkClanGetMembershipCount(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkClanGetMembershipValid(p0: number, p1: NativeAny): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkClanGetMembership(p0: number, clanMembership: number, p2: number): void;
  /**
   *
   * @param {number} clanDesc undefined
   */
  export function NetworkClanJoin(clanDesc: number): void;
  /**
   *
   * @param {string} animDict undefined
   */
  export function NetworkClanAnimation(animDict: string, animName: string): void;
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
  export function NetworkGetPlayerCrewEmblemTxdName(player: NativePlayer, p1: NativeAny): void;
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
  export function NetworkGetPrimaryClanDataClear(): void;
  /**
   *
   */
  export function NetworkGetPrimaryClanDataCancel(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetPrimaryClanDataStart(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   */
  export function NetworkGetPrimaryClanDataPending(): void;
  /**
   *
   */
  export function NetworkGetPrimaryClanDataSuccess(): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetPrimaryClanDataNew(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function SetNetworkIdCanMigrate(netId: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function SetNetworkIdExistsOnAllMachines(netId: number, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function SetNetworkIdSyncToPlayer(netId: number, player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkSetEntityCanBlend(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkSetEntityInvisibleToNetwork(entity: NativeEntity, toggle: NativeBOOL): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function SetNetworkIdVisibleInCutscene(netId: number, p1: NativeBOOL, p2: NativeBOOL): void;
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
  export function NetworkCanNetworkIdBeSeen(netId: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetLocalPlayerVisibleInCutscene(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetLocalPlayerInvisibleLocally(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function SetLocalPlayerVisibleLocally(p0: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerInvisibleLocally(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function SetPlayerVisibleLocally(player: NativePlayer, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function FadeOutLocalPlayer(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkFadeOutEntity(entity: NativeEntity, normal: NativeBOOL, slow: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkFadeInEntity(entity: NativeEntity, state: NativeBOOL): void;
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
  export function IsPlayerInCutscene(player: NativePlayer): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetEntityVisibleInCutscene(p0: NativeAny, p1: NativeBOOL, p2: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityLocallyInvisible(entity: NativeEntity): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function SetEntityLocallyVisible(entity: NativeEntity): void;
  /**
   *
   * @param {number} netID undefined
   */
  export function IsDamageTrackerActiveOnNetworkId(netID: number): void;
  /**
   *
   * @param {number} netID undefined
   */
  export function ActivateDamageTrackerOnNetworkId(netID: number, p1: NativeBOOL): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function IsSphereVisibleToPlayer(p0: NativeAny, p1: number, p2: number, p3: number, p4: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function ReserveNetworkMissionObjects(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function ReserveNetworkMissionPeds(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function ReserveNetworkMissionVehicles(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function CanRegisterMissionObjects(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function CanRegisterMissionPeds(amount: number): void;
  /**
   *
   * @param {number} amount undefined
   */
  export function CanRegisterMissionVehicles(amount: number): void;
  /**
   *
   * @param {number} ped_amt undefined
   */
  export function CanRegisterMissionEntities(ped_amt: number, vehicle_amt: number, object_amt: number, pickup_amt: number): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function GetNumReservedMissionObjects(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function GetNumReservedMissionPeds(p0: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function GetNumReservedMissionVehicles(p0: NativeBOOL): void;
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
  export function GetNetworkTime(): void;
  /**
   *
   */
  export function _0x89023FBBF9200E9F(): void;
  /**
   *
   */
  export function HasNetworkTimeStarted(): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function GetTimeOffset(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function IsTimeLessThan(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function IsTimeMoreThan(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function IsTimeEqualTo(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} timeA undefined
   */
  export function GetTimeDifference(timeA: number, timeB: number): void;
  /**
   *
   * @param {number} time undefined
   */
  export function GetTimeAsString(time: number): void;
  /**
   *
   * @param {number} unixEpoch undefined
   */
  export function GetDateAndTimeFromUnixEpoch(unixEpoch: number, timeStructure: NativeAny): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function NetworkSetInSpectatorMode(toggle: NativeBOOL, playerPed: NativePed): void;
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
  export function NetworkIsInSpectatorMode(): void;
  /**
   *
   * @param {NativeBOOL} p0 undefined
   */
  export function NetworkSetInMpCutscene(p0: NativeBOOL, p1: NativeBOOL): void;
  /**
   *
   */
  export function NetworkIsInMpCutscene(): void;
  /**
   *
   * @param {NativePlayer} player undefined
   */
  export function NetworkIsPlayerInMpCutscene(player: NativePlayer): void;
  /**
   *
   * @param {number} netId undefined
   */
  export function SetNetworkVehicleRespotTimer(netId: number, time: number): void;
  /**
   *
   * @param {NativeObject} object undefined
   */
  export function SetNetworkObjectNonContact(object: NativeObject, toggle: NativeBOOL): void;
  /**
   *
   * @param {NativeBOOL} toggle undefined
   */
  export function UsePlayerColourInsteadOfTeamColour(toggle: NativeBOOL): void;
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
  export function NetworkCreateSynchronisedScene(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p6: number, p7: number, p8: number, p9: number): void;
  /**
   *
   * @param {NativePed} ped undefined
   */
  export function NetworkAddPedToSynchronisedScene(ped: NativePed, netScene: number, animDict: string, animName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function NetworkAddEntityToSynchronisedScene(entity: NativeEntity, netScene: number, animDict: string, animName: string, speed: number, speedMulitiplier: number, flag: number): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function NetworkForceLocalUseOfSyncedSceneCamera(netScene: number, animDict: string, animName: string): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function NetworkAttachSynchronisedSceneToEntity(netScene: number, entity: NativeEntity, bone: number): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function NetworkStartSynchronisedScene(netScene: number): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function NetworkStopSynchronisedScene(netScene: number): void;
  /**
   *
   * @param {number} netScene undefined
   */
  export function NetworkConvertSynchronisedSceneToSynchronizedScene(netScene: number): void;
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
  export function NetworkGetRespawnResult(randomInt: number, coordinates: NativeVector3, heading: number): void;
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
  export function NetworkEndTutorialSession(): void;
  /**
   *
   */
  export function NetworkIsInTutorialSession(): void;
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
  export function NetworkIsPlayerEqualToIndex(player: NativePlayer, index: number): void;
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
  export function NetworkOverrideClockTime(Hours: number, Minutes: number, Seconds: number): void;
  /**
   *
   */
  export function NetworkClearClockTimeOverride(): void;
  /**
   *
   */
  export function NetworkIsClockTimeOverridden(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkAddEntityArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function NetworkAddEntityAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x25B99872D588A101(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkRemoveEntityArea(p0: NativeAny): void;
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
  export function NetworkSetNetworkIdDynamic(netID: number, toggle: NativeBOOL): void;
  /**
   *
   */
  export function NetworkRequestCloudBackgroundScripts(): void;
  /**
   *
   */
  export function HasBgScriptBeenDownloaded(): void;
  /**
   *
   */
  export function NetworkRequestCloudTunables(): void;
  /**
   *
   */
  export function HasTunablesBeenDownloaded(): void;
  /**
   *
   */
  export function _0x10BD227A753B0D84(): void;
  /**
   *
   * @param {string} tunableContext undefined
   */
  export function NetworkDoesTunableExist(tunableContext: string, tunableName: string): void;
  /**
   *
   * @param {string} tunableContext undefined
   */
  export function NetworkAccessTunableInt(tunableContext: string, tunableName: string, value: number): void;
  /**
   *
   * @param {string} tunableContext undefined
   */
  export function NetworkAccessTunableFloat(tunableContext: string, tunableName: string, value: number): void;
  /**
   *
   * @param {string} tunableContext undefined
   */
  export function NetworkAccessTunableBool(tunableContext: string, tunableName: string): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function NetworkDoesTunableExistHash(tunableContext: NativeHash, tunableName: NativeHash): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function NetworkAccessTunableIntHash(tunableContext: NativeHash, tunableName: NativeHash, value: number): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function NetworkAccessTunableFloatHash(tunableContext: NativeHash, tunableName: NativeHash, value: number): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function NetworkAccessTunableBoolHash(tunableContext: NativeHash, tunableName: NativeHash): void;
  /**
   *
   * @param {NativeHash} tunableContext undefined
   */
  export function NetworkAccessTunableBoolHashFailVal(tunableContext: NativeHash, tunableName: NativeHash, defaultValue: NativeBOOL): void;
  /**
   *
   * @param {NativeHash} contentHash undefined
   */
  export function GetTunablesContentModifierId(contentHash: NativeHash): void;
  /**
   *
   */
  export function _0x7DB53B37A2F211A0(): void;
  /**
   *
   */
  export function NetworkResetBodyTracker(): void;
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
  export function NetworkExplodeVehicle(vehicle: NativeVehicle, isAudible: NativeBOOL, isInvisible: NativeBOOL, p3: NativeBOOL): void;
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
  export function NetworkSetPropertyId(p0: NativeAny): void;
  /**
   *
   */
  export function NetworkClearPropertyId(): void;
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
  export function NetworkCopyPedBlendData(ped: NativePed, player: NativePlayer): void;
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
  export function SetStoreEnabled(toggle: NativeBOOL): void;
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
  export function DownloadCheck(): void;
  /**
   *
   */
  export function _0xC7ABAC5DE675EE3B(): void;
  /**
   *
   */
  export function NetworkEnableMotionDrugged(): void;
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
  export function SetBalanceAddMachine(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function SetBalanceAddMachines(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA7862BC5ED1DFD7E(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function NetworkGetBackgroundLoadingRecipients(p0: NativeAny, p1: NativeAny, p2: NativeAny, p3: NativeAny): void;
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
  export function GetPlayerAdvancedModifierPrivileges(p0: number): void;
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
  export function GetContentCategory(p0: number): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetContentId(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetRootContentId(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xBF09786A7FCAB582(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetContentDescriptionHash(p0: NativeAny): void;
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
  export function GetContentFileVersion(p0: NativeAny, p1: NativeAny): void;
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
  export function FacebookSetHeistComplete(heistName: string, cashEarned: number, xpEarned: number): void;
  /**
   *
   */
  export function FacebookSetCreateCharacterComplete(): void;
  /**
   *
   * @param {number} milestoneId undefined
   */
  export function FacebookSetMilestoneComplete(milestoneId: number): void;
  /**
   *
   */
  export function FacebookIsSendingData(): void;
  /**
   *
   */
  export function FacebookDoUnkCheck(): void;
  /**
   *
   */
  export function FacebookIsAvailable(): void;
  /**
   *
   * @param {number} PlayerHandle undefined
   */
  export function TextureDownloadRequest(PlayerHandle: number, FilePath: string, Name: string, p3: NativeBOOL): void;
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
  export function TextureDownloadRelease(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function TextureDownloadHasFailed(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function TextureDownloadGetName(p0: number): void;
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
  export function NetworkIsCableConnected(): void;
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
  export function IsRockstarBanned(): void;
  /**
   *
   */
  export function IsSocialclubBanned(): void;
  /**
   *
   */
  export function CanPlayOnline(): void;
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
  export function NetworkUpdatePlayerScars(): void;
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
  export function GetNumDecorations(character: number): void;
  /**
   *
   * @param {number} character undefined
   */
  export function _0xFF56381874F82086(character: number, p1: number, outComponent: number): void;
  /**
   *
   * @param {number} outComponent undefined
   */
  export function InitShopPedComponent(outComponent: number): void;
  /**
   *
   * @param {number} outProp undefined
   */
  export function InitShopPedProp(outProp: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function _0x50F457823CE6EB5F(p0: number, p1: number, p2: number, p3: number): void;
  /**
   *
   * @param {number} character undefined
   */
  export function GetNumPropsFromOutfit(character: number, p1: number, p2: number, p3: NativeBOOL, p4: number, componentId: number): void;
  /**
   *
   * @param {number} componentId undefined
   */
  export function GetShopPedQueryComponent(componentId: number, outComponent: number): void;
  /**
   *
   * @param {NativeHash} p0 undefined
   */
  export function GetShopPedComponent(p0: NativeHash, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetShopPedQueryProp(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x5D5CAFF661DDF6FC(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetHashNameForComponent(entity: NativeEntity, componentId: number, drawableVariant: number, textureVariant: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function GetHashNameForProp(entity: NativeEntity, componentId: number, propIndex: number, propTextureIndex: number): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function _0xC17AD0E5752BECDA(componentHash: NativeHash): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function GetVariantComponent(componentHash: NativeHash, componentId: number, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function GetNumForcedComponents(componentHash: NativeHash): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0x017568A8182D98A6(p0: NativeAny): void;
  /**
   *
   * @param {NativeHash} componentHash undefined
   */
  export function GetForcedComponent(componentHash: NativeHash, componentId: number, p2: NativeAny, p3: NativeAny, p4: NativeAny): void;
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
  export function GetShopPedQueryOutfit(p0: NativeAny, outfit: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetShopPedOutfit(p0: NativeAny, p1: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function GetShopPedOutfitLocate(p0: NativeAny): void;
  /**
   *
   * @param {NativeAny} p0 undefined
   */
  export function _0xA9F9C2E0FDE11CBB(p0: NativeAny, p1: NativeAny, p2: NativeAny): void;
  /**
   *
   * @param {NativeAny} outfit undefined
   */
  export function GetPropFromOutfit(outfit: NativeAny, slot: number, item: NativeAny): void;
  /**
   *
   */
  export function GetNumDlcVehicles(): void;
  /**
   *
   * @param {number} dlcVehicleIndex undefined
   */
  export function GetDlcVehicleModel(dlcVehicleIndex: number): void;
  /**
   *
   * @param {number} dlcVehicleIndex undefined
   */
  export function GetDlcVehicleData(dlcVehicleIndex: number, outData: number): void;
  /**
   *
   * @param {number} dlcVehicleIndex undefined
   */
  export function GetDlcVehicleFlags(dlcVehicleIndex: number): void;
  /**
   *
   */
  export function GetNumDlcWeapons(): void;
  /**
   *
   * @param {number} dlcWeaponIndex undefined
   */
  export function GetDlcWeaponData(dlcWeaponIndex: number, outData: number): void;
  /**
   *
   * @param {number} dlcWeaponIndex undefined
   */
  export function GetNumDlcWeaponComponents(dlcWeaponIndex: number): void;
  /**
   *
   * @param {number} dlcWeaponIndex undefined
   */
  export function GetDlcWeaponComponentData(dlcWeaponIndex: number, dlcWeapCompIndex: number, ComponentDataPtr: NativeAny): void;
  /**
   *
   * @param {NativeAny} dlcData undefined
   */
  export function IsDlcDataEmpty(dlcData: NativeAny): void;
  /**
   *
   * @param {NativeAny} modData undefined
   */
  export function IsDlcVehicleMod(modData: NativeAny): void;
  /**
   *
   * @param {number} modData undefined
   */
  export function _0xC098810437312FFF(modData: number): void;
  /**
   *
   * @param {NativeHash} dlcHash undefined
   */
  export function IsDlcPresent(dlcHash: NativeHash): void;
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
  export function GetIsLoadingScreenActive(): void;
  /**
   *
   * @param {NativeAny} variable undefined
   */
  export function Nullify(variable: NativeAny, unused: NativeAny): void;
  /**
   *
   */
  export function _0xD7C10C4A637992C9(): void;
  /**
   *
   */
  export function LoadMpDlcMaps(): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DecorSetTime(entity: NativeEntity, propertyName: string, timestamp: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DecorSetBool(entity: NativeEntity, propertyName: string, value: NativeBOOL): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DecorSetFloat(entity: NativeEntity, propertyName: string, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DecorSetInt(entity: NativeEntity, propertyName: string, value: number): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DecorGetBool(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DecorGetFloat(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DecorGetInt(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DecorExistOn(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {NativeEntity} entity undefined
   */
  export function DecorRemove(entity: NativeEntity, propertyName: string): void;
  /**
   *
   * @param {string} propertyName undefined
   */
  export function DecorRegister(propertyName: string, type: number): void;
  /**
   *
   * @param {string} propertyName undefined
   */
  export function DecorIsRegisteredAsType(propertyName: string, type: number): void;
  /**
   *
   */
  export function DecorRegisterLock(): void;
  /**
   *
   */
  export function _0x241FCA5B1AA14F75(): void;
  /**
   *
   */
  export function GetTotalScInboxIds(): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function ScInboxMessageInit(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function IsScInboxValid(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function ScInboxMessagePop(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function ScInboxMessageGetDataInt(p0: number, context: string, out: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function ScInboxMessageGetDataBool(p0: number, p1: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function ScInboxMessageGetDataString(p0: number, context: string, out: string): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function ScInboxMessagePush(p0: number): void;
  /**
   *
   * @param {number} p0 undefined
   */
  export function ScInboxMessageGetString(p0: number): void;
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
  export function ScInboxMessageGetUgcdata(p0: NativeAny, p1: NativeAny): void;
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
  export function ScInboxGetEmails(offset: number, limit: number): void;
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
  export function ScEmailMessagePushGamerToRecipList(player: NativePlayer): void;
  /**
   *
   */
  export function ScEmailMessageClearRecipList(): void;
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
  export function ScStartCheckStringTask(string: string, taskHandle: number): void;
  /**
   *
   * @param {number} taskHandle undefined
   */
  export function ScHasCheckStringTaskCompleted(taskHandle: number): void;
  /**
   *
   * @param {number} taskHandle undefined
   */
  export function ScGetCheckStringStatus(taskHandle: number): void;
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
  export function InfamousByEnough007Bitch(): void;
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
  export function IsInLoadingScreen(p0: NativeBOOL): void;
  /**
   *
   */
  export function IsUiLoadingMultiplayer(): void;
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
  export function GetCurrentLanguageId(): void;
  /**
   *
   */
  export function GetUserLanguageId(): void;
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
  export function StartRecording(mode: number): void;
  /**
   *
   */
  export function StopRecordingAndSaveClip(): void;
  /**
   *
   */
  export function StopRecordingAndDiscardClip(): void;
  /**
   *
   */
  export function _0x644546EC5287471B(): void;
  /**
   *
   */
  export function IsRecording(): void;
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
  export function IsInteriorRenderingDisabled(): void;
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
  export function ResetEditorValues(): void;
  /**
   *
   */
  export function ActivateRockstarEditor(): void;
  /**
   *
   */
  export function GetOnlineVersion(): void;
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
