

$(window).bind("load", function(){

    // === SPLASH SCREEN ===
    localStorage.setItem("page", "0");
    var d = new Date();
    var currentYear = d.getFullYear();
    $('.project_yr').text(currentYear);

    function animateSplashScreen(){
        // $('.splash_logo').
    }

    setTimeout(() => {
        // animate loading
        let timerCtrl = 0;

        let loadCount = 0;
        let dot = '.';
        var loading = setInterval(() => {
            if (loadCount >= 3){ 
                $('#splashStart span').text('');
                loadCount = 0;
            }else{
                $('#splashStart span').append(dot);
            }
            
            if (timerCtrl >= 3000) {
                clearInterval(loading);
                // set page
                localStorage.setItem("page", "1");
                if (timerCtrl >= 3000 && localStorage.getItem("page") == "1") {
                    setTimeout(() => { 
                        $('.splash_screen').addClass('slideLeft'); 
                        setTimeout(() => { 
                            $('.splash_screen').addClass('hidebx');
                            $('.home_screen').removeClass('hidebx');
                            $('.home_screen').addClass('slideLeftReturn');
                            $('.app_navbar').removeClass('hidebx');
                            $('.parent').addClass('nav_room');
                        }, 1000);
                    }, 500);
                }
                console.log(timerCtrl + ' - show login');
             }else{
                 timerCtrl += 500;
             }
            loadCount++;
        }, 500);

        
    }, 2000);
    // === END OF SPLASH SCREEN ===

    // === CUSTOM SCROLL BAR ===
    var $scrollable = $('.scrollable');
    var $scrollbar  = $('.scrollbar');
    $scrollable.outerHeight(true);
    var H   = $scrollable.outerHeight(true);
    var sH  = $scrollable[0].scrollHeight;
    var  sbH = H*H/sH;

    $('.scrollbar').height(sbH);

    $scrollable.on("scroll", function(){
        $scrollbar.css({top: $scrollable.scrollTop()/H*sbH });
    });
    // === END OF CUSTOM SCROLL BAR ===


    // === TEST LIST ===
    /* Number the questions */
    var isNumLen = $('.isNumbered').length;
    for (i = 0; i <= isNumLen; i++) {
        y = i;
        y++;
        $('.isNumbered:eq('+ i +')').prepend(y + '. ');
        $('.isNumbered:eq('+ i +')').append(`<sup>*</sup>`);
    }
    $('.testQxnsList .listbtnbx input').attr('required', 'required');

    /* Add attr to test qxns */
    var testQxnLen = $('.listItembx').length;
    var lblLen = $('.listItembx:eq(0) .lblListCheckbx').length;
    var inputLen = $('.listItembx:eq(0) .lblListCheckbx input').length;
    for (n = 0; n <= testQxnLen; n++) {
        m = n;
        m++;
        /* add name to input */
        let inputName = 'qxn'+ m;
        $('.listItembx:eq('+ n +') .lblListCheckbx input').attr('name', inputName);
        $('.listItembx:eq('+ n +') .lblListCheckbx input').addClass('fadebx');

        /* add name as id to input */
        let qxnAns1 = inputName +'ans1';
        let qxnAns2 = inputName +'ans2';
        $('.listItembx:eq('+ n +') .lblListCheckbx input:eq(0)').attr('id', qxnAns1);
        $('.listItembx:eq('+ n +') .lblListCheckbx input:eq(1)').attr('id', qxnAns2);

        /* assign id to label for attr */
        $('.listItembx:eq('+ n +') .lblListCheckbx:eq(0)').attr('for', qxnAns1);
        $('.listItembx:eq('+ n +') .lblListCheckbx:eq(1)').attr('for', qxnAns2);

    }

    /* unckeck fm stations */
    $('.lblListCheckbx input'). prop("checked", false);

    let prob = new Array();

    /* handle label events */
    $('.lblListCheckbx').click(function(){
        let elem_id = $(this).attr('for');
        let label = '.lblListCheckbx[for='+elem_id+']';
        
        /* do logic bend on labels and inputs */
        let trunc_id = elem_id.substr(0, 7);
        let truncLabelA = '.lblListCheckbx[for='+trunc_id+'1]';
        let truncLabelB = '.lblListCheckbx[for='+trunc_id+'2]';
        $(truncLabelA).removeClass('lblChecked');
        $(truncLabelB).removeClass('lblChecked');

        /* check label */
        $(label).addClass('lblChecked');

        /* do scoring */
        
    });

    // === END OF TEST LIST ===


    $(document).on('click', '.msg-ok', function(){
        $('.msgbx-overlay').remove();
    });

    // $('.msg-space').append(`
    //     <!-- alert -->
    //     <div class="msgbx-overlay">
    //         <div class="msgbx-paper">
    //             <div class="msgbx-txt">Oops you left out some part of the form</div>
    //             <div class="msgbx-action">
    //                 <div class="msg-ok">OK</div>
    //             </div>
    //         </div>
    //     </div>
    // `);

    $('#testForm').on('submit', function(e){
        e.preventDefault();
        let form = $(this);
        console.log(form.serialize());
    });

    // if ("geolocation" in navigator){ //check geolocation available 
	// 	//try to get user current location using getCurrentPosition() method
	// 	navigator.geolocation.getCurrentPosition(function(position){ 
	// 			console.log("Found your location <br />Lat : "+position.coords.latitude+" </br>Lang :"+ position.coords.longitude);
	// 		});
	// }else{
	// 	console.log("Browser doesn't support geolocation!");
    // }
    
    // === APP NAV ===
    $('.app_nav_ico').click(function(){
        $('.app_nav_ico').removeClass('nav_active');
        $(this).addClass('nav_active');
    });

    // Go Home
    function goHome(){
        $('.set_sc').addClass('hidebx');
        $('.home_screen').removeClass('hidebx');
        $('.home_screen').removeClass('slideLeftReturn');
        $('.home_screen').addClass('slideLeftReturn');

        $('.app_nav_ico').removeClass('nav_active');
        $('.app_nav_ico:eq(0)').addClass('nav_active');
    }

    /* home screen */
    $('.app_nav_ico:eq(0)').click(function(){
        goHome();
    });

    $('.back_home').click(function(){
        goHome();
    });

    $('.back').click(function(){
        goHome();
    });

    /* last test screen */
    $('.app_nav_ico:eq(1)').click(function(){
        $('.set_sc').addClass('hidebx');
        $('.test_results_screen').removeClass('hidebx');
        $('.test_results_screen').removeClass('slideDownReturn');
        $('.test_results_screen').addClass('slideDownReturn');
    });

    /* reports screen */
    $('.app_nav_ico:eq(2)').click(function(){
        $('.set_sc').addClass('hidebx');
        $('.records_screen').removeClass('hidebx');
        $('.records_screen').removeClass('slideRightReturn');
        $('.records_screen').addClass('slideRightReturn');
    });

    // === END OF APP NAV ===


    // === PREVIEW IMAGE ===
    function readURL(input, imgId) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $(imgId).attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $('input[name=imgupload]').on('change', function(){
        readURL(this, '#xray_id');
    });
    // === END OF PREVIEW IMAGE ===

});