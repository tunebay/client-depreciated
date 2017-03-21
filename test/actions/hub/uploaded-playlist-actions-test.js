import { expect } from 'chai';


describe('Uploaded playlist actions', () => {
  describe('R()', () => {
    it('processes given tracks array', () => {
      const playlistTracks = [
        {
          name: 'Isn\'t she lovely',
          filename: 'Isn\'t she lovely version 2.m4a',
          duration: 164,
          playlistPosition: 1,
          isASingle: false,
          price: null,
          fileType: 'audio/x-m4a',
          location: 'path/to/file'
        },
        {
          name: '20140526 141817',
          filename: '20140526 141817.m4a',
          duration: 88,
          playlistPosition: 2,
          isASingle: false,
          price: 0.99,
          fileType: 'audio/x-m4a',
          location: 'path/to/file'
        },
        {
          name: 'Friday',
          filename: 'Friday.mp3',
          duration: 88,
          playlistPosition: 3,
          isASingle: true,
          price: 0.99,
          fileType: 'audio/x-m4a',
          location: 'path/to/file'
        }
      ];
    });
  });
});
