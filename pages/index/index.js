//index.js
//获取应用实例

var util = require('../../util.js')

Page({

  data: {
    weather: {}
  },
  onLoad: function () {
    
    var that = this;

    util.loadWeatherData(function(data){
      
      console.log(data);
      that.setData({
        weather: data
      });
      // that.data.weather = data;

    });    

  }

})
