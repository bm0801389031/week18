describe("Basic tests",function(){
    Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is")
    Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is")
    Test.assertEquals(DNAStrand("AAGG"),"TTCC", "String AAGG is")
    Test.assertEquals(DNAStrand("CGCG"),"GCGC", "String CGCG is")
    Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    Test.assertEquals(DNAStrand("GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA"),"CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT")
    })
    describe("Random tests",function(){
    base=["A","C","G","T"];
    function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a);}
    
    function DNASol(dna){
      res="";
      for (var nuc=0;nuc<dna.length;nuc++){
        if (dna[nuc]=="A") res+="T";
        else if (dna[nuc]=="T") res+="A";
        else if (dna[nuc]=="C") res+="G";
        else res+="C";
      }
      return res
    }
    
    for (var _=0;_<40;_++){
      testdna="";
      testlen=randint(5,30);
      for (var j=0;j<testlen;j++) testdna+=base[randint(0,3)]
      it("Testing for "+testdna,function(){
      Test.assertEquals(DNAStrand(testdna),DNASol(testdna),"It should work for random inputs too");
      })
    }
    })