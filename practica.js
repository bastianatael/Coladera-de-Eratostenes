class ColaderaDeEratostenes{
    criba(){
    var m = [];
    var mPrimos = [];

    for(let i = 0; i < 1000; i++ ){
        m[i] = 1;
    }

    for(var i = 2; i < m.length; i++){
            for (var j = i * i; j < m.length; j += i) {
                m[j] = 0;
            }
    }

    let indice = 0;
    for(let i = 0; i < m.length; i++){
        if(m.findIndex(indice => indice == 1) == i){
            mPrimos[indice++] = i;
            m[i] = 0;
        }
    }

    console.log(mPrimos)
    }
}
let app=new ColaderaDeEratostenes();
app.criba();