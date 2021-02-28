var cursorVisible = true;
var currentFeatureIndex = 0;
var i = 0, crid = -1, ldt = 0;
var featureTxtArr = ['CARDS', 'PAYMENTS', 'LOAN', 'SUPPORT', 'REWARDS', 'SAVINGS', 'INVESTMENTS', 'FOREX', 'ANALYTICS'];
var isIe = false, isSaf = false;

window.onload = function () {
    ldt = this.Date.now() - ldst;
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (document.cookie.length > 0)
        showInviteResponse("Didn't know you'd be back so soon..<br>Welcome Back!", "johny_2")
    if (isBrowserSupported()) {
        this.setTimeout(this.bindWriter, 700);
        this.setTimeout(this.bindSubmit, 2000);
        animateFeature(featureTxtArr[0].toLowerCase());
        setInterval(function () {
            var cusorDom = document.getElementById('cursor');
            if (cursorVisible) {
                cusorDom.style.opacity = 0;
                cursorVisible = false;
            } else {
                cusorDom.style.opacity = 1;
                cursorVisible = true;
            }
        }, 350);

        document.getElementById('btn_sub').attributes['disabled'] = "false";
        var domFunnelArr = document.getElementsByClassName("vc_funnel");
        for (var i = 0; i < domFunnelArr.length; i++)
            domFunnelArr[i].src = " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAACdCAMAAADlslR4AAAAqFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs30iGAAAAN3RSTlMAAwsHYC0czL4UNQ72VBiqjWYl6N/GnYNHQjoQ66KSMeXTs3tybEs/Iu+3iGhOp1ko+tl3IK6YH3KnUgAAAqlJREFUaN7V2Eei4jAQRdEnyzkbEw3GpE+GT2zvf2c97/kd9FlADUpSBQnlHEWyHhrfep4Vx3adI46NGzb8YS6OiaeRQN0+F8jLfIE89yPQo3oINLjGAvnXg0B5tTfi5NfMijOv3EQcp9pF4hh36wuUTQYC7S+eQIdlLFDzZyaQN84EGvypBPLLN/psL5dEHLtdfsSxu3EnkFs0AmXnm0Cz0DXixOc3Gf5RlFacfDxOxEnKjS+OnYw8ccxPMBMoC1yBDsHWivMIyrk4eVjk4iT38CiOLYNYHPN+3QRyh5VA0+HFiNMF90QcPwx9cZJ23Qk0GWYCVaudEWe/Kh1xvOEmEicfrQfizNu6EcdOTr8CuYuJQNNVa8Tx1iNfnChcxQIte/Rsq3RixJnVxVyc4zp4iONsFlNxTPm8GnHcfumIc1iEkTiD0dATZ96mmThm208Eup3QhvgJ0OQnbeoKtGNv/jRFJ83PejETx7n3P+KYXT92xNmfAjL5g+A0FWc+7rcC/Tw3iTjNqo7FmW/Qq6ldXzjizOphLE4epleBJn0RiTOrV4040blHN9xtfyazc1ihRT/69hMrTtWPjuJ4QforjnNhe9ZsMezEScb0sIkebvRlq777DHNx/BE7zP7037k4fnDaC+T2d0ecKEwzgW49uuU6xRO9+3GK/myasi+NOPlwcRDo93lOxLEtW9mOr8VAIDctjDjOmP3cHKzrXKAsHVtx7LLPBMpH9UCgpka3LfNOK4GczSIW6PgKI4GyeiuQWZ6mAjkh2rnUvf5YgdzaFWk5bARyzhtfoMfrYgS6rVyRtkEj0v2Lpj8ZlVYgL7iKdBtNRdqdPZGWrS9Se3FEKiqhir1Q94NQbSdU+RHqnQh1NUL9irUX65/q9t/Fn4nViBUboTw2/l8aezKXklesBAAAAABJRU5ErkJggg==";
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "ws/cs.asmx/ldlg", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify({ ldt: ldt, sw: width, sh: height }));
    xhttp.onreadystatechange = function () {
        var rval = parseInt(this.responseText, 10);
        if (this.readyState == 4 && this.status == 200 && !isNaN(rval))
            crid = rval;
    };

    animateLoader();
};

function bindSubmit() {
    document.getElementById('btn_sub').addEventListener('click', this.submitInvite);
}

function bindWriter() {
    var txt = featureTxtArr[currentFeatureIndex];
    if (i < txt.length) {
        document.getElementById("feature_txt").innerHTML += txt.charAt(i);
        i++;
        setTimeout(bindWriter, 110);
    }
    else
        this.setTimeout(this.bindWriterDel, 700);
}

function bindWriterDel() {
    var txt = featureTxtArr[currentFeatureIndex];
    if (i > 0) {
        i--;
        document.getElementById("feature_txt").innerHTML = txt.substring(0, i);
        setTimeout(bindWriterDel, 110);
    } else {
        currentFeatureIndex++;
        if (currentFeatureIndex >= featureTxtArr.length)
            currentFeatureIndex = 0;
        animateFeature(featureTxtArr[currentFeatureIndex].toLowerCase());
        this.setTimeout(this.bindWriter, 700);
    }
}

