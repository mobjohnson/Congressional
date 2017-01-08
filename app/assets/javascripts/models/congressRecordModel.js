App.CongressRecordModel = Backbone.Model.extend({

  //  test

  // http://capitolwords.org/api/1/dates.json?phrase=health&state=CA&start_date= 2013-10-31&end_date=2014-11-01&granularity=month&apikey=3fdb489020354ae7b4e1a1bf75b4a279

  url: function(){
    return "//capitolwords.org/api/1/dates.json?phrase=" + this.phrase + "&state=" + this.state + "&start_date= 2011-01&end_date=2015-02&granularity=month&apikey=3fdb489020354ae7b4e1a1bf75b4a279"
  },

  initialize: function(params){
    if (params.phrase != undefined){
      this.phrase = params.phrase;
      this.state = params.state;
      console.log('congressRecordModel (#initialize) this.phrase: ', this.phrase);   
      console.log('congressRecordModel (#initialize) this.state: ', this.state);
      console.log('congressRecordModel (#initialize) this:', this);

      // do fetch
      // The Capitol Words API shut down in February 2016. Although some of this API's functionality
      // was trasfered to the GovTrack API, the detailed info provided by this API no longer exists
      // if (this.phrase){
      //   this.fetch({
      //     success: function(data){
      //       console.log('Beginning of congressRecordModel fetch');
      //       console.log('congressRecordModel (#initialize/this.fetch/#success data:', data);
      //       console.log('congressRecordModel (#initialize/this.fetch/#success this:', this);

      //       // set recordCounts to array of Congress Records matching criteria.
      //       // recordCounts includes both numbers of records and  the months.
      //       this.recordCounts = data.attributes.results;
      //       console.log('congressRecordModel (initialize/this.fetch/#success data.attributes.results: ', this.recordCounts);
      //     }
      //   });
      // }

      var results = [];
      var result = {};
      var year = "2016";
      var month = 1;
      for(var i=1; i < 10; i++){
        result.month = year + "-" + i.toString();
        result.count = Math.random() * 25;
        results = results.concat(result);
      }
      console.log('votes results ', results);
      this.recordCounts = results;
      this.set("results", results);
      // this.recordCounts.attributes = results;
                              
      console.log('post fetch congressRecordModel (#initialize) this:', this);
    }  
  }

});