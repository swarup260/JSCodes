$(function(){
  $('#submit').click(function(e){
      const name = $("#name").val();
      const email = $("#email").val();
      const phone = $("#phone").val();
      const gender = $("input[name=gender]:checked");
      const pswd = $("#pswd").val();
      const rpswd = $("#rpswd").val();
      const select_cat = $("#categ").val();
      alert(select_cat);
      const check = $('input[type=checkbox]:checked');


      const namepattern = /^[a-zA-Z]+$/;
      const emailpattern =/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
      const pwsdpattern = /^\d{4,8}\#$/;

      if(name.length == 0 ){
        $('#error_name').text("enter the name");
        $("#name").focus(()=>{
          $('#error_name').hide();
        });
        return false;
      } else if(!name.match(namepattern)){
          $('#error_name').text("mismatch error ");
          $("#name").focus(()=>{
            $('#error_name').hide();
          });
          return false;
      }else if(!(name.length >= 10 && name.length <= 20)) {
        $('#error_name').text("name must be between 10 and 20 character long");
        $("#name").focus(()=>{
            $('#error_name').hide();
        });
        return false;
      }/* Email */
      else if (email.length == 0) {
        $('#error_email').text("must enter email");
        $("#email").focus(()=>{
          $('#error_email').hide();
        });
        return false;
      }
      else if (!email.match(emailpattern)) {
        $('#error_email').text("mismatch error@gmail.com Eg. john ");
        $("#email").focus(()=>{
          $('#error_email').hide();
        });
        return false;
      }/* phone */
      else if(phone.length == 0){
        $('#error_phone').text("must enter phone ");
        $("#phone").focus(()=>{
          $('#error_phone').hide();
        });
        return false;
      }
      else if(isNaN(phone)){
        $('#error_phone').text("must be no.");
        $("#phone").focus(()=>{
          $('#error_phone').hide();
        });
        return false;
      }
      else if (!(phone.length >= 10 && phone.length <= 15)) {
        $('#error_phone').text("must be 10 to 15 number long");
        $("#phone").focus(()=>{
          $('#error_phone').hide();
        }
        );
        return false;
      }else if (gender.length == 0) {
        $('#error_gender').text('Please select something!');
        $('#m').focus(()=>{
          $('#error_gender').hide();
        });
        $('#f').focus(()=>{
          $('#error_gender').hide();
        });
        return false;
    }else if(pswd.length == 0 || !(pswd.length >= 8 && pswd.length <= 15 )){
      $('#error_pswd').text("enter password and must be between 8 -15 ");
      $("#pswd").focus();
      return false;
    }else if(rpswd.length == 0){
      $('#error_rpswd').text("enter password");
      $("#rpswd").focus();
      return false;
    }
    else if(pswd !== rpswd){
      alert("mismatch error");
      $("#rpswd").focus();
      return false;
    }else if (select_cat === "") {
      $('#error_cat').text("please select option");
      $("#categ").focus();
      return false;

    }else if(check.length){
      alert(check.length);
      $('#error_mail').text("please select option");
      check.focus();
      return false;
    }
      else{
        alert("form fill");
        return true;
      }


    }/* End of function */
  );


});
