function UIWrapper() {

}

var ui = new UIWrapper();

/**
 * 显示Toast信息
 * @param msg 信息
 */
UIWrapper.prototype.toast = function (msg) {
    if (uiWrapper == null) {
        return null;
    }
    uiWrapper.toast(msg);
};
/**
 * 读取IEC包中的res文件夹某个文件资源，并变成android的Bitmap对象返回
 * @param path res文件夹中的资源文件路径
 * @return Bitmap 图像对象或者null
 */
UIWrapper.prototype.resResAsBitmap = function (path) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.resResAsBitmap(path);
};
/**
 * 读取IEC包中的res文件夹某个文件资源，并变成android的Drawable对象返回
 * @param path res文件夹中的资源文件路径
 * @return Drawable 图像对象或者null
 */
UIWrapper.prototype.resResAsDrawable = function (path) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.resResAsDrawable(path);
};


/**
 * 调试日志打印
 * @param msg 打印的消息
 * @return {null}
 */
UIWrapper.prototype.logd = function (msg) {
    if (uiWrapper == null) {
        return null;
    }
    uiWrapper.logd(msg);
};
/**
 * 创建一个布局并设置到当前的页面中
 * @param name tab标签的名称
 * @param content 可以是layout文件夹中的文件名称，也可以直接是xml文件的内容
 * @return 布尔型 true代表成功， false代表失败
 */
UIWrapper.prototype.layout = function (name, content) {
    if (uiWrapper == null) {
        return null;
    }
    var r = uiWrapper.layout(name, content);
    this.setUIvar();
    return r;
};


/**
 * 解析布局并返回
 * @param content 可以是layout文件夹中的文件名称，也可以直接是xml文件的内容
 * @return View android的View对象，解析有问题就是null
 */
UIWrapper.prototype.parseView = function (content) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.parseView(content);
};


/**
 * 通过tag查找到一个视图
 * @param tag 标签值
 * @return View android原生的View对象
 */
UIWrapper.prototype.findViewByTag = function (tag) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.findViewByTag(tag);
};
/**
 * 设置事件
 * @param view 要设置事件的视图，可以是事件的tag值
 * @param eventType 时间类型： click：点击，checkedChange：单选和多选按钮的选中状态改变事件，itemClick：列表的项目点击，itemSelected：列表的项目选中
 * @param eventCallback 事件回调函数
 * @return 布尔型 true代表设置成功， false代表设置失败
 */
UIWrapper.prototype.setEvent = function (view, eventType, eventCallback) {
    if (uiWrapper == null || view == null) {
        return false;
    }
    if (view instanceof String) {
        view = this.findViewByTag(view);
    }
    if (eventType === "click") {
        return uiWrapper.setClickEvent(view, eventCallback);
    }
    if (eventType === "checkedChange") {
        return uiWrapper.setCheckedChangeEvent(view, eventCallback);
    }
    if (eventType === "itemClick") {
        return uiWrapper.setItemClickEvent(view, eventCallback);
    }
    if (eventType === "itemSelected") {
        return uiWrapper.setItemSelectedEvent(view, eventCallback);
    }
    return false;
};

/**
 * 将所有的tag转换成UI的对象直接调用
 * @return {null}
 */
UIWrapper.prototype.setUIvar = function () {
    if (activity == null) {
        return null;
    }
    var tags = uiWrapper.findAllTags();
    if (tags == null) {
        return null;
    }
    tags = JSON.parse(tags);
    if (tags != null) {
        for (var i = 0; i < tags.length; i++) {
            ui[tags[i]] = this.findViewByTag(tags[i]);
        }
    }
};

/**
 * 取得当前的activity对象
 * @return Activity 对象或者null
 */
UIWrapper.prototype.getActivity = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getActivity();
};
/**
 * 取得当前的Handler对象
 * @return Handler 对象或者null
 */
UIWrapper.prototype.getHandler = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getHandler();
};

/**
 * 取得当前的根视图对象，因为有可能是多标签的页面，返回的有可能是个集合
 * @return View 对象列表
 */
UIWrapper.prototype.getRootView = function () {
    if (uiWrapper == null) {
        return null;
    }
    var ls = uiWrapper.getRootView();
    if (ls == null) {
        return null;
    }
    var r = [];
    for (var i = 0; i < ls.size(); i++) {
        var va = ls.get(i);
        r.push(va);
    }
    return r;
};

/**
 * 启动脚本
 * @return 布尔型 true代表成功  false代表失败
 */
UIWrapper.prototype.start = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.start();
};

/**
 * 是否有浮窗权限
 * @return 布尔型 true代表有权限 false代表无权限
 */
UIWrapper.prototype.hasFloatViewPermission = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.hasFloatViewPermission();
};


/**
 * 异步请求浮窗权限
 * @param timeout 超时时间
 * @param callback 回调函数
 * @return 布尔型 true代表有权限 false代表无权限
 */
