randomStory();
    document.getElementById('generateRandom').addEventListener('click', () => {
        randomStories();
})

function randomStory(){
    fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey")
        .then((response) => response.json())
        .then(data =>{
            
        })
}

var app = {
    nyTimes: [],
  
    initialize: function () {
      app.getNYTimesData();
    },

    makeHTML: function () {
      var theHTML = '';
      for (var i = 0; i < app.nyTimes.length; i++) {
        theHTML += "<div class='nytStories'>";
        theHTML += '<h3>' + app.nyTimes[i].headline.main + '</h3>';
        theHTML += '</div>';
      }
      $('.container').html(theHTML);
    },
  
    getNYTimesData: function () {
      console.log('Get NY Times Data');
      var currentSearchWord = 'biden';
      var nyTimesURL =
        'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey' +
        currentSearchWord +
        '&page=0&sort=newest&api-key=';
      var myNYKey = 'daAWQ5ySKaPXFeKGzY5wbvEY9DCVp2i2';
      var nyTimesReqURL = nyTimesURL + myNYKey;
      console.log(nyTimesReqURL);
      fetch(nyTimesReqURL)
        .then(response => response.json())
        .then(data => {
          // debugger;
          app.nyTimes = data.response.docs;
          console.log(app.nyTimes);
          app.makeHTML();
        })
        .catch(error => console.log(error));
    },
  };