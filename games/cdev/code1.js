gdjs.ForestCode = {};


gdjs.ForestCode.GDCharlieObjects1= [];
gdjs.ForestCode.GDCharlieObjects2= [];
gdjs.ForestCode.GDfrauObjects1= [];
gdjs.ForestCode.GDfrauObjects2= [];
gdjs.ForestCode.GDlvl_95end_95markerObjects1= [];
gdjs.ForestCode.GDlvl_95end_95markerObjects2= [];
gdjs.ForestCode.GDempty_95platformObjects1= [];
gdjs.ForestCode.GDempty_95platformObjects2= [];
gdjs.ForestCode.GDgoleftObjects1= [];
gdjs.ForestCode.GDgoleftObjects2= [];
gdjs.ForestCode.GDgorightObjects1= [];
gdjs.ForestCode.GDgorightObjects2= [];
gdjs.ForestCode.GDPlatformObjects1= [];
gdjs.ForestCode.GDPlatformObjects2= [];
gdjs.ForestCode.GDbgimgObjects1= [];
gdjs.ForestCode.GDbgimgObjects2= [];
gdjs.ForestCode.GDsky_95cloudsObjects1= [];
gdjs.ForestCode.GDsky_95cloudsObjects2= [];
gdjs.ForestCode.GDground_95bObjects1= [];
gdjs.ForestCode.GDground_95bObjects2= [];
gdjs.ForestCode.GDground_95fObjects1= [];
gdjs.ForestCode.GDground_95fObjects2= [];
gdjs.ForestCode.GDgrass_95rightObjects1= [];
gdjs.ForestCode.GDgrass_95rightObjects2= [];
gdjs.ForestCode.GDgrass_95trObjects1= [];
gdjs.ForestCode.GDgrass_95trObjects2= [];
gdjs.ForestCode.GDtunnel_95lObjects1= [];
gdjs.ForestCode.GDtunnel_95lObjects2= [];
gdjs.ForestCode.GDtunnel_95rObjects1= [];
gdjs.ForestCode.GDtunnel_95rObjects2= [];
gdjs.ForestCode.GDtunnel_95tlObjects1= [];
gdjs.ForestCode.GDtunnel_95tlObjects2= [];
gdjs.ForestCode.GDtunnel_95trObjects1= [];
gdjs.ForestCode.GDtunnel_95trObjects2= [];
gdjs.ForestCode.GDscoreObjects1= [];
gdjs.ForestCode.GDscoreObjects2= [];

gdjs.ForestCode.conditionTrue_0 = {val:false};
gdjs.ForestCode.condition0IsTrue_0 = {val:false};
gdjs.ForestCode.condition1IsTrue_0 = {val:false};
gdjs.ForestCode.condition2IsTrue_0 = {val:false};

gdjs.ForestCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.ForestCode.GDCharlieObjects1.length = 0;
gdjs.ForestCode.GDCharlieObjects2.length = 0;
gdjs.ForestCode.GDfrauObjects1.length = 0;
gdjs.ForestCode.GDfrauObjects2.length = 0;
gdjs.ForestCode.GDlvl_95end_95markerObjects1.length = 0;
gdjs.ForestCode.GDlvl_95end_95markerObjects2.length = 0;
gdjs.ForestCode.GDempty_95platformObjects1.length = 0;
gdjs.ForestCode.GDempty_95platformObjects2.length = 0;
gdjs.ForestCode.GDgoleftObjects1.length = 0;
gdjs.ForestCode.GDgoleftObjects2.length = 0;
gdjs.ForestCode.GDgorightObjects1.length = 0;
gdjs.ForestCode.GDgorightObjects2.length = 0;
gdjs.ForestCode.GDPlatformObjects1.length = 0;
gdjs.ForestCode.GDPlatformObjects2.length = 0;
gdjs.ForestCode.GDbgimgObjects1.length = 0;
gdjs.ForestCode.GDbgimgObjects2.length = 0;
gdjs.ForestCode.GDsky_95cloudsObjects1.length = 0;
gdjs.ForestCode.GDsky_95cloudsObjects2.length = 0;
gdjs.ForestCode.GDground_95bObjects1.length = 0;
gdjs.ForestCode.GDground_95bObjects2.length = 0;
gdjs.ForestCode.GDground_95fObjects1.length = 0;
gdjs.ForestCode.GDground_95fObjects2.length = 0;
gdjs.ForestCode.GDgrass_95rightObjects1.length = 0;
gdjs.ForestCode.GDgrass_95rightObjects2.length = 0;
gdjs.ForestCode.GDgrass_95trObjects1.length = 0;
gdjs.ForestCode.GDgrass_95trObjects2.length = 0;
gdjs.ForestCode.GDtunnel_95lObjects1.length = 0;
gdjs.ForestCode.GDtunnel_95lObjects2.length = 0;
gdjs.ForestCode.GDtunnel_95rObjects1.length = 0;
gdjs.ForestCode.GDtunnel_95rObjects2.length = 0;
gdjs.ForestCode.GDtunnel_95tlObjects1.length = 0;
gdjs.ForestCode.GDtunnel_95tlObjects2.length = 0;
gdjs.ForestCode.GDtunnel_95trObjects1.length = 0;
gdjs.ForestCode.GDtunnel_95trObjects2.length = 0;
gdjs.ForestCode.GDscoreObjects1.length = 0;
gdjs.ForestCode.GDscoreObjects2.length = 0;


