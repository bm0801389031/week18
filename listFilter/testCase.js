describe("Tests", () => {
    it("test", () => {
  Test.assertSimilar(filter_list([1,2,'a','b']),[1,2])
  Test.assertSimilar(filter_list([1,'a','b',0,15]),[1,0,15])
  Test.assertSimilar(filter_list([1,2,'aasf','1','123',123]),[1,2,123])
  Test.assertSimilar(filter_list(['a','b','1']),[])
  Test.assertSimilar(filter_list([1,2,'a','b']),[1,2])
    });
  });