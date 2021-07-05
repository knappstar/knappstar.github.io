gdjs.MenuCode = {};


gdjs.MenuCode.GDCharlieObjects1= [];
gdjs.MenuCode.GDCharlieObjects2= [];
gdjs.MenuCode.GDfrauObjects1= [];
gdjs.MenuCode.GDfrauObjects2= [];
gdjs.MenuCode.GDlvl_95end_95markerObjects1= [];
gdjs.MenuCode.GDlvl_95end_95markerObjects2= [];
gdjs.MenuCode.GDempty_95platformObjects1= [];
gdjs.MenuCode.GDempty_95platformObjects2= [];
gdjs.MenuCode.GDgoleftObjects1= [];
gdjs.MenuCode.GDgoleftObjects2= [];
gdjs.MenuCode.GDgorightObjects1= [];
gdjs.MenuCode.GDgorightObjects2= [];
gdjs.MenuCode.GDimageObjects1= [];
gdjs.MenuCode.GDimageObjects2= [];
gdjs.MenuCode.GDtxt_95devmenuObjects1= [];
gdjs.MenuCode.GDtxt_95devmenuObjects2= [];
gdjs.MenuCode.GDtxt_95map1Objects1= [];
gdjs.MenuCode.GDtxt_95map1Objects2= [];
gdjs.MenuCode.GDtxt_95map2Objects1= [];
gdjs.MenuCode.GDtxt_95map2Objects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};

gdjs.MenuCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.MenuCode.GDCharlieObjects1.length = 0;
gdjs.MenuCode.GDCharlieObjects2.length = 0;
gdjs.MenuCode.GDfrauObjects1.length = 0;
gdjs.MenuCode.GDfrauObjects2.length = 0;
gdjs.MenuCode.GDlvl_95end_95markerObjects1.length = 0;
gdjs.MenuCode.GDlvl_95end_95markerObjects2.length = 0;
gdjs.MenuCode.GDempty_95platformObjects1.length = 0;
gdjs.MenuCode.GDempty_95platformObjects2.length = 0;
gdjs.MenuCode.GDgoleftObjects1.length = 0;
gdjs.MenuCode.GDgoleftObjects2.length = 0;
gdjs.MenuCode.GDgorightObjects1.length = 0;
gdjs.MenuCode.GDgorightObjects2.length = 0;
gdjs.MenuCode.GDimageObjects1.length = 0;
gdjs.MenuCode.GDimageObjects2.length = 0;
gdjs.MenuCode.GDtxt_95devmenuObjects1.length = 0;
gdjs.MenuCode.GDtxt_95devmenuObjects2.length = 0;
gdjs.MenuCode.GDtxt_95map1Objects1.length = 0;
gdjs.MenuCode.GDtxt_95map1Objects2.length = 0;
gdjs.MenuCode.GDtxt_95map2Objects1.length = 0;
gdjs.MenuCode.GDtxt_95map2Objects2.length = 0;


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "OGG-LTMTC-gameMusic.ogg", 0, true, 100, 1);
}}

}


{

gdjs.MenuCode.GDtxt_95map1Objects1.createFrom(runtimeScene.getObjects("txt_map1"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("txt_map1", gdjs.MenuCode.GDtxt_95map1Objects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MenuCode.GDtxt_95map1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxt_95map1Objects1[i].setColor("0;255;0");
}
}}

}


{

gdjs.MenuCode.GDtxt_95map1Objects1.createFrom(runtimeScene.getObjects("txt_map1"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("txt_map1", gdjs.MenuCode.GDtxt_95map1Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MenuCode.GDtxt_95map1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxt_95map1Objects1[i].setColor("128;255;128");
}
}
{ //Subevents

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 0);
}{gdjs.evtTools.runtimeScene.changeScene(runtimeScene, "Forest");
}}

}

} //End of subevents
}

}


{

gdjs.MenuCode.GDtxt_95map2Objects1.createFrom(runtimeScene.getObjects("txt_map2"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("txt_map2", gdjs.MenuCode.GDtxt_95map2Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MenuCode.GDtxt_95map2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxt_95map2Objects1[i].setColor("128;255;128");
}
}}

}


{

gdjs.MenuCode.GDtxt_95map2Objects1.createFrom(runtimeScene.getObjects("txt_map2"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("txt_map2", gdjs.MenuCode.GDtxt_95map2Objects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.MenuCode.GDtxt_95map2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDtxt_95map2Objects1[i].setColor("0;255;0");
}
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
}

}

return;
}
gdjs['MenuCode']= gdjs.MenuCode;
