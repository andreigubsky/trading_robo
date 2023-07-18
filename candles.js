var Candle = new Object();

var cur_open;
var cur_close;
var cur_max;
var cur_min;

var body;
var up_shadow;
var down_shadow;
var type;

var width;
var scale;
var time_range;
var big_black_candle,
	big_white_candle,
	dodjy,
	dodjy_dragonfly,
	gallows_white,
	gallows_black,
	hammer_white,
	hammer_black,
	skinhead_white,
	skinhead_black,
	shooting_star_white,
	shooting_star_black;

var patterns = [
	big_black_candle,
	big_white_candle,
	dodjy,
	dodjy_dragonfly,
	gallows_white,
	gallows_black,
	hammer_white,
	hammer_black,
	skinhead_white,
	skinhead_black,
	shooting_star_white,
	shooting_star_black
]


if (cur_open > cur_close) {
	Candle.type = "Бычья свеча";
} else
	Candle.type = "Медвежья свеча";

var myCandle = {
  cur_open: 40,
  cur_close: 50,
  cur_max: 60,
  cur_min: 30,
  body: {
    width: 5,
    size: 2
  },
  time_range:{
	min: 15,
	hour: 1,
	day: 3
  }
};

function showCandle(){
	//console.log(myCandle);
}