 var  regexzip=/\d\d\d\d\d/;
 var regexemail=/\b\w+@\w+\.[a-z]{2,4}\b/;
 var regexpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/	; 
var regexuserid=/^\b(?=.*\d)(?=.*[a-z]).{5,16}$\b/; 
function userVal()
{
         if( document.myForm.userid.value.match(regexuserid))
         {
            
           // return false;
		   document.getElementById("ui").innerHTML=" ";
         }
		 else{
		 document.getElementById("ui").innerHTML="please provide a valid user id a having 5-16 charcters and atleast 1 digit." ;
            document.myForm.userid.focus() ;
		 }
}
function passVal()
{
 if( document.myForm.passid.value.match(regexpass) )
         {
           
            //return false;
			 document.getElementById("pi").innerHTML=" ";
         }
		 else
		 {
		 document.getElementById("pi").innerHTML="please provide your password. A valid password should br alphanumeric and should have length 8." ;
            document.myForm.passid.focus() ;
		 }
}
function nameVal()
{  if( document.myForm.Name.value == "" )
         {
		 document.getElementById("name").innerHTML="please provide your name." 
            document.myForm.Name.focus() ;
            //return false;
         }
		 else
		 {
		 document.getElementById("name").innerHTML="";
		 }
}
function addrVal()
{
  if( document.myForm.Address.value == "" )
         {
           document.getElementById("adr").innerHTML="please provide your address." 
            document.myForm.Address.focus() ;
            //return false;
         }
		 else {
		 document.getElementById("adr").innerHTML="";
		 }
}

function zipVal()
{if( document.myForm.zip.value.match(regexzip )&& document.myForm.zip.value.length==5 )
		 { 
             document.getElementById("zip").innerHTML="";
         }
		 else{
		 document.getElementById("zip").innerHTML="please provide a valid zip code." ;
            document.myForm.email.focus() ;
           //return false;
			}
}
function emailVal()
{ if( document.myForm.email.value.match(regexemail) )
         { 
         document.getElementById("email").innerHTML="";	 
		 }
		 else
		 {
            document.getElementById("email").innerHTML="please provide a valid email id." ;
            document.myForm.email.focus() ;
           // return false;
         }
}




   
      // Form validation code will come here.
      function validate()
      { var  regexzip=/\d\d\d\d\d/;
	  var regexemail=/\b\w+@\w+\.[a-z]{2,4}\b/;
	  var regexpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/	; 
      var regexuserid=/\b\w{5,16}\b/;   
	  
   if( document.myForm.userid.value.match(regexuserid))
         {
            
           // return false;
		   document.getElementById("ui").innerHTML=" ";
         }
		 else{
		 document.getElementById("ui").innerHTML="please provide your user id." ;
            document.myForm.userid.focus() ;
		 }

        if( document.myForm.passid.value.match(regexpass) )
         {
           
            //return false;
			 document.getElementById("pi").innerHTML=" ";
         }
		 else
		 {
		 document.getElementById("pi").innerHTML="please provide your password. A valid password should br alphanumeric and should have length 8." ;
            document.myForm.passid.focus() ;
		 }
    if( document.myForm.Name.value == "" )
         {
		 document.getElementById("name").innerHTML="please provide your name." 
            document.myForm.Name.focus() ;
            return false;
         }
		 else
		 {
		 document.getElementById("name").innerHTML="";
		 }
           if( document.myForm.Address.value == "" )
         {
           document.getElementById("adr").innerHTML="please provide your address." 
            document.myForm.Address.focus() ;
            return false;
         }
		 else {
		 document.getElementById("adr").innerHTML="";
		 }
		   if( document.myForm.country.selectedIndex== 0)
         {
          document.getElementById("con").innerHTML="please provide your country." 
		  document.myForm.country.focus() ;
            return false;
         }
		 else
		 {
		 document.getElementById("con").innerHTML="";
		 }
          if( document.myForm.zip.value.match(regexzip )&& document.myForm.zip.value.length==5 )
		 { 
             document.getElementById("zip").innerHTML="";
         }
		 else{
		 document.getElementById("zip").innerHTML="please provide valid zip code." ;
            document.myForm.email.focus() ;
            return false;
			}
         if( document.myForm.email.value.match(regexemail) )
         { 
         document.getElementById("email").innerHTML="";	 }
		 else
		 {
            document.getElementById("email").innerHTML="please provide a valid email id." ;
            document.myForm.email.focus() ;
            return false;
         }
         if(document.getElementById("Male").checked==true || document.getElementById("Female").checked==true || document.getElementById("Other").checked==true )
		 { 
		 document.getElementById("sex").innerHTML="";
		 }
		else 
		{
		document.getElementById("sex").innerHTML="please provide your gender." ;
            
		return false;
		}
        
 
   	  
         
       
         return( true );
      }
   

 