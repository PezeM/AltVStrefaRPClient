import * as game from 'natives';

export default class Camera {
  camera: number;
  constructor(name: string, position: Vector3, rotation: Vector3, fov: number) {
    this.camera = game.createCam(name, true);
    game.setCamCoord(this.camera, position.x, position.y, position.z);
    game.setCamRot(this.camera, rotation.x, rotation.y, rotation.z, 2);
    game.setCamFov(this.camera, fov);
  }

  attachCamToEntity(entity: number, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean) {
    game.attachCamToEntity(this.camera, entity, xOffset, yOffset, zOffset, isRelative);
  }

  attachCamToPedBone(ped: number, boneIndex: number, x: number, y: number, z: number, heading: boolean) {
    game.attachCamToPedBone(this.camera, ped, boneIndex, x, y, z, heading);
  }

  destroy(thisScriptCheck: boolean) {
    game.destroyCam(this.camera, thisScriptCheck);
  }

  detachCam() {
    game.detachCam(this.camera);
  }

  doesExist() {
    return game.doesCamExist(this.camera);
  }

  getAnimCurrentPhase() {
    return game.getCamAnimCurrentPhase(this.camera);
  }

  getCoord() {
    return game.getCamCoord(this.camera);
  }

  getFarClip() {
    return game.getCamFarClip(this.camera);
  }

  getFarDof() {
    return game.getCamFarDof(this.camera);
  }

  getFov() {
    return game.getCamFov(this.camera);
  }

  getNearClip() {
    return game.getCamNearClip(this.camera);
  }

  getRot(rotationOrder: number) {
    return game.getCamRot(this.camera, rotationOrder);
  }

  getSplineNodeIndex() {
    return game.getCamSplineNodeIndex(this.camera);
  }

  getSplinePhase() {
    return game.getCamSplinePhase(this.camera);
  }

  isActive() {
    return game.isCamActive(this.camera);
  }

  isInterpolating() {
    return game.isCamInterpolating(this.camera);
  }

  isPlayingAnim(animName: string, animDictionary: string) {
    return game.isCamPlayingAnim(this.camera, animName, animDictionary);
  }

  isRendering() {
    return game.isCamRendering(this.camera);
  }

  isShaking() {
    return game.isCamShaking(this.camera);
  }

  playAnim(animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p9: boolean, p10: number) {
    game.playCamAnim(this.camera, animName, animDictionary, x, y, z, xRot, yRot, zRot, p9, p10);
  }

  pointAtCoord(x: number, y: number, z: number) {
    game.pointCamAtCoord(this.camera, x, y, z);
  }

  pointAtEntity(entity: number, x: number, y: number, z: number, p5: boolean) {
    game.pointCamAtEntity(this.camera, entity, x, y, z, p5);
  }

  pointAtPedBone(ped: number, boneIndex: number, x: number, y: number, z: number, p6: boolean) {
    game.pointCamAtPedBone(this.camera, ped, boneIndex, x, y, z, p6);
  }

  setActive(active: boolean) {
    game.setCamActive(this.camera, active);
  }

  setActiveWithInterp(camFrom: number, duration: number, easeLocation: number, easeRotation: number) {
    game.setCamActiveWithInterp(this.camera, camFrom, duration, easeLocation, easeRotation);
  }

  setAffectsAiming(toggle: boolean) {
    game.setCamAffectsAiming(this.camera, toggle);
  }

  setAnimCurrentPhase(phase: number) {
    game.setCamAnimCurrentPhase(this.camera, phase);
  }

  setCoord(x: number, y: number, z: number) {
    game.setCamCoord(this.camera, x, y, z);
  }

  setDebugName(name: string) {
    game.setCamDebugName(this.camera, name);
  }

  setDofFnumberOfLens(p1: number) {
    game.setCamDofFnumberOfLens(this.camera, p1);
  }

  setDofFocusDistanceBias(p1: number) {
    game.setCamDofFocusDistanceBias(this.camera, p1);
  }

  setDofMaxNearInFocusDistance(p1: number) {
    game.setCamDofMaxNearInFocusDistance(this.camera, p1);
  }

  setDofMaxNearInFocusDistanceBlendLevel(p1: number) {
    game.setCamDofMaxNearInFocusDistanceBlendLevel(this.camera, p1);
  }

  setDofPlanes(p1: number, p2: number, p3: number, p4: number) {
    game.setCamDofPlanes(this.camera, p1, p2, p3, p4);
  }

  setFarClip(farClip: number) {
    game.setCamFarClip(this.camera, farClip);
  }

  setDofStrength(dofStrength: number) {
    game.setCamDofStrength(this.camera, dofStrength);
  }

  setFarDof(farDOF: number) {
    game.setCamFarDof(this.camera, farDOF);
  }

  setFov(fieldOfView: number) {
    game.setCamFov(this.camera, fieldOfView);
  }

  setInheritRollVehicle(p1: boolean) {
    game.setCamInheritRollVehicle(this.camera, p1);
  }

  setMotionBlurStrength(strength: number) {
    game.setCamMotionBlurStrength(this.camera, strength);
  }

  setNearClip(nearClip: number) {
    game.setCamNearClip(this.camera, nearClip);
  }

  setNearDof(nearDOF: number) {
    game.setCamNearDof(this.camera, nearDOF);
  }

  setParams(x: number, y: number, z: number, rx: number, ry: number, rz: number, fov: number, duration: number, p9: number, p10: number, p11: number) {
    game.setCamParams(this.camera, x, y, z, rx, ry, rz, fov, duration, p9, p10, p11);
  }

  setRot(rotX: number, rotY: number, rotZ: number, p4: number) {
    game.setCamRot(this.camera, rotX, rotY, rotZ, p4);
  }

  setShakeAmplitude(amplitude: number) {
    game.setCamShakeAmplitude(this.camera, amplitude);
  }

  setUseShallowDofMode(toggle: boolean) {
    game.setCamUseShallowDofMode(this.camera, toggle);
  }

  shake(type: string, amplitude: number) {
    game.shakeCam(this.camera, type, amplitude);
  }

  stopPointing() {
    game.stopCamPointing(this.camera);
  }

  stopShaking(p1: boolean) {
    game.stopCamShaking(this.camera, p1);
  }

  get cam() {
    return this.camera;
  }
}