function animateFeature(featureClass) {
    var elemArr = document.getElementsByClassName("selected");
    var elemArrLen = elemArr.length;
    for (var i = 0; i < elemArrLen; i++) {
        removeClass(elemArr[0], "selected");
    }
    elemArr = document.getElementsByClassName(featureClass);
    for (var i = 0; i < elemArr.length; i++) {
        elemArr[i].className += " selected";
    }
}

function submitInvite() {
    var domInpBtn = document.getElementById('btn_sub');
    var email = document.getElementById('inp_eml').value;
    var re = new RegExp("^[a-zA-Z0-9]+[a-zA-Z0-9\\._+\\-]*@(?:[a-zA-Z0-9-\\.])+\\.[a-zA-Z]{2,4}$");
    if (domInpBtn.attributes['disabled'] == "false" && typeof (document.cookie) != "undefined") {
        if (email.length == 0)
            showErr("1");
        else if (email.length > 64 || re.test(email) == false)
            showErr("2");
        else {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            domInpBtn.attributes['disabled'] = "true";
            domInpBtn.className += " loadingstate";
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "ws/cs.asmx/sinv", true);
            xhttp.setRequestHeader("Content-Type", "application/json");
            xhttp.send(JSON.stringify({ ldt: ldt, sw: width, sh: height, eml: email, crid: crid, nm: "", mob: "" }));
            xhttp.onreadystatechange = function () {
                domInpBtn.attributes['disabled'] = "false";
                var rval = parseInt(this.responseText, 10);
                if (this.readyState == 4 && this.status == 200 && !isNaN(rval)) {
                    var ct = parseInt(rval, 10);
                    var html = "", cnm = "";
                    if (ct == 1)
                        cnm = "johny_1"
                    else if (ct == 2) {
                        cnm = "iron_man"
                        html = "Wait, we will be back soon.";
                    }
                    else if (ct >= 3) {
                        html = "We are on a mission to get back to you soon!";
                        cnm = "avengers";
                    }
                    showInviteResponse(html, cnm);
                    sveml(email);
                } else if (this.readyState != 2 && this.readyState != 3) {
                    showErr("Poor network connected detected. Check if you are connected to the Internet and come again");
                    removeClass(domInpBtn, "loadingstate");
                }
            };
        }
    }
}

function showInviteResponse(html, cnm) {
    var domInviteResponse = document.getElementById("invite_submit_response");
    if (html.length > 0)
        domInviteResponse.innerHTML = html;
    domInviteResponse.className = cnm;
    domInviteResponse.style.display = "block";
    var flipper_container = document.getElementById("flipper_container");
    flipper_container.className +=
        (isIe || isSaf ? " show" : " flip");
    setTimeout(function () {
        document.getElementById("invite_submit_form").style.display = "none";
    }, isIe || isSaf ? 50 : 600);
}

function showErr(msg) {
    var domEmlErr = document.getElementById("email_err");
    var domEmlErrBox = document.getElementById("email_errbox");
    if (isNaN(msg)) {
        domEmlErr.innerHTML = msg;
        domEmlErr.style.display = "block";
    } else {
        domEmlErrBox.innerText = (msg == "1" ? "Required" : "Invalid");
        domEmlErrBox.className = "show";
    }
    setTimeout(function () {
        document.getElementById("email_err").style.display = "none";
        removeClass(document.getElementById("email_errbox"), "show");
    }, 5000)
}

function gthc(v) {
    var h = 0;
    if (v.length > 0) {
        for (var i = 0; i < v.length; i++) {
            var c = v.charCodeAt(i);
            h = ((h << 5) - h) + c;
            h = h & h;
        }
    }
    return h;
}

function sveml(v) {
    var ckExTime = 4;
    var date = new Date();
    date.setTime(date.getTime() + (ckExTime * 60 * 1000));
    document.cookie = (gthc(v).toString() + "; expires=" + date.toGMTString());
}

function isBrowserSupported() {
    var rval = true;
    var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/
    if (navigator.userAgent.indexOf('MSIE') != -1)
        detectIEregexp = /MSIE (\d+\.\d+);/

    if (detectIEregexp.test(navigator.userAgent)) {
        isIe = true;
        var ieversion = new Number(RegExp.$1);
        if (ieversion < 10) {
            document.getElementById("page_container").style.display = "none";
            document.getElementById("browser_support").style.display = "block";
            rval = false
        }
    }

    isSaf = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    if (isSaf) {
        document.getElementById("invite_submit_response").style.display = "none";
    }

    return rval;
}

function animateLoader() {
    var elemArr = document.getElementsByClassName("dot");
    var elemArrLen = elemArr.length;
    setInterval(function () {
        for (var i = 0; i < elemArrLen; i++) {
            var colorClass = elemArr[i].classList[elemArr[i].classList.length - 1];
            removeClass(elemArr[i], colorClass);
            var count = parseInt(colorClass.replace('c', ''), 10);
            elemArr[i].className += " c" + (count == 1 ? 3 : count - 1);
        }
    }, 300);
}