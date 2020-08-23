function t868_setHeight(recid){var rec=$('#rec'+recid);var div=rec.find('.t868__video-carier');var height=div.width()*0.5625;div.height(height);div.parent().height(height)}
function t868_initPopup(recid){var rec=$('#rec'+recid);$('#rec'+recid).attr('data-animationappear','off');$('#rec'+recid).css('opacity','1');var el=$('#rec'+recid).find('.t-popup');var hook=el.attr('data-tooltip-hook');var analitics=el.attr('data-track-popup');var customCodeHTML=t868__readCustomCode(rec);if(hook!==''){$('.r').on('click','a[href="'+hook+'"]',function(e){t868_showPopup(recid,customCodeHTML);t868_resizePopup(recid);e.preventDefault();if(analitics>''){var virtTitle=hook;if(virtTitle.substring(0,7)=='#popup:'){virtTitle=virtTitle.substring(7)}
Tilda.sendEventToStatistics(analitics,virtTitle)}})}}
function t868__readCustomCode(rec){var customCode=rec.find('.t868 .t868__code-wrap').html();rec.find('.t868 .t868__code-wrap').remove();return customCode}
function t868_showPopup(recid,customCodeHTML){var rec=$('#rec'+recid);var popup=rec.find('.t-popup');var popupContainer=rec.find('.t-popup__container');popupContainer.append(customCodeHTML);popup.css('display','block');t868_setHeight(recid);setTimeout(function(){popup.find('.t-popup__container').addClass('t-popup__container-animated');popup.addClass('t-popup_show')},50);$('body').addClass('t-body_popupshowed');rec.find('.t-popup').mousedown(function(e){if(e.target==this){t868_closePopup(recid)}});rec.find('.t-popup__close').click(function(e){t868_closePopup(recid)});rec.find('a[href*=#]').click(function(e){var url=$(this).attr('href');if(url.indexOf('#order')!=-1){var popupContainer=rec.find('.t-popup__container');setTimeout(function(){popupContainer.empty()},600)}
if(!url||url.substring(0,7)!='#price:'){t868_closePopup();if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){$('body').addClass('t-body_popupshowed')},300)}}});$(document).keydown(function(e){if(e.keyCode==27){t868_closePopup(recid)}})}
function t868_closePopup(recid){var rec=$('#rec'+recid);var popup=rec.find('.t-popup');var popupContainer=rec.find('.t-popup__container');$('body').removeClass('t-body_popupshowed');$('#rec'+recid+' .t-popup').removeClass('t-popup_show');popupContainer.empty();setTimeout(function(){$('.t-popup').not('.t-popup_show').css('display','none')},300)}
function t868_resizePopup(recid){var rec=$('#rec'+recid);var div=rec.find('.t-popup__container').height();var win=$(window).height();var popup=rec.find('.t-popup__container');if(div>win){popup.addClass('t-popup__container-static')}else{popup.removeClass('t-popup__container-static')}}
function t868_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)=='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(ga){if(window.mainTracker!='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}