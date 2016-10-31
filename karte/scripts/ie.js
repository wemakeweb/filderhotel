// JavaScript Document
  // this will iterate with each element with the class 'ie-fix-opacity' and add an IE filter,
  
      // replacing the background-image for the filter of that image
  
      var version = parseFloat(navigator.appVersion.split('MSIE')[1]);
  
      if ((version >= 5.5) && (version < 7) && (document.body.filters)) {
  
      $('.ie-fix-opacity').each(function(poElement){
 
      // if IE5.5+ on win32, then display PNGs with AlphaImageLoader
 
      var cBGImg = poElement.currentStyle.backgroundImage;
 
      var cImage = cBGImg.substring(cBGImg.indexOf('"') + 1, cBGImg.lastIndexOf('"'));
  
       
  
      poElement.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + cImage + "', sizingMethod='scale')";
 
      poElement.style.backgroundImage = "none";
 
      });
  
      }