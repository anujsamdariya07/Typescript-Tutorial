interface _TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class _Instagram implements _TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class _Youtube implements _TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}
  createStory(): void {
    console.log('Creating a story on YouTube');
  }
}
