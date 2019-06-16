import * as game from 'natives';

export default class Camera {
    constructor(name, position, rotation, fov) {
        this.camera = game.createCam(name, 1);
        game.setCamCoord(this.camera, position.x, position.y, position.z);
        game.setCamRot(this.camera, rotation.x, rotation.y, rotation.z, 2);
        game.setCamFov(this.camera, fov);
    }

    attachCamToEntity(entity, xOffset, yOffset, zOffset, isRelative) {
        game.attachCamToEntity(this.camera, entity, xOffset, yOffset, zOffset, isRelative);
    }

    attachCamToPedBone(ped, boneIndex, x, y, z, heading) {
        game.attachCamToPedBone(this.camera, ped, boneIndex, x, y, z, heading);
    }

    destroy(thisScriptCheck) {
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
        return game.getFarDof(this.camera);
    }

    getFov() {
        return game.getCamFov(this.camera);
    }

    getNearClip() {
        return game.getCamNearClip(this.camera);
    }

    getRot(rotationOrder) {
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

    isPlayingAnim(animName, animDictionary) {
        return game.isCamPlayingAnim(this.camera, animName, animDictionary);
    }

    isRendering() {
        return game.isCamRendering(this.camera);
    }

    isShaking() {
        return game.isCamShaking(this.camera);
    }

    playAnim(animName, animDictionary, x, y, z, xRot, yRot, zRot, p9, p10) {
        game.playCamAnim(this.camera, animName, animDictionary, x, y, z, xRot, yRot, zRot, p9, p10);
    }

    pointAtCoord(x, y, z) {
        game.pointCamAtCoord(this.camera, x, y, z);
    }

    pointAtEntity(entity, x, y, z, p5) {
        game.pointCamAtEntity(this.camera, entity, x, y, z, p5);
    }

    pointAtPedBone(ped, boneIndex, x, y, z, p6) {
        game.pointCamAtPedBone(this.camera, ped, boneIndex, x, y, z, p6);
    }

    setActive(active) {
        game.setCamActive(this.camera, active);
    }

    setActiveWithInterp(camFrom, duration, easeLocation, easeRotation) {
        game.setCamActiveWithInterp(this.camera, camFrom, duration, easeLocation, easeRotation);
    }

    setAffectsAiming(toggle) {
        game.setCamAffectsAiming(this.camera, toggle);
    }

    setAnimCurrentPhase(phase) {
        game.setCamAnimCurrentPhase(this.camera, phase);
    }

    setCoord(x, y, z) {
        game.setCamCoord(this.camera, x, y, z);
    }

    setDebugName(name) {
        game.setCamDebugName(this.camera, name);
    }

    setDofFnumberOfLens(p1) {
        game.setCamDofFnumberOfLens(this.camera, p1);
    }

    setDofFocusDistanceBias(p1) {
        game.setCamDofFocusDistanceBias(this.camera, p1);
    }

    setDofMaxNearInFocusDistance(p1) {
        game.setCamDofMaxNearInFocusDistance(this.camera, p1);
    }

    setDofMaxNearInFocusDistanceBlendLevel(p1) {
        game.setCamDofMaxNearInFocusDistanceBlendLevel(this.camera, p1);
    }

    setDofPlanes(p1, p2, p3, p4) {
        game.setCamDofPlanes(this.camera, p1, p2, p3, p4);
    }

    setFarClip(farClip) {
        game.setCamFarClip(this.camera, farClip);
    }

    setDofStrength(dofStrength) {
        game.setCamDofStrength(this.camera, dofStrength);
    }

    setFarDof(farDOF) {
        game.setCamFarDof(this.camera, farDOF);
    }

    setFov(fieldOfView) {
        game.setCamFov(this.camera, fieldOfView);
    }

    setInheritRollVehicle(p1) {
        game.setCamInheritRollVehicle(this.camera, p1);
    }

    setMotionBlurStrength(strength) {
        game.setCamMotionBlurStrength(this.camera, strength);
    }

    setNearClip(nearClip) {
        game.setCamNearClip(this.camera, nearClip);
    }

    setNearDof(nearDOF) {
        game.setCamNearDof(this.camera, nearDOF);
    }

    setParams(x, y, z, rx, ry, rz, fov, duration, p9, p10, p11) {
        game.setCamParams(this.camera, x, y, z, rx, ry, rz, fov, duration, p9, p10, p11);
    }

    setRot(rotX, rotY, rotZ, p4) {
        game.setCamRot(this.camera, rotX, rotY, rotZ, p4);
    }

    setShakeAmplitude(amplitude) {
        game.setCamShakeAmplitude(this.camera, amplitude);
    }

    setUseShallowDofMode(toggle) {
        game.setCamUseShallowDofMode(this.camera, toggle);
    }

    shake(type, amplitude) {
        game.shakeCam(this.camera, type, amplitude);
    }

    stopPointing() {
        game.stopCamPointing(this.camera);
    }

    stopShaking(p1) {
        game.stopCamShaking(this.camera, p1);
    }

    get cam() {
        return this.camera;
    }

}