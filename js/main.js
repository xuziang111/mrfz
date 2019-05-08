(function(){
var vm = new Vue({
    el:'main',
    data:{
        item:{
           needa1:0,
           needa2:0,
           needa3:0,
           needb1:0,
           needb2:0,
           needb3:0,
           needb4:0,
           needb5:0,
           needb6:0,
           needb7:0,
           needb8:0,
           needb9:0,
           needb10:0,
           needc1:0,
           needc2:0,
           needc3:0,
           needc4:0,
           needc5:0,
           needc6:0,
           needc7:0,
           needc8:0,
           needc9:0,
           needc10:0,
        }
    },
    computed:{
        resultb1: function () {
            
            return this.item.needa2*2 + this.item.needb1
          },
          resultb2: function () {
            
            return this.item.needa1 + this.item.needb2
          },
          resultb3: function () {
            
            return this.item.needa1 + this.item.needb3
          },
          resultb4: function () {
            
            return this.item.needa1 + this.item.needb4
          },
          resultb5: function () {
            
            return this.item.needa3 + this.item.needb5
          },
          resultb6: function () {
            
            return this.item.needa2 + this.item.needb6
          },
          resultb7: function () {
            
            return this.item.needb7
          },
          resultb8: function () {
            
            return this.item.needb8
          },
          resultb9: function () {
            
            return this.item.needa3 + this.item.needb9
          },
          resultb10: function () {
            
            return this.item.needa3 + this.item.needb10
          },


          //第三行
          resultc1: function () {
            return this.resultb1 + this.resultb3 + this.resultb7
          },
          resultc2: function () {
            return this.resultb2 +  this.resultb6
          },
          resultc3: function () {
            return this.resultb3*2 + this.resultb8 + this.resultb10
          },
          resultc4: function () {
            return this.resultb1 + this.resultb4
          },
          resultc5: function () {
            return this.resultb4*2 + this.resultb5*4 + this.resultb6*2
          },
          resultc6: function () {
            return this.resultb2 + this.resultb6 + this.resultb9
          },
          resultc7: function () {
            return this.resultb3 + this.resultb7*2 + this.resultb9
          },
          resultc8: function () {
            return this.resultb1 + this.resultb8*2 + this.resultb10
          },
          resultc9: function () {
            return this.resultb2 + this.resultb8 + this.resultb9*2
          },
          resultc10: function () {
            return this.resultb4 + this.resultb7 + this.resultb10*2
          },
    }
})





}())