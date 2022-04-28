export class allNews{
    _id:string;
    image:Array<{}>;
    title:string
    description:string;
    categories:string;
    constructor(details:any){
        this._id =details._id || '';
        this.image=details.image || [];
        this.title =details.title || "";
        this.description = details.description || '';
        this.categories = details.categories || '';


    }
}