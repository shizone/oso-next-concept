var header = new Vue({
  el: '#header',
  data: {
    showMenu: true,
    menus: [
             {text: 'タイムテーブル', url: 'timetable.html'},
             {text: 'よくあるご質問', url: 'faq.html'},
             {text: 'スポンサー', url: 'sponsor.html'},
             {text: '実行委員会', url: 'staff.html'},
             {text: '過去の開催実績', url: 'past.html'}
           ]
  }
})