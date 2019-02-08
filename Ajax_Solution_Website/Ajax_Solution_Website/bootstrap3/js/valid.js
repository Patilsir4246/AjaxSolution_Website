//modal ,modaless dialog (both dialog with inormative predefine Icon,round number,startdate enddate,date day addition,
var elements = [];
var validfor = [];
var validbtn = []
var msg = [];
var pos = [];
var submt = [];
var GFlag = true;

//1:validfor cuntion 2:messages if any 3:position to show msg
function submitbtn(ctrl) {
    for (l = 0; l < submt.length; l++) {
        if ($(submt[l]).attr('id').lastIndexOf(ctrl) != -1)
            return $(submt[l]);
    }
}

function initCtrl(allInputs) {
    var formChildren = $("form > *");
    // $("#messages").text("Found " + allInputs.length + " inputs and the form has " +
    //                formChildren.length + " children." + $("#"+ allInputs[9].id).attr("req"));
    var elements = [];
    var j = 0;
    var k = 0;
    allInputs.each(function(i) {
        if ($(allInputs[i]).attr("req") != null) {
            //if($(allInputs[i]).attr("req").split(",")[3]!=null)
            //alert($('#<%='+$(allInputs[i]).attr("req").split(",")[3]+'.ClientID %>')); //$('#<%= txtStartTime.ClientID %>')
            if ($(allInputs[i]).prop("tagName") == "DIV") {
                // alert($(allInputs[i]).attr("id"));
                elements[j] = $("#" + $(allInputs[i]).attr("id") + "_TextBox");
                validfor[j] = $(allInputs[i]).attr("req").split(",")[0];
                msg[j] = $(allInputs[i]).attr("req").split(",")[1];
                pos[j] = $(allInputs[i]).attr("req").split(",")[2];
                validbtn[j] = $(allInputs[i]).attr("req").split(",")[3];
            } else {
                elements[j] = allInputs[i];
                validfor[j] = $(elements[j]).attr("req").split(",")[0];
                msg[j] = $(elements[j]).attr("req").split(",")[1];
                pos[j] = $(elements[j]).attr("req").split(",")[2];
                validbtn[j] = $(elements[j]).attr("req").split(",")[3];
                if ($(elements[j]).attr("req").toUpperCase() == "SUBMIT") {
                    submt[k] = $(elements[j]);
                    k++;
                }
            }
            j = j + 1;
        }
    });

    addEvnt(elements);

    // so it won't submit
    //  $("form").submit(function () { return false; }); 
    /*$("#"+ allInputs[9].id).blur(function ()
    {
    d=document.createElement('div');	 
		$(d).addClass('reqdiv')
    .html('asdkajslkdjaksjdlkajslkdjalksjdlkajsdkjaslkjdlsa')
    .appendTo($('body')) //main div
    .click(function(){
    $(this).remove();
    })
    .hide()
    .css("left" ,$("#"+ allInputs[9].id).offset().left +$("#"+ allInputs[9].id).width())
    .css("top" ,$("#"+ allInputs[9].id).offset().top )
    .slideToggle(300)
    .delay(2500)
    .slideToggle(300)
    .queue(function() {
    $(this).remove();
    });
    });*/
}

