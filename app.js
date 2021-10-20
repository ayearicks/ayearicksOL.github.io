document.addEventListener('DOMContentLoaded', function(o,t,h,e,r,l,v){!o[e]&&(o.OtherLevelsObject=e,l=o[e]=function(){l.q?l.q.push(arguments):l.apply(l,arguments)},l.q=[],v=t.createElement(h),v.async=!0,v.src=r,t=t.getElementsByTagName(h)[0],t.parentNode.insertBefore(v,t))}(window,document,"script","_ol","https://cdn.otherlevels.com/js-sdk/otherlevels.js?appKey=52743aad3f76c8e777e5c44bba0870ec"));

var options = {
    appName: 'portfolio tracking id',
    logLevel: 1,
    onError: function(err) {
        console.error('Something wrong happened', err.message);
    }
};


_ol('create', '52743aad3f76c8e777e5c44bba0870ec', options, function(){

    _ol('setTrackingId', 'NewTrackingID', function(){
        console.log('Tracking ID Updated');
    });

    _ol('getTrackingId', function(val) {
        ol_tid = val;
        console.log('Tracking ID is ' + ol_tid);
    })

}); 
