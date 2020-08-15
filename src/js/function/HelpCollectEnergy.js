/**
 * 蚂蚁森林能量帮收模块
 * 2020 6/7
 * by  小橙子
 * QQ153680858
 *
 * @param number
 */



function helpEnergyCollect() {
   // var points = image.findMultiColorEx("0xEEEDE0-0x101010", "2|-1|0xEDE5D2-0x101010,8|-4|0xEBC292-0x101010,8|4|0xEBBC89-0x101010,5|8|0xEBBF8E-0x101010,-1|5|0xEEEEE5-0x101010,-7|5|0xEBCDAA-0x101010,-4|10|0xDBBD9A-0x101010,3|16|0xDABD9B-0x101010,8|13|0xEAEEE5-0x101010,11|10|0xEDECDE-0x101010,17|5|0xEAD5B7-0x101010,20|0|0xE5D3B4-0x101010,20|-5|0xDCE9DD-0x101010,12|-10|0xEBD1B0-0x101010,2|-9|0xE4D3B3-0x101010,0|-7|0xE9CBA4-0x101010,-9|-11|0xE8D4B4-0x101010,-18|0|0xEBE2CF-0x101010,-5|17|0xE0CBB1-0x101010", 0.9, 0, 0, 0, 0, 1);
    var sms=readResAutoImage("ec-823.png");
    //在当前屏幕中查找，并且限制只查找一个

    var point = image.findImageEx(sms,0,0,0,0,0.5, 1);
    if (point==null) {
        logi("检测无可帮收能量");
        ant_back();
    }else {
        loge("帮收点"+point)
        clickCenter(point);
        sleep(500);
        helpEnergyCollect();

    }


}