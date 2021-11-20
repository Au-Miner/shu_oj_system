// 上传文件时使用的基础url
var BASE_URL = "http://111.229.161.159:8000";
if (process.env.NODE_ENV == 'development') { BASE_URL = "http://111.229.161.159:8080"; }

// 自定义邮箱规则
const checkEmail = (rule, value, callback) => {
    const regEmail = /^\w+@\w+(\.\w+)+$/;
    if (regEmail.test(value)) {
        // 合法邮箱
        return callback();
    }
    callback(new Error("请输入合法的邮箱"));
};

// 自定义手机号规则
const checkMobile = (rule, value, callback) => {
    const regMobile =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    if (!value || regMobile.test(value)) {
        return callback();
    }
    // 返回一个错误提示
    callback(new Error("请输入合法的手机号码"));
};

//  problemListFromRegionRequest根据标签筛选
const filterTag1 = function (value, row) {
    return row.out_problem.info.tags.indexOf(value) !== -1;
};

//  problemListFromRegionRequest根据困难度筛选
const filterDifficulty1 = function (value, row) {
    return (
        row.out_problem.info.difficulty >= value &&
        row.out_problem.info.difficulty < value + 2.5
    );
};

//  problemListPrivateRequest根据标签筛选
const filterTag2 = function (value, row) {
    return row.info.tags.indexOf(value) !== -1;
};

//  problemListPrivateRequest根据困难度筛选
const filterDifficulty2 = function (value, row) {
    return (
        row.info.difficulty >= value &&
        row.info.difficulty < value + 2.5
    );
};

export { BASE_URL, checkEmail, checkMobile, filterTag1, filterDifficulty1, filterTag2, filterDifficulty2 };