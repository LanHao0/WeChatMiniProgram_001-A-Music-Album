// pages/AllAlbum/AllAlbum.js
Page({
  /**
   * 页面的初始数据
   */
  PickerBindChange:function(e){
    let json_data=this.data.json;
    if(e.detail.value==0){
      this.setData({
        json:json_data.sort(compareYear)
      });

    }else{
      console.log('else');
      this.setData({
        json: json_data.sort(compareAz)
      });
    }
    function compareYear(a,b){
      return a['year'] - b['year']
    }
    function compareAz(a, b) {
      let aa=a.albumName.substr(0,1);
      let bb = b.albumName.substr(0, 1);
      if(aa>bb){return 1}
      if(aa<bb){return -1}
      return 0
    }
    this.setData({
      index: e.detail.value
    });

  },
  data: {
    index:0,
    opt:['Year','A-Z'],
    soManyYears:[],
    json: [{
        "albumName": "Fires",
        "year": "2012",
        "artist": "Ronan Keating",
        "imgURL": "Fires.jpg",
        "song": [
          {
            "name": "Close Your Eyes",
            "artist": "Ronan Keating"
          }
        ]
      }, {
        "albumName": "For You",
        "year": "2014",
        "artist": "Selena Gomez",
        "imgURL": "ForYou.jpg",
        "song": [
          {
            "name": "Love You Like a Love Song",
            "artist": "Selena Gomez"
          }
        ]
      }, {
        "albumName": "Free Spirit",
        "year": "2019",
        "artist": "Khalid",
        "imgURL": "FreeSpirit.jpg",
        "song": [
          {
            "name": "Twenty One",
            "artist": "Khalid"
          },
          {
            "name": "Talk",
            "artist": "Khalid"
          },
          {
            "name": "Self",
            "artist": "Khalid"
          },
          {
            "name": "Right Back",
            "artist": "Khalid"
          },
          {
            "name": "Paradise",
            "artist": "Khalid"
          },
          {
            "name": "Outta My Head",
            "artist": "Khalid & John Mayer"
          },
          {
            "name": "My Bad",
            "artist": "Khalid"
          },
          {
            "name": "Intro",
            "artist": "Khalid"
          },
          {
            "name": "Hundred",
            "artist": "Khalid"
          },
          {
            "name": "Heaven",
            "artist": "Khalid"
          },
          {
            "name": "Free Spirit",
            "artist": "Khalid"
          },
          {
            "name": "Don't Pretend (feat. SAFE)",
            "artist": "Khalid"
          },
          {
            "name": "Bluffin'",
            "artist": "Khalid"
          },
          {
            "name": "Bad Luck",
            "artist": "Khalid"
          },
          {
            "name": "Alive",
            "artist": "Khalid"
          }
        ]
      }, {
        "albumName": "Ghost",
        "year": "2014",
        "artist": "Ella Henderson",
        "imgURL": "Ghost.jpg",
        "song": [
          {
            "name": "Ghost",
            "artist": "Ella Henderson"
          }
        ]
      }, {
        "albumName": "God Loves You When You\\'re Dancing",
        "year": "2013",
        "artist": "Vance Joy",
        "imgURL": "GodLovesYouWhenYoureDancing.jpg",
        "song": [
          {
            "name": "Riptide",
            "artist": "Vance Joy"
          }
        ]
      }, {
        "albumName": "Find You - Single",
        "year": "2017",
        "artist": "Nick Jonas",
        "imgURL": "FindYouSingle.jpg",
        "song": [
          {
            "name": "Find You",
            "artist": "Nick Jonas"
          }
        ]
      },{
        "albumName": "Memories...Do Not Open",
        "year": "2017",
        "artist": "The Chainsmokers & Coldplay",
        "imgURL": "MemoriesDoNotOpen.jpg",
        "song": [
          {
            "name": "Something Just Like This",
            "artist": "The Chainsmokers & Coldplay"
          }
        ]
      }, {
        "albumName": "My Dear Melancholy,",
        "year": "2018",
        "artist": "The Weeknd",
        "imgURL": "MyDearMelancholy.jpg",
        "song": [
          {
            "name": "Wasted Times",
            "artist": "The Weeknd"
          },
          {
            "name": "Try Me",
            "artist": "The Weeknd"
          },
          {
            "name": "Privilege",
            "artist": "The Weeknd"
          },
          {
            "name": "I Was Never There (feat. Gesaffelstein)",
            "artist": "The Weeknd"
          },
          {
            "name": "Hurt You (feat. Gesaffelstein)",
            "artist": "The Weeknd"
          },
          {
            "name": "Call Out My Name",
            "artist": "The Weeknd"
          }
        ]
      }, {
        "albumName": "Nick Jonas X2",
        "year": "2015",
        "artist": "Nick Jonas",
        "imgURL": "NickJonasX2.jpg",
        "song": [
          {
            "name": "Wilderness",
            "artist": "Nick Jonas"
          },
          {
            "name": "Warning",
            "artist": "Nick Jonas"
          },
          {
            "name": "Teacher (Young Bombs Remix Radio Edit)",
            "artist": "Nick Jonas"
          },
          {
            "name": "Teacher",
            "artist": "Nick Jonas"
          },
          {
            "name": "Take Over",
            "artist": "Nick Jonas"
          },
          {
            "name": "Santa Barbara",
            "artist": "Nick Jonas"
          },
          {
            "name": "Push",
            "artist": "Nick Jonas"
          },
          {
            "name": "Numb (feat. Angel Haze)",
            "artist": "Nick Jonas"
          },
          {
            "name": "Nothing Would Be Better",
            "artist": "Nick Jonas"
          },
          {
            "name": "Levels (Alex Ghenea Radio Edit)",
            "artist": "Nick Jonas"
          },
          {
            "name": "Levels",
            "artist": "Nick Jonas"
          },
          {
            "name": "Jealous (Remix) [feat. Tinash\u00e9]",
            "artist": "Nick Jonas"
          },
          {
            "name": "Jealous",
            "artist": "Nick Jonas"
          },
          {
            "name": "I Want You",
            "artist": "Nick Jonas"
          },
          {
            "name": "Good Thing (feat. Nick Jonas)",
            "artist": "Sage the Gemini"
          },
          {
            "name": "Closer (feat. Mike Posner)",
            "artist": "Nick Jonas"
          },
          {
            "name": "Chains (Remix) [feat. Jhen\u00e9 Aiko]",
            "artist": "Nick Jonas"
          },
          {
            "name": "Chains (Just a Gent Remix)",
            "artist": "Nick Jonas"
          },
          {
            "name": "Chains",
            "artist": "Nick Jonas"
          },
          {
            "name": "Avalanche (feat. Demi Lovato)",
            "artist": "Nick Jonas"
          },
          {
            "name": "Area Code",
            "artist": "Nick Jonas"
          }
        ]
      }, {
        "albumName": "Night Visions (Deluxe Version)",
        "year": "2013",
        "artist": "Imagine Dragons",
        "imgURL": "NightVisionsDeluxeVersion.jpg",
        "song": [
          {
            "name": "Hear Me",
            "artist": "Imagine Dragons"
          },
          {
            "name": "Every Night",
            "artist": "Imagine Dragons"
          }
        ]
      }, {
        "albumName": "Norman Fucking Rockwell!",
        "year": "2019",
        "artist": "Lana Del Rey",
        "imgURL": "NormanFuckingRockwell.jpg",
        "song": [
          {
            "name": "hope is a dangerous thing for a woman like me to have - but I have it",
            "artist": "Lana Del Rey"
          },
          {
            "name": "The greatest",
            "artist": "Lana Del Rey"
          },
          {
            "name": "The Next Best American Record",
            "artist": "Lana Del Rey"
          },
          {
            "name": "Norman fucking Rockwell",
            "artist": "Lana Del Rey"
          },
          {
            "name": "Love song",
            "artist": "Lana Del Rey"
          },
          {
            "name": "How to disappear",
            "artist": "Lana Del Rey"
          },
          {
            "name": "Happiness is a butterfly",
            "artist": "Lana Del Rey"
          },
          {
            "name": "Fuck it I love you",
            "artist": "Lana Del Rey"
          },
          {
            "name": "Doin' Time",
            "artist": "Lana Del Rey"
          },
          {
            "name": "Cinnamon Girl",
            "artist": "Lana Del Rey"
          },
          {
            "name": "California",
            "artist": "Lana Del Rey"
          },
          {
            "name": "Bartender",
            "artist": "Lana Del Rey"
          }
        ]
      }, {
        "albumName": "Ocean Eyes (Deluxe Edition)",
        "year": "2009",
        "artist": "Owl City",
        "imgURL": "OceanEyesDeluxeEdition.jpg",
        "song": [
          {
            "name": "The Saltwater Room",
            "artist": "Owl City"
          }
        ]
      },
    
    ]
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let data=this.data.json;
      let yearARR=[];
      for(let i=0;i<data.length;i++){
          if(yearARR.indexOf(data[i].year)==-1){
            yearARR.push(data[i].year)
          }
      }
      function desCompare(a,b){
        return b-a;
      }

      this.setData({
        soManyYears:yearARR.sort(desCompare),
        
      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})