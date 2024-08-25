abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime():  number {
    // SOme complex computation
    return 8;
  }

}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log('Sepia');
  }

  getReelTime(): number {
    return 7;
  }
}

const  photo = new Instagram('auto', 'none', 3);
photo.getReelTime()

// Need of classes, interfaces, abstract classes
