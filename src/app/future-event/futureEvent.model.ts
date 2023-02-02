export class FutureEvent{
    constructor(
      public title:string,
      public subject:string,
      public id:BigInteger,
      public description:string,
      public orderId:BigInteger,
      public photoUrl:string,
      public status:boolean,
      public buttonUrl:string,
      public videoUrl:string,
      public bigDescription:string,
      public date:string
    ) {}
  }