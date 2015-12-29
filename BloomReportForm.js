/**
 * This function will have the code to send email
 * body: message to be sent
 */
function sendEmail(body) {
    //Note: the "toEmail" field value has been set to a dummy email address on purpose
    //to pervent a test user from inverdently sending email to a valid EPA mail box.
    var toEmail = "mailto:some-department@example-mailbox.epa.gov";
    var subject = "Bloom Observation on " + Date();
    window.open(toEmail + "?subject=" + subject + "&body=" + body);
}

/**
 * Function to identify the browser name and version
 */
function getBrowser() {
    var ua = navigator.userAgent, tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
}

$(document).ready(function () {
    $("#submit_btn").click(function () {
        //create JSON string from all the fields on the form
        var body = JSON.stringify($('#ReportForm').serializeObject());
        alert("The form content has been converted into JSON string." +
              " This string can be submitted to ReSTful API data service that makes an entry of this bloom report into an EPA Bloom Reports Data Source." +
              " However for this demo application, we will submit this information using user's email client.");
        sendEmail(body);
    });

    /**
     * Function to attach date picket to the date field when the browser is Firefox or IE
     */
    $(function () {
        var browserName = getBrowser();
        var firefoxPat = /Firefox/;
        var iePat = /IE/;
        if (firefoxPat.test(browserName) || iePat.test(browserName)) {
            $("#bloomobserveddate").datepicker();
        }
    });

    /**
     * The function is used to serialize any object that has embedded HTML objects, for example a HTML Form.
     */
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
});

