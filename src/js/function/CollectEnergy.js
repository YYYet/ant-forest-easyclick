/**
 * 蚂蚁森林能量收集模块
 * 2020 6/7
 * by  小橙子
 * QQ153680858
 *
 * @param number
 */



function EnergyCollect() {
    var Energy =textMatch("收集能量.*").getNodeInfo(3000);
    let sum = Energy.length;
    //logd(Energy[0])
    // logd(Energy[1])
    if (sum==null||sum<=0) {
        logd("检测无能量，执行返回");
        ant_back();

    }else {
        logd("一共有"+sum+"个能量球")
        for (let i = 0;i<sum;i++){
            sleep(1000);
            logd("第"+(i+1)+"球收集状态："+Energy[i].click())
            if (i+1==sum) {
                logd("进入检测遗漏环节")
                if (check()) {
                    logd("无遗漏收集完成")
                    ant_back();
                }else {
                    logd("确认遗漏重新收集")
                    EnergyCollect();
                }
            }
        }
    }
}


