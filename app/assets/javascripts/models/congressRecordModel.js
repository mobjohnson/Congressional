App.CongressRecordModel = Backbone.Model.extend({

  url: function(){
    return "//capitolwords.org/api/1/dates.json?phrase=" + this.phrase + "&bioguide_id=" + this.bioguideid + "&start_date= 2013-10-31&end_date=2014-11-01&granularity=month&apikey=3fdb489020354ae7b4e1a1bf75b4a279"
  },

  initialize: function(params){
    if (params.phrase != undefined){
      this.phrase = params.phrase;
      this.senatorName = params.senatorName;
      this.bioguideid = params.bioguideid;
      console.log('congressRecordModel (#initialize) this.phrase: ', this.phrase);   
      console.log('congressRecordModel (#initialize) this.senator_name: ', this.senatorName);
      console.log('congressRecordModel (#initialize) this.bioguideid: ', this.bioguideid);
      console.log('congressRecordModel (#initialize) this:', this);

      // do fetch
      if (this.phrase){
        this.fetch({
          success: function(data){
            console.log('Beginning of congressRecordModel fetch');
            console.log('congressRecordModel (#initialize/this.fetch/#success data:', data);
            console.log('congressRecordModel (#initialize/this.fetch/#success this:', this);

            // set recordCounts to array of Congress Records matching criteria.
            // recordCounts includes both numbers of records and  the months.
            this.recordCounts = data.attributes.results;
            console.log('congressRecordModel (initialize/this.fetch/#success data.attributes.results: ', this.recordCounts);
          }
        });
      }
                              
    console.log('post fetch congressRecordModel (#initialize) this:', this);
    }  
  }

});