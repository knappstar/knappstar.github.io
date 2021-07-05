gdjs.CaveCode = {};


gdjs.CaveCode.GDCharlieObjects1= [];
gdjs.CaveCode.GDCharlieObjects2= [];
gdjs.CaveCode.GDfrauObjects1= [];
gdjs.CaveCode.GDfrauObjects2= [];
gdjs.CaveCode.GDlvl_95end_95markerObjects1= [];
gdjs.CaveCode.GDlvl_95end_95markerObjects2= [];
gdjs.CaveCode.GDempty_95platformObjects1= [];
gdjs.CaveCode.GDempty_95platformObjects2= [];
gdjs.CaveCode.GDgoleftObjects1= [];
gdjs.CaveCode.GDgoleftObjects2= [];
gdjs.CaveCode.GDgorightObjects1= [];
gdjs.CaveCode.GDgorightObjects2= [];
gdjs.CaveCode.GDbackgroundObjects1= [];
gdjs.CaveCode.GDbackgroundObjects2= [];
gdjs.CaveCode.GDplatformObjects1= [];
gdjs.CaveCode.GDplatformObjects2= [];
gdjs.CaveCode.GDground_95gemObjects1= [];
gdjs.CaveCode.GDground_95gemObjects2= [];
gdjs.CaveCode.GDtorchObjects1= [];
gdjs.CaveCode.GDtorchObjects2= [];
gdjs.CaveCode.GDgroundObjects1= [];
gdjs.CaveCode.GDgroundObjects2= [];
gdjs.CaveCode.GDground_95darkObjects1= [];
gdjs.CaveCode.GDground_95darkObjects2= [];
gdjs.CaveCode.GDwall_95leftObjects1= [];
gdjs.CaveCode.GDwall_95leftObjects2= [];
gdjs.CaveCode.GDcave_95entObjects1= [];
gdjs.CaveCode.GDcave_95entObjects2= [];
gdjs.CaveCode.GDground_95btmObjects1= [];
gdjs.CaveCode.GDground_95btmObjects2= [];

gdjs.CaveCode.conditionTrue_0 = {val:false};
gdjs.CaveCode.condition0IsTrue_0 = {val:false};
gdjs.CaveCode.condition1IsTrue_0 = {val:false};

gdjs.CaveCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.CaveCode.GDCharlieObjects1.length = 0;
gdjs.CaveCode.GDCharlieObjects2.length = 0;
gdjs.CaveCode.GDfrauObjects1.length = 0;
gdjs.CaveCode.GDfrauObjects2.length = 0;
gdjs.CaveCode.GDlvl_95end_95markerObjects1.length = 0;
gdjs.CaveCode.GDlvl_95end_95markerObjects2.length = 0;
gdjs.CaveCode.GDempty_95platformObjects1.length = 0;
gdjs.CaveCode.GDempty_95platformObjects2.length = 0;
gdjs.CaveCode.GDgoleftObjects1.length = 0;
gdjs.CaveCode.GDgoleftObjects2.length = 0;
gdjs.CaveCode.GDgorightObjects1.length = 0;
gdjs.CaveCode.GDgorightObjects2.length = 0;
gdjs.CaveCode.GDbackgroundObjects1.length = 0;
gdjs.CaveCode.GDbackgroundObjects2.length = 0;
gdjs.CaveCode.GDplatformObjects1.length = 0;
gdjs.CaveCode.GDplatformObjects2.length = 0;
gdjs.CaveCode.GDground_95gemObjects1.length = 0;
gdjs.CaveCode.GDground_95gemObjects2.length = 0;
gdjs.CaveCode.GDtorchObjects1.length = 0;
gdjs.CaveCode.GDtorchObjects2.length = 0;
gdjs.CaveCode.GDgroundObjects1.length = 0;
gdjs.CaveCode.GDgroundObjects2.length = 0;
gdjs.CaveCode.GDground_95darkObjects1.length = 0;
gdjs.CaveCode.GDground_95darkObjects2.length = 0;
gdjs.CaveCode.GDwall_95leftObjects1.length = 0;
gdjs.CaveCode.GDwall_95leftObjects2.length = 0;
gdjs.CaveCode.GDcave_95entObjects1.length = 0;
gdjs.CaveCode.GDcave_95entObjects2.length = 0;
gdjs.CaveCode.GDground_95btmObjects1.length = 0;
gdjs.CaveCode.GDground_95btmObjects2.length = 0;


{

gdjs.CaveCode.GDgoleftObjects1.createFrom(runtimeScene.getObjects("goleft"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.CaveCode.GDgoleftObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDgoleftObjects1[i].hide();
}
}
{ //Subevents

{

gdjs.CaveCode.GDgorightObjects2.createFrom(runtimeScene.getObjects("goright"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.CaveCode.GDgorightObjects2.length ;i < len;++i) {
    gdjs.CaveCode.GDgorightObjects2[i].hide();
}
}}

}


{


gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "OGG-Underclocked.ogg", 0, true, 80, 1);
}}

}

} //End of subevents
}

}


