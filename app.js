class Kue {
    constructor(gula, berat, aksesoris) {
        this._bahan = "tepung";
        this._gula = gula;
        this._berat = berat;
        this._aksesoris = aksesoris;
    }

//getter bahan
    get bahan() {
        return this._bahan;
    }
//getter gula   
    get gula() {
        return this._gula;
    }
//getter berat
    get berat() {
        return this._berat;
    }
//getter aksesoris
    get aksesoris() {
        return this._aksesoris;
    }

// setter 
 
 // getter gula   
   set gula(value) {
       this._gula = value; 
   }

//aksesoris
   set aksesoris(value) {
       this._aksesoris = value;
   }

   set berat(value) {
       this._berat = value;
   }

}

class kuePutu extends Kue {
    constructor(gulaLevel, ...args) {
        super(...args);
        this._gulaLevel = gulaLevel;
    }

    get gulaLevel() {
        return this._gulaLevel;
    } 
    
    // setter gula level 
    set gulaLevel(value) {
        this._gula = value; 
    }
}

class kueKetawa extends Kue {
    constructor(...args) {
        super(...args);
        this._bahan = ['tepung', 'telur']
    } 
}


class KueCubit extends Kue{
    constructor(...args) {
        super(... args);
        this._bahan = ['tepung', 'telur']
    }

}

const kuePutu1 = new kuePutu (20, "gula arent", "daun pisan", 10);
console.log(kuePutu1);

const kueCubit1 = new KueCubit (20, "gula pasir", "seres", 10);
console.log(kueCubit1);

const kuetawa = new kueKetawa (20, "gula pasir", "wijen", 10);
console.log(kuetawa);