UIWrapper.prototype.requestFloatViewPermissionAsync = function (timeout, callback) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.requestFloatViewPermissionAsync(timeout, callback);
};
/**
 * 取得所有UI配置
 * @return JSON字符串
 */
UIWrapper.prototype.getConfigJSON = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getConfigJSON();
};
/**
 * 取得单个UI配置项
 * @param key 配置的key
 * @return 字符串
 */
UIWrapper.prototype.getConfig = function (key) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getConfig();
};
/**
 * 打开EC的系统设置
 * @return 布尔型 true代表成功 false代表失败
 */
UIWrapper.prototype.openECSystemSetting = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.openECSystemSetting();
};
/**
 * 保存UI参数值
 * @param key UI的key
 * @param value UI的值
 * @return 布尔型 true代表成功 false代表失败
 */
UIWrapper.prototype.saveConfig = function (key, value) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.saveConfig(key, value);
};

/**
 * 根据设置的tag，保存所有配置
 * @return 布尔型 true 保存成功，false 保存失败
 */
UIWrapper.prototype.saveAllConfig = function () {
    if (uiWrapper == null) {
        return false;
    }
    return uiWrapper.saveAllConfig();
};
/**
 * 设置视图的值
 * @param tagOrView 视图的tag或者视图对象
 * @param value 值，字符串或者是布尔型
 * @return 布尔型 true代表成功 false代表失败
 */
UIWrapper.prototype.setViewValue = function (tagOrView, value) {
    if (uiWrapper == null) {
        return;
    }
    return uiWrapper.setViewValue(tagOrView, value);
}
/**
 * 取得视图的值
 * @param tagOrView 视图的tag或者视图对象
 * @return 字符串或者布尔型
 */
UIWrapper.prototype.getViewValue = function (tagOrView) {
    if (uiWrapper == null) {
        return null;
    }
    var x = uiWrapper.getViewValue(tagOrView);
    try {
        x = JSON.parse(x);
        var type = x["type"] + "";
        var value = x["value"] + "";
        if (type === "string") {
        } else if (type === "boolean") {
            if (value === "true") {
                return true;
            } else {
                return false;
            }
        } else if (type === "int") {
            return parseInt(value);
        } else if (type === "float") {
            return parseFloat(value);
        }
        return value;
    } catch (e) {

    }
    return null;

};


/**
 * 是否是无障碍运行模式
 * @return 布尔型 true 是 false 否
 */
UIWrapper.prototype.isAccMode = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.isAccMode();
};
/**
 * 是否是代理运行模式
 * @return 布尔型 true 是 false 否
 */
UIWrapper.prototype.isAgentMode = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.isAgentMode();
};
/**
 * 自动化服务是否正常
 * @return 布尔型 true 是 false 否
 */
UIWrapper.prototype.isServiceOk = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.isServiceOk();
};
/**
 * 设置运行模式
 * @param mode 1 代表是代理模式  2 代表无障碍模式
 * @return 布尔型 true 是 false 否
 */
UIWrapper.prototype.setRunningMode = function (mode) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.setRunningMode(mode);
};


/**
 * 启动环境
 * @return 布尔型 true代表启动成功，false代表启动失败
 */
UIWrapper.prototype.startEnv = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.startEnv();
};


/**
 * 开启一个定时任务
 * @param tag
 * @param execTime 定时时间格式: 2020-04-17 19:20:00，或者直接是秒数字，例如 3，代表3秒后
 * @param cancelBeforeRunning 是否取消之前的任务
 * @return 整型 jobid
 */
UIWrapper.prototype.startJob = function (tag, execTime, cancelBeforeRunning) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.startJob(tag, execTime, cancelBeforeRunning);
};
/**
 * 取消所有的定时任务
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.cancelAllJob = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.cancelAllJob();
};
/**
 * 取消指定标签的任务
 * @param tag 标签
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.cancelJob = function (tag) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.cancelJob(tag);
};
/**
 * 获取所有定时任务TAG
 * @return JSON字符串
 */
UIWrapper.prototype.getAllJobTag = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getAllJobTag();
};
/**
 * 停止当前运行的测试任务
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.stopTask = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.stopTask();
};
/**
 * 显示日志浮窗
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.showLogWindow = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.showLogWindow();
};


/**
 * 关闭日志浮窗
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.closeLogWindow = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.closeLogWindow();
};

/**
 * 显示启停浮窗
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.showCtrlWindow = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.showCtrlWindow();
};
/**
 * 关闭启停浮窗
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.closeCtrlWindow = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.closeCtrlWindow();
};

/**
 * 异步启动环境
 * @param callback
 */
UIWrapper.prototype.startEnvAsync = function (callback) {
    if (uiWrapper == null) {
        return;
    }
    uiWrapper.startEnvAsync(callback);
};
