var Me = function(name, age){
    this.name = name;
    this.age = age;
    console.log(this);
    this.fu = function(){
        setTimeout(() => {
                console.log(this) // 바로 바깥의 Me 에서 this를 받아옴, 일반 function 사용 시 window로 받아오기 때문에 차이가 발생.
                console.log(this.name + " 은 " + this.age + "살")
            }, 100);
    };
};
var me = new Me('park', 17);
me.fu();