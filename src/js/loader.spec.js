describe('Hippo plugins Loader', function() {
  var result = hippoLoader.filenameFromPath('my-path/file.ext');

  describe('filenameFromPath()', function() {
    it('should return `file.ext` for `my-path/file.ext`', function() {
      expect(result).toBe('file.ext');
    });
  });
});