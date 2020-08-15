var modules = {};

/**
 * 载入EC自带的模块
 * @param libName 模块名称
 * @return {*}
 */
function loadECModule(libName) {
    var n = libName + "Wrapper";
    if (modules[n]) {
        //logd("已载入..." + n);
        return;
    }
    var r = ecImporter.loadECModule(libName);
    modules[n] = r;
    return r;
}

/**
 * 休眠
 * @param miSecond 毫秒
 */
function sleep(miSecond) {
    ecImporter.sleep(miSecond);
}

function toast(msg) {
    ecImporter.toast(msg);
}

/**
 * 调试日志
 * @param msg
 */
function logd(msg) {
    ecImporter.logd(msg);
}

/**
 * 信息日志
 * @param msg
 */
function logi(msg) {
    ecImporter.logi(msg);
}


/**
 * 错误日志
 * @param msg
 */
function loge(msg) {
    ecImporter.loge(msg);
}

/**
 * 警告日志
 * @param msg
 */
function logw(msg) {
    ecImporter.logw(msg);
}

/**
 * 设置保存日志信息到文件中
 * @param save 是否保存
 * @return 保存日志文件的目录
 */
function setSaveLog(save) {
    return ecImporter.setSaveLog(save);
}

/**
 * 打开EC系统设置页面
 * @return true 成功 false 失败
 */
function openECSystemSetting() {
    return ecImporter.openECSystemSetting();
}

/**
 * 载入dex文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.apk)或者是文件路径(例如 /sdcard/ab.apk)加载
 * @return true 载入成功， false载入失败
 */
function loadDex(path) {
    return ecImporter.loadDex(path);
}


/**
 * 载入jar文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.jar)或者是文件路径(例如 /sdcard/ab.jar)加载
 * @return true 载入成功， false载入失败
 */
function loadJar(path) {
    return ecImporter.loadJar(path);
}

/**
 * 退出脚本执行
 */
function exit() {
    ecImporter.exit();
}

/**
 * 保存res文件夹中的资源文件到指定的路径
 * @param fileName 文件名称，不要加res前缀
 * @param path 要保存到的路径地址，例如/sdcard/aa.txt
 * @return boolean|布尔型 true代表保存成功
 */
function saveResToFile(fileName, path) {
    return ecImporter.saveResToFile(fileName, path);
}

/**
 * 读取res文件夹中的资源文件，并返回字符串
 * @param fileName 文件名称，不要加res前缀
 * @return string 如果是null代表没内容
 */
function readResString(fileName) {
    return javaString2string(ecImporter.readResString(fileName));
}

/**
 * 读取res文件夹中的资源文件，并返Bitmap图片对象
 * @param fileName 文件名称，不要加res前缀
 * @return Bitmap 如果是null代表没内容
 */
function readResBitmap(fileName) {
    return ecImporter.readResBitmap(fileName);
}

/**
 * 读取res文件夹中的资源文件，并返 AutoImage 图片对象
 * @param fileName 文件名称，不要加res前缀
 * @return AutoImage 如果是null代表没内容
 */
function readResAutoImage(fileName) {
    var s = javaString2string(ecImporter.readResAutoImage(fileName));
    return new AutoImage(s);
}

/**
 * 启动环境
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
function startEnv() {
    return ecImporter.startEnv();
}

/**
 * 自动化服务是否正常
 * @return 布尔型  true代表正常，false代表不正常
 */
function isServiceOk() {
    return ecImporter.isServiceOk();
}


function javaString2string(x) {
    if (x == null) {
        return null;
    }
    return "" + x;
}

function object2JsonString(o) {
    if (o == null) {
        return "{}";
    }
    if (o instanceof String) {
        return o;
    }
    return json = JSON.stringify(o);
}