{

gdjs.ForestCode.GDgoleftObjects1.createFrom(runtimeScene.getObjects("goleft"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
gdjs.ForestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDgoleftObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDgoleftObjects1[i].hide();
}
}
{ //Subevents

{

gdjs.ForestCode.GDgorightObjects2.createFrom(runtimeScene.getObjects("goright"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
gdjs.ForestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDgorightObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDgorightObjects2[i].hide();
}
}}

}


{


gdjs.ForestCode.condition0IsTrue_0.val = false;
{
gdjs.ForestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "OGG-Chibi Ninja.ogg", 0, true, 80, 1);
}}

}

} //End of subevents
}

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ForestCode.GDCharlieObjects1.length;i<l;++i) {
    if ( gdjs.ForestCode.GDCharlieObjects1[i].getAutomatism("PlatformerObject").isJumping() ) {
        gdjs.ForestCode.condition0IsTrue_0.val = true;
        gdjs.ForestCode.GDCharlieObjects1[k] = gdjs.ForestCode.GDCharlieObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDCharlieObjects1.length = k;}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDCharlieObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDCharlieObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ForestCode.GDCharlieObjects1.length;i<l;++i) {
    if ( gdjs.ForestCode.GDCharlieObjects1[i].getAutomatism("PlatformerObject").isOnFloor() ) {
        gdjs.ForestCode.condition0IsTrue_0.val = true;
        gdjs.ForestCode.GDCharlieObjects1[k] = gdjs.ForestCode.GDCharlieObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDCharlieObjects1.length = k;}if (gdjs.ForestCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.ForestCode.GDCharlieObjects2.createFrom(gdjs.ForestCode.GDCharlieObjects1);

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ForestCode.GDCharlieObjects2.length;i<l;++i) {
    if ( gdjs.ForestCode.GDCharlieObjects2[i].getAutomatism("PlatformerObject").isMoving() ) {
        gdjs.ForestCode.condition0IsTrue_0.val = true;
        gdjs.ForestCode.GDCharlieObjects2[k] = gdjs.ForestCode.GDCharlieObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDCharlieObjects2.length = k;}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDCharlieObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDCharlieObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.ForestCode.GDCharlieObjects2.createFrom(gdjs.ForestCode.GDCharlieObjects1);

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ForestCode.GDCharlieObjects2.length;i<l;++i) {
    if ( !(gdjs.ForestCode.GDCharlieObjects2[i].getAutomatism("PlatformerObject").isMoving()) ) {
        gdjs.ForestCode.condition0IsTrue_0.val = true;
        gdjs.ForestCode.GDCharlieObjects2[k] = gdjs.ForestCode.GDCharlieObjects2[i];
        ++k;
    }
}
gdjs.ForestCode.GDCharlieObjects2.length = k;}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDCharlieObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDCharlieObjects2[i].setAnimation(0);
}
}}

}

} //End of subevents
}

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
gdjs.ForestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDCharlieObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDCharlieObjects1[i].flipX(true);
}
}
{ //Subevents

{

gdjs.ForestCode.GDCharlieObjects2.createFrom(gdjs.ForestCode.GDCharlieObjects1);

{for(var i = 0, len = gdjs.ForestCode.GDCharlieObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDCharlieObjects2[i].addForce(-200, 0, 0);
}
}
}

} //End of subevents
}

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
gdjs.ForestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDCharlieObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDCharlieObjects1[i].flipX(false);
}
}
{ //Subevents

{

gdjs.ForestCode.GDCharlieObjects2.createFrom(gdjs.ForestCode.GDCharlieObjects1);

{for(var i = 0, len = gdjs.ForestCode.GDCharlieObjects2.length ;i < len;++i) {
    gdjs.ForestCode.GDCharlieObjects2[i].addForce(200, 0, 0);
}
}
}

} //End of subevents
}

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects1[0].getPointX("")), "player", 0);
}
{ //Subevents

{

gdjs.ForestCode.GDCharlieObjects2.createFrom(gdjs.ForestCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects2[0].getPointY(""))-50, "player", 0);
}
}

} //End of subevents

}


{


{}
{ //Subevents

{


{}
}

} //End of subevents

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects1[0].getPointX(""))*0.4, "background image", 0);
}
{ //Subevents

{

gdjs.ForestCode.GDCharlieObjects2.createFrom(gdjs.ForestCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects2[0].getPointY(""))-50, "background image", 0);
}
}

} //End of subevents

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects1[0].getPointX(""))*1, "InFrontOfPlayer", 0);
}
{ //Subevents

{

gdjs.ForestCode.GDCharlieObjects2.createFrom(gdjs.ForestCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects2[0].getPointY(""))-50, "InFrontOfPlayer", 0);
}
}

} //End of subevents

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects1[0].getPointX(""))*1, "BehindPlayer", 0);
}
{ //Subevents

{

gdjs.ForestCode.GDCharlieObjects2.createFrom(gdjs.ForestCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects2[0].getPointY(""))-50, "BehindPlayer", 0);
}
}

} //End of subevents

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects1[0].getPointX(""))*1, "", 0);
}
{ //Subevents

{

gdjs.ForestCode.GDCharlieObjects2.createFrom(gdjs.ForestCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.ForestCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.ForestCode.GDCharlieObjects2[0].getPointY(""))-50, "", 0);
}
}

} //End of subevents

}


