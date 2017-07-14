/**
 * 种子文件
 * 兼容不同的模块化系统
 */
;(function(global, factory) {
    // ^^ 以上，将作用域和工厂函数传入，以免污染全局
    // 如果空间中有module对象和object对象
    if(typeof module !== 'undefined' && typeof exports === 'object') {
        // 可以判定当前处在CommonJS环境, 将工厂函数导出
        module.exports = factory
    } else if (typeof define === 'function' && define.amd) {
        // 如果空间中有define函数，并且有amd属性，可以判定当前是是AMD环境
        // 相当于使用闭包导出
        define(function() {
            return factory
        })
    } else {
        // 如果以上条件都不满足，则将工厂函数直接添加在作用域下
        global.MyModule = factory;
    }
})(window, function() {
    // ...
})