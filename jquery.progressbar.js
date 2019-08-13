

var ProgressBar = function(settings) {
    var self = this;

    self.element = settings.element;
    self.imageUrl = settings.imageUrl;
    self.imageHeight = settings.imageHeight;

    $(self.element).prepend($('<div>',{ class:'progress-bar' }));
    $(self.element).children('.progress-bar').prepend($('<div>',{ class:'pb-background' }));
    $(self.element).children('.progress-bar').prepend($('<div>',{ class:'pb-progress' }));
    $(self.element).find('.pb-background').prepend($('<img/>',{ class:'background-image',src:settings.imageUrl }));
    $(self.element).find('.pb-progress').prepend($('<img/>',{ class:'progress-image',src:settings.imageUrl }));

    self.SetPercentage = function(value) {
        if(value > 100) value = 100;
        if(value < 0) value = 0;
        var toShowAmount = (settings.imageHeight / 100) * value;
        var toHideAmount = 100 - toShowAmount;
        $(self.element).find('.pb-progress').height(toShowAmount).css({ top: toHideAmount+'px' });
    };
}

$.fn.progressBar = function(settings) {
    
    settings.element = $(this);
    var newProgressBar = ProgressBar(settings)
    return newProgressBar;
    
    var gauge = $(this);
    $(this).addClass('gauge');
    // add the images we need; a background and a pointer
    $(this).prepend($('<img>',{class:'pointer',src:'images/'+pointerImage+'.png', style:'top:'+pointerVerticalOffset+';', alt:'gauge pointer'}))
    $(this).prepend($('<img>',{class:'backing',src:'images/'+backingImage+'.png', alt:'gauge background'}))
    // animate the pointer from 0 to the target angle, then start it twitching


};