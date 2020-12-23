function removeString(str,checkstr)
{
    a=str.substring(0,checkstr);
    b=str.substring(checkstr+1,str.length);
    return(a+b);
} 
var str=prompt('Enter a string '); 
var checkstr=prompt('Enter the index to removed ');
document.write(removeString(str,checkstr));