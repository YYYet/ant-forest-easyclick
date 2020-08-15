/**
 * 蚂蚁森林工具类
 * 2020 6/6
 * by  小橙子
 * QQ153680858
 *
 * @param number
 */


//蚂蚁森林URL schemes语法
function schemAntForest(number) {
    if (number==1) {
        var homelink={
            "action":"android.intent.action.VIEW",
            "uri":encURIPar("alipays://platformapi/startapp", {
                saId: 20000067,
                url: "https://60000002.h5app.alipay.com/www/home.html",
                __webview_options__: {
                    appClearTop: true,
                    startMultApp: true,
                    enableCubeView: false,
                    enableScrollBar: false,
                    backgroundColor: "-1",
                    transparentTitle: "auto",
                }}),
        };

        utils.openActivity(homelink);
        checkAlipay_openButton();
        return true;
    }else if (number==2) {
        var listlink={
            "action":"android.intent.action.VIEW",
            "uri":encURIPar("alipays://platformapi/startapp", {
                saId: 20000067,
                url: "https://60000002.h5app.alipay.com/www/listRank.html",
                __webview_options__: {
                    appClearTop: true,
                    startMultApp: true,
                    showOptionMenu: true,
                    gestureBack: true,
                    backBehavior: "back",
                    enableCubeView: false,
                    enableScrollBar: false,
                    backgroundColor: "-1",
                    transparentTitle: "none",
                }}),
        };

        utils.openActivity(listlink);
        checkAlipay_openButton();

        return true;
    }else {
        return false;
    }
}


//点击蚂蚁森林左上方返回按钮
function ant_back() {
    var leftTopBack  =  clz("android.widget.TextView").depth(11).index(0).drawingOrder(1).getOneNodeInfo(1000);
    if(leftTopBack!=null){
        var  nodeBack =leftTopBack.click();
        if (nodeBack) {
            logd("返回上一页面")
            //  findPkingImageByColor();
        }else {
            logd("未成功返回，提醒用户")
            toast("请手动返回上一页面")
        }
    }else {
        toast("未检测到返回按钮")
    }



}
//选择取色模式
function chooseFunction(num) {
    if (num==1) {
        findPkingImageByColor(PICKING_COLOR,PICKING_OFFSET);
    }else if (num==2) {
        findPkingImageByColor(PICKING_COLOR,PICKING_OFFSET);
    }
}

//列表多点取色
function findPkingImageByColor(pc1,po1,pc2,po2,num) {
    sleep(1000);//截图缓冲
    var point;
    var aimage = image.captureFullScreen();

    if (num==1) {
        logw("检测用户坐标")
        sleep(1000);
        if (aimage != null) {
            logw("截图成功"+aimage)
            //多点找色取最左上一点 需注意屏幕不可见区域

            var points1 = image.findMultiColorEx(pc1, po1, 0.7, 0, 0, 0, 0, 10);
            if (points1!=null) {

                logw("发现坐标："+points1);
                sleep(1000);//延迟一秒模拟点击
                clickCoordinates(points1);


            }else {
                logd("未检测到目标")
                upOrDown();

            }
        }else{
            loge("截图未成功，检查截图权限")
           // findPkingImageByColor(pc,po);
            exit();

        }


    }else {
         logw("检测可摘或可帮收用户坐标")
        sleep(1000);

        if (aimage != null) {
            //多点找色取最左上一点 需注意屏幕不可见区域
       // var points = image.findMultiColorEx("0x469D72-0x101010", "2|-1|0x46A176-0x101010,13|0|0x4A9B71-0x101010,15|1|0x6BA987-0x101010,14|-2|0xAACEBA-0x101010,11|-6|0xA8CDB8-0x101010,9|-8|0xAACFBA-0x101010,4|-14|0xBFDACB-0x101010,2|-18|0x80B697-0x101010,3|-21|0x53A57C-0x101010,6|-21|0x5CA781-0x101010,8|-21|0x469F74-0x101010,9|-20|0x65A680-0x101010,11|-21|0x67AB88-0x101010,13|-21|0x5EA882-0x101010,15|-20|0x6DAB87-0x101010,17|-20|0x4E9D74-0x101010,21|-21|0x2C9E6E-0x101010,25|-18|0x62A882-0x101010,27|-18|0x449E73-0x101010", 0.9, 0, 0, 0, 0, 10);
             var points3 = image.findMultiColorEx(pc1, po1, 0.7, 0, 0, 0, 0, 10);
             var points4 = image.findMultiColorEx(pc2, po2, 0.7, 0, 0, 0, 0, 10);
            var b =  points3!=null?true:points4!=null?true:false;
            if ( b) {


                if (points3!=null&&points4!=null) {

                    var qwe = points4+points3;
                    logw("整合"+qwe);
                    //  d =JSON.parse(jsontext);
                   // logw("坐标类型为"+typeof points3)

                   // logw("整合对象"+ typeof oneJson)
                    let oneJson = points3.concat(points4)//数据合并
                    clickCoordinates(oneJson);

                }else if(points3!=null){
                    logw("发现地主坐标："+points3);
                    clickCoordinates(points3);
                }else if (points4!=null) {

                    logw("发现包身工坐标："+points4);
                    clickCoordinates(points4);
                }


                upOrDown();
                sleep(1000);

            }else {
                logd("未检测到目标")
                upOrDown();

            }
        }else{
            loge("截图未成功，检查截图权限")
            //findPkingImageByColor(pc,po);
            exit();

        }
    }




}
function onejson(json1,json2) {
    var json3 ={};
    for(var i in json1){

        json3[i]=json1[i];

    }

    for(var j in json2){

        json3[j]=json2[j];

    }
    return json3;
}//数据合并

