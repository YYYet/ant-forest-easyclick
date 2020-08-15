
var started = startEnv();
logd("服务开启状态:"+started)
var flag_num=0;                            //功能选择的标记
var flag = 0;                              //滚动方向的标记
var flag_stopScroll=0;                     //停止滚动的标记
var width = device.getScreenWidth();
var height = device.getScreenHeight();
toast("设备宽："+width);
toast("设备高："+height);


if (started) {
  main();
//test();
}else {
    toast("服务未开启，重新请求")
    startEnv();
}



/* //测试类
function test() {

    var req = image.requestScreenCapture(100000,0);
    var flag_function = [{"key":1,"staus":0},{"key":2,"staus":0},{"key":3,"staus":0}];
    if (!req) {
        req = image.requestScreenCapture(100000,0);
        loge("截图失败")
        toast("申请权限失败");
    }
    helpEnergyCollect();
}
*/



function main() {

    var flag_function = [{"key":1,"staus":0},{"key":2,"staus":0},{"key":3,"staus":0}];
    var timing_mode = readConfigBoolean("one");
    var loop_mode = readConfigBoolean("two");
    var smart_mode = readConfigBoolean("three");
    var  energyCollect= readConfigBoolean("get");
    var  helpEnergyCollect=readConfigBoolean("help");
    var  goldBall=readConfigBoolean ("gold");
    
    toast("设备宽："+width);
    toast("设备高："+height);
    
    energyCollect?flag_num=flag_num+1:flag_num=flag_num-1;
    goldBall?flag_num=flag_num+3:flag_num=flag_num-3;
    helpEnergyCollect?flag_num=flag_num+6:flag_num=flag_num-6; //初始化flag

    var req = image.requestScreenCapture(100000,0);
    if (!req) {
        req = image.requestScreenCapture(100000,0);
        loge("截图失败")
        toast("申请权限失败");
    }//请求截图



    if (timing_mode) {
        loge("启动定时模式");
        toast("启动定时模式");
        timingModel();//启动定时模块

    }
    if(loop_mode){
        loge("启动循环挂机模式");
        toast("启动循环挂机模式");
        loopModel();//启动循环模块
    }
    if (smart_mode) {
        loge("自动模式未添加，请重选");
        toast("自动模式未添加，请重选");
        //启动自动模块
    }


}
