{

gdjs.CaveCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CaveCode.GDCharlieObjects1.length;i<l;++i) {
    if ( gdjs.CaveCode.GDCharlieObjects1[i].getAutomatism("PlatformerObject").isJumping() ) {
        gdjs.CaveCode.condition0IsTrue_0.val = true;
        gdjs.CaveCode.GDCharlieObjects1[k] = gdjs.CaveCode.GDCharlieObjects1[i];
        ++k;
    }
}
gdjs.CaveCode.GDCharlieObjects1.length = k;}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.CaveCode.GDCharlieObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDCharlieObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.CaveCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CaveCode.GDCharlieObjects1.length;i<l;++i) {
    if ( gdjs.CaveCode.GDCharlieObjects1[i].getAutomatism("PlatformerObject").isOnFloor() ) {
        gdjs.CaveCode.condition0IsTrue_0.val = true;
        gdjs.CaveCode.GDCharlieObjects1[k] = gdjs.CaveCode.GDCharlieObjects1[i];
        ++k;
    }
}
gdjs.CaveCode.GDCharlieObjects1.length = k;}if (gdjs.CaveCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.CaveCode.GDCharlieObjects2.createFrom(gdjs.CaveCode.GDCharlieObjects1);

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CaveCode.GDCharlieObjects2.length;i<l;++i) {
    if ( gdjs.CaveCode.GDCharlieObjects2[i].getAutomatism("PlatformerObject").isMoving() ) {
        gdjs.CaveCode.condition0IsTrue_0.val = true;
        gdjs.CaveCode.GDCharlieObjects2[k] = gdjs.CaveCode.GDCharlieObjects2[i];
        ++k;
    }
}
gdjs.CaveCode.GDCharlieObjects2.length = k;}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.CaveCode.GDCharlieObjects2.length ;i < len;++i) {
    gdjs.CaveCode.GDCharlieObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.CaveCode.GDCharlieObjects2.createFrom(gdjs.CaveCode.GDCharlieObjects1);

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CaveCode.GDCharlieObjects2.length;i<l;++i) {
    if ( !(gdjs.CaveCode.GDCharlieObjects2[i].getAutomatism("PlatformerObject").isMoving()) ) {
        gdjs.CaveCode.condition0IsTrue_0.val = true;
        gdjs.CaveCode.GDCharlieObjects2[k] = gdjs.CaveCode.GDCharlieObjects2[i];
        ++k;
    }
}
gdjs.CaveCode.GDCharlieObjects2.length = k;}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.CaveCode.GDCharlieObjects2.length ;i < len;++i) {
    gdjs.CaveCode.GDCharlieObjects2[i].setAnimation(0);
}
}}

}

} //End of subevents
}

}


{

gdjs.CaveCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.CaveCode.GDCharlieObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDCharlieObjects1[i].flipX(true);
}
}
{ //Subevents

{

gdjs.CaveCode.GDCharlieObjects2.createFrom(gdjs.CaveCode.GDCharlieObjects1);

{for(var i = 0, len = gdjs.CaveCode.GDCharlieObjects2.length ;i < len;++i) {
    gdjs.CaveCode.GDCharlieObjects2[i].addForce(-200, 0, 0);
}
}
}

} //End of subevents
}

}


{

gdjs.CaveCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

gdjs.CaveCode.condition0IsTrue_0.val = false;
{
gdjs.CaveCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.CaveCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.CaveCode.GDCharlieObjects1.length ;i < len;++i) {
    gdjs.CaveCode.GDCharlieObjects1[i].flipX(false);
}
}
{ //Subevents

{

gdjs.CaveCode.GDCharlieObjects2.createFrom(gdjs.CaveCode.GDCharlieObjects1);

{for(var i = 0, len = gdjs.CaveCode.GDCharlieObjects2.length ;i < len;++i) {
    gdjs.CaveCode.GDCharlieObjects2[i].addForce(200, 0, 0);
}
}
}

} //End of subevents
}

}


{

gdjs.CaveCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects1[0].getPointX("")), "Player", 0);
}
{ //Subevents

{

gdjs.CaveCode.GDCharlieObjects2.createFrom(gdjs.CaveCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects2[0].getPointY(""))-50, "Player", 0);
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

gdjs.CaveCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects1[0].getPointX(""))*0.4, "background", 0);
}
{ //Subevents

{

gdjs.CaveCode.GDCharlieObjects2.createFrom(gdjs.CaveCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects2[0].getPointY(""))-50, "background", 0);
}
}

} //End of subevents

}


{

gdjs.CaveCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects1[0].getPointX(""))*1, "InFrontOfPlayer", 0);
}
{ //Subevents

{

gdjs.CaveCode.GDCharlieObjects2.createFrom(gdjs.CaveCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects2[0].getPointY(""))-50, "InFrontOfPlayer", 0);
}
}

} //End of subevents

}


{

gdjs.CaveCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects1[0].getPointX(""))*1, "BehindPlayer", 0);
}
{ //Subevents

{

gdjs.CaveCode.GDCharlieObjects2.createFrom(gdjs.CaveCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects2[0].getPointY(""))-50, "BehindPlayer", 0);
}
}

} //End of subevents

}


{

gdjs.CaveCode.GDCharlieObjects1.createFrom(runtimeScene.getObjects("Charlie"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects1.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects1[0].getPointX(""))*1, "", 0);
}
{ //Subevents

{

gdjs.CaveCode.GDCharlieObjects2.createFrom(gdjs.CaveCode.GDCharlieObjects1);

{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.CaveCode.GDCharlieObjects2.length === 0 ) ? 0 :gdjs.CaveCode.GDCharlieObjects2[0].getPointY(""))-50, "", 0);
}
}

} //End of subevents

}


{



}


{



}


{



}


{



}


{



}


{



}


{



}

return;
}
gdjs['CaveCode']= gdjs.CaveCode;
