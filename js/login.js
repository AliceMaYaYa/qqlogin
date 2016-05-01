/**
 * Created by chale on 2016/5/1.
 */
(function ($) {
    $(function () {
        $(".login-btn").click(function () {
            var _username=$(".username").val().trim();
            var _password=$(".password").val().trim();
            if(_username.length <1){
                alert("请输入用户名！");
                return;
            }
            if(_password.length <1){
                alert("请输入密码！");
                return;
            }
            $.post("http://baidu.com",{
                "username":$(".username").val(),
                "password":$(".password").val()
            },function (_data) {
            });
        })
    })
})(jQuery);