function addEvnt(ele) {
    for (i = 0; i < ele.length; i++) {
        var validFunc = validfor[i].split("_");      
        for (j = 0; j < validFunc.length; j++) {
            // if(validFunc[j]=='BLANK'){  $(ele[i]).blur({e:ele}, function (e){alert(e.data.e);	});		}
            var sbmt = submitbtn(validbtn[i]);
            switch (validFunc[j]) {
                case 'ISBLANK': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true ) IsBlank(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) {if (!$(sbmt).attr("disabled")) return IsBlank(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;      //
                case 'ISNUM': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsNumber(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsNumber(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISINT': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsInteger(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsInteger(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISDOUBLE': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsDouble(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsDouble(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISEMAIL': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsEmail(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsEmail(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISURL': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsUrl(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsUrl(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISDATE': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsDate(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsDate(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISMOBILE': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsMobile(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsMobile(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISPHONE': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsPhoneNo(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsPhoneNo(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISTIME': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsTime(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsTime(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISALPHA': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsAlphabet(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsAlphabet(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'ISPASSMATCH': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsBlank(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) {if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsBlank(e.data.el, e.data.ms, e.data.po, e.data.vb);} else return true;});
                    break;
                case 'PASSSTRENGTH': $(ele[i]).blur({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) IsBlank(e.data.el, e.data.ms, e.data.po, e.data.vb); });
                    if (sbmt != null) $(sbmt).click({ el: ele[i], ms: msg[i], po: pos[i], vb: validbtn[i] }, function(e) { if ($(e.data.el).prop("disabled") != true) { if (!$(sbmt).attr("disabled")) return IsBlank(e.data.el, e.data.ms, e.data.po, e.data.vb); } else return true; });
                    break;
                case 'ISALPHANUM': break;
                case 'ISDOUBLE': break;

                case 'ISSELECT': break;

            }




            var events = $._data(ele[i], "events");
            if (events && typeof (events) == 'object' && typeof (events['blur']) == 'object') {
                //alert(validFunc[j]+ "               "+$._data(ele[i], "events")['blur'] );
            }
        }

        /*$(ele[i]).blur(function ()
        {	alert('dikka tikkaasasd');
        });*/

        /*$("#"+ allInputs[9].id).blur(function ()
        {	
        });*/

    }
    //alert($(ele[i]).attr("req")+"AA");});
}

function IsSelect(ctrl, message, position) {
}

function IsBlank(ctrl, message, position, vbtn) {
    var flag = false;
    alert("h1hh");
    var flagCombo = false;
    var sbmt = submitbtn(vbtn);
    if (ctrl == null) return;
    var sText
    if ($(ctrl).parent().attr("class") == "ajax__combobox_textboxcontainer") {
        sText = $("#" + $(ctrl).attr("id").substring(0, $(ctrl).attr("id").lastIndexOf("_TextBox")) + "_HiddenField").val();
        flagCombo = true;
        if (sText == "0")
            flag = false;
        else
            flag = true;
        if (flag == false) {
            if (message == '')
                DisplayMsg(ctrl, "Please enter value.", position, vbtn);
            else
                DisplayMsg(ctrl, message, position, vbtn);
            return false;
        }
        else {
            RemoveMsg(ctrl, vbtn);
        }
        //  alert($(ctrl).attr("id")+ " = " + sText);
    } else {
        sText = ctrl.value;
    }
    if (sText == null) return;
    if (sText == "" || sText == "Select" || sText == "-1")
        flag = false;
    else
        flag = true;
    if (flagCombo == true && flag == false) {
        if (message == '')
            DisplayMsg(ctrl, "Please select value.", position, vbtn);
        else
            DisplayMsg(ctrl, message, position, vbtn);
    }
    else {
        if (flag == false) {
            if (message == '')
                DisplayMsg(ctrl, "Please enter value.", position, vbtn);
            else
                DisplayMsg(ctrl, message, position, vbtn);
        }
        else {
            RemoveMsg(ctrl, vbtn);
        }
    }
    return flag;
}

function DisplayMsg(ctrl, msg, position, vbtn) {
    position = $.trim(position.toUpperCase());
    //alert("div_" + $(ctrl).attr("id"));
    if (position == 'TOP' || position == 'LEFT' || position == 'RIGHT' || position == 'BOTTOM') {        
        if ($("#" + "div_" + $(ctrl).attr("id")) != null) {
            $("#" + "div_" + $(ctrl).attr("id")).remove();
            d = document.createElement('div');
            d.id = "div_" + $(ctrl).attr("id");            
        }
        else {
            d = document.createElement('div');
            d.id = "div_" + $(ctrl).attr("id"); 
        }
        $(d).addClass('reqdiv')
		.html(msg + "<div class='notch'></div>")
		.appendTo($('body')) //main div
		.click(function() {
		    $(this).remove();
		})
		.hide()
		.slideToggle(300)
		.delay(2500)
		.hide(1000)
        var Cleft = $(ctrl).offset().left;
        var Ctop = $(ctrl).offset().top;
        var Cheight = $(ctrl).height();
        var Cwidth = $(ctrl).width();
        switch (position) {
            case 'TOP': $(d).css("left", Cleft);
                $(d).css("top", Ctop - $(d).height()); break;
            case 'RIGHT': $(d).css("left", Cleft + Cwidth);
                $(d).css("top", Ctop); break;
            case 'LEFT': $(d).css("left", Cleft - $(d).width());
                $(d).css("top", Ctop); break;
            case 'BOTTOM': $(d).css("left", Cleft);
                $(d).css("top", Ctop + Cheight); break;
        }
        var sbmt = submitbtn(vbtn);
        if (sbmt != null) $(sbmt).attr("disabled", "disabled");
        // $("form").unbind('submit');
        // $("form").submit(function(e) {return false;});
    }
}

function RemoveMsg(ctrl, vbtn) {
    if ($("#" + "div_" + ctrl.id) != null) { $("#" + "div_" + ctrl.id).remove() };
    var sbmt = submitbtn(vbtn);
    if (sbmt != null) $(sbmt).removeAttr("disabled");
    //$("form").unbind('submit');
    //   $("form").submit(function(e) { return true; });
}

function IsNumber(ctrl, message, position, vbtn) {
    var IsNumber = true;
    var Char;
    var ValidChars = '0123456789';
    var sText = ctrl.value;
    if (sText == null || sText == "") return true;

    if (ctrl.value.match(/^(0|([0-9]\d*))$/) == null) {
        IsNumber = false;
        if (message == "") {
            DisplayMsg(ctrl, "Please enter Numeric value between 0 to 9.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
        return IsNumber;
    }

    if (sText.length < 0) {
        IsNumber = false;
        if (message == "") {
            DisplayMsg(ctrl, "Please enter Numeric value between 0 to 9.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
    }
    if (IsNumber) RemoveMsg(ctrl, vbtn);
    return IsNumber;
}

function IsInteger(ctrl, message, position, vbtn) {
    var IsNumber = true;

    if (ctrl.value == null || ctrl.value == "") return true;
    if (ctrl.value.indexOf('.') != -1) {
        IsNumber = false;
        if (message == "") {
            DisplayMsg(ctrl, "Please enter Numeric value.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
    }
    if (isNaN(ctrl.value)) {
        IsNumber = false;
        if (message == "") {
            DisplayMsg(ctrl, "Please enter Numeric value.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
    }
    if (IsNumber) RemoveMsg(ctrl, vbtn);
    return IsNumber;
}

function IsDouble(ctrl, message, position, vbtn) {
    var flag = true;
  
    // if (ctrl.value == null || ctrl.value == "") alert('test'); 
    if (ctrl.value == null || ctrl.value == '') {
        flag = false;
        if (message == "") {
            DisplayMsg(ctrl, "Please enter float  value.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
        return flag;
    }

//    if (ctrl.value.match('^[0-9]*\.[0-9]*$') == null || ctrl.value.match('^[0-9]*\.[0-9]*$') == null || ctrl.value.match('^[0-9]*\.[0-9]*$') == false)//[-+]?[0-9]*\.?[0-9]+
//    {
//        flag = false;
//        if (message == "") {
//            DisplayMsg(ctrl, "Please enter float value. Example 0.0 etc...", position, vbtn);
//        } else {
//            DisplayMsg(ctrl, message, position, vbtn);
//        }
//        return flag;
    //    }

    var filter = /^[0-9]{1,10}([.]{1}[0-9]{1,3})$/;
    var filter1 = /^[0-9]{0,10}$/;
    if (ctrl.value.match(filter) == null || ctrl.value.match(filter) == null || ctrl.value.match(filter) == false)//[-+]?[0-9]*\.?[0-9]+
    {
        if ((ctrl.value.match(filter1) == null ||  ctrl.value.match(filter1) == false)&&  ctrl.value.match(filter1)!=0) {
            flag = false;
            if (message == "") {
                DisplayMsg(ctrl, "Please enter float value. Example 0.000 (upto 3 Decimal point)", position, vbtn);
            } else {
                DisplayMsg(ctrl, message, position, vbtn);
                       }
                    }
        return flag;
    }
    // alert(ctrl.value.match('^[0-9]*\.[0-9]*$') + "               " + ctrl.value.match('[-+]?[0-9]*\.?[0-9]+') + "     " + $('#ctl00_ContentPlaceHolder1_btnSave').attr("disabled"));
    if (flag) RemoveMsg(ctrl, vbtn);

    return flag;
}


function IsEmail(ctrl, message, position, vbtn) {
    var flag = true;
    if (ctrl == null) return;

    if (ctrl.value == null || ctrl.value == "") return true;
    if (ctrl.value == null || ctrl.value == '') {
        flag = false;
        if (message == "") {
            DisplayMsg(ctrl, "Please enter valid Email Address.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
        return;
    }

    //var filter = /^.+@.+\..{2,3}$/;
    //var filter = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    //var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    var filter = /^\w+([\.-]?\w+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/;
    if (filter.test(ctrl.value) == false)
        flag = false;
    else
        flag = true;

    if (flag == false) {
        if (message == "") {
            DisplayMsg(ctrl, "Please enter valid Email Address.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
        return;
    }

    if (flag) RemoveMsg(ctrl, vbtn);
}

function IsUrl(ctrl, message, position, vbtn) {
    var flag = true;

    if (ctrl.value == null) return;
    if (ctrl.value == null || ctrl.value == "") return true;
    var filter = /^(ftp|https?):\/\/(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/;
    //^(https?|ftp)://[a-z0-9-]+(\.[a-z0-9-]+)+(/[\w-]+)*/[\w-]+\.(gif|png|jpg)$
    //alert(filter.test(ctrl.value));
    if (filter.test(ctrl.value) == false)
        flag = false;
    else
        flag = true;

    if (flag == false) {
        if (message == "") {
            DisplayMsg(ctrl, "Please enter valid url.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
        return;
    }
    if (flag) RemoveMsg(ctrl, vbtn);
    return flag;
}

function IsIntForDate(sText) {
    var ValidChars = "0123456789";
    var IsNumber = true;
    var Char;

    for (i = 0; i < sText.length && IsNumber == true; i++) {
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            IsNumber = false;
        }
    }
    return IsNumber;
}
function IsDate(ctrl, message, position, vbtn) {
    var flag = true;

    var currVal = ctrl.value;
    if (ctrl.value == null || ctrl.value == "") return true;
    if (currVal == '')
        flag = false;
    if (flag == false) {
        if (message == "") {
            DisplayMsg(ctrl, "Please enter valid Date.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
        return;
    }
    //Declare Regex  
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var dtArray = currVal.match(rxDatePattern); // is format OK?

    if (dtArray == null)
        flag = false;
    else {
        dtDay = dtArray[1];
        dtMonth = dtArray[3];
        dtYear = dtArray[5];
        //Checks for mm/dd/yyyy format.
        // dtMonth = dtArray[1];
        // dtDay= dtArray[3];
        // dtYear = dtArray[5];

        //Checks for dd/mm/yyyy format.


        if (dtMonth < 1 || dtMonth > 12)
            flag = false;
        else if (dtDay < 1 || dtDay > 31)
            flag = false;
        else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
            flag = false;
        else if (dtMonth == 2) {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay > 29 || (dtDay == 29 && !isleap))
                flag = false;
        }

    }


    if (flag == false) {
        if (message == "") {
            DisplayMsg(ctrl, "Please enter valid Date.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
        return;
    }
    if (flag) RemoveMsg(ctrl, vbtn);
    return (true);
}


function IsTime(ctrl, message, position, vbtn) {
//    var inputVal = ctrl.value;
//    var dateReg = /^(1[012]|0[1-9]):[0-5][0-9](\\s)? (am|pm)+$/;
//    if (ctrl.value == null || ctrl.value == "") return true;
//    if (!dateReg.test(inputVal)) {
//        if (message == "") {
//            DisplayMsg(ctrl, "Please enter valid Time.", position, vbtn);
//        } else {
//            DisplayMsg(ctrl, message, position, vbtn);
//        }
//        return;
//    }
//    else
//        RemoveMsg(ctrl);
//        
         var inputVal = ctrl.value;
    var dateReg = /^(0[0-9]|1[011]):([0-5]\d)\s?(?:AM|PM)?$/;
    if (ctrl.value == null || ctrl.value == "") return true;
    if (!dateReg.test(inputVal)) {
        if (message == "") {
            DisplayMsg(ctrl, "Please enter valid Time.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
        return;
    }
    else
        RemoveMsg(ctrl);
}

function IsMobile(ctrl, message, position, vbtn) {
    var flag = true;
    var sText = ctrl.value;
    if (sText == null || sText == "") flag = false;



    if (sText.length == 10) {
        if (ctrl.value.match(/^(0|([1-9]\d*))$/) == null)
            flag = false;
        else
            flag = true;


    }
    else {
        flag = false;

    }

    if (!flag) {
        if (message == "") {
            DisplayMsg(ctrl, "Please enter valid 10 digit Mobile no.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
    }
    else {
        RemoveMsg(ctrl, vbtn);
    }
    return flag;
}

function IsPhoneNo(ctrl, message, position, vbtn) {
    var IsNumber = true;
    var Char;
    var ValidChars = '0123456789';
    var sText = ctrl.value;
    if (sText == null || sText == "") return true;

    if (ctrl.value.match(/^(0|([0-9]\d*))$/) == null) {
        IsNumber = false;
        if (message == "") {
            DisplayMsg(ctrl, "Please enter phone no without special character and alphabet.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
        return IsNumber;
    }

    if (sText.length < 6) {
        IsNumber = false;
        if (message == "") {
            DisplayMsg(ctrl, "Please enter phone no without special character and alphabet.", position, vbtn);
        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
    }
    if (IsNumber) RemoveMsg(ctrl, vbtn);
    return IsNumber;
}

function IsAlphabet(ctrl, message, position, vbtn) {
    var flag = false;

    var sText = ctrl.value;
    if (sText == null || sText == "") return true;
    var filter = /^[A-Za-z ]{1,50}$/;
    if (filter.test(sText) == false)
        flag = false;
    else
        flag = true;

    if (flag == false) {
        if (message == "") {
            DisplayMsg(ctrl, "Please enter alphabets only.", position, vbtn);

        } else {
            DisplayMsg(ctrl, message, position, vbtn);
        }
    } else { RemoveMsg(ctrl, vbtn); }

    return flag;
}



function TsysMsg(msg, btn, icon) {
    var esc = true;
    var modal = false;
    
    if ($("#div_Msg") != null)
    { $("#div_Msg").remove(); d = document.createElement('div'); d.id = "div_Msg"; }
    else { d = document.createElement('div'); d.id = "div_Msg"; }
    var img = "";
    switch (icon.toUpperCase()) {
        case 'SUCCESS': img = 'images/success.png';
            break;
        case 'INFO': img = 'images/info.gif'; break;
        case 'CRITICAL': img = 'images/Critical.gif'; break;
        case 'ERROR': img = 'images/error.jpg'; break;
        default: img = 'images/info.gif';
    }
    $(d).addClass('msg')
			.html('<span><img src="' + img + '"/>' + msg + '</span>')
			.appendTo($('body')) //main div
    //.click(function(){
    //	$(this).remove();
    //	})
    //.hide()
    //.slideToggle(300)
    //.delay(2500)
    //.slideToggle(300)
    //.queue(function() {
    //	$(this).remove();
    //});
    switch (btn.toUpperCase()) {
        case 'MODLESS': $(" <a class='bClose'>x<a/>").appendTo($("#div_Msg"));
            modal = true; esc = true;
            break;
        case 'OK': $("<div> <input id='div_Msg_ok' type='button' value='OK' class='btnok' onclick=\"$('#div_Msg').bPopup().close();\" /></div>").appendTo($("#div_Msg")); modal = false; esc = false; break;
        case 'OKCANCEL': $("<div><input id='div_Msg_ok' type='button' value='OK' class='btnokcancel' onclick=\"$('#div_Msg').bPopup().close();\" /><input id='div_Msg_Cancel' type='button' value='Cancel' class='btnokcancel' onclick=\"$('#div_Msg').bPopup().close();\"/></div>").appendTo($("#" + "div_Msg"));
            modal = false; esc = false; break;
        case 'YESNO': $("<div><input id='div_Msg_yes' type='button' value='Yes' class='btnokcancel' onclick=\"$('#div_Msg').bPopup().close();\" /><input id='div_Msg_no' type='button' value='No' class='btnokcancel' onclick=\"$('#div_Msg').bPopup().close();\"/></div>").appendTo($("#" + "div_Msg"));
            modal = false; esc = false; break;
        case 'ISBLANK': break;
    }
    // btn.prevent
    //    jQuery(document).ready(function($) {
    //      $("#div_Msg").dialog();
    //  })

    //  $(function() {
    //  $("#div_Msg").dialog();
    //  });$(this).find('.popup')
    $("#div_Msg").bPopup({
        modalClose: modal,
        opacity: 0.6,
        positionStyle: 'fixed', //'fixed' or 'absolute'
        escClose: esc
    });

    return;

//    var Cleft = $(ctrl).offset().left;
//    var Ctop = $(ctrl).offset().top;
//    var Cheight = $(ctrl).height();
//    var Cwidth = $(ctrl).width();

//    switch (position) {
//        case 'TOP': $(d).css("left", Cleft);
//            $(d).css("top", Ctop - $(d).height()); break;
//        case 'RIGHT': $(d).css("left", Cleft + Cwidth);
//            $(d).css("top", Ctop); break;
//        case 'LEFT': $(d).css("left", Cleft - $(d).width());
//            $(d).css("top", Ctop); break;
//        case 'BOTTOM': $(d).css("left", Cleft);
//            $(d).css("top", Ctop + Cheight); break;
//    }
//    $(submt).attr("disabled", "disabled");
}

// function adjustgrid() {
//                $(".grdview").parent().css("height", "auto");
//                var cells = 0;

//                if ($(".grdview").find('tr').length > 0) {
//                    cells = $(".grdview").find('tr')[0].cells.length
//                } else {
//                    cells = 0;
//                }
//                if (cells > 3) {
//                    
//                     if($(".grdview").parent().parent().prop('tagName')=='TD')
//                     {
//                     $(".grdview").css("width", '100%!important' );
//                     }
//                    $(window).resize(function() {
//                        var cells = 0;
//                        
//                        if ($(".grdview").find('tr').length > 0) {
//                            cells = $(".grdview").find('tr')[0].cells.length
//                        } else {
//                            cells = 0;
//                        }
//                        if (cells > 3) {  if($(".grdview").parent().parent().prop('tagName')=='TD')
//                                         {
//                                         $(".grdview").css("width", '100% !important' );
//                                         }
//                        }
//                    });
//                }
//                $(".grdview").css("margin", "10px auto");
//            }


function adjustgrid() {
    $(".grdview").parent().css("height", "auto");
    var cells = 0;

    if ($(".grdview").find('tr').length > 0) {
        cells = $(".grdview").find('tr')[0].cells.length
    } else {
        cells = 0;
    }
    if (cells > 3) {
        if ($(".frmsearch").width() != null) {
            $(".grdview").css("width", $(".frmsearch").width());
        }
        $(window).resize(function() {
            var cells = 0;

            if ($(".grdview").find('tr').length > 0) {
                cells = $(".grdview").find('tr')[0].cells.length
            } else {
                cells = 0;
            }
            if (cells > 3) {
                if ($(".frmsearch").width() != null) {
                    $(".grdview").css("width", $(".frmsearch").width());
                }
            }
        });
    }
    $(".grdview").css("margin", "10px auto");
}

function adjustAddgrid() {
    $(".grdview").parent().css("height", "auto");
    var cells = 0;
    if ($(".grdview").find('tr').length > 0) {
        cells = $(".grdview").find('tr')[0].cells.length
    } else {
        cells = 0;
    }
    if (cells > 3) {
        if ($(".hrline").width() != null) {
            $(".grdview").css("width", $(".hrline").width());
        }
        $(window).resize(function() {
            var cells = 0;
            if ($(".grdview").find('tr').length > 0) {
                cells = $(".grdview").find('tr')[0].cells.length
            } else {
                cells = 0;
            }
            if (cells > 3) {
                if ($(".hrline").width() != null) {
                    $(".grdview").css("width", $(".hrline").width());
                }
            }
        });
    }
    $(".grdview").css("margin", "10px auto");
}

