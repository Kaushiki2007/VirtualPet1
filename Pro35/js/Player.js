class Player {
    constructor(){
        this.index = null;
        this.name = null;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({  
          playerCount: count
        });
      }
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }

}

