$(function(){
  //Start
  const fname = $('#fname').val();
  const mname = $('#mname').val();
  const lname = $('#lname').val();
  const email = $('#email').val();
  const phone = $('#phone').val();
  const user = $('#user').val();
  const pswd = $('#pswd').val();
  const rpswd = $('#rpswd').val();

  const alp_pattern = /^[a-zA-Z]*$/;

//Fname
//   let  Fname = (xinput)=>{
//     if(fname.length == 0 ){
//       $('#error_fname').text("enter the fname");
//       $("#fname").focus(()=>{
//         $('#error_fname').hide();
//       });
//       return false;
//     } else if(!fname.match(alp_pattern)){
//         $('#error_fname').text("mismatch error ");
//         $("#fname").focus(()=>{
//           $('#error_fname').hide();
//         });
//         return false;
//     }else if(!(fname.length >= 5 && fname.length <= 10)) {
//       $('#error_fname').text("fname must be between 10 and 20 character long");
//       $("#fname").focus(()=>{
//           $('#error_fname').hide();
//       });
//       return false;
//     }
//
//
//
//
// //Mname
//     const Mname = ()=>{
//       if(mname.length == 0 ){
//         $('#error_mname').text("enter the mname");
//         $("#mname").focus(()=>{
//           $('#error_mname').hide();
//         });
//         return false;
//       } else if(!mname.match(alp_pattern)){
//           $('#error_mname').text("mismatch error ");
//           $("#mname").focus(()=>{
//             $('#error_mname').hide();
//           });
//           return false;
//       }else if(!(mname.length >= 5 && mname.length <= 10)) {
//         $('#error_mname').text("mname must be between 10 and 20 character long");
//         $("#mname").focus(()=>{
//             $('#error_mname').hide();
//         });
//         return false;
//       }
//   //Lname
//       const Lname = ()=>{
//         if(lname.length == 0 ){
//           $('#error_lname').text("enter the lname");
//           $("#lname").focus(()=>{
//             $('#error_lname').hide();
//           });
//           return false;
//         } else if(!lname.match(alp_pattern)){
//             $('#error_lname').text("mismatch error ");
//             $("#lname").focus(()=>{
//               $('#error_lname').hide();
//             });
//             return false;
//         }else if(!(lname.length >= 5 && lname.length <= 10)) {
//           $('#error_lname').text("lname must be between 10 and 20 character long");
//           $("#lname").focus(()=>{
//               $('#error_lname').hide();
//           });
//           return false;
//         }
//
//         $('#myForm').click((e)=>{
//           if(Fname()){
//             return false;
//           }
//
//         })




});