{


{runtimeScene.getGame().getVariables().get("Score").setNumber(100);
}
}


{

gdjs.ForestCode.GDfrauObjects1.createFrom(runtimeScene.getObjects("frau"));
gdjs.ForestCode.GDgoleftObjects1.createFrom(runtimeScene.getObjects("goleft"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
gdjs.ForestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("frau", gdjs.ForestCode.GDfrauObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("goleft", gdjs.ForestCode.GDgoleftObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDfrauObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDfrauObjects1[i].setVariableNumber(gdjs.ForestCode.GDfrauObjects1[i].getVariables().get("GoLeft"), 1);
}
}}

}


{

gdjs.ForestCode.GDfrauObjects1.createFrom(runtimeScene.getObjects("frau"));
gdjs.ForestCode.GDgorightObjects1.createFrom(runtimeScene.getObjects("goright"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
gdjs.ForestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("frau", gdjs.ForestCode.GDfrauObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("goright", gdjs.ForestCode.GDgorightObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDfrauObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDfrauObjects1[i].setVariableNumber(gdjs.ForestCode.GDfrauObjects1[i].getVariables().get("GoLeft"), 0);
}
}}

}


{

gdjs.ForestCode.GDfrauObjects1.createFrom(runtimeScene.getObjects("frau"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ForestCode.GDfrauObjects1.length;i<l;++i) {
    if ( gdjs.ForestCode.GDfrauObjects1[i].getVariableNumber(gdjs.ForestCode.GDfrauObjects1[i].getVariables().get("GoLeft")) == 0 ) {
        gdjs.ForestCode.condition0IsTrue_0.val = true;
        gdjs.ForestCode.GDfrauObjects1[k] = gdjs.ForestCode.GDfrauObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDfrauObjects1.length = k;}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDfrauObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDfrauObjects1[i].addForce(50, 0, 0);
}
}}

}


{

gdjs.ForestCode.GDfrauObjects1.createFrom(runtimeScene.getObjects("frau"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ForestCode.GDfrauObjects1.length;i<l;++i) {
    if ( gdjs.ForestCode.GDfrauObjects1[i].getVariableNumber(gdjs.ForestCode.GDfrauObjects1[i].getVariables().get("GoLeft")) == 1 ) {
        gdjs.ForestCode.condition0IsTrue_0.val = true;
        gdjs.ForestCode.GDfrauObjects1[k] = gdjs.ForestCode.GDfrauObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDfrauObjects1.length = k;}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDfrauObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDfrauObjects1[i].addForce(-50, 0, 0);
}
}}

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));
gdjs.ForestCode.GDfrauObjects1.createFrom(runtimeScene.getObjects("frau"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
gdjs.ForestCode.condition1IsTrue_0.val = false;
{
gdjs.ForestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("frau", gdjs.ForestCode.GDfrauObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Charlie", gdjs.ForestCode.GDCharlieObjects1).getEventsObjectsMap(), false, runtimeScene);
}if ( gdjs.ForestCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ForestCode.GDCharlieObjects1.length;i<l;++i) {
    if ( gdjs.ForestCode.GDCharlieObjects1[i].getAutomatism("PlatformerObject").isFalling() ) {
        gdjs.ForestCode.condition1IsTrue_0.val = true;
        gdjs.ForestCode.GDCharlieObjects1[k] = gdjs.ForestCode.GDCharlieObjects1[i];
        ++k;
    }
}
gdjs.ForestCode.GDCharlieObjects1.length = k;}}
if (gdjs.ForestCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.ForestCode.GDfrauObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDfrauObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.ForestCode.GDCharlieObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDCharlieObjects1[i].getAutomatism("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.ForestCode.GDCharlieObjects1.length ;i < len;++i) {
    gdjs.ForestCode.GDCharlieObjects1[i].getAutomatism("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "oopy.wav", false, 100, 1);
}}

}


{

gdjs.ForestCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));
gdjs.ForestCode.GDlvl_95end_95markerObjects1.createFrom(runtimeScene.getObjects("lvl_end_marker"));

gdjs.ForestCode.condition0IsTrue_0.val = false;
{
gdjs.ForestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("lvl_end_marker", gdjs.ForestCode.GDlvl_95end_95markerObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Charlie", gdjs.ForestCode.GDCharlieObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.ForestCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}{gdjs.evtTools.runtimeScene.changeScene(runtimeScene, "Cave");
}}

}

return;
}
gdjs['ForestCode']= gdjs.ForestCode;