function objToArr(obj) {
    var arr = []
    for (let i in obj) {
        let o = {};
        o[i] = obj[i];
        arr.push(o)

    }
    return arr;
}//数据合并


//取图点击
function clickCoordinates(CoordinatesArray) {
    for (var i in CoordinatesArray){
        var x = CoordinatesArray[i]['x'];
        var y = CoordinatesArray[i]['y']
        logd("第"+(i+1)+"个坐标点的X："+x+"  Y:"+y)
        var clickOrNot =  clickPoint(x,y);
        if (clickOrNot) {
            logw("开始收集")
            var sms=readResAutoImage("ec-336.png");
            //在当前屏幕中查找，并且限制只查找一个
            var Energy =textMatch("收集能量.*").getNodeInfo(3000).length;
            var point = image.findImageEx(sms,0,0,0,0,0.6, 1);
            if (Energy!=0) {
                logw("检测到有能量可偷，数量为"+Energy)
                EnergyCollect();
            }else if (point!=null) {
                logw("检测到有能量可帮收，起始坐标"+point)

                helpEnergyCollect();
            }else {
                logw( "检测到无可进行操作");
                ant_back();
            }
        }else {
            logd("未点击")
        }
    }
}


//滚动检测
function upOrDown() {
    logd("执行边缘检测")
    var node = scrollable(true).getOneNodeInfo(10000);
    switch (flag) {
        case 0:
            logd("向下滚动");

            if (node!=null) {
                var result2 = node.scrollForward();
                if (result2) {
                    flag=0;
                }else {
                    logi("上方触顶检测，切换滚动方向");
                    flag=1;
                }
            }else {
                toast("滚动失败")
            }

            break;
        case 1:
            logd("向上滚动");

            if (node!=null) {
                var result = node.scrollBackward();
                if (result) {
                    flag=1;
                }else {
                    logi("下方触底检测，切换滚动方向");

                    if (flag_stopScroll!=0) {
                        logi("运行结束")
                        home();
                        exit();
                    }else {
                        flag=0;
                    }
                };
            }else {
                toast("滚动失败")
            }
            break;
    }
}

//检测是否存在能量球
function check() {
    var Energy =textMatch("收集能量.*").getNodeInfo(3000);
    if (Energy.length==0) {
        return true;
    }else {
        return false;
    }
}




//滚动方式2
function toScroll() {
    sleep(2000);
    var node = scrollable(true).getOneNodeInfo(5000);
    var result = node.scrollForward();
    logd(failCount)
    if (result){
        // toast("滚动成功");
        //   findPkingImageByColor();
        for (var i = 0;i<times;i++){

            logd((i+1)+"轮向下翻滚")
            //findPkingImageByColor()
            var result = node.scrollForward();
            logd("下滚动"+result);
        }
    } else {
        failCount++;
        //  toast("滚动失败");
        if (failCount>3) {
            logd(failCount)
            failCount = 0;
            for (var i = 0;i<times;i++){
                logd((i+1)+"轮向上翻滚")
                //findPkingImageByColor()
                var result2 = node.scrollBackward();
                logd("上滚动"+result2);
            }
            if (result2) {

            }
        }else {
            failCount++;
        }
        toScroll()
    }
}



//检测ui界面点选的功能
function checkFunction() {
    switch (flag_num) {
        case 0:
            toast("请选择功能");
            break;
        case -8:
            logi("循环执行———>收能量（收自己+偷）")
            function_one();
            break;
        case -4:
            logi("循环执行———>收金球（收别人浇的水）")
            function_two();
            break;
        case 2:
            logi("循环执行———>帮收（帮别人收快消失的能量）")
            function_three();
            break;
        case -2:
            logi("循环执行———>收能量+收金球（收完自己的偷列表）")
            function_OneAndtwo();
            break;
        case 5:
            logi("循环执行———>收能量+帮收（偷列表的同时帮收列表）")
            function_OneAndthree();
            break;
        case 8:
            logi("循环执行———>收金球+帮收（收完自己的金球帮收列表）")
            function_TwoAndThree();
            break;
        case 10:
            logi("循环执行———>收能量+收金球+帮收（收完自己偷列表帮收列表）")
            function_oneAndTwoAndThree();
            break;
    }
}


//检测跳转到支付宝界面支付宝请求的打开按钮
function checkAlipay_openButton() {

    if (clz("android.widget.Button").text("打开").getOneNodeInfo(5000)!=null) {
        logw("检测到打开按钮，打开"+clz("android.widget.Button").text("打开").getOneNodeInfo(5000).click())
    }

}

//初始化ui
function initView() {
    var result = showLogWindow();
    if (!result) {
        toast("日志悬浮窗开启失败，重新申请权限");
        requestFloatViewPermission(10);
    }
}
