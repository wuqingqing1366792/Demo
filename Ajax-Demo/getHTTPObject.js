/**
 * Created by a on 2017/5/22.
 */
function getHTTPObject(){
    if(typeof XMLHttpRequest == "undefined"){
        XMLHttpRequest = function(){
            try{
                return new ActiveXobject("Msxl2.XMLHTTP.6.0");
            }catch(e){

            }
            try{
                return new ActiveXobject("Msxl2.XMLHTTP.3.0");
            }catch(e){

            }
            try{
                return new ActiveXobject("Msxl2.XMLHTTP");
            }catch(e){

            }
            return false;
        }
    }
    return new XMLHttpRequest();
}