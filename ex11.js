class Carti{
    constructor(gen, nume, autor, an){
        this.gen=gen;
        this.nume=nume;
        this.autor=autor;
        this.an=an;
        this.tara=this.tara;
        this.nrpag=this.nrpag;
    }

    afiseaza(){
        console.log("Genul cartii este ", this.gen, ", numele ei este ", this.nume, ", autorul cartii este ", this.autor, " iar anul de aparitie este", this.an);
    }
}

class Admin extends Carti{
    deleteCarti(carti, carte){
        return carti.filter(u=> u.nume != carte.nume)
    }
    
}

const carte1= new Carti("SF", "Asteroizii", "A.J", 2013);
const carte2=new Carti("roamnce", "Iubirea", "J.N.", 2000);
const carte3=new Carti("actiune", "Rapirea", "P.K.", 2020);
let admin=new Admin("politist", "Crima", "T.J.", "2025");

let carti=[carte1, carte2, carte3, admin];

carti=admin.deleteCarti(carti,carte1);
carti=admin.deleteCarti(carti, carte2);
console.log(carti);