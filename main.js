console.clear();

var doc = document;
var shapes = [];

var duration = .5;
var angle = '12deg';
var transformOrig = '45px 55px';
var ease = 'Power0.easeNone';

getShapes();

function getShapes() {
    var max = 4;

    for ( var i = 1; i <= max; i++ ) {
        var items = doc.querySelectorAll('.shape--' + i);
        shapes.push( items );
    }
}

function Elem ( item, i ) {
    this.elem = item;
    this.i = i;
    this.duration = duration * (i + 1);

    this.timeline = new TimelineLite({repeat:-1});
    this.anim = new Anim ( this.elem, this.duration );
};


function Anim ( elem, duration ) {

    var to1 = {
        transform:'rotate(0deg)',
        'transform-origin': transformOrig,
        ease: ease
    };
    var to2 = {
        transform:'rotate(-' + angle + ')',
        'transform-origin': transformOrig,
        ease: ease
    };
    var to3 = {
        transform:'rotate(' + angle + ')',
        'transform-origin': transformOrig,
        ease: ease,
        onComplete: forward
    };

    var timeline = new TimelineLite();

    forward();

    function forward() {
        timeline.to( elem, duration, to1 );
        timeline.to( elem, duration, to2 );
        timeline.to( elem, duration, to3 );
        timeline.to( elem, duration, to1 );
    }

};


for ( var i = 0; i < shapes.length; i++ ) {
    var elem = new Elem( shapes[i], i );
}