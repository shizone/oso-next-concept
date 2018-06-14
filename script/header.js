var header = new Vue({
  el: '#header',
  data: {
    menus: [
             {text: 'タイムテーブル', url: 'timetable.html'},
             {text: 'よくあるご質問', url: 'faq.html'},
             {text: 'スポンサー', url: 'sponsor.html'},
             {text: '実行委員会', url: 'staff.html'},
             {text: '過去の開催実績', url: 'past.html'}
           ]
  },
  mounted: function () {
    this.$nextTick(function () {
      $(window).resize(resize);
      resize();
    })
  }
})

function resize() {
  var win = $(window).width();
  var p = 765
  if(win > p){
    $("#menus").show();
  } else {
    $("#menus").hide();
  }
}

function toggleCanvas(){
  $("#menus").slideToggle();
}
