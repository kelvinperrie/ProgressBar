var ProgressBar = function(settings) {
    var self = this;

    self.element = settings.element;
    self.imageUrl = settings.imageUrl;
    self.backgroundImageUrl = settings.backgroundImageUrl || settings.imageUrl;
    self.imageHeight = settings.imageHeight;
    self.imageWidth = settings.imageWidth;
    if (settings.backgroundOpacity || settings.backgroundOpacity === 0) {
        self.backgroundOpacity = settings.backgroundOpacity;
    } else {
        self.backgroundOpacity = .3;
    }

    $(self.element).prepend($('<div>', { class: 'progress-bar', style: 'height: ' + self.imageHeight + 'px; width: ' + self.imageHeight + 'px;' }));
    $(self.element).children('.progress-bar').prepend($('<div>', { class: 'pb-progress' }));
    $(self.element).children('.progress-bar').prepend($('<div>', { class: 'pb-background' }));
    $(self.element).find('.pb-background').prepend($('<img/>', { style: 'opacity: ' + self.backgroundOpacity + ';', class: 'background-image', src: self.backgroundImageUrl }));
    $(self.element).find('.pb-progress').prepend($('<img/>', { class: 'progress-image', src: self.imageUrl }));

    self.SetPercentage = function(value) {
        if (value > 100) value = 100;
        if (value < 0) value = 0;
        var toShowAmount = (settings.imageHeight / 100) * value;
        var toHideAmount = (settings.imageHeight / 100) * (100 - value);
        $(self.element).find('.pb-progress').height(toShowAmount).css({ top: toHideAmount + 'px' });
    };
}

$.fn.progressBar = function(settings) {

    settings.element = $(this);
    var newProgressBar = new ProgressBar(settings)
    return newProgressBar;

};