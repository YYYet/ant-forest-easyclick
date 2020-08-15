/**
 * 蚂蚁森林能量打赏模块
 * 2020 6/7
 * by  小橙子
 * QQ153680858
 *
 * @param number
 */


function OtherGiveEnergyCollect(threshod) {
    var sms=readResAutoImage("ec-336.png");
    //在当前屏幕中查找，并且限制只查找一个
    sleep(1000)
    var point = image.findImageEx(sms,0,0,width,height/2,threshod, 1);
    if (point==null) {
        logi("检测无可收打赏，返回");
        schemAntForest(2);
    }else {
      logi("检测到打赏坐标"+point)
        clickCenter(point);
        OtherGiveEnergyCollect(threshod);

    }
}